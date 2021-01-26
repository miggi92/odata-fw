*---------------------------------------------------------------------*
*    view related data declarations
*   generation date: 21.01.2021 at 13:27:53
*   view maintenance generator version: #001407#
*---------------------------------------------------------------------*
*...processing: ZODATA_ENTITY...................................*
DATA:  BEGIN OF STATUS_ZODATA_ENTITY                 .   "state vector
         INCLUDE STRUCTURE VIMSTATUS.
DATA:  END OF STATUS_ZODATA_ENTITY                 .
CONTROLS: TCTRL_ZODATA_ENTITY
            TYPE TABLEVIEW USING SCREEN '0001'.
*...processing: ZODATA_SEARCHHLP................................*
DATA:  BEGIN OF STATUS_ZODATA_SEARCHHLP              .   "state vector
         INCLUDE STRUCTURE VIMSTATUS.
DATA:  END OF STATUS_ZODATA_SEARCHHLP              .
CONTROLS: TCTRL_ZODATA_SEARCHHLP
            TYPE TABLEVIEW USING SCREEN '0004'.
*...processing: ZODATA_V_NAV....................................*
TABLES: ZODATA_V_NAV, *ZODATA_V_NAV. "view work areas
CONTROLS: TCTRL_ZODATA_V_NAV
TYPE TABLEVIEW USING SCREEN '0002'.
DATA: BEGIN OF STATUS_ZODATA_V_NAV. "state vector
          INCLUDE STRUCTURE VIMSTATUS.
DATA: END OF STATUS_ZODATA_V_NAV.
* Table for entries selected to show on screen
DATA: BEGIN OF ZODATA_V_NAV_EXTRACT OCCURS 0010.
INCLUDE STRUCTURE ZODATA_V_NAV.
          INCLUDE STRUCTURE VIMFLAGTAB.
DATA: END OF ZODATA_V_NAV_EXTRACT.
* Table for all entries loaded from database
DATA: BEGIN OF ZODATA_V_NAV_TOTAL OCCURS 0010.
INCLUDE STRUCTURE ZODATA_V_NAV.
          INCLUDE STRUCTURE VIMFLAGTAB.
DATA: END OF ZODATA_V_NAV_TOTAL.

*...processing: ZODATA_V_PROP...................................*
TABLES: ZODATA_V_PROP, *ZODATA_V_PROP. "view work areas
CONTROLS: TCTRL_ZODATA_V_PROP
TYPE TABLEVIEW USING SCREEN '0005'.
DATA: BEGIN OF STATUS_ZODATA_V_PROP. "state vector
          INCLUDE STRUCTURE VIMSTATUS.
DATA: END OF STATUS_ZODATA_V_PROP.
* Table for entries selected to show on screen
DATA: BEGIN OF ZODATA_V_PROP_EXTRACT OCCURS 0010.
INCLUDE STRUCTURE ZODATA_V_PROP.
          INCLUDE STRUCTURE VIMFLAGTAB.
DATA: END OF ZODATA_V_PROP_EXTRACT.
* Table for all entries loaded from database
DATA: BEGIN OF ZODATA_V_PROP_TOTAL OCCURS 0010.
INCLUDE STRUCTURE ZODATA_V_PROP.
          INCLUDE STRUCTURE VIMFLAGTAB.
DATA: END OF ZODATA_V_PROP_TOTAL.

*.........table declarations:.................................*
TABLES: *ZODATA_ENTITY                 .
TABLES: *ZODATA_SEARCHHLP              .
TABLES: ZODATA_ENTITY                  .
TABLES: ZODATA_NAV                     .
TABLES: ZODATA_PROPERTY                .
TABLES: ZODATA_SEARCHHLP               .

* general table data declarations..............
  INCLUDE LSVIMTDT                                .
