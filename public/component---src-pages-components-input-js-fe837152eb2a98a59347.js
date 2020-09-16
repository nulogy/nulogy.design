(window.webpackJsonp = window.webpackJsonp || []).push([
  [27],
  {
    GzD8: function(e, t, l) {
      "use strict";
      l.r(t);
      var n = l("R7tm"),
        a = l.n(n),
        i = l("q1tI"),
        r = l.n(i),
        u = l("TJpk"),
        s = l("xj1T"),
        o = l.n(s),
        d = l("3/HP"),
        p = l("Kvkj"),
        c = l("fEP7"),
        m = l("ttvI"),
        f = [
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
        ].concat(a()(c.a), [
          {
            name: "prefix",
            type: "String",
            defaultValue: "null",
            description: "Displays input field prefix label"
          },
          {
            name: "prefixWidth",
            type: "String",
            defaultValue: "null",
            description: "Controls the width of prefix label"
          },
          {
            name: "prefixAlignment",
            type: "String",
            defaultValue: "left",
            description:
              "Aligns prefix label text. Accepts left, center, and right value."
          },
          {
            name: "suffix",
            type: "String",
            defaultValue: "null",
            description: "Displays input field suffix label"
          },
          {
            name: "suffixWidth",
            type: "String",
            defaultValue: "null",
            description: "Controls the width of suffix label"
          },
          {
            name: "suffixAlignment",
            type: "String",
            defaultValue: "left",
            description:
              "Aligns suffix label text. Accepts left, center, and right value."
          }
        ]);
      t.default = function() {
        return r.a.createElement(
          p.h,
          null,
          r.a.createElement(
            u.Helmet,
            null,
            r.a.createElement("title", null, "Input")
          ),
          r.a.createElement(
            p.e,
            null,
            r.a.createElement(d.fb, null, "Input"),
            r.a.createElement(
              p.f,
              null,
              "An input field that users can type into."
            )
          ),
          r.a.createElement(
            p.a,
            null,
            r.a.createElement(d.D, { id: "input", labelText: "Label" }),
            r.a.createElement(
              o.a,
              { className: "js" },
              'import { Input } from "@nulogy/components";\n\n<Input id="input" labelText="Input label" />'
            )
          ),
          r.a.createElement(
            p.a,
            null,
            r.a.createElement(d.T, null, "Use when"),
            r.a.createElement(
              d.F,
              null,
              r.a.createElement(
                d.G,
                null,
                "Users need to enter information that is best communicated in text form."
              ),
              r.a.createElement(
                d.G,
                null,
                "You need to collect information that varies from one user to another and can’t be represented as a set of pre-determined choices."
              )
            )
          ),
          r.a.createElement(
            p.a,
            null,
            r.a.createElement(d.T, null, "Variations"),
            r.a.createElement(
              d.d,
              { mb: "x6" },
              r.a.createElement(d.X, null, "Disabled"),
              r.a.createElement(d.D, {
                labelText: "Label",
                placeholder: "I'm an input",
                disabled: !0
              }),
              r.a.createElement(
                o.a,
                { className: "js" },
                '<Input id="disabled-input" placeholder="I\'m an input" disabled />'
              )
            ),
            r.a.createElement(
              d.d,
              { mb: "x6" },
              r.a.createElement(d.X, null, "Error"),
              r.a.createElement(d.D, {
                labelText: "Label",
                errorMessage: "Error message"
              }),
              r.a.createElement(
                o.a,
                { className: "js" },
                '<Input labelText="Label" id="error-input" errorMessage="Error message" />'
              )
            ),
            r.a.createElement(
              d.d,
              { mb: "x6" },
              r.a.createElement(d.X, null, "With all labels"),
              r.a.createElement(d.D, {
                id: "all-labels",
                labelText: "Label",
                helpText: "Additional help text",
                requirementText: "(Optional)",
                placeholder: "I'm an input"
              }),
              r.a.createElement(
                o.a,
                { className: "js" },
                '<Input\n  id="all-labels"\n  labelText="Label"\n  helpText="Additional help text"\n  requirementText="(Optional)"\n  placeholder="I\'m an input"\n/>'
              )
            ),
            r.a.createElement(
              d.d,
              { mb: "x6" },
              r.a.createElement(d.X, null, "With Prefix and Suffix"),
              r.a.createElement(d.D, {
                id: "all-labels",
                labelText: "Label",
                placeholder: "I'm an input",
                prefix: "I'm prefix label",
                suffix: "I'm suffix label"
              }),
              r.a.createElement(
                o.a,
                { className: "js" },
                '<Input\n  id="all-labels"\n  labelText="Label"\n  placeholder="I\'m an input"\n  prefix="I\'m prefix label"\n  suffix="I\'m sufix label"\n/>'
              )
            )
          ),
          r.a.createElement(
            p.a,
            null,
            r.a.createElement(d.T, null, "Guidelines"),
            r.a.createElement(
              d.F,
              null,
              r.a.createElement(
                d.G,
                null,
                "Whenever possible match the width of the input field with the expected length of the input. If that is not possible then fill the entire width of the container."
              )
            )
          ),
          r.a.createElement(
            p.a,
            null,
            r.a.createElement(d.T, null, "Props"),
            r.a.createElement(p.i, { propsRows: f })
          ),
          r.a.createElement(
            p.a,
            null,
            r.a.createElement(d.T, null, "Related components"),
            r.a.createElement(
              d.F,
              null,
              r.a.createElement(
                d.G,
                null,
                r.a.createElement(d.E, { href: "/components/form" }, "Form")
              )
            )
          ),
          r.a.createElement(
            p.a,
            null,
            r.a.createElement(d.T, null, "Resources"),
            r.a.createElement(
              d.F,
              null,
              r.a.createElement(
                d.G,
                null,
                r.a.createElement(
                  d.E,
                  { href: "".concat(m.a, "input--input") },
                  "View in Storybook"
                )
              )
            )
          )
        );
      };
    },
    fEP7: function(e, t, l) {
      "use strict";
      l.d(t, "b", function() {
        return n;
      });
      var n = [
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
        a = [].concat(n, [
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
      t.a = a;
    },
    ttvI: function(e, t, l) {
      "use strict";
      l.d(t, "c", function() {
        return n;
      }),
        l.d(t, "a", function() {
          return a;
        }),
        l.d(t, "b", function() {
          return i;
        });
      var n = "https://storybook.nulogy.design/?path=/story/",
        a = "".concat(n, "components-"),
        i = "".concat(n, "pages-");
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-input-js-fe837152eb2a98a59347.js.map
