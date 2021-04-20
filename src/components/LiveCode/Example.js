import React, {useState, useEffect } from 'react'
import {useView, Error, ActionButtons } from 'react-view';
import Compiler from './Compiler';
import Editor from './Editor';

const getInitialCode = async (componentName, example) => {

  const codeExample = await import(`!!raw-loader!../../examples/${componentName.toLowerCase()}/${example}.jsx`);
  if (!codeExample.default || typeof codeExample.default !== 'string') return "";
  return codeExample.default
};

const Example = ({ componentName, scope, example, ...props}) => {
  const [ code, setCode ] = useState(null);
  const [ showCode, setShowCode ] = useState(false);

  useEffect(() => {
    getInitialCode(componentName, example).then((str) => setCode(str));
  }, []);


  const params = useView({
    initialCode: code,
    scope,
    onUpdate: console.log,
  });

  return code && (
    <>
      <Compiler {...params.compilerProps}/>
      { showCode &&
        <>
          <Editor {...params.editorProps} />
          <Error {...params.errorProps} />
          <ActionButtons {...params.actions} />
        </>
      }
      { showCode ? <button onClick={() => setShowCode(false)}>Hide Code</button> : <button onClick={() => setShowCode(true)}>Show Code</button>}
    </>
  );
}

export default Example;