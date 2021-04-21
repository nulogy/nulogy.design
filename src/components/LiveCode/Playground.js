import React from 'react'
import { useView, Error } from 'react-view';
import Compiler from './Compiler';
import Editor from './Editor';
import Knobs from './Knobs';
import {Box} from "@nulogy/components";
import {CODE_WIDTH} from "../CONSTANTS";
import ActionButtons from './ActionButtons';

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
      <Box maxWidth={CODE_WIDTH} m="0 auto">
        <Compiler {...params.compilerProps} />
        <Knobs {...params.knobProps} />
        <Editor {...params.editorProps} />
        <Error {...params.errorProps} />
        <ActionButtons {...params.actions} code={params.editorProps.code} componentName={componentName}/>
      </Box>
    </>
  )
}