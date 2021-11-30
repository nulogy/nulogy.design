import { DatePicker } from "@nulogy/components";
import { PropTypes } from "react-view";

export const config = {
  componentName: "DatePicker",
  scope: {
    DatePicker,
  },
  props: {
    onChange: {
      type: PropTypes.Function,
      value: "(e) => console.log(e)",
      description:
        "Change event handler that will be run whenever the value of the input is updated.",
    },
    onInputChange: {
      type: PropTypes.Function,
      value: "(e) => console.log(e)",
      description:
        "Event handler for when the value typed into the input changes",
    },
    selected: {
      type: PropTypes.Date,
      value: new Date("Fri, 01 Jan 2019"),
      description: "The time to display",
    },
    dateFormat: {
      type: PropTypes.String,
      value: "dd MMM yyyy",
      defaultValue: "dd MMM yyyy",
      description:
        "The default date format (see date-fns for available date formats)",
    },
    errorMessage: {
      type: PropTypes.String,
      value: "",
      description: "The error message to display",
    },
    minDate: {
      type: PropTypes.Date,
      value: "",
      description: "The earliest date that can be selected",
    },
    maxDate: {
      type: PropTypes.Date,
      value: "",
      description: "The latest date that can be selected",
    },
    onBlur: {
      type: PropTypes.Function,
      value: "",
      description:
        "Change event handler that will be run whenever the input loses focus.",
    },
    disableFlipping: {
      type: PropTypes.Boolean,
      value: false,
      defaultValue: "false",
      description:
        "If true, always opens the calendar below the input rather than automatically flipping upward if there is not enough space below the input",
    },
    inputProps: {
      type: PropTypes.Object,
      value: "{ labelText: 'End Date:' }",
      description:
        "Options for the input field, see Input component props table for the properties that can be used here",
    },
    className: {
      type: PropTypes.String,
      value: "",
      description: "className",
    },
    id: {
      type: PropTypes.String,
      value: "",
      defaultValue: "null",
      description: "A unique ID for this input",
    },
    name: {
      type: PropTypes.String,
      value: "",
      description: "A unique name for this input",
    },
  },
};
