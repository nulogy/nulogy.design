import { Page, Button, Breadcrumbs, Link } from "@nulogy/components";
import { PropTypes } from 'react-view';

export const config = {
  componentName: "Page",
  scope: {
    Page,
    Button,
    Breadcrumbs,
    Link
  },
  props: {
    breadcrumbs: {
      type: PropTypes.ReactNode,
      value: `<Breadcrumbs>
      <Link href="/">Home</Link> 
      <Link href="/">Materials</Link>
    </Breadcrumbs>`,
      description: "Breadcrumbs that display above the page title.",
    },
    title: {
      type: PropTypes.String,
      value: "Materials Overview",
      description: "The title of the page.",
    },
    headerContent: {
      type: PropTypes.ReactNode,
      value: "<Button>Edit</Button>",
      description: "Optional, additional content to display next to the title",
    },
    children: {
      value: "Some content.",
      type: PropTypes.ReactNode,
      description: "Page content."
    },
  }
}