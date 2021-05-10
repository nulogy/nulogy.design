import { Tabs, Tab } from "@nulogy/components";
import { PropTypes } from 'react-view';

export const config = {
  componentName: "Tabs",
  scope: {
    Tabs,
    Tab,
  },
  props: {
    children: {
      value: `
      <Tab label="Tab 1">Tab 1 Content</Tab>
      <Tab label="Tab 2">Tab 2 Content</Tab>
      <Tab label="Tab 3">Tab 3 Content</Tab>
      <Tab label="Tab 4">Tab 4 Content</Tab>
      `,
      type: PropTypes.ReactNode,
      description: "Inner tabs."
    },
    defaultSelectedIndex: {
      type: PropTypes.Number,
      value: 0,
      description: "Index of the tab that is selected when rendered.",
    },
    fitted: {
      type: PropTypes.Boolean,
      value: false,
      description: "Sets the tab components to equally take up the width of the tabs container.",
    },
    renderTabContentOnlyWhenSelected: {
      type: PropTypes.Boolean,
      value: false,
      description: "Causes hidden tab content to only be rendered when the tab is selected.",
    },
    selectedIndex: {
      type: PropTypes.Number,
      value: 0,
      description: "Index of selected tab if controlling the tabs component.",
    },
    onTabClick: {
      type: PropTypes.Function,
      value: "(e) => console.log('onTabClick', e)",
      description: "On click function passed to each tab component used when controlling the tabs component. Runs with arguments onClick(event, index).",
    },
    className: {
      type: PropTypes.String,
      value: "",
      description: "className passed to the Tabs component",
    },
    tabContentClassName: {
      type: PropTypes.String,
      value: "",
      description: "className passed to the tab content container",
    },
    ariaLabelLeft: {
      type: PropTypes.String,
      value: "",
      description: "aria label on the left arrow button when tabs are scrollable",
    },
    ariaLabelRight: {
      type: PropTypes.String,
      value: "",
      description: "aria label on the right arrow button when tabs are scrollable",
    },
  }
}