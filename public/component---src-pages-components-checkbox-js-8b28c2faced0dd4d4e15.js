(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    "8kQp": function(e, a, t) {
      "use strict";
      t.r(a);
      var n = t("R7tm"),
        l = t.n(n),
        c = t("q1tI"),
        r = t.n(c),
        o = t("TJpk"),
        i = t("3/HP"),
        u = t("xj1T"),
        s = t.n(u),
        m = t("Kvkj"),
        d = t("YOuh"),
        h = t("ttvI"),
        b = [].concat(l()(d.a), [
          {
            name: "checked",
            type: "Boolean",
            defaultValue: "false",
            description: "Whether or not the checkbox has been checked"
          },
          {
            name: "indeterminate",
            type: "boolean",
            defaultValue: "undefined",
            description:
              "Displays the checkbox in an indeterminate state if checked. You must use the checkbox as a controlled input (give the checked prop a value) when using this prop"
          },
          {
            name: "value",
            type: "String",
            defaultValue: "undefined",
            description:
              "The value of the checkbox that is submitted with the form. Required when using `indeterminate` checkbox."
          }
        ]);
      a.default = function() {
        return r.a.createElement(
          m.h,
          null,
          r.a.createElement(
            o.Helmet,
            null,
            r.a.createElement("title", null, "Checkbox")
          ),
          r.a.createElement(
            m.e,
            null,
            r.a.createElement(i.fb, null, "Checkbox"),
            r.a.createElement(
              m.f,
              null,
              "Checkboxes allow users to select any number of options from a list."
            )
          ),
          r.a.createElement(
            m.a,
            null,
            r.a.createElement(i.l, {
              id: "checkbox",
              labelText: "I am a checkbox"
            }),
            r.a.createElement(
              s.a,
              { className: "js" },
              'import { Checkbox } from "@nulogy/components";\n\n<Checkbox id="checkbox" labelText="I am a checkbox" />\n'
            )
          ),
          r.a.createElement(
            m.a,
            null,
            r.a.createElement(i.T, null, "Variations"),
            r.a.createElement(
              i.d,
              { mb: "x6" },
              r.a.createElement(i.X, null, "Disabled"),
              r.a.createElement(i.l, {
                labelText: "I am a checkbox",
                disabled: !0
              }),
              r.a.createElement(
                s.a,
                { className: "js" },
                '<Checkbox id="disabled-checkbox" labelText="I am a checkbox" disabled />'
              )
            ),
            r.a.createElement(
              i.d,
              { mb: "x6" },
              r.a.createElement(i.X, null, "Error"),
              r.a.createElement(i.l, {
                labelText: "I am a checkbox",
                error: !0
              }),
              r.a.createElement(
                s.a,
                { className: "js" },
                '<Checkbox id="error-checkbox" labelText="I am a checkbox" error />'
              )
            ),
            r.a.createElement(
              i.d,
              { mb: "x6" },
              r.a.createElement(i.X, null, "Default Checked"),
              r.a.createElement(i.l, {
                labelText: "I am a checkbox",
                defaultChecked: "true"
              }),
              r.a.createElement(
                s.a,
                { className: "js" },
                '<Checkbox id="disabled-checkbox" labelText="I am a checkbox" defaultChecked="true"/>'
              )
            ),
            r.a.createElement(
              i.d,
              { mb: "x6" },
              r.a.createElement(i.X, null, "Indeterminate"),
              r.a.createElement(i.l, {
                labelText: "I am an indeterminate checkbox",
                checked: !0,
                indeterminate: !0,
                readOnly: !0
              }),
              r.a.createElement(
                s.a,
                { className: "js" },
                '<Checkbox labelText="I am an indeterminate checkbox" checked indeterminate />'
              )
            )
          ),
          r.a.createElement(
            m.a,
            null,
            r.a.createElement(i.T, null, "Guidelines"),
            r.a.createElement(
              i.F,
              null,
              r.a.createElement(
                i.G,
                null,
                "Add labels, errors and default selections with",
                " ",
                r.a.createElement(
                  i.E,
                  { href: "/components/checkbox-group" },
                  "Checkbox Group"
                )
              ),
              r.a.createElement(
                i.G,
                null,
                'If there are many items in a list, consider using a "Show all" button'
              )
            )
          ),
          r.a.createElement(
            m.a,
            null,
            r.a.createElement(i.T, null, "Props"),
            r.a.createElement(m.i, { propsRows: b })
          ),
          r.a.createElement(
            m.a,
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
                  { href: "/components/checkbox-group" },
                  "Checkbox Group"
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
            m.a,
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
                  { href: "".concat(h.a, "checkbox--checkbox") },
                  "View in Storybook"
                )
              )
            )
          )
        );
      };
    },
    YOuh: function(e, a, t) {
      "use strict";
      a.a = [
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
    ttvI: function(e, a, t) {
      "use strict";
      t.d(a, "c", function() {
        return n;
      }),
        t.d(a, "a", function() {
          return l;
        }),
        t.d(a, "b", function() {
          return c;
        });
      var n = "https://storybook.nulogy.design/?path=/story/",
        l = "".concat(n, "components-"),
        c = "".concat(n, "pages-");
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-checkbox-js-8b28c2faced0dd4d4e15.js.map
