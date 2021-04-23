module.exports = {
  siteMetadata: {
    title: "nulogy.design",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "xxx",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/MarkdownRenderer.js"),
        }
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Nulogy.design",
        short_name: "NDS",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: `${__dirname}/src/images/favicon.svg` // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
