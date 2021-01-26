CLASS zcl_odata_utils DEFINITION
  PUBLIC
  FINAL
  CREATE PUBLIC .

  PUBLIC SECTION.

    CLASS-METHODS get_user_detail
      IMPORTING
        !i_uname      TYPE sy-uname DEFAULT sy-uname
      RETURNING
        VALUE(r_user) TYPE zodata_user
      RAISING
        zcx_odata .
    CLASS-METHODS raise_mpc_error
      IMPORTING
        !i_error TYPE REF TO cx_root
      RAISING
        /iwbep/cx_mgw_med_exception .
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

    DATA(user) = NEW zcl_user( i_uname ).
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
ENDCLASS.
