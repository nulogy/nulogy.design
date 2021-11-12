import { Checkbox } from "@nulogy/components";
import { PropTypes } from "react-view";

export const config = {
  componentName: "Checkbox",
  scope: {
    Checkbox,
  },
  props: {
    labelText: {
      type: PropTypes.String,
      value: "Label for the checkbox",
      description: "Label for the input",
    },
    onChange: {
      type: PropTypes.Function,
      value: "",
      defaultValue: "null",
      description: "",
    },
    required: {
      type: PropTypes.Boolean,
      value: false,
      defaultValue: "false",
      description: "Makes the field require input before the form will submit",
    },
    checked: {
      type: PropTypes.Boolean,
      value: false,
      defaultValue: "false",
      description: "Whether or not the checkbox has been checked",
    },
    indeterminate: {
      type: PropTypes.Boolean,
      value: false,
      defaultValue: "false",
      description:
        "Displays the checkbox in an indeterminate state if checked. You must use the checkbox as a controlled input (give the checked prop a value) when using this prop",
    },
    value: {
      type: PropTypes.String,
      value: "",
      description:
        "The value of the checkbox that is submitted with the form. Required when using `indeterminate` checkbox.",
    },
    disabled: {
      type: PropTypes.Boolean,
      value: false,
      defaultValue: "false",
      description: "Marks the field as disabled and disallows user input",
    },
    error: {
      type: PropTypes.Boolean,
      value: false,
      defaultValue: "false",
      description: "Marks the field as invalid and turns red",
    },
    id: {
      type: PropTypes.String,
      value: "",
      description: "A unique ID for this input",
    },
    name: {
      type: PropTypes.String,
      value: "",
      description: "Identified that groups inputs together",
    },
    defaultChecked: {
      type: PropTypes.Boolean,
      value: false,
      defaultValue: "false",
      description: "Makes the field checked by default",
    },
    className: {
      type: PropTypes.String,
      value: "",
      description: "className passed to the wrapper",
    },
  },
};
