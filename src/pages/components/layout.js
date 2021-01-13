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
  Title,
  Link,
  List,
  ListItem,
  Frame,
  Page
} from "@nulogy/components";
import {
  DocText as Text,
  Layout,
  Intro,
  IntroText,
  DocSection,
  PropsTable,
  InlineCode
} from "../../components";
import { STORYBOOK_COMPONENT_URL } from "../../shared/const";

const primaryMenu = [{ name: "Menu Link", href: "/" }];

const frameRows = [
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
  }
];

const sidebarRows = [
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
  },
  {
    name: "title",
    type: "string",
    defaultValue: "",
    description: "A heading to display at the top of the Sidebar."
  }
];

export default ({ location }) => (
  <Layout location={location}>
    <Helmet>
      <title>Layout</title>
    </Helmet>
    <Intro>
      <Title>Layout</Title>
      <IntroText>
        There are three components we use to build up Nulogy's standard layout:
        A Frame, a Page, and an optional Sidebar.
      </IntroText>
    </Intro>

    <DocSection>
      <Frame
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
      </Frame>
      <Highlight className="js">
        {`export const _LayoutExample = () => (
  <Frame navBar={<BrandedNavBar menuData={{ primaryMenu, secondaryMenu }} />}>
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
  </Frame>
);
`}
      </Highlight>
    </DocSection>

    <DocSection>
      <SectionTitle>Frame</SectionTitle>
      <Text>
        The Frame is the main layout container for an NDS application. It
        creates a full-width and full-height page container, and positions the
        NavBar at the top. This is usually only used once per application.
      </Text>

      <Highlight className="js">
        {`import {Frame, BrandedNavBar} from "@nulogy/components";

  <Frame navBar={<BrandedNavBar menuData={{ primaryMenu, secondaryMenu }} />}>
   // page content
  </Frame>
);
`}
      </Highlight>

      <PropsTable propsRows={frameRows} />
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
      The Sidebar is designed for displaying additional information or
      editing/creating new items. The component provides animation, a close
      button, and consistent paddings and title positioining. Sidebars are
      always optional, and can just be used in the Page you want. when needed.
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
        <Link href={`${STORYBOOK_COMPONENT_URL}`}>View in Storybook</Link>
      </ListItem>
    </DocSection>
  </Layout>
);
