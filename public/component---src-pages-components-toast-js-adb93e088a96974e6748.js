(window.webpackJsonp = window.webpackJsonp || []).push([
  [48],
  {
    "3R2T": function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("q1tI"),
        l = n.n(a),
        o = n("TJpk"),
        r = n("xj1T"),
        i = n.n(r),
        s = n("yoZo"),
        c = n("Kvkj"),
        m = n("ttvI"),
        u = function() {
          var e = Object(a.useState)(!1),
            t = e[0],
            n = e[1];
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              s.h,
              {
                onClick: function() {
                  n(!t);
                }
              },
              "Trigger Toast"
            ),
            l.a.createElement(
              s.gb,
              {
                triggered: t,
                onHide: function() {
                  n(!1);
                }
              },
              "Toast!"
            )
          );
        },
        d = [
          {
            name: "triggered",
            type: "boolean",
            defaultValue: "false",
            description: "Whether to display to the tooltip or not"
          },
          {
            name: "onShow",
            type: "function",
            description: "callback that is called when the tooltip is shown"
          },
          {
            name: "onHide",
            type: "function",
            description:
              "callback that is called when the tooltip is dismissed or begins to fade out"
          },
          {
            name: "onHidden",
            type: "function",
            description:
              "callback that is called when the tooltip has been completely hidden after the fade out animation is complete"
          },
          {
            name: "showDuration",
            type: "number",
            description:
              "length of time in ms to display the Toast before hiding it"
          },
          {
            name: "isCloseable",
            type: "boolean",
            description:
              "displays a close button in the Toast when true, and the Toast must then by manually dismissed by clicking the close button"
          }
        ];
      t.default = function() {
        return l.a.createElement(
          c.h,
          null,
          l.a.createElement(
            o.Helmet,
            null,
            l.a.createElement("title", null, "Toast")
          ),
          l.a.createElement(
            c.e,
            null,
            l.a.createElement(s.fb, null, "Toast"),
            l.a.createElement(
              c.f,
              null,
              "Temporarily displayed messages that provide additional information or feedback about a user's action or event. Hovering over a message will keep it in view."
            )
          ),
          l.a.createElement(
            c.a,
            null,
            l.a.createElement(u, null),
            l.a.createElement(
              i.a,
              { className: "js" },
              "<Toast triggered={triggered} onHide={onHideHandler}>\n            Saved\n          </Toast>\n        "
            )
          ),
          l.a.createElement(
            c.a,
            null,
            l.a.createElement(s.T, null, "Use when"),
            l.a.createElement(
              s.F,
              null,
              l.a.createElement(
                s.G,
                null,
                "There are low priority messages to display in response to some event or action — i.e. messages that are helpful, although not intrinsic to the experience"
              ),
              l.a.createElement(
                s.G,
                null,
                "The information contained is very concise and easy to read and understand within seconds"
              ),
              l.a.createElement(
                s.G,
                null,
                "The message is less than 2 lines long or 150 characters"
              )
            )
          ),
          l.a.createElement(
            c.a,
            null,
            l.a.createElement(s.T, null, "Don't use when "),
            l.a.createElement(
              s.F,
              null,
              l.a.createElement(
                s.G,
                null,
                "The information contained is vital to completing a task"
              ),
              l.a.createElement(
                s.G,
                null,
                "The message is too long to read and understood within seconds (> 150 characters)"
              )
            )
          ),
          l.a.createElement(
            c.a,
            null,
            l.a.createElement(s.T, null, "Props"),
            l.a.createElement(
              s.bb,
              null,
              "All props availble on the ",
              l.a.createElement(s.E, { href: "/components/alert" }, "Alert"),
              " ",
              "component are available in addition to the options below."
            ),
            l.a.createElement(c.i, { propsRows: d })
          ),
          l.a.createElement(
            c.a,
            null,
            l.a.createElement(s.T, null, "Related components"),
            l.a.createElement(
              s.F,
              null,
              l.a.createElement(
                s.G,
                null,
                l.a.createElement(s.E, { href: "/components/alert" }, "Alert")
              )
            )
          ),
          l.a.createElement(
            c.a,
            null,
            l.a.createElement(s.T, null, "Resources"),
            l.a.createElement(
              s.G,
              null,
              l.a.createElement(
                s.E,
                { href: m.a + "toast--toast" },
                "View in Storybook"
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
          return o;
        });
      var a = "https://storybook.nulogy.design/?path=/story/",
        l = a + "components-",
        o = a + "pages-";
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-toast-js-adb93e088a96974e6748.js.map
