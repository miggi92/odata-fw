---
title: ZCL_ODATA_ANNOTATION_ODATA
description: SAP OData Capabilities annotation
---

Class for adding [OData Capabilities V1](https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Capabilities.V1.html) annotations to entity sets. Currently supports `FilterRestrictions` — marking properties as required filters or excluding them from filtering entirely.

## Constants

| Constant | Value | Description |
|----------|-------|-------------|
| `mc_anno_namespace` | `Org.OData.Capabilities.V1` | Annotation namespace |
| `mc_vocab_id` | `/IWBEP/VOC_CAPABILITIES` | Vocabulary ID used to register the reference |
| `mc_vocab_version` | `0001` | Vocabulary version |
| `mc_alias` | `ODCapa` | Alias used in annotation terms (e.g. `ODCapa.FilterRestrictions`) |

## Methods

### create

Static factory method. Creates a new `ZCL_ODATA_ANNOTATION_ODATA` instance, registers the Capabilities vocabulary reference, and sets the annotation target to the given entity set.

**Parameters:**

| Parameter | Direction | Description |
|-----------|-----------|-------------|
| `io_vocan_model` | Importing | Vocabulary annotation model of the OData service |
| `iv_namespace` | Importing | Service namespace (slashes are replaced with underscores) |
| `iv_entity_name` | Importing | Entity name (the annotation target becomes `<container>/<entity>Set`) |
| `iv_entity_container` | Importing | Entity container name |
| `ro_odata_annotation` | Returning | New annotation instance |

### add_property_to_required

Adds a property to the `FilterRestrictions/RequiredProperties` collection. The `FilterRestrictions` record is created lazily on the first call.

**Parameters:**

| Parameter | Direction | Description |
|-----------|-----------|-------------|
| `iv_property_name` | Importing | Name of the property or navigation property to require as a filter |

### add_property_to_non_filterable

Adds a property to the `FilterRestrictions/NonFilterableProperties` collection. Use this to hide properties or navigation properties from the filter bar. The `FilterRestrictions` record is created lazily on the first call.

**Parameters:**

| Parameter | Direction | Description |
|-----------|-----------|-------------|
| `iv_property_name` | Importing | Name of the property or navigation property to exclude from filtering |
