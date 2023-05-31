*"* use this source file for your ABAP unit test classes
CLASS ltcl_odata_utils DEFINITION FINAL FOR TESTING
  DURATION SHORT
  RISK LEVEL HARMLESS.

  PRIVATE SECTION.
    METHODS:
      setup,
      convert_timestamp2date FOR TESTING,
      convert_date2timestamp FOR TESTING,
      conv_date_and_time2timestamp FOR TESTING,
      conv_timestamp2date_and_time FOR TESTING.
ENDCLASS.


CLASS ltcl_odata_utils IMPLEMENTATION.

  METHOD setup.

  ENDMETHOD.

  METHOD convert_timestamp2date.
    DATA: convert_timestamp2date TYPE timestampl.

    GET TIME STAMP FIELD convert_timestamp2date.

    cl_abap_unit_assert=>assert_equals(
        act                  = zcl_odata_utils=>convert_timestamp2date( convert_timestamp2date )
        exp                  = sy-datum
    ).
  ENDMETHOD.

  METHOD convert_date2timestamp.
    DATA: convert_timestamp2date TYPE timestampl VALUE '20210504000000.000000',
          test_date              TYPE datum VALUE '20210504'.

    cl_abap_unit_assert=>assert_equals(
        act                  = zcl_odata_utils=>convert_date2timestamp( test_date )
        exp                  =  convert_timestamp2date
    ).
  ENDMETHOD.

  METHOD conv_date_and_time2timestamp.
    DATA: convert_timestamp2date TYPE timestampl,
          test_date              TYPE datum VALUE '20210504',
          test_time              TYPE syst_timlo VALUE '101530'.

    cl_abap_unit_assert=>assert_equals(
        act                  = zcl_odata_utils=>conv_date_and_time2timestamp( i_date = test_date i_time = test_time )
        exp                  =  '20210504101530.000000'
    ).
  ENDMETHOD.

  METHOD conv_timestamp2date_and_time.
    DATA: convert_timestamp2date TYPE timestampl VALUE '20210504101530.000000',
          true_date              TYPE datum VALUE '20210504',
          true_time              TYPE syst_timlo VALUE '101530',
          test_date              TYPE datum,
          test_time              TYPE syst_timlo.

    zcl_odata_utils=>conv_timestamp2date_and_time(
      EXPORTING
        i_timestamp = convert_timestamp2date
      IMPORTING
        e_date      = test_date
        e_time      = test_time
    ).

    cl_abap_unit_assert=>assert_equals(
        act                  =  test_date 
        exp                  =  '20210504'
       quit                 = if_aunit_constants=>no
    ).

    cl_abap_unit_assert=>assert_equals(
    act                  =  test_time
    exp                  =  '101530'
   quit                 = if_aunit_constants=>no 
).
  ENDMETHOD.

ENDCLASS.
