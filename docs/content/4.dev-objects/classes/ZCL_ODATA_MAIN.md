---
title: ZCL_ODATA_MAIN
description: Class ZCL_ODATA_MAIN
---

This abstract class is the blueprint for every entity class used by this framework.

::note
See the [auto-generated API reference](classes/_generated/zcl_odata_main) for a full list of methods and parameters extracted from the ABAP source.
::

## [/IWBEP/IF_MGW_APPL_SRV_RUNTIME](/dev-objects/sap-objects/iwbep-if_mgw_appl_srv_runtime)

Every method of the "/iwbep/if_mgw_appl_srv_runtime" interface can be redefined in the sub class. Only the methods that you really need have to be redefined.

## Calling other Methods of the DPC_EXT Class

For calling other methods of the dpc_ext class you can use the protected attribute "DPC_OBJECT". It holds the instance of the dpc_ext class.

## Methods

### BEFORE_PROCESSING

This method can be used and redefined. Just add this method before calling the entity class.
Here you can add some logic that should be executed before calling the odata methods.

### RAISE_ERROR

This method can be used to convert own exception classes into exceptions that can be handled in the UI with the "message manager".

### COPY_DATA_TO_REF

This method uses the standard odata "copy_data_to_ref" method. But adds a custom returning header with the maximal count.

### GET_REQUEST_HEADER

Reads out the header attributes of the request.

### ENTITYSET_FILTER_PAGE_ORDER

This method applies dynamic filtering, pagination and sorting to the current entity set table. This is ment to be called after selecting the entries.

::caution
This can be heavily non performant. If you can, please filter and paginate your entries before or while selecting.
This is a lazy option without caring about performance.
::

The options can also be called separate.

- [PAGINATE_COLLECTION](#paginate_collection)
- [FILTER_COLLECTION](#filter_collection)
- [ORDER_COLLECTION](#order_collection)

### PAGINATE_COLLECTION

This method can be used to add the pagination logic to the collection.

### FILTER_COLLECTION

This method dynamically filters the collection.

### ORDER_COLLECTION

This method dynamically sorts the collection.
