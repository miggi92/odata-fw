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
    DATA lo_structure     TYPE REF TO cl_abap_structdescr.
    DATA lv_type          TYPE string.
    DATA lt_sadl_entities TYPE zodata_entity_tt.

    rv_sadl_xml = |<?xml version="1.0" encoding="utf-16"?>| &
                  |<sadl:definition xmlns:sadl="http://sap.com/sap.nw.f.sadl" syntaxVersion="V2" >|.

    DATA(lt_entities) = mo_customizing->get_entities( ).

    LOOP AT lt_entities ASSIGNING FIELD-SYMBOL(<ls_entity>) WHERE is_complex = abap_false.
      lo_structure ?= cl_abap_elemdescr=>describe_by_name( <ls_entity>-structure ).
      IF NOT lo_structure->is_ddic_type( ).
        CONTINUE.
      ENDIF.
      CASE lo_structure->get_ddic_header( )-tabtype.
        WHEN 'B'.
          lv_type = 'CDS'.
        WHEN 'T'.
          lv_type = 'DDIC'.
        WHEN OTHERS.
          CONTINUE.
      ENDCASE.

      rv_sadl_xml = |{ rv_sadl_xml }| &
      | <sadl:dataSource type="{ lv_type }" name="{ <ls_entity>-entity_name }Set" binding="{ <ls_entity>-structure }" />|.
      APPEND <ls_entity> TO lt_sadl_entities.
    ENDLOOP.

    rv_sadl_xml = |{ rv_sadl_xml }| & |<sadl:resultSet>|.
    LOOP AT lt_sadl_entities ASSIGNING <ls_entity>.

      rv_sadl_xml = |{ rv_sadl_xml }| & |<sadl:structure name="{ <ls_entity>-entity_name }Collection" dataSource="{ <ls_entity>-entity_name }Set" maxEditMode="RO" >| &
      | <sadl:query name="EntitySetDefault">| &
      | </sadl:query>|.
      DATA(lt_properties) = mo_customizing->get_properties( ).
      DELETE lt_properties WHERE entity_name <> <ls_entity>-entity_name.

      LOOP AT lt_properties ASSIGNING FIELD-SYMBOL(<ls_property>) WHERE is_key = abap_false.
        rv_sadl_xml = |{ rv_sadl_xml }| & | <sadl:attribute name="{ <ls_property>-abap_name }" binding="{ <ls_property>-abap_name }" isOutput="TRUE" isKey="FALSE" />|.
      ENDLOOP.
      rv_sadl_xml = |{ rv_sadl_xml }| & |</sadl:structure>|.
    ENDLOOP.

    rv_sadl_xml = |{ rv_sadl_xml }| & |</sadl:resultSet>| &
    |</sadl:definition>|.
  ENDMETHOD.
ENDCLASS.
