import { TruncatedText } from "@nulogy/components";
import { PropTypes } from 'react-view';

export const config = {
  componentName: "TruncatedText",
  scope: {
    TruncatedText
  },
  props: {
    children: {
      value: "Special instructions are provided for the shipment",
      type: PropTypes.ReactNode,
      description: "The content to be truncated."
    },   
    indicator: {
      value: "...",
      default: "...",
      type: PropTypes.String, 
      description: "The text to display after content that iis truncated"
    },
    maxCharacters: {
      value: 20,
      default: 20,
      type: PropTypes.Number, 
      description: ""
    },
    fullWidth: {
      value: false,
      default: false,
      type: PropTypes.Boolean,
      description: "When set to true, the component will truncate based on available space instead of a maximum number of characters."
    },
    showTooltip: {
      value: true,
      default: true, 
      type: PropTypes.Boolean,
      description: "Whether to show a tooltip with full content or not."
    },
    element: {
      value: "",
      default: "<Text />",
      type: PropTypes.ReactNode,
      description: "The element to use to wrap the truncated text. Props can be passed to this element as usual.      "
    },    
    tooltipProps: {
      value: "",
      default: "",
      type: PropTypes.Object,
      description: "Additional options for to be passed to the tooltip"
    },          
  }
}