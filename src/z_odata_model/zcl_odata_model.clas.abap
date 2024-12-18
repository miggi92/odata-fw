"! <p class="shorttext synchronized">Model superclass</p>
CLASS zcl_odata_model DEFINITION
  PUBLIC
  CREATE PUBLIC.

  PUBLIC SECTION.
    "! <p class="shorttext synchronized">Constructor</p>
    "!
    "! @parameter io_model | <p class="shorttext synchronized">OData Model instance</p>
    METHODS constructor
      IMPORTING io_model       TYPE REF TO /iwbep/if_mgw_odata_model
                io_customizing TYPE REF TO zcl_odata_fw_cust
                io_anno_model  TYPE REF TO /iwbep/if_mgw_vocan_model.

  PROTECTED SECTION.
    DATA mo_model       TYPE REF TO /iwbep/if_mgw_odata_model.
    DATA mo_customizing TYPE REF TO zcl_odata_fw_cust.
    DATA mo_anno_model  TYPE REF TO /iwbep/if_mgw_vocan_model.

    "! <p class="shorttext synchronized">Override sap:lable texts</p>
    "!
    "! @parameter is_property | <p class="shorttext synchronized">Property</p>
    "! @parameter io_prop_ref | <p class="shorttext synchronized">Property reference</p>
    METHODS override_texts
      IMPORTING is_property TYPE zodata_property
                io_prop_ref TYPE REF TO /iwbep/if_mgw_odata_item.

  PRIVATE SECTION.
ENDCLASS.


CLASS zcl_odata_model IMPLEMENTATION.
  METHOD override_texts.
    DATA lo_data_element TYPE REF TO cl_abap_elemdescr.
    DATA ls_ddic_field   TYPE dfies.

    CHECK io_prop_ref IS BOUND.
    TRY.
        DATA(lt_property_texts) = mo_customizing->get_property_texts( ).
        DATA(ls_label) = lt_property_texts[ entity_name   = is_property-entity_name
                                            property_name = is_property-property_name
                                            text_type     = 'L' ].

        IF ls_label-text_id IS INITIAL AND ls_label-object_name IS INITIAL.
          RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
        ENDIF.

        IF ls_label-text_id IS INITIAL AND ls_label-object_name IS NOT INITIAL.
          " Todo: object_name = data element
          lo_data_element = CAST cl_abap_elemdescr( cl_abap_elemdescr=>describe_by_name(
                                                        p_name = ls_label-object_name ) ).

          lo_data_element->get_ddic_field( RECEIVING  p_flddescr   = ls_ddic_field
                                           EXCEPTIONS not_found    = 1                " Type could not be found
                                                      no_ddic_type = 2                " Typ is not a dictionary type
                                                      OTHERS       = 3 ).

*          ls_ddic_field-scrtext_m
          TRY.
              DATA(lo_annotation) = zcl_odata_annotaion_sap=>create_from_property( CAST #( io_prop_ref ) ).
              lo_annotation->get_annotation_object( )->add( iv_key   = 'label'
                                                            iv_value = |{ ls_ddic_field-fieldtext }| ).
            CATCH /iwbep/cx_mgw_med_exception. " Meta data exception
          ENDTRY.
        ELSE.
          io_prop_ref->set_label_from_text_element( iv_text_element_symbol    = |{ ls_label-text_id }|
                                                    iv_text_element_container = |{ ls_label-object_name }| ).
        ENDIF.

      CATCH cx_sy_itab_line_not_found
            /iwbep/cx_mgw_med_exception.
    ENDTRY.
    TRY.
        DATA(ls_heading) = lt_property_texts[ entity_name   = is_property-entity_name
                                              property_name = is_property-property_name
                                              text_type     = 'H' ].

        IF ls_heading-text_id IS INITIAL AND ls_heading-object_name IS INITIAL.
          RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
        ENDIF.

        IF ls_heading-text_id IS INITIAL AND ls_heading-object_name IS NOT INITIAL.
          " Todo: object_name = data element
          lo_data_element = CAST cl_abap_elemdescr( cl_abap_elemdescr=>describe_by_name(
                                                        p_name = ls_label-object_name ) ).

          lo_data_element->get_ddic_field( RECEIVING  p_flddescr   = ls_ddic_field
                                           EXCEPTIONS not_found    = 1                " Type could not be found
                                                      no_ddic_type = 2                " Typ is not a dictionary type
                                                      OTHERS       = 3 ).

*          ls_ddic_field-scrtext_m
        ELSE.
          io_prop_ref->set_heading_from_text_element( iv_text_element_symbol    = |{ ls_heading-text_id }|
                                                      iv_text_element_container = |{ ls_heading-object_name }| ).
        ENDIF.

      CATCH cx_sy_itab_line_not_found
            /iwbep/cx_mgw_med_exception.
    ENDTRY.
  ENDMETHOD.

  METHOD constructor.
    mo_model = io_model.
    mo_customizing = io_customizing.
    mo_anno_model = io_anno_model.
  ENDMETHOD.
ENDCLASS.
