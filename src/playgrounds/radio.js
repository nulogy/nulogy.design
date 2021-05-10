import { Radio } from "@nulogy/components";
import { PropTypes } from 'react-view';

export const config = {
  componentName: "Radio",
  scope: {
    Radio
  },
  props: {
    checked: {
      type: PropTypes.Boolean,
      value: false,
      description: "Whether or not this radio button is the currently selected item in the group",
    },
    name: {
      type: PropTypes.String,
      value: false,
      description: "Identified that groups inputs together",
    },
    defaultChecked: {
      type: PropTypes.Boolean,
      value: false,
      defaultValue: false,
      description: "Makes the field checked by default",
    },
    disabled: {
      type: PropTypes.Boolean,
      value: false,
      defaultValue: false,
      description: "Marks the field as disabled and disallows user input",
    },
    error: {
      type: PropTypes.Boolean,
      value: false,
      defaultValue: false,
      description: "Marks the field as invalid and turns red",
    },
    labelText: {
      type: PropTypes.String,
      value: "option A",
      defaultValue: "Required",
      description: "Label for the input",
    },
    onChange: {
      type: PropTypes.Function,
      value: "(e) => console.log('onChange', e)",
      description: "onChange handler",
    },
    required: {
      type: PropTypes.Boolean,
      value: false,
      defaultValue: false,
      description: "Makes the field require input before the form will submit",
    },
    id: {
      type: PropTypes.String,
      value: "",
      defaultValue: "",
      description: "A unique ID for this input",
    },
    className: {
      type: PropTypes.String,
      value: "",
      description: "className passed to the wrapper",
    },
  }
}