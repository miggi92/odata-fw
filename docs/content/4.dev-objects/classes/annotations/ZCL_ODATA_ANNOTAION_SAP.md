---
title: ZCL_ODATA_ANNOTAION_SAP
description: SAP annotation namespace
---

Class for adding SAP namespace annotations to OData properties. SAP annotations control UI behavior such as display format, labels, units, visibility, and filter requirements.

## Methods

### create_from_property

Static factory method. Creates a new `ZCL_ODATA_ANNOTAION_SAP` instance and initializes the `sap` annotation namespace on the given OData property.

**Parameters:**

| Parameter | Direction | Description |
|-----------|-----------|-------------|
| `io_property` | Importing | OData property to annotate |
| `ro_sap_annotation` | Returning | New SAP annotation instance |

Raises `/iwbep/cx_mgw_med_exception` if the annotation cannot be initialized.

### get_annotation_object

Returns the underlying `/iwbep/if_mgw_odata_annotation` object for direct access.

### add_date_only_annotation

Adds `sap:display-format="Date"` to the property. Use this for date fields defined as `Edm.DateTime` that should display only a date (no time component).

### add_label_annotation

Adds `sap:label` with a custom label text. By default the label is taken from the ABAP data element — use this method to override it.

**Parameters:**

| Parameter | Direction | Description |
|-----------|-----------|-------------|
| `iv_label_text` | Importing | Label text to display in the UI |

### add_unit_annotation

Adds `sap:unit` pointing to the property that holds the unit of measure for this value.

**Parameters:**

| Parameter | Direction | Description |
|-----------|-----------|-------------|
| `iv_unit` | Importing | Name of the unit-of-measure property |

### add_is_unit_annotation

Adds `sap:semantics="unit-of-measure"` to mark the property as a unit of measure field.

### add_required_filter_annotation

Adds `sap:required-in-filter="true"` to enforce that this property must be supplied as a filter parameter when querying the entity set.

### add_visible_false_annotation

Adds `sap:visible="false"` to hide the property from the UI (e.g. technical key fields that should not be shown to the user).
