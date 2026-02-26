---
title: MPC
description: Definition MPC
---

**M**odel **P**rovider **C**lass

The MPC is the class responsible for defining the data model (entities, properties, associations, etc.) of an OData service. It generates the service metadata document (`$metadata`).

In the OData Framework, the MPC_EXT class calls [ZCL_ODATA_FW_CONTROLLER.define_mpc](/dev-objects/classes/zcl_odata_fw_controller) which builds the model from the [customizing](/customizing) entries.

## Related

- [Creating a Service — MPC Method](/documentation/creating-a-service#implement-the-framework-mpc-method)
- [ZCL_ODATA_FW_MPC](/dev-objects/classes/zcl_odata_fw_mpc)