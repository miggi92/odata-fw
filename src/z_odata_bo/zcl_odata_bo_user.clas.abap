"! <p class="shorttext synchronized" lang="en">OData User</p>
CLASS zcl_odata_bo_user DEFINITION
  PUBLIC
  CREATE PUBLIC .

  PUBLIC SECTION.
    TYPES:

          ty_parameters TYPE STANDARD TABLE OF bapiparam WITH DEFAULT KEY.
    METHODS:
      "! <p class="shorttext synchronized" lang="en">Constructor</p>
      constructor
        IMPORTING
          i_user TYPE sy-uname
        RAISING
          zcx_odata,
      "! <p class="shorttext synchronized" lang="en">Get user parameters</p>
      get_parameters
        RETURNING
          VALUE(r_result) TYPE ty_parameters,
      "! <p class="shorttext synchronized" lang="en">Get default mail</p>
      get_standard_email
        RETURNING
          VALUE(r_email) TYPE bapiadsmtp-e_mail,
      "! <p class="shorttext synchronized" lang="en">Get default telephone</p>
      get_standard_tel
        RETURNING
          VALUE(r_tel) TYPE bapiadtel-tel_no,
      "! <p class="shorttext synchronized" lang="en">Get fullname</p>
      get_fullname
        RETURNING
          VALUE(r_name) TYPE bapiaddr3-fullname,
      "! <p class="shorttext synchronized" lang="en">Get user cost center</p>
      get_cost_center
        RETURNING
          VALUE(r_cost_center) TYPE bapidefaul-kostl,
      "! <p class="shorttext synchronized" lang="en">Get first name</p>
      get_firstname
        RETURNING
          VALUE(r_firstname) TYPE bapiaddr3-firstname,
      "! <p class="shorttext synchronized" lang="en">Get last name</p>
      get_lastname
        RETURNING
          VALUE(r_lastname) TYPE bapiaddr3-lastname,
      "! <p class="shorttext synchronized" lang="en">Get user id</p>
      get_user_id
        RETURNING
          VALUE(r_result) TYPE sy-uname.
  PROTECTED SECTION.

  PRIVATE SECTION.
    DATA: user       TYPE sy-uname,
          alias      TYPE bapialias,
          parameters TYPE STANDARD TABLE OF bapiparam,
          telephones TYPE STANDARD TABLE OF bapiadtel,
          emails     TYPE STANDARD TABLE OF bapiadsmtp,
          address    TYPE bapiaddr3,
          defaults   TYPE bapidefaul.

    METHODS:
      "! <p class="shorttext synchronized" lang="en">Read user detail</p>
      read_user_detail
        RAISING
          zcx_odata.
ENDCLASS.

CLASS zcl_odata_bo_user IMPLEMENTATION.

  METHOD constructor.
    me->user = i_user.
    me->read_user_detail( ).
  ENDMETHOD.

  METHOD read_user_detail.
    DATA: return TYPE STANDARD TABLE OF bapiret2.

    CALL FUNCTION 'BAPI_USER_GET_DETAIL'
      EXPORTING
        username  = me->user                 " User Name
*       cache_results  = 'X'              " Temporarily buffer results in work process
      IMPORTING
*       logondata =                  " Structure with Logon Data
        defaults  = me->defaults                 " Structure with User Defaults
        address   = me->address                 " Address Data
*       company   =                  " Company for Company Address
*       snc       =                  " Secure Network Communication Data
*       ref_user  =                  " User Name of the Reference User
        alias     = me->alias                 " User Name Alias
*       uclass    =                  " License-Related User Classification
*       lastmodified   =                  " User: Last Change (Date and Time)
*       islocked  =                  " User Lock
*       identity  =                  " Person Assignment of an Identity
*       admindata =                  " User: Administration Data
*       description    =                  " Description
      TABLES
        parameter = me->parameters                 " Table with User Parameters
*       profiles  =                  " Profiles
*       activitygroups =                  " Activity Groups
        return    = return                 " Return Structure
        addtel    = telephones                 " BAPI Structure Telephone Numbers
*       addfax    =                  " BAPI Structure Fax Numbers
*       addttx    =                  " BAPI Structure Teletex Numbers
*       addtlx    =                  " BAPI Structure Telex Numbers
        addsmtp   = emails                 " E-Mail Addresses BAPI Structure
*       addrml    =                  " Inhouse Mail BAPI Structure
*       addx400   =                  " BAPI Structure X400 Addresses
*       addrfc    =                  " BAPI Structure RFC Addresses
*       addprt    =                  " BAPI Structure Printer Addresses
*       addssf    =                  " BAPI Structure SSF Addresses
*       adduri    =                  " BAPI Structure: URL, FTP, and so on
*       addpag    =                  " BAPI Structure Pager Numbers
*       addcomrem =                  " BAPI Structure Communication Comments
*       parameter1     =                  " Replaces Parameter (Length 18 -> 40)
*       groups    =                  " Transfer Structure for a List of User Groups
*       uclasssys =                  " System-Specific License-Related User Classification
*       extidhead =                  " Header Data for External ID of a User
*       extidpart =                  " Part of a Long Field for the External ID of a User
*       systems   =                  " BAPI Structure for CUA Target Systems
      .

    IF line_exists( return[ type = 'E' ] ).
      " no SAP User
      RAISE EXCEPTION TYPE zcx_odata.
    ENDIF.
  ENDMETHOD.

  METHOD get_parameters.
    r_result = me->parameters.
  ENDMETHOD.

  METHOD get_standard_email.
    CHECK lines( me->emails ) > 0.
    r_email = me->emails[ std_no = abap_true ]-e_mail.
  ENDMETHOD.

  METHOD get_standard_tel.
    r_tel = me->telephones[ std_no = abap_true ]-tel_no.
  ENDMETHOD.

  METHOD get_fullname.
    r_name = me->address-fullname.
  ENDMETHOD.

  METHOD get_cost_center.
    r_cost_center = me->defaults-kostl.
  ENDMETHOD.

  METHOD get_firstname.
    r_firstname = me->address-firstname.
  ENDMETHOD.

  METHOD get_lastname.
    r_lastname = me->address-lastname.
  ENDMETHOD.

  METHOD get_user_id.
    r_result = me->user.
  ENDMETHOD.

ENDCLASS.
