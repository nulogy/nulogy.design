import React from "react";
import { Editor as ReactViewEditor } from "react-view";
import { Box } from "@nulogy/components";
import vsDark from "prism-react-renderer/themes/vsDark";
import duotoneLight from "prism-react-renderer/themes/duotoneLight";

const Editor = ({ light, ...props }) => (
  <Box fontFamily="mono">
    <ReactViewEditor
      {...props}
      theme={light ? duotoneLight : vsDark}
      className="adding-this-class-removes-the-default-styling"
    />
  </Box>
);

export default Editor;
