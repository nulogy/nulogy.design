import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Transition = ({ children, location }) => {
  const duration = 0.2;

  const variants = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: duration,
        delay: duration,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      delay: 5,
      transition: { duration: duration },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        key={location?.pathname}
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Transition;
