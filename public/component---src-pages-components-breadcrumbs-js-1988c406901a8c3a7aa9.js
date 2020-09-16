(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    ttvI: function(e, n, t) {
      "use strict";
      t.d(n, "c", function() {
        return a;
      }),
        t.d(n, "a", function() {
          return r;
        }),
        t.d(n, "b", function() {
          return l;
        });
      var a = "https://storybook.nulogy.design/?path=/story/",
        r = a + "components-",
        l = a + "pages-";
    },
    xUHG: function(e, n, t) {
      "use strict";
      t.r(n);
      var a = t("q1tI"),
        r = t.n(a),
        l = t("TJpk"),
        c = t("xj1T"),
        u = t.n(c),
        m = t("yoZo"),
        o = t("Kvkj"),
        s = t("ttvI"),
        i = [
          {
            name: "as",
            type: "Element type",
            defaultValue: "nav",
            description: "The element that wraps the breacrumbs"
          }
        ];
      n.default = function() {
        return r.a.createElement(
          o.h,
          null,
          r.a.createElement(
            l.Helmet,
            null,
            r.a.createElement("title", null, "Breadcrumbs")
          ),
          r.a.createElement(
            o.e,
            null,
            r.a.createElement(m.fb, null, "Breadcrumbs"),
            r.a.createElement(
              o.f,
              null,
              "A breadcrumbs component that wraps around links or text to help orient the user within the application."
            )
          ),
          r.a.createElement(
            o.a,
            null,
            r.a.createElement(
              m.g,
              null,
              r.a.createElement(m.E, { href: "/" }, "Home"),
              r.a.createElement(m.E, { href: "/Tenants" }, "Tenants")
            ),
            r.a.createElement(
              u.a,
              { className: "js" },
              'import { Breadcrumbs, Link } from "@nulogy/components";\n\n<Breadcrumbs>\n      <Link href="/">Home</Link>\n      <Link href="/Tenants">Tenants</Link>\n    </Breadcrumbs>\n'
            )
          ),
          r.a.createElement(
            o.a,
            null,
            r.a.createElement(m.T, null, "Props"),
            r.a.createElement(o.i, { propsRows: i })
          ),
          r.a.createElement(
            o.a,
            null,
            r.a.createElement(m.T, null, "Resources"),
            r.a.createElement(
              m.F,
              null,
              r.a.createElement(
                m.G,
                null,
                r.a.createElement(
                  m.E,
                  { href: s.a + "breadcrumbs--breadcrumbs" },
                  "View in Storybook"
                )
              )
            )
          ),
          r.a.createElement(
            o.a,
            null,
            r.a.createElement(m.T, null, "Related components"),
            r.a.createElement(
              m.G,
              null,
              r.a.createElement(m.E, { href: "/components/link" }, "Link")
            )
          )
        );
      };
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-breadcrumbs-js-1988c406901a8c3a7aa9.js.map
