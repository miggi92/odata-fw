---
description: Documents entity class
title: ZCL_ODATA_DOCUMENTS
---

This class inherits from [ZCL_ODATA_MAIN](zcl_odata_main). 
It contains an abstract document entity for the odata service.
This class helps to handle the an document entity in the odata service.

## Methods

### Public

#### get_entityset

This method reads out the entityset of the document. The entityset contains the metadata of the document.

#### get_entity

This method reads out the entity of the document. The entity contains the metadata of the document.

#### get_stream

This method reads out the stream of the document. The stream contains the binary data of the document.

### Protected

#### get_file

This method reads out the file data and returns it as structure of type [ZODATA_FILE](/dev-objects/ddic/structures/zodata_file).
It is called within the method [get_stream](#get_stream) and should be redefined in the inherited class.

#### get_mime_type_from_type

This method reads out the mime type from the type of the document. 
It could be redefined in the inherited class, if other mime types are needed.
By default it converts:

- PDF -> application/pdf
- DOC -> application/msword
- JPG -> image/jpeg
- others -> application/octet-stream