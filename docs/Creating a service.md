
# Creating a service

## Steps

1. [Create a SEGW Project](#Create%20a%20SEGW%20Project)
2. [Generate classes](#Generate%20classes)
3. [Implement the framework MPC method](#Implement%20the%20framework%20MPC%20method)
4. [Implementing the framework DPC methods](#Implementing%20the%20framework%20DPC%20methods)
	-  [Boilerplate coding for the OData methods](#Boilerplate%20coding%20for%20the%20OData%20methods)

## Create a SEGW Project

First of all we need to create a [SEGW](Definitions/SEGW.md) project. 
Transaction code: [SEGW](Definitions/SEGW.md)

![segw_create_project](attachments/segw_create_project.png)
![](attachments/segw_name_project.png)

## Generate classes 

To start with our development we first need the [SEGW](Definitions/SEGW.md) transaction to generate the [DPC](Definitions/DPC.md) and [MPC](Definitions/MPC.md) classes. 
![generate_classes](attachments/segw_generate_classes.png)
You might want to change now the class names to match the system naming conventions.
![](attachments/segw_model_service_def.png)

After this we're done using the [SEGW](Definitions/SEGW.md) for developing reasons. 

## Implement the framework MPC method

First we open the "*MPC_EXT" Class. We then want to **redefine** the "define" method.
```abap
 PUBLIC SECTION.
    METHODS define REDEFINITION.
```

Next we add the OData framework by calling the "define_mpc" method of the framework class. Notice, that 'Z_MY_PROJECT' is the namespace, that we need to use in the framework view cluster.
```abap
METHOD define.
    TRY.
        NEW zcl_odata_fw_controller( 'Z_MY_PROJECT'
                    )->define_mpc(
                        i_model         = model
                        i_anno_model    = vocab_anno_model
                    ).
      CATCH zcx_odata INTO DATA(lo_error).
        zcl_odata_utils=>raise_mpc_error( lo_error ).
    ENDTRY.
  ENDMETHOD.
```

## Implementing the framework DPC methods

For the DPC methods to work with the framework we need to implement two things in the DPC_EXT class.
1. Constructor
```abap
METHOD constructor.
	super->constructor( ).
	TRY.
		me->mt_data_providers = NEW #( me ).
		NEW zcl_odata_fw_controller( 'Z_MY_PROJECT' )->define_dpc( i_data_provider = me->mt_data_providers ).
	  CATCH zcx_odata INTO DATA(lo_error).
		NEW zcl_odata_error_handler( me )->raise_exception_object( lo_error ).
	ENDTRY.
ENDMETHOD.
```
2. Data provider attribute
```abap
DATA: mt_data_providers TYPE REF TO zcl_odata_data_provider.
```


### Boilerplate coding for the OData methods

For the boilerplate code, that has to be inserted into the OData methods you can copy the lines in the [DPC Boilerplate code](DPC%20Boilerplate%20code.md) file.
