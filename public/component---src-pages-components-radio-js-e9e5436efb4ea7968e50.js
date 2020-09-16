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
      var l = a("t8Zj"),
        n = a("q1tI"),
        r = a.n(n),
        o = a("TJpk"),
        i = a("yoZo"),
        u = a("xj1T"),
        d = a.n(u),
        c = a("Kvkj"),
        s = a("YOuh"),
        m = a("ttvI"),
        p = [].concat(Object(l.a)(s.a), [
          {
            name: "checked",
            type: "boolean",
            defaultValue: "undefined",
            description:
              "Whether or not this radio button is the currently selected item in the group"
          }
        ]);
      t.default = function() {
        return r.a.createElement(
          c.h,
          null,
          r.a.createElement(
            o.Helmet,
            null,
            r.a.createElement("title", null, "Radio")
          ),
          r.a.createElement(
            c.e,
            null,
            r.a.createElement(i.fb, null, "Radio"),
            r.a.createElement(
              c.f,
              null,
              "Radio buttons allow one selection from a group of options"
            )
          ),
          r.a.createElement(
            c.a,
            null,
            r.a.createElement(i.R, { id: "radio", labelText: "Radio button" }),
            r.a.createElement(
              d.a,
              { className: "js" },
              'import { Radio } from "@nulogy/components";\n\n<Radio id="radio" labelText="Radio button" />'
            )
          ),
          r.a.createElement(
            c.a,
            null,
            r.a.createElement(i.T, null, "Use when"),
            r.a.createElement(
              i.F,
              null,
              r.a.createElement(
                i.G,
                null,
                "Users need to make a single choice from a set of mutually exclusive options"
              ),
              r.a.createElement(
                i.G,
                null,
                "In place of a dropdown when it would be beneficial to see all items up front"
              )
            )
          ),
          r.a.createElement(
            c.a,
            null,
            r.a.createElement(i.T, null, "Variations"),
            r.a.createElement(
              i.d,
              { mb: "x6" },
              r.a.createElement(i.X, null, "Disabled"),
              r.a.createElement(i.R, {
                id: "disabled-radio",
                labelText: "Radio button",
                disabled: !0
              }),
              r.a.createElement(
                d.a,
                { className: "js" },
                '<Radio id="disabled-radio" labelText="Radio button" disabled />'
              )
            ),
            r.a.createElement(
              i.d,
              { mb: "x6" },
              r.a.createElement(i.X, null, "Error"),
              r.a.createElement(i.R, {
                id: "error-radio",
                labelText: "Radio button",
                error: !0
              }),
              r.a.createElement(
                d.a,
                { className: "js" },
                '<Radio id="error-radio" labelText="Radio button" error />'
              )
            ),
            r.a.createElement(
              i.d,
              null,
              r.a.createElement(i.X, null, "Checked"),
              r.a.createElement(i.R, {
                id: "checked-radio",
                labelText: "Radio button",
                defaultChecked: "true"
              }),
              r.a.createElement(
                d.a,
                { className: "js" },
                '<Radio id="checked-radio" labelText="Radio button" defaultChecked="true" />'
              )
            )
          ),
          r.a.createElement(
            c.a,
            null,
            r.a.createElement(i.T, null, "Guidelines"),
            r.a.createElement(
              i.F,
              null,
              r.a.createElement(
                i.G,
                null,
                "Whenever possible use radio buttons for short lists (~ 5-7)"
              ),
              r.a.createElement(
                i.G,
                null,
                "Add labels, errors and default selections with",
                " ",
                r.a.createElement(
                  i.E,
                  { href: "/components/radio-group" },
                  "Radio Group"
                )
              ),
              r.a.createElement(
                i.G,
                null,
                "Consider using a ",
                r.a.createElement(
                  i.E,
                  { href: "/components/select" },
                  "Select"
                ),
                " for long lists"
              )
            )
          ),
          r.a.createElement(
            c.a,
            null,
            r.a.createElement(i.T, null, "Props"),
            r.a.createElement(c.i, { propsRows: p })
          ),
          r.a.createElement(
            c.a,
            null,
            r.a.createElement(i.T, null, "Related components"),
            r.a.createElement(
              i.F,
              null,
              r.a.createElement(
                i.G,
                null,
                r.a.createElement(
                  i.E,
                  { href: "/components/radio-group" },
                  "Radio group"
                )
              ),
              r.a.createElement(
                i.G,
                null,
                r.a.createElement(i.E, { href: "/components/form" }, "Form")
              )
            )
          ),
          r.a.createElement(
            c.a,
            null,
            r.a.createElement(i.T, null, "Resources"),
            r.a.createElement(
              i.F,
              null,
              r.a.createElement(
                i.G,
                null,
                r.a.createElement(
                  i.E,
                  { href: m.a + "radio--radio" },
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
        n = l + "components-",
        r = l + "pages-";
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-radio-js-e9e5436efb4ea7968e50.js.map
