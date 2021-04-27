import React, { useEffect, useRef, useState } from "react"
import { Box, Branding, List, StatusIndicator, Text, theme } from "@nulogy/components"
import styled from "styled-components";
import { navigationLinks } from "../data/navigationLinks";
import { motion } from "framer-motion";

const Button = styled(Box)(({ theme }) => ({
  border: "none",
  background: "none",
  color: theme.colors.darkBlue,
  position: "absolute",
  top: theme.space.x1,
  left: theme.space.x1,
  height: "24px",
  width: "24px"
}));


const MenuButton = ({ isOpen, onClick }) => {
  const unitWidth = "4"; // width of the lines
  const variant = isOpen ? "opened" : "closed";
  const top = {
    closed: {
      rotate: 0,
      translateY: 0
    },
    opened: {
      rotate: 45,
      translateY: 2
    }
  };
  const center = {
    closed: {
      opacity: 1
    },
    opened: {
      opacity: 0
    }
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0
    },
    opened: {
      rotate: -45,
      translateY: -2
    }
  };
  const lineProps = {
    stroke: "darkBlue",
    strokeWidth: "2",
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
  }
  return (<Button as="button" display={{ extraSmall: "block", medium: "none" }} onClick={onClick} >
    <motion.svg
      viewBox="0 0 4 4"
      overflow="visible"
      preserveAspectRatio="none"
      width="20px"
      height="20px"
    >
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="0"
        y2="0"
        variants={top}
        {...lineProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="2"
        y2="2"
        variants={center}
        {...lineProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="4"
        y2="4"
        variants={bottom}
        {...lineProps}
      />
    </motion.svg>
  </Button >)
}

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
  const trimSlashes = path => path.replace(/^\/|\/$/g, "");
  const currentPath = trimSlashes(location?.pathname || "");
  const selectedRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (selectedRef && selectedRef.current) {
      console.log("mount");
      selectedRef.current.scrollIntoView({
        block: "center",
      });
    }
  }, [location]);

  return (
    <>
      <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <Box mb="x8" mt="-24px">
        <a style={{ textDecoration: "none" }} href="/" textDecoration="none"><Branding size="large" logoColor="white" withLine mt="x4" mb="x8" subtext="Design System" /></a>
      </Box>
      {sortedNavigationLinks.map(menuItem => (
        <Box mb="x6">
          <NavigationHeading>{menuItem.name}</NavigationHeading>
          <List pl="0">
            <>
              {menuItem.links.map(menuLink => {
                const selected = trimSlashes(menuLink.href) === currentPath;
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