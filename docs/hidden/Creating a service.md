---
share: true
---
# Creating a service

## Steps

1. [[Creating a service#Create a SEGW Project|Create a SEGW Project]]
2. [[Creating a service#Generate classes|Generate classes]]
3. [[Creating a service#Implement the framework MPC method|Implement the framework MPC method]]
4. [[Creating a service#Implementing the framework DPC methods|Implementing the framework DPC methods]]
	-  [[Creating a service#Boilerplate coding for the OData methods|Boilerplate coding for the OData methods]]
5. [[Creating a service#Customize your service|Customize your service]]


## Create a SEGW Project

First of all we need to create a  [[./SEGW|SEGW]] project. 
Transaction code:  [[./SEGW|SEGW]]

![[../assets/img/segw_create_project.png|segw_create_project]]
![](../assets/img/segw_name_project.png)

## Generate classes 

To start with our development we first need the [[./SEGW|SEGW]] transaction to generate the [[./DPC|DPC]] and [[./MPC|MPC]] classes. 
![generate_classes](../assets/img/segw_generate_classes.png)
You might want to change now the class names to match the system naming conventions.
![](../assets/img/segw_model_service_def.png)

After this we're done using the  [[./SEGW|SEGW]] for developing reasons. 

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

For the boilerplate code, that has to be inserted into the OData methods you can copy the lines in the [[./DPC Boilerplate code|DPC Boilerplate code]] file.

## Customize your service

Implement your odata service customizing. By calling the **ZODATA_CUST** transaction.
For a detailed documentation you can look into the [[./OData Customizing|OData Customizing]] file.
