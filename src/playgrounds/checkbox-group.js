import { CheckboxGroup, Checkbox } from "@nulogy/components";
import { PropTypes } from 'react-view';

export const config = {
  componentName: "CheckboxGroup",
  scope: {
    CheckboxGroup,
    Checkbox
  },
  props: {
    children: {
      type: PropTypes.ReactNode,
      value: `<Checkbox value="a" labelText="Option A" />
<Checkbox value="b" labelText="Option B" />
<Checkbox value="c" labelText="Option C" />`,
      description: "inner checkboxes",
    },
    defaultValue: {
      type: PropTypes.String,
      value: "a",
      description: "A value to autoselect on pageload",
    },
    errorMessage: {
      type: PropTypes.String,
      value: "",
      description: "Displays an error message and applies red style",
    },
    errorList: {
      type: PropTypes.Array,
      value: "",
      description: "Displays list of error messages and applies red style",
    },
    helpText: {
      type: PropTypes.String,
      value: "Select a setting from the menu below:",
      description: "Placed below the label to provide assistance on how to fill out a field or the expected format. It can also provide an explanation of why the information is needed and how it will be used.",
    },
    labelText: {
      type: PropTypes.String,
      value: "Setting Selection",
      description: "Informs users what the corresponding input field is for.",
    },
    required: {
      type: PropTypes.Boolean,
      value: "",
      default: "false",
      description: "Makes the field require selection before the form will submit.",
    },
    disabled: {
      type: PropTypes.Boolean,
      value: "",
      default: "false",
      description: "Marks the entire group as disabled and unable to be toggled.",
    },
    requirementText: {
      type: PropTypes.String,
      value: "",
      default: "null",
      description: "(Optional) or (Required).",
    },
    name: {
      type: PropTypes.String,
      value: "settingSelection",
      description: "A unique name for this input that groups inputs together",
    },
    className: {
      type: PropTypes.String,
      value: "",
      description: "className passed to the group wrapper.",
    },
  }
}