CLASS zcl_odata_value_help DEFINITION
  PUBLIC
  INHERITING FROM zcl_odata_main
  CREATE PUBLIC .

  PUBLIC SECTION.
    TYPES:
      BEGIN OF tty_value_help,
        search_help TYPE string,
        value       TYPE string,
        description TYPE string,
      END OF tty_value_help,
      tty_t_value_help TYPE STANDARD TABLE OF tty_value_help WITH DEFAULT KEY.
    METHODS:
      /iwbep/if_mgw_appl_srv_runtime~get_entityset REDEFINITION,
      /iwbep/if_mgw_appl_srv_runtime~get_entity REDEFINITION.
  PROTECTED SECTION.
  PRIVATE SECTION.
    METHODS:
      get_customizing
        IMPORTING
          i_filter         TYPE /iwbep/t_cod_select_options
        RETURNING
          VALUE(r_sh_cust) TYPE zodata_searchhlp
        RAISING
          zcx_odata,
      get_texttable
        IMPORTING
          i_table_name       TYPE tabname
        EXPORTING
          e_checkfield       TYPE dd08v-fieldname
        RETURNING
          VALUE(r_texttable) TYPE dd08v-tabname,
      get_data_by_table
        IMPORTING
          i_customizing       TYPE zodata_searchhlp
        RETURNING
          VALUE(r_value_help) TYPE tty_t_value_help,
      get_data_by_domain
        IMPORTING
          i_customizing       TYPE zodata_searchhlp
        RETURNING
          VALUE(r_value_help) TYPE tty_t_value_help
        RAISING
          zcx_odata.
ENDCLASS.



CLASS zcl_odata_value_help IMPLEMENTATION.
  METHOD /iwbep/if_mgw_appl_srv_runtime~get_entity.
    DATA: value_hlp TYPE tty_value_help.

    io_tech_request_context->get_converted_keys(
      IMPORTING
        es_key_values = value_hlp                 " Entity Key Values - converted
    ).


    me->copy_data_to_ref(
      EXPORTING
        i_data = value_hlp
      CHANGING
        c_data = er_entity
    ).
  ENDMETHOD.

  METHOD /iwbep/if_mgw_appl_srv_runtime~get_entityset.
    DATA: value_help TYPE tty_t_value_help.

    TRY.
        DATA(filter) = io_tech_request_context->get_filter( )->get_filter_select_options( ).

        IF filter IS INITIAL.
          RAISE EXCEPTION TYPE zcx_odata
            EXPORTING
              textid = zcx_odata=>no_filter_passed.
        ENDIF.
        DATA(filter_options) = filter[ property = 'SEARCH_HELP' ]-select_options.
        DATA(customizing) = me->get_customizing( filter_options ).


        IF customizing-tabname IS NOT INITIAL.
          value_help = me->get_data_by_table( i_customizing = customizing ).
        ELSEIF customizing-data_element IS NOT INITIAL.
          value_help = me->get_data_by_domain( i_customizing = customizing ).
        ENDIF.


        me->copy_data_to_ref(
          EXPORTING
            i_data = value_help
          CHANGING
            c_data = er_entityset
        ).
      CATCH zcx_odata cx_sy_itab_line_not_found INTO DATA(error).
        me->raise_error( error ).
    ENDTRY.
  ENDMETHOD.

  METHOD get_texttable.
    " look if there is a texttable
    CALL FUNCTION 'DDUT_TEXTTABLE_GET'
      EXPORTING
        tabname    = i_table_name                 " Name of Table for Text Table Search
      IMPORTING
        texttable  = r_texttable                 " Text Table if it Exists. Otherwise SPACE.
        checkfield = e_checkfield.                 " Poss. Check Field to which Text Key is Appended

  ENDMETHOD.



  METHOD get_customizing.
    SELECT *
        FROM zodata_searchhlp
        INTO TABLE @DATA(search_helps)
        WHERE id IN @i_filter.

    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE zcx_odata
        EXPORTING
          textid = zcx_odata=>no_search_help_found.
    ELSEIF lines( search_helps ) > 1.
      RAISE EXCEPTION TYPE zcx_odata
        EXPORTING
          textid = zcx_odata=>only_one_filter_id.
    ENDIF.
    r_sh_cust = search_helps[ 1 ].
  ENDMETHOD.

  METHOD get_data_by_table.
    DATA: description_component TYPE string,
          table_name            TYPE tabname,
          table                 TYPE REF TO data,
          checkfield            TYPE dd08v-fieldname.
    FIELD-SYMBOLS:
      <table_values>    TYPE ANY TABLE,
      <texttable_value> TYPE ANY TABLE.

    table_name              = i_customizing-tabname.
    description_component   = i_customizing-description_field.

    CREATE DATA table TYPE TABLE OF (table_name).
    ASSIGN table->* TO <table_values>.


    SELECT *
        FROM (table_name)
        INTO TABLE <table_values>.

    DATA(texttable) = get_texttable(
                  EXPORTING
                    i_table_name = table_name
                  IMPORTING
                    e_checkfield = checkfield ).

    IF texttable IS INITIAL.
      checkfield = i_customizing-data_element.
    ELSE.
      CREATE DATA table TYPE TABLE OF (texttable).
      ASSIGN table->* TO <texttable_value>.

      SELECT *
          FROM (texttable)
          INTO TABLE <texttable_value>
           WHERE spras = sy-langu.
    ENDIF.
    LOOP AT <table_values> ASSIGNING FIELD-SYMBOL(<table_value>).
      APPEND INITIAL LINE TO r_value_help ASSIGNING FIELD-SYMBOL(<value_help>).
      ASSIGN COMPONENT checkfield OF STRUCTURE <table_value> TO FIELD-SYMBOL(<value>).

      <value_help>-search_help  = i_customizing-id.
      <value_help>-value        = <value>.

      IF <texttable_value> IS ASSIGNED.
        LOOP AT <texttable_value> ASSIGNING FIELD-SYMBOL(<texttable>).
          ASSIGN COMPONENT checkfield OF STRUCTURE <texttable> TO FIELD-SYMBOL(<t_id_value>).
          CHECK <t_id_value> = <value>.
          ASSIGN COMPONENT description_component OF STRUCTURE <texttable> TO FIELD-SYMBOL(<description>).
          <value_help>-description = <description>.
          DELETE TABLE <texttable_value> FROM <texttable>.
          EXIT.
        ENDLOOP.
      ELSE.
        ASSIGN COMPONENT description_component OF STRUCTURE <table_value> TO <description>.
        <value_help>-description = <description>.
      ENDIF.
    ENDLOOP.
  ENDMETHOD.

  METHOD get_data_by_domain.
    DATA: data_element TYPE REF TO cl_abap_elemdescr.

    data_element ?= cl_abap_typedescr=>describe_by_name( i_customizing-data_element ).

    IF data_element->kind <> data_element->kind_elem.
      " no data element
    ENDIF.

    data_element->get_ddic_fixed_values(
      EXPORTING
        p_langu        = sy-langu         " Current Language
      RECEIVING
        p_fixed_values = DATA(fixed_values)                 " Defaults
      EXCEPTIONS
        not_found      = 1                " Type could not be found
        no_ddic_type   = 2                " Typ is not a dictionary type
        OTHERS         = 3
    ).
    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE zcx_odata
        EXPORTING
          textid = zcx_odata=>convert_msg( ).
    ENDIF.

    LOOP AT fixed_values ASSIGNING FIELD-SYMBOL(<fixed_value>).
      APPEND INITIAL LINE TO r_value_help ASSIGNING FIELD-SYMBOL(<value_help>).
      <value_help>-search_help  = i_customizing-id.
      <value_help>-value        = <fixed_value>-low .
      <value_help>-description  = <fixed_value>-ddtext.
    ENDLOOP.
  ENDMETHOD.

ENDCLASS.
