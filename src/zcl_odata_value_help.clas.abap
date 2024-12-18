"! <p class="shorttext synchronized">Dynamic Value help</p>
CLASS zcl_odata_value_help DEFINITION
  PUBLIC
  INHERITING FROM zcl_odata_main
  CREATE PUBLIC.

  PUBLIC SECTION.
    TYPES:
      BEGIN OF tty_value_help,
        search_help TYPE string,
        value       TYPE string,
        description TYPE string,
      END OF tty_value_help,
      tty_t_value_help TYPE STANDARD TABLE OF tty_value_help WITH KEY search_help value.

    METHODS /iwbep/if_mgw_appl_srv_runtime~get_entityset REDEFINITION.
    METHODS /iwbep/if_mgw_appl_srv_runtime~get_entity    REDEFINITION.

  PROTECTED SECTION.

  PRIVATE SECTION.
    TYPES:
      BEGIN OF ty_s_clause,
        line TYPE c LENGTH 72,
      END OF ty_s_clause,
      ty_t_clause TYPE STANDARD TABLE OF ty_s_clause WITH EMPTY KEY.

    "! <p class="shorttext synchronized">Get customizing</p>
    "!
    "! @parameter i_filter  | <p class="shorttext synchronized">Search field filter</p>
    "! @parameter r_sh_cust | <p class="shorttext synchronized">Customizing</p>
    "! @raising   zcx_odata | <p class="shorttext synchronized">Error</p>
    METHODS get_customizing
      IMPORTING i_filter         TYPE /iwbep/t_cod_select_options
      RETURNING VALUE(r_sh_cust) TYPE zodata_searchhlp
      RAISING   zcx_odata.

    "! <p class="shorttext synchronized">Get texttable from table</p>
    "!
    "! @parameter i_table_name | <p class="shorttext synchronized">Table name</p>
    "! @parameter e_checkfield | <p class="shorttext synchronized">Field to check for</p>
    "! @parameter r_texttable  | <p class="shorttext synchronized">Text table</p>
    METHODS get_texttable
      IMPORTING i_table_name       TYPE tabname
      EXPORTING e_checkfield       TYPE dd08v-fieldname
      RETURNING VALUE(r_texttable) TYPE dd08v-tabname.

    "! <p class="shorttext synchronized">Get values by table</p>
    "!
    "! @parameter i_customizing | <p class="shorttext synchronized">Customizing</p>
    "! @parameter r_value_help  | <p class="shorttext synchronized">Value help data</p>
    METHODS get_data_by_table
      IMPORTING i_customizing       TYPE zodata_searchhlp
      RETURNING VALUE(r_value_help) TYPE tty_t_value_help.

    "! <p class="shorttext synchronized">Get values by domain</p>
    "!
    "! @parameter i_customizing | <p class="shorttext synchronized">Customizing</p>
    "! @parameter r_value_help  | <p class="shorttext synchronized">Value help data</p>
    "! @raising   zcx_odata     | <p class="shorttext synchronized">Error</p>
    METHODS get_data_by_domain
      IMPORTING i_customizing       TYPE zodata_searchhlp
      RETURNING VALUE(r_value_help) TYPE tty_t_value_help
      RAISING   zcx_odata.

    "! <p class="shorttext synchronized">Build dynamic where condition</p>
    "!
    "! @parameter i_customizing | <p class="shorttext synchronized">Customizing</p>
    "! @parameter r_where_cond  | <p class="shorttext synchronized">Error</p>
    METHODS build_where_condition
      IMPORTING i_customizing       TYPE zodata_searchhlp
      RETURNING VALUE(r_where_cond) TYPE ty_t_clause.

    "! <p class="shorttext synchronized">Get table values and information</p>
    "!
    "! @parameter is_customizing      | <p class="shorttext synchronized">Customizing</p>
    "! @parameter ev_checkfield       | <p class="shorttext synchronized">Checkfield</p>
    "! @parameter et_table_values     | <p class="shorttext synchronized">Table data</p>
    "! @parameter et_texttable_values | <p class="shorttext synchronized">Texttable data</p>
    METHODS get_table_values_and_info
      IMPORTING is_customizing      TYPE zodata_searchhlp
      EXPORTING ev_checkfield       TYPE forfield
                et_table_values     TYPE ANY TABLE
                et_texttable_values TYPE any.

    "! <p class="shorttext synchronized">Check of table contains language</p>
    "!
    "! @parameter it_table_values | <p class="shorttext synchronized">Table data</p>
    "! @parameter rv_contains     | <p class="shorttext synchronized">Contains language</p>
    METHODS check_table_contains_language
      IMPORTING it_table_values    TYPE ANY TABLE
      RETURNING VALUE(rv_contains) TYPE os_boolean.

    "! <p class="shorttext synchronized">Get text table data</p>
    "!
    "! @parameter iv_texttable        | <p class="shorttext synchronized">Text table name</p>
    "! @parameter et_texttable_values | <p class="shorttext synchronized">Text table data</p>
    METHODS get_texttable_data
      IMPORTING iv_texttable        TYPE tabname
      EXPORTING et_texttable_values TYPE ANY TABLE.
ENDCLASS.


CLASS zcl_odata_value_help IMPLEMENTATION.
  METHOD /iwbep/if_mgw_appl_srv_runtime~get_entity.
    DATA value_hlp TYPE tty_value_help.

    io_tech_request_context->get_converted_keys( IMPORTING es_key_values = value_hlp ).              " Entity Key Values - converted

    copy_data_to_ref( EXPORTING i_data = value_hlp
                      CHANGING  c_data = er_entity ).
  ENDMETHOD.

  METHOD /iwbep/if_mgw_appl_srv_runtime~get_entityset.
    DATA value_help        TYPE tty_t_value_help.
    DATA ls_customizing    TYPE zodata_searchhlp.
    DATA lt_filter_options TYPE /iwbep/s_mgw_select_option-select_options.

    TRY.
        DATA(filter) = io_tech_request_context->get_filter( )->get_filter_select_options( ).

        IF     filter IS INITIAL
           AND io_tech_request_context->get_entity_type_name( )  = zif_odata_constants=>gc_global_entities-value_help.
          RAISE EXCEPTION TYPE zcx_odata
            EXPORTING
              textid = zcx_odata=>no_filter_passed.
        ELSEIF filter IS NOT INITIAL.
          lt_filter_options = filter[ property = 'SEARCH_HELP' ]-select_options.
        ELSEIF io_tech_request_context->get_entity_type_name( ) <> zif_odata_constants=>gc_global_entities-value_help.
          lt_filter_options = VALUE #( ( low    = io_tech_request_context->get_entity_type_name( )
                                         sign   = 'I'
                                         option = 'EQ' ) ).
        ENDIF.

        ls_customizing = get_customizing( lt_filter_options ).

        IF ls_customizing-tabname IS NOT INITIAL.
          value_help = get_data_by_table( i_customizing = ls_customizing ).
        ELSEIF ls_customizing-data_element IS NOT INITIAL.
          value_help = get_data_by_domain( i_customizing = ls_customizing ).
        ENDIF.

        " add empty value if none exists
        IF NOT line_exists( value_help[ value = '' ] ).
          APPEND VALUE #( value       = ''
                          description = ' '
                          search_help = ls_customizing-id ) TO value_help.
        ENDIF.

        entityset_filter_page_order( EXPORTING io_tech_request_context = io_tech_request_context
                                     CHANGING  c_data                  = value_help ).

        copy_data_to_ref( EXPORTING i_data = value_help
                          CHANGING  c_data = er_entityset ).
      CATCH zcx_odata cx_sy_itab_line_not_found INTO DATA(error).
        raise_error( error ).
    ENDTRY.
  ENDMETHOD.

  METHOD get_texttable.
    " look if there is a texttable
    CALL FUNCTION 'DDUT_TEXTTABLE_GET'
      EXPORTING tabname    = i_table_name                 " Name of Table for Text Table Search
      IMPORTING texttable  = r_texttable                 " Text Table if it Exists. Otherwise SPACE.
                checkfield = e_checkfield.                 " Poss. Check Field to which Text Key is Appended
  ENDMETHOD.

  METHOD get_customizing.
    SELECT * FROM zodata_searchhlp
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
    DATA description_component TYPE string.
    FIELD-SYMBOLS <table_values>    TYPE ANY TABLE.
    FIELD-SYMBOLS <texttable_value> TYPE ANY TABLE.

    description_component = i_customizing-description_field.

    get_table_values_and_info( EXPORTING is_customizing      = i_customizing
                               IMPORTING ev_checkfield       = DATA(lv_checkfield)
                                         et_table_values     = <table_values>
                                         et_texttable_values = <texttable_value> ).

    LOOP AT <table_values> ASSIGNING FIELD-SYMBOL(<table_value>).
      APPEND INITIAL LINE TO r_value_help ASSIGNING FIELD-SYMBOL(<value_help>).
      ASSIGN COMPONENT lv_checkfield OF STRUCTURE <table_value> TO FIELD-SYMBOL(<value>).

      IF sy-subrc <> 0.
        CONTINUE.
      ENDIF.

      <value_help>-search_help = i_customizing-id.
      <value_help>-value       = <value>.

      IF <texttable_value> IS ASSIGNED.
        LOOP AT <texttable_value> ASSIGNING FIELD-SYMBOL(<texttable>).
          ASSIGN COMPONENT lv_checkfield OF STRUCTURE <texttable> TO FIELD-SYMBOL(<t_id_value>).
          IF sy-subrc <> 0.
            CONTINUE.
          ENDIF.
          IF <t_id_value> <> <value>.
            CONTINUE.
          ENDIF.
          ASSIGN COMPONENT description_component OF STRUCTURE <texttable> TO FIELD-SYMBOL(<description>).
          IF sy-subrc <> 0.
            CONTINUE.
          ENDIF.
          <value_help>-description = <description>.
          DELETE TABLE <texttable_value> FROM <texttable>.
          EXIT.
        ENDLOOP.
      ELSE.
        ASSIGN COMPONENT description_component OF STRUCTURE <table_value> TO <description>.
        IF sy-subrc <> 0.
          CONTINUE.
        ENDIF.
        <value_help>-description = <description>.
      ENDIF.
    ENDLOOP.
  ENDMETHOD.

  METHOD get_table_values_and_info.
    DATA lv_table_name TYPE tabname.
    FIELD-SYMBOLS <lt_table_values> TYPE ANY TABLE.
    DATA table TYPE REF TO data.

    lv_table_name = is_customizing-tabname.

    CREATE DATA table TYPE TABLE OF (lv_table_name).
    ASSIGN table->* TO <lt_table_values>.

    DATA(where_cond) = build_where_condition( is_customizing ).

    IF check_table_contains_language( <lt_table_values> ).

      zcl_odata_value_help_dpc=>read_dyn_table_with_language( EXPORTING iv_table_name      = lv_table_name
                                                                        it_where_condition = where_cond
                                                              IMPORTING et_table_data      = <lt_table_values> ).
    ELSE.

      zcl_odata_value_help_dpc=>read_dyn_table( EXPORTING iv_table_name      = lv_table_name
                                                          it_where_condition = where_cond
                                                IMPORTING et_table_data      = <lt_table_values> ).

      DATA(lv_texttable) = get_texttable( EXPORTING i_table_name = lv_table_name
                                          IMPORTING e_checkfield = ev_checkfield ).
    ENDIF.
    et_table_values = <lt_table_values>.

    IF lv_texttable IS INITIAL.
      ev_checkfield = is_customizing-data_element.
    ELSE.

      get_texttable_data( EXPORTING iv_texttable        = lv_texttable
                          IMPORTING et_texttable_values = et_texttable_values ).
    ENDIF.
  ENDMETHOD.

  METHOD get_data_by_domain.
    DATA data_element TYPE REF TO cl_abap_elemdescr.

    data_element ?= cl_abap_typedescr=>describe_by_name( i_customizing-data_element ).

    IF data_element->kind <> data_element->kind_elem.
      RETURN.
    ENDIF.

    data_element->get_ddic_fixed_values( EXPORTING  p_langu        = sy-langu         " Current Language
                                         RECEIVING  p_fixed_values = DATA(fixed_values)                 " Defaults
                                         EXCEPTIONS not_found      = 1                " Type could not be found
                                                    no_ddic_type   = 2                " Typ is not a dictionary type
                                                    OTHERS         = 3 ).
    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE zcx_odata
        EXPORTING
          textid = zcx_odata=>convert_msg( ).
    ENDIF.

    LOOP AT fixed_values ASSIGNING FIELD-SYMBOL(<fixed_value>).
      APPEND INITIAL LINE TO r_value_help ASSIGNING FIELD-SYMBOL(<value_help>).
      <value_help>-search_help = i_customizing-id.
      <value_help>-value       = <fixed_value>-low.
      <value_help>-description = <fixed_value>-ddtext.
    ENDLOOP.
  ENDMETHOD.

  METHOD build_where_condition.
    DATA cond_tab TYPE STANDARD TABLE OF hrcond.

    IF i_customizing-where_data_element1 IS NOT INITIAL.
      APPEND VALUE #( field = i_customizing-where_data_element1
                      opera = 'EQ'
                      low   = i_customizing-where_value1 ) TO cond_tab.
    ENDIF.

    IF i_customizing-where_data_element2 IS NOT INITIAL.
      APPEND VALUE #( field = i_customizing-where_data_element2
                      opera = 'EQ'
                      low   = i_customizing-where_value2 ) TO cond_tab.
    ENDIF.

    CALL FUNCTION 'RH_DYNAMIC_WHERE_BUILD'
      EXPORTING  dbtable         = i_customizing-tabname                 " Database Table
      TABLES     condtab         = cond_tab                 " Condition Table
                 where_clause    = r_where_cond                  " Where Clause
      EXCEPTIONS empty_condtab   = 1
                 no_db_field     = 2
                 unknown_db      = 3
                 wrong_condition = 4
                 OTHERS          = 5.

    IF sy-subrc <> 0.
      RETURN. " maybe an exception?
    ENDIF.
  ENDMETHOD.

  METHOD check_table_contains_language.
    DATA lt_keys      TYPE ddfields.
    DATA lo_table     TYPE REF TO cl_abap_tabledescr.
    DATA lo_structure TYPE REF TO cl_abap_structdescr.

    lo_table ?= cl_abap_tabledescr=>describe_by_data( it_table_values ).
    lo_structure ?= lo_table->get_table_line_type( ).

    lo_structure->get_ddic_field_list( RECEIVING  p_field_list = lt_keys                 " List of Dictionary Descriptions for the Components
                                       EXCEPTIONS not_found    = 1                " Type could not be found
                                                  no_ddic_type = 2                " Typ is not a dictionary type
                                                  OTHERS       = 3 ).
    DELETE lt_keys WHERE keyflag <> abap_true.

    DATA(lt_components) = lo_structure->get_components( ).
    IF line_exists( lt_components[ name = 'SPRAS' ] ) AND line_exists( lt_keys[ fieldname = 'SPRAS' ] ).
      rv_contains = abap_true.
    ENDIF.
  ENDMETHOD.

  METHOD get_texttable_data.
    DATA lr_table TYPE REF TO data.
    FIELD-SYMBOLS <lt_texttable_value> TYPE ANY TABLE.

    CREATE DATA lr_table TYPE TABLE OF (iv_texttable).
    ASSIGN lr_table->* TO <lt_texttable_value>.
    IF sy-subrc <> 0.
      RETURN.
    ENDIF.

    zcl_odata_value_help_dpc=>read_dyn_table_with_language( EXPORTING iv_table_name = iv_texttable
                                                            IMPORTING et_table_data = <lt_texttable_value> ).

    et_texttable_values = <lt_texttable_value>.
  ENDMETHOD.
ENDCLASS.
