import React from 'react';
import { Helmet as ReactHelmet } from "react-helmet";
import findMatchingPath from '../utils/findMatchingPath';

const Helmet = ({ location }) => {
  const currentMenuItem = findMatchingPath(location.pathname);
  return <ReactHelmet titleTemplate="%s | Nulogy Design System">
    <html lang="en" />
    <meta charSet="utf-8" />
    <title>{currentMenuItem?.title || currentMenuItem?.name}</title>
    <link
      href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,400,500,600"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono"
      rel="stylesheet"
    />
  </ReactHelmet>
};

export default Helmet;