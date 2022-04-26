import { Switcher, Switch } from "@nulogy/components";
import { PropTypes } from "react-view";

export const config = {
  componentName: "Switcher",
  scope: {
    Switcher,
    Switch,
  },
  props: {
    selected: {
      value: "all",
      type: PropTypes.String,
      description: "The value of the selected option in the switcher",
    },
    onChange: {
      type: PropTypes.Function,
      value: "(e) => console.log('onChange', e)",
      description: "Event handler for when the selected value changes",
    },
    "aria-label": {
      type: PropTypes.String,
      value: "mode-switcher",
      description:
        "Provide a text alternative to an element that has no visible text on the screen",
    },
    children: {
      value: `
      <Switch value="all">All</Switch>
      <Switch value="option_1">Option 1</Switch>
      <Switch value="option_2">Option 2</Switch>`.trim(),
      type: PropTypes.ReactNode,
      description: "Different modes to switch between",
    },
  },
};
