CLASS zcl_odata_documents DEFINITION
  PUBLIC
  INHERITING FROM zcl_odata_main
  FINAL
  CREATE PUBLIC .

  PUBLIC SECTION.
    METHODS:
      /iwbep/if_mgw_appl_srv_runtime~get_entityset REDEFINITION,
      /iwbep/if_mgw_appl_srv_runtime~get_entity REDEFINITION,
      /iwbep/if_mgw_appl_srv_runtime~get_stream REDEFINITION.
  PROTECTED SECTION.
  PRIVATE SECTION.
    TYPES:
      gty_lt_comp TYPE STANDARD TABLE OF scms_stinf WITH DEFAULT KEY.

    METHODS:
      get_file
        CHANGING
          cs_file TYPE zodata_file.
ENDCLASS.



CLASS zcl_odata_documents IMPLEMENTATION.


  METHOD /iwbep/if_mgw_appl_srv_runtime~get_entity.
    DATA: file    TYPE zodata_file,
          lt_comp TYPE STANDARD TABLE OF scms_stinf.

    io_tech_request_context->get_converted_keys(
      IMPORTING
        es_key_values = file                 " Entity Key Values - converted
    ).


    me->get_file(
      CHANGING
        cs_file = file ).


    me->dpc_object->set_header( is_header = VALUE #( name  = 'Content-Disposition'
                                                     value = |inline; filename="{ escape( val = file-name format = cl_abap_format=>e_url ) }";| ) ).

    me->copy_data_to_ref(
      EXPORTING
        i_data = file
      CHANGING
        c_data = er_entity
    ).
  ENDMETHOD.


  METHOD /iwbep/if_mgw_appl_srv_runtime~get_entityset.
    DATA: files TYPE zodata_file_tt.


    me->copy_data_to_ref(
      EXPORTING
        i_data = files
      CHANGING
        c_data = er_entityset
    ).
  ENDMETHOD.


  METHOD /iwbep/if_mgw_appl_srv_runtime~get_stream.
    DATA: stream TYPE /iwbep/if_mgw_appl_srv_runtime=>ty_s_media_resource,
          file   TYPE zodata_file.

    io_tech_request_context->get_converted_keys(
      IMPORTING
        es_key_values = file
    ).

    me->get_file(
      CHANGING
        cs_file = file ).

    stream-mime_type    = file-mime_type.
    stream-value        = file-content.

    me->copy_data_to_ref(
      EXPORTING
        i_data = stream
      CHANGING
        c_data = er_stream
    ).
  ENDMETHOD.


  METHOD get_file.
    DATA: lt_comp    TYPE gty_lt_comp,
          lt_content TYPE TABLE OF sdokcntbin.

    SELECT SINGLE *
        FROM toa01
        INTO @DATA(ls_toa01)
        WHERE arc_doc_id = @cs_file-id.                 "#EC CI_NOFIRST
    cs_file-name = ls_toa01-object_id.

    CALL FUNCTION 'SCMS_DOC_INFO'
      EXPORTING
        stor_cat              = space                 " Category
        crep_id               = ls_toa01-archiv_id            " Repository (Only Allowed if Category = SPACE)
        doc_id                = ls_toa01-arc_doc_id                 " Document ID
*  IMPORTING
*       crea_time             =                  " Creation Time (UTC)
*       crea_date             =                  " Creation Date (UTC)
*       chng_time             =                  " Time Last Changed (UTC)
*       chng_date             =                  " Date Last Changed (UTC)
*       status                =                  " CMS: Document status
      TABLES
        comps                 = lt_comp
      EXCEPTIONS
        bad_storage_type      = 1                " Storage Category Not Supported
        bad_request           = 2                " Unknown Functions or Parameters
        unauthorized          = 3                " Security Breach
        not_found             = 4                " Document/ Component/ Content Repository Not Found
        conflict              = 5                " Document/ Component/ Administration Data is Inaccessible
        internal_server_error = 6                " Internal Error in Content Server
        error_http            = 7                " Error in HTTP Access
        error_signature       = 8                " Error when Calculating Signature
        error_config          = 9                " Configuration error
        error_hierarchy       = 10               " Error When Accessing Structures
        error_parameter       = 11               " Parameter error
        error                 = 12               " Unspecified error
        OTHERS                = 13.
    IF sy-subrc <> 0.
* MESSAGE ID sy-msgid TYPE sy-msgty NUMBER sy-msgno
*   WITH sy-msgv1 sy-msgv2 sy-msgv3 sy-msgv4.
    ENDIF.

    TRY.
        DATA(ls_comp) = lt_comp[ 1 ].
        cs_file-mime_type = ls_comp-mimetype.
        cs_file-length    = ls_comp-comp_size.
      CATCH cx_sy_itab_line_not_found.
    ENDTRY.

    CALL FUNCTION 'SCMS_DOC_READ'
      EXPORTING
        stor_cat              = space                 " Category
        crep_id               = ls_toa01-archiv_id            " Repository (Only Allowed if Category = SPACE)
        doc_id                = ls_toa01-arc_doc_id
*      IMPORTING
*       from_cache            =
*       crea_time             =
*       crea_date             =
*       chng_time             =
*       chng_date             =
*       status                =                  " CMS: Document status
*       doc_prot              =
      TABLES
*       access_info           =
*       content_txt           =
        content_bin           = lt_content
      EXCEPTIONS
        bad_storage_type      = 1                " Storage Category Not Supported
        bad_request           = 2                " Unknown Functions or Parameters
        unauthorized          = 3                " Security Breach
        comp_not_found        = 4                " Document/ Component/ Content Repository Not Found
        not_found             = 5                " Document/ Component/ Content Repository Not Found
        forbidden             = 6                " Document or Component Already Exists
        conflict              = 7                " Document/ Component/ Administration Data is Inaccessible
        internal_server_error = 8                " Internal Error in Content Server
        error_http            = 9                " Error in HTTP Access
        error_signature       = 10               " Error when Calculating Signature
        error_config          = 11               " Configuration error
        error_format          = 12               " Incorrect Data Format (Structure Repository)
        error_parameter       = 13               " Parameter error
        error                 = 14               " Unspecified error
        OTHERS                = 15.
    IF sy-subrc <> 0.
*     MESSAGE ID sy-msgid TYPE sy-msgty NUMBER sy-msgno
*       WITH sy-msgv1 sy-msgv2 sy-msgv3 sy-msgv4.
    ENDIF.
    " Für die Umwandlung die Dateigröße der Binärdaten berechnen
    DATA(lv_size) = lines( lt_content ).
    DATA: lv_line LIKE LINE OF lt_content.
    DATA(lv_length) = 0.
    " für Unicode-Kompatibilität IN BYTE MODE
    DESCRIBE FIELD lv_line LENGTH lv_length IN BYTE MODE.
    cs_file-length = lv_length.

    CALL FUNCTION 'SCMS_BINARY_TO_XSTRING'
      EXPORTING
        input_length = lv_size
*       first_line   = 0
*       last_line    = 0
      IMPORTING
        buffer       = cs_file-content
      TABLES
        binary_tab   = lt_content
      EXCEPTIONS
        failed       = 1
        OTHERS       = 2.

    IF sy-subrc <> 0.
*     MESSAGE ID sy-msgid TYPE sy-msgty NUMBER sy-msgno
*       WITH sy-msgv1 sy-msgv2 sy-msgv3 sy-msgv4.
    ENDIF.

  ENDMETHOD.
ENDCLASS.
