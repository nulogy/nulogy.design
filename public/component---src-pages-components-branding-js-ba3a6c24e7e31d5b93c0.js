(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    "84CC": function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("q1tI"),
        l = n.n(a),
        r = n("TJpk"),
        i = n("yoZo"),
        c = n("xj1T"),
        o = n.n(c),
        m = n("Kvkj"),
        s = n("ttvI"),
        u = [
          {
            name: "size",
            type: "String",
            defaultValue: "medium",
            description: "Accepts small, medium or large."
          },
          {
            name: "logoColor",
            type: "String",
            defaultValue: "blue",
            description: "Accepts blue or white to set the logo color theme."
          },
          {
            name: "logoType",
            type: "String",
            defaultValue: "wordmark",
            description: "Accepts wordmark or lettermark to set the logo type."
          },
          {
            name: "subtext",
            type: "String",
            defaultValue: "null",
            description:
              "Subtext that is placed under the logo to specify the specific software product a user is interacting with."
          },
          {
            name: "withLine",
            type: "Bool",
            defaultValue: "false",
            description:
              "Horizontal line around the subtext, subtext must be defined."
          },
          {
            name: "alignment",
            type: "String",
            defaultValue: "right",
            description:
              "Accepts left, center, or right to align the logo and logo subtext."
          },
          {
            name: "className",
            type: "String",
            defaultValue: "undefined",
            description: "className passed to the branding component."
          }
        ];
      t.default = function() {
        return l.a.createElement(
          m.h,
          null,
          l.a.createElement(
            r.Helmet,
            null,
            l.a.createElement("title", null, "Branding")
          ),
          l.a.createElement(
            m.e,
            null,
            l.a.createElement(i.fb, null, "Branding"),
            l.a.createElement(
              m.f,
              null,
              "Branding is used to indicate that a user is interacting with Nulogy software."
            )
          ),
          l.a.createElement(
            m.a,
            null,
            l.a.createElement(i.f, null),
            l.a.createElement(
              o.a,
              { className: "js" },
              'import { Branding } from "@nulogy/components";\n\n<Branding/>\n'
            )
          ),
          l.a.createElement(
            m.a,
            null,
            l.a.createElement(i.T, null, "Variations"),
            l.a.createElement(
              m.c,
              null,
              "The following variations are available on the Branding component. Variations can be combined for the desired state."
            ),
            l.a.createElement(
              i.d,
              { mb: "x6" },
              l.a.createElement(i.X, null, "Lettermark"),
              l.a.createElement(i.f, { logoType: "lettermark" }),
              l.a.createElement(
                o.a,
                { className: "js" },
                '<Branding logoType="lettermark"/>'
              )
            ),
            l.a.createElement(
              i.d,
              { mb: "x6" },
              l.a.createElement(i.X, null, "White"),
              l.a.createElement(
                i.d,
                { bg: "black" },
                l.a.createElement(i.f, { logoColor: "white" })
              ),
              l.a.createElement(
                o.a,
                { className: "js" },
                '<Branding logoColor="white"/>'
              )
            ),
            l.a.createElement(
              i.d,
              { mb: "x6" },
              l.a.createElement(i.X, null, "Large"),
              l.a.createElement(i.f, { size: "large" }),
              l.a.createElement(
                o.a,
                { className: "js" },
                '<Branding size="large"/>'
              )
            ),
            l.a.createElement(
              i.d,
              { mb: "x6" },
              l.a.createElement(i.X, null, "With subtext"),
              l.a.createElement(i.f, { subtext: "Logo Subtext" }),
              l.a.createElement(
                o.a,
                { className: "js" },
                '<Branding subtext="Logo Subtext"/>'
              )
            ),
            l.a.createElement(
              i.d,
              { mb: "x6" },
              l.a.createElement(i.X, null, "Alignment"),
              l.a.createElement(
                i.u,
                { my: "x2", justifyContent: "space-between" },
                l.a.createElement(i.f, {
                  subtext: "Left Align",
                  alignment: "left"
                }),
                l.a.createElement(i.f, {
                  subtext: "Center Align",
                  alignment: "center"
                }),
                l.a.createElement(i.f, {
                  subtext: "Right Align",
                  alignment: "right"
                })
              ),
              l.a.createElement(
                o.a,
                { className: "js" },
                '<Flex justifyContent="space-between">\n  <Branding subtext="Left Align" alignment="left"/>\n  <Branding subtext="Center Align" alignment="center"/>\n  <Branding subtext="Right Align" alignment="right"/>\n</Flex>'
              )
            ),
            l.a.createElement(
              i.d,
              { mb: "x6" },
              l.a.createElement(i.X, null, "With Line"),
              l.a.createElement(i.f, {
                withLine: !0,
                alignment: "center",
                subtext: "Logo Subtext"
              }),
              l.a.createElement(
                o.a,
                { className: "js" },
                '<Branding withLine alignment="center" subtext="Logo Subtext"/>'
              )
            )
          ),
          l.a.createElement(
            m.a,
            null,
            l.a.createElement(i.T, null, "Props"),
            l.a.createElement(m.i, { propsRows: u })
          ),
          l.a.createElement(
            m.a,
            null,
            l.a.createElement(i.T, null, "Resources"),
            l.a.createElement(
              i.F,
              null,
              l.a.createElement(
                i.G,
                null,
                l.a.createElement(
                  i.E,
                  { href: s.a + "branding--branding" },
                  "View in Storybook"
                )
              )
            )
          ),
          l.a.createElement(
            m.a,
            null,
            l.a.createElement(i.T, null, "Related components"),
            l.a.createElement(
              i.F,
              null,
              l.a.createElement(
                i.G,
                null,
                l.a.createElement(i.E, { href: "/components/navbar" }, "NavBar")
              )
            )
          )
        );
      };
    },
    ttvI: function(e, t, n) {
      "use strict";
      n.d(t, "c", function() {
        return a;
      }),
        n.d(t, "a", function() {
          return l;
        }),
        n.d(t, "b", function() {
          return r;
        });
      var a = "https://storybook.nulogy.design/?path=/story/",
        l = a + "components-",
        r = a + "pages-";
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-branding-js-ba3a6c24e7e31d5b93c0.js.map
