(window.webpackJsonp = window.webpackJsonp || []).push([
  [38],
  {
    YOuh: function(e, t, a) {
      "use strict";
      t.a = [
        {
          name: "id",
          type: "String",
          defaultValue: "null",
          description: "A unique ID for this input"
        },
        {
          name: "name",
          type: "String",
          defaultValue: "undefined",
          description: "Identified that groups inputs together"
        },
        {
          name: "defaultChecked",
          type: "Boolean",
          defaultValue: "false",
          description: "Makes the field checked by default"
        },
        {
          name: "disabled",
          type: "Boolean",
          defaultValue: "false",
          description: "Marks the field as disabled and disallows user input"
        },
        {
          name: "error",
          type: "Boolean",
          defaultValue: "false",
          description: "Marks the field as invalid and turns red"
        },
        {
          name: "labelText",
          type: "String",
          defaultValue: "Required",
          description: "Label for the input"
        },
        {
          name: "onChange",
          type: "Function",
          defaultValue: "null",
          description: ""
        },
        {
          name: "required",
          type: "Boolean",
          defaultValue: "false",
          description:
            "Makes the field require input before the form will submit"
        },
        {
          name: "className",
          type: "String",
          defaultValue: "undefined",
          description: "className passed to the wrapper"
        }
      ];
    },
    "t3L+": function(e, t, a) {
      "use strict";
      a.r(t);
      var l = a("R7tm"),
        n = a.n(l),
        r = a("q1tI"),
        o = a.n(r),
        i = a("TJpk"),
        u = a("3/HP"),
        d = a("xj1T"),
        c = a.n(d),
        s = a("Kvkj"),
        m = a("YOuh"),
        p = a("ttvI"),
        f = [].concat(n()(m.a), [
          {
            name: "checked",
            type: "boolean",
            defaultValue: "undefined",
            description:
              "Whether or not this radio button is the currently selected item in the group"
          }
        ]);
      t.default = function() {
        return o.a.createElement(
          s.h,
          null,
          o.a.createElement(
            i.Helmet,
            null,
            o.a.createElement("title", null, "Radio")
          ),
          o.a.createElement(
            s.e,
            null,
            o.a.createElement(u.fb, null, "Radio"),
            o.a.createElement(
              s.f,
              null,
              "Radio buttons allow one selection from a group of options"
            )
          ),
          o.a.createElement(
            s.a,
            null,
            o.a.createElement(u.R, { id: "radio", labelText: "Radio button" }),
            o.a.createElement(
              c.a,
              { className: "js" },
              'import { Radio } from "@nulogy/components";\n\n<Radio id="radio" labelText="Radio button" />'
            )
          ),
          o.a.createElement(
            s.a,
            null,
            o.a.createElement(u.T, null, "Use when"),
            o.a.createElement(
              u.F,
              null,
              o.a.createElement(
                u.G,
                null,
                "Users need to make a single choice from a set of mutually exclusive options"
              ),
              o.a.createElement(
                u.G,
                null,
                "In place of a dropdown when it would be beneficial to see all items up front"
              )
            )
          ),
          o.a.createElement(
            s.a,
            null,
            o.a.createElement(u.T, null, "Variations"),
            o.a.createElement(
              u.d,
              { mb: "x6" },
              o.a.createElement(u.X, null, "Disabled"),
              o.a.createElement(u.R, {
                id: "disabled-radio",
                labelText: "Radio button",
                disabled: !0
              }),
              o.a.createElement(
                c.a,
                { className: "js" },
                '<Radio id="disabled-radio" labelText="Radio button" disabled />'
              )
            ),
            o.a.createElement(
              u.d,
              { mb: "x6" },
              o.a.createElement(u.X, null, "Error"),
              o.a.createElement(u.R, {
                id: "error-radio",
                labelText: "Radio button",
                error: !0
              }),
              o.a.createElement(
                c.a,
                { className: "js" },
                '<Radio id="error-radio" labelText="Radio button" error />'
              )
            ),
            o.a.createElement(
              u.d,
              null,
              o.a.createElement(u.X, null, "Checked"),
              o.a.createElement(u.R, {
                id: "checked-radio",
                labelText: "Radio button",
                defaultChecked: "true"
              }),
              o.a.createElement(
                c.a,
                { className: "js" },
                '<Radio id="checked-radio" labelText="Radio button" defaultChecked="true" />'
              )
            )
          ),
          o.a.createElement(
            s.a,
            null,
            o.a.createElement(u.T, null, "Guidelines"),
            o.a.createElement(
              u.F,
              null,
              o.a.createElement(
                u.G,
                null,
                "Whenever possible use radio buttons for short lists (~ 5-7)"
              ),
              o.a.createElement(
                u.G,
                null,
                "Add labels, errors and default selections with",
                " ",
                o.a.createElement(
                  u.E,
                  { href: "/components/radio-group" },
                  "Radio Group"
                )
              ),
              o.a.createElement(
                u.G,
                null,
                "Consider using a ",
                o.a.createElement(
                  u.E,
                  { href: "/components/select" },
                  "Select"
                ),
                " for long lists"
              )
            )
          ),
          o.a.createElement(
            s.a,
            null,
            o.a.createElement(u.T, null, "Props"),
            o.a.createElement(s.i, { propsRows: f })
          ),
          o.a.createElement(
            s.a,
            null,
            o.a.createElement(u.T, null, "Related components"),
            o.a.createElement(
              u.F,
              null,
              o.a.createElement(
                u.G,
                null,
                o.a.createElement(
                  u.E,
                  { href: "/components/radio-group" },
                  "Radio group"
                )
              ),
              o.a.createElement(
                u.G,
                null,
                o.a.createElement(u.E, { href: "/components/form" }, "Form")
              )
            )
          ),
          o.a.createElement(
            s.a,
            null,
            o.a.createElement(u.T, null, "Resources"),
            o.a.createElement(
              u.F,
              null,
              o.a.createElement(
                u.G,
                null,
                o.a.createElement(
                  u.E,
                  { href: "".concat(p.a, "radio--radio") },
                  "View in storybook"
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
//# sourceMappingURL=component---src-pages-components-radio-js-4197b9ede33b2e641646.js.map
