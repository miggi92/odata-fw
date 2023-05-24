
# DPC Boilerplate code 

## get_entity

Redefinition:
```abap
METHODS /iwbep/if_mgw_appl_srv_runtime~get_entity REDEFINITION.
```

Implementation:
```abap
DATA(ls_data_provider) = me->mt_data_providers->get( iv_entity_name ).

ls_data_provider-instance->before_processing( ).
ls_data_provider-instance->/iwbep/if_mgw_appl_srv_runtime~get_entity(
  EXPORTING
	iv_entity_name          = iv_entity_name
	iv_entity_set_name      = iv_entity_set_name
	iv_source_name          = iv_source_name
	it_key_tab              = it_key_tab
	it_navigation_path      = it_navigation_path
	io_tech_request_context = io_tech_request_context
  IMPORTING
	er_entity               = er_entity
	es_response_context     = es_response_context
).
```


## get_entityset

Redefinition:
```abap
METHODS /iwbep/if_mgw_appl_srv_runtime~get_entityset REDEFINITION.
```

Implementation:
```abap
DATA(ls_data_provider) = me->mt_data_providers->get( iv_entity_name ).

ls_data_provider-instance->before_processing( ).
ls_data_provider-instance->/iwbep/if_mgw_appl_srv_runtime~get_entityset(
   EXPORTING
	 iv_entity_name           = iv_entity_name  
	 iv_entity_set_name       = iv_entity_set_name    
	 iv_source_name           = iv_source_name      
	 it_filter_select_options = it_filter_select_options 
	 it_order                 = it_order
	 is_paging                = is_paging
	 it_navigation_path       = it_navigation_path
	 it_key_tab               = it_key_tab
	 iv_filter_string         = iv_filter_string
	 iv_search_string         = iv_search_string
	 io_tech_request_context  = io_tech_request_context
   IMPORTING
	 er_entityset             = er_entityset
	 es_response_context      = es_response_context
 ).
```


