(window.webpackJsonp = window.webpackJsonp || []).push([
  [30],
  {
    ZmFD: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("q1tI"),
        l = n.n(a),
        c = (n("17x9"), n("TJpk")),
        i = n("xj1T"),
        o = n.n(i),
        r = n("3/HP"),
        m = n("Kvkj"),
        s = n("ttvI"),
        u = [
          {
            name: "inactive",
            type: "Boolean",
            defaultValue: "false",
            description: "Toggles between active and inactive styles"
          }
        ];
      t.default = function() {
        return l.a.createElement(
          m.h,
          null,
          l.a.createElement(
            c.Helmet,
            null,
            l.a.createElement("title", null, "Loading Animation")
          ),
          l.a.createElement(
            m.e,
            null,
            l.a.createElement(r.fb, null, "Loading Animation"),
            l.a.createElement(
              m.f,
              null,
              "Loading animation is used to indicate a delay in the system when duration can not be estimated."
            )
          ),
          l.a.createElement(
            m.a,
            null,
            l.a.createElement(
              r.u,
              { justifyContent: "center", mt: "x4", mb: "x8" },
              l.a.createElement(r.H, null)
            ),
            l.a.createElement(
              o.a,
              { className: "js" },
              'import { LoadingAnimation } from "@nulogy/components";\n\n<LoadingAnimation />\n'
            )
          ),
          l.a.createElement(
            m.a,
            null,
            l.a.createElement(r.T, null, "Use"),
            l.a.createElement(
              r.F,
              null,
              l.a.createElement(
                r.G,
                null,
                "When you want to overlay the entire screen with the animation"
              ),
              l.a.createElement(
                r.G,
                null,
                "When you don't know how long it will take for the action to be executed"
              ),
              l.a.createElement(
                r.G,
                null,
                "When the action will take at least 2 seconds to execute"
              )
            )
          ),
          l.a.createElement(
            m.a,
            null,
            l.a.createElement(r.T, null, "States"),
            l.a.createElement(
              r.bb,
              { mb: "x3" },
              "Loading animation comes in 2 states: ",
              l.a.createElement("strong", null, "active"),
              " and",
              " ",
              l.a.createElement("strong", null, "inactive"),
              "."
            ),
            l.a.createElement(
              m.b,
              null,
              l.a.createElement(r.X, null, "Active"),
              l.a.createElement(
                r.bb,
                { mb: "x3" },
                "Active state is the default state and is used to indicate the loading process."
              ),
              l.a.createElement(
                r.u,
                { justifyContent: "center", mt: "x2", mb: "x4" },
                l.a.createElement(r.H, null)
              ),
              l.a.createElement(o.a, { className: "js" }, "<LoadingAnimation/>")
            ),
            l.a.createElement(
              m.b,
              null,
              l.a.createElement(r.X, null, "Inactive"),
              l.a.createElement(
                r.bb,
                { mb: "x3" },
                "Inactive state is used to indicate loading process that takes longer than expected or is not able to complete."
              ),
              l.a.createElement(
                r.u,
                { justifyContent: "center", mt: "x2", mb: "x4" },
                l.a.createElement(r.H, { inactive: !0 })
              ),
              l.a.createElement(
                o.a,
                { className: "js" },
                "<LoadingAnimation inactive />"
              )
            )
          ),
          l.a.createElement(
            m.a,
            null,
            l.a.createElement(r.T, null, "Props"),
            l.a.createElement(m.i, { propsRows: u })
          ),
          l.a.createElement(
            m.a,
            null,
            l.a.createElement(r.T, null, "Related"),
            l.a.createElement(
              r.F,
              null,
              l.a.createElement(
                r.G,
                null,
                l.a.createElement(
                  r.E,
                  { href: "/patterns/loading" },
                  "Loading Content"
                )
              )
            )
          ),
          l.a.createElement(
            m.a,
            null,
            l.a.createElement(r.T, null, "Resources"),
            l.a.createElement(
              r.F,
              null,
              l.a.createElement(
                r.G,
                null,
                l.a.createElement(
                  r.E,
                  { href: "".concat(s.a, "loadinganimation") },
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
          return c;
        });
      var a = "https://storybook.nulogy.design/?path=/story/",
        l = "".concat(a, "components-"),
        c = "".concat(a, "pages-");
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-loading-animation-js-b14ca0ca7631e98f630e.js.map
