"! <p class="shorttext synchronized">DPC 4 Value Help Odata</p>
CLASS zcl_odata_value_help_dpc DEFINITION
  PUBLIC
  CREATE PUBLIC.

  PUBLIC SECTION.
    TYPES:
      BEGIN OF gty_s_clause,
        line TYPE c LENGTH 72,
      END OF gty_s_clause,
      gty_t_clause TYPE STANDARD TABLE OF gty_s_clause WITH EMPTY KEY.

    "! <p class="shorttext synchronized">Read dynamic table with language</p>
    "!
    "! @parameter iv_spras           | <p class="shorttext synchronized">Language</p>
    "! @parameter iv_table_name      | <p class="shorttext synchronized">Table name</p>
    "! @parameter it_where_condition | <p class="shorttext synchronized">Where condition</p>
    "! @parameter et_table_data      | <p class="shorttext synchronized">Table data</p>
    CLASS-METHODS read_dyn_table_with_language
      IMPORTING iv_spras           TYPE spras       DEFAULT sy-langu
                iv_table_name      TYPE tabname
                it_where_condition TYPE gty_t_clause OPTIONAL
      EXPORTING et_table_data      TYPE ANY TABLE.

    "! <p class="shorttext synchronized">Read dynamic table</p>
    "!
    "! @parameter iv_table_name      | <p class="shorttext synchronized">Table name</p>
    "! @parameter it_where_condition | <p class="shorttext synchronized">Where condition</p>
    "! @parameter et_table_data      | <p class="shorttext synchronized">Table data</p>
    CLASS-METHODS read_dyn_table
      IMPORTING iv_table_name      TYPE tabname
                it_where_condition TYPE gty_t_clause OPTIONAL
      EXPORTING et_table_data      TYPE ANY TABLE.

  PROTECTED SECTION.

  PRIVATE SECTION.
ENDCLASS.


CLASS zcl_odata_value_help_dpc IMPLEMENTATION.
  METHOD read_dyn_table_with_language.
    SELECT *
      FROM (iv_table_name)
      INTO TABLE @et_table_data
      WHERE spras = @iv_spras
        AND (it_where_condition).                               "#EC CI_SUBRC
  ENDMETHOD.

  METHOD read_dyn_table.
    SELECT *
      FROM (iv_table_name)
      INTO TABLE @et_table_data
      WHERE (it_where_condition).                               "#EC CI_SUBRC
  ENDMETHOD.
ENDCLASS.
