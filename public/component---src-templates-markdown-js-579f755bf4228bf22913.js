(window.webpackJsonp = window.webpackJsonp || []).push([
  [64],
  {
    kCF0: function(n, e, t) {
      "use strict";
      t.d(e, "a", function() {
        return r;
      }),
        t.d(e, "b", function() {
          return u;
        }),
        t.d(e, "d", function() {
          return o;
        }),
        t.d(e, "c", function() {
          return a;
        }),
        t.d(e, "h", function() {
          return f;
        }),
        t.d(e, "e", function() {
          return c;
        }),
        t.d(e, "g", function() {
          return i;
        }),
        t.d(e, "j", function() {
          return l;
        }),
        t.d(e, "o", function() {
          return d;
        }),
        t.d(e, "n", function() {
          return m;
        }),
        t.d(e, "f", function() {
          return s;
        }),
        t.d(e, "i", function() {
          return h;
        }),
        t.d(e, "m", function() {
          return b;
        }),
        t.d(e, "k", function() {
          return p;
        }),
        t.d(e, "p", function() {
          return w;
        }),
        t.d(e, "l", function() {
          return k;
        });
      var r = "#011e38",
        u = "#122b47",
        o = "#00438f",
        a = "#216beb",
        f = "#e1ebfa",
        c = "#434d59",
        i = "#c0c8d1",
        l = "#e4e7eb",
        d = "#f0f2f5",
        m = "#ffffff",
        s = "#008059",
        h = "#e9f7f2",
        b = "#cc1439",
        p = "#fae6ea",
        w = "#ffbb00",
        k = "#fcf5e3";
    },
    vSVU: function(n, e, t) {
      "use strict";
      t.r(e),
        t.d(e, "default", function() {
          return d;
        }),
        t.d(e, "pageQuery", function() {
          return m;
        });
      var r = t("q1tI"),
        u = t.n(r),
        o = t("TJpk"),
        a = t("yoZo"),
        f = t("vOnD"),
        c = t("kCF0"),
        i = t("Kvkj"),
        l = f.d.div.withConfig({
          displayName: "markdown__MarkdownStyles",
          componentId: "z4py4u-0"
        })(
          [
            "h1{font-weight:100 !important;}h1,h2,h3,h4{font-weight:500;}a,a:visited{color:",
            ";}a:hover{color:",
            ";}"
          ],
          c.c,
          c.d
        );
      function d(n) {
        var e = n.data.markdownRemark,
          t = e.frontmatter,
          r = e.html;
        return u.a.createElement(
          i.h,
          null,
          u.a.createElement(
            l,
            null,
            u.a.createElement(
              o.Helmet,
              null,
              u.a.createElement(
                "title",
                null,
                t.title,
                " Nulogy Design System "
              )
            ),
            u.a.createElement(
              i.e,
              null,
              u.a.createElement(a.fb, null, t.title),
              u.a.createElement(i.f, null, t.intro)
            ),
            u.a.createElement(
              a.d,
              { maxWidth: 800, mb: "x4" },
              u.a.createElement("div", {
                className: "blog-post-content",
                dangerouslySetInnerHTML: { __html: r }
              })
            )
          )
        );
      }
      var m = "1579429063";
    }
  }
]);
//# sourceMappingURL=component---src-templates-markdown-js-579f755bf4228bf22913.js.map
