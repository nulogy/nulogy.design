import { IconicButton } from "@nulogy/components";
import { PropTypes } from "react-view";
import iconList from "../utils/iconList";

export const config = {
  componentName: "IconicButton",
  scope: {
    IconicButton,
  },
  props: {
    children: {
      type: PropTypes.ReactNode,
      value: "Label",
      description: "The label for the icon.",
    },
    icon: {
      type: PropTypes.Enum,
      options: iconList,
      value: "delete",
      description:
        "The icon to display. See the Icons component for all possible options.",
    },
    iconSize: {
      type: PropTypes.String,
      description: "The size of the icon.",
    },
    fontSize: {
      type: PropTypes.String,
      value: "medium",
      description: "The size of the text.",
    },
    tooltip: {
      type: PropTypes.String,
      value: "A tooltip label",
      description: "displays a tooltip with the passed in string.",
    },
    disabled: {
      type: PropTypes.Boolean,
      value: "",
      defaultValue: false,
      description:
        "Lightens the opacity and makes the button unable to be clicked.",
    },
    className: {
      type: PropTypes.String,
      value: "",
      description: "className passed to the button component.",
    },
  },
};
