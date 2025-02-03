"! <p class="shorttext synchronized">OData Utils</p>
CLASS zcl_odata_utils DEFINITION
  PUBLIC FINAL
  CREATE PUBLIC.

  PUBLIC SECTION.
    CONSTANTS standard_timezone TYPE timezone VALUE 'CET'.

    "! <p class="shorttext synchronized">Get user details/p>
    CLASS-METHODS get_user_detail
      IMPORTING i_uname       TYPE sy-uname DEFAULT sy-uname
      RETURNING VALUE(r_user) TYPE zodata_user
      RAISING   zcx_odata.

    "! <p class="shorttext synchronized">Raise error within the Model</p>
    "!
    "! @parameter i_error                     | <p class="shorttext synchronized">Error</p>
    "! @raising   /iwbep/cx_mgw_med_exception | <p class="shorttext synchronized">Error</p>
    CLASS-METHODS raise_mpc_error
      IMPORTING i_error TYPE REF TO cx_root
      RAISING   /iwbep/cx_mgw_med_exception.

    "! <p class="shorttext synchronized">Get text from domain</p>
    CLASS-METHODS get_text_from_domain
      IMPORTING i_value       TYPE any
                iv_langu      TYPE spras OPTIONAL
      RETURNING VALUE(r_text) TYPE string
      RAISING   zcx_odata.

    "! <p class="shorttext synchronized">Converts a timestamp in UTC format to date</p>
    CLASS-METHODS convert_timestamp2date
      IMPORTING i_timestamp   TYPE timestampl
      RETURNING VALUE(r_date) TYPE datum.

    "! <p class="shorttext synchronized">Converts a timestamp in UTC format to date and time</p>
    CLASS-METHODS conv_timestamp2date_and_time
      IMPORTING i_timestamp TYPE timestampl
      EXPORTING e_date      TYPE datum
                e_time      TYPE syst_timlo.

    "! <p class="shorttext synchronized">Converts date to a timestamp in UTC format</p>
    CLASS-METHODS convert_date2timestamp
      IMPORTING i_date             TYPE datum DEFAULT sy-datum
      RETURNING VALUE(r_timestamp) TYPE timestampl.

    "! <p class="shorttext synchronized">Converts date and time to a timestamp in UTC format</p>
    CLASS-METHODS conv_date_and_time2timestamp
      IMPORTING i_date             TYPE datum      DEFAULT sy-datum
                i_time             TYPE syst_timlo DEFAULT sy-timlo
      RETURNING VALUE(r_timestamp) TYPE timestampl.

    "! <p class="shorttext synchronized">Converts date to a timestamp in UTC format</p>
    CLASS-METHODS convert_date2fullday_timestamp
      IMPORTING i_date            TYPE datum DEFAULT sy-datum
      EXPORTING e_start_timestamp TYPE timestampl
                e_end_timestamp   TYPE timestampl.

    "!  <p class="shorttext synchronized">Read data element from table/structure component</p>
    "! @parameter iv_table_name   | <p class="shorttext synchronized">Table/structure name</p>
    "! @parameter iv_column       | <p class="shorttext synchronized">Column/component</p>
    "! @parameter rv_data_element | <p class="shorttext synchronized">Data element name</p>
    CLASS-METHODS get_data_element_from_tablecol
      IMPORTING iv_table_name          TYPE string
                iv_column              TYPE string
      RETURNING VALUE(rv_data_element) TYPE string
      RAISING   zcx_odata.

    CLASS-METHODS escape_slashes
      IMPORTING iv_string         TYPE string
      RETURNING VALUE(rv_escaped) TYPE string.


ENDCLASS.


CLASS zcl_odata_utils IMPLEMENTATION.
  METHOD get_user_detail.
    DATA return TYPE bapiret2.

    CALL FUNCTION 'BAPI_USER_EXISTENCE_CHECK'
      EXPORTING
        username = i_uname                 " Benutzername
      IMPORTING
        return   = return.                 " Rückgabe

    IF return-id = '01' AND return-number = '124'. " user doesn't exists
      RAISE EXCEPTION TYPE zcx_odata
        EXPORTING
          textid = zcx_odata=>convert_bapiret2( return ).
    ENDIF.

    DATA(user) = NEW zcl_odata_bo_user( i_uname ).
    r_user = VALUE #( first_name = user->get_firstname( )
                      last_name  = user->get_lastname( )
                      sap_name   = i_uname
                      email      = user->get_standard_email( ) ).
  ENDMETHOD.

  METHOD raise_mpc_error.
    RAISE EXCEPTION TYPE /iwbep/cx_mgw_med_exception
      EXPORTING
        previous          = i_error
        message_unlimited = i_error->get_longtext( )
        textid            = /iwbep/cx_mgw_med_exception=>external_error.
  ENDMETHOD.

  METHOD get_text_from_domain.
    DATA data_element TYPE REF TO cl_abap_elemdescr.

    data_element ?= cl_abap_typedescr=>describe_by_data( i_value ).

    IF data_element->kind <> data_element->kind_elem.
      " no data element
      RETURN.
    ENDIF.

    data_element->get_ddic_fixed_values( EXPORTING  p_langu        = SWITCH #( iv_langu
                                                                               WHEN ''
                                                                               THEN |{ sy-langu }|
                                                                               ELSE |{ iv_langu }| )
                                         RECEIVING  p_fixed_values = DATA(fixed_values)                 " Defaults
                                         EXCEPTIONS not_found      = 1                " Type could not be found
                                                    no_ddic_type   = 2                " Typ is not a dictionary type
                                                    OTHERS         = 3 ).
    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE zcx_odata
        EXPORTING
          textid = zcx_odata=>convert_msg( ).
    ENDIF.

    TRY.
        r_text = fixed_values[ low = i_value ]-ddtext.
      CATCH cx_sy_itab_line_not_found.
    ENDTRY.
  ENDMETHOD.

  METHOD convert_timestamp2date.
    CONVERT TIME STAMP i_timestamp TIME ZONE standard_timezone INTO DATE r_date.
  ENDMETHOD.

  METHOD convert_date2timestamp.
    CONVERT DATE i_date INTO TIME STAMP r_timestamp TIME ZONE standard_timezone.
  ENDMETHOD.

  METHOD conv_date_and_time2timestamp.
    CONVERT DATE i_date TIME i_time INTO TIME STAMP r_timestamp TIME ZONE standard_timezone.
  ENDMETHOD.

  METHOD conv_timestamp2date_and_time.
    CONVERT TIME STAMP i_timestamp TIME ZONE standard_timezone INTO DATE e_date TIME e_time.
  ENDMETHOD.

  METHOD convert_date2fullday_timestamp.
    e_start_timestamp = conv_date_and_time2timestamp( i_date = i_date
                                                      i_time = '000000' ).
    e_end_timestamp = conv_date_and_time2timestamp( i_date = i_date
                                                    i_time = '235959' ).
  ENDMETHOD.

  METHOD get_data_element_from_tablecol.
    DATA lo_table     TYPE REF TO cl_abap_tabledescr.
    DATA lo_structure TYPE REF TO cl_abap_structdescr.
    DATA lo_column    TYPE REF TO cl_abap_elemdescr.

    IF iv_column IS INITIAL.
      RETURN.
    ENDIF.
    IF iv_table_name IS INITIAL.
      RETURN.
    ENDIF.

    TRY.
        lo_table ?= cl_abap_elemdescr=>describe_by_name( iv_table_name ).
        lo_structure ?= lo_table->get_table_line_type( ).
      CATCH cx_root.
        lo_structure ?= cl_abap_elemdescr=>describe_by_name( iv_table_name ).
    ENDTRY.

    DATA(lt_components) = lo_structure->get_components( ).

    TRY.
        lo_column ?= lt_components[ name = iv_column ]-type.

        rv_data_element = lo_column->get_relative_name( ).
      CATCH cx_sy_itab_line_not_found INTO DATA(lo_error).
        RAISE EXCEPTION TYPE zcx_odata
          EXPORTING
            textid   = zcx_odata=>gc_column_not_found_in_table
            previous = lo_error
            value    = |{ iv_column }|
            value2   = |{ iv_table_name }|.
    ENDTRY.
  ENDMETHOD.

  METHOD escape_slashes.
    rv_escaped = iv_string.
    REPLACE ALL OCCURRENCES OF '/' IN rv_escaped WITH '_'.
  ENDMETHOD.
ENDCLASS.
