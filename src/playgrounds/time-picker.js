import { TimePicker } from "@nulogy/components";
import { PropTypes } from 'react-view';

export const config = {
  componentName: "TimePicker",
  scope: {
    TimePicker
  },
  props: {
    labelText: {
      type: PropTypes.ReactNode,
      value: "",
      default: "End Time",
      description: "The label",
    },
    timeFormat: {
      type: PropTypes.String,
      value: "",
      default: "hh:mm aa",
      description: "The default time format (see date-fns for available time formats)",
    },
    interval: {
      type: PropTypes.Number,
      value: "",
      default: "15",
      description: "The time difference in minutes between the time options",
    },
    minTime: {
      type: PropTypes.String,
      value: "",
      description: "The latest time that can be selected in 24 hour time string format e.g: 02: 30",
    },
    maxTime: {
      type: PropTypes.String,
      value: "",
      description: "The latest time that can be selected in 24 hour time string e.g: 02: 30",
    },
    value: {
      type: PropTypes.String,
      value: "",
      description: "Value of input, used when controlling the component in 24 hour time string e.g: 02: 30",
    },
    defaultValue: {
      type: PropTypes.String,
      value: "",
      description: "Default value of input",
    },
    onInputChange: {
      type: PropTypes.Function,
      value: "",
      description: "Event handler for when the value typed into the input changes",
    },
  }
}