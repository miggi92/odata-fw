"! <p class="shorttext synchronized">Main Odata Class</p>
CLASS zcl_odata_main DEFINITION
  PUBLIC
  CREATE PUBLIC.

  PUBLIC SECTION.
    INTERFACES /iwbep/if_mgw_appl_srv_runtime.
    INTERFACES if_sadl_gw_dpc_util.
    INTERFACES if_sadl_gw_extension_control.
    INTERFACES if_sadl_gw_query_control.

    "! <p class="shorttext synchronized">Constructor</p>
    "! @parameter io_dpc_object | <p class="shorttext synchronized">DPC object</p>
    "! @parameter iv_namespace  | <p class="shorttext synchronized">Namespace</p>
    METHODS constructor
      IMPORTING io_dpc_object TYPE REF TO /iwbep/cl_mgw_push_abs_data
                iv_namespace  TYPE z_odata_namespace.

    "! <p class="shorttext synchronized">Before processing</p>
    "! @raising /iwbep/cx_mgw_tech_exception | <p class="shorttext synchronized">Technical exception</p>
    "! @raising /iwbep/cx_mgw_busi_exception | <p class="shorttext synchronized">Business exception</p>
    METHODS before_processing
      RAISING /iwbep/cx_mgw_tech_exception
              /iwbep/cx_mgw_busi_exception.

    "! <p class="shorttext synchronized">Set context</p>
    "! @parameter io_context | <p class="shorttext synchronized">Context</p>
    METHODS set_context
      IMPORTING io_context TYPE REF TO /iwbep/if_mgw_context.

  PROTECTED SECTION.
    DATA dpc_object        TYPE REF TO /iwbep/cl_mgw_push_abs_data.
    DATA message_container TYPE REF TO /iwbep/if_message_container.
    DATA mv_namespace      TYPE z_odata_namespace.
    DATA mo_context        TYPE REF TO /iwbep/if_mgw_context.

    "! <p class="shorttext synchronized">Copy data to reference</p>
    "!
    "! @parameter i_data | <p class="shorttext synchronized">Data</p>
    "! @parameter c_data | <p class="shorttext synchronized">Reference</p>
    METHODS copy_data_to_ref
      IMPORTING i_data TYPE any
      CHANGING  c_data TYPE REF TO data.

    METHODS entityset_filter_page_order
      IMPORTING io_tech_request_context TYPE REF TO /iwbep/if_mgw_req_entityset
      CHANGING  c_data                  TYPE table
      RAISING   /iwbep/cx_mgw_tech_exception
                /iwbep/cx_mgw_busi_exception.

    "! <p class="shorttext synchronized">Sort/order collection</p>
    "!
    "! @parameter io_tech_request_context      | <p class="shorttext synchronized">Tech request</p>
    "! @parameter c_data                       | <p class="shorttext synchronized">Data</p>
    "! @raising   /iwbep/cx_mgw_tech_exception | <p class="shorttext synchronized">Error</p>
    METHODS order_collection
      IMPORTING io_tech_request_context TYPE REF TO /iwbep/if_mgw_req_entityset
      CHANGING  c_data                  TYPE table
      RAISING   /iwbep/cx_mgw_tech_exception.

    "! <p class="shorttext synchronized">Get order by clause</p>
    "!
    "! @parameter io_tech_request_context | <p class="shorttext synchronized">Tech request</p>
    "! @parameter rv_orderby_clause       | <p class="shorttext synchronized">Order by clause</p>
    METHODS get_orderby_clause
      IMPORTING io_tech_request_context  TYPE REF TO /iwbep/if_mgw_req_entityset
      RETURNING VALUE(rv_orderby_clause) TYPE string.

    "! <p class="shorttext synchronized">Filter collection</p>
    "!
    "! @parameter io_tech_request_context      | <p class="shorttext synchronized">Tech request</p>
    "! @parameter c_data                       | <p class="shorttext synchronized">Data</p>
    "! @raising   /iwbep/cx_mgw_tech_exception | <p class="shorttext synchronized">Tech error</p>
    "! @raising   /iwbep/cx_mgw_busi_exception | <p class="shorttext synchronized">Business error</p>
    METHODS filter_collection
      IMPORTING io_tech_request_context TYPE REF TO /iwbep/if_mgw_req_entityset
      CHANGING  c_data                  TYPE table
      RAISING   /iwbep/cx_mgw_tech_exception
                /iwbep/cx_mgw_busi_exception.

    "! <p class="shorttext synchronized">Paginate collection</p>
    "!
    "! @parameter io_tech_request_context | <p class="shorttext synchronized">Tech request</p>
    "! @parameter c_data                  | <p class="shorttext synchronized">Data</p>
    METHODS paginate_collection
      IMPORTING io_tech_request_context TYPE REF TO /iwbep/if_mgw_req_entityset
      CHANGING  c_data                  TYPE table.

    "! <p class="shorttext synchronized">Get properties</p>
    "!
    "! @parameter io_tech_request_context      | <p class="shorttext synchronized">Tech request</p>
    "! @parameter r_properties                 | <p class="shorttext synchronized">Properties</p>
    "! @raising   /iwbep/cx_mgw_tech_exception | <p class="shorttext synchronized">Error</p>
    METHODS get_properties
      IMPORTING io_tech_request_context TYPE REF TO /iwbep/if_mgw_req_entityset
      RETURNING VALUE(r_properties)     TYPE /iwbep/if_mgw_odata_re_prop=>ty_t_mgw_odata_properties
      RAISING   /iwbep/cx_mgw_tech_exception.

    "! <p class="shorttext synchronized">Raise error</p>
    "!
    "! @parameter i_error                      | <p class="shorttext synchronized">Error object</p>
    "! @raising   /iwbep/cx_mgw_busi_exception | <p class="shorttext synchronized">Converted error</p>
    METHODS raise_error
      IMPORTING i_error TYPE REF TO cx_root
      RAISING   /iwbep/cx_mgw_busi_exception.

    "! <p class="shorttext synchronized">Get request header</p>
    "!
    "! @parameter r_request_headers            | <p class="shorttext synchronized">Request header</p>
    "! @raising   /iwbep/cx_mgw_tech_exception | <p class="shorttext synchronized">Error</p>
    METHODS get_request_header
      RETURNING VALUE(r_request_headers) TYPE tihttpnvp
      RAISING   /iwbep/cx_mgw_tech_exception.

  PRIVATE SECTION.
    "! <p class="shorttext synchronized">Convert dynamic where</p>
    "!
    "! @parameter io_tech_request_context      | <p class="shorttext synchronized">Tech request</p>
    "! @parameter rt_dynamic_where             | <p class="shorttext synchronized">Dynamic where table</p>
    "! @raising   /iwbep/cx_mgw_busi_exception | <p class="shorttext synchronized">Business error</p>
    "! @raising   /iwbep/cx_mgw_tech_exception | <p class="shorttext synchronized">Technical error</p>
    METHODS convert_dynamic_where
      IMPORTING io_tech_request_context TYPE REF TO /iwbep/if_mgw_req_entityset
      RETURNING VALUE(rt_dynamic_where) TYPE rsds_twhere
      RAISING   /iwbep/cx_mgw_busi_exception
                /iwbep/cx_mgw_tech_exception.

ENDCLASS.


CLASS ZCL_ODATA_MAIN IMPLEMENTATION.


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
    dpc_object = io_dpc_object.
    mv_namespace = iv_namespace.
  ENDMETHOD.


  METHOD convert_dynamic_where.
    DATA ls_dynamic_where_line LIKE LINE OF rt_dynamic_where.

    DATA(lv_osql_where_clause) = io_tech_request_context->get_osql_where_clause_convert( ).
    IF lv_osql_where_clause IS INITIAL.
      RETURN.
    ENDIF.
    REPLACE ALL OCCURRENCES OF '(' IN lv_osql_where_clause WITH ''.
    REPLACE ALL OCCURRENCES OF ')' IN lv_osql_where_clause WITH ''.
    REPLACE ALL OCCURRENCES OF | OR | IN lv_osql_where_clause WITH | AND |.
    ls_dynamic_where_line-tablename = 'TEST'.

    ##TODO " line ist nur 72 zeichen lang. der osql string muss aufgeteilt werden.
    DATA(lv_length_osql) = strlen( lv_osql_where_clause ).

    IF lv_length_osql <= 72.
      ls_dynamic_where_line-where_tab = VALUE #( ( |{ lv_osql_where_clause }| ) ).
      APPEND ls_dynamic_where_line TO rt_dynamic_where.
    ELSE.
      SPLIT lv_osql_where_clause AT 'AND' INTO TABLE DATA(lt_split_osql).

      LOOP AT lt_split_osql ASSIGNING FIELD-SYMBOL(<lv_split_osql>).
        APPEND |{ <lv_split_osql> } {
            COND char03( WHEN sy-tabix = lines( lt_split_osql )
                         THEN ''
                         ELSE 'AND' ) }| TO ls_dynamic_where_line-where_tab.
      ENDLOOP.
    ENDIF.
    APPEND ls_dynamic_where_line TO rt_dynamic_where.
  ENDMETHOD.


  METHOD copy_data_to_ref.
    DATA header TYPE ihttpnvp.
    FIELD-SYMBOLS <itab> TYPE ANY TABLE.

    dpc_object->copy_data_to_ref( EXPORTING is_data = i_data
                                  CHANGING  cr_data = c_data ).

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

    header-name  = 'count'.
    header-value = count.

    dpc_object->set_header( is_header = header ).
  ENDMETHOD.


  METHOD entityset_filter_page_order.
    filter_collection( EXPORTING io_tech_request_context = io_tech_request_context
                       CHANGING  c_data                  = c_data ).
    order_collection( EXPORTING io_tech_request_context = io_tech_request_context
                      CHANGING  c_data                  = c_data ).
    paginate_collection( EXPORTING io_tech_request_context = io_tech_request_context
                         CHANGING  c_data                  = c_data ).
  ENDMETHOD.


  METHOD filter_collection.
    DATA field_ranges TYPE rsds_trange.
    DATA entries      TYPE REF TO data.
    FIELD-SYMBOLS <entries> LIKE c_data.

    TRY.
        DATA(filter) = io_tech_request_context->get_filter( )->get_filter_select_options( ).

        IF filter IS NOT INITIAL.

          LOOP AT filter ASSIGNING FIELD-SYMBOL(<filter>).
            LOOP AT c_data ASSIGNING FIELD-SYMBOL(<data>).
              DATA(tabix) = sy-tabix.
              ASSIGN COMPONENT <filter>-property OF STRUCTURE <data> TO FIELD-SYMBOL(<value>).
              IF NOT ( sy-subrc = 0 AND <value> IS ASSIGNED ).
                CONTINUE.
              ENDIF.
              IF <value> NOT IN <filter>-select_options.
                DELETE c_data INDEX tabix.
              ENDIF.
            ENDLOOP.
          ENDLOOP.
        ELSE.
          DATA(lt_dynamic_where) = convert_dynamic_where( io_tech_request_context ).

          IF lt_dynamic_where IS INITIAL.
            RETURN.
          ENDIF.

          CALL FUNCTION 'FREE_SELECTIONS_WHERE_2_RANGE'
            EXPORTING  where_clauses            = lt_dynamic_where                " Abgrenzungen in Form RSDS_TWHERE
            IMPORTING  field_ranges             = field_ranges                 " Abgrenzungen in Form RSDS_TRANGE
            EXCEPTIONS expression_not_supported = 1                " (Noch) nicht unterstützter logischer Ausdruck
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
              IF NOT ( sy-subrc = 0 AND <value> IS ASSIGNED ).
                CONTINUE.
              ENDIF.
              IF <value> IN <ranges>-selopt_t.
                APPEND <data> TO <entries>.
                DELETE c_data INDEX tabix.
              ENDIF.
            ENDLOOP.
          ENDLOOP.
          c_data = <entries>.
        ENDIF.
      CATCH /iwbep/cx_mgw_med_exception.
    ENDTRY.
  ENDMETHOD.


  METHOD get_orderby_clause.
    DATA lt_order_properties TYPE TABLE OF string.

    DATA(lt_orderby) = io_tech_request_context->get_orderby( ).

    " Append all order properties to a string table
    IF lt_orderby IS INITIAL.
      RETURN.
    ENDIF.

    LOOP AT lt_orderby ASSIGNING FIELD-SYMBOL(<lv_orderby>).
      DATA(lv_sort_order) = COND #( WHEN <lv_orderby>-order = 'desc' THEN 'DESCENDING' ).
      IF <lv_orderby>-property IS NOT INITIAL.
        DATA(lv_order_property) = |{ <lv_orderby>-property } { lv_sort_order }|.
      ELSE.
        lv_order_property = |{ <lv_orderby>-property_path } { lv_sort_order }|.
      ENDIF.
      APPEND lv_order_property TO lt_order_properties.
    ENDLOOP.

    " Concatenate all order properties with comma separation
    rv_orderby_clause = concat_lines_of( table = lt_order_properties
                                         sep   = ', ' ).
  ENDMETHOD.


  METHOD get_properties.
    DATA facade TYPE REF TO /iwbep/cl_mgw_dp_facade.

    TRY.
        facade ?= dpc_object->/iwbep/if_mgw_conv_srv_runtime~get_dp_facade( ).
        r_properties = facade->/iwbep/if_mgw_dp_int_facade~get_model(
          )->get_entity_type( iv_entity_name = io_tech_request_context->get_entity_type_name( )
            )->get_properties( ).
      CATCH /iwbep/cx_mgw_med_exception INTO DATA(error).
        RAISE EXCEPTION TYPE /iwbep/cx_mgw_med_exception
          EXPORTING previous = error.
    ENDTRY.
  ENDMETHOD.


  METHOD get_request_header.
    DATA facade TYPE REF TO /iwbep/if_mgw_dp_int_facade.

    facade ?= dpc_object->/iwbep/if_mgw_conv_srv_runtime~get_dp_facade( ).
    r_request_headers = facade->get_request_header( ).
  ENDMETHOD.


  METHOD if_sadl_gw_dpc_util~get_dpc.
    DATA lv_current_timestamp TYPE if_sadl_types=>ty_timestamp.

    TRY.
        DATA(lo_fw) = NEW zcl_odata_fw_controller( mv_namespace ).
        DATA(lv_sadl_xml) = lo_fw->define_sadl_xml( ).

        GET TIME STAMP FIELD lv_current_timestamp.
        ro_dpc = cl_sadl_gw_dpc_factory=>create_for_sadl( iv_sadl_xml          = lv_sadl_xml
                                                          iv_timestamp         = lv_current_timestamp
                                                          iv_uuid              = |{ mv_namespace }|
                                                          io_query_control     = me
                                                          io_extension_control = me
                                                          io_context           = mo_context ).

      CATCH zcx_odata.
    ENDTRY.
  ENDMETHOD.


  METHOD if_sadl_gw_extension_control~set_extension_mapping.
    RETURN.
  ENDMETHOD.


  METHOD if_sadl_gw_query_control~set_query_options.
    RETURN.
  ENDMETHOD.


  METHOD order_collection.
    DATA sortorder TYPE abap_sortorder_tab.

    DATA(orderby) = io_tech_request_context->get_orderby( ).

    IF orderby IS INITIAL OR lines( c_data ) <= 0.
      RETURN.
    ENDIF.

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


  METHOD paginate_collection.
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


  METHOD set_context.
    mo_context = io_context.
  ENDMETHOD.
ENDCLASS.
