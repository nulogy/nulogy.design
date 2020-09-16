(window.webpackJsonp = window.webpackJsonp || []).push([
  [28],
  {
    qp64: function(e, n, t) {
      "use strict";
      t.r(n);
      var l = t("q1tI"),
        a = t.n(l),
        r = t("TJpk"),
        o = t("xj1T"),
        u = t.n(o),
        c = t("yoZo"),
        i = t("Kvkj"),
        s = t("ttvI"),
        m = [
          {
            name: "href",
            type: "String",
            defaultValue: "Required",
            description: "The destination."
          },
          {
            name: "color",
            type: "String",
            defaultValue: "blue",
            description: "A custom colour to display the link in."
          },
          {
            name: "hover",
            type: "String",
            defaultValue: "Color darkened by 10%",
            description: "A custom hover colour"
          },
          {
            name: "underline",
            type: "Boolean",
            defaultValue: !0,
            description: "Whether to show an underline or not."
          },
          {
            name: "className",
            type: "String",
            defaultValue: "undefined",
            description: "className passed to the link component."
          }
        ];
      n.default = function() {
        return a.a.createElement(
          i.h,
          null,
          a.a.createElement(
            r.Helmet,
            null,
            a.a.createElement("title", null, "Link")
          ),
          a.a.createElement(
            i.e,
            null,
            a.a.createElement(c.fb, null, "Link"),
            a.a.createElement(
              i.f,
              null,
              "A styled ",
              a.a.createElement("em", null, "a"),
              " tag that can be used to send users to a URL."
            )
          ),
          a.a.createElement(
            i.a,
            null,
            a.a.createElement(
              c.E,
              { href: "http://nulogy.design" },
              "nulogy.design"
            ),
            a.a.createElement(
              u.a,
              { className: "js" },
              'import { Link } from "@nulogy/components";\n\n<Link href="http://nulogy.design">nulogy.design</Link>\n'
            )
          ),
          a.a.createElement(
            i.a,
            null,
            a.a.createElement(c.T, null, "Variations"),
            a.a.createElement(
              c.d,
              { mb: "x4" },
              a.a.createElement(c.X, null, "Without an underline"),
              a.a.createElement(
                c.E,
                { href: "http://nulogy.design", underline: !1 },
                "nulogy.design"
              ),
              a.a.createElement(
                u.a,
                { className: "js" },
                '<Link href="http://nulogy.design" underline="false">nulogy.design</Link>'
              )
            ),
            a.a.createElement(
              c.d,
              { mb: "x4" },
              a.a.createElement(c.X, null, "With a custom colour"),
              a.a.createElement(
                c.E,
                { color: "black", hover: "red", href: "http://nulogy.design" },
                "nulogy.design"
              ),
              a.a.createElement(
                u.a,
                { className: "js" },
                '<Link color="black" hover="red" href="http://nulogy.design">nulogy.design</Link>'
              )
            )
          ),
          a.a.createElement(
            i.a,
            null,
            a.a.createElement(c.T, null, "Props"),
            a.a.createElement(i.i, { propsRows: m })
          ),
          a.a.createElement(
            i.a,
            null,
            a.a.createElement(c.T, null, "Resources"),
            a.a.createElement(
              c.F,
              null,
              a.a.createElement(
                c.G,
                null,
                a.a.createElement(
                  c.E,
                  { href: s.a + "link--link" },
                  "View in Storybook"
                )
              )
            )
          ),
          a.a.createElement(
            i.a,
            null,
            a.a.createElement(c.T, null, "Related components"),
            a.a.createElement(
              c.G,
              null,
              a.a.createElement(c.E, { href: "/components/buttons" }, "Buttons")
            )
          )
        );
      };
    },
    ttvI: function(e, n, t) {
      "use strict";
      t.d(n, "c", function() {
        return l;
      }),
        t.d(n, "a", function() {
          return a;
        }),
        t.d(n, "b", function() {
          return r;
        });
      var l = "https://storybook.nulogy.design/?path=/story/",
        a = l + "components-",
        r = l + "pages-";
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-link-js-8815527238c3c0c6a447.js.map
