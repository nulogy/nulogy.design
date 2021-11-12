import { Button } from "@nulogy/components";
import { PropTypes } from "react-view";
import iconList from "../utils/iconList";

export const config = {
  componentName: "Button",
  scope: {
    Button,
  },
  props: {
    children: {
      value: "Hello",
      type: PropTypes.ReactNode,
      description: "Content for button",
    },
    disabled: {
      value: false,
      defaultValue: false,
      type: PropTypes.Boolean,
      description:
        "Marks the button as disabled and unable to be interacted with.",
    },
    size: {
      value: "medium",
      defaultValue: "medium",
      options: ["small", "medium", "large"],
      type: PropTypes.Enum,
      description: "Whether the Button should be small, medium or large.",
    },
    fullWidth: {
      value: false,
      defaultValue: false,
      type: PropTypes.Boolean,
      description:
        "Whether the Button should take the full width of it's container or not.",
    },
    asLink: {
      value: false,
      defaultValue: false,
      type: PropTypes.Boolean,
      description: "If true, the button will use an <a/> tag",
    },
    icon: {
      value: "",
      defaultValue: "",
      type: PropTypes.Enum,
      options: iconList,
      description:
        "The icon to display. Accepts icon names from the Icon component.",
    },
    iconSide: {
      value: "",
      defaultValue: "",
      type: PropTypes.Enum,
      options: ["left", "right"],
      description:
        "Whether to display the icon to the left or the right of the text.",
    },
  },
};
