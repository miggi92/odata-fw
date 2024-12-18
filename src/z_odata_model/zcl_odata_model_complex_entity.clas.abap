"! <p class="shorttext synchronized">Complex entity</p>
CLASS zcl_odata_model_complex_entity DEFINITION
  PUBLIC
  INHERITING FROM zcl_odata_model_entity FINAL
  CREATE PUBLIC.

  PUBLIC SECTION.
    METHODS create_entity REDEFINITION.

    "! <p class="shorttext synchronized">Get complex type</p>
    "!
    "! @parameter ro_complex_type | <p class="shorttext synchronized">Complex entity type</p>
    METHODS get_complex_type
      RETURNING VALUE(ro_complex_type) TYPE REF TO /iwbep/if_mgw_odata_cmplx_type.

  PROTECTED SECTION.

  PRIVATE SECTION.
    DATA mo_complex_type TYPE REF TO /iwbep/if_mgw_odata_cmplx_type.
ENDCLASS.


CLASS zcl_odata_model_complex_entity IMPLEMENTATION.
  METHOD create_entity.
    mo_complex_type = mo_model->create_complex_type( iv_cplx_type_name = is_entity-entity_name  ).
    mo_complex_type->bind_structure( |{ is_entity-structure }| ).

    LOOP AT mo_customizing->get_properties( ) ASSIGNING FIELD-SYMBOL(<ls_property>)
         WHERE entity_name = is_entity-entity_name.

      DATA(lo_property) = mo_complex_type->create_property( iv_property_name  = <ls_property>-property_name
                                                            iv_abap_fieldname = <ls_property>-abap_name ).

      override_texts( is_property = <ls_property>
                      io_prop_ref = CAST #( lo_property ) ).
    ENDLOOP.
  ENDMETHOD.

  METHOD get_complex_type.
    ro_complex_type = mo_complex_type.
  ENDMETHOD.
ENDCLASS.
