import React from "react";
import { Helmet } from "react-helmet";
import { SectionTitle, Title, Link, List, ListItem } from "@nulogy/components";
import {
  DocText as Text,
  Layout,
  Intro,
  IntroText,
  DocSection,
  InlineCode
} from "../../components";
import periferieImage from "../../images/data-visualization/periferie.svg";
import graphImage from "../../images/data-visualization/graph.svg";
import chart1Image from "../../images/data-visualization/chart-1.svg";
import chartMultiImage from "../../images/data-visualization/chart-multi.svg";

export default () => (
  <Layout>
    <Helmet>
      <title>Data Visualization</title>
    </Helmet>
    <Intro>
      <Title>Data Visualization</Title>
      <IntroText>
        This article provides basic guidelines on how to use NDS with charts.
      </IntroText>
    </Intro>

    <DocSection>
      <SectionTitle>Chart peripheral colours</SectionTitle>
      <List mb="x3">
        <ListItem>
          Use <InlineCode>DarkGrey</InlineCode> for primary and{" "}
          <InlineCode>Grey</InlineCode> for peripheral chart colours
        </ListItem>
        <ListItem>Use 1px wide stroke</ListItem>
      </List>
      <img src={periferieImage} alt="Chart peripheral colour use example" />
    </DocSection>
    <DocSection>
      <SectionTitle>1-colour chart</SectionTitle>
      <List mb="x3">
        <ListItem>Use a 3px wide stroke for graph lines</ListItem>
      </List>
      <img src={graphImage} alt="1-colour chart example" />
      <List mb="x3">
        <ListItem>
          Use <InlineCode>DarkBlue</InlineCode> for visual elements
        </ListItem>
      </List>
      <img src={chart1Image} alt="G1-colour graph example" />
    </DocSection>
    <DocSection>
      <SectionTitle>Multi-colour chart</SectionTitle>
      <List mb="x3">
        <ListItem>Use categorical colours in the assigned order:</ListItem>
        <List pb="x1" listStyle="none" pl="0">
          <ListItem>
            <InlineCode>Categorical1</InlineCode> (Aqua)
          </ListItem>
          <ListItem>
            <InlineCode>Categorical2</InlineCode> (Purple)
          </ListItem>
          <ListItem>
            <InlineCode>Categorical3</InlineCode> (Pink)
          </ListItem>
          <ListItem>
            <InlineCode>Categorical4</InlineCode> (Turquoise)
          </ListItem>
          <ListItem>
            <InlineCode>Categorical5</InlineCode> (Orange)
          </ListItem>
          <ListItem>
            <InlineCode>Categorical6</InlineCode> (Avocado)
          </ListItem>
        </List>
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
        Categorical colours are selected to provide everyone with as optimal
        experience as possible, including those with colour defencies and those
        viewing printed materials. Note that not all the colours in the palette
        meet WCAG AA contrast ratio on a white background so it is recommended
        to provide additional mechanisms beyond colour for comprehensions.
      </Text>
    </DocSection>

    <DocSection>
      <SectionTitle>Related links</SectionTitle>
      <List>
        <ListItem>
          <Link href="/style/colour">Colours</Link>
        </ListItem>
        <ListItem>
          <Link href="https://spectrum.adobe.com/page/data-visualization-fundamentals/">
            Spectrum - Data vizualization fundamentals
          </Link>
        </ListItem>
      </List>
    </DocSection>
  </Layout>
);
