import { Box } from "@nulogy/components";
import { PropTypes } from 'react-view';

const COLOURS = ["black", "blackBlue", "darkBlue", "blue", "lightBlue", "darkGrey", "grey", "whiteGrey", "white", "yellow", "green", "lightGreen", "red", "lightRed"]
const SIZES = ["x1", "x2", "x3", "x4", "x6", "x8"]
const SHADOWS = ["small", "medium", "large", "focus", "error"]
const RADII = ["small", "medium", "circle"]

export const config = {
  componentName: "Box",
  scope: {
    Box
  },
  props: {
    children: {
      value: "Box content",
      type: PropTypes.ReactNode,
      description: "The elements to build the breadcrumbs out of. Can be a Link or Text."
    },
    width: {
        value: "100%",
        type: PropTypes.String,
        description: ""
    },
    bg: {
      value: "white",
      type: PropTypes.Enum,
      options: COLOURS,
      description: ""
    },    
    color: {
      value: "black",
      type: PropTypes.Enum,
      options: COLOURS,
      description: ""
    },        
    padding: {
      value: "",
      type: PropTypes.Enum,
      options: SIZES,
      description: ""
    },
    boxShadow: {
      value: "",
      type: PropTypes.Enum,
      options: SHADOWS,
      description: ""
    },
    borderRadius: {
      value: "",
      type: PropTypes.Enum,
      options: RADII,
      description: ""
    },
  }
}