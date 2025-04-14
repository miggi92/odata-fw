"! <p class="shorttext synchronized">SAP Common annotation</p>
"! More information: https://sap.github.io/odata-vocabularies/vocabularies/Common.html
CLASS zcl_odata_annotation_ui DEFINITION
  PUBLIC
  CREATE PRIVATE.

  PUBLIC SECTION.
    CONSTANTS gc_namespace TYPE string VALUE 'com.sap.vocabularies.UI.v1'.

    CLASS-METHODS create
      IMPORTING io_vocan_model          TYPE REF TO /iwbep/if_mgw_vocan_model
                iv_namespace            TYPE string
                iv_entity_name          TYPE /iwbep/if_mgw_med_odata_types=>ty_e_med_entity_name
      RETURNING VALUE(ro_ui_annotation) TYPE REF TO zcl_odata_annotation_ui.

    METHODS create_initial_visible_columns
      IMPORTING iv_property_name TYPE z_odata_property_name.


  PROTECTED SECTION.
    DATA mo_ann_target TYPE REF TO /iwbep/if_mgw_vocan_ann_target. " Vocabulary Annotation Target
      DATA mo_annotation TYPE REF TO /iwbep/if_mgw_vocan_annotation. " Vocabulary Annotation
    DATA mo_collection TYPE REF TO /iwbep/if_mgw_vocan_collection. " Vocabulary Annotation Collection

  PRIVATE SECTION.
ENDCLASS.


CLASS zcl_odata_annotation_ui IMPLEMENTATION.
  METHOD create.
    DATA lo_reference  TYPE REF TO /iwbep/if_mgw_vocan_reference.  " Vocabulary Annotation Reference
    DATA lo_ann_target TYPE REF TO /iwbep/if_mgw_vocan_ann_target. " Vocabulary Annotation Target

    lo_reference = io_vocan_model->create_vocabulary_reference( iv_vocab_id      = '/IWBEP/VOC_UI'
                                                                iv_vocab_version = '0001' ).
    lo_reference->create_include( iv_namespace = gc_namespace
                                  iv_alias     = 'UI' ).

    lo_ann_target = io_vocan_model->create_annotations_target( |{ iv_entity_name }| ).
    lo_ann_target->set_namespace_qualifier( |{ replace( val  = iv_namespace
                                                        sub  = '/'
                                                        with = '_'
                                                        occ  = 0 ) }| ).

    ro_ui_annotation = NEW #( ).
    ro_ui_annotation->mo_ann_target = lo_ann_target.
  ENDMETHOD.

  METHOD create_initial_visible_columns.
    DATA lo_record     TYPE REF TO /iwbep/if_mgw_vocan_record.     " Vocabulary Annotation Record
    DATA lo_property   TYPE REF TO /iwbep/if_mgw_vocan_property.   " Vocabulary Annotation Property
    DATA lo_simp_value TYPE REF TO /iwbep/if_mgw_vocan_simple_val. " Vocabulary Annotation Simple Value

    " Columns to be displayed by default
    IF mo_collection IS INITIAL.
      mo_annotation = mo_ann_target->create_annotation( iv_term = 'UI.LineItem' ).
      mo_collection = mo_annotation->create_collection( ).
    ENDIF.

    lo_record = mo_collection->create_record( iv_record_type = 'UI.DataField' ).
    lo_property = lo_record->create_property( 'Value' ).
    lo_simp_value = lo_property->create_simple_value( ).
    lo_simp_value->set_path( |{ iv_property_name }| ).
  ENDMETHOD.

ENDCLASS.
