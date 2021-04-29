import { Select } from "@nulogy/components";
import { PropTypes } from 'react-view';

export const config = {
  componentName: "Select",
  scope: {
    Select
  },
  props: {
    options: {
      type: PropTypes.Array,
      value: `[
        { value: "accepted", label: "Accepted" },
        { value: "assigned", label: "Assigned to a line" },
      ]`,
      default: "Required",
      description: "The options available to be selected, containing a value and a label",
    },
    autocomplete: {
      type: PropTypes.Boolean,
      value: "",
      default: "true",
      description: "Whether or not typing will filter the options list",
    },
    maxHeight: {
      type: PropTypes.String,
      value: "",
      default: "256px",
      description: "Max height of the select dropdown menu, content is scrollable",
    },
    multiselect: {
      type: PropTypes.Boolean,
      value: false,
      description: "Whether or not multiple selections can be made",
    },
    value: {
      type: PropTypes.String,
      value: "",
      description: "Value of input, used when controlling the component, an array when using the multiselect",
    },
    defaultValue: {
      type: PropTypes.String,
      value: "",
      description: "Default value of input, an array if multiselect",
    },
    menuIsOpen: {
      type: PropTypes.Boolean,
      value: false,
      description: "Controls whether the menu is open; If unset, then NDS controls this implicitly instead",
    },
    onMenuOpen: {
      type: PropTypes.Function,
      value: "(e) => console.log('onMenuOpen', e)",
      description: "Event handler for when the menu is opened",
    },
    onMenuClose: {
      type: PropTypes.Function,
      value: "(e) => console.log('onMenuClose', e)",
      description: "Event handler for when the menu is closed",
    },
    onInputChange: {
      type: PropTypes.Function,
      value: "(e) => console.log('onInputChange', e)",
      description: "Event handler for when the value typed into the input changes",
    },
    noOptionsMessage: {
      type: PropTypes.Function,
      value: "({ inputValue}) => `No options were found for: ${inputValue}`",
      default: "No options",
      description: "A function that returns the string you you like to show up when no options are available",
    },
    menuPosition: {
      type: PropTypes.String,
      value: "absolute",
      default: "absolute",
      description: "The CSS position value of the menu. ex: 'fixed'",
    },
    components: {
      type: PropTypes.Object,
      value: "",
      description: "Pass in an object with the keys of the component you would like to replace",
    },
    closeMenuOnSelect: {
      type: PropTypes.Boolean,
      value: true,
      default: "true",
      description: "Close the select menu when the user selects an option",
    }
  }
}