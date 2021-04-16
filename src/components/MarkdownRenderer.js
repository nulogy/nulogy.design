import React from "react";
import {MDXProvider} from "@mdx-js/react";
import {Text, Link, List, ListItem, Heading1, Heading2, Heading3} from "@nulogy/components";
import CodeBlock from "./CodeBlock"

function MarkdownRenderer({ children }) {
  return (
    <MDXProvider components={{
      h1: (props) => <Heading1 margin="0 auto" {...props} />,
      h1: Heading1,
      h2: (props) => <Heading2 mt="x6" {...props} />,
      h3: (props) => <Heading3  mt="x4" {...props} />,
      p: (props) => <Text mb="x4" {...props} />,
      blockquote: (props) => <Text fontSize="24px" mb="x4" {...props} />,
      ul: (props) => <List mb="x4" {...props} />,
      li: (props) => <ListItem  {...props} />,
      a: (props) => <Link {...props} />,
      pre: (props) => <CodeBlock {...props} />,
    }}>
      {children}
    </MDXProvider>
  );
}

export default MarkdownRenderer;