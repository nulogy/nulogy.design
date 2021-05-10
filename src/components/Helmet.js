import React from 'react';
import { Helmet as ReactHelmet } from "react-helmet";
import findMatchingPath from '../utils/findMatchingPath';

const Helmet = ({ location }) => {
  const currentMenuItem = findMatchingPath(location?.pathname);
  return <ReactHelmet titleTemplate="%s | Nulogy Design System">
    <html lang="en" />
    <meta charSet="utf-8" />
    <title>{currentMenuItem?.title || currentMenuItem?.name || "Welcome"}</title>
  </ReactHelmet>
};

export default Helmet;