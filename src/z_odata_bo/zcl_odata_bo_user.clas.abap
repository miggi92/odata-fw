"! <p class="shorttext synchronized">OData User</p>
CLASS zcl_odata_bo_user DEFINITION
  PUBLIC
  CREATE PUBLIC.

  PUBLIC SECTION.
    TYPES gty_parameters TYPE STANDARD TABLE OF bapiparam WITH KEY parid.

    "! <p class="shorttext synchronized">Constructor</p>
    METHODS constructor
      IMPORTING iv_user TYPE sy-uname
      RAISING   zcx_odata.

    "! <p class="shorttext synchronized">Get user parameters</p>
    METHODS get_parameters
      RETURNING VALUE(rt_result) TYPE gty_parameters.

    "! <p class="shorttext synchronized">Get default mail</p>
    METHODS get_standard_email
      RETURNING VALUE(rv_email) TYPE bapiadsmtp-e_mail.

    "! <p class="shorttext synchronized">Get default telephone</p>
    METHODS get_standard_tel
      RETURNING VALUE(rv_tel) TYPE bapiadtel-tel_no.

    "! <p class="shorttext synchronized">Get fullname</p>
    METHODS get_fullname
      RETURNING VALUE(rv_name) TYPE bapiaddr3-fullname.

    "! <p class="shorttext synchronized">Get user cost center</p>
    METHODS get_cost_center
      RETURNING VALUE(rv_cost_center) TYPE bapidefaul-kostl.

    "! <p class="shorttext synchronized">Get first name</p>
    METHODS get_firstname
      RETURNING VALUE(rv_firstname) TYPE bapiaddr3-firstname.

    "! <p class="shorttext synchronized">Get last name</p>
    METHODS get_lastname
      RETURNING VALUE(rv_lastname) TYPE bapiaddr3-lastname.

    "! <p class="shorttext synchronized">Get user id</p>
    METHODS get_user_id
      RETURNING VALUE(rv_result) TYPE sy-uname.

  PROTECTED SECTION.

  PRIVATE SECTION.
    DATA mv_user       TYPE sy-uname.
    DATA mv_alias      TYPE bapialias.
    DATA mt_parameters TYPE STANDARD TABLE OF bapiparam.
    DATA mt_telephones TYPE STANDARD TABLE OF bapiadtel.
    DATA mt_emails     TYPE STANDARD TABLE OF bapiadsmtp.
    DATA ms_address    TYPE bapiaddr3.
    DATA ms_defaults   TYPE bapidefaul.

    "! <p class="shorttext synchronized">Read user detail</p>
    METHODS read_user_detail
      RAISING zcx_odata.
ENDCLASS.


CLASS zcl_odata_bo_user IMPLEMENTATION.
  METHOD constructor.
    mv_user = iv_user.
    read_user_detail( ).
  ENDMETHOD.

  METHOD read_user_detail.
    DATA lt_return TYPE STANDARD TABLE OF bapiret2.

    CALL FUNCTION 'BAPI_USER_GET_DETAIL'
      EXPORTING username  = mv_user                 " User Name
*                cache_results = 'X'              " Temporarily buffer results in work process
      IMPORTING
*                logondata = " Structure with Logon Data
                defaults  = ms_defaults                 " Structure with User Defaults
                address   = ms_address                 " Address Data
*                company   = " Company for Company Address
*                snc       = " Secure Network Communication Data
*                ref_user  = " User Name of the Reference User
                alias     = mv_alias                 " User Name Alias
*                uclass    = " License-Related User Classification
*                lastmodified = " User: Last Change (Date and Time)
*                islocked  = " User Lock
*                identity  = " Person Assignment of an Identity
*                admindata = " User: Administration Data
*                description = " Description
      TABLES    parameter = mt_parameters                 " Table with User Parameters
*                profiles  = " Profiles
*                activitygroups = " Activity Groups
                return    = lt_return                 " Return Structure
                addtel    = mt_telephones                 " BAPI Structure Telephone Numbers
*                addfax    = " BAPI Structure Fax Numbers
*                addttx    = " BAPI Structure Teletex Numbers
*                addtlx    = " BAPI Structure Telex Numbers
                addsmtp   = mt_emails                 " E-Mail Addresses BAPI Structure
*                addrml    = " Inhouse Mail BAPI Structure
*                addx400   = " BAPI Structure X400 Addresses
*                addrfc    = " BAPI Structure RFC Addresses
*                addprt    = " BAPI Structure Printer Addresses
*                addssf    = " BAPI Structure SSF Addresses
*                adduri    = " BAPI Structure: URL, FTP, and so on
*                addpag    = " BAPI Structure Pager Numbers
*                addcomrem = " BAPI Structure Communication Comments
*                parameter1 = " Replaces Parameter (Length 18 -> 40)
*                groups    = " Transfer Structure for a List of User Groups
*                uclasssys = " System-Specific License-Related User Classification
*                extidhead = " Header Data for External ID of a User
*                extidpart = " Part of a Long Field for the External ID of a User
*                systems   = " BAPI Structure for CUA Target Systems
      .

    IF line_exists( lt_return[ type = 'E' ] ).
      " no SAP User
      RAISE EXCEPTION TYPE zcx_odata.
    ENDIF.
  ENDMETHOD.

  METHOD get_parameters.
    rt_result = mt_parameters.
  ENDMETHOD.

  METHOD get_standard_email.
    CHECK lines( mt_emails ) > 0.
    rv_email = mt_emails[ std_no = abap_true ]-e_mail.
  ENDMETHOD.

  METHOD get_standard_tel.
    rv_tel = mt_telephones[ std_no = abap_true ]-tel_no.
  ENDMETHOD.

  METHOD get_fullname.
    rv_name = ms_address-fullname.
  ENDMETHOD.

  METHOD get_cost_center.
    rv_cost_center = ms_defaults-kostl.
  ENDMETHOD.

  METHOD get_firstname.
    rv_firstname = ms_address-firstname.
  ENDMETHOD.

  METHOD get_lastname.
    rv_lastname = ms_address-lastname.
  ENDMETHOD.

  METHOD get_user_id.
    rv_result = mv_user.
  ENDMETHOD.
ENDCLASS.
