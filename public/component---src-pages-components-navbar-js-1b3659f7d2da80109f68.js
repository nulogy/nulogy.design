(window.webpackJsonp = window.webpackJsonp || []).push([
  [34],
  {
    "Gs+v": function(e, n, a) {
      "use strict";
      a.r(n);
      var t = a("q1tI"),
        r = a.n(t),
        i = a("TJpk"),
        o = a("xj1T"),
        s = a.n(o),
        m = a("3/HP"),
        l = a("Kvkj"),
        c = a("ttvI"),
        u = [
          {
            name: "Dashboard",
            items: [
              { name: "Customers", href: "/" },
              { name: "Invoices", href: "/" }
            ]
          }
        ],
        d = [
          {
            name: "Settings",
            items: [
              { name: "Permissions", href: "/" },
              { name: "Manage account", href: "/" }
            ]
          }
        ],
        h = { onSubmit: function() {} },
        p = [
          {
            name: "menuData",
            type: "object",
            defaultValue: "null",
            description:
              "Data used to build link heirarchy and search functionality. See menuData Prop section below."
          },
          {
            name: "subtext",
            type: "string",
            defaultValue: "null",
            description: "The subtext under the logo."
          },
          {
            name: "brandingLinkHref",
            type: "string",
            defaultValue: "/",
            description: "The link href for the logo."
          },
          {
            name: "breakpointUpper",
            type: "number",
            defaultValue: "1024",
            description:
              "Provides the breakpoint where menu items will be collapsed into a dropdown menu."
          },
          {
            name: "breakpointLower",
            type: "number",
            defaultValue: "768",
            description:
              "Provides the breakpoint where the logo is collapsed from wordmark to lettermark."
          },
          {
            name: "themeColor",
            type: "string",
            defaultValue: "blue",
            description:
              'Color themeing of NavBar component, either "blue" or "white".'
          }
        ],
        b = [
          {
            name: "primaryMenu",
            type: "array of menu item objects",
            description:
              "Data to the main navigation menu, aligned to the left of the NavBar."
          },
          {
            name: "secondaryMenu",
            type: "array of menu item objects",
            description:
              "Data to the secondary navigation menu, aligned to the right of the NavBar."
          },
          {
            name: "search",
            type: "object",
            description: "Object's onSubmit key provides onSubmit to search."
          }
        ],
        y = [
          {
            name: "name",
            type: "string | node (required)",
            description: "Unique identifier for the menu item."
          },
          {
            name: "ariaLabel",
            type: "string",
            description:
              "Add an aria-label if the `name` value is not a readable label, like an icon."
          },
          {
            name: "href",
            type: "string",
            description:
              "URL or link to an element similar to a standard <a> tag, this causes the menu item to render as a link within the NavBar."
          },
          {
            name: "items",
            type: "array",
            description:
              "Array of menu item objects. This causes the menu item to render as a dropdown in desktop view or as a heading in mobile view."
          },
          {
            name: "render",
            type: "function",
            description:
              "Function that returns JSX. This causes the menu item to render as the JSX provided wrapped in a component that provides styling and an onClick handler to close the menu. NOTE: Do not use `href` and `items` keys if you intend to use the render function."
          }
        ];
      n.default = function() {
        return r.a.createElement(
          l.h,
          null,
          r.a.createElement(
            i.Helmet,
            null,
            r.a.createElement("title", null, "Navbar")
          ),
          r.a.createElement(
            l.e,
            null,
            r.a.createElement(m.fb, null, "Navbar"),
            r.a.createElement(
              l.f,
              null,
              "The NavBar holds the navigation for Nulogy applications and a global search."
            ),
            r.a.createElement(
              m.b,
              {
                type: "danger",
                title: "This component is being deprecated",
                mt: "x2"
              },
              "We're replacing this component with",
              " ",
              r.a.createElement(
                m.E,
                { href: "../branded-navbar" },
                "BrandedNavBar."
              ),
              " Please use that instead. If you're currently using this version of the NavBar and need assistance upgrading, reach out to the Design Ops team."
            )
          ),
          r.a.createElement(
            l.a,
            null,
            r.a.createElement(m.M, {
              menuData: { primaryMenu: u, secondaryMenu: d, search: h }
            }),
            r.a.createElement(
              s.a,
              { className: "js" },
              "import {NavBar} from \"@nulogy/components\";\n\nconst primaryMenu = [\n  {\n    name: 'Dashboard',\n    items: [\n      { name: 'Customers', href: '/' },\n      { name: 'Invoices', href: '/' },\n    ],\n  },\n  { name: 'Link', href: '/' },\n];\n\nconst secondaryMenu = [\n  {\n    name: 'Settings',\n    items: [\n      { name: 'Permissions', href: '/' },\n      { name: 'Manage account', href: '/' },\n    ],\n  },\n];\n\nconst search = {\n  onSubmit: () => {},\n};\n\n<NavBar menuData={ { primaryMenu, secondaryMenu, search } } />\n"
            )
          ),
          r.a.createElement(
            l.a,
            null,
            r.a.createElement(m.T, null, "Variations"),
            r.a.createElement(
              m.d,
              { mb: "x6" },
              r.a.createElement(m.X, null, "Primary menu only"),
              r.a.createElement(m.M, { menuData: { primaryMenu: u } }),
              r.a.createElement(
                s.a,
                { className: "js" },
                "<NavBar menuData={ { primaryMenu } } />"
              )
            ),
            r.a.createElement(
              m.d,
              { mb: "x6" },
              r.a.createElement(m.X, null, "With search"),
              r.a.createElement(m.M, {
                menuData: { primaryMenu: u, search: h }
              }),
              r.a.createElement(
                s.a,
                { className: "js" },
                "<NavBar menuData={ { primaryMenu, search } } />"
              )
            ),
            r.a.createElement(
              m.d,
              { mb: "x6" },
              r.a.createElement(m.X, null, "With secondary menu"),
              r.a.createElement(m.M, {
                menuData: { primaryMenu: u, search: h, secondaryMenu: d }
              }),
              r.a.createElement(
                s.a,
                { className: "js" },
                "<NavBar menuData={ { primaryMenu, secondaryMenu, search } } />"
              )
            )
          ),
          r.a.createElement(
            l.a,
            null,
            r.a.createElement(m.T, null, "Props"),
            r.a.createElement(l.i, { propsRows: p })
          ),
          r.a.createElement(
            l.a,
            null,
            r.a.createElement(
              m.d,
              { mb: "x6" },
              r.a.createElement(m.T, null, "menuData Prop"),
              r.a.createElement(
                m.bb,
                null,
                "The menuData prop is used to provide links to the NavBar, assemble their heirarchy, and provide the search field's onSubmit handler. The direct children in the menuData object are shown below:"
              ),
              r.a.createElement(
                s.a,
                { className: "js" },
                "const menuData = {\n  primaryMenu: [],\n  secondaryMenu: [],\n  search: {\n    onSubmit: () => (),\n  },\n}\n"
              ),
              r.a.createElement(l.g, { keyRows: b }),
              r.a.createElement(
                m.bb,
                { my: "x2" },
                "Not providing data for primaryMenu, secondaryMenu or search will result in those components not being included."
              )
            ),
            r.a.createElement(
              m.d,
              { mb: "x6" },
              r.a.createElement(m.X, null, "Adding menu items"),
              r.a.createElement(
                m.bb,
                { mb: "x2" },
                "Both primaryMenu and secondaryMenu expect an array of objects. Each object represents a link or a heading to a group of links under it, with the following shape:"
              ),
              r.a.createElement(
                s.a,
                { className: "js" },
                'const primaryMenu = [\n  {\n    name = "string",\n    href = "/",      // optional\n    render = ()=>(), // optional\n    items = [],      // optional\n  },\n]\n'
              ),
              r.a.createElement(
                m.bb,
                { mb: "x2" },
                'Each menu item object requires a "name" key. The "name" key will be used as the label for the menu item unless a "render" key is used. Adding "items" to the menu item object will render a dropdown with the specified items.'
              ),
              r.a.createElement(
                m.bb,
                { mb: "x2" },
                "Menu items can be nested within eachother using the items key for as many levels of heirarchy that is needed."
              ),
              r.a.createElement(l.g, { keyRows: y })
            )
          ),
          r.a.createElement(
            l.a,
            null,
            r.a.createElement(m.T, null, "Resources"),
            r.a.createElement(
              m.F,
              null,
              r.a.createElement(
                m.G,
                null,
                r.a.createElement(
                  m.E,
                  { href: "".concat(c.a, "navbar--navbar") },
                  "View in Storybook"
                )
              )
            )
          )
        );
      };
    },
    ttvI: function(e, n, a) {
      "use strict";
      a.d(n, "c", function() {
        return t;
      }),
        a.d(n, "a", function() {
          return r;
        }),
        a.d(n, "b", function() {
          return i;
        });
      var t = "https://storybook.nulogy.design/?path=/story/",
        r = "".concat(t, "components-"),
        i = "".concat(t, "pages-");
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-navbar-js-1b3659f7d2da80109f68.js.map
