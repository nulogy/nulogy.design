import { Button } from "@nulogy/components";
import { PropTypes } from 'react-view';

export const config = {
  componentName: "Button",
  scope: {
    Button
  },
  props: {
    children: {
      value: "Hello",
      type: PropTypes.ReactNode,
      description: "Content for button"
    },
    disabled: {
      value: false,
      default: false,
      type: PropTypes.Boolean,
      description: "Marks the button as disabled and unable to be interacted with."
    },
    size: {
      value: "medium",
      default: "medium",
      options: ["small", "medium", "large"],
      type: PropTypes.Enum,
      description: "Whether the Button should be small, medium or large."
    },  
    fullWidth: {
      value: false,
      default: false,
      type: PropTypes.Boolean,
      description: "Whether the Button should take the full width of it's container or not."
    },
    asLink: {
      value: false,
      default: false,
      type: PropTypes.Boolean,
      description: "If true, the button will use an <a/> tag"
    },       
    icon: {
      value: "",
      default: "",
      type: PropTypes.String,
      description: "The icon to display. Accepts icon names from the Icon component."
    },
    iconSide: {
      value: "",
      default: "",
      type: PropTypes.Enum,
      options: ["left", "right"],
      description: "Whether to display the icon to the left or the right of the text."
    }                  
  }
}