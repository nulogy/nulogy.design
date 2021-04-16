import React from 'react'
import {Box, Flex, ApplicationFrame} from "@nulogy/components";
import Navigation from './Navigation'
import Transition from './Transition'

const StripedBorder = () => (
  <Flex height="16px">
    <Box width={1/7} backgroundColor="black" />
    <Box width={1/7} backgroundColor="blackBlue" />
    <Box width={1/7} backgroundColor="darkBlue" />
    <Box width={1/7} backgroundColor="blue" />
    <Box width={1/7} backgroundColor="lightBlue" /> 
    <Box width={1/7} backgroundColor="lightYellow" /> 
    <Box width={1/7} backgroundColor="yellow" /> 
  </Flex>
)

const Layout = ({ children, location }) => (
    <ApplicationFrame>
      <Flex>
        <Box position="fixed" height="100%" overflow="hidden auto" width="320px" as="aside" px="x8" py="x8" bg="darkBlue">
          <Navigation />
        </Box>
        <Box width="calc(100% - 320px)" marginLeft="320px">
        <Transition location={location}>
            <Box as="main" paddingTop="x6" paddingX="x8">
              <Box>{children}</Box>
            </Box>
        </Transition>
        </Box>
      </Flex>
    </ApplicationFrame>
)

export default Layout