import { StatusIndicator } from "@nulogy/components";
import { PropTypes } from "react-view";

export const config = {
  componentName: "StatusIndicator",
  scope: {
    StatusIndicator,
  },
  props: {
    children: {
      value: "new!",
      type: PropTypes.ReactNode,
      description: "Inner content.",
    },
    type: {
      value: "neutral",
      type: PropTypes.Enum,
      options: [
        "neutral",
        "dark",
        "informative",
        "danger",
        "warning",
        "success",
        "quiet",
      ],
      defaultValue: "neutral",
      description:
        "The type of Status Indicator determines its style. Accepts neutral, dark, informative, danger, warning, success, and quiet.",
    },
  },
};
