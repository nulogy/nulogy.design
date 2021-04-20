import { Alert } from "@nulogy/components";
import {PropTypes} from 'react-view';

export const alertConfig = {
  componentName: "Alert",
  scope: {
    Alert
  },
  props: {
    type: {
      value: "informative",
      default: "informative",
      type: PropTypes.Enum,
      description: "The type of alert. Accepts informative, danger, warning and success."
    },
    children: {
      value: "Hello",
      type: PropTypes.ReactNode,
      description: "Visible message."
    },
    title: {
      value: "Title",
      type: PropTypes.String,
      description: "An optional title to display in bold above the main text."
    },
    onClose: {
      value: '() => alert("close")',
      type: PropTypes.Function,
      description: "Callback function invoked when the Alert is closed."
    },
    isCloseable: {
      value: false,
      defaultValue: false,
      type: PropTypes.Boolean,
      description: "Provides a close icon in the top right corner."
    },
    closeAriaLabel: {
      value: "close",
      defaultValue: "close",
      type: PropTypes.String,
      description: "Aria label for close button"
    },
    controlled: {
      value: "false",
      defaultValue: "false",
      type: PropTypes.Boolean,
      description: "If true, will allow the Alert's opened and closed state to be controlled through props rather than within the component's internal state"
    }
  }
}