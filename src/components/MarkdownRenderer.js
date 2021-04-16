import React from "react";
import {MDXProvider} from "@mdx-js/react";
import {Text, List, ListItem, Heading1, Heading2, Heading3} from "@nulogy/components";
import CodeBlock from "./CodeBlock"
import PropTable from "./PropTable"

function MarkdownRenderer({ props, children, location }) {
  console.log(children);
  return (
    <MDXProvider components={{
      h1: Heading1,
      h2: (props) => <Heading2 mt="x6" {...props} />,
      h3: (props) => <Heading3 mt="x4" {...props} />,
      p: (props) => <Text fontSize="20px" mb="x4" {...props} />,
      blockquote: (props) => <Text fontSize="24px" mb="x4" {...props} />,
      ul: (props) => <List mb="x4" {...props} />,
      li: (props) => <ListItem fontSize="18px"  {...props} />,
      pre: (props) => <CodeBlock {...props} />,
    }}>
      {children}
      test
    </MDXProvider>
  );
}

export default MarkdownRenderer;