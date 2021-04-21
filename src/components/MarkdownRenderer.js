import React from "react";
import {MDXProvider} from "@mdx-js/react";
import {Text, Link, List, ListItem, Heading1, Heading2, Heading3} from "@nulogy/components";
import CodeBlock from "./CodeBlock";
import Playground from "./LiveCode/Playground";
import Example from "./LiveCode/Example";
import PropsTable from "./PropsTable";
import {COPY_WIDTH} from "./CONSTANTS";

function MarkdownRenderer({ children }) {
  return (
    <MDXProvider components={{
      h1: (props) => <Heading1 maxWidth={COPY_WIDTH} m="0 auto" {...props} />,
      h2: (props) => <Heading2 maxWidth={COPY_WIDTH} mt="x6" mx="auto" {...props} />,
      h3: (props) => <Heading3 maxWidth={COPY_WIDTH}  mt="x4" mx="auto" {...props} />,
      p: (props) => <Text fontSize="20px" maxWidth={COPY_WIDTH} mb="x4" mx="auto" {...props} />,
      blockquote: (props) => <Text maxWidth={COPY_WIDTH} fontSize="24px" mb="x4" mx="auto" {...props} />,
      ul: (props) => <List fontSize="20px" maxWidth={COPY_WIDTH} mb="x4" mx="auto" {...props} />,
      li: (props) => <ListItem  maxWidth={COPY_WIDTH} {...props} />,
      a: (props) => <Link fontSize="20px" maxWidth={COPY_WIDTH} {...props} />,
      pre: (props) => <CodeBlock  maxWidth={COPY_WIDTH} {...props} />,
      Playground,
      Example,
      PropsTable
    }}>
      {children}
    </MDXProvider>
  );
}

export default MarkdownRenderer;