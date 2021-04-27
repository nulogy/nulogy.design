import { Box } from "@nulogy/components";
import { PropTypes } from 'react-view';
import {COLOURS, SIZES, SHADOWS, RADII} from "../utils/themeValues";

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