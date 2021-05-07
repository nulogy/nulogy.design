import { Link } from "@nulogy/components";
import { PropTypes } from 'react-view';
import { COLOURS, SIZES, SHADOWS, RADII } from "../utils/themeValues";

export const config = {
  componentName: "Link",
  scope: {
    Link
  },
  props: {
    children: {
      value: "http://nulogy.design",
      type: PropTypes.ReactNode,
      description: "Content of the link"
    },
    href: {
      value: "http://nulogy.design",
      defaultValue: "",
      type: PropTypes.String,
      description: "The URL the link should lead to"
    },
    color: {
      value: "blue",
      defaultValue: "blue",
      type: PropTypes.Enum,
      options: COLOURS,
      description: "A custom colour to display the link in"
    },
    underline: {
      value: true,
      defaultValue: true,
      type: PropTypes.Boolean,
      description: "Whether to show an underline or not"
    }
  }
}