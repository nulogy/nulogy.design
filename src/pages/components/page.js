import React from "react";
import { Helmet } from "react-helmet";
import Highlight from "react-highlight";
import {
  Alert,
  Breadcrumbs,
  BrandedNavBar,
  SectionTitle,
  StatusIndicator,
  Title,
  Link,
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
  PropsTable,
  BetaMessage
} from "../../components";
import { STORYBOOK_COMPONENT_URL } from "../../shared/const";

const primaryMenu = [{ name: "Menu Link", href: "/" }];

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

export default ({ location }) => (
  <Layout location={location}>
    <Helmet>
      <title>Page</title>
    </Helmet>
    <Intro>
      <Title>
        Page <StatusIndicator type="informative">BETA</StatusIndicator>
      </Title>
      <BetaMessage />
      <IntroText>
        There are three components we use to build up Nulogy's standard layout:
        An ApplicationFrame, a Page, and an optional Sidebar.
      </IntroText>
    </Intro>

    <DocSection>
      <ApplicationFrame
        minHeight="initial"
        boxShadow="medium"
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
      <SectionTitle>Resources</SectionTitle>
      <ListItem>
        <Link href={`${STORYBOOK_COMPONENT_URL}page--page`}>
          View in Storybook
        </Link>
      </ListItem>
    </DocSection>

    <DocSection>
      <SectionTitle>Related components</SectionTitle>
      <ListItem>
        <Link href="/components/application-frame">Application Frame</Link>
      </ListItem>
      <ListItem>
        <Link href="/components/sidebar">Sidebar</Link>
      </ListItem>
    </DocSection>
  </Layout>
);
