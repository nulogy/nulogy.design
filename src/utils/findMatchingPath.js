import { navigationLinks } from "../data/navigationLinks";

const findMatchingPath = (pathname) => {
  const trimSlashes = path => path.replace(/^\/|\/$/g, "");
  const currentPath = trimSlashes(pathname || "");
  const allPages = navigationLinks.reduce((acc, menuItem) => [...menuItem.links, ...acc], []);
  const currentMenuItem = allPages.find(({ href }) => {
    return trimSlashes(href) === currentPath;
  });
  return currentMenuItem;
};

export default findMatchingPath;