---
title: Define search/value helps
---

Search helps are currently ment to be global available. But the search help entity will only be generated if any property has an value in the "search help" column.

![customizing tree search helps](pictures/customizing/search_help_tree.png)

Every search help entity will have 2 properties:
- value
- description

## Fixed domain values

The fixed domain values can be created as a value help with following customizing:
![fixed domain value help](pictures/customizing/fixed_domain_vh.png)

So to get it to work you only need to enter the data element into the "data_element" column.

The framework automatically propergates the values.

In the example the value help enity will be: **fixedDomainValueHelpSet**

## Valuehelp from table

As a value help a table with the description and value fields can be specified. Therefore you fill in the columns "tablename", "data_element" and "DESCRIPTION_FIELD".

![value help from table](pictures/customizing/valuehelp_from_table.png)

## Valuehelp from table with where condition

You can also specify a simple where condition to your value help. The customizing is similar to the [value help from table](#valuehelp-from-table). But you must also fill in the columns "WHERE_DATA_ELEMENT1" and "WHERE_VALUE1".

![value help from table with where condition](pictures/customizing/valuehelp_from_table_with_where.png)

## Valuehelp with custom odata entity

The search help can be created with an odata entity using the following customizing:

![search help with an odata entity](pictures/customizing/searchhelp_from_entity.png)

