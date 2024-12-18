"! <p class="shorttext synchronized" lang="en">Complex property</p>
CLASS zcl_odata_model_complex_prprty DEFINITION
  PUBLIC
  INHERITING FROM zcl_odata_model_property
  CREATE PUBLIC .

  PUBLIC SECTION.
    METHODS create_property REDEFINITION.
  PROTECTED SECTION.
  PRIVATE SECTION.
ENDCLASS.


CLASS zcl_odata_model_complex_prprty IMPLEMENTATION.
  METHOD create_property.
    DATA(lo_cmplx_type) = io_entity->create_cmplx_type_property( iv_complex_type_name = is_property-complex_type
                                                                 iv_property_name     = is_property-property_name
                                                                 iv_abap_fieldname    = is_property-abap_name ).

    override_texts( is_property = is_property
                    io_prop_ref = CAST #( lo_cmplx_type ) ).

    IF is_property-search_help IS NOT INITIAL.
      define_search_help_annotations( is_entity   = is_entity
                                      is_property = is_property ).
    ENDIF.
  ENDMETHOD.


ENDCLASS.
