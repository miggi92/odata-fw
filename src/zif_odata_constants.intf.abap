"! <p class="shorttext synchronized" lang="en">Odata Constants</p>
INTERFACE zif_odata_constants
  PUBLIC .

  CONSTANTS:
    BEGIN OF gc_global_entities,
      value_help TYPE string VALUE 'valueHelp',
      documents  TYPE string VALUE 'globalDocuments',
    END OF gc_global_entities,
    BEGIN OF gc_global_properties,
      BEGIN OF value_help,
        value        TYPE string VALUE 'value',
        description  TYPE string VALUE 'description',
        search_field TYPE string VALUE 'searchField',
      END OF value_help,
    END OF gc_global_properties,
    BEGIN OF gc_global_fieldnames,
      BEGIN OF documents,
        mime_type TYPE string VALUE 'MIME_TYPE',
      END OF documents,
    END OF gc_global_fieldnames.

ENDINTERFACE.
