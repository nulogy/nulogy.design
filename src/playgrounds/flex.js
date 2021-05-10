import { Flex, Box } from "@nulogy/components";
import { PropTypes } from 'react-view';
import { COLOURS, SIZES, SHADOWS, RADII } from "../utils/themeValues";

export const config = {
  componentName: "Flex",
  scope: {
    Flex,
    Box
  },
  props: {
    children: {
      value: `
  <Box width={1/2} p="x3" m="x3" bg="blackBlue"></Box>
  <Box width={1/2} p="x3" m="x3" bg="darkBlue"></Box>
  `,
      type: PropTypes.ReactNode,
      description: "Inner content"
    },
    width: {
      value: "100%",
      type: PropTypes.String,
      description: ""
    },
    bg: {
      value: "lightBlue",
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