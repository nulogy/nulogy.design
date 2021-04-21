import React from "react"
import {Box, Branding, List, StatusIndicator, Text, theme} from "@nulogy/components"
import styled from "styled-components";
import { navigationLinks } from "../data/navigationLinks";
import {motion} from "framer-motion";

const variants = {
  hover: {
    color: theme.colors.white,
    paddingLeft: theme.space.x1,
    textDecoration: "underline",
  },
}

const NavigationLink = styled(motion.a)({
  fontSize: "20px",
  color: theme.colors.white,
  display: "inline-block",
  paddingX: theme.space.half,
  textDecoration: "none",
  marginBottom: theme.space.x2
})

const NavigationHeading = ({children}) => (
  <Text fontSize="14px" color="whiteGrey" textTransform="uppercase" fontWeight="bold" marginY="x3" mb="x2">{children}</Text>
)

const Navigation = () => (
  <>
    <Box mb="x8" mt="-24px">
      <a style={{textDecoration: "none"}} href="/" textDecoration="none"><Branding size="large" logoColor="white" withLine mt="x4" mb="x8" subtext="Design System" /></a>
    </Box>
      {navigationLinks.map(menuItem => (
    <Box mb="x6">
      <NavigationHeading>{menuItem.name}</NavigationHeading>
      <List pl="0">
        <>
          {menuItem.links.map(menuLink => {
            return (
              <Text key={menuLink.href}><NavigationLink variants={variants} whileHover="hover" href={menuLink.href}>{menuLink.name}</NavigationLink></Text>
            );
          })}
        </>
      </List>
    </Box>
    ))}
    <NavigationHeading>CONTENT <StatusIndicator ml="half">Coming soon</StatusIndicator></NavigationHeading>
  </>
)

export default Navigation;