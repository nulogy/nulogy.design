(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    ttvI: function(e, t, a) {
      "use strict";
      a.d(t, "c", function() {
        return l;
      }),
        a.d(t, "a", function() {
          return n;
        }),
        a.d(t, "b", function() {
          return r;
        });
      var l = "https://storybook.nulogy.design/?path=/story/",
        n = "".concat(l, "components-"),
        r = "".concat(l, "pages-");
    },
    wVdv: function(e, t, a) {
      "use strict";
      a.r(t);
      var l = a("q1tI"),
        n = a.n(l),
        r = a("TJpk"),
        c = a("xj1T"),
        o = a.n(c),
        m = a("3/HP"),
        s = a("Kvkj"),
        u = a("ttvI"),
        d = [
          {
            name: "order",
            type: "number",
            defaultValue: "",
            description: "Sets the order to be used with Flex component"
          },
          {
            name: "className",
            type: "String",
            defaultValue: "undefined",
            description: "className passed to the box component."
          }
        ];
      t.default = function() {
        return n.a.createElement(
          s.h,
          null,
          n.a.createElement(
            r.Helmet,
            null,
            n.a.createElement("title", null, "Box")
          ),
          n.a.createElement(
            s.e,
            null,
            n.a.createElement(m.fb, null, "Box"),
            n.a.createElement(
              s.f,
              null,
              "A layout component for controlling width, margin, padding, colour and shadows."
            )
          ),
          n.a.createElement(
            s.a,
            null,
            n.a.createElement(
              m.d,
              { bg: "darkBlue", color: "white", p: "x3" },
              "Box"
            ),
            n.a.createElement(
              o.a,
              { className: "js" },
              'import { Box } from "@nulogy/components";\n\n<Box bg="darkBlue" color="white" p="x3">Box</Box>\n'
            )
          ),
          n.a.createElement(
            s.a,
            null,
            n.a.createElement(m.T, null, "Variations"),
            n.a.createElement(
              m.d,
              { mb: "x4" },
              n.a.createElement(m.X, null, "Width"),
              n.a.createElement(
                s.c,
                null,
                "Width can be set using a fraction or string."
              ),
              n.a.createElement(
                m.d,
                { bg: "lightBlue", p: "x3", width: 0.5 },
                "Half"
              ),
              n.a.createElement(
                m.d,
                { bg: "lightBlue", p: "x3", width: "200px" },
                "200px"
              ),
              n.a.createElement(
                o.a,
                { className: "js" },
                '<Box width={1/2}>Half</Box>\n<Box width="200px">200px</Box>'
              )
            ),
            n.a.createElement(
              m.d,
              { mb: "x4" },
              n.a.createElement(m.X, null, "Text Color"),
              n.a.createElement(
                s.c,
                null,
                "Color can be set using a reference to the",
                " ",
                n.a.createElement(m.E, { href: "/theme" }, "theme.colors"),
                " object."
              ),
              n.a.createElement(m.d, { color: "blue" }, "blue"),
              n.a.createElement(
                o.a,
                { className: "js" },
                '<Box color="blue">blue</Box>'
              )
            ),
            n.a.createElement(
              m.d,
              { mb: "x4" },
              n.a.createElement(m.X, null, "Background Color"),
              n.a.createElement(
                s.c,
                null,
                "Color can be set using a reference to the",
                " ",
                n.a.createElement(m.E, { href: "/theme" }, "theme.colors"),
                " object."
              ),
              n.a.createElement(m.d, { bg: "lightBlue" }, "lightBlue"),
              n.a.createElement(
                o.a,
                { className: "js" },
                '<Box bg="lightBlue">lightBlue</Box>'
              )
            ),
            n.a.createElement(
              m.d,
              { mb: "x4" },
              n.a.createElement(m.X, null, "Margins"),
              n.a.createElement(
                s.c,
                null,
                "Margins can be set using a reference to the",
                " ",
                n.a.createElement(m.E, { href: "/theme" }, "theme.space"),
                " object."
              ),
              n.a.createElement(m.d, { bg: "lightBlue", m: "x3" }, "x3 (24px)"),
              n.a.createElement(o.a, { className: "js" }, '<Box m="x3">x3</Box')
            ),
            n.a.createElement(
              m.d,
              { mb: "x4" },
              n.a.createElement(m.X, null, "Padding"),
              n.a.createElement(
                s.c,
                null,
                "Padding can be set using a reference to the",
                " ",
                n.a.createElement(m.E, { href: "/theme" }, "theme.space"),
                " object."
              ),
              n.a.createElement(m.d, { bg: "lightBlue", p: "x3" }, "x3 (24px)"),
              n.a.createElement(o.a, { className: "js" }, '<Box p="x3">x3</Box')
            ),
            n.a.createElement(
              m.d,
              { mb: "x4" },
              n.a.createElement(m.X, null, "Shadows"),
              n.a.createElement(
                s.c,
                null,
                "There are three shadows that can be set using a reference to the",
                " ",
                n.a.createElement(m.E, { href: "/theme" }, "theme.shadows"),
                " object."
              ),
              n.a.createElement(
                m.d,
                { p: "x3", boxShadow: "large" },
                "large shadow"
              ),
              n.a.createElement(
                o.a,
                { className: "js" },
                '<Box p="x3" boxShadow="large">large shadow</Box>'
              )
            ),
            n.a.createElement(
              m.d,
              { mb: "x4" },
              n.a.createElement(m.T, null, "Responsive"),
              n.a.createElement(
                s.c,
                null,
                "All Box props can be used responsively by using an object that defines small, medium and/or large, based on the",
                " ",
                n.a.createElement(m.E, { href: "/theme" }, "theme.breakpoints"),
                " object"
              ),
              n.a.createElement(
                m.d,
                {
                  color: { extraSmall: "red", small: "blue", medium: "green" }
                },
                "Green text on large screens, blue on medium and red on small."
              ),
              n.a.createElement(
                o.a,
                { className: "js" },
                '<Box color={{ extraSmall: "red", small: "blue", medium: "green"}}>\n  Green text on large screens, blue on medium and red on small.\n</Box>'
              )
            )
          ),
          n.a.createElement(
            s.a,
            null,
            n.a.createElement(m.T, null, "Props"),
            n.a.createElement(s.i, { propsRows: d }),
            n.a.createElement(
              s.c,
              { mt: "x3" },
              "The Box component has access to ",
              n.a.createElement(s.d, null, "space"),
              ",",
              " ",
              n.a.createElement(s.d, null, "colour"),
              ", ",
              n.a.createElement(s.d, null, "layout"),
              ",",
              " ",
              n.a.createElement(s.d, null, "border"),
              ", ",
              n.a.createElement(s.d, null, "boxShadow"),
              ",",
              " ",
              n.a.createElement(s.d, null, "textAlign"),
              ", and",
              " ",
              n.a.createElement(s.d, null, "position"),
              " style props. See the",
              " ",
              n.a.createElement(
                m.E,
                { href: "/guides/style-props" },
                "style prop documentation"
              ),
              " for a full list of available props."
            )
          ),
          n.a.createElement(
            s.a,
            null,
            n.a.createElement(m.T, null, "Related components"),
            n.a.createElement(
              m.F,
              null,
              n.a.createElement(
                m.G,
                null,
                n.a.createElement(m.E, { href: "/components/flex" }, "Flex")
              )
            )
          ),
          n.a.createElement(
            s.a,
            null,
            n.a.createElement(m.T, null, "Resources"),
            n.a.createElement(
              m.F,
              null,
              n.a.createElement(
                m.G,
                null,
                n.a.createElement(m.E, { href: "/theme/" }, "NDS theme")
              ),
              n.a.createElement(
                m.G,
                null,
                n.a.createElement(
                  m.E,
                  { href: "".concat(u.a, "box--box") },
                  "View in Storybook"
                )
              )
            )
          )
        );
      };
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-box-js-e3d6416eec90c7ba070a.js.map
