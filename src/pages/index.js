import React from "react"
import { Title, List, ListItem, Box, AnimatedBox, Flex, Heading1, Text, StatusIndicator, theme } from "@nulogy/components";
import styled from "styled-components";
import { motion } from "framer-motion";
import Layout from "../components/Layout"
import {COPY_WIDTH} from "../components/CONSTANTS";

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
        <HomeLink href="/design-language/colour" variants={variants} whileHover="hover">Developer workflow</HomeLink>
        <HomeLink href="/design-language/colour" variants={variants} whileHover="hover">Desiging with NDS</HomeLink>
        <HomeLink href="/components/alert" variants={variants} whileHover="hover">Components</HomeLink>
    </>
)

const IndexPage = ({ location }) => {
  return (
    <>
      <Layout location={location}>
      <AnimatedBox minHeight="calc(100vh - 497px)" maxWidth={COPY_WIDTH} m="0 auto" variants={titleVariants} initial="initial" animate="animated">
        <Heading1 mt="x8" mb="x8">Nulogy Design System</Heading1>
        <Text fontSize="24px" mb="x8">Welcome to the Nulogy Design System: a collection of design decisions, components, and practices we use at Nulogy to ensure consistent and efficient UI design and development.</Text>
        <HomeLinks />
      </AnimatedBox>
      </Layout>
    </>
  )
}

export default IndexPage
