import { Tooltip, Button } from "@nulogy/components";
import { PropTypes } from 'react-view';

export const config = {
  componentName: "Tooltip",
  scope: {
    Tooltip,
    Button
  },
  props: {
    children: {
      value: `<Button>Hover me</Button>`,
      type: PropTypes.ReactNode,
      description: "Trigger, must be a single child able to accept a ref."
    },
    tooltip: {
      type: PropTypes.ReactNode,
      value: "Tooltip!",
      description: "The content to display inside of the tooltip.",
    },
    maxWidth: {
      type: PropTypes.String,
      value: "24em",
      default: "24em",
      description: "Width of the tooltip.",
    },
    placement: {
      type: PropTypes.Enum,
      value: "bottom",
      options: ["top", "top-start", "top-end", "bottom", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end"],
      default: "bottom",
      description: "The position of the tooltip relative to its trigger.",
    },
    showDelay: {
      type: PropTypes.Number,
      value: "100",
      default: "100",
      description: "Time in seconds before the tooltip appears.",
    },
    hideDelay: {
      type: PropTypes.Number,
      value: "350",
      default: "350",
      description: "Time in seconds before the tooltip disappears.",
    },
    defaultOpen: {
      type: PropTypes.Boolean,
      value: false,
      description: "when set to true the tooltip will be open by default",
    },
    className: {
      type: PropTypes.String,
      value: "",
      description: "className passed to the tooltip container element.",
    },
  }
}