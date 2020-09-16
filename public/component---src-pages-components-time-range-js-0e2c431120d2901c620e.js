(window.webpackJsonp = window.webpackJsonp || []).push([
  [47],
  {
    cYik: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a("q1tI"),
        l = a.n(n),
        r = a("TJpk"),
        i = a("yoZo"),
        o = a("xj1T"),
        s = a.n(o),
        d = a("Kvkj"),
        u = a("k3Fp"),
        m = a("ttvI"),
        c = [
          {
            name: "onRangeChange",
            type: "function",
            defaultValue: "undefined",
            description:
              "The function that will be called whenever the dates in the month range change. Returns an object with the start date, end date and current error, if any."
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
            name: "timeFormat",
            type: "String",
            defaultValue: "hh:mm aa",
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
            name: "startTimeErrorMessage",
            type: "String",
            defaultValue: "undefined",
            description: "The error message to display below the start date."
          },
          {
            name: "endTimeErrorMessage",
            type: "String",
            defaultValue: "undefined",
            description: "The error message to display below the end date."
          },
          {
            name: "minTime",
            type: "24 hour time string e.g: 02:30",
            defaultValue: "undefined",
            description: "The earliest time that can be selected."
          },
          {
            name: "maxTime",
            type: "24 hour time string e.g: 02:30",
            defaultValue: "undefined",
            description: "The latest time that can be selected."
          },
          {
            name: "labelProps",
            type: "Object",
            defaultValue: "{ labelText: 'Time Range'}",
            description:
              "Options for the month range label. See Label Props for available option keys."
          },
          {
            name: "disableRangeValidation",
            type: "boolean",
            defaultValue: "false",
            description:
              "Disables the the end date before start date error message."
          },
          {
            name: "interval",
            type: "Number",
            defaultValue: "15",
            description:
              "The time difference in minutes between the time options"
          }
        ];
      t.default = function() {
        return l.a.createElement(
          d.h,
          null,
          l.a.createElement(
            r.Helmet,
            null,
            l.a.createElement("title", null, "Time Range")
          ),
          l.a.createElement(
            d.e,
            null,
            l.a.createElement(i.fb, null, "Time Range"),
            l.a.createElement(
              d.f,
              null,
              "Time ranges allow users to easily enter a range of dates. If the end date is before the start date, by default an error message will be displayed."
            )
          ),
          l.a.createElement(
            d.a,
            null,
            l.a.createElement(i.eb, null),
            l.a.createElement(
              s.a,
              { className: "js" },
              'import { TimeRange } from "@nulogy/components";\n\n<TimeRange\n  onRangeChange={(val) => val}\n/>\n'
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
            l.a.createElement(i.T, null, "Label Props"),
            l.a.createElement(d.i, { propsRows: u.a })
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
                l.a.createElement(
                  i.E,
                  { href: "/components/date-range" },
                  "Date Range"
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
                  { href: m.a + "timerange--default" },
                  "View in Storybook"
                )
              )
            )
          )
        );
      };
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
//# sourceMappingURL=component---src-pages-components-time-range-js-0e2c431120d2901c620e.js.map
