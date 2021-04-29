import { Toast } from "@nulogy/components";
import { PropTypes } from 'react-view';

export const config = {
  componentName: "Toast",
  scope: {
    Toast
  },
  props: {
    children: {
      value: "A toast!",
      type: PropTypes.ReactNode,
      description: "Inner content."
    },
    triggered: {
      type: PropTypes.Boolean,
      value: false,
      default: "false",
      description: "Whether to display to the tooltip or not",
    },
    onShow: {
      type: PropTypes.Function,
      value: "(e) => console.log('onShow', e)",
      description: "callback that is called when the tooltip is shown",
    },
    onHide: {
      type: PropTypes.Function,
      value: "(e) => console.log('onHide', e)",
      description: "callback that is called when the tooltip is dismissed or begins to fade out",
    },
    onHidden: {
      type: PropTypes.Function,
      value: "(e) => console.log('onHidden', e)",
      description: "callback that is called when the tooltip has been completely hidden after the fade out animation is complete",
    },
    showDuration: {
      type: PropTypes.Number,
      value: "",
      description: "length of time in ms to display the Toast before hiding it",
    },
    isCloseable: {
      type: PropTypes.Boolean,
      value: false,
      description: "displays a close button in the Toast when true, and the Toast must then by manually dismissed by clicking the close button",
    },
  }
}