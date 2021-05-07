import React from "react";
import Layout from "./src/components/Layout";
import { NDSProvider } from "@nulogy/components";



export const wrapPageElement = ({ element, props }) => {
    let path = props.location?.pathName;

    return <NDSProvider>{path === '/' ? <div>{element}</div> : <Layout {...props}>{element}</Layout>}</NDSProvider>
}