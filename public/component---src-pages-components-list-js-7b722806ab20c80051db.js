(window.webpackJsonp = window.webpackJsonp || []).push([
  [29],
  {
    QPcm: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("q1tI"),
        l = n.n(a),
        i = n("TJpk"),
        m = n("xj1T"),
        s = n.n(m),
        c = n("yoZo"),
        r = n("Kvkj"),
        o = n("ttvI"),
        u = [
          {
            name: "compact",
            type: "Boolean",
            defaultValue: "false",
            description: "Removes margin between list items"
          },
          {
            name: "leftAlign",
            type: "Boolean",
            defaultValue: "false",
            description: "Sets padding left to align to left of container"
          },
          {
            name: "className",
            type: "String",
            defaultValue: "undefined",
            description: "className passed to the list component."
          }
        ];
      t.default = function() {
        return l.a.createElement(
          r.h,
          null,
          l.a.createElement(
            i.Helmet,
            null,
            l.a.createElement("title", null, "List")
          ),
          l.a.createElement(
            r.e,
            null,
            l.a.createElement(c.fb, null, "List"),
            l.a.createElement(
              r.f,
              null,
              "A standard list, available in two sizes."
            )
          ),
          l.a.createElement(
            r.a,
            null,
            l.a.createElement(
              c.F,
              { mb: "x3" },
              l.a.createElement(c.G, null, "List item"),
              l.a.createElement(c.G, null, "List item"),
              l.a.createElement(c.G, null, "List item")
            ),
            l.a.createElement(
              s.a,
              { className: "js" },
              'import {List, ListItem} from "@nulogy/components";\n\n<List>\n  <ListItem>List item</ListItem>\n  <ListItem>List item</ListItem>\n  <ListItem>List item</ListItem>\n</List>\n'
            )
          ),
          l.a.createElement(
            r.a,
            null,
            l.a.createElement(c.T, null, "Variations"),
            l.a.createElement(
              c.d,
              { mb: "x4" },
              l.a.createElement(c.X, null, "Compact"),
              l.a.createElement(
                c.F,
                { mb: "x3", compact: !0 },
                l.a.createElement(c.G, null, "List item"),
                l.a.createElement(c.G, null, "List item"),
                l.a.createElement(c.G, null, "List item")
              ),
              l.a.createElement(
                s.a,
                { className: "js" },
                "<List compact>\n  <ListItem>List item</ListItem>\n  <ListItem>List item</ListItem>\n  <ListItem>List item</ListItem>\n</List>"
              )
            ),
            l.a.createElement(
              c.d,
              { mb: "x4" },
              l.a.createElement(c.X, null, "LeftAlign"),
              l.a.createElement(
                c.F,
                { mb: "x3", leftAlign: !0 },
                l.a.createElement(c.G, null, "List item"),
                l.a.createElement(c.G, null, "List item"),
                l.a.createElement(c.G, null, "List item")
              ),
              l.a.createElement(
                s.a,
                { className: "js" },
                "<List leftAlign>\n  <ListItem>List item</ListItem>\n  <ListItem>List item</ListItem>\n  <ListItem>List item</ListItem>\n</List>"
              )
            )
          ),
          l.a.createElement(
            r.a,
            null,
            l.a.createElement(c.T, null, "Props"),
            l.a.createElement(r.i, { propsRows: u })
          ),
          l.a.createElement(
            r.a,
            null,
            l.a.createElement(c.T, null, "Related components"),
            l.a.createElement(
              c.G,
              null,
              l.a.createElement(
                c.E,
                { href: o.a + "list--list" },
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
          return i;
        });
      var a = "https://storybook.nulogy.design/?path=/story/",
        l = a + "components-",
        i = a + "pages-";
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-list-js-7b722806ab20c80051db.js.map
