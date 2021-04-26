import React from "react"
import { Box, AnimatedBox, Flex, Heading1, Text, StatusIndicator, theme } from "@nulogy/components";
import styled from "styled-components";
import { motion } from "framer-motion";

const StripedBorder = () => (
  <Flex>
    <Box width={1 / 7} height="16px" backgroundColor="black" />
    <Box width={1 / 7} height="16px" backgroundColor="blackBlue" />
    <Box width={1 / 7} height="16px" backgroundColor="darkBlue" />
    <Box width={1 / 7} height="16px" backgroundColor="blue" />
    <Box width={1 / 7} height="16px" backgroundColor="lightBlue" />
    <Box width={1 / 7} height="16px" backgroundColor="lightYellow" />
    <Box width={1 / 7} height="16px" backgroundColor="#ffbb00" />
  </Flex>
)

const variants = {
  hover: {
    color: theme.colors.darkBlue,
    x: theme.space.x1,
    textDecoration: "underline"
  },
}

const titleVariants = {
  initial: {
    y: 200,
    opacity: 0
  },
  animated: {
    opacity: 1,
    y: 0
  }
}

const HomeLink = styled(motion.a)({
  fontSize: "24px",
  fontFamily: theme.fonts.mono,
  color: theme.colors.blue,
  display: "block",
  marginBottom: theme.space.x1
})

const HomeLinks = () => (
  <>
    <HomeLink href="/design-language" variants={variants} whileHover="hover">Design Language</HomeLink>
    <HomeLink href="/components/alert" variants={variants} whileHover="hover">Components</HomeLink>
    <HomeLink href="/">Content <StatusIndicator ml="x2">Coming soon</StatusIndicator></HomeLink>
    <HomeLink href="/patterns" variants={variants} whileHover="hover">Patterns</HomeLink>
    <HomeLink href="/resources" variants={variants} whileHover="hover">Resources</HomeLink>
  </>
)

const IndexPage = ({ location }) => {
  return (
    <>
      <StripedBorder />
      <Box maxWidth="960px" margin="auto" p="x3">
        <AnimatedBox variants={titleVariants} initial="initial" animate="animated"><Heading1 mt="x8" mb="x8">Nulogy Design System</Heading1></AnimatedBox>
        <Text fontSize="32px" mb="x8">Welcome to the Nulogy Design System: a collection of design decisions, components, and practices we use at Nulogy to ensure consistent and efficient UI design and development.</Text>
        <HomeLinks />
      </Box>
    </>
  )
}

export default IndexPage
