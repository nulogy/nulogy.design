import { Table } from "@nulogy/components";
import { PropTypes } from 'react-view';

export const config = {
  componentName: "Table",
  scope: {
    Table
  },
  props: {
    columns: {
      type: PropTypes.Array,
      value: `[
        { label: "Date", dataKey: "date" },
        { label: "Expected Quantity", dataKey: "expectedQuantity" },
        { label: "Actual Quantity", dataKey: "actualQuantity" }
      ]`,
      description: "An array of column objects consisting of a label and dataKey and optionally, align and cellRenderer",
    },
    rows: {
      type: PropTypes.Array,
      value: `[
        {
          date: "2019-10-01",
          expectedQuantity: "2,025 eaches",
          actualQuantity: "1,800 eaches",
          id: "r1"
        },
        {
          date: "2019-10-02",
          expectedQuantity: "2,475 eaches",
          actualQuantity: "2,250 eaches",
          id: "r2"
        },
        {
          date: "2019-10-03",
          expectedQuantity: "2,475 eaches",
          actualQuantity: "1,425 eaches",
          id: "r3"
        },
        {
          date: "2019-10-04",
          expectedQuantity: "2,475 eaches",
          actualQuantity: "675 eaches",
          id: "r4"
        },
        {
          date: "2019-10-07",
          expectedQuantity: "2,475 eaches",
          actualQuantity: "1,575 eaches",
          id: "r5"
        }
      ]`,
      description: "An array of row objects, where the key name matches the dataKey of the column",
    },
    loading: {
      type: PropTypes.Boolean,
      value: false,
      description: "A boolean that will show the table body in a loading state when set to true",
    },
    noRowsContent: {
      type: PropTypes.String,
      value: "",
      defaultValue: "No records have been created for this table.",
      description: "What to display when the table has no data",
    },
    keyField: {
      type: PropTypes.String,
      value: "",
      defaultValue: "id",
      description: "The name of the key to use as a unique identifier for individual rows",
    },
    stickyHeader: {
      type: PropTypes.Boolean,
      value: false,
      defaultValue: "false",
      description: "Sets the table header to sticky. NOTE: the vertical position of the sticky header is aligned to the top of the Table. If there is padding on an element wrapping the Table you will see that the header is offset according to the top padding.",
    },

    expandedRows: {
      type: PropTypes.Array,
      value: "",
      defaultValue: "empty",
      description: "An array of row id's that are expanded in the table",
    },
    onRowExpansionChange: {
      type: PropTypes.Function,
      value: "",
      defaultValue: "none",
      description: "The function that should be called when a row is expanded or collapsed. The array of rows currently expanded is passed in as an argument.",
    },
    rowsPerPage: {
      type: PropTypes.Number,
      value: "",
      defaultValue: "none",
      description: "The number of rows to display per page",
    },
    onPageChange: {
      type: PropTypes.Function,
      value: "",
      defaultValue: "none",
      description: "The function that should be called when a current page changes. The page number that is currently selected is passed in as an argument.",
    },
    rowHovers: {
      type: PropTypes.Boolean,
      value: "",
      defaultValue: "true",
      description: "Whether or not to show a light grey background on a row when hovering it",
    },
    compact: {
      type: PropTypes.Boolean,
      value: "",
      defaultValue: "false",
      description: "Whether or not to display the table in compact mode",
    },
    selectAllLabel: {
      type: PropTypes.String,
      value: "",
      description: "When hasSelectableRows is true, replaces the aria-label for the unchecked select all checkbox",
    },
    deselectAriaLabel: {
      type: PropTypes.String,
      value: "",
      description: "When hasSelectableRows is true, replaces the aria-label for the checked select all checkbox",
    },
    onRowMouseEnter: {
      type: PropTypes.Function,
      value: "",
      description: "Event handler that is called whenever a mouse enters a row",
    },
    onRowMouseLeave: {
      type: PropTypes.Function,
      value: "",
      description: "Event handler that is called whenever a mouse leaves a row",
    },
  }
};