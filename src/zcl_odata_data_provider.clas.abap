CLASS zcl_odata_data_provider DEFINITION
  PUBLIC
  FINAL
  CREATE PUBLIC .

  PUBLIC SECTION.
    METHODS:
      constructor
        IMPORTING
          i_dpc_object TYPE REF TO /iwbep/cl_mgw_push_abs_data,
      add
        IMPORTING
          i_entity_name TYPE zodata_data_provider-entity_name
          i_class_name  TYPE zodata_entity-class_name
          i_actions     TYPE zodata_data_provider-actions OPTIONAL,
      add_entities2providers
        IMPORTING
          i_entities TYPE zodata_entity_tt,
      get_all
        RETURNING
          VALUE(r_data_providers) TYPE zodata_data_provider_tt,
      get
        IMPORTING
          i_entity_name          TYPE zodata_data_provider-entity_name
        RETURNING
          VALUE(r_data_provider) TYPE zodata_data_provider,
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
      create_instance
        IMPORTING
          i_class_name      TYPE zodata_entity-class_name
        RETURNING
          VALUE(r_instance) TYPE zodata_data_provider-instance.
ENDCLASS.



CLASS zcl_odata_data_provider IMPLEMENTATION.
  METHOD add.
    DATA: data_provider LIKE LINE OF me->data_providers.

    data_provider-entity_name   = i_entity_name.
    data_provider-instance      = me->create_instance( i_class_name = i_class_name ).
    data_provider-actions       = i_actions.


    APPEND data_provider TO me->data_providers.
  ENDMETHOD.

  METHOD create_instance.
    DATA: params TYPE abap_parmbind_tab.

    DATA(class_name) = to_upper( i_class_name ).
    params = VALUE #( ( name  = 'IO_DPC_OBJECT'
                        kind  = cl_abap_objectdescr=>exporting
                        value = REF #( me->dpc_object ) ) ).

    CREATE OBJECT r_instance TYPE (class_name)
    PARAMETER-TABLE params.

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
    LOOP AT i_entities ASSIGNING FIELD-SYMBOL(<entity>).
      APPEND INITIAL LINE TO me->data_providers ASSIGNING FIELD-SYMBOL(<data_provider>).
      <data_provider>-entity_name = <entity>-entity_name.
      <data_provider>-instance = me->create_instance( i_class_name = <entity>-class_name ).
      SELECT *
        FROM zodata_actions
        INTO TABLE @DATA(actions)
        WHERE namespace = @<entity>-namespace
          AND entity    = @<entity>-entity_name.
      LOOP AT actions ASSIGNING FIELD-SYMBOL(<action>).
        APPEND <action>-action_name TO <data_provider>-actions.
      ENDLOOP.
    ENDLOOP.
  ENDMETHOD.

  METHOD get_action.
    LOOP AT me->data_providers ASSIGNING FIELD-SYMBOL(<data_provider>) WHERE actions IS NOT INITIAL.
      IF line_exists( <data_provider>-actions[ table_line = i_action ] ).
        r_data_provider = <data_provider>.
        RETURN.
      ENDIF.
    ENDLOOP.
  ENDMETHOD.

ENDCLASS.
