import { Divider } from "@nulogy/components";
import { PropTypes } from 'react-view';
import { COLOURS } from "../utils/themeValues";

export const config = {
  componentName: "Divider",
  scope: {
    Divider
  },
  props: {
    borderColor: {
      type: PropTypes.Enum,
      options: [undefined, ...COLOURS],
      value: undefined,
    }
  }
}