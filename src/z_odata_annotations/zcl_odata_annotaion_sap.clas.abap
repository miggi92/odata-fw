"! <p class="shorttext synchronized">SAP Annotation namespace</p>
CLASS zcl_odata_annotaion_sap DEFINITION
  PUBLIC
  CREATE PRIVATE.

  PUBLIC SECTION.
    "! <p class="shorttext synchronized">Get annotation object</p>
    "!
    "! @parameter ro_annotation | <p class="shorttext synchronized">Annotation object</p>
    METHODS get_annotation_object
      RETURNING VALUE(ro_annotation) TYPE REF TO /iwbep/if_mgw_odata_annotation.

    "! <p class="shorttext synchronized">Add date only annotation</p>
    "! With this annotation the date property will only show a date and not also a time (EDM has no date only type)
    "!
    METHODS add_date_only_annotation.

    "! <p class="shorttext synchronized">Add label annoation (is displayed in ui5)</p>
    "!  Default: the label is coming from the dataelement.
    "!
    "! @parameter iv_label_text | <p class="shorttext synchronized">Label text</p>
    METHODS add_label_annotation
      IMPORTING iv_label_text TYPE /iwbep/med_annotation_value.

    "! <p class="shorttext synchronized" lang="de">Add required in filter annotation</p>
    "!
    METHODS add_required_filter_annotation.

    "! <p class="shorttext synchronized">Create from property</p>
    "!
    "! @parameter io_property                 | <p class="shorttext synchronized">Property</p>
    "! @parameter ro_sap_annotation           | <p class="shorttext synchronized">SAP annotation instance</p>
    "!
    "! @raising   /iwbep/cx_mgw_med_exception | <p class="shorttext synchronized">Annotation couldn't be initialized</p>
    CLASS-METHODS create_from_property
      IMPORTING io_property              TYPE REF TO /iwbep/if_mgw_odata_property
      RETURNING VALUE(ro_sap_annotation) TYPE REF TO zcl_odata_annotaion_sap
      RAISING   /iwbep/cx_mgw_med_exception.

  PROTECTED SECTION.

  PRIVATE SECTION.
    DATA mo_annotation TYPE REF TO /iwbep/if_mgw_odata_annotation.

ENDCLASS.


CLASS zcl_odata_annotaion_sap IMPLEMENTATION.
  METHOD get_annotation_object.
    ro_annotation = mo_annotation.
  ENDMETHOD.

  METHOD add_date_only_annotation.
    mo_annotation->add( iv_key   = 'display-format'
                        iv_value = 'Date' ).
  ENDMETHOD.

  METHOD create_from_property.
    ro_sap_annotation = NEW #( ).
    ro_sap_annotation->mo_annotation = io_property->/iwbep/if_mgw_odata_annotatabl~create_annotation( 'sap' ).
  ENDMETHOD.

  METHOD add_label_annotation.
    mo_annotation->add( iv_key   = 'label'
                        iv_value = iv_label_text ).
  ENDMETHOD.

  METHOD add_required_filter_annotation.
    mo_annotation->add( iv_key   = 'required-in-filter'
                        iv_value = 'true' ).
  ENDMETHOD.
ENDCLASS.
