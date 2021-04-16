const path = require("path");

// this resolves a common error with 'fs' resolution https://www.gatsbyjs.com/docs/how-to/local-development/troubleshooting-common-errors/#issues-with-fs-resolution
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: "empty"
    }
  });
};