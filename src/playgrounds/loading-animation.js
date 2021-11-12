import { LoadingAnimation } from "@nulogy/components";
import { PropTypes } from "react-view";

export const config = {
  componentName: "LoadingAnimation",
  scope: {
    LoadingAnimation,
  },
  props: {
    inactive: {
      value: false,
      type: PropTypes.Boolean,
      description: "Toggles between active and inactive styles",
    },
  },
};
