---
title: Annotations
description: Annotation classes
navigation:
  icon: i-lucide-at-sign
---

## Class UML

::mermaid
classDiagram

	ZCL_ODATA_ANNOTATION_COMMON <|-- ZCL_ODATA_ANNOTATION_SHLP

	class ZCL_ODATA_ANNOTATION_COMMON{
	}

	class ZCL_ODATA_ANNOTATION_SHLP{
		+add_inout_parameter()
		+add_display_parameter()
		+add_in_parameter()
		+add_out_parameter()
	}

	class ZCL_ODATA_ANNOTAION_SAP{
		+create_from_property()$
		+get_annotation_object()
		+add_date_only_annotation()
		+add_label_annotation()
		+add_unit_annotation()
		+add_is_unit_annotation()
		+add_required_filter_annotation()
		+add_visible_false_annotation()
	}

	class ZCL_ODATA_ANNOTATION_ODATA{
		+create()$
		+add_property_to_required()
		+add_property_to_non_filterable()
	}

::

