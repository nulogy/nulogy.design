import React, { useState } from 'react'
import { AnimatedBox, ApplicationFrame, Box } from "@nulogy/components";
import styled from "styled-components";
import Footer from "./Footer";
import Navigation from './Navigation'
import Transition from './Transition'
import Helmet from "./Helmet";

const Button = styled(Box)(({ isOpen, theme }) => ({
  border: "none",
  background: "none",
  position: "absolute",
  top: theme.space.x4,
  right: theme.space.x2,
  padding: theme.space.half,
  lineHeight: 0,
}));

const MenuButton = ({ isOpen, onClick }) => {
  const variant = isOpen ? "opened" : "closed";
  const top = {
    closed: {
      rotate: 0,
      translateY: 0
    },
    opened: {
      rotate: 45,
      translateY: 2,
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
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -10,
    }
  };
  const lineProps = {
    height: "2px",
    width: "20px",
    mb: "4px",
    bg: isOpen ? "white" : "darkBlue",
    initial: "closed",
    animate: variant,
  }
  return (
    <Button
      as="button"
      isOpen={isOpen}
      display={{ extraSmall: "block", medium: "none" }}
      onClick={onClick}
      aria-label={isOpen ? "close" : "open"}
      css={{
        "&:hover": {
          cursor: "pointer"
        }
      }}
    >
      <AnimatedBox
        variants={top}
        {...lineProps}
      />
      <AnimatedBox
        variants={center}
        {...lineProps}
      />
      <AnimatedBox
        variants={bottom}
        {...lineProps}
      />
    </Button>)
}

const Layout = ({ children, location, noPadding }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ApplicationFrame overflow={isOpen ? "hidden" : "auto"}>
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