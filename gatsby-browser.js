import React from "react";
import { NDSProvider } from "@nulogy/components";
import Layout from "./src/components/Layout"

export const wrapPageElement = ({ element, props }) => {
    let path = props.location.pathname;

    return <NDSProvider>{path === '/' ? <div>{element}</div> : <Layout {...props}>{element}</Layout>}</NDSProvider>
}