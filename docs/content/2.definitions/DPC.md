---
title: DPC
description: Definition DPC
---

**D**ata **P**rovider **C**lass

The DPC is the class responsible for providing the actual data for an OData service. It handles all CRUD operations (Create, Read, Update, Delete) and function imports.

In the OData Framework, each entity gets its own DPC class inheriting from [ZCL_ODATA_MAIN](/dev-objects/classes/zcl_odata_main). The framework DPC_EXT class delegates to these entity classes automatically via [ZCL_ODATA_DATA_PROVIDER](/dev-objects/classes/zcl_odata_data_provider).

## Related

- [DPC Boilerplate Code](/documentation/dpc-boilerplate-code)
- [Creating a Service — DPC Methods](/documentation/creating-a-service#implementing-the-framework-dpc-methods)