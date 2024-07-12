"! <p class="shorttext synchronized">SADL Config</p>
CLASS zcl_odata_fw_sadl DEFINITION
  PUBLIC
  CREATE PUBLIC.

  PUBLIC SECTION.
    "! <p class="shorttext synchronized">Generate SADL XML</p>
    "!
    "! @parameter it_entities   | <p class="shorttext synchronized">Entities</p>
    "! @parameter it_properties | <p class="shorttext synchronized">Properties</p>
    "! @parameter rv_sadl_xml   | <p class="shorttext synchronized">SADL XML</p>
    METHODS generate_sadl_xml
      IMPORTING it_entities        TYPE zodata_entity_tt
                it_properties      TYPE  zodata_property_tt
      RETURNING VALUE(rv_sadl_xml) TYPE string.

  PROTECTED SECTION.

  PRIVATE SECTION.
    "! <p class="shorttext synchronized">Get table type</p>
    "! @parameter iv_structure | <p class="shorttext synchronized">Structure name</p>
    "! @parameter rv_type      | <p class="shorttext synchronized">Table type</p>
    METHODS get_table_type
      IMPORTING iv_structure   TYPE zodata_entity-structure
      RETURNING VALUE(rv_type) TYPE string.
ENDCLASS.


CLASS zcl_odata_fw_sadl IMPLEMENTATION.
  METHOD generate_sadl_xml.
    DATA lt_sadl_entities TYPE zodata_entity_tt.

    rv_sadl_xml = |<?xml version="1.0" encoding="utf-16"?>| &
                |<sadl:definition xmlns:sadl="http://sap.com/sap.nw.f.sadl" syntaxVersion="V2" >|.

    LOOP AT it_entities ASSIGNING FIELD-SYMBOL(<ls_entity>) WHERE is_complex = abap_false.

      DATA(lv_type) = get_table_type( <ls_entity>-structure ).

      IF lv_type IS INITIAL.
        CONTINUE.
      ENDIF.

      rv_sadl_xml = |{ rv_sadl_xml }| &
      | <sadl:dataSource type="{ lv_type }" name="{ <ls_entity>-entity_name }Set" binding="{ <ls_entity>-structure }" />|.
      APPEND <ls_entity> TO lt_sadl_entities.
    ENDLOOP.

    rv_sadl_xml = |{ rv_sadl_xml }| & |<sadl:resultSet>|.
    LOOP AT lt_sadl_entities ASSIGNING <ls_entity>.

      rv_sadl_xml = |{ rv_sadl_xml }| &
      |<sadl:structure name="{ <ls_entity>-entity_name }Collection" dataSource="{ <ls_entity>-entity_name }Set" maxEditMode="RO" >| &
      | <sadl:query name="EntitySetDefault">| &
      | </sadl:query>|.

      DATA(lt_properties) = it_properties.
      DELETE lt_properties WHERE entity_name <> <ls_entity>-entity_name.

      LOOP AT lt_properties ASSIGNING FIELD-SYMBOL(<ls_property>) WHERE is_key = abap_false.
        rv_sadl_xml = |{ rv_sadl_xml }| &
        | <sadl:attribute name="{ <ls_property>-abap_name }" binding="{ <ls_property>-abap_name }" isOutput="TRUE" isKey="FALSE" />|.
      ENDLOOP.
      rv_sadl_xml = |{ rv_sadl_xml }| & |</sadl:structure>|.
    ENDLOOP.

    rv_sadl_xml = |{ rv_sadl_xml }| & |</sadl:resultSet>| &
    |</sadl:definition>|.
  ENDMETHOD.

  METHOD get_table_type.
    DATA lo_structure TYPE REF TO cl_abap_structdescr.

    lo_structure ?= cl_abap_elemdescr=>describe_by_name( iv_structure ).
    IF NOT lo_structure->is_ddic_type( ).
      RETURN.
    ENDIF.

    CASE lo_structure->get_ddic_header( )-tabtype.
      WHEN 'B'.
        rv_type = 'CDS'.
      WHEN 'T'.
        rv_type = 'DDIC'.
      WHEN OTHERS.
        RETURN.
    ENDCASE.
  ENDMETHOD.
ENDCLASS.
