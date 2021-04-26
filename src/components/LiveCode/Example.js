import React, { useState, useEffect } from 'react'
import { useView, Error } from 'react-view';
import styled from 'styled-components';
import Compiler from './Compiler';
import Editor from './Editor';
import { Box } from "@nulogy/components";
import { CODE_WIDTH } from "../CONSTANTS";
import ActionButtons from './ActionButtons';

const CodeButton = styled.button(({ theme }) => ({
  background: "none",
  border: "none",
  fontWeight: "bold",
  color: theme.colors.darkBlue
}))

const getInitialCode = async (componentName, example) => {

  const codeExample = await import(`!!raw-loader!../../examples/${componentName.split(/(?=[A-Z])/).join('-').toLowerCase()}/${example}.jsx`);
  if (!codeExample.default || typeof codeExample.default !== 'string') return "";
  return codeExample.default
};

const Example = ({ componentName, scope, example, ...props }) => {
  const [code, setCode] = useState(null);
  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    if (!code) {
      getInitialCode(componentName, example).then((str) => setCode(str));
    }
  }, []);


  const params = useView({
    initialCode: code,
    scope,
    onUpdate: console.log,
  });

  return code && (
    <Box maxWidth={CODE_WIDTH} m="0 auto">
      <Compiler {...params.compilerProps} />
      { showCode &&
        <>
          <Editor {...params.editorProps} />
          <Error {...params.errorProps} />
          <ActionButtons {...params.actions} code={params.editorProps.code} componentName={componentName} />
        </>
      }
      <CodeButton onClick={() => setShowCode(!showCode)}>{showCode ? "</> Hide Code" : "</> Show Code"}</CodeButton>
    </Box>
  );
}

export default Example;