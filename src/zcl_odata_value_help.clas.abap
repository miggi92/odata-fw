"! <p class="shorttext synchronized" lang="en">Dynamic Value help</p>
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
      tty_t_value_help TYPE STANDARD TABLE OF tty_value_help WITH KEY search_help value.
    METHODS:
      /iwbep/if_mgw_appl_srv_runtime~get_entityset REDEFINITION,
      /iwbep/if_mgw_appl_srv_runtime~get_entity REDEFINITION.
  PROTECTED SECTION.
  PRIVATE SECTION.
    TYPES:
      BEGIN OF ty_s_clause,
        line(72) TYPE c,
      END OF ty_s_clause,
      ty_t_clause TYPE STANDARD TABLE OF ty_s_clause WITH EMPTY KEY.

    METHODS:
      "! <p class="shorttext synchronized" lang="en">Get customizing</p>
      "!
      "! @parameter i_filter | <p class="shorttext synchronized" lang="en">Search field filter</p>
      "! @parameter r_sh_cust | <p class="shorttext synchronized" lang="en">Customizing</p>
      "! @raising zcx_odata | <p class="shorttext synchronized" lang="en">Error</p>
      get_customizing
        IMPORTING
          i_filter         TYPE /iwbep/t_cod_select_options
        RETURNING
          VALUE(r_sh_cust) TYPE zodata_searchhlp
        RAISING
          zcx_odata,
      "! <p class="shorttext synchronized" lang="en">Get texttable from table</p>
      "!
      "! @parameter i_table_name | <p class="shorttext synchronized" lang="en">Table name</p>
      "! @parameter e_checkfield | <p class="shorttext synchronized" lang="en">Field to check for</p>
      "! @parameter r_texttable | <p class="shorttext synchronized" lang="en">Text table</p>
      get_texttable
        IMPORTING
          i_table_name       TYPE tabname
        EXPORTING
          e_checkfield       TYPE dd08v-fieldname
        RETURNING
          VALUE(r_texttable) TYPE dd08v-tabname,
      "! <p class="shorttext synchronized" lang="en">Get values by table</p>
      "!
      "! @parameter i_customizing | <p class="shorttext synchronized" lang="en">Customizing</p>
      "! @parameter r_value_help | <p class="shorttext synchronized" lang="en">Value help data</p>
      get_data_by_table
        IMPORTING
          i_customizing       TYPE zodata_searchhlp
        RETURNING
          VALUE(r_value_help) TYPE tty_t_value_help,
      "! <p class="shorttext synchronized" lang="en">Get values by domain</p>
      "!
      "! @parameter i_customizing | <p class="shorttext synchronized" lang="en">Customizing</p>
      "! @parameter r_value_help | <p class="shorttext synchronized" lang="en">Value help data</p>
      "! @raising zcx_odata | <p class="shorttext synchronized" lang="en">Error</p>
      get_data_by_domain
        IMPORTING
          i_customizing       TYPE zodata_searchhlp
        RETURNING
          VALUE(r_value_help) TYPE tty_t_value_help
        RAISING
          zcx_odata,
      "! <p class="shorttext synchronized" lang="en">Build dynamic where condition</p>
      "!
      "! @parameter i_customizing | <p class="shorttext synchronized" lang="en">Customizing</p>
      "! @parameter r_where_cond | <p class="shorttext synchronized" lang="en">Error</p>
      build_where_condition
        IMPORTING
          i_customizing       TYPE zodata_searchhlp
        RETURNING
          VALUE(r_where_cond) TYPE ty_t_clause.
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
    DATA: value_help        TYPE tty_t_value_help,
          ls_customizing    TYPE zodata_searchhlp,
          lt_filter_options TYPE /iwbep/s_mgw_select_option-select_options.

    TRY.
        DATA(filter) = io_tech_request_context->get_filter( )->get_filter_select_options( ).

        IF filter IS INITIAL 
        AND io_tech_request_context->get_entity_type_name( ) = zif_odata_constants=>gc_global_entities-value_help.
          RAISE EXCEPTION TYPE zcx_odata
            EXPORTING
              textid = zcx_odata=>no_filter_passed.
        ELSEIF filter IS NOT INITIAL.
          lt_filter_options = filter[ property = 'SEARCH_HELP' ]-select_options.
        ELSEIF io_tech_request_context->get_entity_type_name( ) <> zif_odata_constants=>gc_global_entities-value_help.
          lt_filter_options = VALUE #( (  low = io_tech_request_context->get_entity_type_name( ) 
                                          sign = 'I' 
                                          option = 'EQ' ) ).
        ENDIF.

        ls_customizing = me->get_customizing( lt_filter_options ).

        IF ls_customizing-tabname IS NOT INITIAL.
          value_help = me->get_data_by_table( i_customizing = ls_customizing ).
        ELSEIF ls_customizing-data_element IS NOT INITIAL.
          value_help = me->get_data_by_domain( i_customizing = ls_customizing ).
        ENDIF.

        " add empty value if none exists
        IF NOT line_exists( value_help[ value = '' ] ).
          APPEND VALUE #( value = '' description = ' ' search_help = ls_customizing-id ) TO value_help.
        ENDIF.

        me->entityset_filter_page_order(
          EXPORTING
            io_tech_request_context = io_tech_request_context
          CHANGING
            c_data                  = value_help
        ).

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
          checkfield            TYPE dd08v-fieldname,
          table_ref             TYPE REF TO cl_abap_tabledescr,
          keys                  TYPE  ddfields,
          structure             TYPE REF TO cl_abap_structdescr.

    FIELD-SYMBOLS:
      <table_values>    TYPE ANY TABLE,
      <texttable_value> TYPE ANY TABLE.

    table_name              = i_customizing-tabname.
    description_component   = i_customizing-description_field.

    CREATE DATA table TYPE TABLE OF (table_name).
    ASSIGN table->* TO <table_values>.

    table_ref ?= cl_abap_tabledescr=>describe_by_data( <table_values> ).
    structure ?= table_ref->get_table_line_type( ).

    structure->get_ddic_field_list(
      RECEIVING
        p_field_list             = keys                 " List of Dictionary Descriptions for the Components
      EXCEPTIONS
        not_found                = 1                " Type could not be found
        no_ddic_type             = 2                " Typ is not a dictionary type
        OTHERS                   = 3
    ).
    DELETE keys WHERE keyflag <> abap_true.

    DATA(components) = structure->get_components( ).

    DATA(where_cond) = me->build_where_condition( i_customizing ).

    IF line_exists( components[ name = 'SPRAS' ] ) AND line_exists( keys[ fieldname = 'SPRAS' ] ).
      SELECT *
         FROM (table_name)
         INTO TABLE @<table_values>
         WHERE spras = @sy-langu
           AND (where_cond). "#EC CI_SUBRC 
    ELSE.
      SELECT *
        FROM (table_name)
        INTO TABLE @<table_values>
        WHERE (where_cond)."#EC CI_SUBRC 

      DATA(texttable) = get_texttable(
                    EXPORTING
                      i_table_name = table_name
                    IMPORTING
                      e_checkfield = checkfield ).
    ENDIF.

    IF texttable IS INITIAL.
      checkfield = i_customizing-data_element.
    ELSE.
      CREATE DATA table TYPE TABLE OF (texttable).
      ASSIGN table->* TO <texttable_value>.

      DATA: test TYPE string.

      SELECT *
          FROM (texttable)
          INTO TABLE @<texttable_value>
           WHERE spras = @sy-langu
             AND (test). "#EC CI_SUBRC 
    ENDIF.

    LOOP AT <table_values> ASSIGNING FIELD-SYMBOL(<table_value>).
      APPEND INITIAL LINE TO r_value_help ASSIGNING FIELD-SYMBOL(<value_help>).
      ASSIGN COMPONENT checkfield OF STRUCTURE <table_value> TO FIELD-SYMBOL(<value>).

      if sy-subrc <> 0.
        continue.
      endif.

      <value_help>-search_help  = i_customizing-id.
      <value_help>-value        = <value>.

      IF <texttable_value> IS ASSIGNED.
        LOOP AT <texttable_value> ASSIGNING FIELD-SYMBOL(<texttable>).
          ASSIGN COMPONENT checkfield OF STRUCTURE <texttable> TO FIELD-SYMBOL(<t_id_value>).
          if sy-subrc <> 0.
            continue.
          endif.
          CHECK <t_id_value> = <value>.
          ASSIGN COMPONENT description_component OF STRUCTURE <texttable> TO FIELD-SYMBOL(<description>).
          if sy-subrc <> 0.
            continue.
          endif.
          <value_help>-description = <description>.
          DELETE TABLE <texttable_value> FROM <texttable>.
          EXIT.
        ENDLOOP.
      ELSE.
        ASSIGN COMPONENT description_component OF STRUCTURE <table_value> TO <description>.
        if sy-subrc <> 0.
          continue.
        endif.
        <value_help>-description = <description>.
      ENDIF.
    ENDLOOP.
  ENDMETHOD.

  METHOD get_data_by_domain.
    DATA: data_element TYPE REF TO cl_abap_elemdescr.

    data_element ?= cl_abap_typedescr=>describe_by_name( i_customizing-data_element ).

    IF data_element->kind <> data_element->kind_elem.
      return.
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

  METHOD build_where_condition.
    DATA: cond_tab TYPE STANDARD TABLE OF hrcond.

    IF i_customizing-where_data_element1 IS NOT INITIAL.
      APPEND VALUE #( field = i_customizing-where_data_element1 
                      opera = 'EQ' 
                      low = i_customizing-where_value1 ) TO cond_tab.
    ENDIF.

    IF i_customizing-where_data_element2 IS NOT INITIAL.
      APPEND VALUE #( field = i_customizing-where_data_element2 
                      opera = 'EQ' 
                      low = i_customizing-where_value2 ) TO cond_tab.
    ENDIF.

    CALL FUNCTION 'RH_DYNAMIC_WHERE_BUILD'
      EXPORTING
        dbtable         = i_customizing-tabname                 " Database Table
      TABLES
        condtab         = cond_tab                 " Condition Table
        where_clause    = r_where_cond                  " Where Clause
      EXCEPTIONS
        empty_condtab   = 1
        no_db_field     = 2
        unknown_db      = 3
        wrong_condition = 4
        OTHERS          = 5.

    IF sy-subrc <> 0.
      return. " maybe an exception?
    ENDIF.
  ENDMETHOD.

ENDCLASS.
