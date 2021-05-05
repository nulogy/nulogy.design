import React, { useState } from 'react'
import { ApplicationFrame, Box } from "@nulogy/components";
import styled from "styled-components";
import Footer from "./Footer";
import Navigation from './Navigation'
import Transition from './Transition'
import Helmet from "./Helmet";
import { motion } from "framer-motion";

const Button = styled(Box)(({ theme }) => ({
  border: "none",
  background: "none",
  position: "fixed",
  top: theme.space.x2,
  right: theme.space.x2,
  padding: 0,
  lineHeight: 0,
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
    stroke: isOpen ? "white" : "darkBlue",
    strokeWidth: "2",
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
  }
  return (
    <Button
      as="button"
      display={{ extraSmall: "block", medium: "none" }}
      onClick={onClick}
      css={{
        "&:hover": {
          cursor: "pointer"
        }
      }}
    >
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
    </Button>)
}

const Layout = ({ children, location, noPadding }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ApplicationFrame>
      <Helmet location={location} />
      <Box display={{ medium: "flex" }}>
        <Box
          width={{ medium: "calc(100% - 320px)" }}
          marginLeft={{ medium: "320px" }}
        >
          <Transition location={location}>
            <Box as="main"
              paddingTop={noPadding ? null : "x6"}
              paddingX={noPadding ? null : { extraSmall: "x6", medium: "x8" }}
            >
              <Box mb="x6">{children}</Box>
            </Box>
            <Footer />
          </Transition>
        </Box>
        <Box
          as="aside"
          position="fixed"
          top={isOpen && "0"}
          height="100%"
          overflow="auto"
          width={{ extraSmall: "100%", medium: "320px" }}
          px="x8"
          py="x8"
          opacity={{ extraSmall: isOpen ? "1" : "0", medium: "1" }}
          transition="opacity 0.2s linear"
          bg="darkBlue"
        >
          <Navigation location={location} />
        </Box>
        <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </Box>
    </ApplicationFrame>
  )
};

export default Layout