import { finaliseCSB, sendFilesToCSB } from "codesandboxer";

const html = `<div id="root" />`;
const index = `
import React from "react";
import ReactDOM from "react-dom";

import { NDSProvider } from '@nulogy/components';
import Example from "./example.js";

function App() {
  return <Example />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <>
    <link
      href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,400,500,600"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono"
      rel="stylesheet"
    />
    <NDSProvider>
      <App />
    </NDSProvider>
  </>,
  rootElement
);
`;

export const setupSandbox = async (title, source) => {
  try {
    const { parameters } = finaliseCSB(
      {
        files: {
          "public/index.html": { content: html },
          "src/index.js": { content: index },
          "src/example.js": { content: source },
        },
        deps: {
          "@nulogy/components": "latest",
          react: "17.0.2",
          "react-dom": "17.0.2",
          "react-scripts": "5.0.1",
          "@nulogy/icons": "latest",
          "styled-components": "5.3.7",
        },
      },
      {
        fileName: "src/example.js",
        name: title,
      }
    );
    const { sandboxId } = await sendFilesToCSB(parameters);
    return `https://codesandbox.io/s/${sandboxId}?module=src/example.js`;
  } catch (error) {
    console.error("Failed to set up code sandbox:", error);
    return null;
  }
};
