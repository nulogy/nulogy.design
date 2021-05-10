import { ApplicationFrame, BrandedNavBar, Text, Link, Breadcrumbs, Page } from "@nulogy/components";
import { PropTypes } from 'react-view';
import React from 'react';


export const config = {
  componentName: "ApplicationFrame",
  scope: {
    ApplicationFrame,
    BrandedNavBar,
    Text,
    Link,
    Breadcrumbs,
    Link,
    Page
  },
  props: {
    navBar: {
      value: <BrandedNavBar menuData={{ primaryMenu: [{ name: "Menu Link", href: "/" }] }} />,
      type: PropTypes.ReactNode,
      description: "Places the navbar at the top of the frame."
    },
    children: {
      value: "Main content",
      type: PropTypes.String,
      description: "Inner content of the application goes here."
    }
  }
}