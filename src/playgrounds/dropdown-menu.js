import { DropdownMenu, DropdownLink, DropdownButton } from "@nulogy/components";
import { PropTypes } from "react-view";

export const config = {
  componentName: "DropdownMenu",
  scope: {
    DropdownMenu,
    DropdownLink,
    DropdownButton,
  },
  props: {
    children: {
      type: PropTypes.ReactNode,
      value: `
        <DropdownLink href="/">Dropdown Link</DropdownLink>
        <DropdownButton>Dropdown Button</DropdownButton>
      `,
      description: "The dropddown menu items",
    },
    disabled: {
      type: PropTypes.Boolean,
      value: "",
      defaultValue: "false",
      description: "Marks the button as disabled and unable to be activated.",
    },
    backgroundColor: {
      type: PropTypes.String,
      value: "",
      defaultValue: "whiteGrey",
      description: "Background color of the menu container.",
    },
    showArrow: {
      type: PropTypes.Boolean,
      value: false,
      defaultValue: "true",
      description: "Determines if the arrow is shown on the menu container.",
    },
    placement: {
      type: PropTypes.String,
      value: "",
      defaultValue: "bottom-start",
      description:
        "One of top, bottom, left, or right with optional -start or -end appended to place the menu container relative to the trigger.",
    },
    showDelay: {
      type: PropTypes.Number,
      value: "",
      defaultValue: "100",
      description: "Buffer delay time to show the dropdown menu when opening.",
    },
    hideDelay: {
      type: PropTypes.Number,
      value: "",
      defaultValue: "200",
      description: "Buffer delay time to hide the dropdown menu when closing.",
    },
    defaultOpen: {
      type: PropTypes.Boolean,
      value: false,
      defaultValue: "false",
      description: "State of the dropdown menu when mounted.",
    },
    trigger: {
      type: PropTypes.Function,
      value: "",
      description:
        "Function that returns a button component that will be used as the trigger.",
    },
    className: {
      type: PropTypes.String,
      value: "",
      description: "className passed to the dropdown menu container.",
    },
    boundariesElement: {
      type: PropTypes.String,
      value: "",
      description:
        "The element which will define the boundaries of the dropdown position. The opened dropdown will never be placed outside of the defined boundaries",
    },
    openAriaLabel: {
      type: PropTypes.String,
      value: "",
      defaultValue: "open",
      description: "aria label when the dropdown is closed",
    },
  },
};
