(window.webpackJsonp = window.webpackJsonp || []).push([
  [64],
  {
    dCPw: function(n, e, t) {
      "use strict";
      t.d(e, "a", function() {
        return r;
      }),
        t.d(e, "b", function() {
          return u;
        }),
        t.d(e, "d", function() {
          return a;
        }),
        t.d(e, "c", function() {
          return o;
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
          return d;
        }),
        t.d(e, "o", function() {
          return l;
        }),
        t.d(e, "n", function() {
          return m;
        }),
        t.d(e, "f", function() {
          return s;
        }),
        t.d(e, "i", function() {
          return p;
        }),
        t.d(e, "m", function() {
          return h;
        }),
        t.d(e, "k", function() {
          return w;
        }),
        t.d(e, "p", function() {
          return b;
        }),
        t.d(e, "l", function() {
          return v;
        });
      var r = "#011e38",
        u = "#122b47",
        a = "#00438f",
        o = "#216beb",
        f = "#e1ebfa",
        c = "#434d59",
        i = "#c0c8d1",
        d = "#e4e7eb",
        l = "#f0f2f5",
        m = "#ffffff",
        s = "#008059",
        p = "#e9f7f2",
        h = "#cc1439",
        w = "#fae6ea",
        b = "#ffbb00",
        v = "#fcf5e3";
    },
    vSVU: function(n, e, t) {
      "use strict";
      t.r(e),
        t.d(e, "default", function() {
          return s;
        }),
        t.d(e, "pageQuery", function() {
          return p;
        });
      var r = t("q1tI"),
        u = t.n(r),
        a = t("17x9"),
        o = t.n(a),
        f = t("TJpk"),
        c = t("3/HP"),
        i = t("vOnD"),
        d = t("dCPw"),
        l = t("Kvkj"),
        m = i.d.div.withConfig({
          displayName: "markdown__MarkdownStyles",
          componentId: "z4py4u-0"
        })(
          [
            "h1{font-weight:100 !important;}h1,h2,h3,h4{font-weight:500;}a,a:visited{color:",
            ";}a:hover{color:",
            ";}"
          ],
          d.c,
          d.d
        );
      function s(n) {
        var e = n.data.markdownRemark,
          t = e.frontmatter,
          r = e.html;
        return u.a.createElement(
          l.h,
          null,
          u.a.createElement(
            m,
            null,
            u.a.createElement(
              f.Helmet,
              null,
              u.a.createElement(
                "title",
                null,
                t.title,
                " Nulogy Design System "
              )
            ),
            u.a.createElement(
              l.e,
              null,
              u.a.createElement(c.fb, null, t.title),
              u.a.createElement(l.f, null, t.intro)
            ),
            u.a.createElement(
              c.d,
              { maxWidth: 800, mb: "x4" },
              u.a.createElement("div", {
                className: "blog-post-content",
                dangerouslySetInnerHTML: { __html: r }
              })
            )
          )
        );
      }
      s.propTypes = { data: o.a.node.isRequired };
      var p = "1579429063";
    }
  }
]);
//# sourceMappingURL=component---src-templates-markdown-js-660be97eddfdad46066c.js.map
