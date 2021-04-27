import React from 'react'
import { Box, Flex, ApplicationFrame } from "@nulogy/components";
import Navigation from './Navigation'
import Transition from './Transition'
import { Helmet } from "react-helmet";

const StripedBorder = () => (
  <Flex height="16px">
    <Box width={1 / 7} backgroundColor="black" />
    <Box width={1 / 7} backgroundColor="blackBlue" />
    <Box width={1 / 7} backgroundColor="darkBlue" />
    <Box width={1 / 7} backgroundColor="blue" />
    <Box width={1 / 7} backgroundColor="lightBlue" />
    <Box width={1 / 7} backgroundColor="lightYellow" />
    <Box width={1 / 7} backgroundColor="yellow" />
  </Flex>
)

const Layout = ({ children, location }) => (
    <ApplicationFrame>
      <Helmet titleTemplate="%s | Nulogy Design System">
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>Welcome</title>
        <link
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,400,500,600"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono"
          rel="stylesheet"
        />
      </Helmet>
      <Box display={{medium: "flex"}}>
        <Box 
          width={{medium: "calc(100% - 320px)"}} 
          marginLeft={{medium: "320px"}}
        >
        <Transition location={location}>
            <Box as="main" 
              paddingTop="x6" 
              paddingX={{extraSmall: "x6", medium: "x8"}}
            >
              <Box mb="x6">{children}</Box>
            </Box>
        </Transition>
        </Box>
        <Box 
          as="aside" 
          position={{medium: "fixed"}}
          height={{medium: "100%"}}
          overflow={{medium: "hidden auto"}}
          width={{medium: "320px"}} 
          px="x8"
          py="x8"
          bg="darkBlue"
        >
          <Navigation location={location} />
        </Box>        
      </Box>
    </ApplicationFrame>
)

export default Layout