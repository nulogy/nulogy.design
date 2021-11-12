import { Modal, PrimaryButton, Button } from "@nulogy/components";
import { PropTypes } from "react-view";

export const config = {
  componentName: "Modal",
  scope: {
    Modal,
    PrimaryButton,
    Button,
  },
  props: {
    isOpen: {
      type: PropTypes.Boolean,
      value: false,
      defaultValue: "true",
      description: "Controls whether the modal is open or closed.",
      stateful: true,
    },
    children: {
      value: "Hello, this is the modal",
      type: PropTypes.ReactNode,
      description: "Inner content",
    },
    title: {
      type: PropTypes.String,
      value: "Modal Title",
      description: "The title appearing at the top of the modal.",
    },
    onRequestClose: {
      type: PropTypes.Function,
      value: "(e) => setIsOpen(false)",
      description:
        "Function that is run when the modal requests to be closed (esc key, clicking outside, clicking close), also renders the close button is passed in.",
    },
    footerContent: {
      type: PropTypes.ReactNode,
      value: "<PrimaryButton>Submit</PrimaryButton>",
      description:
        "The content (usually buttons) to appear at the bottom of the modal.",
    },
    onAfterOpen: {
      type: PropTypes.Function,
      value: "(e) => console.log('onAfterOpen', e)",
      defaultValue: "null",
      description: "Function that is run after the modal has opened.",
    },
    maxWidth: {
      type: PropTypes.String,
      value: "624px",
      defaultValue: "624px",
      description:
        "Maximum width of the modal, modal will always compress responsively when the screen shrinks.",
    },
    shouldFocusAfterRender: {
      type: PropTypes.Boolean,
      value: true,
      defaultValue: "true",
      description: "Move focus into the modal when it is rendered.",
    },
    shouldReturnFocusAfterClose: {
      type: PropTypes.Boolean,
      value: true,
      defaultValue: "true",
      description:
        "Move focus back to what triggered the modal after it closes.",
    },
    ariaLabel: {
      type: PropTypes.String,
      value: "",
      description:
        "String indicating how the modal content should be announced to screenreaders.",
    },
    ariaDescribedBy: {
      type: PropTypes.String,
      value: "",
      description:
        "String indicating the aria description of the modal (optional for enhanced accessibility if needed).",
    },
    className: {
      type: PropTypes.String,
      value: "",
      description: "className passed to the modal component.",
    },
    portalClassName: {
      type: PropTypes.String,
      value: "",
      description:
        "className passed to the portal created for the modal component.",
    },
    overlayClassName: {
      type: PropTypes.String,
      value: "",
      description: "className passed to the overlay component.",
    },
    closeAriaLabel: {
      type: PropTypes.String,
      value: "",
      defaultValue: "close",
      description: "Aria label on close button",
    },
  },
};
