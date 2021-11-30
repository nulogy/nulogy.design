import { Branding } from "@nulogy/components";
import { PropTypes } from "react-view";

export const config = {
  componentName: "Branding",
  scope: {
    Branding,
  },
  props: {
    size: {
      value: "medium",
      defaultValue: "medium",
      type: PropTypes.Enum,
      options: ["small", "medium", "large"],
      description: "The size of the logo. Either small, medium, or large.",
    },
    logoColor: {
      value: "blue",
      defaultValue: "blue",
      type: PropTypes.Enum,
      options: ["blue", "white"],
      description: "Whether to display the logo in blue or white",
    },
    logoType: {
      value: "wordmark",
      defaultValue: "wordmark",
      type: PropTypes.Enum,
      options: ["wordmark", "lettermark"],
      description:
        "Whether to display the wordmark or lettermark version of our logos",
    },
    alignment: {
      value: "left",
      defaultValue: "left",
      type: PropTypes.Enum,
      options: ["left", "right", "center"],
      description:
        "Whether to align the logo to the left, the right, or in the center",
    },
    subtext: {
      value: "",
      defaultValue: "",
      type: PropTypes.String,
      description:
        "Subtext that is placed under the logo to specify the specific software product a user is interacting with.",
    },
    withLine: {
      value: false,
      defaultValue: false,
      type: PropTypes.Boolean,
      description:
        "Whether to display a horizontal line next to the subtext or not",
    },
  },
};
