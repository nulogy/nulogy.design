import { Breadcrumbs, Link, Text } from "@nulogy/components";
import { PropTypes } from "react-view";

export const config = {
  componentName: "Breadcrumbs",
  scope: {
    Breadcrumbs,
    Link,
    Text,
  },
  props: {
    children: {
      value: `<Link href="">Home</Link>
<Link href="">Tenants</Link>`,
      type: PropTypes.ReactNode,
      description:
        "The elements to build the breadcrumbs out of. Can be a Link or Text.",
    },
    as: {
      value: "nav",
      defaultValue: "nav",
      type: PropTypes.String,
      description: "The dom element that wraps the breadcrumbs.",
    },
  },
};
