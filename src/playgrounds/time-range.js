import { TimeRange } from "@nulogy/components";
import { PropTypes } from 'react-view';

export const config = {
  componentName: "TimeRange",
  scope: {
    TimeRange
  },
  props: {
    onRangeChange: {
      type: PropTypes.Function,
      value: "(e) => console.log('onRangeChange', e)",
      description: "The function that will be called whenever the dates in the month range change. Returns an object with the start date, end date and current error, if any.",
    },
    defaultStartTime: {
      type: PropTypes.String,
      value: "",
      description: "The default start time in 24 hour time string e.g: 02: 30.",
    },
    defaultEndTime: {
      type: PropTypes.String,
      value: "",
      description: "The default end time in 24 hour time string e.g: 02: 30.",
    },
    timeFormat: {
      type: PropTypes.String,
      value: "hh:mm aa",
      defaultValue: "hh:mm aa",
      description: "The default date format (see date-fns for available date formats)",
    },
    errorMessage: {
      type: PropTypes.String,
      value: "",
      description: "The error message to display for the range.",
    },
    startTimeErrorMessage: {
      type: PropTypes.String,
      value: "",
      description: "The error message to display below the start date.",
    },
    endTimeErrorMessage: {
      type: PropTypes.String,
      value: "",
      description: "The error message to display below the end date.",
    },
    minTime: {
      type: PropTypes.String,
      value: "05:00",
      description: "The earliest time that can be selected in 24 hour time string e.g: 02: 30.",
    },
    maxTime: {
      type: PropTypes.String,
      value: "23:30",
      description: "The latest time that can be selected in 24 hour time string e.g: 02: 30.",
    },
    labelProps: {
      type: PropTypes.Object,
      value: `
      { labelText: "Time Range",
        helpText: "Specify a start and end time for the shift."
      }`,
      defaultValue: "{ labelText: 'Time Range'}",
      description: "Options for the month range label.",
    },
    disableRangeValidation: {
      type: PropTypes.Boolean,
      value: false,
      defaultValue: "false",
      description: "Disables the the end date before start date error message.",
    },
    interval: {
      type: PropTypes.Number,
      value: 15,
      defaultValue: "15",
      description: "The time difference in minutes between the time options",
    },
  }
}