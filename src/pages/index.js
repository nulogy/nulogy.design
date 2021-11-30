import React from "react";
import {
  Alert,
  AnimatedBox,
  Box,
  Flex,
  Link,
  Heading1,
  Heading2,
  StatusIndicator,
  Text,
} from "@nulogy/components";
import Layout from "../components/Layout";
import { COPY_WIDTH, CODE_WIDTH, SLACK_LINK } from "../components/CONSTANTS";

const titleVariants = {
  initial: {
    y: 200,
    opacity: 0,
  },
  animated: {
    opacity: 1,
    y: 0,
  },
};

const IndexPage = ({ location }) => {
  return (
    <>
      <Layout noPadding location={location}>
        <Box
          display={{ extraSmall: "none", medium: "block" }}
          my="x2"
          mx="auto"
          position="absolute"
          top="0"
          right="0"
          maxWidth="400px"
        >
          <Alert title="We're hiring!">
            Are you an experienced front-end developer? Do you like building
            cool stuff? If so, <Link href="/developer">check this out</Link>.
          </Alert>
        </Box>
        <AnimatedBox
          minHeight="calc(100vh - 497px)"
          variants={titleVariants}
          initial="initial"
          animate="animated"
        >
          <Box maxWidth={COPY_WIDTH} mx="auto" my="128px" px="x4">
            <Heading1 mt="x8" mb="x8">
              nulogy.design
            </Heading1>
            <Text fontSize="24px" mb="x8">
              Welcome to the Nulogy Design System: a collection of design
              decisions, components, and practices we use at Nulogy to ensure
              consistent and efficient UI design and development.
            </Text>
          </Box>
          <Box
            maxWidth={{ extraSmall: COPY_WIDTH, medium: CODE_WIDTH }}
            mx="auto"
            mt="x8"
            px="x2"
          >
            <Flex px="x2" justifyContent="space-between">
              <Box width="49%">
                <Heading2>🎨 Designing</Heading2>
                <Text fontSize="20px" mb="x6">
                  The Nulogy Design System contains visual design guidelines,
                  patterns, and a UI kit built with Figma. Read the{" "}
                  <Link fontSize="20px" href="/guides/designers">
                    Designer's guide
                  </Link>{" "}
                  to learn more.
                </Text>
              </Box>
              <Box width="49%">
                <Heading2>👩‍💻 Developing</Heading2>
                <Text fontSize="20px" mb="x6">
                  NDS includes a React-based component library with all you need
                  to build an interface that looks like Nulogy. Read the{" "}
                  <Link fontSize="20px" href="/guides/developer-workflow">
                    Developer workflow
                  </Link>{" "}
                  to learn how.
                </Text>
              </Box>
            </Flex>
            <Flex px="x2" justifyContent="space-between">
              <Box width="49%">
                <Heading2>
                  ✏️ Writing{" "}
                  <StatusIndicator
                    type="informative"
                    style={{ position: "relative", top: "-3px" }}
                  >
                    NEW
                  </StatusIndicator>
                </Heading2>
                <Text fontSize="20px" mb="x6">
                  Visit the external{" "}
                  <Link
                    fontSize="20px"
                    mb="x6"
                    href="https://content.nulogy.design"
                  >
                    Content guide
                  </Link>{" "}
                  to learn best practices for writing in Nulogy's voice and
                  adhering to our grammar best practices.{" "}
                </Text>
              </Box>
              <Box width="49%">
                <Heading2>🙌🏼 Contributing</Heading2>
                <Text fontSize="20px" mb="x6">
                  If you work at Nulogy and see something missing or incorrect,
                  feel free to start a conversation in{" "}
                  <Link href={SLACK_LINK} fontSize="20px">
                    {" "}
                    #design-system
                  </Link>
                  .
                </Text>
              </Box>
            </Flex>
          </Box>
        </AnimatedBox>
      </Layout>
    </>
  );
};

export default IndexPage;
