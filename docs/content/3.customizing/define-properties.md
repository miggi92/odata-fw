---
title: Define properties
description: Define properties for your entities in the OData service.
---

Properties define the fields of an entity in the OData service. Each property maps to a column of the ABAP structure that backs the entity.

## Adding Properties

After [defining an entity](define-entity), navigate to the property level in the customizing tree. Add at least one property to every entity.

### Required Fields

| Field | Description |
|-------|-------------|
| **PROPERTY_NAME** | The OData property name (e.g. `materialNumber`). This is the name exposed in the service metadata. |
| **ABAP_NAME** | The corresponding field name in the ABAP structure (e.g. `MATNR`). |
| **IS_KEY** | Mark as `X` if this property is a key field. At least one key property is required per entity. |

### Optional Fields

| Field | Description |
|-------|-------------|
| **COMPLEX_TYPE** | Reference to a complex type entity if this property represents a complex structure. |
| **SEARCH_HELP** | Reference to a [search/value help](define-searchhelps) entity. If set, the framework generates a value help entity for this property. |
| **AS_ETAG** | Mark as `X` to use this property as an ETag for optimistic locking. |
| **NOT_FILTERABLE** | Mark as `X` to prevent filtering on this property (sets `sap:filterable="false"`). |
| **NOT_EDITABLE** | Mark as `X` to make this property read-only (sets `sap:creatable="false"` and `sap:updatable="false"`). |
| **SORT_ORDER** | Define a default sort order for this property (numeric value). |
| **FILTER_IN_FILTERBAR** | Mark as `X` to show this property in the smart filter bar. |
| **MANDATORY_FILTER** | Mark as `X` to make this property a required filter. |
| **NOT_VISIBLE** | Mark as `X` to hide this property from the UI (sets `sap:visible="false"`). |

## Property Texts

Custom label texts for properties can be maintained in the property texts customizing level. If no text is maintained, the framework uses the text of the ABAP data element automatically.

## Example

See the [Material example](/examples/material#customize-the-properties) for a concrete walkthrough.
