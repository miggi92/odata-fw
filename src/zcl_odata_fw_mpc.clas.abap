"! <p class="shorttext synchronized" lang="en">FW MPC Class</p>
CLASS zcl_odata_fw_mpc DEFINITION
  PUBLIC
  CREATE PUBLIC .

  PUBLIC SECTION.
    METHODS:
      "! <p class="shorttext synchronized" lang="en">Constructor</p>
      "!
      "! @parameter io_customizing | <p class="shorttext synchronized" lang="en">Customizing</p>
      "! @parameter io_model | <p class="shorttext synchronized" lang="en">Model</p>
      "! @parameter io_anno_model | <p class="shorttext synchronized" lang="en">Annotation model</p>
      constructor
        IMPORTING
          io_customizing TYPE REF TO zcl_odata_fw_cust
          io_model       TYPE REF TO /iwbep/if_mgw_odata_model
          io_anno_model  TYPE REF TO /iwbep/if_mgw_vocan_model  ,
      "! <p class="shorttext synchronized" lang="en">Define mpc from customizing</p>
      "!
      "! @raising /iwbep/cx_mgw_med_exception | <p class="shorttext synchronized" lang="en">Error generating model</p>
      define_from_cust
        RAISING
          /iwbep/cx_mgw_med_exception .
  PROTECTED SECTION.
  PRIVATE SECTION.
    DATA:
      mo_customizing TYPE REF TO zcl_odata_fw_cust,
      mo_anno_model  TYPE REF TO /iwbep/if_mgw_vocan_model,
      mo_model       TYPE REF TO /iwbep/if_mgw_odata_model.

    METHODS:
      "! <p class="shorttext synchronized" lang="en">Define complex types</p>
      "!
      "! @parameter is_entity | <p class="shorttext synchronized" lang="en">Entity</p>
      "! @raising /iwbep/cx_mgw_med_exception | <p class="shorttext synchronized" lang="en">Error</p>
      define_complex_type
        IMPORTING
          is_entity TYPE zodata_entity
        RAISING
          /iwbep/cx_mgw_med_exception,
      "! <p class="shorttext synchronized" lang="en">Define odata actions/ function imports</p>
      "!
      "! @raising /iwbep/cx_mgw_med_exception | <p class="shorttext synchronized" lang="en">Error</p>
      define_actions
        RAISING
          /iwbep/cx_mgw_med_exception,
      "! <p class="shorttext synchronized" lang="en">Define odata navigations</p>
      "!
      "! @raising /iwbep/cx_mgw_med_exception | <p class="shorttext synchronized" lang="en">Error</p>
      define_navigation_properties
        RAISING
          /iwbep/cx_mgw_med_exception,
      "! <p class="shorttext synchronized" lang="en">Override sap:lable texts</p>
      "!
      "! @parameter is_property | <p class="shorttext synchronized" lang="en">Property</p>
      "! @parameter io_prop_ref | <p class="shorttext synchronized" lang="en">Property reference</p>
      override_texts
        IMPORTING
          is_property TYPE zodata_property
          io_prop_ref TYPE REF TO /iwbep/if_mgw_odata_item,
      "! <p class="shorttext synchronized" lang="en">Define odata entity</p>
      "!
      "! @parameter is_entity | <p class="shorttext synchronized" lang="en">Customizing entity</p>
      "! @raising zcx_odata | <p class="shorttext synchronized" lang="en">Error</p>
      "! @raising /iwbep/cx_mgw_med_exception | <p class="shorttext synchronized" lang="en">Error</p>
      define_entity
        IMPORTING
          is_entity TYPE zodata_entity
        RAISING
          zcx_odata
          /iwbep/cx_mgw_med_exception.
ENDCLASS.



CLASS zcl_odata_fw_mpc IMPLEMENTATION.

  METHOD constructor.
    mo_customizing  = io_customizing.
    mo_model        = io_model.
    mo_anno_model   = io_anno_model.
  ENDMETHOD.

  METHOD define_from_cust.
    TRY.
        mo_model->set_schema_namespace( iv_namespace = |{ mo_customizing->get_namespace( ) }| ).
        mo_model->set_soft_state_enabled(  iv_soft_state_enabled = abap_true ).

        LOOP AT mo_customizing->get_entities( ) ASSIGNING FIELD-SYMBOL(<ls_entity>).
          IF <ls_entity>-is_complex = abap_true.
            define_complex_type(
                is_entity = <ls_entity>
            ).
          ELSE.
            define_entity(
                is_entity        = <ls_entity>
            ).
          ENDIF.
        ENDLOOP.

        me->define_navigation_properties( ).
        me->define_actions(  ).
      CATCH zcx_odata INTO DATA(lo_error).
        zcl_odata_utils=>raise_mpc_error( lo_error ).
    ENDTRY.
  ENDMETHOD.

  METHOD define_complex_type.
    DATA(lo_complex_type) = mo_model->create_complex_type( iv_cplx_type_name = is_entity-entity_name  ).
    lo_complex_type->bind_structure( |{ is_entity-structure }| ).

    LOOP AT mo_customizing->get_properties( ) ASSIGNING FIELD-SYMBOL(<ls_property>) 
        WHERE entity_name = is_entity-entity_name.
        
      DATA(lo_property) =  lo_complex_type->create_property(
        iv_property_name  = <ls_property>-property_name
        iv_abap_fieldname = <ls_property>-abap_name
     ).

      override_texts(
          is_property = <ls_property>
          io_prop_ref = CAST #( lo_property )
      ).
*     CATCH /iwbep/cx_mgw_med_exception. " Meta data exception
    ENDLOOP.
  ENDMETHOD.

  METHOD define_entity.
    DATA: lo_structure  TYPE REF TO cl_abap_structdescr,
          lt_components TYPE cl_abap_structdescr=>component_table.

    DATA(lo_entity) = mo_model->create_entity_type(
        iv_entity_type_name = is_entity-entity_name
    ).

    lo_structure ?= cl_abap_structdescr=>describe_by_name( p_name = is_entity-structure ).
    IF lo_structure->kind <> cl_abap_structdescr=>kind_struct.
      RAISE EXCEPTION TYPE zcx_odata
        EXPORTING
          textid = zcx_odata=>no_structure
          value  = |{ is_entity-structure }|.
    ENDIF.

    " bind_conversion only works for ddic structures
    lo_structure->get_ddic_object(
      EXCEPTIONS
        not_found    = 1                " Type could not be found
        no_ddic_type = 2                " Typ is not a dictionary type
        OTHERS       = 3
    ).
    IF sy-subrc = 0. " is a ddic structure
      DATA(lv_bind_conversion) = abap_true.
    ENDIF.

    lt_components = lo_structure->get_components( ).

    IF lo_structure->struct_kind = lo_structure->structkind_nested
    OR line_exists( lt_components[ as_include = abap_true ] ). "is sometimes needed cause it doesn't recognizes includes
      DATA(lt_nested) = lo_structure->get_components( ).
      LOOP AT lt_nested ASSIGNING FIELD-SYMBOL(<ls_nested>) WHERE type->kind = cl_abap_structdescr=>kind_struct.
        DATA(lo_nested_struct) = CAST cl_abap_structdescr( <ls_nested>-type ).
        APPEND LINES OF lo_nested_struct->get_components( ) TO lt_components.
      ENDLOOP.
    ENDIF.

    IF is_entity-entity_name = zif_odata_constants=>gc_global_entities-documents
    OR is_entity-entity_name = zif_odata_constants=>gc_global_entities-attachments.
      lo_entity->set_is_media( ).
    ENDIF.


    lo_entity->bind_structure(
      iv_structure_name   = |{ is_entity-structure }|
      iv_bind_conversions = lv_bind_conversion       " Consider conversion exits
    ).
    lo_entity->create_entity_set( iv_entity_set_name = |{ is_entity-entity_name }Set| ).

    LOOP AT mo_customizing->get_properties( ) ASSIGNING FIELD-SYMBOL(<ls_property>) 
      WHERE entity_name = is_entity-entity_name.
      IF <ls_property>-complex_type IS NOT INITIAL.
        DATA(lo_cmplx_type) = lo_entity->create_cmplx_type_property(
            iv_complex_type_name = <ls_property>-complex_type
            iv_property_name     = <ls_property>-property_name
            iv_abap_fieldname    = <ls_property>-abap_name
        ).

        me->override_texts(
            is_property = <ls_property>
            io_prop_ref = CAST #( lo_cmplx_type )
        ).
      ELSE.
        TRY.
            DATA(ls_component) = lt_components[ name = <ls_property>-abap_name ].
          CATCH cx_sy_itab_line_not_found INTO DATA(lo_error).
            RAISE EXCEPTION TYPE zcx_odata
              EXPORTING
                previous = lo_error
                textid   = zcx_odata=>component_not_in_structure
                value    = |{ <ls_property>-abap_name }|
                value2   = |{ is_entity-structure }|.
        ENDTRY.
        DATA(lo_property) = lo_entity->create_property(
          iv_property_name  = <ls_property>-property_name
          iv_abap_fieldname = <ls_property>-abap_name
        ).

        me->override_texts(
            is_property = <ls_property>
            io_prop_ref = CAST #( lo_property )
        ).

        IF ls_component-type->absolute_name CS 'GUID'.
          lo_property->set_type_edm_guid( ).
        ENDIF.
        lo_property->set_is_key( <ls_property>-is_key ).

        IF <ls_property>-as_etag = abap_true.
          lo_property->set_as_etag( ).
        ENDIF.

        IF <ls_property>-not_filterable = abap_true.
          lo_property->set_filterable( abap_false ).
        ENDIF.


      ENDIF.

      IF <ls_property>-search_help IS NOT INITIAL.
        ##TODO "geht da was acuh mit v2?
        TRY.
            DATA(lt_entities) = mo_customizing->get_entities( ).
            DATA(ls_value_help) = lt_entities[ entity_name = zif_odata_constants=>gc_global_entities-value_help ].
*              cl*shlp_annotation*
            DATA(annotation) = cl_apj_shlp_annotation=>create(
              io_odata_model         = mo_model
              io_vocan_model         = mo_anno_model
              iv_namespace           = |{ mo_customizing->get_namespace( ) }|
              iv_entitytype          = is_entity-entity_name
              iv_property            = SWITCH #( <ls_property>-complex_type 
                                          WHEN 'valueDescription' THEN |{ <ls_property>-property_name }/value| 
                                          ELSE <ls_property>-property_name )
*            iv_search_supported    =
              iv_search_help_field   = <ls_property>-abap_name
*            iv_qualifier           =
*            iv_label               =
              iv_valuelist_entityset = |{ <ls_property>-search_help }Set|
              iv_valuelist_property  = |{ zif_odata_constants=>gc_global_properties-value_help-value }|
          ).
            annotation->add_display_parameter( iv_valuelist_property = |{ 
                zif_odata_constants=>gc_global_properties-value_help-description }| ).
*            CATCH /iwbep/cx_mgw_med_exception. " Meta data exception
*            CATCH cx_fkk_error.                " General Errors

*        CATCH /iwbep/cx_mgw_med_exception. " Meta data exception
          CATCH cx_sy_itab_line_not_found.
        ENDTRY.
      ENDIF.

      IF ( is_entity-entity_name = zif_odata_constants=>gc_global_entities-documents OR
           is_entity-entity_name = zif_odata_constants=>gc_global_entities-attachments )
      AND <ls_property>-abap_name = zif_odata_constants=>gc_global_fieldnames-documents-mime_type.
        lo_property->set_as_content_type( ).
      ENDIF.

      IF is_entity-deep_entity_structure IS NOT INITIAL.
        lo_entity->bind_structure( |{ is_entity-deep_entity_structure }| ).
      ENDIF.
    ENDLOOP.
  ENDMETHOD.

  METHOD override_texts.
    CHECK io_prop_ref IS BOUND.
    TRY.
        DATA(lt_property_texts) = mo_customizing->get_property_texts( ).
        DATA(ls_label) = lt_property_texts[ entity_name = is_property-entity_name
                                          property_name = is_property-property_name
                                          text_type = 'L' ].

        io_prop_ref->set_label_from_text_element(
            iv_text_element_symbol    = |{ ls_label-text_id }| " Text element key (number/selection name)
            iv_text_element_container = |{ ls_label-object_name }| " the class/report which contains the text element
        ).
      CATCH cx_sy_itab_line_not_found /iwbep/cx_mgw_med_exception.
    ENDTRY.
    TRY.
        DATA(ls_heading) = lt_property_texts[ entity_name = is_property-entity_name
                                            property_name = is_property-property_name
                                            text_type = 'H' ].

        io_prop_ref->set_heading_from_text_element(
                    iv_text_element_symbol    = |{ ls_heading-text_id }| 
                    iv_text_element_container = |{ ls_heading-object_name }|
                ).

      CATCH cx_sy_itab_line_not_found /iwbep/cx_mgw_med_exception.
    ENDTRY.
  ENDMETHOD.

  METHOD define_navigation_properties.
    DATA: lv_from_cardinality TYPE char01,
          lv_to_cardinality   TYPE char01.

    LOOP AT mo_customizing->get_navigation( ) ASSIGNING FIELD-SYMBOL(<ls_nav>).
      CASE <ls_nav>-cardinality.
        WHEN '1'.
          lv_from_cardinality = lv_to_cardinality = '1'.
        WHEN 'M'.
          lv_from_cardinality = lv_to_cardinality = 'M'.
        WHEN 'N'.
          lv_from_cardinality  = '1'.
          lv_to_cardinality    = 'M'.
        WHEN OTHERS.
          lv_from_cardinality  = '1'.
          lv_to_cardinality    = 'M'.
      ENDCASE.

      DATA(association) = mo_model->create_association(
          iv_association_name = <ls_nav>-nav_prop                 " name of the association
          iv_left_type        = <ls_nav>-from_entity                 " name of the left entity
          iv_right_type       = <ls_nav>-to_entity                 " name of the left entity
          iv_left_card        = lv_from_cardinality                 " cardinality of the right entity
          iv_right_card       = lv_to_cardinality                " cardinality of the left entity
          iv_def_assoc_set    = abap_true        " if the default association set should be created
      ).
      mo_model->get_entity_type( <ls_nav>-from_entity )->create_navigation_property(
                                                        iv_property_name    = <ls_nav>-nav_prop
                                                        iv_association_name = <ls_nav>-nav_prop
                                                      ).
    ENDLOOP.
  ENDMETHOD.

  METHOD define_actions.
    LOOP AT mo_customizing->get_actions( ) ASSIGNING FIELD-SYMBOL(<ls_action>).
      DATA(lo_action) = mo_model->create_action( iv_action_name = |{ <ls_action>-action_name }| ).
      lo_action->set_action_for( iv_entity_type_name = |{ <ls_action>-entity }| ).
      lo_action->set_return_entity_set( |{ <ls_action>-returning_entity }Set| ).
      lo_action->set_return_multiplicity( iv_cardinality = '1' ).
      lo_action->set_name( |{ <ls_action>-action_name }| ).
      IF <ls_action>-http_method IS NOT INITIAL.
        " default is GET
        lo_action->set_http_method( iv_method_name = <ls_action>-http_method ).
      ENDIF.

      LOOP AT mo_customizing->get_action_parameter( ) ASSIGNING FIELD-SYMBOL(<ls_action_param>) 
        WHERE action_name = <ls_action>-action_name.
        DATA(lo_parameter) = lo_action->create_input_parameter(
            iv_parameter_name = <ls_action_param>-parameter_name
            iv_abap_fieldname = <ls_action_param>-fieldname                 " Field Name
        ).
      ENDLOOP.

      lo_action->bind_input_structure( |{ <ls_action>-structure_name }| ).
    ENDLOOP.
  ENDMETHOD.

ENDCLASS.
