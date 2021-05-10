import React from "react"
import {AnimatedBox, Box, Flex, Link, Heading1, Heading2, Text, theme } from "@nulogy/components";
import styled from "styled-components";
import { motion } from "framer-motion";
import Layout from "../components/Layout"
import {COPY_WIDTH, SLACK_LINK} from "../components/CONSTANTS";

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

const IndexPage = ({ location }) => {
  return (
    <>
      <Layout noPadding location={location}>
      <AnimatedBox minHeight="calc(100vh - 497px)" variants={titleVariants} initial="initial" animate="animated">
      <Box maxWidth={COPY_WIDTH} mx="auto" my="128px" px="x4">
        <Heading1 mt="x8" mb="x8">nulogy.design</Heading1>
        <Text fontSize="24px" mb="x8">Welcome to the Nulogy Design System: a collection of design decisions, components, and practices we use at Nulogy to ensure consistent and efficient UI design and development.</Text>
       </Box>
        <Box display={{medium: "flex"}} maxWidth={{extraSmall: COPY_WIDTH, medium: "1200px"}} mx="auto" mt="x8" px="x2">
            <Box width={{medium: 1/3}} px="x2">
                <Heading2>🎨 Designing</Heading2>
                <Text fontSize="20px" mb="x6">The Nulogy Design System contains visual design guidelines, patterns, and a UI kit built with Figma. Read the <Link fontSize="20px" href="/guides/designers">Designer's Guide</Link> to learn more.</Text>
            </Box>
            <Box width={{medium: 1/3}} px="x2">
                <Heading2>👩‍💻 Developing</Heading2>
                <Text fontSize="20px" mb="x6">NDS includes a React-based component library with all you need to build an interface that looks like Nulogy. Read the <Link fontSize="20px" href="/guides/developer-workflow">Developer workflow</Link> to learn how.</Text>
            </Box>
            <Box width={{medium: 1/3}} px="x2">
                <Heading2>🙌🏼 Contributing</Heading2>
                <Text fontSize="20px" mb="x6">If you work at Nulogy and see something missing or incorrect, feel free to start a conversation in <Link href={SLACK_LINK} fontSize="20px"> #design-system</Link>.</Text>
            </Box>
        </Box>
      </AnimatedBox>
      </Layout>
    </>
  )
}

export default IndexPage
