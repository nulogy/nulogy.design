import { TimePicker } from "@nulogy/components";
import { PropTypes } from "react-view";

export const config = {
  componentName: "TimePicker",
  scope: {
    TimePicker,
  },
  props: {
    labelText: {
      type: PropTypes.String,
      value: "End Time",
      description: "The label",
    },
    timeFormat: {
      type: PropTypes.String,
      value: "hh:mm aa",
      defaultValue: "hh:mm aa",
      description:
        "The default time format (see date-fns for available time formats)",
    },
    interval: {
      type: PropTypes.Number,
      value: 15,
      defaultValue: "15",
      description: "The time difference in minutes between the time options",
    },
    minTime: {
      type: PropTypes.String,
      value: "09:00",
      description:
        "The latest time that can be selected in 24 hour time string format e.g: 02: 30",
    },
    maxTime: {
      type: PropTypes.String,
      value: "17:00",
      description:
        "The latest time that can be selected in 24 hour time string e.g: 02: 30",
    },
    value: {
      type: PropTypes.String,
      value: "",
      description:
        "Value of input, used when controlling the component in 24 hour time string e.g: 02: 30",
    },
    defaultValue: {
      type: PropTypes.String,
      value: "",
      description: "Default value of input",
    },
    onInputChange: {
      type: PropTypes.Function,
      value: "(e) => console.log('onInputChange', e)",
      description:
        "Event handler for when the value typed into the input changes",
    },
    onChange: {
      type: PropTypes.Function,
      value: "(e) => console.log('onChange', e)",
      description: "Event handler for when the selected value changes",
    },
  },
};
