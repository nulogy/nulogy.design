import React from "react";
import { Helmet } from "react-helmet";
import Highlight from "react-highlight";
import {
  Box,
  Flex,
  SectionTitle,
  SubsectionTitle,
  Title,
  Link,
  List,
  ListItem
} from "@nulogy/components";
import {
  DocText as Text,
  Layout,
  Intro,
  IntroText,
  DocSection,
  DocSubsection
} from "../../components";
import perifeireImage from "../../images/data-visualization/periferie.svg";
import graphImage from "../../images/data-visualization/graph.svg";
import chart1Image from "../../images/data-visualization/chart-1.svg";
import chartMultiImage from "../../images/data-visualization/chart-multi.svg";
import { STORYBOOK_COMPONENT_URL } from "../../shared/const";

export default () => (
  <Layout>
    <Helmet>
      <title>Data Visualization</title>
    </Helmet>
    <Intro>
      <Title>Data Visualization</Title>
      <IntroText>
        This article provides a basic guidelines on how to use NDS with charts.
      </IntroText>
    </Intro>

    <DocSection>
      <SectionTitle>Chart periferie colours</SectionTitle>
      <List mb="x3">
        <ListItem>
          Use DarkGrey for primary and Grey for periferie chart colours
        </ListItem>
        <ListItem>Use 1px wide stroke</ListItem>
      </List>
      <img src={perifeireImage} alt="Chart perifier colour use example" />
    </DocSection>
    <DocSection>
      <SectionTitle>1-colour chart</SectionTitle>
      <List mb="x3">
        <ListItem>Use 3px wide stroke for graph lines</ListItem>
      </List>
      <img src={graphImage} alt="1-colour chart example" />
      <List mb="x3">
        <ListItem>Use DarkBlue for visual elements</ListItem>
      </List>
      <img src={chart1Image} alt="G1-colour graph example" />
    </DocSection>
    <DocSection>
      <SectionTitle>Multi-colour chart</SectionTitle>
      <List mb="x3">
        <ListItem>Use categorical colours in the assigned order</ListItem>
        <ListItem>Use 3px wide stroke</ListItem>
        <ListItem>Allow 3px between the regions</ListItem>
        <ListItem>Do not cross graph lines</ListItem>
        <ListItem>
          Provide filtering when the number of items exceeds 6
        </ListItem>
      </List>
      <img src={chartMultiImage} alt="Multi-colour chart example" />
    </DocSection>

    <DocSection>
      <SectionTitle>Accessibility</SectionTitle>
      <Text mb="x3">
        Categorical colours are selected to provide people with colour
        deficiency and people using printed material with an optimal experience.
        Not all the colours in the palette meet WCAG AA contrast ratio with the
        white background and it is recommended to provide additional mechanisms
        to assist users with poor vision to better comprehend the content.
      </Text>
    </DocSection>

    <DocSection>
      <SectionTitle>Related articles</SectionTitle>
      <List>
        <ListItem>
          <Link href="/style/colour">Colours</Link>
        </ListItem>
        <ListItem>
          <Link href="https://spectrum.adobe.com/page/data-visualization-fundamentals/">
            Spectrum - Data vizualisation fundamentals
          </Link>
        </ListItem>
      </List>
    </DocSection>
  </Layout>
);
