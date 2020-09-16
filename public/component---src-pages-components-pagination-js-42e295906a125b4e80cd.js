(window.webpackJsonp = window.webpackJsonp || []).push([
  [36],
  {
    "BV/C": function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("q1tI"),
        l = n.n(a),
        i = n("TJpk"),
        o = n("xj1T"),
        r = n.n(o),
        u = n("yoZo"),
        c = n("Kvkj"),
        s = n("ttvI"),
        p = [
          {
            name: "currentPage",
            type: "number",
            defaultValue: "Required",
            description: "The currently active page."
          },
          {
            name: "totalPages",
            type: "number",
            defaultValue: "Required",
            description: "The total number of pages to show pagination for."
          },
          {
            name: "onNext",
            type: "function",
            defaultValue: "null",
            description: "The function to run when the next button is clicked."
          },
          {
            name: "onPrevious",
            type: "function",
            defaultValue: "null",
            description:
              "The function to run when the previous button is clicked."
          },
          {
            name: "onSelectPage",
            type: "function",
            defaultValue: "null",
            description: "The function to run when a page number is clicked."
          },
          {
            name: "nextLabel",
            type: "string",
            defaultValue: "Next",
            description: "The next button label"
          },
          {
            name: "previousLabel",
            type: "string",
            defaultValue: "Previous",
            description: "The previous button label"
          },
          {
            name: "nextAriaLabel",
            type: "string",
            defaultValue: "Next",
            description: "The next button's aria label"
          },
          {
            name: "previousAriaLabel",
            type: "string",
            defaultValue: "Previous",
            description: "The previous button's aria label"
          },
          {
            name: "aria-label",
            type: "string",
            defaultValue: "Pagination navigation",
            description: "Aria label that describes the pagination navigation"
          }
        ];
      t.default = function() {
        return l.a.createElement(
          c.h,
          null,
          l.a.createElement(
            i.Helmet,
            null,
            l.a.createElement("title", null, "Pagination")
          ),
          l.a.createElement(
            c.e,
            null,
            l.a.createElement(u.fb, null, "Pagination"),
            l.a.createElement(
              u.d,
              { mb: "x3" },
              l.a.createElement(
                c.f,
                null,
                "Pagination is used for splitting data up into multiple pages."
              )
            )
          ),
          l.a.createElement(
            c.a,
            null,
            l.a.createElement(u.O, { currentPage: 2, totalPages: 5 }),
            l.a.createElement(
              r.a,
              { className: "js" },
              'import {Pagination} from "@nulogy/components";\n\n<Pagination currentPage={2} totalPages={5} />\n'
            )
          ),
          l.a.createElement(
            c.a,
            null,
            l.a.createElement(u.T, null, "Props"),
            l.a.createElement(c.i, { propsRows: p })
          ),
          l.a.createElement(
            c.a,
            null,
            l.a.createElement(u.T, null, "Resources"),
            l.a.createElement(
              u.F,
              null,
              l.a.createElement(
                u.G,
                null,
                l.a.createElement(
                  u.E,
                  { href: s.a + "pagination--pagination" },
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
          return i;
        });
      var a = "https://storybook.nulogy.design/?path=/story/",
        l = a + "components-",
        i = a + "pages-";
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-pagination-js-42e295906a125b4e80cd.js.map
