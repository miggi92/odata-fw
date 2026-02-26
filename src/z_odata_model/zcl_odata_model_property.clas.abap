"! <p class="shorttext synchronized">Model property</p>
CLASS zcl_odata_model_property DEFINITION
  PUBLIC
  INHERITING FROM zcl_odata_model
  CREATE PUBLIC.

  PUBLIC SECTION.
    TYPES:
      BEGIN OF gty_property,
        property   TYPE zodata_property-property_name,
        cmplx_type TYPE zodata_property-complex_type,
        instance   TYPE REF TO zcl_odata_model_property,
      END OF gty_property,
      gty_properties TYPE HASHED TABLE OF gty_property WITH UNIQUE KEY property cmplx_type.

    "! <p class="shorttext synchronized">Create property</p>
    "!
    "! @parameter io_entity                   | <p class="shorttext synchronized">Entity object</p>
    "! @parameter it_components               | <p class="shorttext synchronized">Structure components</p>
    "! @parameter is_property                 | <p class="shorttext synchronized">Property</p>
    "! @parameter is_entity                   | <p class="shorttext synchronized">Entity</p>
    "! @raising   /iwbep/cx_mgw_med_exception | <p class="shorttext synchronized">OData Error</p>
    "! @raising   zcx_odata                   | <p class="shorttext synchronized">OData FW Error</p>
    METHODS create_property
      IMPORTING io_entity           TYPE REF TO /iwbep/if_mgw_odata_entity_typ
                it_components       TYPE cl_abap_structdescr=>component_table
                is_property         TYPE zodata_property
                is_entity           TYPE zodata_entity
                io_ui_annotation    TYPE REF TO zcl_odata_annotation_ui
                io_odata_annotation TYPE REF TO zcl_odata_annotation_odata
      RAISING   /iwbep/cx_mgw_med_exception
                zcx_odata.

    "! <p class="shorttext synchronized">Get property type</p>
    "!
    "! @parameter ro_property | <p class="shorttext synchronized">Property object</p>
    METHODS get_property_type
      RETURNING VALUE(ro_property) TYPE REF TO /iwbep/if_mgw_odata_property.

  PROTECTED SECTION.
    DATA mo_property TYPE REF TO /iwbep/if_mgw_odata_property.

    "! <p class="shorttext synchronized">Define value help annotations</p>
    "! @parameter is_entity                   | <p class="shorttext synchronized">Entity</p>
    "! @parameter is_property                 | <p class="shorttext synchronized">Property</p>
    "! @raising   /iwbep/cx_mgw_med_exception | <p class="shorttext synchronized">Error</p>
    METHODS define_search_help_annotations
      IMPORTING is_entity   TYPE zodata_entity
                is_property TYPE zodata_property
      RAISING   /iwbep/cx_mgw_med_exception.

    "!  <p class="shorttext synchronized">Change edm types for specific fields</p>
    "! @parameter is_component | <p class="shorttext synchronized">Component</p>
    METHODS change_edm_types
      IMPORTING is_component TYPE abap_componentdescr.

  PRIVATE SECTION.

ENDCLASS.


CLASS zcl_odata_model_property IMPLEMENTATION.
  METHOD create_property.
    TRY.
        DATA(ls_component) = it_components[ name = is_property-abap_name ].
      CATCH cx_sy_itab_line_not_found INTO DATA(lo_error).
        RAISE EXCEPTION TYPE zcx_odata
          EXPORTING previous = lo_error
                    textid   = zcx_odata=>component_not_in_structure
                    value    = |{ is_property-abap_name }|
                    value2   = |{ is_entity-structure }|.
    ENDTRY.

    mo_property = io_entity->create_property( iv_property_name  = is_property-property_name
                                              iv_abap_fieldname = is_property-abap_name ).

    change_edm_types( is_component = ls_component ).

    override_texts( is_property = is_property
                    io_prop_ref = CAST #( mo_property ) ).

    mo_property->set_is_key( is_property-is_key ).

    IF is_property-as_etag = abap_true.
      mo_property->set_as_etag( ).
    ENDIF.

    IF is_property-not_filterable = abap_true.
      mo_property->set_filterable( abap_false ).
      io_odata_annotation->add_property_to_non_filterable( is_property-property_name ).
    ENDIF.

    IF is_property-not_editable = abap_true.
      mo_property->set_updatable( abap_false ).
    ENDIF.

    IF is_entity-is_media = abap_true.
      mo_property->set_as_content_type( ).
    ENDIF.

    IF is_property-search_help IS NOT INITIAL.
      define_search_help_annotations( is_entity   = is_entity
                                      is_property = is_property ).
    ENDIF.

    IF is_property-sort_order IS NOT INITIAL.
      io_ui_annotation->create_initial_visible_columns( iv_property_name = is_property-property_name
                                                        iv_sort_order    = is_property-sort_order ).
    ENDIF.

    IF is_property-filter_in_filterbar = abap_true.
      io_ui_annotation->create_filter_for_filterbar( is_property-property_name ).
    ENDIF.

    IF is_property-mandatory_filter = abap_true.
      zcl_odata_annotaion_sap=>create_from_property( mo_property )->add_required_filter_annotation( ).
      io_odata_annotation->add_property_to_required( is_property-property_name ).
    ENDIF.

    IF is_property-not_visible = abap_true.
      zcl_odata_annotaion_sap=>create_from_property( mo_property )->add_visible_false_annotation( ).
    ENDIF.
  ENDMETHOD.

  METHOD get_property_type.
    ro_property = mo_property.
  ENDMETHOD.

  METHOD change_edm_types.
    " DATS
    IF is_component-type->type_kind = cl_abap_typedescr=>typekind_date.
      TRY.
          zcl_odata_annotaion_sap=>create_from_property( mo_property )->add_date_only_annotation( ).
        CATCH /iwbep/cx_mgw_med_exception.
      ENDTRY.

    " GUID
    ELSEIF     is_component-type->type_kind = cl_abap_typedescr=>typekind_hex
           AND is_component-type->length    = 16.
      mo_property->set_type_edm_guid( ).

    " Timestamp
    ELSEIF     is_component-type->type_kind = cl_abap_typedescr=>typekind_packed
           AND is_component-type->decimals  = 0
           AND ( is_component-type->length = 8 OR is_component-type->length = 11 ).

      mo_property->set_type_edm_datetimeoffset( ).
      mo_property->set_precison( COND #( WHEN is_component-type->length = 11 THEN 7 ELSE 0 ) ).
    ENDIF.
  ENDMETHOD.

  METHOD define_search_help_annotations.
    TRY.
        DATA(lt_entities) = mo_customizing->get_entities( ).
        IF NOT line_exists( lt_entities[ entity_name = is_property-search_help ] ).
          RETURN.
        ENDIF.

        DATA(lt_sh_properties) = mo_customizing->get_properties( ).
        DELETE lt_sh_properties WHERE entity_name <> is_property-search_help.
        DATA(lv_first_key) = lt_sh_properties[ is_key = abap_true ]-property_name.
        DATA(lo_annotation) = zcl_odata_annotation_shlp=>create(
            io_vocan_model         = mo_anno_model
            iv_namespace           = |{ zcl_odata_utils=>escape_slashes( mo_customizing->get_namespace( ) ) }|
            iv_entitytype          = is_entity-entity_name
            iv_property            = SWITCH #( is_property-complex_type
                                               WHEN zif_odata_constants=>gc_global_cmplx_entities-value_description
                                               THEN |{ is_property-property_name }/{ zif_odata_constants=>gc_global_properties-value_help-value }|
                                               ELSE is_property-property_name )
            iv_search_supported    = abap_false
            iv_valuelist_entityset = |{ is_property-search_help }Set|
            iv_valuelist_property  = SWITCH #( is_property-complex_type
                                               WHEN zif_odata_constants=>gc_global_cmplx_entities-value_description
                                               THEN |{ zif_odata_constants=>gc_global_properties-value_help-value }|
                                               ELSE lv_first_key ) ).

        IF is_property-complex_type = zif_odata_constants=>gc_global_cmplx_entities-value_description.
          lo_annotation->add_display_parameter( |{ zif_odata_constants=>gc_global_properties-value_help-description }| ).
        ELSE.
          LOOP AT lt_sh_properties ASSIGNING FIELD-SYMBOL(<ls_sh_property>) WHERE property_name <> lv_first_key.

            IF <ls_sh_property>-is_key = abap_true.
              lo_annotation->add_inout_parameter( iv_property           = |{ <ls_sh_property>-property_name }|
                                                  iv_valuelist_property = |{ <ls_sh_property>-property_name }| ).
            ELSE.
              lo_annotation->add_out_parameter( iv_property           = |{ <ls_sh_property>-property_name }|
                                                iv_valuelist_property = |{ <ls_sh_property>-property_name }| ).
            ENDIF.

          ENDLOOP.
        ENDIF.
      CATCH cx_sy_itab_line_not_found.
    ENDTRY.
  ENDMETHOD.

ENDCLASS.
