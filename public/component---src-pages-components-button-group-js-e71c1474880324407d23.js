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
        c = n("3/HP"),
        m = n("Kvkj"),
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
          m.h,
          null,
          l.a.createElement(
            o.Helmet,
            null,
            l.a.createElement("title", null, "Button Group")
          ),
          l.a.createElement(
            m.e,
            null,
            l.a.createElement(c.fb, null, "Button Group"),
            l.a.createElement(
              m.f,
              null,
              "Button Groups associate a set of related buttons together."
            )
          ),
          l.a.createElement(
            m.a,
            null,
            l.a.createElement(
              c.i,
              null,
              l.a.createElement(c.P, null, "Button"),
              l.a.createElement(c.h, null, "Button"),
              l.a.createElement(c.h, null, "Button")
            ),
            l.a.createElement(
              r.a,
              { className: "js" },
              'import { ButtonGroup, Button, PrimaryButton } from "@nulogy/components";\n\n<ButtonGroup>\n  <PrimaryButton>Button</PrimaryButton>\n  <Button>Button</Button>\n  <Button>Button</Button>\n</ButtonGroup>\n'
            )
          ),
          l.a.createElement(
            m.a,
            null,
            l.a.createElement(c.T, null, "Use when"),
            l.a.createElement(
              c.F,
              null,
              l.a.createElement(
                c.G,
                null,
                "Always use the Button Group component when there are multiple buttons beside each other."
              )
            )
          ),
          l.a.createElement(
            m.a,
            null,
            l.a.createElement(c.T, null, "Variations"),
            l.a.createElement(
              c.d,
              { mb: "x6" },
              l.a.createElement(c.X, null, "Right-aligned"),
              l.a.createElement(
                c.bb,
                { mb: "x2" },
                "Button alignment is set to right when grouping actions associated with pages, tables, lists, or records."
              ),
              l.a.createElement(
                c.d,
                { bg: "whiteGrey", p: "x2" },
                l.a.createElement(
                  c.i,
                  { alignment: "right" },
                  l.a.createElement(c.P, null, "Button"),
                  l.a.createElement(c.h, null, "Button"),
                  l.a.createElement(c.h, null, "Button")
                )
              ),
              l.a.createElement(
                r.a,
                { className: "js" },
                'import { ButtonGroup, Button, PrimaryButton } from "@nulogy/components";\n\n<ButtonGroup alignment="right">\n  <PrimaryButton>Button</PrimaryButton>\n  <Button>Button</Button>\n  <Button>Button</Button>\n</ButtonGroup>\n'
              )
            ),
            l.a.createElement(
              c.d,
              { mb: "x6" },
              l.a.createElement(c.X, null, "Spaced"),
              l.a.createElement(
                c.bb,
                { mb: "x2" },
                "Button alignment is set to spaced when dealing with multi-step flows with previous and next buttons."
              ),
              l.a.createElement(
                c.d,
                { bg: "whiteGrey", p: "x2" },
                l.a.createElement(
                  c.i,
                  { alignment: "spaced" },
                  l.a.createElement(c.h, null, "Previous"),
                  l.a.createElement(c.P, null, "Next")
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
            m.a,
            null,
            l.a.createElement(c.T, null, "Props"),
            l.a.createElement(m.i, { propsRows: s })
          ),
          l.a.createElement(
            m.a,
            null,
            l.a.createElement(c.T, null, "Related components"),
            l.a.createElement(
              c.F,
              null,
              l.a.createElement(
                c.G,
                null,
                l.a.createElement(c.E, { href: "/components/button" }, "Button")
              ),
              l.a.createElement(
                c.G,
                null,
                l.a.createElement(
                  c.E,
                  { href: "/components/iconic-button" },
                  "Iconic button"
                )
              )
            )
          ),
          l.a.createElement(
            m.a,
            null,
            l.a.createElement(c.T, null, "Resources"),
            l.a.createElement(
              c.F,
              null,
              l.a.createElement(
                c.G,
                null,
                l.a.createElement(
                  c.E,
                  { href: "".concat(i.a, "buttongroup--buttongroup") },
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
        l = "".concat(a, "components-"),
        o = "".concat(a, "pages-");
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-button-group-js-e71c1474880324407d23.js.map
