"! <p class="shorttext synchronized" lang="en">Framework customizing</p>
CLASS zcl_odata_fw_cust DEFINITION
  PUBLIC
  CREATE PUBLIC .

  PUBLIC SECTION.
    METHODS:
      "! <p class="shorttext synchronized" lang="en">Constructor</p>
      "!
      "! @parameter iv_namespace | <p class="shorttext synchronized" lang="en">OData namespace</p>
      "! @raising zcx_odata | <p class="shorttext synchronized" lang="en">Customizing error</p>
      constructor
        IMPORTING
          iv_namespace TYPE z_odata_namespace
        RAISING
          zcx_odata,
      "! <p class="shorttext synchronized" lang="en">Get namespace</p>
      "!
      "! @parameter rv_result | <p class="shorttext synchronized" lang="en">Namespace</p>
      get_namespace
        RETURNING
          VALUE(rv_result) TYPE z_odata_namespace,
      "! <p class="shorttext synchronized" lang="en">Get entities</p>
      "!
      "! @parameter rt_result | <p class="shorttext synchronized" lang="en">Entities</p>
      get_entities
        RETURNING
          VALUE(rt_result) TYPE zodata_entity_tt,
      "! <p class="shorttext synchronized" lang="en">Get properties</p>
      "!
      "! @parameter rt_result | <p class="shorttext synchronized" lang="en">Properties</p>
      get_properties
        RETURNING
          VALUE(rt_result) TYPE zodata_property_tt,
      "! <p class="shorttext synchronized" lang="en">Get property texts</p>
      "!
      "! @parameter rt_result | <p class="shorttext synchronized" lang="en">Property texts</p>
      get_property_texts
        RETURNING
          VALUE(rt_result) TYPE zodata_prop_txts_tt,
      "! <p class="shorttext synchronized" lang="en">Get navigations</p>
      "!
      "! @parameter rt_result | <p class="shorttext synchronized" lang="en">Navigations/ Associations</p>
      get_navigation
        RETURNING
          VALUE(rt_result) TYPE zodata_nav_tt,
      "! <p class="shorttext synchronized" lang="en">Get actions</p>
      "!
      "! @parameter rt_result | <p class="shorttext synchronized" lang="en">Actions/ function imports</p>
      get_actions
        RETURNING
          VALUE(rt_result) TYPE zodata_actions_tt,
      "! <p class="shorttext synchronized" lang="en">Get action parameters</p>
      "!
      "! @parameter rt_result | <p class="shorttext synchronized" lang="en">Action parameters</p>
      get_action_parameter
        RETURNING
          VALUE(rt_result) TYPE zodata_act_param_tt.
  PROTECTED SECTION.
  PRIVATE SECTION.
    DATA:
      mv_namespace        TYPE z_odata_namespace,
      mt_entities         TYPE zodata_entity_tt,
      mt_properties       TYPE zodata_property_tt,
      mt_property_texts   TYPE zodata_prop_txts_tt,
      mt_navigation       TYPE zodata_nav_tt,
      mt_search_helps     TYPE zodata_searchhlp_tt,
      mt_actions          TYPE zodata_actions_tt,
      mt_action_parameter TYPE zodata_act_param_tt.

    METHODS:
      "! <p class="shorttext synchronized" lang="en">Load customizing from DB</p>
      "!
      "! @raising zcx_odata | <p class="shorttext synchronized" lang="en">Failed to load customizing</p>
      load_customizing
        RAISING
          zcx_odata,
      "! <p class="shorttext synchronized" lang="en">Init searchhelps as seperate entities from customizing</p>
      "!
      init_search_help_cust_entities.

ENDCLASS.


CLASS zcl_odata_fw_cust IMPLEMENTATION.

  METHOD constructor.
    mv_namespace = iv_namespace.

    load_customizing( ).
  ENDMETHOD.


  METHOD load_customizing.
    DATA: lt_namespaces TYPE zodata_namespace_range.

    LOOP AT zcl_odata_fw_cust_dpc=>read_global_namespaces( ) ASSIGNING FIELD-SYMBOL(<ls_global_namespace>).
      CHECK <ls_global_namespace> <> mv_namespace.
      APPEND VALUE #( sign = 'I' option = 'EQ' low = <ls_global_namespace> ) TO lt_namespaces.
    ENDLOOP.

    APPEND VALUE #( sign = 'I' option = 'EQ' low = mv_namespace ) TO lt_namespaces.

    mt_entities = zcl_odata_fw_cust_dpc=>read_entities( lt_namespaces ).
    SORT me->mt_entities BY is_complex DESCENDING.

    mt_properties       = zcl_odata_fw_cust_dpc=>read_properties( lt_namespaces ).
    mt_property_texts   = zcl_odata_fw_cust_dpc=>read_property_texts( lt_namespaces ).
    mt_navigation       = zcl_odata_fw_cust_dpc=>read_navigations( lt_namespaces ).
    mt_search_helps     = zcl_odata_fw_cust_dpc=>read_search_helps( lt_namespaces ).
    mt_actions          = zcl_odata_fw_cust_dpc=>read_actions( lt_namespaces ).
    mt_action_parameter = zcl_odata_fw_cust_dpc=>read_action_parameters( lt_namespaces ).

    me->init_search_help_cust_entities( ).

  ENDMETHOD.

  METHOD init_search_help_cust_entities.
    DATA(lt_shelp_prop) = me->mt_properties.
    DELETE lt_shelp_prop WHERE search_help = space.
    SORT lt_shelp_prop BY search_help ASCENDING.
    DELETE ADJACENT DUPLICATES FROM lt_shelp_prop COMPARING search_help.

    CHECK lines( lt_shelp_prop ) <> 0.
    DATA(ls_entity) = mt_entities[ entity_name = zif_odata_constants=>gc_global_entities-value_help ].
    LOOP AT lt_shelp_prop ASSIGNING FIELD-SYMBOL(<ls_shelp>).
      ls_entity-entity_name = <ls_shelp>-search_help.
      APPEND ls_entity TO mt_entities.

      LOOP AT mt_properties INTO DATA(ls_prop)
        WHERE entity_name = zif_odata_constants=>gc_global_entities-value_help
          AND property_name <> zif_odata_constants=>gc_global_properties-value_help-search_field.
        ls_prop-entity_name = ls_entity-entity_name.
        APPEND ls_prop TO mt_properties.
      ENDLOOP.
    ENDLOOP.
  ENDMETHOD.

  METHOD get_namespace.
    rv_result = me->mv_namespace.
  ENDMETHOD.

  METHOD get_entities.
    rt_result = me->mt_entities.
  ENDMETHOD.

  METHOD get_properties.
    rt_result = me->mt_properties.
  ENDMETHOD.

  METHOD get_property_texts.
    rt_result = me->mt_property_texts.
  ENDMETHOD.

  METHOD get_navigation.
    rt_result = me->mt_navigation.
  ENDMETHOD.

  METHOD get_actions.
    rt_result = me->mt_actions.
  ENDMETHOD.

  METHOD get_action_parameter.
    rt_result = me->mt_action_parameter.
  ENDMETHOD.

ENDCLASS.
