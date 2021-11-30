import { Text, theme } from "@nulogy/components";
import { PropTypes } from "react-view";

export const config = {
  componentName: "Text",
  scope: {
    Text,
  },
  props: {
    children: {
      value:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu molestie est, eget euismod risus. Fusce arcu sapien, mollis a pulvinar id, egestas sed dolor. Sed sit amet massa lorem.",
      type: PropTypes.ReactNode,
      description: "Content",
    },
    color: {
      type: PropTypes.Enum,
      value: "currentColor",
      options: Object.keys(theme.colors),
      defaultValue: "currentColor",
      description: "Text color",
    },
    textTransform: {
      type: PropTypes.Enum,
      value: "undefined",
      options: ["lowercase", "uppercase", "capitalize", "undefined"],
      description: "Css text transform to  be applied to the text",
    },
    fontSize: {
      type: PropTypes.Enum,
      value: "medium",
      defaultValue: "medium",
      options: Object.keys(theme.fontSizes),
      description: "Font size",
    },
    lineHeight: {
      type: PropTypes.Enum,
      value: "medium",
      defaultValue: "medium",
      options: Object.keys(theme.lineHeights),
      description: "Font size",
    },
    textAlign: {
      type: PropTypes.Enum,
      value: "left",
      options: ["left", "right", "center"],
      description: "Font size",
    },
    fontFamily: {
      type: PropTypes.Enum,
      value: "base",
      options: Object.keys(theme.fonts),
      description: "Font family",
    },
    disabled: {
      type: PropTypes.Boolean,
      value: "",
      defaultValue: "false",
      description: "Lightens text to imply that it's disabled.",
    },
    inline: {
      type: PropTypes.Boolean,
      value: "",
      defaultValue: "false",
      description: "Displays text inline instead of as a block.",
    },
    className: {
      type: PropTypes.String,
      value: "",
      description: "className passed to the text component.",
    },
  },
};
