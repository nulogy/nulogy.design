(window.webpackJsonp = window.webpackJsonp || []).push([
  [33],
  {
    An8B: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a("q1tI"),
        l = a.n(n),
        r = a("TJpk"),
        i = a("yoZo"),
        o = a("xj1T"),
        d = a.n(o),
        s = a("Kvkj"),
        u = a("fEP7"),
        p = a("k3Fp"),
        c = a("ttvI"),
        f = [
          {
            name: "onRangeChange",
            type: "function",
            defaultValue: "undefined",
            description:
              "The function that will be called whenever the dates in the month range change. Returns an object with the start date, end date and current error, if any."
          },
          {
            name: "startDateInputProps",
            type: "Object",
            defaultValue: "undefined",
            description:
              "Options for the start date input field, see inputProps table."
          },
          {
            name: "endDateInputProps",
            type: "Object",
            defaultValue: "undefined",
            description:
              "Options for the end date input field, see inputProps table."
          },
          {
            name: "defaultStartDate",
            type: "String",
            defaultValue: "undefined",
            description: "The default start date."
          },
          {
            name: "defaultEndDate",
            type: "String",
            defaultValue: "undefined",
            description: "The default end date."
          },
          {
            name: "dateFormat",
            type: "String",
            defaultValue: "MMM yyyy",
            description:
              "The default date format (see date-fns for available date formats)"
          },
          {
            name: "errorMessage",
            type: "String",
            defaultValue: "undefined",
            description: "The error message to display for the range."
          },
          {
            name: "startDateErrorMessage",
            type: "String",
            defaultValue: "undefined",
            description: "The error message to display below the start date."
          },
          {
            name: "endDateErrorMessage",
            type: "String",
            defaultValue: "undefined",
            description: "The error message to display below the end date."
          },
          {
            name: "minDate",
            type: "Date",
            defaultValue: "undefined",
            description: "The earliest date that can be selected."
          },
          {
            name: "maxDate",
            type: "Date",
            defaultValue: "undefined",
            description: "The latest date that can be selected."
          },
          {
            name: "labelProps",
            type: "Object",
            defaultValue: "{ labelText: 'Month Range'}",
            description:
              "Options for the month range label. See fieldLabelProps for available option keys."
          },
          {
            name: "disableRangeValidation",
            type: "boolean",
            defaultValue: "false",
            description:
              "Disables the the end date before start date error message."
          },
          {
            name: "disableAutocomplete",
            type: "boolean",
            defaultValue: "false",
            description:
              "Disables auto-completing the year after typing in the month"
          }
        ];
      t.default = function() {
        return l.a.createElement(
          s.h,
          null,
          l.a.createElement(
            r.Helmet,
            null,
            l.a.createElement("title", null, "Month Range")
          ),
          l.a.createElement(
            s.e,
            null,
            l.a.createElement(i.fb, null, "Month Range"),
            l.a.createElement(
              s.f,
              null,
              "Month ranges allow users to easily enter a range of months. If the end date is before the start date, by default an error message will be displayed."
            )
          ),
          l.a.createElement(
            s.a,
            null,
            l.a.createElement(i.K, null),
            l.a.createElement(
              d.a,
              { className: "js" },
              'import { MonthRange } from "@nulogy/components";\n\n<MonthRange\n  onRangeChange={(val) => val}\n/>\n'
            )
          ),
          l.a.createElement(
            s.a,
            null,
            l.a.createElement(i.T, null, "Props"),
            l.a.createElement(s.i, { propsRows: f })
          ),
          l.a.createElement(
            s.a,
            null,
            l.a.createElement(i.T, null, "Input Props"),
            l.a.createElement(s.i, { propsRows: u.b })
          ),
          l.a.createElement(
            s.a,
            null,
            l.a.createElement(i.T, null, "Label Props"),
            l.a.createElement(s.i, { propsRows: p.a })
          ),
          l.a.createElement(
            s.a,
            null,
            l.a.createElement(i.T, null, "Related components"),
            l.a.createElement(
              i.F,
              null,
              l.a.createElement(
                i.G,
                null,
                l.a.createElement(
                  i.E,
                  { href: "/components/date-picker" },
                  "Date Picker"
                )
              ),
              l.a.createElement(
                i.G,
                null,
                l.a.createElement(
                  i.E,
                  { href: "/components/time-picker" },
                  "Time Picker"
                )
              )
            )
          ),
          l.a.createElement(
            s.a,
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
                  { href: c.a + "monthrange--default" },
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
        l = [].concat(n, [
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
    k3Fp: function(e, t, a) {
      "use strict";
      t.a = [
        {
          name: "labelText",
          type: "String",
          defaultValue: "Required",
          description:
            "Informs users what the corresponding input field is for."
        },
        {
          name: "helpText",
          type: "String",
          defaultValue: "null",
          description:
            "Placed below the label to provide assistance on how to fill out a field or the expected format. It can also provide an explanation of why the information is needed and how it will be used."
        },
        {
          name: "requirementText",
          type: "String",
          defaultValue: "null",
          description: "Text to add to the the label: (Optional) or (Required)."
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
          return r;
        });
      var n = "https://storybook.nulogy.design/?path=/story/",
        l = n + "components-",
        r = n + "pages-";
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-month-range-js-712131a4ca2b4639f95f.js.map
