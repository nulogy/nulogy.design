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
    <StripedBorder />
      <Flex maxWidth="1300px" m="0 auto">
        <Box px="x3" py="x8" width="300px" height="100vh" overflow="scroll" position="fixed">
          <Navigation />
        </Box>
        <Transition location={location}>
            <Box padding="x6" marginLeft="300px">
                {children}
            </Box>
        </Transition>
      </Flex>
    </ApplicationFrame>
)

export default Layout