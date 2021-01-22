import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Highlight from "react-highlight";
import {
  Alert,
  Button,
  Box,
  Breadcrumbs,
  Sidebar,
  Heading2,
  BrandedNavBar,
  SectionTitle,
  SubsectionTitle,
  StatusIndicator,
  Title,
  Link,
  List,
  ListItem,
  ApplicationFrame,
  Page
} from "@nulogy/components";
import {
  DocText as Text,
  Layout,
  Intro,
  IntroText,
  DocSection,
  PropsTable
} from "../../components";
import { STORYBOOK_COMPONENT_URL } from "../../shared/const";

const primaryMenu = [{ name: "Menu Link", href: "/" }];

const ApplicationFrameRows = [
  {
    name: "navBar",
    type: "ReactNode",
    defaultValue: "",
    description:
      "The navigation for your application. Displays at the top of every page."
  }
];

const pageRows = [
  {
    name: "breadcrumbs",
    type: "ReactNode",
    defaultValue: "",
    description: "Breadcrumbs that display above the page title."
  },
  {
    name: "title",
    type: "string",
    defaultValue: "",
    description: "The title of the page."
  },
  {
    name: "headerContent",
    type: "ReactNode",
    defaultValue: "",
    description: "Optional, additional content to display next to the title"
  }
];

const sidebarRows = [
  {
    name: "offset",
    type: "string",
    defaultValue: "0px",
    description:
      "The amount of pixels to offset the Sidebar from on the right of the screen. Mostly used for in the case of multiple Sidebars."
  },
  {
    name: "closeButtonTestId",
    type: "string",
    defaultValue: "",
    description: "To use the close button in a test."
  },
  {
    name: "duration",
    type: "number",
    defaultValue: "0.25",
    description:
      "The length of the animation for sliding in and out the Sidebar."
  },
  {
    name: "footer",
    type: "ReactNode",
    defaultValue: "",
    description: "An optional sticky footer."
  },
  {
    name: "title",
    type: "string",
    defaultValue: "",
    description: "A heading to display at the top of the Sidebar."
  },
  {
    name: "triggerRef",
    type: "RefObject",
    defaultValue: "",
    description:
      "The button that was used to open the Sidebar. Setting this can will allow focus to return to that element when the Sidebar is closed. If it's not set, the focus will be set to the first element on the page."
  },
  {
    name: "isOpen",
    type: "function",
    defaultValue: "",
    description: "An event handler for opening the Sidebar."
  },
  {
    name: "onClose",
    type: "function",
    defaultValue: "",
    description: "An event handler for closing the Sidebar."
  }
];

export default ({ location }) => (
  <Layout location={location}>
    <Helmet>
      <title>Layout</title>
    </Helmet>
    <Intro>
      <Title>
        Layout <StatusIndicator type="informative">BETA</StatusIndicator>
      </Title>
      <Alert mb="x3">
        These components are currently in beta and are being rolled out in pilot
        locations across Nulogy. They are not currently included in our{" "}
        <Link href="/guides/versioning">versioning system</Link> due to the high
        chance of API changes. Please reach out to Design Ops on Slack if you'd
        like to implement these components.
      </Alert>
      <IntroText>
        There are three components we use to build up Nulogy's standard layout:
        An ApplicationFrame, a Page, and an optional Sidebar.
      </IntroText>
    </Intro>

    <DocSection>
      <ApplicationFrame
        minHeight="initial"
        border="1px solid blue"
        navBar={<BrandedNavBar menuData={{ primaryMenu }} />}
      >
        <Page
          breadcrumbs={
            <Breadcrumbs>
              <Link href="/">Home</Link>
              <Link href="/">Materials</Link>
            </Breadcrumbs>
          }
          title="Materials Overview"
        >
          <>
            <Text fontFamily="mono">// main content</Text>
          </>
        </Page>
      </ApplicationFrame>
      <Highlight className="js">
        {`export const _LayoutExample = () => (
  <ApplicationFrame navBar={<BrandedNavBar menuData={{ primaryMenu, secondaryMenu }} />}>
    <Page
      breadcrumbs={
        <Breadcrumbs>
          <Link href="/">Home</Link> 
          <Link href="/">Materials</Link>
        </Breadcrumbs>
      }
      title="Materials Overview"
    >
      // main content
    </Page>
  </ApplicationFrame>
);
`}
      </Highlight>
    </DocSection>

    <DocSection>
      <SectionTitle>ApplicationFrame</SectionTitle>
      <Text>
        The ApplicationFrame is the main layout container for an NDS
        application. It creates a full-width and full-height page container, and
        positions the NavBar at the top. This is usually only used once per
        application.
      </Text>

      <Highlight className="js">
        {`import {ApplicationFrame, BrandedNavBar} from "@nulogy/components";

  <ApplicationFrame navBar={<BrandedNavBar menuData={{ primaryMenu, secondaryMenu }} />}>
   // page content
  </ApplicationFrame>
);
`}
      </Highlight>

      <PropsTable propsRows={ApplicationFrameRows} />
    </DocSection>

    <DocSection>
      <SectionTitle>Page</SectionTitle>
      <Text>
        The Page component wraps the actual content of a page, and provides
        consistent positioning for the Title and Breadcrumb components. This
        will be used many times, wrapping each page that gets created.
      </Text>

      <Highlight className="js">
        {`import {Page, Breadcrumbs} from "@nulogy/components";
    <Page
      breadcrumbs={
        <Breadcrumbs>
          <Link href="/">Home</Link>
          <Link href="/">Materials</Link>
        </Breadcrumbs>
      }
      title="Materials Overview"
    >
      // main content
    </Page>
);
`}
      </Highlight>

      <PropsTable propsRows={pageRows} />
    </DocSection>

    <DocSection>
      <SectionTitle>Sidebar</SectionTitle>
      <Text>
        The Sidebar is designed for displaying additional information or
        editing/creating new items. The component provides animation, a close
        button, and consistent paddings and title positioining. Sidebars are
        always optional, and can just be used in the Page you want. when needed.
      </Text>
      <Text>See props for accessibility features.</Text>
      <Highlight className="js">
        {`import {Sidebar, Page, Breadcrumbs} from "@nulogy/components"

const ExampleSideBar = ({ isOpen, onClose }) => (
  <SideBar isOpen={isOpen} title="Filters" onClose={onClose}>
    <Select options={[]} labelText="Delivery:" />
  </SideBar>
);

export const WithSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };
  const closeSideBar = () => {
    setIsOpen(false);
  };

  return (
      <Page
        breadcrumbs={
          <Breadcrumbs>
            <Link href="/">Home</Link>
            <Link href="/">Materials</Link>
          </Breadcrumbs>
        }
        title="Materials Overview"
      >
        <>
          <Box minWidth="300px">
            <PrimaryButton onClick={toggleSideBar}>Toggle SideBar</PrimaryButton>
          </Box>
        </>
      <ExampleSideBar isOpen={isOpen} onClose={closeSideBar} />        
      </Page>
  );
};`}
      </Highlight>
      <PropsTable propsRows={sidebarRows} />
    </DocSection>

    <DocSection>
      <SectionTitle>Resources</SectionTitle>
      <ListItem>
        <Link href={`${STORYBOOK_COMPONENT_URL}layout--application-frame`}>
          View in Storybook
        </Link>
      </ListItem>
    </DocSection>
  </Layout>
);
