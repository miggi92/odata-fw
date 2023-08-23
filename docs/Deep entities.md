---
share: true
---
# Deep entities

## Boilerplate coding for implementing

Look into [create_deep_entity](./DPC%20Boilerplate%20code.md#createdeepentity).

## Defining deep entity structure

The structure has to contain the name of the navigation properties.
Example:
```abap
TYPES:
	BEGIN OF gty_order_deep_entity.
		INCLUDE TYPE gty_service_order.
	TYPES:
	  serviceorder2equipments TYPEgty_equipment_tt,
	  serviceorder2positions  TYPE gty_order_pos_deep_entity_tt,
	END OF gty_order_deep_entity.
```

## Customizing

Just insert the structure name into the "Deep entity structure" field.

![](./attachments/cust_deep_entity.png)

