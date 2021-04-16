import * as React from "react"
import {Box, Flex, Page, Heading1, Heading2, Link, Text, theme} from "@nulogy/components";

const Palette = ({colour, name, context}) => (
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
      <Text fontSize="small"><Text inline fontWeight="bold">Context:</Text>{context}</Text>
    </Box>
  );

const HorizontalRule = () => (<Box height="2px" backgroundColor="whiteGrey" my="x6" />)

const links = { 
    figma: "https://www.figma.com/file/jRQxfwCL27gfqfrdCxOIQG/?node-id=105%3A53",
    theme: "",
}

const IndexPage = ({location}) => {
  return (
    <Page title="" location={location}>
      <Box maxWidth="1024px">
          <Box p="x4" mb="x2" backgroundColor="whiteGrey">
            <Heading1><span role="img" aria-label="Palette emoji">🎨</span> Colour</Heading1>
            <Text fontSize="24px" mb="x2">Colours are used to set a visual tone, communicate meaning, and create a cohesive experience between Nulogy products and the physical environment. We are committed to complying with WCAG AA contrast ratios.</Text>
            <Text fontSize="24px" mb="x6"><Link href={links.figma} fontSize="24px">View colours in Figma</Link> | <Link href={links.figma} fontSize="24px">View theme file</Link></Text>
          </Box> 
          <Heading2>Text & Interactive Colours</Heading2>
          <Text fontSize="24px" mb="x4">These colours are used for text, links and other interactive elements.</Text>
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
          <HorizontalRule />
          <Heading2>UI & Background Colours</Heading2>
          <Text fontSize="24px" mb="x4">These colours are generally used to build out the backgrounds and layers in our user interfaces.</Text>
          <Flex>
              <Palette name="darkGrey" colour={theme.colors.darkGrey} />
          </Flex>
      </Box>
      <Box>
        <Text>Lorem</Text>
      </Box>
    </Page>
  )
}

export default IndexPage
