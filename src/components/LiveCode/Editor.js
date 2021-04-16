import React from 'react'
import { Editor as ReactViewEditor } from 'react-view';
import { Box } from "@nulogy/components";
import dracula from 'prism-react-renderer/themes/dracula';

const Editor = (props) => <Box fontFamily="mono">
  <ReactViewEditor {...props} theme={dracula} className="adding-this-class-removes-the-default-styling"/>
</Box>;

export default Editor;