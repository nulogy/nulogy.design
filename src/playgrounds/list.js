import { List, ListItem } from "@nulogy/components";
import { PropTypes } from "react-view";
import { COLOURS, SIZES } from "../utils/themeValues";

export const config = {
  componentName: "List",
  scope: {
    List,
    ListItem,
  },
  props: {
    children: {
      value: `<ListItem>One</ListItem>
<ListItem>Two</ListItem>`,
      type: PropTypes.ReactNode,
      description: "The content of the list",
    },
    compact: {
      value: false,
      defaultValue: false,
      type: PropTypes.Boolean,
      description: "Will remove margins between list items if set to true",
    },
    leftAlign: {
      value: false,
      defaultValue: false,
      type: PropTypes.Boolean,
      description: "Will align list flush with left-side if set to true",
    },
    bg: {
      value: "",
      defaultValue: "",
      options: COLOURS,
      type: PropTypes.Enum,
      description: "The background colour of the surrounding box",
    },
    color: {
      value: "",
      defaultValue: "",
      options: COLOURS,
      type: PropTypes.Enum,
      description: "The text colour inside the list.",
    },
    padding: {
      value: "",
      defaultValue: "",
      options: SIZES,
      type: PropTypes.Enum,
    },
  },
};
