(window.webpackJsonp = window.webpackJsonp || []).push([
  [46],
  {
    L069: function(e, t, n) {
      "use strict";
      var a = n("t8Zj"),
        l = n("fEP7"),
        i = [
          {
            name: "autocomplete",
            type: "Boolean",
            defaultValue: "true",
            description: "Whether or not typing will filter the options list"
          },
          {
            name: "options",
            type: "Array",
            defaultValue: "Required",
            description:
              "The options available to be selected, containing a value and a label"
          },
          {
            name: "maxHeight",
            type: "String",
            defaultValue: "256px",
            description:
              "Max height of the select dropdown menu, content is scrollable"
          },
          {
            name: "multiselect",
            type: "Boolean",
            defaultValue: "false",
            description: "Whether or not multiple selections can be made"
          },
          {
            name: "value",
            type: "String | Array",
            defaultValue: "undefined",
            description: "Value of input, used when controlling the component"
          },
          {
            name: "defaultValue",
            type: "String | Array",
            defaultValue: "",
            description: "Default value of input"
          },
          {
            name: "menuIsOpen",
            type: "Boolean",
            defaultValue: "undefined",
            description:
              "Controls whether the menu is open; If unset, then NDS controls this implicitly instead"
          },
          {
            name: "onMenuOpen",
            type: "Function",
            defaultValue: "undefined",
            description: "Event handler for when the menu is opened"
          },
          {
            name: "onMenuClose",
            type: "Function",
            defaultValue: "undefined",
            description: "Event handler for when the menu is closed"
          },
          {
            name: "onInputChange",
            type: "Function",
            defaultValue: "undefined",
            description:
              "Event handler for when the value typed into the input changes"
          },
          {
            name: "menuPosition",
            type: "string",
            defaultValue: "absolute",
            description: "The CSS position value of the menu. ex: 'fixed'"
          },
          {
            name: "components",
            type: "Object<ComponentName: ReactNode>",
            defaultValue: "undefined",
            description:
              "Pass in an object with the keys of the component you would like to replace"
          },
          {
            name: "closeMenuOnSelect",
            type: "Boolean",
            defaultValue: "true",
            description: "Close the select menu when the user selects an option"
          }
        ].concat(
          Object(a.a)(
            l.a.map(function(e) {
              return "required" === e.name
                ? {
                    name: "required",
                    type: "boolean",
                    defaultValue: "false",
                    description:
                      "adds requirement text and asterisk to the label, NOTE: this does not behave like a required html input that blocks form submission when no value is entered, you must check the value of the select manually when submitting"
                  }
                : e;
            })
          )
        );
      t.a = i;
    },
    fEP7: function(e, t, n) {
      "use strict";
      n.d(t, "b", function() {
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
        l = [].concat(a, [
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
      t.a = l;
    },
    jVpH: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("t8Zj"),
        l = n("q1tI"),
        i = n.n(l),
        o = n("TJpk"),
        r = n("yoZo"),
        u = n("xj1T"),
        s = n.n(u),
        d = n("Kvkj"),
        c = n("L069"),
        p = n("ttvI"),
        m = [
          {
            name: "timeFormat",
            type: "String",
            defaultValue: "hh:mm aa",
            description:
              "The default time format (see date-fns for available time formats)"
          },
          {
            name: "interval",
            type: "Number",
            defaultValue: "15",
            description:
              "The time difference in minutes between the time options"
          },
          {
            name: "minTime",
            type: "24 hour time string e.g: 02:30",
            defaultValue: "undefined",
            description: "The latest time that can be selected."
          },
          {
            name: "maxTime",
            type: "24 hour time string e.g: 02:30",
            defaultValue: "undefined",
            description: "The latest time that can be selected."
          }
        ].concat(
          Object(a.a)(
            c.a.filter(function(e) {
              return "options" !== e.name;
            })
          )
        );
      t.default = function() {
        return i.a.createElement(
          d.h,
          null,
          i.a.createElement(
            o.Helmet,
            null,
            i.a.createElement("title", null, "Time Picker")
          ),
          i.a.createElement(
            d.e,
            null,
            i.a.createElement(r.fb, null, "Time Picker"),
            i.a.createElement(
              d.f,
              null,
              "Time pickers allow users to easily enter times."
            )
          ),
          i.a.createElement(
            d.a,
            null,
            i.a.createElement(r.db, null),
            i.a.createElement(
              s.a,
              { className: "js" },
              'import { TimePicker } from "@nulogy/components";\n\n<TimePicker\n  onChange={(val) => val}\n  onInputChange={(val) => val}\n/>\n'
            )
          ),
          i.a.createElement(
            d.a,
            null,
            i.a.createElement(r.T, null, "Props"),
            i.a.createElement(d.i, { propsRows: m })
          ),
          i.a.createElement(
            d.a,
            null,
            i.a.createElement(r.T, null, "Related components"),
            i.a.createElement(
              r.F,
              null,
              i.a.createElement(
                r.G,
                null,
                i.a.createElement(
                  r.E,
                  { href: "/components/date-picker" },
                  "Date Picker"
                )
              ),
              i.a.createElement(
                r.G,
                null,
                i.a.createElement(r.E, { href: "/components/input" }, "Input")
              ),
              i.a.createElement(
                r.G,
                null,
                i.a.createElement(r.E, { href: "/components/form" }, "Form")
              )
            )
          ),
          i.a.createElement(
            d.a,
            null,
            i.a.createElement(r.T, null, "Resources"),
            i.a.createElement(
              r.F,
              null,
              i.a.createElement(
                r.G,
                null,
                i.a.createElement(
                  r.E,
                  { href: p.a + "timepicker--default" },
                  "View in Storybook"
                )
              )
            )
          )
        );
      };
    },
    ttvI: function(e, t, n) {
      "use strict";
      n.d(t, "c", function() {
        return a;
      }),
        n.d(t, "a", function() {
          return l;
        }),
        n.d(t, "b", function() {
          return i;
        });
      var a = "https://storybook.nulogy.design/?path=/story/",
        l = a + "components-",
        i = a + "pages-";
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-time-picker-js-124ae478947f85fa865a.js.map
