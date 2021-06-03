import {
  Sidebar,
  PrimaryButton,
  Select,
  Box
} from "@nulogy/components";
import { PropTypes } from 'react-view';

export const config = {
  componentName: "Sidebar",
  scope: {
    Sidebar,
    PrimaryButton,
    Select,
    Box,
  },
  props: {
    isOpen: {
      type: PropTypes.Boolean,
      value: false,
      description: "An event handler for opening the Sidebar.",
      stateful: true
    },
    children: {
      value: `
      <Select options={[{label: "first option", value: 1}]} labelText="Delivery:" />
      <Select options={[]} labelText="Delivery:" />
      <Select options={[]} labelText="Delivery:" />
      `,
      type: PropTypes.ReactNode,
      description: "Inner content."
    },
    offset: {
      type: PropTypes.String,
      value: "0px",
      defaultValue: "0px",
      description: "The amount of pixels to offset the Sidebar from on the right of the screen. Mostly used for in the case of multiple Sidebars.",
    },
    top: {
      type: PropTypes.String,
      value: "",
      defaultValue: "0px",
      description: "The amount of pixels to offset the Sidebar from on the top of the screen. Mostly used for in the case of multiple Sidebars.",
    },
    hideCloseButton: {
      type: PropTypes.Boolean,
      value: false,
      defaultValue: "false",
      description: "When true, hides the close button",
    },
    closeButtonTestId: {
      type: PropTypes.String,
      value: "",
      defaultValue: "Sidebar-close-button",
      description: "To use the close button in a test.",
    },
    closeButtonAriaLabel: {
      type: PropTypes.String,
      value: "",
      defaultValue: "close",
      description: "Aria label for the close button.",
    },
    duration: {
      type: PropTypes.Number,
      value: "0.25",
      defaultValue: "0.25",
      description: "The length of the animation for sliding in and out the Sidebar.",
    },
    footer: {
      type: PropTypes.ReactNode,
      value: "<PrimaryButton>Apply</PrimaryButton>",
      description: "An optional sticky footer.",
    },
    title: {
      type: PropTypes.String,
      value: "Filters",
      description: "A heading to display at the top of the Sidebar.",
    },
    triggerRef: {
      type: PropTypes.Object,
      value: "",
      description: "The button that was used to open the Sidebar. Setting this will allow focus to return to that element when the Sidebar is closed. If it's not set, the focus will be set to the first element on the page.",
    },
    onClose: {
      type: PropTypes.Function,
      value: "() => setIsOpen(false)",
      description: "An event handler for closing the Sidebar.",
    },
    closeOnOutsideClick: {
      type: PropTypes.Boolean,
      value: true,
      defaultValue: true,
      description: "If true, calls onClose when the user clicks anywhere but the Sidebar.",
    },
    overlay: {
      type: PropTypes.Boolean,
      value: true,
      defaultValue: true,
      description: "If true, displays an overlay behind the sidebar when it is open.",
    },
  }
}
