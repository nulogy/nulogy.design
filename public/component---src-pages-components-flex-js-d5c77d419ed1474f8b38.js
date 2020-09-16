(window.webpackJsonp = window.webpackJsonp || []).push([
  [21],
  {
    Kglh: function(e, t, l) {
      "use strict";
      l.r(t);
      var n = l("q1tI"),
        a = l.n(n),
        r = l("TJpk"),
        o = l("xj1T"),
        c = l.n(o),
        s = l("yoZo"),
        m = l("Kvkj"),
        u = l("ttvI"),
        i = [
          {
            name: "alignItems",
            type: "String",
            defaultValue: "stretch",
            description:
              "Sets align-items. Accepts flex-start, flex-end, center, or stretch."
          },
          {
            name: "flexDirection",
            type: "String",
            defaultValue: "row",
            description:
              "Set the flex-direction. Accepts row, column, row-reverse or column-reverse"
          },
          {
            name: "flexWrap",
            type: "String",
            defaultValue: "nowrap",
            description:
              "Set the flex-wrap. Accepts no-wrap, wrap, or wrap-reverse"
          },
          {
            name: "justifyContent",
            type: "String",
            defaultValue: "flex-start",
            description:
              "Sets justify-content. Accepts flex-start, flex-end, center, space-around, or space-evenly"
          },
          {
            name: "className",
            type: "String",
            defaultValue: "undefined",
            description: "className passed to the flex component."
          }
        ];
      t.default = function() {
        return a.a.createElement(
          m.h,
          null,
          a.a.createElement(
            r.Helmet,
            null,
            a.a.createElement("title", null, "Flex")
          ),
          a.a.createElement(
            m.e,
            null,
            a.a.createElement(s.fb, null, "Flex"),
            a.a.createElement(
              m.f,
              null,
              "A wrapper component that extends ",
              a.a.createElement(s.E, { href: "/components/Box" }, "Box"),
              " ",
              "to create layouts using Flexbox."
            )
          ),
          a.a.createElement(
            m.a,
            null,
            a.a.createElement(
              s.u,
              { bg: "lightBlue" },
              a.a.createElement(s.d, {
                width: 0.5,
                p: "x3",
                m: "x3",
                bg: "blackBlue"
              }),
              a.a.createElement(s.d, {
                width: 0.5,
                p: "x3",
                m: "x3",
                bg: "darkBlue"
              })
            ),
            a.a.createElement(
              c.a,
              { className: "js" },
              'import {Box, Flex} from "@nulogy/components";\n\n<Flex bg="lightBlue">\n  <Box width={1/2} p="x3" m="x3" bg="blackBlue"></Box>\n  <Box width={1/2} p="x3" m="x3" bg="darkBlue"></Box>\n</Flex>\n'
            )
          ),
          a.a.createElement(
            m.a,
            null,
            a.a.createElement(s.T, null, "Responsive"),
            a.a.createElement(
              m.c,
              null,
              "Like Box, all props can be used responsively by using an object that defines small, medium and/or large, based on the",
              " ",
              a.a.createElement(s.E, { href: "/theme" }, "theme.breakpoints"),
              " object"
            ),
            a.a.createElement(
              m.c,
              null,
              "This example displays columns on small screens and rows on large ones."
            ),
            a.a.createElement(
              s.u,
              {
                bg: "lightBlue",
                flexDirection: { extraSmall: "column", medium: "row" }
              },
              a.a.createElement(s.d, {
                width: 0.5,
                p: "x3",
                m: "x3",
                bg: "blackBlue"
              }),
              a.a.createElement(s.d, {
                width: 0.5,
                p: "x3",
                m: "x3",
                bg: "darkBlue"
              })
            ),
            a.a.createElement(
              c.a,
              { className: "js" },
              '<Flex bg="lightBlue" flexDirection={{extraSmall: "column", medium: "row"}}>\n  <Box width={1/2} p="x3" m="x3" bg="blackBlue"></Box>\n  <Box width={1/2} p="x3" m="x3" bg="darkBlue"></Box>\n</Flex>\n'
            )
          ),
          a.a.createElement(
            m.a,
            null,
            a.a.createElement(s.T, null, "Props"),
            a.a.createElement(
              m.c,
              null,
              "Because Flex is an extension of ",
              a.a.createElement(s.E, { href: "/components/box" }, "Box"),
              " ",
              "it accepts all the same props but adds the following:"
            ),
            a.a.createElement(m.i, { propsRows: i })
          ),
          a.a.createElement(
            m.a,
            null,
            a.a.createElement(s.T, null, "Related components"),
            a.a.createElement(
              s.F,
              null,
              a.a.createElement(
                s.G,
                null,
                a.a.createElement(s.E, { href: "/components/box" }, "Box")
              )
            )
          ),
          a.a.createElement(
            m.a,
            null,
            a.a.createElement(s.T, null, "Resources"),
            a.a.createElement(
              s.F,
              null,
              a.a.createElement(
                s.G,
                null,
                a.a.createElement(s.E, { href: "/theme/" }, "NDS theme")
              ),
              a.a.createElement(
                s.G,
                null,
                a.a.createElement(
                  s.E,
                  { href: u.a + "flex--flex" },
                  "View in Storybook"
                )
              )
            )
          )
        );
      };
    },
    ttvI: function(e, t, l) {
      "use strict";
      l.d(t, "c", function() {
        return n;
      }),
        l.d(t, "a", function() {
          return a;
        }),
        l.d(t, "b", function() {
          return r;
        });
      var n = "https://storybook.nulogy.design/?path=/story/",
        a = n + "components-",
        r = n + "pages-";
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-flex-js-d5c77d419ed1474f8b38.js.map
