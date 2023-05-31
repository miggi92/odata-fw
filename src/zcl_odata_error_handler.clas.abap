"! <p class="shorttext synchronized" lang="en">OData Error Handler</p>
CLASS zcl_odata_error_handler DEFINITION
  PUBLIC
  CREATE PUBLIC .

  PUBLIC SECTION.
    METHODS:
      "! <p class="shorttext synchronized" lang="en">Constructor</p>
      "!
      "! @parameter i_context | <p class="shorttext synchronized" lang="en">Context</p>
      constructor
        IMPORTING
          i_context TYPE REF TO /iwbep/if_mgw_conv_srv_runtime,
      "! <p class="shorttext synchronized" lang="en">Raise odata exception from exception object</p>
      "!
      "! @parameter i_exception | <p class="shorttext synchronized" lang="en">Exception object</p>
      "! @raising /iwbep/cx_mgw_busi_exception | <p class="shorttext synchronized" lang="en">Error</p>
      raise_exception_object
        IMPORTING
          i_exception TYPE REF TO cx_root
        RAISING
          /iwbep/cx_mgw_busi_exception.
  PROTECTED SECTION.
  PRIVATE SECTION.
    DATA:
      mv_context TYPE REF TO /iwbep/if_mgw_conv_srv_runtime.
ENDCLASS.


CLASS zcl_odata_error_handler IMPLEMENTATION.
  METHOD constructor.
    mv_context = i_context.
  ENDMETHOD.

  METHOD raise_exception_object.
    DATA(lo_msg_container) = mv_context->get_message_container( ).
    DATA(ls_error_text) = CONV bapi_msg( i_exception->get_longtext(  ) ).

    lo_msg_container->add_message_text_only(
        iv_msg_type = /iwbep/if_message_container=>gcs_message_type-error " Message Type - defined by GCS_MESSAGE_TYPE
        iv_msg_text = ls_error_text " Message Text
    ).

    RAISE EXCEPTION TYPE /iwbep/cx_mgw_busi_exception
      EXPORTING
        message_container = lo_msg_container.
  ENDMETHOD.

ENDCLASS.
