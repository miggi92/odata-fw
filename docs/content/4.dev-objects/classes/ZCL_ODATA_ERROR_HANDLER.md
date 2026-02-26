---
title: ZCL_ODATA_ERROR_HANDLER
description: OData Error Handler class
---

This class converts ABAP exceptions into OData-compatible error responses. It should be used in the DPC_EXT constructor to handle framework exceptions.

::note
See the [auto-generated API reference](classes/_generated/zcl_odata_error_handler) for a full list of methods and parameters extracted from the ABAP source.
::

## Usage

The error handler is typically used in the DPC_EXT constructor:

```abap
METHOD constructor.
  super->constructor( ).
  TRY.
      mt_data_providers = NEW #( me ).
      NEW zcl_odata_fw_controller( 'Z_MY_PROJECT'
        )->define_dpc( mt_data_providers ).
    CATCH zcx_odata INTO DATA(lo_error).
      NEW zcl_odata_error_handler( me )->raise_exception_object( lo_error ).
  ENDTRY.
ENDMETHOD.
```

## Methods

### constructor

Creates a new error handler instance with the DPC context.

### raise_exception_object

Converts any ABAP exception (`CX_ROOT`) into a `/IWBEP/CX_MGW_BUSI_EXCEPTION` that the OData runtime can handle. The error text from the original exception is preserved and shown in the UI message manager.
