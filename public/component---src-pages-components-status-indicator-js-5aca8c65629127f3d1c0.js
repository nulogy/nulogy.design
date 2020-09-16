(window.webpackJsonp = window.webpackJsonp || []).push([
  [40],
  {
    "5ely": function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a("q1tI"),
        r = a.n(n),
        l = a("TJpk"),
        s = a("xj1T"),
        c = a.n(s),
        o = a("yoZo"),
        m = a("Kvkj"),
        i = a("ttvI"),
        u = [
          {
            name: "type",
            type: "string",
            defaultValue: "neutral",
            description:
              "The type of Status Indicator. Accepts neutral, dark, informative, danger, warning, success, and quiet."
          }
        ];
      t.default = function() {
        return r.a.createElement(
          m.h,
          null,
          r.a.createElement(
            l.Helmet,
            null,
            r.a.createElement("title", null, "Status Indicator")
          ),
          r.a.createElement(
            m.e,
            null,
            r.a.createElement(o.fb, null, "Status Indicator"),
            r.a.createElement(
              m.f,
              null,
              "Status Indicator communicates the state of an object."
            )
          ),
          r.a.createElement(
            m.a,
            null,
            r.a.createElement(o.W, null, "In progress"),
            r.a.createElement(
              c.a,
              { className: "js" },
              'import {StatusIndicator} from "@nulogy/components";\n\n<StatusIndicator>In progress</StatusIndicator>\n'
            )
          ),
          r.a.createElement(
            m.a,
            null,
            r.a.createElement(o.T, null, "Use to"),
            r.a.createElement(
              o.F,
              null,
              r.a.createElement(
                o.G,
                null,
                "Show a progression through the life cycle stages of an object (Started, In progress, In review, Completed, ...)"
              ),
              r.a.createElement(
                o.G,
                null,
                "Compare objects qualitatively (Example: Good, Bad, Quarantined, ...)"
              ),
              r.a.createElement(
                o.G,
                null,
                "Monitor the number of quantifiable characteristics of an object (time, materials). (Example: On time, Late, Early, Out of stock, Running low, ...)"
              )
            )
          ),
          r.a.createElement(
            m.a,
            null,
            r.a.createElement(o.T, null, "Variations"),
            r.a.createElement(
              o.d,
              { mb: "x6" },
              r.a.createElement(o.X, null, "Neutral"),
              r.a.createElement(
                o.bb,
                { mb: "x3" },
                "Used for neutral states and states that indicate progression. (Example: Staring, In progress, Pending ...)"
              ),
              r.a.createElement(o.W, null, "In progress"),
              r.a.createElement(
                c.a,
                { className: "js" },
                "<StatusIndicator>In progress</StatusIndicator>"
              )
            ),
            r.a.createElement(
              o.d,
              { mb: "x6" },
              r.a.createElement(o.X, null, "Dark"),
              r.a.createElement(
                o.bb,
                { mb: "x3" },
                "A dark neutral state, which can be used for things like a state being completed, finished or closed. Use when there's no need to signify success or failure."
              ),
              r.a.createElement(o.W, { type: "dark" }, "Completed"),
              r.a.createElement(
                c.a,
                { className: "js" },
                '<StatusIndicator type="dark">Completed</StatusIndicator>'
              )
            ),
            r.a.createElement(
              o.d,
              { mb: "x6" },
              r.a.createElement(o.X, null, "Informative"),
              r.a.createElement(
                o.bb,
                { mb: "x3" },
                "Used for indicating the objects that underwent a change. (Example: New, Updated, ...)"
              ),
              r.a.createElement(o.W, { type: "informative" }, "New"),
              r.a.createElement(
                c.a,
                { className: "js" },
                '<StatusIndicator type="informative">Informative</StatusIndicator>'
              )
            ),
            r.a.createElement(
              o.d,
              { mb: "x6" },
              r.a.createElement(o.X, null, "Success"),
              r.a.createElement(
                o.bb,
                { mb: "x3" },
                "Used for optimistic and positive statuses. (Example: 2 days early, Good, On track ...)"
              ),
              r.a.createElement(o.W, { type: "success" }, "2 days early"),
              r.a.createElement(
                c.a,
                { className: "js" },
                '<StatusIndicator type="success">2 days early</StatusIndicator>'
              )
            ),
            r.a.createElement(
              o.d,
              { mb: "x6" },
              r.a.createElement(o.X, null, "Danger"),
              r.a.createElement(
                o.bb,
                { mb: "x3" },
                "Used for statuses that indicate failure that may or may not be in your control. (Example: Canceled, Bad, Late ...)"
              ),
              r.a.createElement(o.W, { type: "danger" }, "Canceled"),
              r.a.createElement(
                c.a,
                { className: "js" },
                '<StatusIndicator type="danger">Canceled</StatusIndicator>'
              )
            ),
            r.a.createElement(
              o.d,
              { mb: "x6" },
              r.a.createElement(o.X, null, "Warning"),
              r.a.createElement(
                o.bb,
                { mb: "x3" },
                "Used for statuses that require attention in order to prevent failure. (Example: At risk, ...)"
              ),
              r.a.createElement(o.W, { type: "warning" }, "At risk"),
              r.a.createElement(
                c.a,
                { className: "js" },
                '<StatusIndicator type="warning">At risk</StatusIndicator>'
              )
            ),
            r.a.createElement(
              o.d,
              { mb: "x6" },
              r.a.createElement(o.X, null, "Quiet"),
              r.a.createElement(
                o.bb,
                { mb: "x3" },
                "Used for secondary states when 2 statuses are combined."
              ),
              r.a.createElement(o.W, { type: "quiet" }, "Quiet"),
              r.a.createElement(
                c.a,
                { className: "js" },
                '<StatusIndicator type="quiet">Quiet</StatusIndicator>'
              )
            )
          ),
          r.a.createElement(
            m.a,
            null,
            r.a.createElement(o.T, null, "Props"),
            r.a.createElement(m.i, { propsRows: u }),
            r.a.createElement(
              o.bb,
              { mt: "x3" },
              "The StatusIndicator component has access to",
              " ",
              r.a.createElement(m.d, null, "space"),
              ", ",
              r.a.createElement(m.d, null, "typography"),
              ", and",
              " ",
              r.a.createElement(m.d, null, "flexbox"),
              " style props. See the",
              " ",
              r.a.createElement(
                o.E,
                { href: "/guides/style-props" },
                "style prop documentation"
              ),
              " for a full list of available props."
            )
          ),
          r.a.createElement(
            m.a,
            null,
            r.a.createElement(o.T, null, "Resources"),
            r.a.createElement(
              o.F,
              null,
              r.a.createElement(
                o.G,
                null,
                r.a.createElement(
                  o.E,
                  { href: i.a + "statusindicator--all" },
                  "View in Storybook"
                )
              )
            )
          )
        );
      };
    },
    ttvI: function(e, t, a) {
      "use strict";
      a.d(t, "c", function() {
        return n;
      }),
        a.d(t, "a", function() {
          return r;
        }),
        a.d(t, "b", function() {
          return l;
        });
      var n = "https://storybook.nulogy.design/?path=/story/",
        r = n + "components-",
        l = n + "pages-";
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-status-indicator-js-5aca8c65629127f3d1c0.js.map
