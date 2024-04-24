---
title: Creating a service
description: How to create a service
tags:
  - customizing
  - dpc
  - mpc
date created: Wednesday, August 23rd 2023, 6:18:18 pm
date modified: Tuesday, September 5th 2023, 11:12:48 pm
---
# {{ $frontmatter.title }}

## Steps

1. [Create a SEGW Project](#create-a-segw-project)
2. [Generate classes](#generate-classes)
3. [Implement the framework MPC method](#implement-the-framework-mpc-method)
4. [Implementing the framework DPC methods](#implementing-the-framework-dpc-methods)
	-  [Boilerplate coding for the OData methods](#boilerplate-coding-for-the-odata-methods)
5. [Customize your service](#customize-your-service)

## Create a SEGW Project

First of all we need to create a [SEGW](./definitions/SEGW) project.
Transaction code: [SEGW](./definitions/SEGW)

![segw_create_project](./attachments/segw_create_project.png)

![](./attachments/segw_name_project.png)

## Generate Classes

To start with our development we first need the [SEGW](./definitions/SEGW) transaction to generate the [DPC](./definitions/DPC) and [MPC](./definitions/MPC) classes.

![Generate segw class](./attachments/segw_generate_classes.png)

You might want to change now the class names to match the system naming conventions.

![model service definition](./attachments/segw_model_service_def.png)

After this we're done using the [SEGW](./definitions/SEGW) for developing reasons.

## Implement the Framework MPC Method

First we open the "MPC_EXT" Class. We then want to **redefine** the "define" method.

```abap
PUBLIC SECTION.
	METHODS define REDEFINITION.
```

Next we add the OData framework by calling the "define_mpc" method of the framework class ([ZCL_ODATA_FW_CONTROLLER](./dev-objects/classes/ZCL_ODATA_FW_CONTROLLER)). Notice, that 'Z_MY_PROJECT' is the namespace, that we need to use in the framework view cluster.

```abap
METHOD define.
	TRY.
		NEW zcl_odata_fw_controller( 'Z_MY_PROJECT'
			)->define_mpc(
				i_model = model
				i_anno_model = vocab_anno_model ).
	CATCH zcx_odata INTO DATA(lo_error).
		zcl_odata_utils=>raise_mpc_error( lo_error ).
	ENDTRY.
ENDMETHOD.
```

## Implementing the Framework DPC Methods

For the DPC methods to work with the framework we need to implement two things in the DPC_EXT class.

1. Constructor

```abap
METHOD constructor.
	super->constructor( ).
	TRY.
		me->mt_data_providers = NEW #( me ).
		NEW zcl_odata_fw_controller( 'Z_MY_PROJECT'
		)->define_dpc( i_data_provider = me->mt_data_providers ).
	CATCH zcx_odata INTO DATA(lo_error).
		NEW zcl_odata_error_handler( me )->raise_exception_object( lo_error ).
	ENDTRY.
ENDMETHOD.
```

2. Data provider attribute

```abap
DATA: mt_data_providers TYPE REF TO zcl_odata_data_provider.
```

### Boilerplate Coding for the OData Methods

For the boilerplate code, that has to be inserted into the OData methods you can copy the lines in the [DPC boilerplate code](./DPC-boilerplate-code) file.

## Customize Your Service

Implement your odata service customizing. By calling the **ZODATA_CUST** transaction.
For a detailed documentation you can look into the [OData Customizing](./customizing/index) file.