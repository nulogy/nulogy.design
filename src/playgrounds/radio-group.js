import { RadioGroup, Radio } from "@nulogy/components";
import { PropTypes } from 'react-view';

export const config = {
  componentName: "RadioGroup",
  scope: {
    RadioGroup,
    Radio
  },
  props: {
    checkedValue: {
      value: "a",
      type: PropTypes.String,
      description: "The selected value within the group",
    },
    children: {
      value: `
      <Radio value="a" labelText="Option A" />
      <Radio value="b" labelText="Option B" />
      <Radio value="c" labelText="Option C" />`,
      type: PropTypes.ReactNode,
      description: "Inner content."
    },
    name: {
      type: PropTypes.String,
      value: "settingSelection",
      description: "A unique name for this input that groups inputs together",
    },
    defaultValue: {
      type: PropTypes.String,
      value: "",
      description: "A value to autoselect on pageload",
    },
    errorMessage: {
      type: PropTypes.String,
      value: "",
      description: "Displays list of error messages and applies red style",
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
      defaultValue: false,
      description: "Makes the field require selection before the form will submit.",
    },
    disabled: {
      type: PropTypes.Boolean,
      value: "",
      defaultValue: false,
      description: "Marks the entire group as disabled and unable to be toggled.",
    },
    requirementText: {
      type: PropTypes.String,
      value: "",
      description: "(Optional) or (Required).",
    },
    className: {
      type: PropTypes.String,
      value: "",
      description: "className passed to the group wrapper.",
    },
  }
}