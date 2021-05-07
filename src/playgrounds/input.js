import { Input } from "@nulogy/components";
import { PropTypes } from 'react-view';

export const inputConfig = {
  componentName: "Input",
  scope: {
    Input
  },
  props: {
    value: {
      value: "123.99",
      type: PropTypes.String,
      description: "Value of input, used when controlling the component"
    },
    labelText: {
      value: "Label",
      type: PropTypes.ReactNode,
      description: "Informs users what the corresponding input field is for."
    },
    disabled: {
      value: false,
      defaultValue: false,
      type: PropTypes.Boolean,
      description: "Marks the field as disabled and disallows user input",
    },
    required: {
      value: false,
      defaultValue: false,
      type: PropTypes.Boolean,
      description: "Makes the field require selection before the form will submit."
    },
    helpText: {
      value: "Some help text",
      type: PropTypes.String,
      description: "Placed below the label to provide assistance on how to fill out a field or the expected format. It can also provide an explanation of why the information is needed and how it will be used."
    },
    placeholder: {
      value: undefined,
      type: PropTypes.String,
      description: "A hint to the expected format for the field. Not a replacement for a label."
    },
    defaultValue: {
      value: undefined,
      type: PropTypes.String,
      description: "Default value of input"
    },
    requirementText: {
      value: "(Required)",
      type: PropTypes.String,
      description: "(Optional) or (Required).",
    },
    onChange: {
      value: "(e) => console.log('changed!', e)",
      type: PropTypes.Function,
      description: "Change event handler that will be run whenever the value of the input is updated."
    },
    onBlur: {
      value: "(e) => console.log('blurred!', e)",
      type: PropTypes.Function,
      description: "Change event handler that will be run whenever the input loses focus."
    },
    errorMessage: {
      value: undefined,
      type: PropTypes.String,
      description: "Displays an error message and applies red style",
    },
    errorList: {
      value: undefined,
      type: PropTypes.Array,
      description: "Displays list of error messages and applies red style"
    },
    inputWidth: {
      value: undefined,
      defaultValue: "184px",
      type: PropTypes.String,
      description: "css width of the input field"
    },
    prefix: {
      value: undefined,
      type: PropTypes.String,
      description: "Displays input field prefix label",
    },
    prefixWidth: {
      value: undefined,
      type: PropTypes.String,
      description: "Controls the width of prefix label",
    },
    prefixAlignment: {
      value: undefined,
      defaultValue: "left",
      type: PropTypes.Enum,
      options: ["left", "center", "right"],
      description: "Aligns prefix label text. Accepts left, center, and right value.",
    },
    suffix: {
      value: undefined,
      type: PropTypes.String,
      description: "Displays input field suffix label",
    },
    suffixWidth: {
      value: undefined,
      type: PropTypes.String,
      description: "Controls the width of suffix label",
    },
    suffixAlignment: {
      value: undefined,
      defaultValue: "left",
      type: PropTypes.Enum,
      options: ["left", "center", "right"],
      description: "Aligns suffix label text. Accepts left, center, and right value.",
    },
    id: {
      value: undefined,
      type: PropTypes.String,
      description: "A unique ID for this input"
    },
    className: {
      value: undefined,
      type: PropTypes.String,
      description: "className passed to the wrapper element."
    },
  }
}