(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    JtwO: function(t, e, n) {
      "use strict";
      n.r(e);
      var a = n("q1tI"),
        l = n.n(a),
        o = n("TJpk"),
        u = n("xj1T"),
        r = n.n(u),
        m = n("yoZo"),
        c = n("Kvkj"),
        i = n("ttvI"),
        s = [
          {
            name: "alignment",
            type: "String",
            defaultValue: "left",
            description:
              "Aligns the buttons within the group. One of left, spaced, or right."
          },
          {
            name: "className",
            type: "String",
            defaultValue: "undefined",
            description: "className passed to the button group component"
          }
        ];
      e.default = function() {
        return l.a.createElement(
          c.h,
          null,
          l.a.createElement(
            o.Helmet,
            null,
            l.a.createElement("title", null, "Button Group")
          ),
          l.a.createElement(
            c.e,
            null,
            l.a.createElement(m.fb, null, "Button Group"),
            l.a.createElement(
              c.f,
              null,
              "Button Groups associate a set of related buttons together."
            )
          ),
          l.a.createElement(
            c.a,
            null,
            l.a.createElement(
              m.i,
              null,
              l.a.createElement(m.P, null, "Button"),
              l.a.createElement(m.h, null, "Button"),
              l.a.createElement(m.h, null, "Button")
            ),
            l.a.createElement(
              r.a,
              { className: "js" },
              'import { ButtonGroup, Button, PrimaryButton } from "@nulogy/components";\n\n<ButtonGroup>\n  <PrimaryButton>Button</PrimaryButton>\n  <Button>Button</Button>\n  <Button>Button</Button>\n</ButtonGroup>\n'
            )
          ),
          l.a.createElement(
            c.a,
            null,
            l.a.createElement(m.T, null, "Use when"),
            l.a.createElement(
              m.F,
              null,
              l.a.createElement(
                m.G,
                null,
                "Always use the Button Group component when there are multiple buttons beside each other."
              )
            )
          ),
          l.a.createElement(
            c.a,
            null,
            l.a.createElement(m.T, null, "Variations"),
            l.a.createElement(
              m.d,
              { mb: "x6" },
              l.a.createElement(m.X, null, "Right-aligned"),
              l.a.createElement(
                m.bb,
                { mb: "x2" },
                "Button alignment is set to right when grouping actions associated with pages, tables, lists, or records."
              ),
              l.a.createElement(
                m.d,
                { bg: "whiteGrey", p: "x2" },
                l.a.createElement(
                  m.i,
                  { alignment: "right" },
                  l.a.createElement(m.P, null, "Button"),
                  l.a.createElement(m.h, null, "Button"),
                  l.a.createElement(m.h, null, "Button")
                )
              ),
              l.a.createElement(
                r.a,
                { className: "js" },
                'import { ButtonGroup, Button, PrimaryButton } from "@nulogy/components";\n\n<ButtonGroup alignment="right">\n  <PrimaryButton>Button</PrimaryButton>\n  <Button>Button</Button>\n  <Button>Button</Button>\n</ButtonGroup>\n'
              )
            ),
            l.a.createElement(
              m.d,
              { mb: "x6" },
              l.a.createElement(m.X, null, "Spaced"),
              l.a.createElement(
                m.bb,
                { mb: "x2" },
                "Button alignment is set to spaced when dealing with multi-step flows with previous and next buttons."
              ),
              l.a.createElement(
                m.d,
                { bg: "whiteGrey", p: "x2" },
                l.a.createElement(
                  m.i,
                  { alignment: "spaced" },
                  l.a.createElement(m.h, null, "Previous"),
                  l.a.createElement(m.P, null, "Next")
                )
              ),
              l.a.createElement(
                r.a,
                { className: "js" },
                'import { ButtonGroup, Button, PrimaryButton } from "@nulogy/components";\n\n<ButtonGroup alignment="spaced">\n  <PrimaryButton>Button</PrimaryButton>\n  <Button>Button</Button>\n  <Button>Button</Button>\n</ButtonGroup>\n'
              )
            )
          ),
          l.a.createElement(
            c.a,
            null,
            l.a.createElement(m.T, null, "Props"),
            l.a.createElement(c.i, { propsRows: s })
          ),
          l.a.createElement(
            c.a,
            null,
            l.a.createElement(m.T, null, "Related components"),
            l.a.createElement(
              m.F,
              null,
              l.a.createElement(
                m.G,
                null,
                l.a.createElement(m.E, { href: "/components/button" }, "Button")
              ),
              l.a.createElement(
                m.G,
                null,
                l.a.createElement(
                  m.E,
                  { href: "/components/iconic-button" },
                  "Iconic button"
                )
              )
            )
          ),
          l.a.createElement(
            c.a,
            null,
            l.a.createElement(m.T, null, "Resources"),
            l.a.createElement(
              m.F,
              null,
              l.a.createElement(
                m.G,
                null,
                l.a.createElement(
                  m.E,
                  { href: i.a + "buttongroup--buttongroup" },
                  "View in Storybook"
                )
              )
            )
          )
        );
      };
    },
    ttvI: function(t, e, n) {
      "use strict";
      n.d(e, "c", function() {
        return a;
      }),
        n.d(e, "a", function() {
          return l;
        }),
        n.d(e, "b", function() {
          return o;
        });
      var a = "https://storybook.nulogy.design/?path=/story/",
        l = a + "components-",
        o = a + "pages-";
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-button-group-js-9bfcb334229851771b6b.js.map
