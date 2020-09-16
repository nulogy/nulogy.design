(window.webpackJsonp = window.webpackJsonp || []).push([
  [48],
  {
    "3R2T": function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("tGry"),
        l = n.n(a),
        o = n("q1tI"),
        r = n.n(o),
        i = n("TJpk"),
        s = n("xj1T"),
        c = n.n(s),
        m = n("3/HP"),
        u = n("Kvkj"),
        d = n("ttvI"),
        h = function() {
          var e = Object(o.useState)(!1),
            t = l()(e, 2),
            n = t[0],
            a = t[1];
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              m.h,
              {
                onClick: function() {
                  a(!n);
                }
              },
              "Trigger Toast"
            ),
            r.a.createElement(
              m.gb,
              {
                triggered: n,
                onHide: function() {
                  a(!1);
                }
              },
              "Toast!"
            )
          );
        },
        p = [
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
        return r.a.createElement(
          u.h,
          null,
          r.a.createElement(
            i.Helmet,
            null,
            r.a.createElement("title", null, "Toast")
          ),
          r.a.createElement(
            u.e,
            null,
            r.a.createElement(m.fb, null, "Toast"),
            r.a.createElement(
              u.f,
              null,
              "Temporarily displayed messages that provide additional information or feedback about a user's action or event. Hovering over a message will keep it in view."
            )
          ),
          r.a.createElement(
            u.a,
            null,
            r.a.createElement(h, null),
            r.a.createElement(
              c.a,
              { className: "js" },
              "<Toast triggered={triggered} onHide={onHideHandler}>\n            Saved\n          </Toast>\n        "
            )
          ),
          r.a.createElement(
            u.a,
            null,
            r.a.createElement(m.T, null, "Use when"),
            r.a.createElement(
              m.F,
              null,
              r.a.createElement(
                m.G,
                null,
                "There are low priority messages to display in response to some event or action — i.e. messages that are helpful, although not intrinsic to the experience"
              ),
              r.a.createElement(
                m.G,
                null,
                "The information contained is very concise and easy to read and understand within seconds"
              ),
              r.a.createElement(
                m.G,
                null,
                "The message is less than 2 lines long or 150 characters"
              )
            )
          ),
          r.a.createElement(
            u.a,
            null,
            r.a.createElement(m.T, null, "Don't use when "),
            r.a.createElement(
              m.F,
              null,
              r.a.createElement(
                m.G,
                null,
                "The information contained is vital to completing a task"
              ),
              r.a.createElement(
                m.G,
                null,
                "The message is too long to read and understood within seconds (> 150 characters)"
              )
            )
          ),
          r.a.createElement(
            u.a,
            null,
            r.a.createElement(m.T, null, "Props"),
            r.a.createElement(
              m.bb,
              null,
              "All props availble on the ",
              r.a.createElement(m.E, { href: "/components/alert" }, "Alert"),
              " ",
              "component are available in addition to the options below."
            ),
            r.a.createElement(u.i, { propsRows: p })
          ),
          r.a.createElement(
            u.a,
            null,
            r.a.createElement(m.T, null, "Related components"),
            r.a.createElement(
              m.F,
              null,
              r.a.createElement(
                m.G,
                null,
                r.a.createElement(m.E, { href: "/components/alert" }, "Alert")
              )
            )
          ),
          r.a.createElement(
            u.a,
            null,
            r.a.createElement(m.T, null, "Resources"),
            r.a.createElement(
              m.G,
              null,
              r.a.createElement(
                m.E,
                { href: "".concat(d.a, "toast--toast") },
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
        l = "".concat(a, "components-"),
        o = "".concat(a, "pages-");
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-toast-js-647d642c292b126cfe2b.js.map
