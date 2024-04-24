"! <p class="shorttext synchronized">Framework customizing</p>
CLASS zcl_odata_fw_cust DEFINITION
  PUBLIC
  CREATE PUBLIC.

  PUBLIC SECTION.
    "! <p class="shorttext synchronized">Constructor</p>
    "!
    "! @parameter iv_namespace | <p class="shorttext synchronized">OData namespace</p>
    "! @raising   zcx_odata    | <p class="shorttext synchronized">Customizing error</p>
    METHODS constructor
      IMPORTING iv_namespace TYPE z_odata_namespace
      RAISING   zcx_odata.

    "! <p class="shorttext synchronized">Get namespace</p>
    "!
    "! @parameter rv_result | <p class="shorttext synchronized">Namespace</p>
    METHODS get_namespace
      RETURNING VALUE(rv_result) TYPE z_odata_namespace.

    "! <p class="shorttext synchronized">Get entities</p>
    "!
    "! @parameter rt_result | <p class="shorttext synchronized">Entities</p>
    METHODS get_entities
      RETURNING VALUE(rt_result) TYPE zodata_entity_tt.

    "! <p class="shorttext synchronized">Get properties</p>
    "!
    "! @parameter rt_result | <p class="shorttext synchronized">Properties</p>
    METHODS get_properties
      RETURNING VALUE(rt_result) TYPE zodata_property_tt.

    "! <p class="shorttext synchronized">Get property texts</p>
    "!
    "! @parameter rt_result | <p class="shorttext synchronized">Property texts</p>
    METHODS get_property_texts
      RETURNING VALUE(rt_result) TYPE zodata_prop_txts_tt.

    "! <p class="shorttext synchronized">Get navigations</p>
    "!
    "! @parameter rt_result | <p class="shorttext synchronized">Navigations/ Associations</p>
    METHODS get_navigation
      RETURNING VALUE(rt_result) TYPE zodata_nav_tt.

    "! <p class="shorttext synchronized">Get actions</p>
    "!
    "! @parameter rt_result | <p class="shorttext synchronized">Actions/ function imports</p>
    METHODS get_actions
      RETURNING VALUE(rt_result) TYPE zodata_actions_tt.

    "! <p class="shorttext synchronized">Get action parameters</p>
    "!
    "! @parameter rt_result | <p class="shorttext synchronized">Action parameters</p>
    METHODS get_action_parameter
      RETURNING VALUE(rt_result) TYPE zodata_act_param_tt.

  PROTECTED SECTION.

  PRIVATE SECTION.
    DATA mv_namespace        TYPE z_odata_namespace.
    DATA mt_entities         TYPE zodata_entity_tt.
    DATA mt_properties       TYPE zodata_property_tt.
    DATA mt_property_texts   TYPE zodata_prop_txts_tt.
    DATA mt_navigation       TYPE zodata_nav_tt.
    DATA mt_search_helps     TYPE zodata_searchhlp_tt.
    DATA mt_actions          TYPE zodata_actions_tt.
    DATA mt_action_parameter TYPE zodata_act_param_tt.

    "! <p class="shorttext synchronized">Load customizing from DB</p>
    "!
    "! @raising zcx_odata | <p class="shorttext synchronized">Failed to load customizing</p>
    METHODS load_customizing
      RAISING zcx_odata.

    "! <p class="shorttext synchronized">Init searchhelps as separate entities from customizing</p>
    "!
    METHODS init_search_help_cust_entities
      RAISING zcx_odata.

    "! <p class="shorttext synchronized">Add property texts for generic search helps</p>
    "! @parameter is_shelp | <p class="shorttext synchronized">Search help</p>
    "! @parameter is_prop  | <p class="shorttext synchronized">Property</p>
    METHODS add_property_text4shlp
      IMPORTING is_shelp TYPE zodata_property
                is_prop  TYPE zodata_property
      RAISING   zcx_odata.

ENDCLASS.


CLASS zcl_odata_fw_cust IMPLEMENTATION.
  METHOD constructor.
    mv_namespace = iv_namespace.

    load_customizing( ).
  ENDMETHOD.

  METHOD load_customizing.
    DATA lt_namespaces TYPE zodata_namespace_range.

    LOOP AT zcl_odata_fw_cust_dpc=>read_global_namespaces( ) ASSIGNING FIELD-SYMBOL(<ls_global_namespace>).
      IF <ls_global_namespace> = mv_namespace.
        CONTINUE.
      ENDIF.
      APPEND VALUE #( sign   = 'I'
                      option = 'EQ'
                      low    = <ls_global_namespace>-namespace ) TO lt_namespaces.
    ENDLOOP.

    APPEND VALUE #( sign   = 'I'
                    option = 'EQ'
                    low    = mv_namespace ) TO lt_namespaces.

    mt_entities = zcl_odata_fw_cust_dpc=>read_entities( lt_namespaces ).
    SORT me->mt_entities BY is_complex DESCENDING.

    mt_properties       = zcl_odata_fw_cust_dpc=>read_properties( lt_namespaces ).
    mt_property_texts   = zcl_odata_fw_cust_dpc=>read_property_texts( lt_namespaces ).
    mt_navigation       = zcl_odata_fw_cust_dpc=>read_navigations( lt_namespaces ).
    mt_search_helps     = zcl_odata_fw_cust_dpc=>read_search_helps( lt_namespaces ).
    mt_actions          = zcl_odata_fw_cust_dpc=>read_actions( lt_namespaces ).
    mt_action_parameter = zcl_odata_fw_cust_dpc=>read_action_parameters( lt_namespaces ).

    init_search_help_cust_entities( ).
  ENDMETHOD.

  METHOD init_search_help_cust_entities.
    TRY.
        DATA(lt_shelp_prop) = mt_properties.
        DELETE lt_shelp_prop WHERE search_help = space.
        SORT lt_shelp_prop BY search_help ASCENDING.
        DELETE ADJACENT DUPLICATES FROM lt_shelp_prop COMPARING search_help.

        IF lines( lt_shelp_prop ) = 0.
          RETURN.
        ENDIF.
        DATA(ls_entity) = mt_entities[ entity_name = zif_odata_constants=>gc_global_entities-value_help ].
        LOOP AT lt_shelp_prop ASSIGNING FIELD-SYMBOL(<ls_shelp>).
          ls_entity-entity_name = <ls_shelp>-search_help.
          IF line_exists( mt_entities[ entity_name = ls_entity-entity_name ] ).
            CONTINUE.
          ENDIF.
          APPEND ls_entity TO mt_entities.

          LOOP AT mt_properties INTO DATA(ls_prop)
               WHERE     entity_name    = zif_odata_constants=>gc_global_entities-value_help
                     AND property_name <> zif_odata_constants=>gc_global_properties-value_help-search_field.
            ls_prop-entity_name = ls_entity-entity_name.
            APPEND ls_prop TO mt_properties.

            add_property_text4shlp( is_shelp = <ls_shelp>
                                    is_prop  = ls_prop ).
          ENDLOOP.
        ENDLOOP.
      CATCH cx_sy_itab_line_not_found.

    ENDTRY.
  ENDMETHOD.

  METHOD add_property_text4shlp.
    DATA ls_prop_text LIKE LINE OF mt_property_texts.

    TRY.
        DATA(ls_search_help) = mt_search_helps[ id = is_shelp-search_help ].
        IF ls_search_help-tabname IS INITIAL.
          RETURN.
        ENDIF.

        IF ls_search_help-data_element IS INITIAL.
          " currently not supported
          RETURN. " automatic selection from the texttable with a table with only one key
        ENDIF.
        ls_prop_text = CORRESPONDING #( is_prop ).
        ls_prop_text-text_type   = 'L'.
        ls_prop_text-object_name = SWITCH #( is_prop-abap_name
                                             WHEN 'DESCRIPTION' THEN
                                               zcl_odata_utils=>get_data_element_from_tablecol(
                                                   iv_table_name = |{ ls_search_help-tabname }|
                                                   iv_column     = |{ ls_search_help-description_field }| )
                                             WHEN 'VALUE' THEN
                                               zcl_odata_utils=>get_data_element_from_tablecol(
                                                   iv_table_name = |{ ls_search_help-tabname }|
                                                   iv_column     = |{ ls_search_help-data_element }| ) ).
        APPEND ls_prop_text TO mt_property_texts.
        ls_prop_text-text_type = 'H'.
        APPEND ls_prop_text TO mt_property_texts.
      CATCH cx_sy_itab_line_not_found.
        RETURN.
    ENDTRY.
  ENDMETHOD.

  METHOD get_namespace.
    rv_result = mv_namespace.
  ENDMETHOD.

  METHOD get_entities.
    rt_result = mt_entities.
  ENDMETHOD.

  METHOD get_properties.
    rt_result = mt_properties.
  ENDMETHOD.

  METHOD get_property_texts.
    rt_result = mt_property_texts.
  ENDMETHOD.

  METHOD get_navigation.
    rt_result = mt_navigation.
  ENDMETHOD.

  METHOD get_actions.
    rt_result = mt_actions.
  ENDMETHOD.

  METHOD get_action_parameter.
    rt_result = mt_action_parameter.
  ENDMETHOD.
ENDCLASS.
