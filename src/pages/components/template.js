/* eslint-disable no-unused-vars, quotes, react/self-closing-comp */

import React from "react";
import { Helmet } from "react-helmet";
import Highlight from "react-highlight";
import {
  Button,
  Box,
  SectionTitle,
  SubsectionTitle,
  Title,
  Link,
  List,
  ListItem
} from "@nulogy/components";
import {
  Layout,
  Intro,
  IntroText,
  DocSection,
  PropsTable
} from "../../components";
import { STORYBOOK_URL } from "../../shared/const";

const propsRows = [
  {
    name: "",
    type: "",
    defaultValue: "",
    description: ""
  }
];

export default ({ location }) => (
  <Layout location={location}>
    <Helmet>
      <title>Component name</title>
    </Helmet>
    <Intro>
      <Title>Component name</Title>
      <IntroText>A short description of the component.</IntroText>
    </Intro>

    <DocSection>
      <Button>Create project</Button>
      <Highlight className="js">
        {`import {Button} from "@nulogy/components";

<Button>Create project</Button>
`}
      </Highlight>
    </DocSection>

    <DocSection>
      <SectionTitle>Use when</SectionTitle>
    </DocSection>

    <DocSection>
      <SectionTitle>Variations</SectionTitle>
      <Box mb="x6">
        <SubsectionTitle>Variation 1</SubsectionTitle>
        <Highlight className="js" />
      </Box>
    </DocSection>

    <DocSection>
      <SectionTitle>Dos and Donts</SectionTitle>
    </DocSection>

    <DocSection>
      <SectionTitle>Accessibility guidelines</SectionTitle>
    </DocSection>

    <DocSection>
      <SectionTitle>Responsive information</SectionTitle>
    </DocSection>

    <DocSection>
      <SectionTitle>Props</SectionTitle>
      <PropsTable propsRows={propsRows} />
    </DocSection>

    <DocSection>
      <SectionTitle>Related components</SectionTitle>
    </DocSection>

    <DocSection>
      <SectionTitle>Resources</SectionTitle>
      <List>
        <ListItem>
          <Link href={STORYBOOK_URL}>View in Storybook</Link>
        </ListItem>
      </List>
    </DocSection>
  </Layout>
);
