import { IconicButton } from "@nulogy/components";
import { PropTypes } from 'react-view';

export const config = {
  componentName: "IconicButton",
  scope: {
    IconicButton
  },
  props: {
    children: {
      type: PropTypes.ReactNode,
      value: "Label",
      description: "The label for the icon.",
    },
    icon: {
      type: PropTypes.String,
      value: "delete",
      description: "The icon to display. See the Icons component for all possible options.",
    },
    tooltip: {
      type: PropTypes.String,
      value: "A tooltip label",
      description: "displays a tooltip with the passed in string.",
    },
    disabled: {
      type: PropTypes.Boolean,
      value: "",
      default: "false",
      description: "Lightens the opacity and makes the button unable to be clicked.",
    },
    className: {
      type: PropTypes.String,
      value: "",
      description: "className passed to the button component.",
    },
  }
}