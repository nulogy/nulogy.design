(window.webpackJsonp = window.webpackJsonp || []).push([
  [45],
  {
    "24/a": function(e, t, a) {
      "use strict";
      a.r(t);
      var l = a("t8Zj"),
        n = a("q1tI"),
        r = a.n(n),
        i = a("TJpk"),
        o = a("xj1T"),
        u = a.n(o),
        s = a("yoZo"),
        d = a("Kvkj"),
        c = a("fEP7"),
        m = a("ttvI"),
        p = [
          {
            name: "rows",
            type: "Number",
            defaultValue: "3",
            description: "A custom number of rows to show by default."
          },
          {
            name: "value",
            type: "String",
            defaultValue: "undefined",
            description: "Value of input, used when controlling the component"
          },
          {
            name: "defaultValue",
            type: "String",
            defaultValue: "",
            description: "Default value of input"
          }
        ].concat(Object(l.a)(c.a));
      t.default = function() {
        return r.a.createElement(
          d.h,
          null,
          r.a.createElement(
            i.Helmet,
            null,
            r.a.createElement("title", null, "Textarea")
          ),
          r.a.createElement(
            d.e,
            null,
            r.a.createElement(s.fb, null, "Textarea"),
            r.a.createElement(d.f, null, "A multiline text input field.")
          ),
          r.a.createElement(
            d.a,
            null,
            r.a.createElement(s.cb, { labelText: "Label", id: "textarea" }),
            r.a.createElement(
              u.a,
              { className: "js" },
              'import { Textarea } from "@nulogy/components";\n\n<Textarea labelText="Label" id="textarea" />\n'
            )
          ),
          r.a.createElement(
            d.a,
            null,
            r.a.createElement(s.T, null, "Use when"),
            r.a.createElement(
              s.F,
              null,
              r.a.createElement(
                s.G,
                null,
                "Users need to enter multiple lines of text."
              )
            )
          ),
          r.a.createElement(
            d.a,
            null,
            r.a.createElement(s.T, null, "Variations"),
            r.a.createElement(
              s.d,
              { mb: "x6" },
              r.a.createElement(s.X, null, "Custom size"),
              r.a.createElement(s.cb, {
                id: "custom-size",
                labelText: "Label",
                rows: 2
              }),
              r.a.createElement(
                u.a,
                { className: "js" },
                '<Textarea id="custom-size" labelText="Label" rows={2} />'
              )
            ),
            r.a.createElement(
              s.d,
              { mb: "x6" },
              r.a.createElement(s.X, null, "Disabled"),
              r.a.createElement(s.cb, {
                id: "disabled",
                labelText: "Label",
                disabled: !0
              }),
              r.a.createElement(
                u.a,
                { className: "js" },
                '<Textarea id="disabled" labelText="Label" disabled />'
              )
            ),
            r.a.createElement(
              s.d,
              { mb: "x6" },
              r.a.createElement(s.X, null, "Error"),
              r.a.createElement(s.cb, {
                id: "error",
                labelText: "Label",
                errorMessage: "Please fill this out"
              }),
              r.a.createElement(
                u.a,
                { className: "js" },
                '<Textarea id="error" labelText="Label" errorMessage="Please fill this out" />'
              )
            ),
            r.a.createElement(
              s.d,
              null,
              r.a.createElement(s.X, null, "With all labels"),
              r.a.createElement(s.cb, {
                id: "all-labels",
                labelText: "Label",
                helpText: "Additional help text",
                requirementText: "(Optional)",
                placeholder: "Placeholder"
              }),
              r.a.createElement(
                u.a,
                { className: "js" },
                '<Textarea\n  id="all-labels"\n  labelText="Label"\n  helpText="Additional help text"\n  requirementText="(Optional)"\n  placeholder="Placeholder"\n/>'
              )
            )
          ),
          r.a.createElement(
            d.a,
            null,
            r.a.createElement(s.T, null, "Props"),
            r.a.createElement(d.i, { propsRows: p })
          ),
          r.a.createElement(
            d.a,
            null,
            r.a.createElement(s.T, null, "Related components"),
            r.a.createElement(
              s.F,
              null,
              r.a.createElement(
                s.G,
                null,
                r.a.createElement(s.E, { href: "/components/form" }, "Form")
              )
            )
          ),
          r.a.createElement(
            d.a,
            null,
            r.a.createElement(s.T, null, "Resources"),
            r.a.createElement(
              s.F,
              null,
              r.a.createElement(
                s.G,
                null,
                r.a.createElement(
                  s.E,
                  { href: m.a + "textarea--textarea" },
                  "View in Storybook"
                )
              )
            )
          )
        );
      };
    },
    fEP7: function(e, t, a) {
      "use strict";
      a.d(t, "b", function() {
        return l;
      });
      var l = [
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
            description: "A unique name for this input"
          },
          {
            name: "disabled",
            type: "Boolean",
            defaultValue: "false",
            description: "Marks the field as disabled and disallows user input"
          },
          {
            name: "helpText",
            type: "Node",
            defaultValue: "null",
            description:
              "Placed below the label to provide assistance on how to fill out a field or the expected format. It can also provide an explanation of why the information is needed and how it will be used."
          },
          {
            name: "labelText",
            type: "String",
            defaultValue: "null",
            description:
              "Informs users what the corresponding input field is for."
          },
          {
            name: "placeholder",
            type: "String",
            defaultValue: "null",
            description:
              "A hint to the expected format for the field. Not a replacement for a label."
          },
          {
            name: "required",
            type: "Boolean",
            defaultValue: "false",
            description:
              "Makes the field require selection before the form will submit."
          },
          {
            name: "requirementText",
            type: "String",
            defaultValue: "null",
            description: "(Optional) or (Required)."
          },
          {
            name: "className",
            type: "String",
            defaultValue: "undefined",
            description: "className passed to the wrapper element."
          },
          {
            name: "onChange",
            type: "Function",
            defaultValue: "undefined",
            description:
              "Change event handler that will be run whenever the value of the input is updated."
          },
          {
            name: "onBlur",
            type: "Function",
            defaultValue: "undefined",
            description:
              "Change event handler that will be run whenever the input loses focus."
          }
        ],
        n = [].concat(l, [
          {
            name: "errorMessage",
            type: "String",
            defaultValue: "null",
            description: "Displays an error message and applies red style"
          },
          {
            name: "errorList",
            type: "Array of Strings",
            defaultValue: "null",
            description: "Displays list of error messages and applies red style"
          }
        ]);
      t.a = n;
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
//# sourceMappingURL=component---src-pages-components-textarea-js-7c5d96ad2a184ba770d5.js.map
