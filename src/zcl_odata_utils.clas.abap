"! <p class="shorttext synchronized" lang="en">OData Utils</p>
CLASS zcl_odata_utils DEFINITION
  PUBLIC
  FINAL
  CREATE PUBLIC .

  PUBLIC SECTION.

    CONSTANTS:
                 standard_timezone TYPE timezone VALUE 'CET'.

    CLASS-METHODS:
      get_user_detail
        IMPORTING
          !i_uname      TYPE sy-uname DEFAULT sy-uname
        RETURNING
          VALUE(r_user) TYPE zodata_user
        RAISING
          zcx_odata,
      "! <p class="shorttext synchronized" lang="en">Raise error within the Model</p>
      "!
      "! @parameter i_error | <p class="shorttext synchronized" lang="en">Error</p>
      "! @raising /iwbep/cx_mgw_med_exception | <p class="shorttext synchronized" lang="en">Error</p>
      raise_mpc_error
        IMPORTING
          !i_error TYPE REF TO cx_root
        RAISING
          /iwbep/cx_mgw_med_exception,

      get_text_from_domain
        IMPORTING
          i_value       TYPE any
        RETURNING
          VALUE(r_text) TYPE string
        RAISING
          zcx_odata,
      "! <p class="shorttext synchronized" lang="en">Converts a timestamp in UTC format to date</p>
      convert_timestamp2date
        IMPORTING
          i_timestamp   TYPE timestampl
        RETURNING
          VALUE(r_date) TYPE datum,
      "! <p class="shorttext synchronized" lang="en">Converts a timestamp in UTC format to date and time</p>
      conv_timestamp2date_and_time
        IMPORTING
          i_timestamp TYPE timestampl
        EXPORTING
          e_date      TYPE datum
          e_time      TYPE syst_timlo,
      "! <p class="shorttext synchronized" lang="en">Converts date to a timestamp in UTC format</p>
      convert_date2timestamp
        IMPORTING
          i_date             TYPE datum DEFAULT sy-datum
        RETURNING
          VALUE(r_timestamp) TYPE timestampl,
      "! <p class="shorttext synchronized" lang="en">Converts date and time to a timestamp in UTC format</p>
      conv_date_and_time2timestamp
        IMPORTING
          i_date             TYPE datum DEFAULT sy-datum
          i_time             TYPE syst_timlo DEFAULT sy-timlo
        RETURNING
          VALUE(r_timestamp) TYPE timestampl,
      convert_date2fullday_timestamp
        IMPORTING
          i_date            TYPE datum DEFAULT sy-datum
        EXPORTING
          e_start_timestamp TYPE timestampl
          e_end_timestamp   TYPE timestampl.

  PROTECTED SECTION.
  PRIVATE SECTION.

ENDCLASS.


CLASS zcl_odata_utils IMPLEMENTATION.


  METHOD get_user_detail.
    DATA: return TYPE bapiret2.

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
    r_user = VALUE #( first_name    = user->get_firstname( )
                      last_name     = user->get_lastname( )
                      sap_name      = i_uname
                      email         = user->get_standard_email( ) ).
  ENDMETHOD.

  METHOD raise_mpc_error.
    RAISE EXCEPTION TYPE /iwbep/cx_mgw_med_exception
      EXPORTING
        previous          = i_error
        message_unlimited = i_error->get_longtext( )
        textid            = /iwbep/cx_mgw_med_exception=>external_error.
  ENDMETHOD.

  METHOD get_text_from_domain.
    DATA: data_element TYPE REF TO cl_abap_elemdescr.

    data_element ?= cl_abap_typedescr=>describe_by_data( i_value ).

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
    CONVERT TIME STAMP i_timestamp TIME ZONE standard_timezone INTO DATE e_date TIME e_time .
  ENDMETHOD.

  METHOD convert_date2fullday_timestamp.
    e_start_timestamp = conv_date_and_time2timestamp(
            i_date      = i_date
            i_time      = '000000'
        ).
    e_end_timestamp = conv_date_and_time2timestamp(
        i_date      = i_date
        i_time      = '235959'
    ).
  ENDMETHOD.

ENDCLASS.
