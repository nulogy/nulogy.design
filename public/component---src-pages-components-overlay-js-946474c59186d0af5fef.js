(window.webpackJsonp = window.webpackJsonp || []).push([
  [35],
  {
    Up53: function(e, n, t) {
      "use strict";
      t.r(n);
      var a = t("q1tI"),
        o = t.n(a),
        c = (t("17x9"), t("TJpk")),
        l = t("xj1T"),
        r = t.n(l),
        m = t("3/HP"),
        s = t("Kvkj"),
        u = t("ttvI"),
        p = [
          {
            name: "dark",
            type: "Boolean",
            defaultValue: "false",
            description: "Controls the theming"
          }
        ];
      n.default = function() {
        return o.a.createElement(
          s.h,
          null,
          o.a.createElement(
            c.Helmet,
            null,
            o.a.createElement("title", null, "Overlay")
          ),
          o.a.createElement(
            s.e,
            null,
            o.a.createElement(m.fb, null, "Overlay"),
            o.a.createElement(
              s.f,
              null,
              "Overalay separates foreground with the background content."
            )
          ),
          o.a.createElement(
            s.a,
            null,
            o.a.createElement(
              m.d,
              { width: "100%", position: "relative" },
              o.a.createElement(
                m.bb,
                null,
                "Background content sample background content sample background content sample background content sample background content sample background content sample background content sample background content sample background content sample background content sample background content sample background content sample background content sample background content sample background content sample background content sample background content sample background content sample background content sample background content sample background content sample background content sample background content sample background content sample background content sample background content sample background content sample background content sample background content sample"
              ),
              o.a.createElement(
                m.N,
                { position: "absolute" },
                o.a.createElement(m.bb, null, "Foreground sample content")
              )
            ),
            o.a.createElement(
              r.a,
              { className: "js" },
              'import { Overlay } from "@nulogy/components";\n\n<Text>Background content sample</Text>\n\n<Overlay>\n  <Text>Foreground sample content</Text>\n</Overlay>\n'
            )
          ),
          o.a.createElement(
            s.a,
            null,
            o.a.createElement(m.T, null, "Themes"),
            o.a.createElement(
              m.bb,
              { mb: "x3" },
              "Overlay by default assigns light theme but dark theme is also available."
            ),
            o.a.createElement(
              m.d,
              { width: "100%", position: "relative" },
              o.a.createElement(
                m.bb,
                { p: "x3" },
                "Background content sample background content sample background content sample background content sample background content sample background content sample background content sample background content sample background content sample background content sample background content sample background content sample background content sample background content sample background content sample background content sample background content sample background content sample background content sample background content sample background content sample background content sample background content sample background content sample background content sample"
              ),
              o.a.createElement(
                m.N,
                { dark: !0, position: "absolute" },
                o.a.createElement(
                  m.j,
                  null,
                  o.a.createElement(m.bb, null, "Foreground sample content")
                )
              )
            ),
            o.a.createElement(
              r.a,
              { className: "js" },
              'import { Overlay } from "@nulogy/components";\n<Text>Background content sample</Text>\n<Overlay dark>\n  <Card>\n    <Text>Foreground sample content</Text>\n  </Card>\n</Overlay>\n'
            )
          ),
          o.a.createElement(
            s.a,
            null,
            o.a.createElement(m.T, null, "Props"),
            o.a.createElement(
              m.bb,
              { mb: "x3" },
              "In addition to this props listed below the Overlay component accepts",
              " ",
              o.a.createElement(m.E, { href: "/components/flex" }, "Flex's"),
              " props since it is it's extension."
            ),
            o.a.createElement(s.i, { propsRows: p })
          ),
          o.a.createElement(
            s.a,
            null,
            o.a.createElement(m.T, null, "Related components"),
            o.a.createElement(
              m.F,
              null,
              o.a.createElement(
                m.G,
                null,
                o.a.createElement(m.E, { href: "/components/modal" }, "Modal")
              ),
              o.a.createElement(
                m.G,
                null,
                o.a.createElement(
                  m.E,
                  { href: "/components/loading-animation" },
                  "LoadingAnimation"
                )
              )
            )
          ),
          o.a.createElement(
            s.a,
            null,
            o.a.createElement(m.T, null, "Resources"),
            o.a.createElement(
              m.F,
              null,
              o.a.createElement(
                m.G,
                null,
                o.a.createElement(
                  m.E,
                  { href: "".concat(u.a, "overlay") },
                  "View in Storybook"
                )
              )
            )
          )
        );
      };
    },
    ttvI: function(e, n, t) {
      "use strict";
      t.d(n, "c", function() {
        return a;
      }),
        t.d(n, "a", function() {
          return o;
        }),
        t.d(n, "b", function() {
          return c;
        });
      var a = "https://storybook.nulogy.design/?path=/story/",
        o = "".concat(a, "components-"),
        c = "".concat(a, "pages-");
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-overlay-js-946474c59186d0af5fef.js.map
