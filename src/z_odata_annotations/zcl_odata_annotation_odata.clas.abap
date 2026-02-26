"! <p class="shorttext synchronized">SAP OData Capabilities annotation</p>
"! More information: https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Capabilities.V1.html
CLASS zcl_odata_annotation_odata DEFINITION
  PUBLIC
  CREATE PRIVATE.

  PUBLIC SECTION.
    CONSTANTS mc_anno_namespace TYPE string                   VALUE 'Org.OData.Capabilities.V1'.
    CONSTANTS mc_vocab_id       TYPE /iwbep/med_vocab_id      VALUE '/IWBEP/VOC_CAPABILITIES'.
    CONSTANTS mc_vocab_version  TYPE /iwbep/med_vocab_version VALUE '0001'.
    CONSTANTS mc_alias          TYPE string                   VALUE 'ODCapa'.

    "! <p class="shorttext synchronized">Creates an instance for a specific entity set</p>
    "! Initializes the vocabulary reference and sets the annotation target for the entity set.
    "! @parameter io_vocan_model      | <p class="shorttext synchronized">Vocabulary Annotation Model</p>
    "! @parameter iv_namespace        | <p class="shorttext synchronized">Service Namespace</p>
    "! @parameter iv_entity_name      | <p class="shorttext synchronized">Name of the Entity</p>
    "! @parameter iv_entity_container | <p class="shorttext synchronized">Name of the Entity Container</p>
    "! @parameter ro_odata_annotation | <p class="shorttext synchronized">Created annotation instance</p>
    CLASS-METHODS create
      IMPORTING io_vocan_model             TYPE REF TO /iwbep/if_mgw_vocan_model
                iv_namespace               TYPE string
                iv_entity_name             TYPE /iwbep/if_mgw_med_odata_types=>ty_e_med_entity_name
                iv_entity_container        TYPE string
      RETURNING VALUE(ro_odata_annotation) TYPE REF TO zcl_odata_annotation_odata.

    "! <p class="shorttext synchronized">Adds a property to the RequiredProperties collection</p>
    "! The FilterRestrictions annotation and collection are initialized on demand.
    "! @parameter iv_property_name | <p class="shorttext synchronized">Name of the property (or Nav-Prop)</p>
    METHODS add_property_to_required
      IMPORTING iv_property_name TYPE z_odata_property_name.

    "! <p class="shorttext synchronized">Adds a property to the NonFilterableProperties collection</p>
    "! Use this to hide properties or navigation properties from the filter bar.
    "! The FilterRestrictions annotation and collection are initialized on demand.
    "! @parameter iv_property_name | <p class="shorttext synchronized">Name of the property (or Nav-Prop)</p>
    METHODS add_property_to_non_filterable
      IMPORTING iv_property_name TYPE z_odata_property_name.

  PROTECTED SECTION.
    DATA mo_ann_target    TYPE REF TO /iwbep/if_mgw_vocan_ann_target.
    DATA mo_record_filter TYPE REF TO /iwbep/if_mgw_vocan_record.
    DATA mo_coll_required TYPE REF TO /iwbep/if_mgw_vocan_collection.
    DATA mo_coll_non_filt TYPE REF TO /iwbep/if_mgw_vocan_collection.

  PRIVATE SECTION.
    "! <p class="shorttext synchronized">Lazy-loading for the FilterRestrictions record</p>
    "! Ensures the annotation and record are only created if at least one property is added.
    "! @parameter ro_record | <p class="shorttext synchronized">The FilterRestrictions record instance</p>
    METHODS get_filter_record
      RETURNING VALUE(ro_record) TYPE REF TO /iwbep/if_mgw_vocan_record.
ENDCLASS.


CLASS zcl_odata_annotation_odata IMPLEMENTATION.
  METHOD create.
    DATA(lo_reference) = io_vocan_model->create_vocabulary_reference( iv_vocab_id      = mc_vocab_id
                                                                      iv_vocab_version = mc_vocab_version ).
    lo_reference->create_include( iv_namespace = mc_anno_namespace
                                  iv_alias     = mc_alias ).

    DATA(lo_ann_target) = io_vocan_model->create_annotations_target( |{ replace( val  = iv_entity_container
                                                                                 sub  = '/'
                                                                                 with = '_'
                                                                                 occ  = 0 ) }/{ iv_entity_name }Set| ).
    lo_ann_target->set_namespace_qualifier( |{ replace( val  = iv_namespace
                                                        sub  = '/'
                                                        with = '_'
                                                        occ  = 0 ) }| ).

    ro_odata_annotation = NEW #( ).
    ro_odata_annotation->mo_ann_target = lo_ann_target.
  ENDMETHOD.

  METHOD get_filter_record.
    IF mo_record_filter IS NOT BOUND.
      DATA(lo_ann) = mo_ann_target->create_annotation( iv_term = 'ODCapa.FilterRestrictions' ).
      mo_record_filter = lo_ann->create_record( ).
    ENDIF.
    ro_record = mo_record_filter.
  ENDMETHOD.

  METHOD add_property_to_non_filterable.
    IF mo_coll_non_filt IS NOT BOUND.
      mo_coll_non_filt = get_filter_record( )->create_property( 'NonFilterableProperties' )->create_collection( ).
    ENDIF.

    mo_coll_non_filt->create_simple_value( )->set_property_path( |{ iv_property_name }| ).
  ENDMETHOD.

  METHOD add_property_to_required.
    IF mo_coll_required IS NOT BOUND.
      mo_coll_required = get_filter_record( )->create_property( 'RequiredProperties' )->create_collection( ).
    ENDIF.

    mo_coll_required->create_simple_value( )->set_property_path( |{ iv_property_name }| ).
  ENDMETHOD.
ENDCLASS.
