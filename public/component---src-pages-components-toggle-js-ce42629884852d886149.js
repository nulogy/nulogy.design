(window.webpackJsonp = window.webpackJsonp || []).push([
  [49],
  {
    "79O7": function(e, t, l) {
      "use strict";
      l.r(t);
      var n = l("q1tI"),
        a = l.n(n),
        o = l("TJpk"),
        r = l("xj1T"),
        i = l.n(r),
        u = l("yoZo"),
        s = l("Kvkj"),
        d = l("ttvI"),
        f = [
          {
            name: "defaultToggled",
            type: "Boolean",
            defaultValue: "false",
            description: "Display the toggle as checked by default."
          },
          {
            name: "disabled",
            type: "Boolean",
            defaultValue: "false",
            description:
              "Marks the toggle as disabled and disallows user input."
          },
          {
            name: "id",
            type: "String",
            defaultValue: "null",
            description: "A unique ID for this input."
          },
          {
            name: "value",
            type: "String",
            defaultValue: "on",
            description: "Value on the input that can be submitted."
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
            defaultValue: "null",
            description:
              "Informs users what the corresponding input field is for."
          },
          {
            name: "offText",
            type: "String",
            defaultValue: "false",
            description: "A label for the toggle's off state."
          },
          {
            name: "onText",
            type: "String",
            defaultValue: "false",
            description: "A label for the toggle's on state."
          },
          {
            name: "toggled",
            type: "Boolean",
            defaultValue: "undefined",
            description:
              "The value of the toggle when using as a controlled component."
          },
          {
            name: "onChange",
            type: "Function",
            defaultValue: "null",
            description:
              "Function that triggers when toggle is clicked, use with the toggled prop for a controlled component."
          },
          {
            name: "required",
            type: "Boolean",
            defaultValue: "false",
            description:
              "Makes the field require input before the form will submit."
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
            description: "className passed to the container element."
          }
        ];
      t.default = function() {
        return a.a.createElement(
          s.h,
          null,
          a.a.createElement(
            o.Helmet,
            null,
            a.a.createElement("title", null, "Toggle")
          ),
          a.a.createElement(
            s.e,
            null,
            a.a.createElement(u.fb, null, "Toggle"),
            a.a.createElement(
              s.f,
              null,
              "For quickly switching between two possible states."
            )
          ),
          a.a.createElement(
            s.a,
            null,
            a.a.createElement(u.hb, {
              id: "toggle",
              labelText: "Label",
              onText: "On",
              offText: "Off"
            }),
            a.a.createElement(
              i.a,
              { className: "js" },
              'import { Toggle } from "@nulogy/components";\n\n<Toggle id="toggle" labelText="Label" onText="On" offText="Off" />'
            )
          ),
          a.a.createElement(
            s.a,
            null,
            a.a.createElement(u.T, null, "Variations"),
            a.a.createElement(
              u.d,
              { mb: "x6" },
              a.a.createElement(u.X, null, "Disabled"),
              a.a.createElement(u.hb, {
                id: "disabled-toggle",
                onText: "On",
                offText: "Off",
                disabled: !0
              }),
              a.a.createElement(
                i.a,
                { className: "js" },
                '<Toggle id="disabled-toggle" onText="On" offText="Off" disabled />'
              )
            ),
            a.a.createElement(
              u.d,
              { mb: "x6" },
              a.a.createElement(u.X, null, "Toggled by default"),
              a.a.createElement(u.hb, {
                id: "toggled-toggle",
                onText: "On",
                offText: "Off",
                defaultToggled: "true"
              }),
              a.a.createElement(
                i.a,
                { className: "js" },
                '<Toggle id="toggled-toggle" onText="On" offText="Off" defaultToggled="true" />'
              )
            ),
            a.a.createElement(
              u.d,
              null,
              a.a.createElement(u.X, null, "With all labels"),
              a.a.createElement(u.hb, {
                id: "toggle-with-labels",
                labelText: "Toggle",
                helpText: "Turns setting on/off",
                onText: "On",
                offText: "Off",
                defaultToggled: !0,
                required: !0,
                requirementText: "(Required)"
              }),
              a.a.createElement(
                i.a,
                { className: "js" },
                '<Toggle id="toggle-with-labels"\n  labelText="Toggle"\n  helpText="Turns setting on/off"\n  onText="On"\n  offText="Off"\n  requirementText="(Optional)"\n/>'
              )
            )
          ),
          a.a.createElement(
            s.a,
            null,
            a.a.createElement(u.T, null, "Props"),
            a.a.createElement(s.i, { propsRows: f })
          ),
          a.a.createElement(
            s.a,
            null,
            a.a.createElement(u.T, null, "Related components"),
            a.a.createElement(
              u.F,
              null,
              a.a.createElement(
                u.G,
                null,
                a.a.createElement(u.E, { href: "/components/form" }, "Form")
              )
            )
          ),
          a.a.createElement(
            s.a,
            null,
            a.a.createElement(u.T, null, "Resources"),
            a.a.createElement(
              u.F,
              null,
              a.a.createElement(
                u.G,
                null,
                a.a.createElement(
                  u.E,
                  { href: d.a + "toggle--toggle" },
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
        a = n + "components-",
        o = n + "pages-";
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-toggle-js-ce42629884852d886149.js.map
