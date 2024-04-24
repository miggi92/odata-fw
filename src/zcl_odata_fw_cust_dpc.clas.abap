"! <p class="shorttext synchronized">Customizing data provider</p>
CLASS zcl_odata_fw_cust_dpc DEFINITION
  PUBLIC ABSTRACT
  CREATE PUBLIC.

  PUBLIC SECTION.
    "! <p class="shorttext synchronized">Read entities from db</p>
    "!
    "! @parameter it_namespaces | <p class="shorttext synchronized">Namespace range</p>
    "! @parameter rt_entities   | <p class="shorttext synchronized">Entities</p>
    "! @raising   zcx_odata     | <p class="shorttext synchronized">No entities found</p>
    CLASS-METHODS read_entities
      IMPORTING it_namespaces      TYPE zodata_namespace_range
      RETURNING VALUE(rt_entities) TYPE zodata_entity_tt
      RAISING   zcx_odata.

    "! <p class="shorttext synchronized">Read global namespaces</p>
    "!
    "! @parameter rt_global_namespaces | <p class="shorttext synchronized">Global namespaces</p>
    CLASS-METHODS read_global_namespaces
      RETURNING VALUE(rt_global_namespaces) TYPE zodata_namespace_tt.

    "! <p class="shorttext synchronized">Read properties</p>
    "!
    "! @parameter it_namespaces | <p class="shorttext synchronized">Namespace range</p>
    "! @parameter rt_properties | <p class="shorttext synchronized">Properties</p>
    "! @raising   zcx_odata     | <p class="shorttext synchronized">No properties found</p>
    CLASS-METHODS read_properties
      IMPORTING it_namespaces        TYPE zodata_namespace_range
      RETURNING VALUE(rt_properties) TYPE zodata_property_tt
      RAISING   zcx_odata.

    "! <p class="shorttext synchronized">Read property texts</p>
    "!
    "! @parameter it_namespaces     | <p class="shorttext synchronized">Namespace range</p>
    "! @parameter rt_property_texts | <p class="shorttext synchronized">Property texts</p>
    CLASS-METHODS read_property_texts
      IMPORTING it_namespaces            TYPE zodata_namespace_range
      RETURNING VALUE(rt_property_texts) TYPE zodata_prop_txts_tt.

    "! <p class="shorttext synchronized">Read navigations</p>
    "!
    "! @parameter it_namespaces  | <p class="shorttext synchronized">Namespace range</p>
    "! @parameter rt_navigations | <p class="shorttext synchronized">Navigations</p>
    CLASS-METHODS read_navigations
      IMPORTING it_namespaces         TYPE zodata_namespace_range
      RETURNING VALUE(rt_navigations) TYPE zodata_nav_tt.

    "! <p class="shorttext synchronized">Read search helps</p>
    "!
    "! @parameter rt_search_helps | <p class="shorttext synchronized">Search helps</p>
    CLASS-METHODS read_search_helps
      RETURNING VALUE(rt_search_helps) TYPE zodata_searchhlp_tt.

    "! <p class="shorttext synchronized">Read actions</p>
    "!
    "! @parameter it_namespaces | <p class="shorttext synchronized">Namespace range</p>
    "! @parameter rt_actions    | <p class="shorttext synchronized">Actions</p>
    CLASS-METHODS read_actions
      IMPORTING it_namespaces     TYPE zodata_namespace_range
      RETURNING VALUE(rt_actions) TYPE zodata_actions_tt.

    "! <p class="shorttext synchronized">Read action parameters</p>
    "!
    "! @parameter it_namespaces        | <p class="shorttext synchronized">Namespace range</p>
    "! @parameter rt_action_parameters | <p class="shorttext synchronized">Action parameters</p>
    CLASS-METHODS read_action_parameters
      IMPORTING it_namespaces               TYPE zodata_namespace_range
      RETURNING VALUE(rt_action_parameters) TYPE zodata_act_param_tt.

  PROTECTED SECTION.

  PRIVATE SECTION.
ENDCLASS.


CLASS zcl_odata_fw_cust_dpc IMPLEMENTATION.
  METHOD read_entities.
    SELECT * FROM zodata_entity
      INTO TABLE @rt_entities
      WHERE namespace IN @it_namespaces.

    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE zcx_odata
        EXPORTING textid = zcx_odata=>no_entities.
    ENDIF.
  ENDMETHOD.

  METHOD read_global_namespaces.
    SELECT * FROM zodata_namespace
      INTO TABLE @rt_global_namespaces
      WHERE is_global = @abap_true. "#EC CI_SUBRC
  ENDMETHOD.

  METHOD read_properties.
    SELECT * FROM zodata_property
      INTO TABLE @rt_properties
      WHERE namespace IN @it_namespaces.

    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE zcx_odata
        EXPORTING textid = zcx_odata=>no_properties.
    ENDIF.
  ENDMETHOD.

  METHOD read_property_texts.
    SELECT * FROM zodata_prop_txts
      INTO TABLE @rt_property_texts
      WHERE namespace IN @it_namespaces. "#EC CI_SUBRC
  ENDMETHOD.

  METHOD read_navigations.
    SELECT * FROM zodata_nav
      INTO TABLE @rt_navigations
      WHERE namespace IN @it_namespaces. "#EC CI_SUBRC
  ENDMETHOD.

  METHOD read_search_helps.
    SELECT * FROM zodata_searchhlp
      INTO TABLE @rt_search_helps. "#EC CI_SUBRC
  ENDMETHOD.

  METHOD read_actions.
    SELECT * FROM zodata_actions
      INTO TABLE @rt_actions
      WHERE namespace IN @it_namespaces. "#EC CI_SUBRC
  ENDMETHOD.

  METHOD read_action_parameters.
    SELECT * FROM zodata_act_param
      INTO TABLE @rt_action_parameters
      WHERE namespace IN @it_namespaces. "#EC CI_SUBRC
  ENDMETHOD.
ENDCLASS.
