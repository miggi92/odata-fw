"! <p class="shorttext synchronized" lang="en">Searchhelp annotation</p>
CLASS zcl_odata_annotation_shlp DEFINITION
  PUBLIC
  INHERITING FROM zcl_odata_annotation_common
  CREATE PRIVATE .

  PUBLIC SECTION.
    CLASS-METHODS:
      "! <p class="shorttext synchronized" lang="en">Create search help</p>
      "!
      "! @parameter io_vocan_model | <p class="shorttext synchronized" lang="en">Annotation model</p>
      "! @parameter iv_namespace | <p class="shorttext synchronized" lang="en">Odata namespace</p>
      "! @parameter iv_entitytype | <p class="shorttext synchronized" lang="en">Entity name</p>
      "! @parameter iv_property | <p class="shorttext synchronized" lang="en">Property name</p>
      "! @parameter iv_search_supported | <p class="shorttext synchronized" lang="en">Is search supported?</p>
      "! @parameter iv_search_help_field | <p class="shorttext synchronized" lang="en">Fieldname</p>
      "! @parameter iv_qualifier | <p class="shorttext synchronized" lang="en">Qualifier</p>
      "! @parameter iv_label | <p class="shorttext synchronized" lang="en">Label</p>
      "! @parameter iv_valuelist_entityset | <p class="shorttext synchronized" lang="en">Value help entity set</p>
      "! @parameter iv_valuelist_property | <p class="shorttext synchronized" lang="en">Value help property</p>
      "! @parameter ro_annotation | <p class="shorttext synchronized" lang="en">Annotation</p>
      "! @raising /iwbep/cx_mgw_med_exception | <p class="shorttext synchronized" lang="en">Error</p>
      create
        IMPORTING
          !io_vocan_model         TYPE REF TO /iwbep/if_mgw_vocan_model
          !iv_namespace           TYPE string
          !iv_entitytype          TYPE /iwbep/if_mgw_med_odata_types=>ty_e_med_entity_name
          !iv_property            TYPE /iwbep/med_external_name
          !iv_search_supported    TYPE abap_bool OPTIONAL
          !iv_search_help_field   TYPE fieldname OPTIONAL
          !iv_qualifier           TYPE string OPTIONAL
          !iv_label               TYPE csequence OPTIONAL
          !iv_valuelist_entityset TYPE /iwbep/med_external_name
          !iv_valuelist_property  TYPE /iwbep/med_external_name
        RETURNING
          VALUE(ro_annotation)    TYPE REF TO zcl_odata_annotation_shlp
        RAISING
          /iwbep/cx_mgw_med_exception .
    METHODS:
      "! <p class="shorttext synchronized" lang="en">Add in and out parameter</p>
      "!
      "! @parameter iv_property | <p class="shorttext synchronized" lang="en">Property</p>
      "! @parameter iv_valuelist_property | <p class="shorttext synchronized" lang="en">Value help property</p>
      "! @parameter ro_annotation | <p class="shorttext synchronized" lang="en">Annotation</p>
      add_inout_parameter
        IMPORTING
          !iv_property           TYPE /iwbep/med_external_name
          !iv_valuelist_property TYPE string
        RETURNING
          VALUE(ro_annotation)   TYPE REF TO zcl_odata_annotation_shlp,
      "! <p class="shorttext synchronized" lang="en">Add display only parameter</p>
      "!
      "! @parameter iv_valuelist_property | <p class="shorttext synchronized" lang="en">Value help property</p>
      "! @parameter ro_annotation | <p class="shorttext synchronized" lang="en">Annotation</p>
      add_display_parameter
        IMPORTING
          !iv_valuelist_property TYPE /iwbep/med_external_name
        RETURNING
          VALUE(ro_annotation)   TYPE REF TO zcl_odata_annotation_shlp ,
      "! <p class="shorttext synchronized" lang="en">Add in parameter</p>
      "!
      "! @parameter iv_property | <p class="shorttext synchronized" lang="en">Property</p>
      "! @parameter iv_valuelist_property | <p class="shorttext synchronized" lang="en">Value help property</p>
      "! @parameter ro_annotation | <p class="shorttext synchronized" lang="en">Annotation</p>
      add_in_parameter
        IMPORTING
          !iv_property           TYPE /iwbep/med_external_name
          !iv_valuelist_property TYPE string
        RETURNING
          VALUE(ro_annotation)   TYPE REF TO zcl_odata_annotation_shlp ,
      "! <p class="shorttext synchronized" lang="en">Add out parameter</p>
      "!
      "! @parameter iv_property | <p class="shorttext synchronized" lang="en">Property</p>
      "! @parameter iv_valuelist_property | <p class="shorttext synchronized" lang="en">Value help property</p>
      "! @parameter ro_annotation | <p class="shorttext synchronized" lang="en">Annotation</p>
      add_out_parameter
        IMPORTING
          !iv_property           TYPE /iwbep/med_external_name
          !iv_valuelist_property TYPE string
        RETURNING
          VALUE(ro_annotation)   TYPE REF TO zcl_odata_annotation_shlp .
  PROTECTED SECTION.
    DATA mo_parameters TYPE REF TO /iwbep/if_mgw_vocan_collection .
    CONSTANTS:
      BEGIN OF mc_parameter,
        out          TYPE string VALUE 'ValueListParameterOut',
        in_out       TYPE string VALUE 'ValueListParameterInOut',
        in           TYPE string VALUE 'ValueListParameterIn',
        display_only TYPE string VALUE 'ValueListParameterDisplayOnly',
      END OF mc_parameter.
  PRIVATE SECTION.

    METHODS:
      "! <p class="shorttext synchronized" lang="en">Create annotation with local entity data</p>
      "!
      "! @parameter iv_parameter | <p class="shorttext synchronized" lang="en">Parameter type</p>
      "! @parameter iv_property | <p class="shorttext synchronized" lang="en">Property</p>
      "! @parameter iv_valuelist_property | <p class="shorttext synchronized" lang="en">Value help property</p>
      "! @parameter ro_record | <p class="shorttext synchronized" lang="en">Record</p>
      create_annotation_with_local
        IMPORTING
          iv_parameter          TYPE string
          iv_property           TYPE /iwbep/med_external_name
          iv_valuelist_property TYPE /iwbep/mgw_med_vocan_prop_name
        RETURNING
          VALUE(ro_record)      TYPE REF TO /iwbep/if_mgw_vocan_record,
      "! <p class="shorttext synchronized" lang="en">Create annotation without local entity data</p>
      "!
      "! @parameter iv_parameter | <p class="shorttext synchronized" lang="en">Parameter type</p>
      "! @parameter iv_valuelist_property | <p class="shorttext synchronized" lang="en">Value help property</p>
      "! @parameter ro_record | <p class="shorttext synchronized" lang="en">Record</p>
      create_annotation_without_locl
        IMPORTING
          iv_parameter          TYPE string
          iv_valuelist_property TYPE /iwbep/med_external_name
        RETURNING
          VALUE(ro_record)      TYPE REF TO /iwbep/if_mgw_vocan_record.
ENDCLASS.



CLASS zcl_odata_annotation_shlp IMPLEMENTATION.
  METHOD add_out_parameter.
    DATA(lo_record) = create_annotation_with_local(
                        iv_parameter          = mc_parameter-out
                        iv_property           = iv_property
                        iv_valuelist_property = iv_valuelist_property
                      ).
    ro_annotation = me.
  ENDMETHOD.

  METHOD add_display_parameter.
    DATA(lo_record) = create_annotation_without_locl(
                        iv_parameter          = mc_parameter-display_only
                        iv_valuelist_property = iv_valuelist_property
                      ).
    ro_annotation = me.
  ENDMETHOD.


  METHOD add_inout_parameter.
    DATA(lo_record) = create_annotation_with_local(
                        iv_parameter          = mc_parameter-in_out
                        iv_property           = iv_property
                        iv_valuelist_property = iv_valuelist_property
                      ).

    ro_annotation = me.
  ENDMETHOD.


  METHOD add_in_parameter.
    CHECK mo_parameters IS BOUND.

    DATA(lo_record) = create_annotation_with_local(
                        iv_parameter          = mc_parameter-in
                        iv_property           = iv_property
                        iv_valuelist_property = iv_valuelist_property
                      ).

    ro_annotation = me.
  ENDMETHOD.


  METHOD create.
    DATA:
      lo_ann_target TYPE REF TO /iwbep/if_mgw_vocan_ann_target,
      lo_annotation TYPE REF TO /iwbep/if_mgw_vocan_annotation,
      lo_record     TYPE REF TO /iwbep/if_mgw_vocan_record.

    lo_ann_target = io_vocan_model->create_annotations_target( iv_target = iv_namespace && '.' && iv_entitytype && '/' && iv_property
                                                               iv_qualifier = iv_qualifier ).
    lo_annotation = lo_ann_target->create_annotation( iv_term = |{ mc_namespace }.ValueList| ).
    lo_record = lo_annotation->create_record( ).

    IF iv_label IS NOT INITIAL.
      lo_record->create_property( 'Label' )->create_simple_value( )->set_string( iv_label && `` )        ##NO_TEXT.
    ENDIF.

    lo_record->create_property( 'CollectionPath' )->create_simple_value( )->set_string( CONV #( iv_valuelist_entityset ) ).

    IF iv_search_supported = abap_true.
      lo_record->create_property( 'SearchSupported' )->create_simple_value( )->set_boolean( abap_true ).
    ENDIF.

    CREATE OBJECT ro_annotation.

    " collect parameters of value help (incl. result fields)
    ro_annotation->mo_parameters = lo_record->create_property( 'Parameters' )->create_collection( )      ##NO_TEXT.
    ro_annotation->add_inout_parameter( iv_property = iv_property iv_valuelist_property = CONV #( iv_valuelist_property ) ).
  ENDMETHOD.

  METHOD create_annotation_without_locl.
    ro_record = mo_parameters->create_record( |{ mc_namespace }.{ iv_parameter }| ).
    ro_record->create_property( 'ValueListProperty' )->create_simple_value( )->set_string( CONV #( iv_valuelist_property ) ).
  ENDMETHOD.

  METHOD create_annotation_with_local.
    ro_record = mo_parameters->create_record( |{ mc_namespace }.{ iv_parameter }| ).
    ro_record->create_property( 'LocalDataProperty' )->create_simple_value( )->set_property_path( CONV #( iv_property ) ).
    ro_record->create_property( 'ValueListProperty' )->create_simple_value( )->set_string( iv_valuelist_property ).
  ENDMETHOD.

ENDCLASS.
