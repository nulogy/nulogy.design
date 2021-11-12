import { BrandedNavBar } from "@nulogy/components";
import { PropTypes } from "react-view";

export const config = {
  componentName: "BrandedNavBar",
  scope: {
    BrandedNavBar,
  },
  props: {
    menuData: {
      type: PropTypes.Object,
      value: `{
        primaryMenu: [
          {
            name: 'Dashboard',
            items: [
              { name: 'Customers', href: '/' },
              { name: 'Invoices', href: '/' },
            ],
          },
          { name: 'Link', href: '/' },
        ],
        secondaryMenu: [
          {
            name: 'Settings',
            items: [
              { name: 'Permissions', href: '/' },
              { name: 'Manage account', href: '/' },
            ],
          },
        ]
      }`,
      defaultValue: "null",
      description:
        "Data used to build link heirarchy functionality. See menuData Prop section below.",
    },
    subtext: {
      type: PropTypes.String,
      value: "",
      defaultValue: "null",
      description: "The subtext under the Nulogy logo.",
    },
    brandingLinkHref: {
      type: PropTypes.String,
      value: "",
      defaultValue: "/",
      description: "A custom link for the logo.",
    },
    breakpointUpper: {
      type: PropTypes.Number,
      value: "",
      defaultValue: "1024",
      description:
        "Provides the breakpoint where menu items will be collapsed into a dropdown menu.",
    },
    environment: {
      type: PropTypes.Enum,
      options: ["training", "development", ""],
      value: "",
      description:
        "If defined, shows a blue banner above the navbar which indicates the set environment",
    },
    logo: {
      type: PropTypes.String,
      value: "",
      description: "A path to a logo file",
    },
  },
};
