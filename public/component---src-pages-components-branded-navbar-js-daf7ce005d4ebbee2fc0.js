(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    TN8o: function(e, n, a) {
      e.exports =
        a.p + "static/loremipsum-f541dea8d1074347ddfea637d297a02f.svg";
    },
    "ZF+f": function(e, n, a) {
      "use strict";
      a.r(n);
      var t = a("q1tI"),
        r = a.n(t),
        o = a("TJpk"),
        i = a("3/HP"),
        l = a("xj1T"),
        s = a.n(l),
        m = a("Kvkj"),
        u = a("ttvI"),
        c = a("TN8o"),
        d = a.n(c),
        p = [
          {
            name: "menuData",
            type: "object",
            defaultValue: "null",
            description:
              "Data used to build link heirarchy functionality. See menuData Prop section below."
          },
          {
            name: "subtext",
            type: "string",
            defaultValue: "null",
            description: "The subtext under the Nulogy logo."
          },
          {
            name: "environment",
            type: "string enum 'training'| 'development'",
            defaultValue: "undefined",
            description:
              "If defined, shows a blue banner above the navbar which indicates the set environment"
          },
          {
            name: "brandingLinkHref",
            type: "string",
            defaultValue: "/",
            description: "A custom link for the logo."
          },
          {
            name: "breakpointUpper",
            type: "number",
            defaultValue: "1024",
            description:
              "Provides the breakpoint where menu items will be collapsed into a dropdown menu."
          },
          {
            name: "logo",
            type: "string",
            defaultValue: "undefined",
            description: "A path to a logo file"
          }
        ],
        h = [
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
          }
        ],
        f = [
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
        ],
        y = [
          {
            name: "Dashboard",
            items: [
              { name: "Customers", href: "/" },
              { name: "Invoices", href: "/" }
            ]
          }
        ],
        g = [
          {
            name: "Settings",
            items: [
              { name: "Permissions", href: "/" },
              { name: "Manage account", href: "/" }
            ]
          }
        ];
      n.default = function() {
        return r.a.createElement(
          m.h,
          null,
          r.a.createElement(
            o.Helmet,
            null,
            r.a.createElement("title", null, "Branded NavBar")
          ),
          r.a.createElement(
            m.e,
            null,
            r.a.createElement(i.fb, null, "Branded NavBar"),
            r.a.createElement(
              m.f,
              null,
              "A light navigation bar that can optionally support a customer's logo."
            )
          ),
          r.a.createElement(
            m.a,
            null,
            r.a.createElement(i.e, {
              menuData: { primaryMenu: y, secondaryMenu: g },
              breakpointUpper: 0
            }),
            r.a.createElement(
              s.a,
              { className: "js" },
              "import {NavBar} from \"@nulogy/components\";\n\nconst primaryMenu = [\n  {\n    name: 'Dashboard',\n    items: [\n      { name: 'Customers', href: '/' },\n      { name: 'Invoices', href: '/' },\n    ],\n  },\n  { name: 'Link', href: '/' },\n];\n\nconst secondaryMenu = [\n  {\n    name: 'Settings',\n    items: [\n      { name: 'Permissions', href: '/' },\n      { name: 'Manage account', href: '/' },\n    ],\n  },\n];\n\n<BrandedNavBar menuData={ { primaryMenu, secondaryMenu } } />\n"
            )
          ),
          r.a.createElement(
            m.a,
            null,
            r.a.createElement(i.T, null, "Variations"),
            r.a.createElement(i.X, null, "With a customer logo"),
            r.a.createElement(
              m.c,
              null,
              "Providing a path to a logo via the ",
              r.a.createElement(m.d, null, "logo"),
              " prop will replace the logo on the left with a customer's, and add a Nulogy tag to the right side of the menu."
            ),
            r.a.createElement(i.e, {
              menuData: { primaryMenu: y, secondaryMenu: g },
              breakpointUpper: 0,
              subtext: "Quality control",
              logo: d.a
            }),
            r.a.createElement(
              s.a,
              { className: "js" },
              '<BrandedNavBar\n  menuData={{ primaryMenu, secondaryMenu }}\n  subtext="Quality control"\n  logo="../path-to-/sample-logo.png"\n/>'
            )
          ),
          r.a.createElement(
            m.a,
            null,
            r.a.createElement(i.T, null, "Props"),
            r.a.createElement(m.i, { propsRows: p })
          ),
          r.a.createElement(
            m.a,
            null,
            r.a.createElement(
              i.d,
              { mb: "x6" },
              r.a.createElement(i.T, null, "menuData Prop"),
              r.a.createElement(
                m.c,
                null,
                "The menuData prop is used to provide links to the NavBar and assemble their heirarchy. The direct children in the menuData object are shown below:"
              ),
              r.a.createElement(
                s.a,
                { className: "js" },
                "const menuData = {\n  primaryMenu: [],\n  secondaryMenu: [],\n}\n"
              ),
              r.a.createElement(m.g, { keyRows: h }),
              r.a.createElement(
                m.c,
                { my: "x2" },
                "Not providing data for primaryMenu, secondaryMenu will result in those components not being included."
              )
            ),
            r.a.createElement(
              i.d,
              { mb: "x6" },
              r.a.createElement(i.X, null, "Adding menu items"),
              r.a.createElement(
                m.c,
                { mb: "x2" },
                "Both primaryMenu and secondaryMenu expect an array of objects. Each object represents a link or a heading to a group of links under it, with the following shape:"
              ),
              r.a.createElement(
                s.a,
                { className: "js" },
                'const primaryMenu = [\n  {\n    name = "string",\n    href = "/",      // optional\n    render = ()=>(), // optional\n    items = [],      // optional\n  },\n]\n'
              ),
              r.a.createElement(
                m.c,
                { mb: "x2" },
                'Each menu item object requires a "name" key. The "name" key will be used as the label for the menu item unless a "render" key is used. Adding "items" to the menu item object will render a dropdown with the specified items.'
              ),
              r.a.createElement(
                m.c,
                { mb: "x2" },
                "Menu items can be nested within eachother using the items key for as many levels of heirarchy that is needed."
              ),
              r.a.createElement(m.g, { keyRows: f })
            )
          ),
          r.a.createElement(
            m.a,
            null,
            r.a.createElement(i.T, null, "Resources"),
            r.a.createElement(
              i.F,
              null,
              r.a.createElement(
                i.G,
                null,
                r.a.createElement(
                  i.E,
                  { href: "".concat(u.a, "brandednavbar--brandednavbar") },
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
          return o;
        });
      var t = "https://storybook.nulogy.design/?path=/story/",
        r = "".concat(t, "components-"),
        o = "".concat(t, "pages-");
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-branded-navbar-js-daf7ce005d4ebbee2fc0.js.map
