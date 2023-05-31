"! <p class="shorttext synchronized" lang="en">Customizing data provider</p>
CLASS zcl_odata_fw_cust_dpc DEFINITION
  PUBLIC
  CREATE PUBLIC ABSTRACT.

  PUBLIC SECTION.

    CLASS-METHODS:
      "! <p class="shorttext synchronized" lang="en">Read entities from db</p>
      "!
      "! @parameter it_namespaces | <p class="shorttext synchronized" lang="en">Namespace range</p>
      "! @parameter rt_entities | <p class="shorttext synchronized" lang="en">Entities</p>
      "! @raising zcx_odata | <p class="shorttext synchronized" lang="en">No entities found</p>
      read_entities
        IMPORTING
          it_namespaces      TYPE zodata_namespace_range
        RETURNING
          VALUE(rt_entities) TYPE zodata_entity_tt
        RAISING
          zcx_odata,
      "! <p class="shorttext synchronized" lang="en">Read global namespaces</p>
      "!
      "! @parameter rt_global_namespaces | <p class="shorttext synchronized" lang="en">Global namespaces</p>
      read_global_namespaces
        RETURNING
          VALUE(rt_global_namespaces) TYPE zodata_namespace_tt,
      "! <p class="shorttext synchronized" lang="en">Read properties</p>
      "!
      "! @parameter it_namespaces | <p class="shorttext synchronized" lang="en">Namespace range</p>
      "! @parameter rt_properties | <p class="shorttext synchronized" lang="en">Properties</p>
      "! @raising zcx_odata | <p class="shorttext synchronized" lang="en">No properties found</p>
      read_properties
        IMPORTING
          it_namespaces        TYPE zodata_namespace_range
        RETURNING
          VALUE(rt_properties) TYPE zodata_property_tt
        RAISING
          zcx_odata,
      "! <p class="shorttext synchronized" lang="en">Read property texts</p>
      "!
      "! @parameter it_namespaces | <p class="shorttext synchronized" lang="en">Namespace range</p>
      "! @parameter rt_property_texts | <p class="shorttext synchronized" lang="en">Property texts</p>
      read_property_texts
        IMPORTING
          it_namespaces            TYPE zodata_namespace_range
        RETURNING
          VALUE(rt_property_texts) TYPE zodata_prop_txts_tt,
      "! <p class="shorttext synchronized" lang="en">Read navigations</p>
      "!
      "! @parameter it_namespaces | <p class="shorttext synchronized" lang="en">Namespace range</p>
      "! @parameter rt_navigations | <p class="shorttext synchronized" lang="en">Navigations</p>
      read_navigations
        IMPORTING
          it_namespaces         TYPE zodata_namespace_range
        RETURNING
          VALUE(rt_navigations) TYPE zodata_nav_tt,
      "! <p class="shorttext synchronized" lang="en">Read search helps</p>
      "!
      "! @parameter it_namespaces | <p class="shorttext synchronized" lang="en">Namespace range</p>
      "! @parameter rt_search_helps | <p class="shorttext synchronized" lang="en">Search helps</p>
      read_search_helps
        IMPORTING
          it_namespaces          TYPE zodata_namespace_range
        RETURNING
          VALUE(rt_search_helps) TYPE zodata_searchhlp_tt,
      "! <p class="shorttext synchronized" lang="en">Read actions</p>
      "!
      "! @parameter it_namespaces | <p class="shorttext synchronized" lang="en">Namespace range</p>
      "! @parameter rt_actions | <p class="shorttext synchronized" lang="en">Actions</p>
      read_actions
        IMPORTING
          it_namespaces     TYPE zodata_namespace_range
        RETURNING
          VALUE(rt_actions) TYPE zodata_actions_tt,
      "! <p class="shorttext synchronized" lang="en">Read action parameters</p>
      "!
      "! @parameter it_namespaces | <p class="shorttext synchronized" lang="en">Namespace range</p>
      "! @parameter rt_action_parameters | <p class="shorttext synchronized" lang="en">Action parameters</p>
      read_action_parameters
        IMPORTING
          it_namespaces               TYPE zodata_namespace_range
        RETURNING
          VALUE(rt_action_parameters) TYPE zodata_act_param_tt.
  PROTECTED SECTION.
  PRIVATE SECTION.
ENDCLASS.



CLASS zcl_odata_fw_cust_dpc IMPLEMENTATION.
  METHOD read_entities.
    SELECT *
          FROM zodata_entity
          INTO TABLE rt_entities
@it_namespaces

    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE zcx_odata
        EXPORTING
          textid = zcx_odata=>no_entities.
    ENDIF.

  ENDMETHOD.

  METHOD read_global_namespaces.
    SELECT namespace
       FROM zodata_namespace
       INTO TABLE @rt_global_namespaces
       WHERE is_global = @abap_true.

    IF sy-subrc <> 0.
      " no need to raise anything
    ENDIF.
  ENDMETHOD.

  METHOD read_properties.
    SELECT *
        FROM zodata_property
        INTO TABLE rt_properties
@it_namespaces

    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE zcx_odata
        EXPORTING
          textid = zcx_odata=>no_properties.
    ENDIF.
  ENDMETHOD.

  METHOD read_property_texts.
    SELECT *
        FROM zodata_prop_txts
        INTO TABLE rt_property_texts
@it_namespaces

    IF sy-subrc <> 0.
      " no need to throw anything
    ENDIF.
  ENDMETHOD.

  METHOD read_navigations.
    SELECT *
        FROM zodata_nav
        INTO TABLE rt_navigations
        WHERE namespace IN it_namespaces.

    IF sy-subrc <> 0.
      " no need to throw anything
    ENDIF.
  ENDMETHOD.

  METHOD read_search_helps.
    SELECT *
        FROM zodata_searchhlp
        INTO TABLE rt_search_helps.

    IF sy-subrc <> 0.
      " no need to throw anything
    ENDIF.
  ENDMETHOD.

  METHOD read_actions.
    SELECT *
        FROM zodata_actions
        INTO TABLE rt_actions
        WHERE namespace IN it_namespaces.

    IF sy-subrc <> 0.
      " no need to throw anything
    ENDIF.
  ENDMETHOD.

  METHOD read_action_parameters.
    SELECT *
        FROM zodata_act_param
        INTO TABLE rt_action_parameters
        WHERE namespace IN it_namespaces.

    IF sy-subrc <> 0.
      " no need to throw anything
    ENDIF.
  ENDMETHOD.

ENDCLASS.
