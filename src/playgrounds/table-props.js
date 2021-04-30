import { PropTypes } from 'react-view';

export const tableRowProps = {
  id: {
    type: PropTypes.String,
    value: "",
    description: "Unique id for each row, required if another keyField is not passed to the Table",
  },
  heading: {
    type: PropTypes.String,
    value: "",
    description: "Creates a heading out of the row that spans the full-width of the table",
  },
  cellRenderer: {
    type: PropTypes.Function,
    value: "",
    description: "Used to override the cell component in the row. No padding or other styles will be added in this case. It should return a react component.",
  },
  expandAriaLabel: {
    type: PropTypes.String,
    value: "",
    description: "When hasExpandableRows is true, replaces the aria-label for the expand button",
  },
  collapseAriaLabel: {
    type: PropTypes.String,
    value: "",
    description: "When hasExpandableRows is true, replaces the aria-label for the collapse button",
  },
  selectAriaLabel: {
    type: PropTypes.String,
    value: "",
    description: "When hasSelectableRows is true, replaces the aria-label for the unchecked checkbox",
  },
  deselectAriaLabel: {
    type: PropTypes.String,
    value: "",
    description: "When hasSelectableRows is true, replaces the aria-label for the checked checkbox",
  },
};

export const tableColumnProps = {
  label: {
    type: PropTypes.String,
    value: "",
    description: "The label used in the header of the table column",
  },
  dataKey: {
    type: PropTypes.String,
    value: "",
    default: "Required",
    description: "Unique key for the column, used as the keys to define cell content for the column of each row",
  },
  align: {
    type: PropTypes.Enum,
    value: "",
    options: ['left', 'right', 'center'],
    default: "left",
    description: "sets the alignment of the text for the column in the default cell, 'left', 'right' or 'center'",
  },
  cellFormatter: {
    type: PropTypes.Function,
    value: "",
    description: "Used to format the table cells in the column. It should return a string or react component.",
  },
  cellRenderer: {
    type: PropTypes.Function,
    value: "",
    description: "Used to override the cell component in the column. No padding or other styles will be added in this case. It should return a react component.",
  },
  headerFormatter: {
    type: PropTypes.Function,
    value: "",
    description: "Used to format the column's header. It should return a string or react component.",
  },
}

export const cellRendererArgs = {
  cellData: {
    type: PropTypes.String,
    value: "",
    description: "Text in the current cell, as passed in in the rows object",
  },
  column: {
    type: PropTypes.Object,
    value: "",
    description: "The column object the cell belongs to",
  },
  row: {
    type: PropTypes.Object,
    value: "",
    description: "The row object the cell belongs to",
  }
};

export const headerFormatterArgs = {
  column: {
    type: PropTypes.Object,
    value: "",
    description: "The column object the cell belongs to",
  },
};