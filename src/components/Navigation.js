import React from "react"
import {Box, Branding, List, StatusIndicator, Text, theme} from "@nulogy/components"
import styled from "styled-components";
import { navigationLinks } from "../data/navigationLinks";
import {motion} from "framer-motion";

const variants = {
  hover: {
    color: theme.colors.darkBlue,
    paddingLeft: theme.space.x1,
    textDecoration: "underline"
  },
}

const NavigationLink = styled(motion.a)({
  fontSize: "18px",
  color: theme.colors.blue,
  display: "inline-block",
  paddingX: theme.space.half,
  textDecoration: "none"
})

const Navigation = () => (
  <>
    <Box mb="x8" mt="-24px">
      <a style={{textDecoration: "none"}} href="/" textDecoration="none"><Branding size="large" withLine mt="x4" mb="x8" subtext="Design System" /></a>
    </Box>
    {navigationLinks.map(menuItem => (
      <Box mb="x6">
        <Text fontSize="small" color="darkGrey" textTransform="uppercase" fontWeight="bold" marginY="x3">{menuItem.name}</Text>
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
    <Text mb="x6" fontSize="small" color="darkGrey" textTransform="uppercase" fontWeight="bold" marginY="x3">CONTENT <StatusIndicator ml="half">Coming soon</StatusIndicator></Text>
  </>
)

export default Navigation;