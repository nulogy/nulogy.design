import React, { useEffect, useRef } from "react"
import { Box, Branding, List, StatusIndicator, Text, theme } from "@nulogy/components"
import styled from "styled-components";
import findMatchingPath from '../utils/findMatchingPath';
import { navigationLinks } from "../data/navigationLinks";
import { motion } from "framer-motion";



const variants = {
  hover: {
    paddingLeft: theme.space.x1,
    textDecoration: "underline",
  },
}

const NavigationLink = styled(motion.a)(({ selected }) => ({
  fontSize: "20px",
  color: selected ? theme.colors.yellow : theme.colors.white,
  display: "inline-block",
  paddingX: theme.space.half,
  textDecoration: "none",
  marginBottom: theme.space.x2,
}))

const sortedNavigationLinks = navigationLinks.map((navGroup) => {
  if (navGroup.name === "Components") {
    return ({
      ...navGroup,
      links: navGroup.links.sort((a, b) => a.name.localeCompare(b.name))
    })
  }
  return navGroup
});

const NavigationHeading = ({ children }) => (
  <Text fontSize="14px" color="whiteGrey" textTransform="uppercase" fontWeight="bold" marginY="x3" mb="x2">{children}</Text>
)

const Navigation = ({ location }) => {
  const selectedRef = useRef(null);

  useEffect(() => {
    if (selectedRef && selectedRef.current) {
      selectedRef.current.scrollIntoView({
        block: "center",
      });
    }
  }, [location]);

  return (
    <>
      <Box mb="x8" mt="-24px">
        <a style={{ textDecoration: "none" }} href="/" textDecoration="none"><Branding size="large" logoColor="white" withLine mt="x4" mb="x8" subtext="Design System" /></a>
      </Box>
      {sortedNavigationLinks.map(menuItem => (
        <Box mb="x6">
          <NavigationHeading>{menuItem.name}</NavigationHeading>
          <List pl="0">
            <>
              {menuItem.links.map(menuLink => {
                const selected = menuLink.name === findMatchingPath(location?.pathname)?.name;
                return (
                  <Text key={menuLink.href}><NavigationLink variants={variants} whileHover="hover" selected={selected} ref={selectedRef} href={menuLink.href}>{menuLink.name}</NavigationLink></Text>
                );
              })}
            </>
          </List>
        </Box>
      ))}
      <NavigationHeading>CONTENT <StatusIndicator ml="half">Coming soon</StatusIndicator></NavigationHeading>
    </>
  )
}

export default Navigation;