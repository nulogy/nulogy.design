import React from 'react'
import { useView, Error, ActionButtons } from 'react-view';
import Compiler from './Compiler';
import Editor from './Editor';
import Knobs from './Knobs';

export default ({ componentName, scope,  props}) => {
  const params = useView({
    componentName,
    props,
    scope,
    imports: {
      "@nulogy/components": {
        named: [componentName]
      }
    },
  });
  return (
    <>
      <Compiler {...params.compilerProps} />
      <Editor {...params.editorProps} />
      <Error {...params.errorProps} />
      <ActionButtons {...params.actions} />
    </>
  )
}