"! <p class="shorttext synchronized" lang="en">Document Entity</p>
CLASS zcl_odata_documents DEFINITION
  PUBLIC
  INHERITING FROM zcl_odata_main
  CREATE PUBLIC ABSTRACT.

  PUBLIC SECTION.
    METHODS:
      /iwbep/if_mgw_appl_srv_runtime~get_entityset REDEFINITION,
      /iwbep/if_mgw_appl_srv_runtime~get_entity REDEFINITION,
      /iwbep/if_mgw_appl_srv_runtime~get_stream REDEFINITION.
  PROTECTED SECTION.
    METHODS:
      "! <p class="shorttext synchronized" lang="en">Get file</p>
      "!
      "! @parameter cs_file | <p class="shorttext synchronized" lang="en">File</p>
      get_file
        CHANGING
          cs_file TYPE zodata_file,
      get_mime_type_from_type
        IMPORTING
          iv_type          TYPE so_obj_tp
        RETURNING
          VALUE(rv_result) TYPE string.
  PRIVATE SECTION.
ENDCLASS.

CLASS zcl_odata_documents IMPLEMENTATION.


  METHOD /iwbep/if_mgw_appl_srv_runtime~get_entity.
    DATA: file    TYPE zodata_file,
          lt_comp TYPE STANDARD TABLE OF scms_stinf.

    io_tech_request_context->get_converted_keys(
      IMPORTING
        es_key_values = file                 " Entity Key Values - converted
    ).


    me->get_file( CHANGING cs_file = file ).

    me->dpc_object->set_header( is_header = VALUE #( name  = 'Content-Disposition'
                                                     value = |inline; filename="{
                                                        escape( val = file-name format = cl_abap_format=>e_url )
                                                      }";| ) ).

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

    me->get_file( CHANGING cs_file = file ).

    stream-mime_type    = file-mime_type.
    stream-value        = file-content.

    " HTTP-Header-Infos setzen (Dateiname usw.)
    DATA(lv_lheader) = VALUE ihttpnvp( name  = 'Content-Disposition'
                                       value = |inline; filename="{
                                        escape( val     = file-name
                                                format  = cl_abap_format=>e_url )
                                      }";| ). " Datei im Tab inline (Plugin) öffnen

    me->dpc_object->set_header( is_header = lv_lheader ).

    me->copy_data_to_ref(
      EXPORTING
        i_data = stream
      CHANGING
        c_data = er_stream
    ).
  ENDMETHOD.


  METHOD get_file.
    RETURN. " to be done in subclass
  ENDMETHOD.

  METHOD get_mime_type_from_type.
    CASE iv_type.
      WHEN 'PDF'.
        rv_result = if_rest_media_type=>gc_appl_pdf.
      WHEN 'DOC'.
        rv_result = if_rest_media_type=>gc_appl_msword.
      WHEN 'JPG'.
        rv_result = if_rest_media_type=>gc_image_jpeg.
      WHEN OTHERS.
        rv_result = if_rest_media_type=>gc_appl_octet_stream.
    ENDCASE.
  ENDMETHOD.

ENDCLASS.
