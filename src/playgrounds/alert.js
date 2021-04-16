import { Alert } from "@nulogy/components";
import {PropTypes} from 'react-view';

export const alertConfig = {
  componentName: "Alert",
  scope: {
    Alert
  },
  props: {
    children: {
      value: "Hello",
      type: PropTypes.ReactNode,
      description: "Visible message."
    },
    title: {
      value: "Title",
      type: PropTypes.String,
      description: "Visible message."
    },
    onClose: {
      value: '() => alert("close")',
      type: PropTypes.Function,
      description: "Function called when the alert is closed."
    },
    isCloseable: {
      value: false,
      type: PropTypes.Boolean,
      description: "Whether an alert can be closed"
    }
  }
}