"! <p class="shorttext synchronized">OData framework controller</p>
CLASS zcl_odata_fw_controller DEFINITION
  PUBLIC
  CREATE PUBLIC.

  PUBLIC SECTION.
    "! <p class="shorttext synchronized">Constructor</p>
    "!
    "! @parameter i_namespace | <p class="shorttext synchronized">OData namespace</p>
    "! @raising   zcx_odata   | <p class="shorttext synchronized">Error</p>
    METHODS constructor
      IMPORTING i_namespace TYPE z_odata_namespace
      RAISING   zcx_odata.

    "! <p class="shorttext synchronized">Define MPC from customizing</p>
    "!
    "! @parameter i_model                     | <p class="shorttext synchronized">Model</p>
    "! @parameter i_anno_model                | <p class="shorttext synchronized">Annotation model</p>
    "! @raising   /iwbep/cx_mgw_med_exception | <p class="shorttext synchronized">Error in Customizing</p>
    METHODS define_mpc
      IMPORTING i_model      TYPE REF TO /iwbep/if_mgw_odata_model
                i_anno_model TYPE REF TO /iwbep/if_mgw_vocan_model
      RAISING   /iwbep/cx_mgw_med_exception.

    "! <p class="shorttext synchronized">Define DPC from customizing</p>
    "!
    "! @parameter i_data_provider | <p class="shorttext synchronized">Data provider</p>
    METHODS define_dpc
      IMPORTING i_data_provider TYPE REF TO zcl_odata_data_provider.

    "! <p class="shorttext synchronized">Define SADL XML</p>
    "! @parameter rv_sadl_xml | <p class="shorttext synchronized">SADL XML</p>
    METHODS define_sadl_xml
      RETURNING VALUE(rv_sadl_xml) TYPE string.

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
    DATA(lo_mpc) = NEW zcl_odata_fw_mpc( io_customizing = mo_customizing
                                         io_model       = i_model
                                         io_anno_model  = i_anno_model ).
    lo_mpc->define_from_cust( ).
  ENDMETHOD.

  METHOD define_sadl_xml.
    DATA(lt_entities) = mo_customizing->get_entities( ).
    DATA(lt_properties) = mo_customizing->get_properties( ).

    DATA(lo_sadl) = NEW zcl_odata_fw_sadl( ).
    rv_sadl_xml = lo_sadl->generate_sadl_xml( it_entities   = lt_entities
                                              it_properties = lt_properties ).
  ENDMETHOD.
ENDCLASS.
