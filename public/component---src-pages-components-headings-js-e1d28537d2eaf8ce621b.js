(window.webpackJsonp = window.webpackJsonp || []).push([
  [24],
  {
    "+UGG": function(e, n, a) {
      "use strict";
      a.r(n);
      var t = a("q1tI"),
        l = a.n(t),
        r = a("TJpk"),
        c = a("xj1T"),
        o = a.n(c),
        i = a("yoZo"),
        m = a("Kvkj"),
        d = a("ttvI"),
        u = [
          {
            name: "className",
            type: "String",
            defaultValue: "undefined",
            description: "className passed to the heading component"
          }
        ];
      n.default = function() {
        return l.a.createElement(
          m.h,
          null,
          l.a.createElement(
            r.Helmet,
            null,
            l.a.createElement("title", null, "Headings")
          ),
          l.a.createElement(
            m.e,
            null,
            l.a.createElement(i.x, null, "Headings"),
            l.a.createElement(
              m.f,
              null,
              "There are four level of headings available to provide hierarchy in an application."
            )
          ),
          l.a.createElement(
            m.a,
            null,
            l.a.createElement(i.x, null, "Heading 1"),
            l.a.createElement(i.y, null, "Heading 2"),
            l.a.createElement(i.z, null, "Heading 3"),
            l.a.createElement(i.z, null, "Heading 4"),
            l.a.createElement(
              o.a,
              { className: "js" },
              'import { Heading1, Heading2, Heading3, Heading4 } from "@nulogy/components";\n\n<Heading1>Heading 1</Heading1>\n<Heading2>Heading 2</Heading2>\n<Heading3>Heading 3</Heading3>\n<Heading4>Heading 4</Heading4>\n'
            ),
            l.a.createElement(
              i.b,
              { type: "warning" },
              "The Title, SectionTitle, and SubsectionTitle naming convention has been replaced with Headings 1-3. The old names are currently deprecated and will be removed from a future version of @nulogy/components."
            )
          ),
          l.a.createElement(
            m.a,
            null,
            l.a.createElement(i.y, null, "Props"),
            l.a.createElement(m.i, { propsRows: u }),
            l.a.createElement(
              m.c,
              { mt: "x3" },
              "Heading components extend ",
              l.a.createElement(i.E, { href: "/components/Text" }, "Text"),
              ", and thus have access to ",
              l.a.createElement(m.d, null, "typography"),
              ",",
              " ",
              l.a.createElement(m.d, null, "colour"),
              ", and ",
              l.a.createElement(m.d, null, "space"),
              " ",
              "style props. See the",
              " ",
              l.a.createElement(
                i.E,
                { href: "/guides/style-props" },
                "style prop documentation"
              ),
              " for a full list of available props."
            )
          ),
          l.a.createElement(
            m.a,
            null,
            l.a.createElement(i.y, null, "Related components"),
            l.a.createElement(
              i.F,
              null,
              l.a.createElement(
                i.G,
                null,
                l.a.createElement(i.E, { href: "/components/text" }, "Text")
              )
            )
          ),
          l.a.createElement(
            m.a,
            null,
            l.a.createElement(i.y, null, "Resources"),
            l.a.createElement(
              i.F,
              null,
              l.a.createElement(
                i.G,
                null,
                l.a.createElement(i.E, { href: "/theme/" }, "NDS theme")
              ),
              l.a.createElement(
                i.G,
                null,
                l.a.createElement(
                  i.E,
                  { href: d.a + "headings--title" },
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
          return l;
        }),
        a.d(n, "b", function() {
          return r;
        });
      var t = "https://storybook.nulogy.design/?path=/story/",
        l = t + "components-",
        r = t + "pages-";
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-headings-js-e1d28537d2eaf8ce621b.js.map
