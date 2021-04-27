import React from "react";
import Layout from "./src/components/Layout";
import { NDSProvider } from "@nulogy/components";

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