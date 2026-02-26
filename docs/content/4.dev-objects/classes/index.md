---
title: Classes
description: Overview of the classes of the framework
---

## Class Documentations

### Framework classes

1. [ZCL_ODATA_FW_CONTROLLER](classes/zcl_odata_fw_controller)
1. [ZCL_ODATA_FW_MPC](classes/zcl_odata_fw_mpc)
1. [ZCL_ODATA_FW_CUST_DPC](classes/zcl_odata_fw_cust_dpc)
1. [ZCL_ODATA_DATA_PROVIDER](classes/zcl_odata_data_provider)
1. [ZCL_ODATA_FW_CUST](classes/zcl_odata_fw_cust)
1. [ZCL_ODATA_FW_SADL](classes/zcl_odata_fw_sadl)

#### UML


::mermaid
classDiagram

	ZCL_ODATA_FW_MPC <-- ZCL_ODATA_FW_CONTROLLER
    ZCL_ODATA_FW_CUST_DPC <-- ZCL_ODATA_FW_CONTROLLER

	class ZCL_ODATA_FW_CONTROLLER{
        +define_dpc()
        +define_mpc()
	}

	class ZCL_ODATA_FW_MPC{
		+define_from_cust()
	}

    class ZCL_ODATA_FW_CUST_DPC{
		+read_entities()
		+read_global_namespaces()
		+read_properties()
		+read_propery_texts()
		+read_navigations()
		+read_seach_helps()
		+read_actions()
		+read_action_parameters()
	}

	class ZCL_ODATA_DATA_PROVIDER{
		+add()
		+add_entities2providers()
		+get_all()
		+get()
		+get_action()
	}

	class ZCL_ODATA_FW_CUST{
		+get_namespace()
		+get_entities()
		+get_properties()
		+get_property_texts()
		+get_navigation()
		+get_actions()
		+get_action_parameter()
		-load_customizing()
	}
::

### Helper classes

  1. [ZCL_ODATA_MAIN](classes/zcl_odata_main)
  1. [ZCL_ODATA_DOCUMENTS](classes/zcl_odata_documents)
  1. [ZCL_ODATA_VALUE_HELP](classes/zcl_odata_value_help)
  1. [ZCL_ODATA_ERROR_HANDLER](classes/zcl_odata_error_handler)

### UTIL classes

  1. [ZCL_ODATA_UTILS](classes/zcl_odata_utils)

### Auto-generated API Reference

The [API Reference](classes/_generated) pages are automatically generated from the ABAP Doc comments in the source code. They contain the full method signatures, parameters, and exception details.
