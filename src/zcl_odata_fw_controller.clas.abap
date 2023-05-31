"! <p class="shorttext synchronized" lang="en">OData framework controller</p>
CLASS zcl_odata_fw_controller DEFINITION
  PUBLIC
  CREATE PUBLIC .

  PUBLIC SECTION.
    METHODS:
      "! <p class="shorttext synchronized" lang="en">Constructor</p>
      "!
      "! @parameter i_namespace | <p class="shorttext synchronized" lang="en">OData namespace</p>
      "! @raising zcx_odata | <p class="shorttext synchronized" lang="en">Error</p>
      constructor
        IMPORTING
          i_namespace TYPE z_odata_namespace
        RAISING
          zcx_odata,
      "! <p class="shorttext synchronized" lang="en">Define MPC from customizing</p>
      "!
      "! @parameter i_model | <p class="shorttext synchronized" lang="en">Model</p>
      "! @parameter i_anno_model | <p class="shorttext synchronized" lang="en">Annotation model</p>
      "! @raising /iwbep/cx_mgw_med_exception | <p class="shorttext synchronized" lang="en">Error in Customizing</p>
      define_mpc
        IMPORTING
          i_model      TYPE REF TO /iwbep/if_mgw_odata_model
          i_anno_model TYPE REF TO /iwbep/if_mgw_vocan_model
        RAISING
          /iwbep/cx_mgw_med_exception,
      "! <p class="shorttext synchronized" lang="en">Define DPC from customizing</p>
      "!
      "! @parameter i_data_provider | <p class="shorttext synchronized" lang="en">Data provider</p>
      define_dpc
        IMPORTING
          i_data_provider TYPE REF TO zcl_odata_data_provider.
  PROTECTED SECTION.
  PRIVATE SECTION.
    DATA mo_customizing TYPE REF TO zcl_odata_fw_cust.
ENDCLASS.



CLASS zcl_odata_fw_controller IMPLEMENTATION.

  METHOD constructor.
    mo_customizing = NEW #( i_namespace ).
  ENDMETHOD.

  METHOD define_dpc.
    DATA(lt_entities) = mo_customizing->get_entities( ).
    DELETE lt_entities WHERE is_complex = abap_true.

    i_data_provider->add_entities2providers( lt_entities ).
  ENDMETHOD.

  METHOD define_mpc.
    DATA(lo_mpc) = NEW zcl_odata_fw_mpc(
      io_customizing = mo_customizing
      io_model       = i_model
      io_anno_model  = i_anno_model
    ).
    lo_mpc->define_from_cust( ).
  ENDMETHOD.

ENDCLASS.
