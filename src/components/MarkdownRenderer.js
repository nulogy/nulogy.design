import React from "react";
import {MDXProvider} from "@mdx-js/react";
import {Box, Page, Text, List, ListItem, Heading1, Heading2, Heading3} from "@nulogy/components";
import CodeBlock from "./CodeBlock"
import PropTable from "./PropTable"

function MarkdownRenderer({ children, pageContext }) {
  let frontmatter = pageContext.frontmatter; 

  console.log(pageContext);
  console.log(frontmatter);

  return (
    <MDXProvider components={{
      h1: Heading1,
      h2: (props) => <Heading2 mt="x6" {...props} />,
      h3: (props) => <Heading3 mt="x4" {...props} />,
      p: (props) => <Text fontSize="20px" mb="x4" {...props} />,
      blockquote: (props) => <Text fontSize="24px" mb="x4" {...props} />,
      ul: (props) => <List mb="x2" {...props} />,
      li: (props) => <ListItem fontSize="18px"  {...props} />,
      pre: (props) => <CodeBlock {...props} />,
      PropTable      
    }}>
      <Page>
        {children}
        {pageContext.body}
      </Page>
    </MDXProvider>
  );
}

export const pageQuery = graphql`
  query MyQuery {
    allMdx {
      nodes {
        frontmatter {
          title
        }
        body
      }
    }
  }
`;

export default MarkdownRenderer;