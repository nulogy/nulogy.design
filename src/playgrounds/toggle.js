import { Toggle } from "@nulogy/components";
import { PropTypes } from 'react-view';

export const config = {
  componentName: "Toggle",
  scope: {
    Toggle
  },
  props: {
    defaultToggled: {
      type: PropTypes.Boolean,
      value: "",
      defaultValue: "false",
      description: "Display the toggle as checked by default.",
    },
    disabled: {
      type: PropTypes.Boolean,
      value: "",
      defaultValue: "false",
      description: "Marks the toggle as disabled and disallows user input.",
    },
    helpText: {
      type: PropTypes.String,
      value: "Switch this setting on or off for more control.",
      description: "Placed below the label to provide assistance on how to fill out a field or the expected format. It can also provide an explanation of why the information is needed and how it will be used.",
    },
    labelText: {
      type: PropTypes.String,
      value: "New mode:",
      description: "Informs users what the corresponding input field is for.",
    },
    offText: {
      type: PropTypes.String,
      value: "disabled",
      defaultValue: "false",
      description: "A label for the toggle's off state.",
    },
    onText: {
      type: PropTypes.String,
      value: "enabled",
      defaultValue: "false",
      description: "A label for the toggle's on state.",
    },
    toggled: {
      type: PropTypes.Boolean,
      value: false,
      description: "The value of the toggle when using as a controlled component.",
    },
    onChange: {
      type: PropTypes.Function,
      value: "() => onChange('onChange', e)",
      description: "Function that triggers when toggle is clicked, use with the toggled prop for a controlled component.",
    },
    required: {
      type: PropTypes.Boolean,
      value: false,
      defaultValue: "false",
      description: "Makes the field require input before the form will submit.",
    },
    requirementText: {
      type: PropTypes.String,
      value: "(Optional)",
      description: "(Optional) or (Required).",
    },
    id: {
      type: PropTypes.String,
      value: "",
      description: "A unique ID for this input.",
    },
    className: {
      type: PropTypes.String,
      value: "",
      description: "Class name.",
    }
  }
}