import React from "react";
import {NDSProvider} from "@nulogy/components";
import Layout from "./src/components/Layout"

export const wrapRootElement = ({ element }) => {
    return (
        <NDSProvider>
          {element}
        </NDSProvider>
    )
}

export const wrapPageElement = ({ element, props }) => {
    let path = props.location.pathname;

    return (path === '/' ? <div>{element}</div> : <Layout {...props}>{element}</Layout>)
}