class ZCX_ODATA definition
  public
  inheriting from CX_STATIC_CHECK
  create public .

public section.

  interfaces IF_T100_DYN_MSG .
  interfaces IF_T100_MESSAGE .

  constants:
    BEGIN OF no_filter_passed,
        msgid TYPE symsgid VALUE 'Z_ODATA',
        msgno TYPE symsgno VALUE '001',
        attr1 TYPE scx_attrname VALUE '',
        attr2 TYPE scx_attrname VALUE '',
        attr3 TYPE scx_attrname VALUE '',
        attr4 TYPE scx_attrname VALUE '',
      END OF no_filter_passed .
  constants:
    BEGIN OF no_structure,
        msgid TYPE symsgid VALUE 'Z_ODATA',
        msgno TYPE symsgno VALUE '002',
        attr1 TYPE scx_attrname VALUE 'VALUE',
        attr2 TYPE scx_attrname VALUE '',
        attr3 TYPE scx_attrname VALUE '',
        attr4 TYPE scx_attrname VALUE '',
      END OF no_structure .
  constants:
    BEGIN OF no_entities,
        msgid TYPE symsgid VALUE 'Z_ODATA',
        msgno TYPE symsgno VALUE '003',
        attr1 TYPE scx_attrname VALUE 'VALUE',
        attr2 TYPE scx_attrname VALUE '',
        attr3 TYPE scx_attrname VALUE '',
        attr4 TYPE scx_attrname VALUE '',
      END OF no_entities .
  constants:
    BEGIN OF no_properties,
        msgid TYPE symsgid VALUE 'Z_ODATA',
        msgno TYPE symsgno VALUE '004',
        attr1 TYPE scx_attrname VALUE 'VALUE',
        attr2 TYPE scx_attrname VALUE '',
        attr3 TYPE scx_attrname VALUE '',
        attr4 TYPE scx_attrname VALUE '',
      END OF no_properties .
  constants:
    BEGIN OF component_not_in_structure,
        msgid TYPE symsgid VALUE 'Z_ODATA',
        msgno TYPE symsgno VALUE '005',
        attr1 TYPE scx_attrname VALUE 'VALUE',
        attr2 TYPE scx_attrname VALUE 'VALUE2',
        attr3 TYPE scx_attrname VALUE '',
        attr4 TYPE scx_attrname VALUE '',
      END OF component_not_in_structure .
  constants:
    BEGIN OF only_one_filter_id,
        msgid TYPE symsgid VALUE 'Z_ODATA',
        msgno TYPE symsgno VALUE '006',
        attr1 TYPE scx_attrname VALUE '',
        attr2 TYPE scx_attrname VALUE '',
        attr3 TYPE scx_attrname VALUE '',
        attr4 TYPE scx_attrname VALUE '',
      END OF only_one_filter_id .
  constants:
    BEGIN OF no_search_help_found,
        msgid TYPE symsgid VALUE 'Z_ODATA',
        msgno TYPE symsgno VALUE '007',
        attr1 TYPE scx_attrname VALUE '',
        attr2 TYPE scx_attrname VALUE '',
        attr3 TYPE scx_attrname VALUE '',
        attr4 TYPE scx_attrname VALUE '',
      END OF no_search_help_found .
  constants:
    begin of ACTION_NOT_IMPLEMENTED,
      msgid type symsgid value 'Z_ODATA',
      msgno type symsgno value '008',
      attr1 type scx_attrname value 'VALUE',
      attr2 type scx_attrname value '',
      attr3 type scx_attrname value '',
      attr4 type scx_attrname value '',
    end of ACTION_NOT_IMPLEMENTED .
  data VALUE type STRING .
  data VALUE2 type STRING .

  class-methods CONVERT_MSG
    importing
      !I_MSGID type SYST_MSGID default SY-MSGID
      !I_MSGNO type SYST_MSGNO default SY-MSGNO
      !I_MSGV1 type SYST_MSGV default SY-MSGV1
      !I_MSGV2 type SYST_MSGV default SY-MSGV2
      !I_MSGV3 type SYST_MSGV default SY-MSGV3
      !I_MSGV4 type SYST_MSGV default SY-MSGV4
    returning
      value(R_TEXTID) like IF_T100_MESSAGE=>T100KEY .
  class-methods CONVERT_BAPIRET2
    importing
      !I_RETURN type BAPIRET2
    returning
      value(R_TEXTID) like IF_T100_MESSAGE=>T100KEY .
  methods CONSTRUCTOR
    importing
      !TEXTID like IF_T100_MESSAGE=>T100KEY optional
      !PREVIOUS like PREVIOUS optional
      !VALUE type STRING optional
      !VALUE2 type STRING optional .
  PROTECTED SECTION.
  PRIVATE SECTION.
ENDCLASS.



CLASS ZCX_ODATA IMPLEMENTATION.


  METHOD constructor ##ADT_SUPPRESS_GENERATION.
    CALL METHOD super->constructor
      EXPORTING
        previous = previous.
    me->value = value .
    me->value2 = value2 .
    CLEAR me->textid.
    IF textid IS INITIAL.
      if_t100_message~t100key = if_t100_message=>default_textid.
    ELSE.
      if_t100_message~t100key = textid.
    ENDIF.
  ENDMETHOD.


  METHOD convert_bapiret2.
    r_textid = VALUE #( msgid = i_return-id
                        msgno = i_return-number
                        attr1 = i_return-message_v1
                        attr2 = i_return-message_v2
                        attr3 = i_return-message_v3
                        attr4 = i_return-message_v4 ).
  ENDMETHOD.


  METHOD convert_msg.
    r_textid = VALUE #( msgid = i_msgid
                        msgno = i_msgno
                        attr1 = i_msgv1
                        attr2 = i_msgv2
                        attr3 = i_msgv3
                        attr4 = i_msgv4 ).
  ENDMETHOD.
ENDCLASS.
