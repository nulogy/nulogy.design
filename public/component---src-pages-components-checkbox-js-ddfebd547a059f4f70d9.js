(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    "8kQp": function(e, a, t) {
      "use strict";
      t.r(a);
      var l = t("t8Zj"),
        n = t("q1tI"),
        c = t.n(n),
        r = t("TJpk"),
        o = t("yoZo"),
        i = t("xj1T"),
        u = t.n(i),
        s = t("Kvkj"),
        d = t("YOuh"),
        m = t("ttvI"),
        h = [].concat(Object(l.a)(d.a), [
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
        return c.a.createElement(
          s.h,
          null,
          c.a.createElement(
            r.Helmet,
            null,
            c.a.createElement("title", null, "Checkbox")
          ),
          c.a.createElement(
            s.e,
            null,
            c.a.createElement(o.fb, null, "Checkbox"),
            c.a.createElement(
              s.f,
              null,
              "Checkboxes allow users to select any number of options from a list."
            )
          ),
          c.a.createElement(
            s.a,
            null,
            c.a.createElement(o.l, {
              id: "checkbox",
              labelText: "I am a checkbox"
            }),
            c.a.createElement(
              u.a,
              { className: "js" },
              'import { Checkbox } from "@nulogy/components";\n\n<Checkbox id="checkbox" labelText="I am a checkbox" />\n'
            )
          ),
          c.a.createElement(
            s.a,
            null,
            c.a.createElement(o.T, null, "Variations"),
            c.a.createElement(
              o.d,
              { mb: "x6" },
              c.a.createElement(o.X, null, "Disabled"),
              c.a.createElement(o.l, {
                labelText: "I am a checkbox",
                disabled: !0
              }),
              c.a.createElement(
                u.a,
                { className: "js" },
                '<Checkbox id="disabled-checkbox" labelText="I am a checkbox" disabled />'
              )
            ),
            c.a.createElement(
              o.d,
              { mb: "x6" },
              c.a.createElement(o.X, null, "Error"),
              c.a.createElement(o.l, {
                labelText: "I am a checkbox",
                error: !0
              }),
              c.a.createElement(
                u.a,
                { className: "js" },
                '<Checkbox id="error-checkbox" labelText="I am a checkbox" error />'
              )
            ),
            c.a.createElement(
              o.d,
              { mb: "x6" },
              c.a.createElement(o.X, null, "Default Checked"),
              c.a.createElement(o.l, {
                labelText: "I am a checkbox",
                defaultChecked: "true"
              }),
              c.a.createElement(
                u.a,
                { className: "js" },
                '<Checkbox id="disabled-checkbox" labelText="I am a checkbox" defaultChecked="true"/>'
              )
            ),
            c.a.createElement(
              o.d,
              { mb: "x6" },
              c.a.createElement(o.X, null, "Indeterminate"),
              c.a.createElement(o.l, {
                labelText: "I am an indeterminate checkbox",
                checked: !0,
                indeterminate: !0,
                readOnly: !0
              }),
              c.a.createElement(
                u.a,
                { className: "js" },
                '<Checkbox labelText="I am an indeterminate checkbox" checked indeterminate />'
              )
            )
          ),
          c.a.createElement(
            s.a,
            null,
            c.a.createElement(o.T, null, "Guidelines"),
            c.a.createElement(
              o.F,
              null,
              c.a.createElement(
                o.G,
                null,
                "Add labels, errors and default selections with",
                " ",
                c.a.createElement(
                  o.E,
                  { href: "/components/checkbox-group" },
                  "Checkbox Group"
                )
              ),
              c.a.createElement(
                o.G,
                null,
                'If there are many items in a list, consider using a "Show all" button'
              )
            )
          ),
          c.a.createElement(
            s.a,
            null,
            c.a.createElement(o.T, null, "Props"),
            c.a.createElement(s.i, { propsRows: h })
          ),
          c.a.createElement(
            s.a,
            null,
            c.a.createElement(o.T, null, "Related components"),
            c.a.createElement(
              o.F,
              null,
              c.a.createElement(
                o.G,
                null,
                c.a.createElement(
                  o.E,
                  { href: "/components/checkbox-group" },
                  "Checkbox Group"
                )
              ),
              c.a.createElement(
                o.G,
                null,
                c.a.createElement(o.E, { href: "/components/form" }, "Form")
              )
            )
          ),
          c.a.createElement(
            s.a,
            null,
            c.a.createElement(o.T, null, "Resources"),
            c.a.createElement(
              o.F,
              null,
              c.a.createElement(
                o.G,
                null,
                c.a.createElement(
                  o.E,
                  { href: m.a + "checkbox--checkbox" },
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
        return l;
      }),
        t.d(a, "a", function() {
          return n;
        }),
        t.d(a, "b", function() {
          return c;
        });
      var l = "https://storybook.nulogy.design/?path=/story/",
        n = l + "components-",
        c = l + "pages-";
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-checkbox-js-ddfebd547a059f4f70d9.js.map
