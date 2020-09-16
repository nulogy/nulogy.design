(window.webpackJsonp = window.webpackJsonp || []).push([
  [18],
  {
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
    ttvI: function(e, t, n) {
      "use strict";
      n.d(t, "c", function() {
        return a;
      }),
        n.d(t, "a", function() {
          return l;
        }),
        n.d(t, "b", function() {
          return r;
        });
      var a = "https://storybook.nulogy.design/?path=/story/",
        l = "".concat(a, "components-"),
        r = "".concat(a, "pages-");
    },
    xlbP: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("q1tI"),
        l = n.n(a),
        r = n("TJpk"),
        i = n("3/HP"),
        u = n("xj1T"),
        o = n.n(u),
        d = n("Kvkj"),
        s = n("fEP7"),
        p = n("ttvI"),
        c = [
          {
            name: "selected",
            type: "Date",
            defaultValue: "undefined",
            description: "The time to display"
          },
          {
            name: "inputProps",
            type: "Object",
            defaultValue: "undefined",
            description: "Options for the input field, see inputProps table "
          },
          {
            name: "onChange",
            type: "Function",
            defaultValue: "undefined",
            description:
              "Change event handler that will be run whenever the value of the input is updated."
          },
          {
            name: "onInputChange",
            type: "Function",
            defaultValue: "undefined",
            description:
              "Event handler for when the value typed into the input changes"
          },
          {
            name: "dateFormat",
            type: "String",
            defaultValue: "dd MMM yyyy",
            description:
              "The default date format (see date-fns for available date formats)"
          },
          {
            name: "errorMessage",
            type: "String",
            defaultValue: "undefined",
            description: "The error message to display"
          },
          {
            name: "minDate",
            type: "Date",
            defaultValue: "undefined",
            description: "The earliest date that can be selected"
          },
          {
            name: "maxDate",
            type: "Date",
            defaultValue: "undefined",
            description: "The latest date that can be selected"
          },
          {
            name: "disableFlipping",
            type: "boolean",
            defaultValue: "false",
            description:
              "If true, always opens the calendar below the input rather than automatically flipping upward if there is not enough space below the input"
          },
          { name: "className", type: "string", defaultValue: "undefined" }
        ];
      t.default = function() {
        return l.a.createElement(
          d.h,
          null,
          l.a.createElement(
            r.Helmet,
            null,
            l.a.createElement("title", null, "Date Picker")
          ),
          l.a.createElement(
            d.e,
            null,
            l.a.createElement(i.fb, null, "Date Picker"),
            l.a.createElement(
              d.f,
              null,
              "Date pickers allow users to easily enter dates."
            )
          ),
          l.a.createElement(
            d.a,
            null,
            l.a.createElement(i.o, {
              selected: new Date("Fri, 01 Jan 2019"),
              dateFormat: "MMMM d, yyyy"
            }),
            l.a.createElement(
              o.a,
              { className: "js" },
              'import { DatePicker } from "@nulogy/components";\n\n<DatePicker\n  selected={new Date("Fri, 01 Jan 2019")}\n  dateFormat="MMMM d, yyyy"\n  onChange={(val) => val}\n  onInputChange={(val) => val}\n/>\n'
            )
          ),
          l.a.createElement(
            d.a,
            null,
            l.a.createElement(i.T, null, "Props"),
            l.a.createElement(d.i, { propsRows: c })
          ),
          l.a.createElement(
            d.a,
            null,
            l.a.createElement(i.T, null, "Input Props"),
            l.a.createElement(d.i, { propsRows: s.b })
          ),
          l.a.createElement(
            d.a,
            null,
            l.a.createElement(i.T, null, "Related components"),
            l.a.createElement(
              i.F,
              null,
              l.a.createElement(
                i.G,
                null,
                l.a.createElement(i.E, { href: "/components/input" }, "Input")
              ),
              l.a.createElement(
                i.G,
                null,
                l.a.createElement(i.E, { href: "/components/form" }, "Form")
              )
            )
          ),
          l.a.createElement(
            d.a,
            null,
            l.a.createElement(i.T, null, "Resources"),
            l.a.createElement(
              i.F,
              null,
              l.a.createElement(
                i.G,
                null,
                l.a.createElement(
                  i.E,
                  { href: "".concat(p.a, "datepicker--default") },
                  "View in Storybook"
                )
              )
            )
          )
        );
      };
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-date-picker-js-4a2293058c7197d7b852.js.map
