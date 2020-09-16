(window.webpackJsonp = window.webpackJsonp || []).push([
  [51],
  {
    hIA9: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("q1tI"),
        l = n.n(a),
        o = n("TJpk"),
        r = n("xj1T"),
        c = n.n(r),
        i = n("3/HP"),
        s = n("Kvkj"),
        u = n("ttvI"),
        p = [
          {
            name: "children",
            type: "string",
            defaultValue: "Required",
            description: "The content to be truncated"
          },
          {
            name: "element",
            type: "node",
            defaultValue: "<Text />",
            description:
              "The element to use to wrap the truncated text. Props can be passed to this element as usual."
          },
          {
            name: "indicator",
            type: "string",
            defaultValue: "...",
            description: "The text to display after content that is truncated"
          },
          {
            name: "maxCharacters",
            type: "number",
            defaultValue: "20",
            description: "The number of characters to display"
          },
          {
            name: "showTooltip",
            type: "boolean",
            defaultValue: "true",
            description: "Displays a tooltip with the full content"
          },
          {
            name: "tooltipProps",
            type: "object",
            description: "Additional options for to be passed to the tooltip"
          }
        ];
      t.default = function() {
        return l.a.createElement(
          s.h,
          null,
          l.a.createElement(
            o.Helmet,
            null,
            l.a.createElement("title", null, "Truncated Text")
          ),
          l.a.createElement(
            s.e,
            null,
            l.a.createElement(i.fb, null, "Truncated Text"),
            l.a.createElement(
              s.f,
              null,
              "Displays text that is truncated if it is longer than the maximum number of characters. Optionally displays the full content within a tooltip when the user hovers over the text."
            )
          ),
          l.a.createElement(
            s.a,
            null,
            l.a.createElement(
              i.jb,
              null,
              "Special instructions are provided for the shipment"
            ),
            l.a.createElement(
              c.a,
              { className: "js" },
              'import { TruncatedText } from "@nulogy/components";\n\n<TruncatedText>Special instructions are provided for the shipment</TruncatedText>\n'
            )
          ),
          l.a.createElement(
            s.a,
            null,
            l.a.createElement(i.T, null, "Props"),
            l.a.createElement(s.i, { propsRows: p })
          ),
          l.a.createElement(
            s.a,
            null,
            l.a.createElement(i.T, null, "Tooltip Props"),
            l.a.createElement(
              i.bb,
              null,
              "Props from the ",
              l.a.createElement(
                i.E,
                { href: "/components/tooltip" },
                "Tooltip"
              ),
              " component can also be passed throught the tooltipProps object."
            )
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
                l.a.createElement(i.E, { href: "/components/text" }, "Text")
              ),
              l.a.createElement(
                i.G,
                null,
                l.a.createElement(
                  i.E,
                  { href: "/components/tooltip" },
                  "Tooltip"
                )
              )
            )
          ),
          l.a.createElement(
            s.a,
            null,
            l.a.createElement(i.T, null, "Resources"),
            l.a.createElement(
              i.G,
              null,
              l.a.createElement(
                i.E,
                { href: "".concat(u.a, "truncatedtext--truncatedtext") },
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
//# sourceMappingURL=component---src-pages-components-truncated-text-js-ec9b068d1df336f68f62.js.map
