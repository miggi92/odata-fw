---
title: Deep entities
description: Deep entities
---

## Boilerplate Coding for Implementing

Look into [create deep entity](dpc-boilerplate-code#create_deep_entity) documentation.

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

![deep entity customizing](pictures/customizing/cust_deep_entity.png)

