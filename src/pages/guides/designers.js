import React from "react";
import { Helmet } from "react-helmet";
import {
  Box,
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
  InlineCode,
  Image,
  DocSubsection
} from "../../components";
import figmaComponents from "../../images/designers-guide/figma-components.gif";
import figmaStyles from "../../images/designers-guide/figma-styles.gif";
import figmaText from "../../images/designers-guide/figma-text.gif";
import figmaGrid from "../../images/designers-guide/figma-grid.gif";
import figmaFrame from "../../images/designers-guide/figma-frame.gif";
import figmaVersion from "../../images/designers-guide/figma-version.gif";
import figmaSaveVersion from "../../images/designers-guide/figma-save-version.gif";

export default ({ location }) => (
  <Layout location={location}>
    <Helmet>
      <title>Designers' Guide</title>
    </Helmet>
    <Intro>
      <Title>Designers' Guide</Title>
      <IntroText>
        Learn how to start designing using the Nulogy Design System (NDS).
      </IntroText>
    </Intro>

    <DocSection>
      <SectionTitle>Tools and assets</SectionTitle>
      <Text>Designers at Nulogy use:</Text>
      <List>
        <ListItem>
          <Link href="https://www.figma.com/">Figma</Link> as our design tool
          for creating high-fidelity mockups, prototyping, version control, and
          team collaboration.
        </ListItem>
        <ListItem>
          <Link href="https://www.ibm.com/plex/">IBM Plex</Link> as a Nulogy's
          sole typeface
        </ListItem>
        <ListItem>
          <Link href="https://www.figma.com/file/jRQxfwCL27gfqfrdCxOIQG/NDS">
            NDS UI kit
          </Link>{" "}
          as a library of Figma styles and components
        </ListItem>
        <ListItem>
          <Link href="https://storybook.nulogy.design">Storybook</Link> as a
          component reference guide
        </ListItem>
      </List>
    </DocSection>

    <DocSection>
      <SectionTitle>Understanding NDS visual language</SectionTitle>
      <Text>
        To be effective at using the Nulogy Design System designers should
        familiarize themselves with the basics of NDS visual language. The
        following articles provide a good starting point:
      </Text>
      <List>
        <ListItem>
          <Link href="/style/colour/">Colour</Link>
        </ListItem>
        <ListItem>
          <Link href="/style/spacing/">Spacing</Link>
        </ListItem>
        <ListItem>
          <Link href="/style/typography/">Typography</Link>
        </ListItem>
      </List>
    </DocSection>
    <DocSection>
      <SectionTitle>Designing with NDS in Figma</SectionTitle>
      <DocSubsection mb="x6">
        <SubsectionTitle>NDS components</SubsectionTitle>
        <Text mb="x3">
          In Figma, the NDS components are available under the{" "}
          <InlineCode>Assets</InlineCode> panel in Left Sidebar. The components
          are easily drag-and-dropped into the working frame and further
          customized through <InlineCode>Layer</InlineCode> and{" "}
          <InlineCode>Design</InlineCode> panels.{" "}
        </Text>
        <Image
          src={figmaComponents}
          alt="Animation showing how to access NDS components in Figma"
        />
        <Text textAlign="center" fontSize="small" color="darkGrey">
          Using NDS components in Figma
        </Text>
      </DocSubsection>
      <DocSubsection mb="x6">
        <SubsectionTitle>NDS styles</SubsectionTitle>
        <Text mb="x3">
          By using available text, colours, shadows, and grid styles in the{" "}
          <InlineCode>Layer</InlineCode> panel, designers ensure that their
          designs stay in line with NDS' visual style.
        </Text>
        <Image
          src={figmaStyles}
          alt="Animation showing how to use NDS colour, and shadow styles in Figma"
        />
        <Text textAlign="center" fontSize="small" color="darkGrey">
          Using NDS colour, and shadow styles in Figma
        </Text>
        <Image
          src={figmaText}
          alt="Animation showing how to use NDS text styles in Figma"
        />
        <Text textAlign="center" fontSize="small" color="darkGrey">
          Using NDS text styles in Figma
        </Text>
        <Image
          src={figmaGrid}
          alt="Animation showing how to use NDS grid and adjust nudge amount in Figma"
        />
        <Text textAlign="center" fontSize="small" color="darkGrey">
          Using NDS grid styles and adjusting nudge amount in Figma
        </Text>
      </DocSubsection>
      <DocSubsection mb="x6">
        <SubsectionTitle>
          Default screen sizes and Frame component
        </SubsectionTitle>
        <Text mb="x3">
          NDS Frame component is created to help designers set the working
          canvas. It comes in different sizes that match breakpoints in NDS.
          Once imported the Frame component should be detached (Detach Instance)
          so that other elements can be nested inside.
        </Text>
        <Image
          src={figmaFrame}
          alt="Animation showing how to use Frame component"
        />
        <Text textAlign="center" fontSize="small" color="darkGrey">
          Using NDS Frame component and setting the working canvas
        </Text>
      </DocSubsection>
      <DocSubsection mb="x6">
        <SubsectionTitle>Using version history</SubsectionTitle>
        <Text mb="x3">
          To leave a record of changes made throughout the design process and to
          be able to revert to desired revision designs should be regularelly
          saved to version history. Version history is available in{" "}
          <InlineCode>File</InlineCode> menu under{" "}
          <InlineCode>Show Version History</InlineCode>.
        </Text>
        <Image
          src={figmaSaveVersion}
          alt="Animation showing how to save to version history"
        />
        <Text textAlign="center" fontSize="small" color="darkGrey">
          Saving version history
        </Text>
        <Image
          src={figmaVersion}
          alt="Animation showing how to view version history"
        />
        <Text textAlign="center" fontSize="small" color="darkGrey">
          Viewing version history
        </Text>
      </DocSubsection>
    </DocSection>
    <DocSection>
      <SectionTitle>Related resources</SectionTitle>
      <ListItem>
        <Link href="/guides/developers">Developer's guide</Link>
      </ListItem>
      <ListItem>
        <Link href="https://help.figma.com/hc/en-us">Figma help center</Link>
      </ListItem>
    </DocSection>
  </Layout>
);
