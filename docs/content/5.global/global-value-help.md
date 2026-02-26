---
title: Global Value Help
description: Global value help entities available across all OData services using the framework.
---

The global value help is a shared entity that provides search/value help data for properties across all OData services that use this framework. It is implemented in the [ZCL_ODATA_VALUE_HELP](/dev-objects/classes/zcl_odata_value_help) class.

## How It Works

When a property in the [customizing](/customizing/define-searchhelps) has a value in the **search help** column, the framework automatically generates a value help entity. Every value help entity exposes the following properties:

| Property | Description |
|----------|-------------|
| `search_help` | The search help identifier |
| `value` | The actual value |
| `description` | A human-readable description of the value |

## Value Help Types

The framework supports several types of value helps, all configured through the customizing:

1. **Fixed domain values** — Values from an ABAP domain's fixed values
2. **Table-based values** — Values read from a database table
3. **Table with where condition** — Table-based values with an additional filter
4. **Custom OData entity** — Values from another OData entity

For detailed customizing instructions, see [Define Search/Value Helps](/customizing/define-searchhelps).

## Global Availability

Value help entities are available in every OData service that uses the framework, regardless of the namespace. The entity name follows the pattern `{searchHelpName}Set`.
