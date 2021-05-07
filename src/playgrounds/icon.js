import { Icon } from "@nulogy/components";
import { PropTypes } from 'react-view';
import iconList from "../utils/iconList";
import { COLOURS, SIZES } from "../utils/themeValues";

export const config = {
  componentName: "Icon",
  scope: {
    Icon
  },
  props: {
    color: {
      type: PropTypes.Enum,
      options: COLOURS,
      value: "currentColor",
      defaultValue: "currentColor",
      description: "The icon's colour, if different than parent's text colour.",
    },
    icon: {
      type: PropTypes.Enum,
      options: iconList,
      value: "chatBubble",
      description: "The icon to display. Accepts icons listed in Available Icons above.",
    },
    size: {
      type: PropTypes.Enum,
      value: "x3",
      options: SIZES,
      defaultValue: "x3",
      description: "The size of the icon using space tokens or px",
    },
    title: {
      type: PropTypes.String,
      value: "chat",
      description: "Alternative text to be read by assistive devices. Leave blank if icon is purely decorative.",
    },
    className: {
      type: PropTypes.String,
      value: "",
      description: "className passed to the svg element.",
    },
  }
}