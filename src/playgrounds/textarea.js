import { Textarea } from "@nulogy/components";
import { PropTypes } from 'react-view';

export const config = {
  componentName: "Textarea",
  scope: {
    Textarea
  },
  props: {
    labelText: {
      type: PropTypes.ReactNode,
      value: "Notes",
      description: "Informs users what the corresponding input field is for.",
    },
    helpText: {
      type: PropTypes.String,
      value: "Please add any additional notes here.",
      description: "Placed below the label to provide assistance on how to fill out a field or the expected format. It can also provide an explanation of why the information is needed and how it will be used.",
    },
    placeholder: {
      type: PropTypes.String,
      value: "Some placeholder text...",
      defaultValue: "null",
      description: "A hint to the expected format for the field. Not a replacement for a label.",
    },
    errorMessage: {
      value: undefined,
      type: PropTypes.String,
      description: "Displays an error message and applies red style",
    },
    required: {
      type: PropTypes.Boolean,
      value: false,
      description: "Makes the field require selection before the form will submit.",
    },
    requirementText: {
      type: PropTypes.String,
      value: "(Optional)",
      description: "(Optional) or (Required).",
    },
    disabled: {
      type: PropTypes.Boolean,
      value: false,
      defaultValue: "false",
      description: "Marks the field as disabled and disallows user input",
    },
    onChange: {
      type: PropTypes.Function,
      value: "(e) => console.log('onChange', e)",
      description: "Change event handler that will be run whenever the value of the input is updated.",
    },
    onBlur: {
      type: PropTypes.Function,
      value: "(e) => console.log('onBlur', e)",
      description: "Change event handler that will be run whenever the input loses focus.",
    },
    rows: {
      type: PropTypes.Number,
      value: "3",
      defaultValue: "3",
      description: "A custom number of rows to show by default.",
    },
    value: {
      type: PropTypes.String,
      value: "",
      description: "Value of input, used when controlling the component",
    },
    defaultValue: {
      type: PropTypes.String,
      value: "",
      description: "Default value of input",
    },
    id: {
      type: PropTypes.String,
      value: "",
      description: "A unique ID for this input",
    },
    className: {
      type: PropTypes.String,
      value: "",
      description: "className passed to the wrapper element.",
    },
    name: {
      type: PropTypes.String,
      value: "",
      description: "A unique name for this input",
    }
  }
}