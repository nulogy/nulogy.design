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
      defaultValue: "...",
      type: PropTypes.String,
      description: "The text to display after content that iis truncated"
    },
    maxCharacters: {
      value: 20,
      defaultValue: 20,
      type: PropTypes.Number,
      description: ""
    },
    fullWidth: {
      value: false,
      defaultValue: false,
      type: PropTypes.Boolean,
      description: "When set to true, the component will truncate based on available space instead of a maximum number of characters."
    },
    showTooltip: {
      value: true,
      defaultValue: true,
      type: PropTypes.Boolean,
      description: "Whether to show a tooltip with full content or not."
    },
    element: {
      value: "",
      defaultValue: "<Text />",
      type: PropTypes.ReactNode,
      description: "The element to use to wrap the truncated text. Props can be passed to this element as usual.      "
    },
    tooltipProps: {
      value: "",
      defaultValue: "",
      type: PropTypes.Object,
      description: "Additional options for to be passed to the tooltip"
    },
  }
}