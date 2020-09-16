(window.webpackJsonp = window.webpackJsonp || []).push([
  [45],
  {
    "24/a": function(e, t, a) {
      "use strict";
      a.r(t);
      var l = a("R7tm"),
        n = a.n(l),
        r = a("q1tI"),
        i = a.n(r),
        o = a("TJpk"),
        u = a("xj1T"),
        s = a.n(u),
        c = a("3/HP"),
        d = a("Kvkj"),
        m = a("fEP7"),
        p = a("ttvI"),
        f = [
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
        ].concat(n()(m.a));
      t.default = function() {
        return i.a.createElement(
          d.h,
          null,
          i.a.createElement(
            o.Helmet,
            null,
            i.a.createElement("title", null, "Textarea")
          ),
          i.a.createElement(
            d.e,
            null,
            i.a.createElement(c.fb, null, "Textarea"),
            i.a.createElement(d.f, null, "A multiline text input field.")
          ),
          i.a.createElement(
            d.a,
            null,
            i.a.createElement(c.cb, { labelText: "Label", id: "textarea" }),
            i.a.createElement(
              s.a,
              { className: "js" },
              'import { Textarea } from "@nulogy/components";\n\n<Textarea labelText="Label" id="textarea" />\n'
            )
          ),
          i.a.createElement(
            d.a,
            null,
            i.a.createElement(c.T, null, "Use when"),
            i.a.createElement(
              c.F,
              null,
              i.a.createElement(
                c.G,
                null,
                "Users need to enter multiple lines of text."
              )
            )
          ),
          i.a.createElement(
            d.a,
            null,
            i.a.createElement(c.T, null, "Variations"),
            i.a.createElement(
              c.d,
              { mb: "x6" },
              i.a.createElement(c.X, null, "Custom size"),
              i.a.createElement(c.cb, {
                id: "custom-size",
                labelText: "Label",
                rows: 2
              }),
              i.a.createElement(
                s.a,
                { className: "js" },
                '<Textarea id="custom-size" labelText="Label" rows={2} />'
              )
            ),
            i.a.createElement(
              c.d,
              { mb: "x6" },
              i.a.createElement(c.X, null, "Disabled"),
              i.a.createElement(c.cb, {
                id: "disabled",
                labelText: "Label",
                disabled: !0
              }),
              i.a.createElement(
                s.a,
                { className: "js" },
                '<Textarea id="disabled" labelText="Label" disabled />'
              )
            ),
            i.a.createElement(
              c.d,
              { mb: "x6" },
              i.a.createElement(c.X, null, "Error"),
              i.a.createElement(c.cb, {
                id: "error",
                labelText: "Label",
                errorMessage: "Please fill this out"
              }),
              i.a.createElement(
                s.a,
                { className: "js" },
                '<Textarea id="error" labelText="Label" errorMessage="Please fill this out" />'
              )
            ),
            i.a.createElement(
              c.d,
              null,
              i.a.createElement(c.X, null, "With all labels"),
              i.a.createElement(c.cb, {
                id: "all-labels",
                labelText: "Label",
                helpText: "Additional help text",
                requirementText: "(Optional)",
                placeholder: "Placeholder"
              }),
              i.a.createElement(
                s.a,
                { className: "js" },
                '<Textarea\n  id="all-labels"\n  labelText="Label"\n  helpText="Additional help text"\n  requirementText="(Optional)"\n  placeholder="Placeholder"\n/>'
              )
            )
          ),
          i.a.createElement(
            d.a,
            null,
            i.a.createElement(c.T, null, "Props"),
            i.a.createElement(d.i, { propsRows: f })
          ),
          i.a.createElement(
            d.a,
            null,
            i.a.createElement(c.T, null, "Related components"),
            i.a.createElement(
              c.F,
              null,
              i.a.createElement(
                c.G,
                null,
                i.a.createElement(c.E, { href: "/components/form" }, "Form")
              )
            )
          ),
          i.a.createElement(
            d.a,
            null,
            i.a.createElement(c.T, null, "Resources"),
            i.a.createElement(
              c.F,
              null,
              i.a.createElement(
                c.G,
                null,
                i.a.createElement(
                  c.E,
                  { href: "".concat(p.a, "textarea--textarea") },
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
        n = "".concat(l, "components-"),
        r = "".concat(l, "pages-");
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-textarea-js-34ed50b9018f81375fa0.js.map
