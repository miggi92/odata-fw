"! <p class="shorttext synchronized" lang="en">Main Odata Class</p>
CLASS zcl_odata_main DEFINITION
  PUBLIC
  CREATE PUBLIC .

  PUBLIC SECTION.
    INTERFACES:
      /iwbep/if_mgw_appl_srv_runtime.
    METHODS:
      "! <p class="shorttext synchronized" lang="en">Constructor</p>
      constructor
        IMPORTING
          io_dpc_object TYPE REF TO /iwbep/cl_mgw_push_abs_data,
      "! <p class="shorttext synchronized" lang="en">Before processing</p>
      before_processing
        RAISING
          /iwbep/cx_mgw_tech_exception
          /iwbep/cx_mgw_busi_exception.
  PROTECTED SECTION.
    DATA:
      dpc_object        TYPE REF TO /iwbep/cl_mgw_push_abs_data,
      message_container TYPE REF TO /iwbep/if_message_container.
    METHODS:
      copy_data_to_ref
        IMPORTING
          i_data TYPE any
        CHANGING
          c_data TYPE REF TO data,
      entityset_filter_page_order
        IMPORTING
          io_tech_request_context TYPE REF TO /iwbep/if_mgw_req_entityset
        CHANGING
          c_data                  TYPE table
        RAISING
          /iwbep/cx_mgw_tech_exception,
      order_collection
        IMPORTING
          io_tech_request_context TYPE REF TO /iwbep/if_mgw_req_entityset
        CHANGING
          c_data                  TYPE table
        RAISING
          /iwbep/cx_mgw_tech_exception,
      get_orderby_clause
        IMPORTING
          io_tech_request_context  TYPE REF TO /iwbep/if_mgw_req_entityset
        RETURNING
          VALUE(rv_orderby_clause) TYPE string,
      filter_collection
        IMPORTING
          io_tech_request_context TYPE REF TO /iwbep/if_mgw_req_entityset
        CHANGING
          c_data                  TYPE table
        RAISING
          /iwbep/cx_mgw_tech_exception,
      paginate_collection
        IMPORTING
          io_tech_request_context TYPE REF TO /iwbep/if_mgw_req_entityset
        CHANGING
          c_data                  TYPE table,
      get_properties
        IMPORTING
          io_tech_request_context TYPE REF TO /iwbep/if_mgw_req_entityset
        RETURNING
          VALUE(r_properties)     TYPE /iwbep/if_mgw_odata_re_prop=>ty_t_mgw_odata_properties
        RAISING
          /iwbep/cx_mgw_tech_exception,
      raise_error
        IMPORTING
          i_error TYPE REF TO cx_root
        RAISING
          /iwbep/cx_mgw_busi_exception,
      get_request_header
        RETURNING
          VALUE(r_request_headers) TYPE tihttpnvp
        RAISING
          /iwbep/cx_mgw_tech_exception.
  PRIVATE SECTION.

ENDCLASS.


CLASS zcl_odata_main IMPLEMENTATION.


  METHOD /iwbep/if_mgw_appl_srv_runtime~batch_begin.
    RETURN.
  ENDMETHOD.


  METHOD /iwbep/if_mgw_appl_srv_runtime~batch_end.
    RETURN.
  ENDMETHOD.


  METHOD /iwbep/if_mgw_appl_srv_runtime~changeset_begin.
    RETURN.
  ENDMETHOD.


  METHOD /iwbep/if_mgw_appl_srv_runtime~changeset_end.
    RETURN.
  ENDMETHOD.


  METHOD /iwbep/if_mgw_appl_srv_runtime~changeset_process.
    RETURN.
  ENDMETHOD.


  METHOD /iwbep/if_mgw_appl_srv_runtime~create_deep_entity.
    RETURN.
  ENDMETHOD.


  METHOD /iwbep/if_mgw_appl_srv_runtime~create_entity.
    RETURN.
  ENDMETHOD.


  METHOD /iwbep/if_mgw_appl_srv_runtime~create_stream.
    RETURN.
  ENDMETHOD.


  METHOD /iwbep/if_mgw_appl_srv_runtime~delete_entity.
    RETURN.
  ENDMETHOD.


  METHOD /iwbep/if_mgw_appl_srv_runtime~delete_stream.
    RETURN.
  ENDMETHOD.


  METHOD /iwbep/if_mgw_appl_srv_runtime~execute_action.
    RETURN.
  ENDMETHOD.


  METHOD /iwbep/if_mgw_appl_srv_runtime~get_entity.
    RETURN.
  ENDMETHOD.


  METHOD /iwbep/if_mgw_appl_srv_runtime~get_entityset.
    RETURN.
  ENDMETHOD.


  METHOD /iwbep/if_mgw_appl_srv_runtime~get_entityset_delta.
    RETURN.
  ENDMETHOD.


  METHOD /iwbep/if_mgw_appl_srv_runtime~get_expanded_entity.
    RETURN.
  ENDMETHOD.


  METHOD /iwbep/if_mgw_appl_srv_runtime~get_expanded_entityset.
    RETURN.
  ENDMETHOD.


  METHOD /iwbep/if_mgw_appl_srv_runtime~get_is_conditional_implemented.
    RETURN.
  ENDMETHOD.


  METHOD /iwbep/if_mgw_appl_srv_runtime~get_is_condi_imple_for_action.
    RETURN.
  ENDMETHOD.


  METHOD /iwbep/if_mgw_appl_srv_runtime~get_stream.
    RETURN.
  ENDMETHOD.


  METHOD /iwbep/if_mgw_appl_srv_runtime~patch_entity.
    RETURN.
  ENDMETHOD.


  METHOD /iwbep/if_mgw_appl_srv_runtime~update_entity.
    RETURN.
  ENDMETHOD.


  METHOD /iwbep/if_mgw_appl_srv_runtime~update_stream.
    RETURN.
  ENDMETHOD.

  METHOD before_processing.
    RETURN. " can be redefined and used for dpc_ext class
  ENDMETHOD.


  METHOD constructor.
    me->dpc_object = io_dpc_object.
  ENDMETHOD.


  METHOD copy_data_to_ref.
    DATA: header TYPE ihttpnvp,
          table  TYPE REF TO cl_abap_tabledescr,
          dref   TYPE REF TO data.
    FIELD-SYMBOLS:
    <itab> TYPE ANY TABLE.

    me->dpc_object->copy_data_to_ref(
      EXPORTING
        is_data = i_data
      CHANGING
        cr_data = c_data
    ).

    DATA(type) = cl_abap_elemdescr=>describe_by_data_ref( c_data )->kind.

    IF type = cl_abap_elemdescr=>kind_table.
      ASSIGN c_data->* TO <itab>.
      IF sy-subrc <> 0.
        RETURN.
      ENDIF.
      DATA(count) = lines( <itab> ).
    ELSEIF i_data IS INITIAL.
      count = 0.
    ELSE.
      count = 1.
    ENDIF.

    header-name = 'count'.
    header-value = count.

    me->dpc_object->set_header( is_header = header ).
  ENDMETHOD.


  METHOD entityset_filter_page_order.
    me->filter_collection(
      EXPORTING
        io_tech_request_context = io_tech_request_context
      CHANGING
        c_data                  = c_data
    ).
    me->order_collection(
      EXPORTING
        io_tech_request_context = io_tech_request_context
      CHANGING
        c_data                  = c_data
    ).
    me->paginate_collection(
      EXPORTING
        io_tech_request_context = io_tech_request_context
      CHANGING
        c_data                  = c_data
    ).
  ENDMETHOD.


  METHOD filter_collection.
    DATA: dynamic_where      TYPE rsds_twhere,
          dynamic_where_line LIKE LINE OF dynamic_where,
          field_ranges       TYPE rsds_trange,
          entries            TYPE REF TO data.
    FIELD-SYMBOLS:
                   <entries> LIKE c_data.

    TRY.
        DATA(filter) = io_tech_request_context->get_filter( )->get_filter_select_options( ).

        IF filter IS NOT INITIAL.

          LOOP AT filter ASSIGNING FIELD-SYMBOL(<filter>).
            LOOP AT c_data ASSIGNING FIELD-SYMBOL(<data>).
              DATA(tabix) = sy-tabix.
              ASSIGN COMPONENT <filter>-property OF STRUCTURE <data> TO FIELD-SYMBOL(<value>).
              CHECK sy-subrc = 0 AND <value> IS ASSIGNED.
              IF <value> NOT IN <filter>-select_options.
                DELETE c_data INDEX tabix.
              ENDIF.
            ENDLOOP.
          ENDLOOP.
        ELSE.
          TRY.
              DATA(osql_where_clause) = io_tech_request_context->get_osql_where_clause_convert( ).
              CHECK osql_where_clause IS NOT INITIAL.
              REPLACE ALL OCCURRENCES OF '(' IN osql_where_clause WITH ''.
              REPLACE ALL OCCURRENCES OF ')' IN osql_where_clause WITH ''.
              REPLACE ALL OCCURRENCES OF | OR | IN osql_where_clause WITH | AND |.
              dynamic_where_line-tablename = 'TEST'.

              ##TODO " line ist nur 72 zeichen lang. der osql string muss aufgeteilt werden.
              DATA(length_osql) = strlen( osql_where_clause ).

              IF length_osql <= 72 .
                dynamic_where_line-where_tab = VALUE #( ( |{ osql_where_clause }| ) ).
                APPEND dynamic_where_line TO dynamic_where.
              ELSE.
                SPLIT osql_where_clause AT 'AND' INTO TABLE DATA(split_osql).

                LOOP AT split_osql ASSIGNING FIELD-SYMBOL(<split_osql>).
                  APPEND |{ <split_osql> } {
                      COND char03( WHEN sy-tabix = lines( split_osql ) THEN ''
                                   ELSE 'AND' ) }| TO dynamic_where_line-where_tab.
                ENDLOOP.
              ENDIF.
              APPEND dynamic_where_line TO dynamic_where.


              CALL FUNCTION 'FREE_SELECTIONS_WHERE_2_RANGE'
                EXPORTING
                  where_clauses            = dynamic_where                " Abgrenzungen in Form RSDS_TWHERE
                IMPORTING
                  field_ranges             = field_ranges                 " Abgrenzungen in Form RSDS_TRANGE
                EXCEPTIONS
                  expression_not_supported = 1                " (Noch) nicht unterstützter logischer Ausdruck
                  incorrect_expression     = 2                " Inkorrekter logischer Ausdruck
                  OTHERS                   = 3.
              IF sy-subrc <> 0.
                RETURN.
              ENDIF.
              DATA(ranges) = field_ranges[ 1 ].
              CREATE DATA entries LIKE c_data.
              ASSIGN entries->* TO <entries>.

              IF sy-subrc <> 0.
                RETURN.
              ENDIF.

              LOOP AT ranges-frange_t ASSIGNING FIELD-SYMBOL(<ranges>).
                LOOP AT c_data ASSIGNING <data>.
                  tabix = sy-tabix.
                  ASSIGN COMPONENT <ranges>-fieldname OF STRUCTURE <data> TO <value>.
                  CHECK sy-subrc = 0 AND <value> IS ASSIGNED.
                  IF <value> IN <ranges>-selopt_t.
                    APPEND <data> TO <entries>.
                    DELETE c_data INDEX tabix.
                  ENDIF.
                ENDLOOP.
              ENDLOOP.
              c_data = <entries>.
          ENDTRY.
        ENDIF.
      CATCH /iwbep/cx_mgw_med_exception.
    ENDTRY.
  ENDMETHOD.


  METHOD get_properties.
    DATA: facade TYPE REF TO /iwbep/cl_mgw_dp_facade.

    TRY.
        facade ?= me->dpc_object->/iwbep/if_mgw_conv_srv_runtime~get_dp_facade( ).
        r_properties = facade->/iwbep/if_mgw_dp_int_facade~get_model(
          )->get_entity_type( iv_entity_name = io_tech_request_context->get_entity_type_name( )
            )->get_properties( ).
      CATCH /iwbep/cx_mgw_med_exception INTO DATA(error).
        RAISE EXCEPTION TYPE /iwbep/cx_mgw_med_exception
          EXPORTING
            previous = error.
    ENDTRY.
  ENDMETHOD.


  METHOD get_request_header.
    DATA: facade TYPE REF TO /iwbep/if_mgw_dp_int_facade.

    facade ?= me->dpc_object->/iwbep/if_mgw_conv_srv_runtime~get_dp_facade( ).
    r_request_headers = facade->get_request_header( ).
  ENDMETHOD.


  METHOD order_collection.
    DATA: sortorder TYPE abap_sortorder_tab.
    DATA(orderby) = io_tech_request_context->get_orderby( ).

    CHECK orderby IS NOT INITIAL AND lines( c_data ) > 0.

    LOOP AT orderby ASSIGNING FIELD-SYMBOL(<orderby>).
      APPEND INITIAL LINE TO sortorder ASSIGNING FIELD-SYMBOL(<sort>).
      <sort>-name = <orderby>-property.
      IF <sort>-name IS INITIAL AND <orderby>-property_path IS NOT INITIAL.
        <sort>-name = <orderby>-property_path.
      ENDIF.

      <sort>-descending = xsdbool( NOT ( <orderby>-order = 'asc' ) ).
    ENDLOOP.

    SORT c_data BY (sortorder).
  ENDMETHOD.


  METHOD get_orderby_clause.
    DATA(lt_orderby) = io_tech_request_context->get_orderby( ).

    " Append all order properties to a string table
    IF NOT lt_orderby IS INITIAL.
      DATA: lt_order_properties TYPE TABLE OF string.

      LOOP AT lt_orderby ASSIGNING FIELD-SYMBOL(<lv_orderby>).
        DATA(lv_order_property) = |{ <lv_orderby>-property } { COND #( WHEN <lv_orderby>-order = 'desc' THEN 'DESCENDING' ) }|.
        APPEND lv_order_property TO lt_order_properties.
      ENDLOOP.

      " Concatenate all order properties with comma separation
      rv_orderby_clause = concat_lines_of(
        table = lt_order_properties
        sep = ', '
      ).
    ENDIF.
  ENDMETHOD.


  METHOD paginate_collection.
    DATA: end TYPE i.

    DATA(top) = io_tech_request_context->get_top( ).
    DATA(skip) = io_tech_request_context->get_skip( ).


    IF skip IS NOT INITIAL.
      DELETE c_data FROM 1 TO skip.
    ENDIF.

    DATA(max_entries) = lines( c_data ).

    IF top IS NOT INITIAL AND max_entries > top.
      top = top + 1.
      DELETE c_data FROM top TO max_entries.
    ENDIF.
  ENDMETHOD.


  METHOD raise_error.
    NEW zcl_odata_error_handler( me->dpc_object )->raise_exception_object( i_exception = i_error ).
  ENDMETHOD.
ENDCLASS.
