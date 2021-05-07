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
        description: "A width, in any unit."
    },
    bg: {
      value: "white",
      type: PropTypes.Enum,
      options: COLOURS,
      description: "A background colour, chosen from the theme. A unique value can also be provided."
    },    
    color: {
      value: "black",
      type: PropTypes.Enum,
      options: COLOURS,
      description: "A text colour, chosen from the theme. A unique value can also be provided."
    },        
    padding: {
      value: "",
      type: PropTypes.Enum,
      options: SIZES,
      description: "A padding, chosen from the theme. A unique value can also be provided."
    },
    boxShadow: {
      value: "",
      type: PropTypes.Enum,
      options: SHADOWS,
      description: "A box shadow size, chosen from the theme. A unique value can also be provided."
    },
    borderRadius: {
      value: "",
      type: PropTypes.Enum,
      options: RADII,
      description: "A border radius, chosen from the theme. A uniique value can also be provided."
    },
  }
}