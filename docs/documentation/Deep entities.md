---
title: Deep entities
description: Deep entities
date created: Wednesday, August 23rd 2023, 6:18:18 pm
date modified: Tuesday, September 5th 2023, 5:37:56 pm
---
# Deep Entities

## Boilerplate Coding for Implementing

Look into [[DPC boilerplate code#create_deep_entity]].

## Defining Deep Entity Structure

The structure has to contain the name of the navigation properties.
Example:

```abap
TYPES:
	BEGIN OF gty_order_deep_entity.
		INCLUDE TYPE gty_service_order.
	TYPES:
		serviceorder2equipments TYPE gty_equipment_tt,
		serviceorder2positions TYPE gty_order_pos_deep_entity_tt,
	END OF gty_order_deep_entity.
```

## Customizing

Just insert the structure name into the "Deep entity structure" field.

![[cust_deep_entity.png]]

