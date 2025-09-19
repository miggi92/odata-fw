---
title: Material
description: Here is a step-by-step example of how to implement a material entity using the OData Framework.
navigation:
  icon: i-lucide-box
---

This is an example implementation of a material entity. 

## Prerequisites

1. First you need to create a [SEGW project](/documentation/creating-a-service#create-a-segw-project).
1. Implement the Framework classes
    1. [MPC](/documentation/creating-a-service#implement-the-mpc-class)
    1. [DPC](/documentation/creating-a-service#implement-the-dpc-class)


## Create the entity class

Example class name: `ZCL_ODATA_MATERIAL`.
This class should inherit from `ZCL_ODATA_MAIN`.

```abap	
CLASS zcl_odata_material DEFINITION
    PUBLIC
    INHERITING FROM zcl_odata_main
    CREATE PUBLIC.

    PUBLIC SECTION.

    PROTECTED SECTION.

    PRIVATE SECTION.
ENDCLASS.


CLASS zcl_odata_material IMPLEMENTATION.
ENDCLASS.
```	
### GET_ENTITYSET

#### Redefine 
Redefine the method `GET_ENTITYSET` for the material class.

```abap
METHODS /iwbep/if_mgw_appl_srv_runtime~get_entityset REDEFINITION.
```

```abap
METHOD /iwbep/if_mgw_appl_srv_runtime~get_entityset.
ENDMETHOD.
```

#### Fill the method

Add some logic to the entityset method.

```abap
METHOD /iwbep/if_mgw_appl_srv_runtime~get_entityset.
    DATA lt_materials TYPE mara_tab.

    SELECT * FROM mara
    INTO TABLE lt_materials.

    copy_data_to_ref( EXPORTING i_data = lt_materials
                    CHANGING  c_data = er_entityset ).
ENDMETHOD.
```

### GET_ENTITY
The same for the `GET_ENTITY` method.

#### Redefine

```abap
METHODS /iwbep/if_mgw_appl_srv_runtime~get_entity REDEFINITION.
```

#### Fill the method

```abap
METHOD /iwbep/if_mgw_appl_srv_runtime~get_entity.
    DATA ls_material TYPE mara.

    io_tech_request_context->get_converted_keys( IMPORTING es_key_values = ls_material ).

    SELECT SINGLE * FROM mara INTO ls_material WHERE matnr = ls_material-matnr.

    copy_data_to_ref( EXPORTING i_data = ls_material
                    CHANGING  c_data = er_entity ).
ENDMETHOD.
```

### zcl_odata_material

```abap
CLASS zcl_odata_material DEFINITION
  PUBLIC
  INHERITING FROM zcl_odata_main
  CREATE PUBLIC.

  PUBLIC SECTION.
    METHODS /iwbep/if_mgw_appl_srv_runtime~get_entityset REDEFINITION.
    METHODS /iwbep/if_mgw_appl_srv_runtime~get_entity    REDEFINITION.

  PROTECTED SECTION.

  PRIVATE SECTION.
ENDCLASS.


CLASS zcl_odata_material IMPLEMENTATION.
  METHOD /iwbep/if_mgw_appl_srv_runtime~get_entityset.
    DATA lt_materials TYPE mara_tab.

    SELECT * FROM mara
      INTO TABLE lt_materials.

    copy_data_to_ref( EXPORTING i_data = lt_materials
                      CHANGING  c_data = er_entityset ).
  ENDMETHOD.

  METHOD /iwbep/if_mgw_appl_srv_runtime~get_entity.
    DATA ls_material TYPE mara.

    io_tech_request_context->get_converted_keys( IMPORTING es_key_values = ls_material ).

    SELECT SINGLE * FROM mara INTO ls_material WHERE matnr = ls_material-matnr.

    copy_data_to_ref( EXPORTING i_data = ls_material
                      CHANGING  c_data = er_entity ).
  ENDMETHOD.
ENDCLASS.
```

## Update the DPC_EXT class

The DPC_EXT class should be updated to call the methods of the material class.
You can find the boilerplate code in the [DPC boilerplate code](/documentation/dpc-boilerplate-code) section of the documentation.
This would be the full dpc_ext class:

```abap
CLASS zcl_blubb_dpc_ext DEFINITION
  PUBLIC
  INHERITING FROM zcl_blubb_dpc
  CREATE PUBLIC.

  PUBLIC SECTION.
    METHODS /iwbep/if_mgw_appl_srv_runtime~get_entityset REDEFINITION.
    METHODS /iwbep/if_mgw_appl_srv_runtime~get_entity    REDEFINITION.

    METHODS constructor
      RAISING /iwbep/cx_mgw_busi_exception.

  PROTECTED SECTION.

  PRIVATE SECTION.
    DATA mt_data_providers TYPE REF TO zcl_odata_data_provider.

ENDCLASS.


CLASS zcl_blubb_dpc_ext IMPLEMENTATION.
  METHOD constructor.
    super->constructor( ).
    TRY.
        mt_data_providers = NEW #( me ).

        NEW zcl_odata_fw_controller( 'Namespace' )->define_dpc( mt_data_providers ).
      CATCH zcx_odata INTO DATA(lo_error).
        NEW zcl_odata_error_handler( me )->raise_exception_object( lo_error ).
    ENDTRY.
  ENDMETHOD.

  METHOD /iwbep/if_mgw_appl_srv_runtime~get_entityset.
    DATA(ls_data_provider) = mt_data_providers->get( iv_entity_name ).
    ls_data_provider-instance->before_processing( ).
    ls_data_provider-instance->set_context( mo_context ). " for SADL features

    ls_data_provider-instance->/iwbep/if_mgw_appl_srv_runtime~get_entityset(
      EXPORTING iv_entity_name           = iv_entity_name
                iv_entity_set_name       = iv_entity_set_name
                iv_source_name           = iv_source_name
                it_filter_select_options = it_filter_select_options
                it_order                 = it_order
                is_paging                = is_paging
                it_navigation_path       = it_navigation_path
                it_key_tab               = it_key_tab
                iv_filter_string         = iv_filter_string
                iv_search_string         = iv_search_string
                io_tech_request_context  = io_tech_request_context
      IMPORTING er_entityset             = er_entityset
                es_response_context      = es_response_context ).
  ENDMETHOD.

  METHOD /iwbep/if_mgw_appl_srv_runtime~get_entity.
    DATA(ls_data_provider) = me->mt_data_providers->get( iv_entity_name ).
    ls_data_provider-instance->before_processing( ).
    ls_data_provider-instance->set_context( mo_context ). " for SADL features

    ls_data_provider-instance->/iwbep/if_mgw_appl_srv_runtime~get_entity(
      EXPORTING iv_entity_name          = iv_entity_name
                iv_entity_set_name      = iv_entity_set_name
                iv_source_name          = iv_source_name
                it_key_tab              = it_key_tab
                it_navigation_path      = it_navigation_path
                io_tech_request_context = io_tech_request_context
      IMPORTING er_entity               = er_entity
                es_response_context     = es_response_context ).
  ENDMETHOD.
ENDCLASS.
```

## Customize Entity

Now the Class name and the structure need to be added to the entity customizing.
Structure = `MARA` and Class = `ZCL_ODATA_MATERIAL`.
![Entiy Customizing](pictures/examples/material_entity_customizing.png)

## Customize the Properties

After you declared the entity you need to add the properties to the entity. This can be archived in the customizing.
Just click on the next folder in the customizing view. At least one property should be added to the entity and the key should be defined.

![Property Customizing](pictures/examples/material_entity_props_customizing.png)

In this example the `matnr` is the key property. The fieldname should be the same as the fieldname in the structure.

## Test the service

Now everything is set up and you can test the service in the Gateway Client.
