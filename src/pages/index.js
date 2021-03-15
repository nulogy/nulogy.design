import React from "react";
import { Helmet } from "react-helmet";
import {
  Box,
  PrimaryButton,
  Flex,
  Text,
  Title,
  SectionTitle,
  List,
  ListItem,
  Link
} from "@nulogy/components";
import { Intro, IntroText, Layout } from "../components";

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Helmet>
      <meta
        name="description"
        content="The Nulogy Design System is a collection of Visual Guidelines and UI Components that will allow designers and developers to quickly create consistent experiences for our customers using established best practices."
      />
    </Helmet>
    <Intro>
      <Title>Nulogy Design System</Title>
      <IntroText>
        The Nulogy Design System is a collection of Visual Guidelines and UI
        Components that will allow designers and developers to quickly create
        consistent experiences for our customers using established best
        practices.
      </IntroText>
    </Intro>

    <Flex
      flexDirection={{ extraSmall: "column", small: "row" }}
      mb={{ extraSmall: "x6", medium: 0 }}
    >
      <Box width={{ extraSmall: 1, small: 1 / 2 }} mb="x6">
        <SectionTitle mb="x3">Visual Style</SectionTitle>
        <Text mb="x3">
          Learn about the style that makes up Nulogy applications; including
          logo usage, typography, our colour system, iconography and spacing.
        </Text>
        <PrimaryButton asLink href="/style/colour">
          Use our visual style
        </PrimaryButton>
      </Box>

      <Box width={{ extraSmall: 1, small: 1 / 2 }}>
        <SectionTitle mb="x3">Components</SectionTitle>
        <Text mb="x3">
          Built using React, components are tested interface design patterns
          designed to ensure a consistent experience for our users.
        </Text>
        <PrimaryButton asLink href="components/alert">
          Use our components
        </PrimaryButton>
      </Box>
    </Flex>

    <Box mb="x8">
      <SectionTitle mb="x3" id="guides">
        Guides
      </SectionTitle>
      <List>
        <ListItem>
          <Link href="/guides/designers">
            Getting Started with NDS for Designers
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/guides/developers">
            Getting Started with NDS for Developers
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/guides/layout">Building layouts</Link>
        </ListItem>
        <ListItem>
          <Link href="/guides/versioning">How NDS packages are versioned</Link>
        </ListItem>
        <ListItem>
          <Link href="/guides/packages">How NDS packages are released</Link>
        </ListItem>
        <ListItem>
          <Link href="/guides/localization">
            Localization with @nulogy/components
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/guides/testing">Testing @nulogy/components</Link>
        </ListItem>
        <ListItem>
          <Link href="/guides/ops-core">Using NDS in Ops Core</Link>
        </ListItem>
        <ListItem>
          <Link href="/guides/style-props">
            Using Style Props with @nulogy/components
          </Link>
        </ListItem>
      </List>
    </Box>
  </Layout>
);

export default IndexPage;
