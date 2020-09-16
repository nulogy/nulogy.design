(window.webpackJsonp = window.webpackJsonp || []).push([
  [27],
  {
    GzD8: function(e, t, l) {
      "use strict";
      l.r(t);
      var a = l("t8Zj"),
        n = l("q1tI"),
        i = l.n(n),
        r = l("TJpk"),
        u = l("xj1T"),
        s = l.n(u),
        o = l("yoZo"),
        d = l("Kvkj"),
        p = l("fEP7"),
        c = l("ttvI"),
        m = [
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
        ].concat(Object(a.a)(p.a), [
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
        return i.a.createElement(
          d.h,
          null,
          i.a.createElement(
            r.Helmet,
            null,
            i.a.createElement("title", null, "Input")
          ),
          i.a.createElement(
            d.e,
            null,
            i.a.createElement(o.fb, null, "Input"),
            i.a.createElement(
              d.f,
              null,
              "An input field that users can type into."
            )
          ),
          i.a.createElement(
            d.a,
            null,
            i.a.createElement(o.D, { id: "input", labelText: "Label" }),
            i.a.createElement(
              s.a,
              { className: "js" },
              'import { Input } from "@nulogy/components";\n\n<Input id="input" labelText="Input label" />'
            )
          ),
          i.a.createElement(
            d.a,
            null,
            i.a.createElement(o.T, null, "Use when"),
            i.a.createElement(
              o.F,
              null,
              i.a.createElement(
                o.G,
                null,
                "Users need to enter information that is best communicated in text form."
              ),
              i.a.createElement(
                o.G,
                null,
                "You need to collect information that varies from one user to another and can’t be represented as a set of pre-determined choices."
              )
            )
          ),
          i.a.createElement(
            d.a,
            null,
            i.a.createElement(o.T, null, "Variations"),
            i.a.createElement(
              o.d,
              { mb: "x6" },
              i.a.createElement(o.X, null, "Disabled"),
              i.a.createElement(o.D, {
                labelText: "Label",
                placeholder: "I'm an input",
                disabled: !0
              }),
              i.a.createElement(
                s.a,
                { className: "js" },
                '<Input id="disabled-input" placeholder="I\'m an input" disabled />'
              )
            ),
            i.a.createElement(
              o.d,
              { mb: "x6" },
              i.a.createElement(o.X, null, "Error"),
              i.a.createElement(o.D, {
                labelText: "Label",
                errorMessage: "Error message"
              }),
              i.a.createElement(
                s.a,
                { className: "js" },
                '<Input labelText="Label" id="error-input" errorMessage="Error message" />'
              )
            ),
            i.a.createElement(
              o.d,
              { mb: "x6" },
              i.a.createElement(o.X, null, "With all labels"),
              i.a.createElement(o.D, {
                id: "all-labels",
                labelText: "Label",
                helpText: "Additional help text",
                requirementText: "(Optional)",
                placeholder: "I'm an input"
              }),
              i.a.createElement(
                s.a,
                { className: "js" },
                '<Input\n  id="all-labels"\n  labelText="Label"\n  helpText="Additional help text"\n  requirementText="(Optional)"\n  placeholder="I\'m an input"\n/>'
              )
            ),
            i.a.createElement(
              o.d,
              { mb: "x6" },
              i.a.createElement(o.X, null, "With Prefix and Suffix"),
              i.a.createElement(o.D, {
                id: "all-labels",
                labelText: "Label",
                placeholder: "I'm an input",
                prefix: "I'm prefix label",
                suffix: "I'm suffix label"
              }),
              i.a.createElement(
                s.a,
                { className: "js" },
                '<Input\n  id="all-labels"\n  labelText="Label"\n  placeholder="I\'m an input"\n  prefix="I\'m prefix label"\n  suffix="I\'m sufix label"\n/>'
              )
            )
          ),
          i.a.createElement(
            d.a,
            null,
            i.a.createElement(o.T, null, "Guidelines"),
            i.a.createElement(
              o.F,
              null,
              i.a.createElement(
                o.G,
                null,
                "Whenever possible match the width of the input field with the expected length of the input. If that is not possible then fill the entire width of the container."
              )
            )
          ),
          i.a.createElement(
            d.a,
            null,
            i.a.createElement(o.T, null, "Props"),
            i.a.createElement(d.i, { propsRows: m })
          ),
          i.a.createElement(
            d.a,
            null,
            i.a.createElement(o.T, null, "Related components"),
            i.a.createElement(
              o.F,
              null,
              i.a.createElement(
                o.G,
                null,
                i.a.createElement(o.E, { href: "/components/form" }, "Form")
              )
            )
          ),
          i.a.createElement(
            d.a,
            null,
            i.a.createElement(o.T, null, "Resources"),
            i.a.createElement(
              o.F,
              null,
              i.a.createElement(
                o.G,
                null,
                i.a.createElement(
                  o.E,
                  { href: c.a + "input--input" },
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
        return a;
      });
      var a = [
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
        n = [].concat(a, [
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
    ttvI: function(e, t, l) {
      "use strict";
      l.d(t, "c", function() {
        return a;
      }),
        l.d(t, "a", function() {
          return n;
        }),
        l.d(t, "b", function() {
          return i;
        });
      var a = "https://storybook.nulogy.design/?path=/story/",
        n = a + "components-",
        i = a + "pages-";
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-input-js-058c4c495f2ee28811b4.js.map
