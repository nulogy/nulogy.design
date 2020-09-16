(window.webpackJsonp = window.webpackJsonp || []).push([
  [56],
  {
    BIDr: function(e, t, a) {
      "use strict";
      a.r(t);
      var o = a("q1tI"),
        l = a.n(o),
        n = a("TJpk"),
        r = a("yoZo"),
        s = a("Kvkj"),
        p = a("Ob+p"),
        c = [
          {
            label: "Category",
            dataKey: "category",
            width: "20%",
            cellRenderer: p.b
          },
          { label: "Props", dataKey: "props", width: "80%", cellRenderer: p.c }
        ],
        m = [
          {
            category: "space",
            props:
              "margin, marginTop, marginRight, marginBottom, marginLeft, marginX, marginY, padding, paddingTop, paddingRight, paddingBottom, paddingLeft, paddingX, paddingY, m, mt, mr, mb, ml, mx, my, p, pt, pr, pb, pl, px, py,"
          },
          {
            category: "layout",
            props:
              "width, height, minWidth, minHeight, maxWidth, maxHeight, display, verticalAlign, size"
          },
          {
            category: "typography",
            props:
              "fontFamily, fontSize, fontWeight, lineHeight, letterSpacing, fontStyle, textAlign"
          },
          { category: "colour", props: "color, backgroundColor, bg" },
          {
            category: "border",
            props:
              "border, borderWidth, borderStyle, borderColor, borderRadius, borderTop, borderRight, borderBottom, borderLeft, borderX, borderY,"
          },
          {
            category: "position",
            props: "position, zIndex, top, right, bottom, left"
          }
        ];
      t.default = function() {
        return l.a.createElement(
          s.h,
          null,
          l.a.createElement(
            n.Helmet,
            null,
            l.a.createElement("title", null, "Style props")
          ),
          l.a.createElement(
            s.e,
            null,
            l.a.createElement(r.fb, null, "Style props"),
            l.a.createElement(
              s.f,
              null,
              "Nulogy's components use styled-system to apply groups of style props to different types of components. These props correspond to their css equivalents and allow individual manipulation of a component's style."
            )
          ),
          l.a.createElement(
            s.a,
            null,
            l.a.createElement(r.T, null, "Prop Categories"),
            l.a.createElement(r.Z, { columns: c, rows: m, rowHovers: !1 }),
            l.a.createElement(
              s.c,
              { mt: "x3" },
              "For more information on each of these props, see the",
              " ",
              l.a.createElement(
                r.E,
                {
                  href:
                    "https://github.com/styled-system/styled-system/blob/master/docs/table.md"
                },
                "styled-system docs"
              ),
              "."
            )
          ),
          l.a.createElement(
            s.a,
            null,
            l.a.createElement(r.T, null, "Usage"),
            l.a.createElement(
              s.c,
              null,
              "To see which props each component includes, see that component's documentation. But in general, the following rules apply:"
            ),
            l.a.createElement(
              r.F,
              { mb: "x3" },
              l.a.createElement(
                r.G,
                null,
                "Block-level components (Alerts, Buttons, Cards, etc.) have access to",
                " ",
                l.a.createElement(s.d, null, "space"),
                " props."
              ),
              l.a.createElement(
                r.G,
                null,
                "Text components (Text, Headings, Link) also have access to",
                " ",
                l.a.createElement(s.d, null, "typography"),
                " and",
                " ",
                l.a.createElement(s.d, null, "colour"),
                " props."
              ),
              l.a.createElement(
                r.G,
                null,
                "The Box component has access to ",
                l.a.createElement(s.d, null, "layout"),
                " props and can be used to add ",
                l.a.createElement(s.d, null, "borders"),
                ",",
                " ",
                l.a.createElement(s.d, null, "colours"),
                ", and",
                " ",
                l.a.createElement(s.d, null, "boxShadows"),
                " around anything."
              )
            ),
            l.a.createElement(
              r.b,
              { mt: "x3" },
              "Note that inputs don't have access to any of these props because they're already pre-composed. To stack multiple inputs with proper spacing on top of each other, wrap them in the",
              " ",
              l.a.createElement(r.E, { href: "/components/form" }, "Form"),
              " component."
            )
          ),
          l.a.createElement(
            s.a,
            null,
            l.a.createElement(r.T, null, "Theme"),
            "Styled-system will check the ",
            l.a.createElement(r.E, { href: "/theme" }, "theme"),
            " and use that if a key matches, e.g setting a ",
            l.a.createElement(s.d, null, "textColor"),
            " to",
            " ",
            l.a.createElement(s.d, null, "blue"),
            " will display Nulogy's",
            " ",
            l.a.createElement(s.d, null, "#216beb"),
            ", instead of the html default. If a key can't be found, it will be processed as a CSS value."
          )
        );
      };
    }
  }
]);
//# sourceMappingURL=component---src-pages-guides-style-props-js-7d679744a7e4a7c429c6.js.map
