CLASS zcl_odata_documents DEFINITION
  PUBLIC
  INHERITING FROM zcl_odata_main
  FINAL
  CREATE PUBLIC .

  PUBLIC SECTION.
    METHODS:
      /iwbep/if_mgw_appl_srv_runtime~get_entityset REDEFINITION,
      /iwbep/if_mgw_appl_srv_runtime~get_stream REDEFINITION.
  PROTECTED SECTION.
  PRIVATE SECTION.
ENDCLASS.



CLASS zcl_odata_documents IMPLEMENTATION.

  METHOD /iwbep/if_mgw_appl_srv_runtime~get_stream.

  ENDMETHOD.

  METHOD /iwbep/if_mgw_appl_srv_runtime~get_entityset.
    DATA: filename TYPE string.




    me->dpc_object->set_header( is_header = VALUE #( name = 'Content-Disposition'
                                                     value = |inline; filename="{ escape( val = filename format = cl_abap_format=>e_url ) }";| ) ).
  ENDMETHOD.

ENDCLASS.
