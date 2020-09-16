(window.webpackJsonp = window.webpackJsonp || []).push([
  [61],
  {
    Bed0: function(e, t, a) {
      e.exports =
        a.p + "static/spacing-anatomy-2c3740af1a1bda340aec40e64c403a73.png";
    },
    mWLV: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a("q1tI"),
        l = a.n(n),
        c = a("TJpk"),
        r = a("yoZo"),
        m = a("Kvkj"),
        s = a("Bed0"),
        i = a.n(s),
        o = function(e) {
          var t = e.size,
            a = e.scale;
          return l.a.createElement(
            r.d,
            null,
            l.a.createElement(
              r.u,
              {
                height: "64px",
                verticalAlign: "bottom",
                alignItems: "flex-end"
              },
              l.a.createElement(r.d, {
                bg: "lightBlue",
                mx: "auto",
                mb: "x2",
                height: t,
                width: t
              })
            ),
            l.a.createElement(
              r.bb,
              {
                textAlign: "center",
                fontSize: { extraSmall: "small", medium: "medium" },
                mb: "half"
              },
              t
            ),
            l.a.createElement(
              r.bb,
              { textAlign: "center", fontSize: "small" },
              a
            )
          );
        },
        u = function(e) {
          var t = e.values;
          return Object.keys(t).map(function(e) {
            return "none" === e
              ? null
              : l.a.createElement(o, { size: t[e], scale: e });
          });
        };
      t.default = function() {
        return l.a.createElement(
          m.h,
          null,
          l.a.createElement(
            c.Helmet,
            null,
            l.a.createElement("title", null, "Spacing")
          ),
          l.a.createElement(
            m.e,
            null,
            l.a.createElement(r.fb, null, "Spacing"),
            l.a.createElement(
              m.f,
              null,
              "A spacing scale is used to maintain consistent paddings between and within elements throughout our products. Sticking to a scale allows us to be more consistent and predictable, and makes our designs more harmonious."
            )
          ),
          l.a.createElement(
            m.a,
            null,
            l.a.createElement(r.T, null, "Scale"),
            l.a.createElement(
              r.bb,
              { mb: "x3" },
              "Nulogy uses a scale based on 8px with modifiers from half (4px) to 8x (64px)."
            ),
            l.a.createElement(
              r.u,
              { justifyContent: "space-between" },
              l.a.createElement(u, { values: r.kb.space })
            )
          ),
          l.a.createElement(
            m.a,
            null,
            l.a.createElement(r.T, null, "Example"),
            l.a.createElement("img", { src: i.a, alt: "Spacing example" })
          ),
          l.a.createElement(
            m.a,
            null,
            l.a.createElement(r.T, null, "How to choose spacing"),
            l.a.createElement(
              r.bb,
              null,
              "There are two important factors to consider when choosing spacing:",
              " ",
              l.a.createElement("em", null, "size"),
              " and ",
              l.a.createElement("em", null, "relatedness")
            ),
            l.a.createElement(
              r.d,
              { mb: "x2" },
              l.a.createElement(
                r.F,
                null,
                l.a.createElement(
                  r.G,
                  null,
                  "Use less spacing inside smaller elements or between functionally related elements."
                ),
                l.a.createElement(
                  r.G,
                  null,
                  "Use more spacing inside larger elements or between less functionally related elements"
                )
              )
            ),
            l.a.createElement(
              r.bb,
              { fontSize: "small" },
              l.a.createElement(
                "em",
                null,
                "Note: half should mostly be used for spacing related items within an element, e.g a button’s text and it’s icon."
              )
            )
          ),
          l.a.createElement(
            m.a,
            null,
            l.a.createElement(r.T, null, "Related links"),
            l.a.createElement(
              r.F,
              null,
              l.a.createElement(
                r.G,
                null,
                l.a.createElement(r.E, { href: "/theme/" }, "NDS theme")
              )
            )
          )
        );
      };
    }
  }
]);
//# sourceMappingURL=component---src-pages-style-spacing-js-1c1e6bd6f198da0e3c79.js.map
