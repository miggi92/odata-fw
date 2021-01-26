CLASS zcl_odata_error_handler DEFINITION
  PUBLIC
  CREATE PUBLIC .

  PUBLIC SECTION.
    METHODS:
      constructor
        IMPORTING
          i_context TYPE REF TO /iwbep/if_mgw_conv_srv_runtime,
      raise_exception_object
        IMPORTING
          i_exception TYPE REF TO cx_root
        RAISING
          /iwbep/cx_mgw_busi_exception.
  PROTECTED SECTION.
  PRIVATE SECTION.
    DATA:
      context     TYPE REF TO /iwbep/if_mgw_conv_srv_runtime.
ENDCLASS.



CLASS zcl_odata_error_handler IMPLEMENTATION.
  METHOD constructor.
    me->context = i_context.
  ENDMETHOD.

  METHOD raise_exception_object.
    DATA(msg_container) = me->context->get_message_container( ).
    DATA(error_text) = CONV bapi_msg( i_exception->get_longtext(  ) ).

    msg_container->add_message_text_only(
        iv_msg_type               = /iwbep/if_message_container=>gcs_message_type-error                " Message Type - defined by GCS_MESSAGE_TYPE
        iv_msg_text               = error_text                 " Message Text
    ).


    RAISE EXCEPTION TYPE /iwbep/cx_mgw_busi_exception
      EXPORTING
        message_container = msg_container.
  ENDMETHOD.

ENDCLASS.
