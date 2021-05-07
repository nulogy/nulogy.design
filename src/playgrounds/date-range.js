import { DateRange } from "@nulogy/components";
import { PropTypes } from 'react-view';

export const dateRangeConfig = {
  componentName: "DateRange",
  scope: {
    DateRange
  },
  props: {
    onRangeChange: {
      type: PropTypes.Function,
      value: "(e) => console.log(e)",
      description: "The function that will be called whenever the dates in the month range change. Returns an object with the start date, end date and current error, if any.",
    },
    defaultStartDate: {
      type: PropTypes.String,
      value: "",
      description: "The default start date.",
    },
    defaultEndDate: {
      type: PropTypes.String,
      value: "",
      description: "The default end date.",
    },
    dateFormat: {
      type: PropTypes.String,
      value: "MMM yyyy",
      defaultValue: "MMM yyyy",
      description: "The default date format (see date-fns for available date formats)",
    },
    errorMessage: {
      type: PropTypes.String,
      value: "",
      description: "The error message to display for the range.",
    },
    startDateErrorMessage: {
      type: PropTypes.String,
      value: "",
      description: "The error message to display below the start date.",
    },
    endDateErrorMessage: {
      type: PropTypes.String,
      value: "",
      description: "The error message to display below the end date.",
    },
    minDate: {
      type: PropTypes.Date,
      value: "",
      description: "The earliest date that can be selected.",
    },
    maxDate: {
      type: PropTypes.Date,
      value: "",
      description: "The latest date that can be selected.",
    },
    labelProps: {
      type: PropTypes.Object,
      value: "",
      defaultValue: "{ labelText: 'Date Range'}",
      description: "Options for the month range label. See Label Props for available option keys.",
    },
    disableRangeValidation: {
      type: PropTypes.Boolean,
      value: false,
      defaultValue: "false",
      description: "Disables the end date before start date error message.",
    },
    showTimes: {
      type: PropTypes.Boolean,
      value: false,
      defaultValue: "false",
      description: "Shows time pickers next to the date inputs so that a times can be selected.",
    },
    minTime: {
      type: PropTypes.String,
      value: "",
      description: "The earliest time that can be selected.",
    },
    defaultStartTime: {
      type: PropTypes.String,
      value: "",
      description: "The default start date.",
    },
    defaultEndTime: {
      type: PropTypes.String,
      value: "",
      description: "The default end date.",
    },
    maxTime: {
      type: PropTypes.String,
      value: "",
      description: "The latest time that can be selected.",
    },
    timeFormat: {
      type: PropTypes.String,
      value: "hh:mm aa",
      defaultValue: "hh:mm aa",
      description: "The default date format (see date-fns for available date formats)",
    },
    interval: {
      type: PropTypes.Number,
      value: "15",
      defaultValue: "15",
      description: "The time difference in minutes between the time options",
    },
    disableFlipping: {
      type: PropTypes.Boolean,
      value: false,
      defaultValue: "false",
      description: "If true, always opens the calendar below the input rather than automatically flipping upward if there is not enough space below the input",
    },
    startDateInputProps: {
      type: PropTypes.Object,
      value: "",
      description: "Options for the start date input field, see inputProps table.",
    },
    endDateInputProps: {
      type: PropTypes.Object,
      value: "",
      description: "Options for the end date input field, see inputProps table.",
    },
  }
}