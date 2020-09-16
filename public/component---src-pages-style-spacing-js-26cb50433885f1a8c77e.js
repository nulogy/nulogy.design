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
        r = a("17x9"),
        s = a.n(r),
        c = a("TJpk"),
        m = a("3/HP"),
        i = a("Kvkj"),
        o = a("Bed0"),
        u = a.n(o),
        d = function(e) {
          var t = e.size,
            a = e.scale;
          return l.a.createElement(
            m.d,
            null,
            l.a.createElement(
              m.u,
              {
                height: "64px",
                verticalAlign: "bottom",
                alignItems: "flex-end"
              },
              l.a.createElement(m.d, {
                bg: "lightBlue",
                mx: "auto",
                mb: "x2",
                height: t,
                width: t
              })
            ),
            l.a.createElement(
              m.bb,
              {
                textAlign: "center",
                fontSize: { extraSmall: "small", medium: "medium" },
                mb: "half"
              },
              t
            ),
            l.a.createElement(
              m.bb,
              { textAlign: "center", fontSize: "small" },
              a
            )
          );
        };
      d.propTypes = {
        size: s.a.string.isRequired,
        scale: s.a.string.isRequired
      };
      var p = function(e) {
        var t = e.values;
        return Object.keys(t).map(function(e) {
          return "none" === e
            ? null
            : l.a.createElement(d, { size: t[e], scale: e });
        });
      };
      (p.propTypes = { values: s.a.objectOf(s.a.object).isRequired }),
        (t.default = function() {
          return l.a.createElement(
            i.h,
            null,
            l.a.createElement(
              c.Helmet,
              null,
              l.a.createElement("title", null, "Spacing")
            ),
            l.a.createElement(
              i.e,
              null,
              l.a.createElement(m.fb, null, "Spacing"),
              l.a.createElement(
                i.f,
                null,
                "A spacing scale is used to maintain consistent paddings between and within elements throughout our products. Sticking to a scale allows us to be more consistent and predictable, and makes our designs more harmonious."
              )
            ),
            l.a.createElement(
              i.a,
              null,
              l.a.createElement(m.T, null, "Scale"),
              l.a.createElement(
                m.bb,
                { mb: "x3" },
                "Nulogy uses a scale based on 8px with modifiers from half (4px) to 8x (64px)."
              ),
              l.a.createElement(
                m.u,
                { justifyContent: "space-between" },
                l.a.createElement(p, { values: m.kb.space })
              )
            ),
            l.a.createElement(
              i.a,
              null,
              l.a.createElement(m.T, null, "Example"),
              l.a.createElement("img", { src: u.a, alt: "Spacing example" })
            ),
            l.a.createElement(
              i.a,
              null,
              l.a.createElement(m.T, null, "How to choose spacing"),
              l.a.createElement(
                m.bb,
                null,
                "There are two important factors to consider when choosing spacing:",
                " ",
                l.a.createElement("em", null, "size"),
                " and ",
                l.a.createElement("em", null, "relatedness")
              ),
              l.a.createElement(
                m.d,
                { mb: "x2" },
                l.a.createElement(
                  m.F,
                  null,
                  l.a.createElement(
                    m.G,
                    null,
                    "Use less spacing inside smaller elements or between functionally related elements."
                  ),
                  l.a.createElement(
                    m.G,
                    null,
                    "Use more spacing inside larger elements or between less functionally related elements"
                  )
                )
              ),
              l.a.createElement(
                m.bb,
                { fontSize: "small" },
                l.a.createElement(
                  "em",
                  null,
                  "Note: half should mostly be used for spacing related items within an element, e.g a button’s text and it’s icon."
                )
              )
            ),
            l.a.createElement(
              i.a,
              null,
              l.a.createElement(m.T, null, "Related links"),
              l.a.createElement(
                m.F,
                null,
                l.a.createElement(
                  m.G,
                  null,
                  l.a.createElement(m.E, { href: "/theme/" }, "NDS theme")
                )
              )
            )
          );
        });
    }
  }
]);
//# sourceMappingURL=component---src-pages-style-spacing-js-26cb50433885f1a8c77e.js.map
