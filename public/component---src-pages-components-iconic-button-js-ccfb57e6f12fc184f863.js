(window.webpackJsonp = window.webpackJsonp || []).push([
  [26],
  {
    rigT: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("q1tI"),
        l = n.n(a),
        c = n("TJpk"),
        o = n("xj1T"),
        r = n.n(o),
        u = n("3/HP"),
        i = n("Kvkj"),
        s = n("ttvI"),
        m = [
          {
            name: "icon",
            type: "String",
            defaultValue: "Required",
            description:
              "The icon to display. See the Icons component for all possible options."
          },
          {
            name: "labelHidden",
            type: "Boolean",
            defaultValue: "false",
            description:
              "Will display the label under the Iconic Button on hover or button focus."
          },
          {
            name: "disabled",
            type: "Boolean",
            defaultValue: "false",
            description:
              "Lightens the opacity and makes the button unable to be clicked."
          },
          {
            name: "className",
            type: "String",
            defaultValue: "undefined",
            description: "className passed to the button component."
          }
        ];
      t.default = function() {
        return l.a.createElement(
          i.h,
          null,
          l.a.createElement(
            c.Helmet,
            null,
            l.a.createElement("title", null, "Iconic Button")
          ),
          l.a.createElement(
            i.e,
            null,
            l.a.createElement(u.fb, null, "Iconic Button"),
            l.a.createElement(
              i.f,
              null,
              "A button that's an icon, with or without a label."
            )
          ),
          l.a.createElement(
            i.a,
            null,
            l.a.createElement(u.C, { icon: "delete" }),
            l.a.createElement(
              r.a,
              { className: "js" },
              'import { IconicButton } from "@nulogy/components";\n\n<IconicButton icon="delete" />\n'
            )
          ),
          l.a.createElement(
            i.a,
            null,
            l.a.createElement(u.T, null, "Use when"),
            l.a.createElement(
              u.F,
              null,
              l.a.createElement(
                u.G,
                null,
                "When a possible action would best be communicated via iconography"
              )
            )
          ),
          l.a.createElement(
            i.a,
            null,
            l.a.createElement(u.T, null, "Variations"),
            l.a.createElement(
              u.d,
              { mb: "x4" },
              l.a.createElement(u.X, null, "With a label"),
              l.a.createElement(u.C, { icon: "delete" }, "Delete"),
              l.a.createElement(
                r.a,
                { className: "js" },
                '<IconicButton icon="delete">Delete</IconicButton>'
              )
            ),
            l.a.createElement(
              u.d,
              { mb: "x4" },
              l.a.createElement(u.X, null, "With a hidden label"),
              l.a.createElement(
                u.C,
                { labelHidden: !0, icon: "delete" },
                "Delete"
              ),
              l.a.createElement(
                r.a,
                { className: "js" },
                '<IconicButton labelHidden icon="delete">Delete</IconicButton>'
              )
            ),
            l.a.createElement(
              u.d,
              { mb: "x4" },
              l.a.createElement(u.X, null, "Disabled"),
              l.a.createElement(
                u.C,
                { icon: "delete", disabled: !0 },
                "Delete"
              ),
              l.a.createElement(
                r.a,
                { className: "js" },
                '<IconicButton icon="delete" disabled>Delete</IconicButton>'
              )
            )
          ),
          l.a.createElement(
            i.a,
            null,
            l.a.createElement(u.T, null, "Props"),
            l.a.createElement(i.i, { propsRows: m }),
            l.a.createElement(
              i.c,
              { mt: "x3" },
              "IconicButtons have access to ",
              l.a.createElement(i.d, null, "space"),
              " style props. See the ",
              l.a.createElement(
                u.E,
                { href: "/guides/style-props" },
                "style prop documentation"
              ),
              " ",
              "for a full list of available props."
            )
          ),
          l.a.createElement(
            i.a,
            null,
            l.a.createElement(u.T, null, "Related components"),
            l.a.createElement(
              u.F,
              null,
              l.a.createElement(
                u.G,
                null,
                l.a.createElement(
                  u.E,
                  { href: "/components/buttons" },
                  "Buttons"
                )
              ),
              l.a.createElement(
                u.G,
                null,
                l.a.createElement(
                  u.E,
                  { href: "/components/button-group" },
                  "Button Group"
                )
              ),
              l.a.createElement(
                u.G,
                null,
                l.a.createElement(u.E, { href: "/components/icon" }, "Icons")
              )
            )
          ),
          l.a.createElement(
            i.a,
            null,
            l.a.createElement(u.T, null, "Resources"),
            l.a.createElement(
              u.F,
              null,
              l.a.createElement(
                u.G,
                null,
                l.a.createElement(
                  u.E,
                  { href: "".concat(s.a, "iconicbutton--with-label") },
                  "View in Storybook"
                )
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
          return c;
        });
      var a = "https://storybook.nulogy.design/?path=/story/",
        l = "".concat(a, "components-"),
        c = "".concat(a, "pages-");
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-iconic-button-js-ccfb57e6f12fc184f863.js.map
