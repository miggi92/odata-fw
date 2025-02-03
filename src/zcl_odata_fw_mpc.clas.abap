"! <p class="shorttext synchronized">FW MPC Class</p>
CLASS zcl_odata_fw_mpc DEFINITION
  PUBLIC
  CREATE PUBLIC.

  PUBLIC SECTION.
    "! <p class="shorttext synchronized">Constructor</p>
    "!
    "! @parameter io_customizing | <p class="shorttext synchronized">Customizing</p>
    "! @parameter io_model       | <p class="shorttext synchronized">Model</p>
    "! @parameter io_anno_model  | <p class="shorttext synchronized">Annotation model</p>
    METHODS constructor
      IMPORTING io_customizing TYPE REF TO zcl_odata_fw_cust
                io_model       TYPE REF TO /iwbep/if_mgw_odata_model
                io_anno_model  TYPE REF TO /iwbep/if_mgw_vocan_model.

    "! <p class="shorttext synchronized">Define mpc from customizing</p>
    "!
    "! @raising /iwbep/cx_mgw_med_exception | <p class="shorttext synchronized">Error generating model</p>
    METHODS define_from_cust
      RAISING /iwbep/cx_mgw_med_exception.

  PROTECTED SECTION.

  PRIVATE SECTION.
    DATA mo_customizing TYPE REF TO zcl_odata_fw_cust.
    DATA mo_anno_model  TYPE REF TO /iwbep/if_mgw_vocan_model.
    DATA mo_model       TYPE REF TO /iwbep/if_mgw_odata_model.

    "! <p class="shorttext synchronized">Define complex types</p>
    "!
    "! @parameter is_entity                   | <p class="shorttext synchronized">Entity</p>
    "! @raising   /iwbep/cx_mgw_med_exception | <p class="shorttext synchronized">Error</p>
    METHODS define_complex_type
      IMPORTING is_entity TYPE zodata_entity
      RAISING   /iwbep/cx_mgw_med_exception
                zcx_odata.

    "! <p class="shorttext synchronized">Define odata actions/ function imports</p>
    "!
    "! @raising /iwbep/cx_mgw_med_exception | <p class="shorttext synchronized">Error</p>
    METHODS define_actions
      RAISING /iwbep/cx_mgw_med_exception.

    "! <p class="shorttext synchronized">Define odata navigations</p>
    "!
    "! @raising /iwbep/cx_mgw_med_exception | <p class="shorttext synchronized">Error</p>
    METHODS define_navigation_properties
      RAISING /iwbep/cx_mgw_med_exception.

    "! <p class="shorttext synchronized">Define odata entity</p>
    "!
    "! @parameter is_entity                   | <p class="shorttext synchronized">Customizing entity</p>
    "! @raising   zcx_odata                   | <p class="shorttext synchronized">Error</p>
    "! @raising   /iwbep/cx_mgw_med_exception | <p class="shorttext synchronized">Error</p>
    METHODS define_entity
      IMPORTING is_entity TYPE zodata_entity
      RAISING   zcx_odata
                /iwbep/cx_mgw_med_exception.

ENDCLASS.


CLASS zcl_odata_fw_mpc IMPLEMENTATION.
  METHOD constructor.
    mo_customizing = io_customizing.
    mo_model       = io_model.
    mo_anno_model  = io_anno_model.
  ENDMETHOD.

  METHOD define_from_cust.
    TRY.
        mo_model->set_schema_namespace( iv_namespace = |{ zcl_odata_utils=>escape_slashes( mo_customizing->get_namespace( ) ) }| ).
        mo_model->set_soft_state_enabled( iv_soft_state_enabled = abap_true ).

        LOOP AT mo_customizing->get_entities( ) ASSIGNING FIELD-SYMBOL(<ls_entity>).
          IF <ls_entity>-is_complex = abap_true.
            define_complex_type( is_entity = <ls_entity> ).
          ELSE.
            define_entity( is_entity = <ls_entity> ).
          ENDIF.
        ENDLOOP.

        define_navigation_properties( ).
        define_actions( ).
      CATCH zcx_odata INTO DATA(lo_error).
        zcl_odata_utils=>raise_mpc_error( lo_error ).
    ENDTRY.
  ENDMETHOD.

  METHOD define_complex_type.
    DATA(lo_complex_type) = NEW zcl_odata_model_complex_entity( io_model       = mo_model
                                                                io_customizing = mo_customizing
                                                                io_anno_model  = mo_anno_model ).
    lo_complex_type->create_entity( is_entity ).
  ENDMETHOD.

  METHOD define_entity.
    DATA(lo_entity) = NEW zcl_odata_model_entity( io_model       = mo_model
                                                  io_customizing = mo_customizing
                                                  io_anno_model  = mo_anno_model ).
    lo_entity->create_entity( is_entity ).
  ENDMETHOD.

  METHOD define_navigation_properties.
    DATA lv_from_cardinality TYPE char01.
    DATA lv_to_cardinality   TYPE char01.

    LOOP AT mo_customizing->get_navigation( ) ASSIGNING FIELD-SYMBOL(<ls_nav>).
      CASE <ls_nav>-cardinality.
        WHEN '1'.
          lv_to_cardinality = '1'.
          lv_from_cardinality = lv_to_cardinality.
        WHEN 'M'.
          lv_to_cardinality = 'M'.
          lv_from_cardinality = lv_to_cardinality.
        WHEN 'N'.
          lv_from_cardinality = '1'.
          lv_to_cardinality   = 'M'.
        WHEN OTHERS.
          lv_from_cardinality = '1'.
          lv_to_cardinality   = 'M'.
      ENDCASE.

      " TODO: variable is assigned but never used (ABAP cleaner)
      DATA(lo_association) = mo_model->create_association( iv_association_name = <ls_nav>-nav_prop                 " name of the association
                                                           iv_left_type        = <ls_nav>-from_entity                 " name of the left entity
                                                           iv_right_type       = <ls_nav>-to_entity                 " name of the left entity
                                                           iv_left_card        = lv_from_cardinality                 " cardinality of the right entity
                                                           iv_right_card       = lv_to_cardinality                " cardinality of the left entity
                                                           iv_def_assoc_set    = abap_true ).     " if the default association set should be created
      mo_model->get_entity_type( <ls_nav>-from_entity )->create_navigation_property(
                                                          iv_property_name    = <ls_nav>-nav_prop
                                                          iv_association_name = <ls_nav>-nav_prop ).
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
        " TODO: variable is assigned but never used (ABAP cleaner)
        DATA(lo_parameter) = lo_action->create_input_parameter( iv_parameter_name = <ls_action_param>-parameter_name
                                                                iv_abap_fieldname = <ls_action_param>-fieldname ).              " Field Name
      ENDLOOP.

      lo_action->bind_input_structure( |{ <ls_action>-structure_name }| ).
    ENDLOOP.
  ENDMETHOD.
ENDCLASS.
