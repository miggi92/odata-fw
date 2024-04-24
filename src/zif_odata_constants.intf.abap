"! <p class="shorttext synchronized">Odata Constants</p>
INTERFACE zif_odata_constants
  PUBLIC.

  CONSTANTS gc_version TYPE string VALUE '1.0.1'.
  CONSTANTS: BEGIN OF gc_global_entities,
               value_help  TYPE string VALUE 'valueHelp',
               documents   TYPE string VALUE 'globalDocuments',
               attachments TYPE string VALUE 'globalAttachments',
             END OF gc_global_entities.
  CONSTANTS: BEGIN OF gc_global_properties,
               BEGIN OF value_help,
                 value        TYPE string VALUE 'value',
                 description  TYPE string VALUE 'description',
                 search_field TYPE string VALUE 'searchField',
               END OF value_help,
             END OF gc_global_properties.
  CONSTANTS: BEGIN OF gc_global_fieldnames,
               BEGIN OF documents,
                 mime_type TYPE string VALUE 'MIME_TYPE',
               END OF documents,
             END OF gc_global_fieldnames.
  CONSTANTS: BEGIN OF gc_global_cmplx_entities,
               value_description TYPE string VALUE 'valueDescription',
             END OF gc_global_cmplx_entities.

ENDINTERFACE.
