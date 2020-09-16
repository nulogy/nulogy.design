(window.webpackJsonp = window.webpackJsonp || []).push([
  [16],
  {
    Fw9e: function(e, t, l) {
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
    ZpwJ: function(e, t, l) {
      "use strict";
      l.r(t);
      var n = l("q1tI"),
        a = l.n(n),
        o = l("TJpk"),
        r = l("3/HP"),
        c = l("xj1T"),
        i = l.n(c),
        u = l("Kvkj"),
        s = l("Fw9e"),
        m = l("ttvI");
      t.default = function() {
        return a.a.createElement(
          u.h,
          null,
          a.a.createElement(
            o.Helmet,
            null,
            a.a.createElement("title", null, "Checkbox")
          ),
          a.a.createElement(
            u.e,
            null,
            a.a.createElement(r.fb, null, "Checkbox Group"),
            a.a.createElement(
              u.f,
              null,
              "For wrapping checkboxes with a label and help text"
            )
          ),
          a.a.createElement(
            u.a,
            null,
            a.a.createElement(
              r.m,
              {
                labelText: "Setting Selection",
                name: "settingSelection",
                helpText: "Select a setting from the menu below:"
              },
              a.a.createElement(r.l, { value: "a", labelText: "Option A" }),
              a.a.createElement(r.l, { value: "b", labelText: "Option B" }),
              a.a.createElement(r.l, { value: "c", labelText: "Option C" })
            ),
            a.a.createElement(
              i.a,
              { className: "js" },
              'import { Checkbox, CheckboxGroup } from "@nulogy/components";\n\n<CheckboxGroup\n  name="settingSelection"\n  labelText="Setting Selection"\n  helpText="Select a setting from the menu below:"\n>\n  <Checkbox value="a" labelText="Option A" />\n  <Checkbox value="b" labelText="Option B" />\n  <Checkbox value="c" labelText="Option C" />\n</CheckboxGroup>\n'
            )
          ),
          a.a.createElement(
            u.a,
            null,
            a.a.createElement(r.T, null, "Variations"),
            a.a.createElement(
              r.d,
              { mb: "x6" },
              a.a.createElement(r.X, null, "With an error"),
              a.a.createElement(
                r.m,
                {
                  name: "settingSelection",
                  labelText: "Setting Selection",
                  helpText: "Select a setting from the menu below:",
                  errorMessage: "A selection must be selected"
                },
                a.a.createElement(r.l, { value: "a", labelText: "Option A" }),
                a.a.createElement(r.l, { value: "b", labelText: "Option B" }),
                a.a.createElement(r.l, { value: "c", labelText: "Option C" })
              ),
              a.a.createElement(
                i.a,
                { className: "js" },
                'import { Checkbox, CheckboxGroup } from "@nulogy/components";\n\n<CheckboxGroup\n  name="settingSelection"\n  labelText="Setting Selection"\n  helpText="Select a setting from the menu below:"\n  errorMessage="A selection must be selected"\n>\n  <Checkbox value="a" labelText="Option A" />\n  <Checkbox value="b" labelText="Option B" />\n  <Checkbox value="c" labelText="Option C" />\n</CheckboxGroup>\n'
              )
            )
          ),
          a.a.createElement(
            u.a,
            null,
            a.a.createElement(r.T, null, "Props"),
            a.a.createElement(u.i, { propsRows: s.a })
          ),
          a.a.createElement(
            u.a,
            null,
            a.a.createElement(r.T, null, "Related components"),
            a.a.createElement(
              r.F,
              null,
              a.a.createElement(
                r.G,
                null,
                a.a.createElement(
                  r.E,
                  { href: "/components/checkbox" },
                  "Checkbox"
                )
              ),
              a.a.createElement(
                r.G,
                null,
                a.a.createElement(r.E, { href: "/components/form" }, "Form")
              )
            )
          ),
          a.a.createElement(
            u.a,
            null,
            a.a.createElement(r.T, null, "Resources"),
            a.a.createElement(
              r.F,
              null,
              a.a.createElement(
                r.G,
                null,
                a.a.createElement(
                  r.E,
                  { href: "".concat(m.a, "checkboxgroup--checkboxgroup") },
                  "View in Storybook"
                )
              )
            )
          )
        );
      };
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
          return o;
        });
      var n = "https://storybook.nulogy.design/?path=/story/",
        a = "".concat(n, "components-"),
        o = "".concat(n, "pages-");
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-checkbox-group-js-d763b13b7c54526df30d.js.map
