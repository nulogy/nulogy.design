const React = require("react")
const Layout = require("./src/components/layout")
const { NDSProvider } = require("@nulogy/components");

exports.wrapRootElement = ({ element }) => {
    return (
        <NDSProvider>
            {element}
        </NDSProvider>
    )
}

exports.wrapPageElement = ({ element, props }) => {
    let path = props.location.pathname;

    return (path === '/' ? <div>{element}</div> : <Layout {...props}>{element}</Layout>)
}