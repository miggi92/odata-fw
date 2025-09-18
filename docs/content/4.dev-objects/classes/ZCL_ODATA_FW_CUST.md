---
description: Framework customizing class
title: ZCL_ODATA_FW_CUST
---

This class reads out the customizing and stores it for the other classes.

## Methods

### Public

#### get_namespace

Get the namespace of the odata service.

#### get_entities

Get the entities of the odata service.

#### get_properties

Get all properties of the odata service.

#### get_property_texts

Get the texts of the properties of the odata service. Only those ones that are defined in the customizing.
Otherwise the texts will be the text of the data element.

#### get_navigation

Get the navigation properties of the odata service.

#### get_actions

Get the actions/function imports of the odata service.

#### get_action_parameter

Get the parameters of an action/function import of the odata service.

### Private

#### load_customizing

Reads out the customizing from the database and stores it in the attributes.