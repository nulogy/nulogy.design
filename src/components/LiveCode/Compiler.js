import React from "react";
import { Compiler as ReactViewCompiler } from "react-view";
import { Box } from "@nulogy/components";

const Compiler = (props) => (
  <Box
    py="x2"
    height={props.compilerHeight}
    transform={props.containWithin && "translateZ(0)"}
  >
    <ReactViewCompiler
      {...props}
      className="adding-this-class-removes-the-default-styling"
    />
  </Box>
);

export default Compiler;
