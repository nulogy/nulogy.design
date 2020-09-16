(window.webpackJsonp = window.webpackJsonp || []).push([
  [19],
  {
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
        l = "".concat(n, "components-"),
        r = "".concat(n, "pages-");
    },
    zewC: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a("q1tI"),
        l = a.n(n),
        r = a("TJpk"),
        i = a("3/HP"),
        d = a("xj1T"),
        o = a.n(d),
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
            defaultValue: "{ labelText: 'Date Range'}",
            description:
              "Options for the month range label. See Label Props for available option keys."
          },
          {
            name: "disableRangeValidation",
            type: "boolean",
            defaultValue: "false",
            description:
              "Disables the end date before start date error message."
          },
          {
            name: "showTimes",
            type: "boolean",
            defaultValue: "false",
            description:
              "Shows time pickers next to the date inputs so that a times can be selected."
          },
          {
            name: "minTime",
            type: "24 hour time string e.g: 02:30",
            defaultValue: "undefined",
            description: "The earliest time that can be selected."
          },
          {
            name: "defaultStartTime",
            type: "24 hour time string e.g: 02:30",
            defaultValue: "undefined",
            description: "The default start date."
          },
          {
            name: "defaultEndTime",
            type: "24 hour time string e.g: 02:30",
            defaultValue: "undefined",
            description: "The default end date."
          },
          {
            name: "maxTime",
            type: "24 hour time string e.g: 02:30",
            defaultValue: "undefined",
            description: "The latest time that can be selected."
          },
          {
            name: "timeFormat",
            type: "String",
            defaultValue: "hh:mm aa",
            description:
              "The default date format (see date-fns for available date formats)"
          },
          {
            name: "interval",
            type: "Number",
            defaultValue: "15",
            description:
              "The time difference in minutes between the time options"
          },
          {
            name: "disableFlipping",
            type: "boolean",
            defaultValue: "false",
            description:
              "If true, always opens the calendar below the input rather than automatically flipping upward if there is not enough space below the input"
          }
        ];
      t.default = function() {
        return l.a.createElement(
          s.h,
          null,
          l.a.createElement(
            r.Helmet,
            null,
            l.a.createElement("title", null, "Date Range")
          ),
          l.a.createElement(
            s.e,
            null,
            l.a.createElement(i.fb, null, "Date Range"),
            l.a.createElement(
              s.f,
              null,
              "Date ranges allow users to easily enter a range of dates. If the end date is before the start date, by default an error message will be displayed."
            )
          ),
          l.a.createElement(
            s.a,
            null,
            l.a.createElement(i.p, null),
            l.a.createElement(
              o.a,
              { className: "js" },
              'import { DateRange } from "@nulogy/components";\n\n<DateRange onRangeChange={(val) => val} />\n'
            )
          ),
          l.a.createElement(
            s.a,
            null,
            l.a.createElement(i.T, null, "Date Range with Times"),
            l.a.createElement(i.p, { showTimes: !0 }),
            l.a.createElement(
              o.a,
              { className: "js" },
              "<DateRange\n  onRangeChange={(val) => val}\n  showTimes\n/>\n"
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
                  { href: "/components/month-range" },
                  "Month Range"
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
                  { href: "".concat(c.a, "daterange--default") },
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
//# sourceMappingURL=component---src-pages-components-date-range-js-ac23ff62f1e440eed7ae.js.map
