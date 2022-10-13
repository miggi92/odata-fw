"! <p class="shorttext synchronized" lang="en">OData framework controller</p>
CLASS zcl_odata_fw_controller DEFINITION
  PUBLIC
  CREATE PUBLIC .

  PUBLIC SECTION.
    METHODS:
      "! <p class="shorttext synchronized" lang="en">Constructor</p>
      "!
      "! @parameter i_namespace | <p class="shorttext synchronized" lang="en">OData namespace</p>
      "! @raising zcx_odata | <p class="shorttext synchronized" lang="en">Error</p>
      constructor
        IMPORTING
          i_namespace TYPE z_odata_namespace
        RAISING
          zcx_odata,
      "! <p class="shorttext synchronized" lang="en">Define MPC from customizing</p>
      "!
      "! @parameter i_model | <p class="shorttext synchronized" lang="en">Model</p>
      "! @parameter i_anno_model | <p class="shorttext synchronized" lang="en">Annotation model</p>
      "! @raising /iwbep/cx_mgw_med_exception | <p class="shorttext synchronized" lang="en">Error in Customizing</p>
      define_mpc
        IMPORTING
          i_model      TYPE REF TO /iwbep/if_mgw_odata_model
          i_anno_model TYPE REF TO /iwbep/if_mgw_vocan_model
        RAISING
          /iwbep/cx_mgw_med_exception,
      "! <p class="shorttext synchronized" lang="en">Define DPC from customizing</p>
      "!
      "! @parameter i_data_provider | <p class="shorttext synchronized" lang="en">Data provider</p>
      define_dpc
        IMPORTING
          i_data_provider TYPE REF TO zcl_odata_data_provider.
  PROTECTED SECTION.
  PRIVATE SECTION.
    DATA:
      namespace        TYPE z_odata_namespace,
      entities         TYPE zodata_entity_tt,
      properties       TYPE zodata_property_tt,
      property_texts   TYPE zodata_prop_txts_tt,
      navigation       TYPE zodata_nav_tt,
      search_helps     TYPE zodata_searchhlp_tt,
      actions          TYPE zodata_actions_tt,
      action_parameter TYPE zodata_act_param_tt.

    METHODS:
      "! <p class="shorttext synchronized" lang="en">Load customizing from DB</p>
      "!
      "! @raising zcx_odata | <p class="shorttext synchronized" lang="en">Failed to load customizing</p>
      load_customizing
        RAISING
          zcx_odata,
      "! <p class="shorttext synchronized" lang="en">Define complex types</p>
      "!
      "! @parameter i_entity | <p class="shorttext synchronized" lang="en">Entity</p>
      "! @parameter i_model | <p class="shorttext synchronized" lang="en">Model</p>
      "! @raising /iwbep/cx_mgw_med_exception | <p class="shorttext synchronized" lang="en">Error</p>
      define_complex_type
        IMPORTING
          i_entity TYPE zodata_entity
          i_model  TYPE REF TO /iwbep/if_mgw_odata_model
        RAISING
          /iwbep/cx_mgw_med_exception,
      "! <p class="shorttext synchronized" lang="en">Define odata entity</p>
      "!
      "! @parameter i_entity | <p class="shorttext synchronized" lang="en">Customizing entity</p>
      "! @parameter i_model | <p class="shorttext synchronized" lang="en">Model</p>
      "! @parameter i_anno_model | <p class="shorttext synchronized" lang="en">Annotation Model</p>
      "! @raising zcx_odata | <p class="shorttext synchronized" lang="en">Error</p>
      "! @raising /iwbep/cx_mgw_med_exception | <p class="shorttext synchronized" lang="en">Error</p>
      define_entity
        IMPORTING
          i_entity     TYPE zodata_entity
          i_model      TYPE REF TO /iwbep/if_mgw_odata_model
          i_anno_model TYPE REF TO /iwbep/if_mgw_vocan_model
        RAISING
          zcx_odata
          /iwbep/cx_mgw_med_exception,
      "! <p class="shorttext synchronized" lang="en">Define odata navigations</p>
      "!
      "! @parameter i_model | <p class="shorttext synchronized" lang="en">Model</p>
      "! @raising /iwbep/cx_mgw_med_exception | <p class="shorttext synchronized" lang="en">Error</p>
      define_navigation_properties
        IMPORTING
          i_model TYPE REF TO /iwbep/if_mgw_odata_model
        RAISING
          /iwbep/cx_mgw_med_exception,
      "! <p class="shorttext synchronized" lang="en">Define odata actions/ function imports</p>
      "!
      "! @parameter i_model | <p class="shorttext synchronized" lang="en">Model</p>
      "! @raising /iwbep/cx_mgw_med_exception | <p class="shorttext synchronized" lang="en">Error</p>
      define_actions
        IMPORTING
          i_model TYPE REF TO /iwbep/if_mgw_odata_model
        RAISING
          /iwbep/cx_mgw_med_exception,
      "! <p class="shorttext synchronized" lang="en">Override sap:lable texts</p>
      "!
      "! @parameter i_property | <p class="shorttext synchronized" lang="en">Property</p>
      "! @parameter i_prop_ref | <p class="shorttext synchronized" lang="en">Property reference</p>
      override_texts
        IMPORTING
          i_property TYPE zodata_property
          i_prop_ref TYPE REF TO /iwbep/if_mgw_odata_item,
      "! <p class="shorttext synchronized" lang="en">Init searchhelps as seperate entities from customizing</p>
      "!
      init_search_help_cust_entities.
ENDCLASS.



CLASS zcl_odata_fw_controller IMPLEMENTATION.


  METHOD constructor.
    me->namespace = i_namespace.
    me->load_customizing( ).
  ENDMETHOD.


  METHOD define_actions.
    LOOP AT me->actions ASSIGNING FIELD-SYMBOL(<action>).
      DATA(action) = i_model->create_action( iv_action_name = |{ <action>-action_name }| ).
      action->set_action_for( iv_entity_type_name = |{ <action>-entity }| ).
      action->set_return_entity_set( |{ <action>-returning_entity }Set| ).
      action->set_return_multiplicity( iv_cardinality = '1' ).
      action->set_name( |{ <action>-action_name }| ).
      IF <action>-http_method IS NOT INITIAL.
        " default is GET
        action->set_http_method( iv_method_name = <action>-http_method ).
      ENDIF.

      LOOP AT me->action_parameter ASSIGNING FIELD-SYMBOL(<action_param>) WHERE action_name = <action>-action_name.
        DATA(parameter) = action->create_input_parameter(
            iv_parameter_name = <action_param>-parameter_name
            iv_abap_fieldname = <action_param>-fieldname                 " Field Name
        ).
      ENDLOOP.

      action->bind_input_structure(
          iv_structure_name   = |{ <action>-structure_name }|
*          iv_bind_conversions = abap_false       " Consider conv. exits and ref. fields for currency and amount
      ).
    ENDLOOP.
  ENDMETHOD.


  METHOD define_complex_type.
    DATA(complex_type) = i_model->create_complex_type( iv_cplx_type_name = i_entity-entity_name  ).
    complex_type->bind_structure( |{ i_entity-structure }| ).

    LOOP AT properties ASSIGNING FIELD-SYMBOL(<property>) WHERE entity_name = i_entity-entity_name.
      DATA(property) =  complex_type->create_property(
        iv_property_name  = <property>-property_name
        iv_abap_fieldname = <property>-abap_name
     ).

      me->override_texts(
                  i_property = <property>
                  i_prop_ref = CAST #( property )
              ).
*     CATCH /iwbep/cx_mgw_med_exception. " Meta data exception
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

    IF structure->struct_kind = structure->structkind_nested
    OR line_exists( components[ as_include = abap_true ] ). " is sometimes needed cause it doesn't recognizes includes...
      DATA(nested) = structure->get_components( ).
      LOOP AT nested ASSIGNING FIELD-SYMBOL(<nested>) WHERE type->kind = cl_abap_structdescr=>kind_struct.
        DATA(nested_struct) = CAST cl_abap_structdescr( <nested>-type ).
        APPEND LINES OF nested_struct->get_components( ) TO components.
      ENDLOOP.
    ENDIF.

    IF i_entity-entity_name = zif_odata_constants=>gc_global_entities-documents.
      entity->set_is_media( ).
    ENDIF.


    entity->bind_structure(
      iv_structure_name   = |{ i_entity-structure }|
      iv_bind_conversions = bind_conversion       " Consider conversion exits
    ).
    entity->create_entity_set( iv_entity_set_name = |{ i_entity-entity_name }Set| ).

    LOOP AT properties ASSIGNING FIELD-SYMBOL(<property>) WHERE entity_name = i_entity-entity_name.
      IF <property>-complex_type IS NOT INITIAL.
        DATA(cmplx_type) = entity->create_cmplx_type_property(
            iv_complex_type_name = <property>-complex_type
            iv_property_name     = <property>-property_name
            iv_abap_fieldname    = <property>-abap_name
        ).

        me->override_texts(
            i_property = <property>
            i_prop_ref = CAST #( cmplx_type )
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

        me->override_texts(
            i_property = <property>
            i_prop_ref = CAST #( property )
        ).

        IF component-type->absolute_name CS 'GUID'.
          property->set_type_edm_guid( ).
        ENDIF.
        property->set_is_key( <property>-is_key ).

        IF <property>-as_etag = abap_true.
          property->set_as_etag( ).
        ENDIF.

        IF <property>-not_filterable = abap_true.
          property->set_filterable( abap_false ).
        ENDIF.

        IF <property>-search_help IS NOT INITIAL.
          ##TODO "geht da was acuh mit v2?
          TRY.
              DATA(value_help) = entities[ entity_name = zif_odata_constants=>gc_global_entities-value_help ].
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
                iv_valuelist_entityset = |{ <property>-search_help }Set|
                iv_valuelist_property  = |{ zif_odata_constants=>gc_global_properties-value_help-value }|
            ).
              annotation->add_display_parameter( iv_valuelist_property = |{ zif_odata_constants=>gc_global_properties-value_help-description }| ).
*            CATCH /iwbep/cx_mgw_med_exception. " Meta data exception
*            CATCH cx_fkk_error.                " General Errors

*        CATCH /iwbep/cx_mgw_med_exception. " Meta data exception
            CATCH cx_sy_itab_line_not_found.
          ENDTRY.
        ENDIF.
      ENDIF.

      IF i_entity-entity_name = zif_odata_constants=>gc_global_entities-documents AND <property>-abap_name = zif_odata_constants=>gc_global_fieldnames-documents-mime_type.
        property->set_as_content_type( ).
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
        me->define_actions( i_model ).
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
    DATA: namespaces TYPE RANGE OF zodata_namespace-namespace.

    " select global namespaces
    SELECT namespace
        FROM zodata_namespace
        INTO TABLE @DATA(global_namespaces)
        WHERE is_global = @abap_true.

    LOOP AT global_namespaces ASSIGNING FIELD-SYMBOL(<global_namespace>).
      CHECK <global_namespace> <> me->namespace.
      APPEND VALUE #( sign = 'I' option = 'EQ' low = <global_namespace> ) TO namespaces.
    ENDLOOP.

    APPEND VALUE #( sign = 'I' option = 'EQ' low = me->namespace ) TO namespaces.

    SELECT *
        FROM zodata_entity
        INTO TABLE me->entities
        WHERE namespace IN namespaces.

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
        WHERE namespace IN namespaces.

    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE zcx_odata
        EXPORTING
          textid = zcx_odata=>no_properties
          value  = |{ me->namespace }|.
    ENDIF.

    SELECT *
        FROM zodata_prop_txts
        INTO TABLE me->property_texts
        WHERE namespace IN namespaces.

    SELECT *
        FROM zodata_nav
        INTO TABLE me->navigation
        WHERE namespace IN namespaces.

    SELECT *
        FROM zodata_searchhlp
        INTO TABLE me->search_helps.

    SELECT *
        FROM zodata_actions
        INTO TABLE me->actions
        WHERE namespace IN namespaces.

    SELECT *
        FROM zodata_act_param
        INTO TABLE me->action_parameter
        WHERE namespace IN namespaces.


    me->init_search_help_cust_entities( ).

  ENDMETHOD.


  METHOD override_texts.
    CHECK i_prop_ref IS BOUND.
    TRY.
        DATA(label) = me->property_texts[ entity_name = i_property-entity_name
                                          property_name = i_property-property_name
                                          text_type = 'L' ].

        i_prop_ref->set_label_from_text_element(
            iv_text_element_symbol    = |{ label-text_id }|                " Text element key (number/selection name)
            iv_text_element_container = |{ label-object_name }|                 " the class/report which contains the text element
        ).
      CATCH cx_sy_itab_line_not_found /iwbep/cx_mgw_med_exception.
    ENDTRY.
    TRY.
        DATA(heading) = me->property_texts[ entity_name = i_property-entity_name
                                            property_name = i_property-property_name
                                            text_type = 'H' ].

        i_prop_ref->set_heading_from_text_element(
                    iv_text_element_symbol    = |{ label-text_id }|                " Text element key (number/selection name)
                    iv_text_element_container = |{ label-object_name }|                 " the class/report which contains the text element
                ).

      CATCH cx_sy_itab_line_not_found /iwbep/cx_mgw_med_exception.
    ENDTRY.
  ENDMETHOD.

  METHOD init_search_help_cust_entities.

    DATA(lt_shelp_prop) = me->properties.
    DELETE lt_shelp_prop WHERE search_help = space.
    SORT lt_shelp_prop BY search_help ASCENDING.
    DELETE ADJACENT DUPLICATES FROM lt_shelp_prop COMPARING search_help.

    CHECK lines( lt_shelp_prop ) <> 0.
    DATA(ls_entity) = entities[ entity_name = zif_odata_constants=>gc_global_entities-value_help ].
    LOOP AT lt_shelp_prop ASSIGNING FIELD-SYMBOL(<ls_shelp>).
      ls_entity-entity_name = <ls_shelp>-search_help.
      APPEND ls_entity TO entities.

      LOOP AT properties INTO DATA(ls_prop) WHERE entity_name = zif_odata_constants=>gc_global_entities-value_help
                                              AND property_name <> zif_odata_constants=>gc_global_properties-value_help-search_field.
        ls_prop-entity_name = ls_entity-entity_name.
        APPEND ls_prop TO properties.
      ENDLOOP.
    ENDLOOP.
  ENDMETHOD.

ENDCLASS.
