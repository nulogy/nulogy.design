import React from "react"
import { Box, Divider, Flex, Page, Heading1, Heading2, Link, Text, theme } from "@nulogy/components";
import {FIGMA_LINK} from "../../components/CONSTANTS";

const Palette = ({ colour, name, context }) => (
  <Box width={{ extraSmall: 1, small: 1 / 3 }} mb="x3">
    <Box
      mr="x2"
      pt={{ extraSmall: "x4", small: "x8" }}
      pb={{ extraSmall: "x4", small: "x8" }}
      mb="x1"
      bg={colour}
      borderRadius={1}
    />
    <Text mb="half"><Text inline fontWeight="bold">Name:</Text> {name}</Text>
    <Text mb="half"><Text inline fontWeight="bold">Hex:</Text> <Text inline fontFamily="mono">{colour}</Text></Text>
    {context && (<Text fontSize="small"><Text inline fontWeight="bold">Usage:</Text> {context}</Text>)}
  </Box>
);

const IndexPage = ({ location }) => {
  return (
    <Page title="" location={location}>
      <Box maxWidth="1024px" m="0 auto">
        <Box mb="x2">
          <Heading1><span role="img" aria-label="Palette emoji">🎨</span> Colour</Heading1>
          <Text fontSize="24px" mb="x2">Colours are used to set a visual tone, communicate meaning, and create a cohesive experience between Nulogy products and the physical environment. We are committed to complying with WCAG AA contrast ratios.</Text>
          <Text fontSize="24px" mb="x6"><Link href={FIGMA_LINK} fontSize="24px">View colours in Figma</Link> | <Link href="/theme" fontSize="24px">View theme file</Link></Text>
        </Box>
        <Heading2>Text & Interactive Colours</Heading2>
        <Text fontSize="24px" mb="x4">These colours are generally used for text, links and other interactive elements.</Text>
        <Text fontSize="24px" mb="x4"></Text>
        <Flex>
          <Palette name="black" colour={theme.colors.black} context="The default text colour." />
          <Palette name="blackBlue" colour={theme.colors.blackBlue} />
          <Palette name="darkBlue" colour={theme.colors.darkBlue} />
        </Flex>
        <Flex mb="x6">
          <Palette name="blue" colour={theme.colors.blue} context="The default link colour." />
          <Palette name="lightBlue" colour={theme.colors.lightBlue} />
        </Flex>
        <Divider mb="x6" />
        <Heading2>UI & Background Colours</Heading2>
        <Text fontSize="24px" mb="x4">These colours are generally used to build out the backgrounds and layers in our user interfaces.</Text>
        <Flex>
          <Palette name="darkGrey" colour={theme.colors.blackGrey} />
          <Palette name="darkGrey" colour={theme.colors.darkGrey} />
          <Palette name="grey" colour={theme.colors.grey} />
          <Palette name="lightGrey" colour={theme.colors.lightGrey} />
          <Palette name="whiteGrey" colour={theme.colors.whiteGrey} />
          <Palette name="white" colour={theme.colors.white} />
        </Flex>
        <Divider mb="x6" />
        <Heading2>Contextual colours</Heading2>
        <Text fontSize="24px" mb="x4">For providing meaning. For accessibility reasons, make sure the colour is not the sole way of doing this.</Text>

        <Flex>
          <Palette name="red" colour={theme.colors.red} context="For dangerous and destructive actions" />
          <Palette name="red" colour={theme.colors.lightRed} context="Danger accent colour" />
          <Palette name="green" colour={theme.colors.green} context="To communicate success" />
        </Flex>
        <Flex>
          <Palette name="lightGreen" colour={theme.colors.lightGreen} context="Success accent colour" />
          <Palette name="yellow" colour={theme.colors.yellow} context="To warn about something non-destructive" />
          <Palette name="lightYellow" colour={theme.colors.lightYellow} context="Warning accent colour" />          
        </Flex>  
        <Divider mb="x6" />
        <Heading2>Categorical colours</Heading2>
        <Text fontSize="24px" mb="x4">These are used for charting and other data visualization. See <Link fontSize="24px" href="/patterns/data-visualization">Data Visualization</Link> for more information.</Text>
        <Flex>
          <Palette name="aqua" colour={theme.colors.categorical1} />
          <Palette name="purple" colour={theme.colors.categorical2} />
          <Palette name="pink" colour={theme.colors.categorical3} />
          <Palette name="turquoise" colour={theme.colors.categorical4} />
          <Palette name="orange" colour={theme.colors.categorical5} />
          <Palette name="avocado" colour={theme.colors.categorical6} />

        </Flex>                     
      </Box>
      <Box>
      </Box>
    </Page>
  )
}

export default IndexPage
