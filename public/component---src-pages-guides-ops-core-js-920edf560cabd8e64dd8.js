(window.webpackJsonp = window.webpackJsonp || []).push([
  [55],
  {
    BRsL: function(e, t, n) {
      e.exports =
        n.p + "static/nds-in-ops-core-9d2f11da192f096e0cd8296c56d2a965.png";
    },
    FqOq: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("q1tI"),
        o = n.n(a),
        l = n("TJpk"),
        r = n("yoZo"),
        i = n("Kvkj"),
        s = n("BRsL"),
        c = n.n(s);
      t.default = function() {
        return o.a.createElement(
          i.h,
          null,
          o.a.createElement(
            l.Helmet,
            null,
            o.a.createElement(
              "title",
              null,
              "Using NDS in Operational Solution Core"
            )
          ),
          o.a.createElement(
            i.e,
            null,
            o.a.createElement(
              r.fb,
              null,
              "Using NDS in Operational Solution Core"
            ),
            o.a.createElement(
              i.f,
              null,
              "The Design System is primarily designed to be used in our newer applications and modules. These have large fonts and a more modern look and feel. The design system can still be used in our legacy applications, but there are some differences and things to be aware of."
            )
          ),
          o.a.createElement(
            i.a,
            { textAlign: "right" },
            o.a.createElement("img", { src: c.a, alt: "" }),
            o.a.createElement(
              i.c,
              { fontSize: "smaller" },
              o.a.createElement(
                "em",
                null,
                "An example of NDS in Ops Core with a smaller font size."
              )
            )
          ),
          o.a.createElement(
            i.a,
            null,
            o.a.createElement(r.T, null, "Font Size"),
            o.a.createElement(
              i.c,
              null,
              "The default body font size in NDS is 16px. Due to layout limitations in Ops Core, we can’t use a default font that large. If you use an NDS component inside of Ops Core, the NDSProvider needs to override the “medium” font size will from 16px to 14px. An example of that being done can be found",
              " ",
              o.a.createElement(
                r.E,
                {
                  href:
                    "https://github.com/nulogy/PackManager/blob/master/client_webpack/inventory_control/src/lib/NDSProvider.tsx"
                },
                "here"
              ),
              "."
            )
          ),
          o.a.createElement(
            i.a,
            null,
            o.a.createElement(r.T, null, "Style Overrides"),
            o.a.createElement(
              i.c,
              null,
              "There are cases where you may be modernizing an older part of the application and want to use our new React-based technologies but still keep the UI looking the same. Since our components are built using styled components, they can be overriden using our theme and standard CSS references. An example of this can be found",
              " ",
              o.a.createElement(
                r.E,
                {
                  href:
                    "https://github.com/nulogy/PackManager/blob/master/client_webpack/production_management/src/ui_components/LegacyPagination.tsx"
                },
                "here"
              ),
              "."
            ),
            o.a.createElement(
              r.b,
              null,
              " ",
              "We don’t want to propogate this pattern too much, as we’d rather update the look-and-feel of older modules. Currently, we only have legacy-styled Tables and Pagination. If you’re about to make drastic style changes to a component, please reach out for a consultation with Design Ops first."
            )
          )
        );
      };
    }
  }
]);
//# sourceMappingURL=component---src-pages-guides-ops-core-js-920edf560cabd8e64dd8.js.map
