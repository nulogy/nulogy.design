import React from 'react'
import {Box, Flex, ApplicationFrame} from "@nulogy/components";
import Navigation from './Navigation'
import Transition from './Transition'

const StripedBorder = () => {
  let colours = ['black', 'blackBlue', 'darkBlue', 'blue', 'lightBlue', 'lightYellow', 'yellow'];
  
  return (
    <Flex height="16px">
      {colours.map((colour) => (
        <Box key={colour} width={1/colours.length} backgroundColor={colour} />
      ))}
    </Flex>
  )
}

const Layout = ({ children, location }) => (
    <ApplicationFrame>
      <StripedBorder />
      <Flex m="0 auto">
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