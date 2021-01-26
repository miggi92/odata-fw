CLASS zcl_odata_fw_controller DEFINITION
  PUBLIC
  FINAL
  CREATE PUBLIC .

  PUBLIC SECTION.
    METHODS:
      constructor
        IMPORTING
          i_namespace TYPE z_odata_namespace
        RAISING
          zcx_odata,
      define_mpc
        IMPORTING
          i_model      TYPE REF TO /iwbep/if_mgw_odata_model
          i_anno_model TYPE REF TO /iwbep/if_mgw_vocan_model
        RAISING
          /iwbep/cx_mgw_med_exception,
      define_dpc
        IMPORTING
          i_data_provider TYPE REF TO zcl_odata_data_provider.
  PROTECTED SECTION.
  PRIVATE SECTION.
    DATA:
      namespace    TYPE z_odata_namespace,
      entities     TYPE zodata_entity_tt,
      properties   TYPE zodata_property_tt,
      navigation   TYPE zodata_nav_tt,
      search_helps TYPE zodata_searchhlp_tt.

    METHODS:
      load_customizing
        RAISING
          zcx_odata,
      define_complex_type
        IMPORTING
          i_entity TYPE zodata_entity
          i_model  TYPE REF TO /iwbep/if_mgw_odata_model
        RAISING
          /iwbep/cx_mgw_med_exception,
      define_entity
        IMPORTING
          i_entity     TYPE zodata_entity
          i_model      TYPE REF TO /iwbep/if_mgw_odata_model
          i_anno_model TYPE REF TO /iwbep/if_mgw_vocan_model
        RAISING
          zcx_odata
          /iwbep/cx_mgw_med_exception,
      define_navigation_properties
        IMPORTING
          i_model TYPE REF TO /iwbep/if_mgw_odata_model
        RAISING
          /iwbep/cx_mgw_med_exception.
ENDCLASS.



CLASS zcl_odata_fw_controller IMPLEMENTATION.


  METHOD constructor.
    me->namespace = i_namespace.
    me->load_customizing( ).
  ENDMETHOD.


  METHOD define_complex_type.
    DATA(complex_type) = i_model->create_complex_type( iv_cplx_type_name = i_entity-entity_name  ).
    complex_type->bind_structure( |{ i_entity-structure }| ).

    LOOP AT properties ASSIGNING FIELD-SYMBOL(<property>) WHERE entity_name = i_entity-entity_name.
      DATA(property) =  complex_type->create_property(
        iv_property_name  = <property>-property_name
        iv_abap_fieldname = <property>-abap_name
     ).
    ENDLOOP.
  ENDMETHOD.


  METHOD define_dpc.
    DATA: data_providers TYPE zodata_data_provider_tt.
    DATA(entities) = me->entities.
    DELETE entities WHERE is_complex = abap_true.

    i_data_provider->add_entities2providers( entities ).
  ENDMETHOD.


  METHOD define_entity.
    DATA: structure  TYPE REF TO cl_abap_structdescr,
          components TYPE cl_abap_structdescr=>component_table.

    DATA(entity) = i_model->create_entity_type(
        iv_entity_type_name = i_entity-entity_name
    ).

    structure ?= cl_abap_structdescr=>describe_by_name( p_name = i_entity-structure ).
    IF structure->kind <> cl_abap_structdescr=>kind_struct.
      RAISE EXCEPTION TYPE zcx_odata
        EXPORTING
          textid = zcx_odata=>no_structure
          value  = |{ i_entity-structure }|.
    ENDIF.

    " bind_conversion only works for ddic structures
    structure->get_ddic_object(
      EXCEPTIONS
        not_found    = 1                " Type could not be found
        no_ddic_type = 2                " Typ is not a dictionary type
        OTHERS       = 3
    ).
    IF sy-subrc = 0. " is a ddic structure
      DATA(bind_conversion) = abap_true.
    ENDIF.

    components = structure->get_components( ).

    IF structure->struct_kind = structure->structkind_nested.
      DATA(nested) = structure->get_components( ).
      LOOP AT nested ASSIGNING FIELD-SYMBOL(<nested>) WHERE type->kind = cl_abap_structdescr=>kind_struct.
        DATA(nested_struct) = CAST cl_abap_structdescr( <nested>-type ).
        APPEND LINES OF nested_struct->get_components( ) TO components.
      ENDLOOP.
    ENDIF.

    entity->bind_structure(
      iv_structure_name   = |{ i_entity-structure }|
      iv_bind_conversions = bind_conversion       " Consider conversion exits
    ).
    entity->create_entity_set( iv_entity_set_name = |{ i_entity-entity_name }Set| ).

    LOOP AT properties ASSIGNING FIELD-SYMBOL(<property>) WHERE entity_name = i_entity-entity_name.
      IF <property>-complex_type IS NOT INITIAL.
        entity->create_complex_property(
            iv_complex_type_name = <property>-complex_type
            iv_property_name     = <property>-property_name
            iv_abap_fieldname    = <property>-abap_name
        ).
      ELSE.
        TRY.
            DATA(component) = components[ name = <property>-abap_name ].
          CATCH cx_sy_itab_line_not_found INTO DATA(error).
            RAISE EXCEPTION TYPE zcx_odata
              EXPORTING
                previous = error
                textid   = zcx_odata=>component_not_in_structure
                value    = |{ <property>-abap_name }|
                value2   = |{ i_entity-structure }|.
        ENDTRY.
        DATA(property) = entity->create_property(
          iv_property_name  = <property>-property_name
          iv_abap_fieldname = <property>-abap_name
        ).
        IF component-type->absolute_name CS 'GUID'.
          property->set_type_edm_guid( ).
        ENDIF.
        property->set_is_key( <property>-is_key ).

        IF <property>-search_help IS NOT INITIAL.
          ##TODO "geht da was acuh mit v2?
          TRY.
              DATA(value_help) = entities[ entity_name = 'valueHelp' ].
*              cl*shlp_annotation*
              DATA(annotation) = cl_apj_shlp_annotation=>create(
                io_odata_model         = i_model
                io_vocan_model         = i_anno_model
                iv_namespace           = |{ me->namespace }|
                iv_entitytype          = i_entity-entity_name
                iv_property            = <property>-property_name
*            iv_search_supported    =
                iv_search_help_field   = <property>-abap_name
*            iv_qualifier           =
*            iv_label               =
                iv_valuelist_entityset = |{ value_help-entity_name }Set|
                iv_valuelist_property  = 'value'
            ).
*              annotation->add_display_parameter( iv_valuelist_property = 'value' ).
              annotation->add_display_parameter( iv_valuelist_property = 'description' ).
*        CATCH /iwbep/cx_mgw_med_exception. " Meta data exception
*          property->set_value_list(
*              iv_value_list_type = /iwbep/if_mgw_odata_property=>gcs_value_list_type_property-fixed_values
*          ).
            CATCH cx_sy_itab_line_not_found.
          ENDTRY.
        ENDIF.
      ENDIF.
    ENDLOOP.
  ENDMETHOD.


  METHOD define_mpc.
    TRY.
        i_model->set_schema_namespace( iv_namespace = |{ me->namespace }| ).
        i_model->set_soft_state_enabled(  iv_soft_state_enabled = abap_true ).

        LOOP AT entities ASSIGNING FIELD-SYMBOL(<entity>).
          IF <entity>-is_complex = abap_true.
            me->define_complex_type(
                i_entity = <entity>
                i_model  = i_model
            ).
          ELSE.
            me->define_entity(
                i_entity        = <entity>
                i_model         = i_model
                i_anno_model    = i_anno_model
            ).
          ENDIF.
        ENDLOOP.

        me->define_navigation_properties( i_model ).
      CATCH zcx_odata INTO DATA(error).
        zcl_odata_utils=>raise_mpc_error( error ).
    ENDTRY.
  ENDMETHOD.


  METHOD define_navigation_properties.
    DATA: from_cardinality TYPE char01,
          to_cardinality   TYPE char01.

    LOOP AT navigation ASSIGNING FIELD-SYMBOL(<nav>).
      CASE <nav>-cardinality.
        WHEN '1'.
          from_cardinality = to_cardinality = '1'.
        WHEN 'M'.
          from_cardinality = to_cardinality = 'M'.
        WHEN 'N'.
          from_cardinality  = '1'.
          to_cardinality    = 'M'.
        WHEN OTHERS.
          from_cardinality  = '1'.
          to_cardinality    = 'M'.
      ENDCASE.

      DATA(association) = i_model->create_association(
          iv_association_name = <nav>-nav_prop                 " name of the association
          iv_left_type        = <nav>-from_entity                 " name of the left entity
          iv_right_type       = <nav>-to_entity                 " name of the left entity
          iv_left_card        = from_cardinality                 " cardinality of the right entity
          iv_right_card       = to_cardinality                " cardinality of the left entity
          iv_def_assoc_set    = abap_true        " if the default association set should be created
      ).
      i_model->get_entity_type( <nav>-from_entity )->create_navigation_property(
                                                        iv_property_name    = <nav>-nav_prop
                                                        iv_association_name = <nav>-nav_prop
                                                      ).
    ENDLOOP.
  ENDMETHOD.


  METHOD load_customizing.
    SELECT *
        FROM zodata_entity
        INTO TABLE me->entities
        WHERE namespace = me->namespace.

    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE zcx_odata
        EXPORTING
          textid = zcx_odata=>no_entities
          value  = |{ me->namespace }|.
    ENDIF.

    SORT me->entities BY is_complex DESCENDING.

    SELECT *
        FROM zodata_property
        INTO TABLE me->properties
        WHERE namespace = me->namespace.

    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE zcx_odata
        EXPORTING
          textid = zcx_odata=>no_properties
          value  = |{ me->namespace }|.
    ENDIF.

    SELECT *
        FROM zodata_nav
        INTO TABLE me->navigation
        WHERE namespace = me->namespace.

    SELECT *
        FROM zodata_searchhlp
        INTO TABLE me->search_helps.
*        WHERE namespace = me->namespace.

  ENDMETHOD.

ENDCLASS.
