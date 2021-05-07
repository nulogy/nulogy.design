const path = require('path');

module.exports = {
  flags: {
    DEV_SSR: true
  },
  siteMetadata: {
    title: "nulogy.design",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `IBM Plex Sans`,
              variants: [`300`, `400`, `500`, `600`]
            },
            {
              family: `IBM Plex Mono`
            },
          ],
        },
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-remark-images",
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
        },
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1024,
            }
          }
        ]
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
    },
  ],
};
