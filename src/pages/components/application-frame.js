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

const ApplicationFrameRows = [
  {
    name: "navBar",
    type: "ReactNode",
    defaultValue: "",
    description:
      "The navigation for your application. Displays at the top of every page."
  }
];

export default ({ location }) => (
  <Layout location={location}>
    <Helmet>
      <title>ApplicationFrame</title>
    </Helmet>
    <Intro>
      <Title>
        ApplicationFrame{" "}
        <StatusIndicator type="informative">BETA</StatusIndicator>
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
      <Text>
        The ApplicationFrame is the main layout container for an NDS
        application. It creates a full-width and full-height page container, and
        positions the NavBar fixed at the top. This is usually only used once
        per application.
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
      <SectionTitle>Resources</SectionTitle>
      <ListItem>
        <Link
          href={`${STORYBOOK_COMPONENT_URL}applicationframe--application-frame`}
        >
          View in Storybook
        </Link>
      </ListItem>
    </DocSection>
    <DocSection>
      <SectionTitle>Related components</SectionTitle>
      <ListItem>
        <Link href="/components/page">Page</Link>
      </ListItem>
      <ListItem>
        <Link href="/components/sidebar">Sidebar</Link>
      </ListItem>
    </DocSection>
  </Layout>
);
