"! <p class="shorttext synchronized">Model Entity</p>
CLASS zcl_odata_model_entity DEFINITION
  PUBLIC
  INHERITING FROM zcl_odata_model
  CREATE PUBLIC.

  PUBLIC SECTION.
    METHODS create_entity
      IMPORTING is_entity TYPE zodata_entity
      RAISING   /iwbep/cx_mgw_med_exception
                zcx_odata.

    "! <p class="shorttext synchronized">Get entity type</p>
    "!
    "! @parameter ro_entity | <p class="shorttext synchronized">Entity object</p>
    METHODS get_enity_type
      RETURNING VALUE(ro_entity) TYPE REF TO /iwbep/if_mgw_odata_entity_typ.

    "! <p class="shorttext synchronized">Get entity set type</p>
    "!
    "! @parameter ro_entity_set | <p class="shorttext synchronized">Entity set object</p>
    METHODS get_entity_set_type
      RETURNING VALUE(ro_entity_set) TYPE REF TO /iwbep/if_mgw_odata_entity_set.

    "! <p class="shorttext synchronized">Get property type</p>
    "!
    "! @parameter ro_entity_set | <p class="shorttext synchronized">Properties</p>
    METHODS get_properties_type
      RETURNING VALUE(rt_properties) TYPE zcl_odata_model_property=>gty_properties.

  PROTECTED SECTION.
    DATA mt_properties TYPE zcl_odata_model_property=>gty_properties.

  PRIVATE SECTION.
    DATA mo_entity     TYPE REF TO /iwbep/if_mgw_odata_entity_typ.
    DATA mo_entity_set TYPE REF TO /iwbep/if_mgw_odata_entity_set.

    "! <p class="shorttext synchronized">Append nested components if structure is nested</p>
    "!
    "! @parameter io_structure  | <p class="shorttext synchronized">Structure object</p>
    "! @parameter ct_components | <p class="shorttext synchronized">Components with/without nested components</p>
    METHODS append_nested_components
      IMPORTING io_structure  TYPE REF TO cl_abap_structdescr
      CHANGING  ct_components TYPE cl_abap_structdescr=>component_table.

    "! <p class="shorttext synchronized">Check if entity is a media type</p>
    "!
    "! @parameter is_entity | <p class="shorttext synchronized">Entity customizing entry</p>
    "! @parameter io_entity | <p class="shorttext synchronized">Entity object</p>
    METHODS check_if_is_media
      IMPORTING is_entity TYPE zodata_entity
                io_entity TYPE REF TO /iwbep/if_mgw_odata_entity_typ.

    "! <p class="shorttext synchronized">Get ddic structure infos</p>
    "!
    "! @parameter iv_structure       | <p class="shorttext synchronized">Structure</p>
    "! @parameter et_components      | <p class="shorttext synchronized">Structure components</p>
    "! @parameter ev_bind_conversion | <p class="shorttext synchronized">Add bind conversion for ddic structures?</p>
    "! @raising   zcx_odata          | <p class="shorttext synchronized">Error</p>
    METHODS get_structure_infos
      IMPORTING iv_structure       TYPE zodata_entity-structure
      EXPORTING et_components      TYPE cl_abap_structdescr=>component_table
                ev_bind_conversion TYPE abap_bool
      RAISING   zcx_odata.
ENDCLASS.


CLASS zcl_odata_model_entity IMPLEMENTATION.
  METHOD create_entity.
    DATA lt_components      TYPE cl_abap_structdescr=>component_table.
    DATA lv_bind_conversion TYPE abap_bool.
    DATA lo_property        TYPE REF TO zcl_odata_model_property.

    mo_entity = mo_model->create_entity_type( iv_entity_type_name = is_entity-entity_name ).

    get_structure_infos( EXPORTING iv_structure       = is_entity-structure
                         IMPORTING et_components      = lt_components
                                   ev_bind_conversion = lv_bind_conversion ).

    check_if_is_media( is_entity = is_entity
                       io_entity = mo_entity ).

    mo_entity->bind_structure( iv_structure_name   = |{ is_entity-structure }|
                               iv_bind_conversions = lv_bind_conversion ).    " Consider conversion exits
    mo_entity_set = mo_entity->create_entity_set( iv_entity_set_name = |{ is_entity-entity_name }Set| ).

    LOOP AT mo_customizing->get_properties( ) ASSIGNING FIELD-SYMBOL(<ls_property>)
         WHERE entity_name = is_entity-entity_name.
      IF <ls_property>-complex_type IS NOT INITIAL.
        lo_property ?= NEW zcl_odata_model_complex_prprty( io_model       = mo_model
                                                           io_customizing = mo_customizing
                                                           io_anno_model  = mo_anno_model ).

      ELSE.
        lo_property ?= NEW zcl_odata_model_property( io_model       = mo_model
                                                     io_customizing = mo_customizing
                                                     io_anno_model  = mo_anno_model ).
      ENDIF.
      lo_property->create_property( io_entity     = mo_entity
                                    it_components = lt_components
                                    is_property   = <ls_property>
                                    is_entity     = is_entity ).

      INSERT VALUE #( property   = <ls_property>-property_name
                      cmplx_type = <ls_property>-complex_type
                      instance   = lo_property ) INTO TABLE mt_properties.

      IF is_entity-deep_entity_structure IS NOT INITIAL.
        mo_entity->bind_structure( |{ is_entity-deep_entity_structure }| ).
      ENDIF.
    ENDLOOP.
  ENDMETHOD.

  METHOD get_structure_infos.
    DATA lo_structure TYPE REF TO cl_abap_structdescr.

    lo_structure ?= cl_abap_structdescr=>describe_by_name( p_name = iv_structure ).
    IF lo_structure->kind <> cl_abap_structdescr=>kind_struct.
      RAISE EXCEPTION TYPE zcx_odata
        EXPORTING textid = zcx_odata=>no_structure
                  value  = |{ iv_structure }|.
    ENDIF.

    " bind_conversion only works for ddic structures
    lo_structure->get_ddic_object( EXCEPTIONS not_found    = 1                " Type could not be found
                                              no_ddic_type = 2                " Typ is not a dictionary type
                                              OTHERS       = 3 ).
    IF sy-subrc = 0. " is a ddic structure
      ev_bind_conversion = abap_true.
    ENDIF.

    et_components = lo_structure->get_components( ).

    append_nested_components( EXPORTING io_structure  = lo_structure
                              CHANGING  ct_components = et_components ).
  ENDMETHOD.

  METHOD check_if_is_media.
    IF    is_entity-entity_name = zif_odata_constants=>gc_global_entities-documents
       OR is_entity-entity_name = zif_odata_constants=>gc_global_entities-attachments.
      io_entity->set_is_media( ).
    ENDIF.
  ENDMETHOD.

  METHOD append_nested_components.
    IF NOT line_exists( ct_components[ as_include = abap_true ] ). " is sometimes needed cause it doesn't recognizes includes
      RETURN.
    ENDIF.

    DATA(lt_nested) = io_structure->get_components( ).
    LOOP AT lt_nested ASSIGNING FIELD-SYMBOL(<ls_nested>) WHERE type->kind = cl_abap_structdescr=>kind_struct.
      DATA(lo_nested_struct) = CAST cl_abap_structdescr( <ls_nested>-type ).
      APPEND LINES OF lo_nested_struct->get_components( ) TO ct_components.
    ENDLOOP.
  ENDMETHOD.

  METHOD get_enity_type.
    ro_entity = mo_entity.
  ENDMETHOD.

  METHOD get_entity_set_type.
    ro_entity_set = mo_entity_set.
  ENDMETHOD.

  METHOD get_properties_type.
    rt_properties = mt_properties.
  ENDMETHOD.
ENDCLASS.
