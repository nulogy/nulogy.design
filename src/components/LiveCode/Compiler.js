import React from "React";
import { Compiler as ReactViewCompiler } from 'react-view';
import { Box } from "@nulogy/components";

const Compiler = (props) => <Box py="x2">
  <ReactViewCompiler {...props} className="adding-this-class-removes-the-default-styling"/>
</Box>;

export default Compiler;