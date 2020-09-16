(window.webpackJsonp = window.webpackJsonp || []).push([
  [37],
  {
    "3KyT": function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a("q1tI"),
        l = a.n(n),
        o = a("TJpk"),
        r = a("3/HP"),
        i = a("xj1T"),
        u = a.n(i),
        s = a("Kvkj"),
        c = a("Fw9e"),
        p = a("ttvI");
      t.default = function() {
        return l.a.createElement(
          s.h,
          null,
          l.a.createElement(
            o.Helmet,
            null,
            l.a.createElement("title", null, "Radio Group")
          ),
          l.a.createElement(
            s.e,
            null,
            l.a.createElement(r.fb, null, "Radio Group"),
            l.a.createElement(
              s.f,
              null,
              "For wrapping radio buttons with a label and help text"
            )
          ),
          l.a.createElement(
            s.a,
            null,
            l.a.createElement(
              r.S,
              {
                labelText: "Setting Selection",
                name: "settingSelection",
                helpText: "Select a setting from the menu below:"
              },
              l.a.createElement(r.R, { value: "a", labelText: "Option A" }),
              l.a.createElement(r.R, { value: "b", labelText: "Option B" }),
              l.a.createElement(r.R, { value: "c", labelText: "Option C" })
            ),
            l.a.createElement(
              u.a,
              { className: "js" },
              'import { Radio, RadioGroup } from "@nulogy/components";\n\n<RadioGroup\n  labelText="Setting Selection"\n  name="settingSelection"\n  helpText="Select a setting from the menu below:"\n>\n  <Radio value="a" labelText="Option A" />\n  <Radio value="b" labelText="Option B" />\n  <Radio value="c" labelText="Option C" />\n</RadioGroup>\n'
            )
          ),
          l.a.createElement(
            s.a,
            null,
            l.a.createElement(r.T, null, "Variations"),
            l.a.createElement(
              r.d,
              { mb: "x6" },
              l.a.createElement(r.X, null, "With an error"),
              l.a.createElement(
                r.S,
                {
                  labelText: "Setting Selection",
                  name: "settingSelection",
                  helpText: "Select a setting from the menu below:",
                  errorMessage: "Please select an option"
                },
                l.a.createElement(r.R, { value: "a", labelText: "Option A" }),
                l.a.createElement(r.R, { value: "b", labelText: "Option B" }),
                l.a.createElement(r.R, { value: "c", labelText: "Option C" })
              ),
              l.a.createElement(
                u.a,
                { className: "js" },
                'import { Radio, RadioGroup } from "@nulogy/components";\n\n<RadioGroup\n  labelText="Setting Selection"\n  name="settingSelection"\n  helpText="Select a setting from the menu below:"\n  errorMessage="Please select an option"\n>\n  <Radio value="a" labelText="Option A" />\n  <Radio value="b" labelText="Option B" />\n  <Radio value="c" labelText="Option C" />\n</RadioGroup>\n'
              )
            )
          ),
          l.a.createElement(
            s.a,
            null,
            l.a.createElement(r.T, null, "Props"),
            l.a.createElement(s.i, { propsRows: c.a })
          ),
          l.a.createElement(
            s.a,
            null,
            l.a.createElement(r.T, null, "Related components"),
            l.a.createElement(
              r.F,
              null,
              l.a.createElement(
                r.G,
                null,
                l.a.createElement(
                  r.E,
                  { href: "/components/radio" },
                  "Radio button"
                )
              ),
              l.a.createElement(
                r.G,
                null,
                l.a.createElement(r.E, { href: "/components/form" }, "Form")
              )
            )
          ),
          l.a.createElement(
            s.a,
            null,
            l.a.createElement(r.T, null, "Resources"),
            l.a.createElement(
              r.F,
              null,
              l.a.createElement(
                r.G,
                null,
                l.a.createElement(
                  r.E,
                  { href: "".concat(p.a, "radiogroup--radiogroup") },
                  "View in Storybook"
                )
              )
            )
          )
        );
      };
    },
    Fw9e: function(e, t, a) {
      "use strict";
      t.a = [
        {
          name: "name",
          type: "String",
          defaultValue: "Required",
          description:
            "A unique name for this input that groups inputs together"
        },
        {
          name: "defaultValue",
          type: "String",
          defaultValue: "null",
          description: "A value to autoselect on pageload"
        },
        {
          name: "errorMessage",
          type: "String",
          defaultValue: "null",
          description: "Displays list of error messages and applies red style"
        },
        {
          name: "errorList",
          type: "Array of Strings",
          defaultValue: "null",
          description: "Displays list of error messages and applies red style"
        },
        {
          name: "helpText",
          type: "String",
          defaultValue: "null",
          description:
            "Placed below the label to provide assistance on how to fill out a field or the expected format. It can also provide an explanation of why the information is needed and how it will be used."
        },
        {
          name: "labelText",
          type: "String",
          defaultValue: "Required",
          description:
            "Informs users what the corresponding input field is for."
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
          description: "className passed to the group wrapper."
        }
      ];
    },
    ttvI: function(e, t, a) {
      "use strict";
      a.d(t, "c", function() {
        return n;
      }),
        a.d(t, "a", function() {
          return l;
        }),
        a.d(t, "b", function() {
          return o;
        });
      var n = "https://storybook.nulogy.design/?path=/story/",
        l = "".concat(n, "components-"),
        o = "".concat(n, "pages-");
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-radio-group-js-f324c0942263f9074efd.js.map
