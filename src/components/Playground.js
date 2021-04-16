import React from 'react'
import { View } from "react-view"

export default ({ componentName, scope,  props}) => {
  return (
    <View
      componentName="Alert"
      props={props}
      scope={scope}
      imports={{
        "@nulogy/components": {
          named: [componentName]
        }
      }}
    />
  )
}