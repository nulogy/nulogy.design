(window.webpackJsonp = window.webpackJsonp || []).push([
  [44],
  {
    M8yo: function(e, t, a) {
      "use strict";
      a.r(t);
      var l = a("q1tI"),
        n = a.n(l),
        r = a("TJpk"),
        m = a("xj1T"),
        c = a.n(m),
        o = a("3/HP"),
        s = a("Kvkj"),
        i = a("ttvI"),
        u = [
          {
            name: "disabled",
            type: "Boolean",
            defaultValue: "false",
            description: "Lightens text to imply that it's disabled."
          },
          {
            name: "inline",
            type: "Boolean",
            defaultValue: "false",
            description: "Displays text inline instead of as a block."
          },
          {
            name: "className",
            type: "String",
            defaultValue: "undefined",
            description: "className passed to the text component."
          }
        ];
      t.default = function() {
        return n.a.createElement(
          s.h,
          null,
          n.a.createElement(
            r.Helmet,
            null,
            n.a.createElement("title", null, "Text")
          ),
          n.a.createElement(
            s.e,
            null,
            n.a.createElement(o.fb, null, "Text"),
            n.a.createElement(
              s.f,
              null,
              "Text allows you to control the font family, size colour, weight, line-height and alignment."
            )
          ),
          n.a.createElement(
            s.a,
            null,
            n.a.createElement(s.c, null, "Sample text"),
            n.a.createElement(
              c.a,
              { className: "js" },
              'import { Text } from "@nulogy/components";\n\n<Text>Sample text</Text>\n'
            )
          ),
          n.a.createElement(
            s.a,
            null,
            n.a.createElement(o.T, null, "Variations"),
            n.a.createElement(
              o.d,
              { mb: "x4" },
              n.a.createElement(o.X, null, "Alignment"),
              n.a.createElement(
                s.c,
                { textAlign: "left", mb: "0" },
                "Left-aligned text"
              ),
              n.a.createElement(
                s.c,
                { textAlign: "center", mb: "0" },
                "Center-aligned text"
              ),
              n.a.createElement(
                s.c,
                { textAlign: "right", mb: "0" },
                "Right-aligned text"
              ),
              n.a.createElement(
                c.a,
                { className: "js" },
                '<Text textAlign="left">Left-aligned text</Text>\n<Text textAlign="center">Center-aligned text</Text>\n<Text textAlign="right">Right-aligned text</Text>'
              )
            ),
            n.a.createElement(
              o.d,
              { mb: "x4" },
              n.a.createElement(o.X, null, "Colour"),
              n.a.createElement(
                s.c,
                null,
                "Color can be set to Nulogy using a reference to the",
                " ",
                n.a.createElement(o.E, { href: "/theme" }, "theme.colors"),
                " object."
              ),
              n.a.createElement(s.c, { color: "blue" }, "Blue text"),
              n.a.createElement(
                c.a,
                { className: "js" },
                '<Text color="blue">Blue text</Text>'
              )
            ),
            n.a.createElement(
              o.d,
              { mb: "x4" },
              n.a.createElement(o.X, null, "Disabled"),
              n.a.createElement(s.c, { disabled: !0 }, "Disabled text"),
              n.a.createElement(
                c.a,
                { className: "js" },
                "<Text disabled>Disabled text</Text>"
              )
            ),
            n.a.createElement(
              o.d,
              { mb: "x4" },
              n.a.createElement(o.X, null, "Inline"),
              n.a.createElement(s.c, { inline: !0 }, "Inline text "),
              n.a.createElement(
                s.c,
                { inline: !0 },
                "Doesn't cause a line break"
              ),
              n.a.createElement(
                c.a,
                { className: "js" },
                "<Text inline>Inline text </Text>\n<Text inline>Doesn't cause a line break</Text>"
              )
            ),
            n.a.createElement(
              o.d,
              { mb: "x4" },
              n.a.createElement(o.X, null, "Monospace"),
              n.a.createElement(s.c, { fontFamily: "mono" }, "Monospace text"),
              n.a.createElement(
                c.a,
                { className: "js" },
                '<Text fontFamily="mono">Monospace text</Text>'
              )
            ),
            n.a.createElement(
              o.d,
              { mb: "x4" },
              n.a.createElement(o.X, null, "Size"),
              n.a.createElement(
                s.c,
                null,
                "Font size can be set using a reference to the",
                " ",
                n.a.createElement(o.E, { href: "/theme" }, "theme.fontSizes"),
                " object."
              ),
              n.a.createElement(
                s.c,
                { fontSize: "smaller", mb: "0" },
                "Smaller text"
              ),
              n.a.createElement(
                s.c,
                { fontSize: "small", mb: "0" },
                "Small text"
              ),
              n.a.createElement(
                s.c,
                { fontSize: "medium", mb: "0" },
                "Medium text (default)"
              ),
              n.a.createElement(
                s.c,
                { fontSize: "large", mb: "0" },
                "Large text"
              ),
              n.a.createElement(
                s.c,
                { fontSize: "larger", mb: "0" },
                "Larger text"
              ),
              n.a.createElement(
                s.c,
                { fontSize: "largest", mb: "0" },
                "Largest text"
              ),
              n.a.createElement(
                c.a,
                { className: "js" },
                '<Text fontSize="smaller">Smaller text</Text>\n<Text fontSize="small">Small text</Text>\n<Text fontSize="medium">Medium text (default)</Text>\n<Text fontSize="large">Large</Text>\n<Text fontSize="larger">Larger</Text>\n<Text fontSize="largest">Largest</Text>'
              )
            ),
            n.a.createElement(
              o.d,
              { mb: "x4" },
              n.a.createElement(o.X, null, "Weight"),
              n.a.createElement(
                s.c,
                null,
                "Font weight can be set using a reference to the",
                " ",
                n.a.createElement(o.E, { href: "/theme" }, "theme.fontWeights"),
                " object."
              ),
              n.a.createElement(s.c, { fontWeight: "light", mb: "0" }, "Light"),
              n.a.createElement(
                s.c,
                { fontWeight: "normal", mb: "0" },
                "Normal (default)"
              ),
              n.a.createElement(
                s.c,
                { fontWeight: "medium", mb: "0" },
                "Medium bold"
              ),
              n.a.createElement(s.c, { fontWeight: "bold", mb: "0" }, "Bold"),
              n.a.createElement(
                c.a,
                { className: "js" },
                '<Text fontWeight="light">Light</Text>\n<Text fontWeight="normal">Normal (default)</Text>\n<Text fontWeight="medium">Medium bold</Text>\n<Text fontWeight="bold">Bold</Text>'
              )
            )
          ),
          n.a.createElement(
            s.a,
            null,
            n.a.createElement(o.T, null, "Responsive"),
            n.a.createElement(
              s.c,
              null,
              "All Text props can be used responsively by using an object that defines small, medium and/or large, based on the",
              " ",
              n.a.createElement(o.E, { href: "/theme" }, "theme.breakpoints"),
              " object"
            ),
            n.a.createElement(
              s.c,
              null,
              "This example displays columns on small screens and rows on large ones."
            ),
            n.a.createElement(
              s.c,
              { color: { extraSmall: "red", small: "blue", medium: "green" } },
              "Green text on large screens, blue on medium and red on small."
            ),
            n.a.createElement(
              c.a,
              { className: "js" },
              '<Text color={{ extraSmall: "red", small: "blue", medium: "green"}}>\n  Green text on large screens, blue on medium and red on small.\n</Text>'
            )
          ),
          n.a.createElement(
            s.a,
            null,
            n.a.createElement(o.T, null, "Props"),
            n.a.createElement(s.i, { propsRows: u }),
            n.a.createElement(
              s.c,
              { mt: "x3" },
              "Text components have access to ",
              n.a.createElement(s.d, null, "typography"),
              ",",
              " ",
              n.a.createElement(s.d, null, "colour"),
              ", and ",
              n.a.createElement(s.d, null, "space"),
              " ",
              "style props. See the",
              " ",
              n.a.createElement(
                o.E,
                { href: "/guides/style-props" },
                "style prop documentation"
              ),
              " for a full list of available props."
            )
          ),
          n.a.createElement(
            s.a,
            null,
            n.a.createElement(o.T, null, "Related components"),
            n.a.createElement(
              o.F,
              null,
              n.a.createElement(
                o.G,
                null,
                n.a.createElement(
                  o.E,
                  { href: "/components/headings" },
                  "Headings"
                )
              )
            )
          ),
          n.a.createElement(
            s.a,
            null,
            n.a.createElement(o.T, null, "Resources"),
            n.a.createElement(
              o.F,
              null,
              n.a.createElement(
                o.G,
                null,
                n.a.createElement(o.E, { href: "/theme/" }, "NDS theme")
              ),
              n.a.createElement(
                o.G,
                null,
                n.a.createElement(
                  o.E,
                  { href: "".concat(i.a, "text--text") },
                  "View in Storybook"
                )
              )
            )
          )
        );
      };
    },
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
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-text-js-7c5c6fddc84b2db46538.js.map
