const path = require("path");

// this resolves a common error with 'fs' resolution https://www.gatsbyjs.com/docs/how-to/local-development/troubleshooting-common-errors/#issues-with-fs-resolution
exports.onCreateWebpackConfig = ({ actions, plugins }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        path: require.resolve("path-browserify"),
        fs: false,
        Buffer: require.resolve("buffer"),
        assert: require.resolve("assert/"),
        os: require.resolve("os-browserify/browser"),
      },
    },
    plugins: [
      plugins.provide({
        Buffer: ["buffer", "Buffer"],
        process: ["process"],
      }),
    ],
  });
};
