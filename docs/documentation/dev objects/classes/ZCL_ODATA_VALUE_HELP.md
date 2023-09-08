---
title: ZCL_ODATA_VALUE_HELP
---

# ZCL_ODATA_VALUE_HELP

This class is used for the [[global value help]] entity.
This class inherits from [[ZCL_ODATA_MAIN]].

## Methods

### Public

#### get_entityset

This method is redifined from the super class with the interface [[#IWBEP#IF_MGW_APPL_SRV_RUNTIME|/IWBEP/IF_MGW_APPL_SRV_RUNTIME]].
This method reads out the values for the value help and returns them.

#### get_entity

This method is redifined from the super class with the interface [[#IWBEP#IF_MGW_APPL_SRV_RUNTIME|/IWBEP/IF_MGW_APPL_SRV_RUNTIME]].
This method returns the value help for a specific value.

### Private

#### get_customizing

This method reads out the customizing for the value help.

#### get_texttable

This method reads out the texttable for the table used for the value help.

#### get_data_by_table

Reads out the data dynamically from the database.

#### get_data_by_domain

Reads out the domain values.

#### build_where_condition

Builds the where condition for the select statement.