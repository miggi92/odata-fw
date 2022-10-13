"! <p class="shorttext synchronized" lang="en">Data Provider</p>
CLASS zcl_odata_data_provider DEFINITION
  PUBLIC
  CREATE PUBLIC .

  PUBLIC SECTION.
    METHODS:
      "! <p class="shorttext synchronized" lang="en">Constructor</p>
      "!
      "! @parameter i_dpc_object | <p class="shorttext synchronized" lang="en">DPC object</p>
      constructor
        IMPORTING
          i_dpc_object TYPE REF TO /iwbep/cl_mgw_push_abs_data,
      "! <p class="shorttext synchronized" lang="en">Add to data provider</p>
      "!
      "! @parameter i_entity_name | <p class="shorttext synchronized" lang="en">Entity name</p>
      "! @parameter i_class_name | <p class="shorttext synchronized" lang="en">Class name</p>
      "! @parameter i_actions | <p class="shorttext synchronized" lang="en">List of actions</p>
      add
        IMPORTING
          i_entity_name TYPE zodata_data_provider-entity_name
          i_class_name  TYPE zodata_entity-class_name
          i_actions     TYPE zodata_data_provider-actions OPTIONAL,
      "! <p class="shorttext synchronized" lang="en">Add list of entities to the data provider</p>
      "!
      "! @parameter i_entities | <p class="shorttext synchronized" lang="en">List of entities</p>
      add_entities2providers
        IMPORTING
          i_entities TYPE zodata_entity_tt,
      "! <p class="shorttext synchronized" lang="en">Get all</p>
      "!
      "! @parameter r_data_providers | <p class="shorttext synchronized" lang="en">Every data provider</p>
      get_all
        RETURNING
          VALUE(r_data_providers) TYPE zodata_data_provider_tt,
      "! <p class="shorttext synchronized" lang="en">Get data provider</p>
      "!
      "! @parameter i_entity_name | <p class="shorttext synchronized" lang="en">Entity name</p>
      "! @parameter r_data_provider | <p class="shorttext synchronized" lang="en">Data provider</p>
      get
        IMPORTING
          i_entity_name          TYPE zodata_data_provider-entity_name
        RETURNING
          VALUE(r_data_provider) TYPE zodata_data_provider,
      "! <p class="shorttext synchronized" lang="en">Get action</p>
      "!
      "! @parameter i_action | <p class="shorttext synchronized" lang="en">Action name</p>
      "! @parameter r_data_provider | <p class="shorttext synchronized" lang="en">Action data provider</p>
      get_action
        IMPORTING
          i_action               TYPE string
        RETURNING
          VALUE(r_data_provider) TYPE zodata_data_provider.
  PROTECTED SECTION.
  PRIVATE SECTION.
    DATA:
      data_providers TYPE zodata_data_provider_tt,
      dpc_object     TYPE REF TO /iwbep/cl_mgw_push_abs_data.
    METHODS:
      "! <p class="shorttext synchronized" lang="en">Create odata class instance</p>
      "!
      "! @parameter i_class_name | <p class="shorttext synchronized" lang="en">Class name</p>
      "! @parameter r_instance | <p class="shorttext synchronized" lang="en">Odata class instance</p>
      create_instance
        IMPORTING
          i_class_name      TYPE zodata_entity-class_name
        RETURNING
          VALUE(r_instance) TYPE zodata_data_provider-instance.
ENDCLASS.



CLASS zcl_odata_data_provider IMPLEMENTATION.
  METHOD add.
    DATA: ls_data_provider LIKE LINE OF me->data_providers.

    ls_data_provider-entity_name   = i_entity_name.
    ls_data_provider-instance      = me->create_instance( i_class_name ).
    ls_data_provider-actions       = i_actions.


    APPEND ls_data_provider TO me->data_providers.
  ENDMETHOD.

  METHOD create_instance.
    DATA: lt_params TYPE abap_parmbind_tab.

    DATA(lv_class_name) = to_upper( i_class_name ).
    lt_params = VALUE #( ( name  = 'IO_DPC_OBJECT'
                           kind  = cl_abap_objectdescr=>exporting
                           value = REF #( me->dpc_object ) ) ).

    CREATE OBJECT r_instance TYPE (lv_class_name)
    PARAMETER-TABLE lt_params.

  ENDMETHOD.

  METHOD get.
    TRY.
        DATA(lv_entity_name) = i_entity_name.
        r_data_provider = me->data_providers[ entity_name = lv_entity_name ].
      CATCH cx_sy_itab_line_not_found.
        ##TODO
    ENDTRY.
  ENDMETHOD.

  METHOD get_all.
    r_data_providers = me->data_providers.
  ENDMETHOD.

  METHOD constructor.
    me->dpc_object = i_dpc_object.
  ENDMETHOD.

  METHOD add_entities2providers.
    LOOP AT i_entities ASSIGNING FIELD-SYMBOL(<ls_entity>).
      APPEND INITIAL LINE TO me->data_providers ASSIGNING FIELD-SYMBOL(<ls_data_provider>).
      <ls_data_provider>-entity_name = <ls_entity>-entity_name.
      <ls_data_provider>-instance = me->create_instance( i_class_name = <ls_entity>-class_name ).
      SELECT *
        FROM zodata_actions
        INTO TABLE @DATA(actions)
        WHERE namespace = @<ls_entity>-namespace
          AND entity    = @<ls_entity>-entity_name.
      LOOP AT actions ASSIGNING FIELD-SYMBOL(<ls_action>).
        APPEND <ls_action>-action_name TO <ls_data_provider>-actions.
      ENDLOOP.
    ENDLOOP.
  ENDMETHOD.

  METHOD get_action.
    LOOP AT me->data_providers ASSIGNING FIELD-SYMBOL(<ls_data_provider>) WHERE actions IS NOT INITIAL.
      IF line_exists( <ls_data_provider>-actions[ table_line = i_action ] ).
        r_data_provider = <ls_data_provider>.
        RETURN.
      ENDIF.
    ENDLOOP.
  ENDMETHOD.

ENDCLASS.
