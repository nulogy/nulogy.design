(window.webpackJsonp = window.webpackJsonp || []).push([
  [42],
  {
    "+gK0": function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("phZJ"),
        l = n.n(a),
        o = n("lFqo"),
        b = n.n(o),
        r = n("v06X"),
        c = n.n(r),
        s = n("IVAY"),
        i = n.n(s),
        d = n("Jmq7"),
        u = n.n(d),
        T = n("aDmP"),
        m = n.n(T),
        p = n("q1tI"),
        h = n.n(p),
        E = n("TJpk"),
        f = n("xj1T"),
        C = n.n(f),
        g = n("3/HP"),
        x = n("Kvkj"),
        y = n("ttvI");
      function v(e) {
        var t = (function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function() {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function() {
          var n,
            a = m()(e);
          if (t) {
            var l = m()(this).constructor;
            n = Reflect.construct(a, arguments, l);
          } else n = a.apply(this, arguments);
          return u()(this, n);
        };
      }
      var w = [
          {
            name: "defaultSelectedIndex",
            type: "Number",
            defaultValue: "null",
            description: "Index of the tab that is selected when rendered."
          },
          {
            name: "fitted",
            type: "Boolean",
            defaultValue: "false",
            description:
              "Sets the tab components to equally take up the width of the tabs container."
          },
          {
            name: "renderTabContentOnlyWhenSelected",
            type: "Boolean",
            defaultValue: "false",
            description:
              "Causes hidden tab content to only be rendered when the tab is selected."
          },
          {
            name: "selectedIndex",
            type: "Number",
            defaultValue: "undefined",
            description:
              "Index of selected tab if controlling the tabs component."
          },
          {
            name: "onTabClick",
            type: "Function",
            defaultValue: "undefined",
            description:
              "On click function passed to each tab component used when controlling the tabs component. Runs with arguments onClick(event, index)."
          },
          {
            name: "className",
            type: "String",
            defaultValue: "null",
            description: "className passed to the Tabs component"
          },
          {
            name: "tabContentClassName",
            type: "string",
            defaultValue: "null",
            description: "className passed to the tab content container"
          },
          {
            name: "tabContentClassName",
            type: "string",
            defaultValue: "null",
            description: "className passed to the tab content container"
          },
          {
            name: "ariaLabelLeft",
            type: "string",
            defaultValue: "null",
            description:
              "aria label on the left arrow button when tabs are scrollable"
          },
          {
            name: "ariaLabelRight",
            type: "string",
            defaultValue: "null",
            description:
              "aria label on the right arrow button when tabs are scrollable"
          }
        ],
        Y = (function(e) {
          i()(n, e);
          var t = v(n);
          function n(e) {
            var a;
            return (
              l()(this, n),
              ((a = t.call(this, e)).state = { selectedIndex: null }),
              (a.setSelectedTab = a.setSelectedTab.bind(c()(a))),
              a
            );
          }
          return (
            b()(n, [
              {
                key: "setSelectedTab",
                value: function(e, t) {
                  this.setState({ selectedIndex: t });
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.state.selectedIndex;
                  return h.a.createElement(
                    h.a.Fragment,
                    null,
                    h.a.createElement(
                      g.ab,
                      { onTabClick: this.setSelectedTab, selectedIndex: e },
                      h.a.createElement(
                        g.Y,
                        { label: "Tab 1" },
                        "Uncontrolled Content: Tab 1"
                      ),
                      h.a.createElement(
                        g.Y,
                        { label: "Tab 2" },
                        "Uncontrolled Content: Tab 2"
                      ),
                      h.a.createElement(
                        g.Y,
                        { label: "Tab 3" },
                        "Uncontrolled Content: Tab 3"
                      ),
                      h.a.createElement(
                        g.Y,
                        { label: "Tab 4" },
                        "Uncontrolled Content: Tab 4"
                      )
                    ),
                    null !== e &&
                      h.a.createElement(
                        "div",
                        null,
                        "Controlled Content: Tab ",
                        e + 1
                      )
                  );
                }
              }
            ]),
            n
          );
        })(h.a.Component);
      t.default = function() {
        return h.a.createElement(
          x.h,
          null,
          h.a.createElement(
            E.Helmet,
            null,
            h.a.createElement("title", null, "Tabs")
          ),
          h.a.createElement(
            x.e,
            null,
            h.a.createElement(g.fb, null, "Tabs"),
            h.a.createElement(
              x.f,
              null,
              "For navigating between sections of related content."
            )
          ),
          h.a.createElement(
            x.a,
            null,
            h.a.createElement(
              g.d,
              { height: "64px" },
              h.a.createElement(
                g.ab,
                null,
                h.a.createElement(g.Y, { label: "Tab 1" }, "Tab 1 Content"),
                h.a.createElement(g.Y, { label: "Tab 2" }, "Tab 2 Content"),
                h.a.createElement(g.Y, { label: "Tab 3" }, "Tab 3 Content"),
                h.a.createElement(g.Y, { label: "Tab 4" }, "Tab 4 Content")
              )
            ),
            h.a.createElement(
              C.a,
              { className: "js" },
              'import { Tab, Tabs } from "@nulogy/components";\n\n<Tabs>\n  <Tab label="Tab 1">Tab 1 Content</Tab>\n  <Tab label="Tab 2">Tab 2 Content</Tab>\n  <Tab label="Tab 3">Tab 3 Content</Tab>\n  <Tab label="Tab 4">Tab 4 Content</Tab>\n</Tabs>\n'
            )
          ),
          h.a.createElement(
            x.a,
            null,
            h.a.createElement(g.T, null, "Variations"),
            h.a.createElement(
              g.d,
              { mb: "x6" },
              h.a.createElement(g.X, null, "Fitted"),
              h.a.createElement(
                g.d,
                { height: "64px" },
                h.a.createElement(
                  g.ab,
                  { fitted: !0 },
                  h.a.createElement(g.Y, { label: "Tab 1" }, "Tab 1 Content"),
                  h.a.createElement(g.Y, { label: "Tab 2" }, "Tab 2 Content"),
                  h.a.createElement(g.Y, { label: "Tab 3" }, "Tab 3 Content"),
                  h.a.createElement(g.Y, { label: "Tab 4" }, "Tab 4 Content")
                )
              ),
              h.a.createElement(
                C.a,
                { className: "js" },
                'import { Tab, Tabs } from "@nulogy/components";\n\n<Tabs fitted>\n  <Tab label="Tab 1">Tab 1 Content</Tab>\n  <Tab label="Tab 2">Tab 2 Content</Tab>\n  <Tab label="Tab 3">Tab 3 Content</Tab>\n  <Tab label="Tab 4">Tab 4 Content</Tab>\n</Tabs>\n'
              )
            )
          ),
          h.a.createElement(
            x.a,
            null,
            h.a.createElement(g.T, null, "As a controlled component"),
            h.a.createElement(
              g.bb,
              { mb: "x2" },
              "If custom behaviour is needed for the Tabs component, using the onTabClick and selectedIndex props allows for a controlled use of Tabs. onTabClick will be passed into all provided Tab components, and runs with arguments onClick(event, index). onClick can still be individually applied to each Tab component optionally as well."
            ),
            h.a.createElement(
              g.d,
              { mb: "x6" },
              h.a.createElement(
                g.d,
                { mb: "x2", height: "96px" },
                h.a.createElement(Y, null)
              ),
              h.a.createElement(
                C.a,
                { className: "js" },
                'import { Tab, Tabs } from "@nulogy/components";\n\nclass ControlledTabs extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      selectedIndex: null\n    };\n\n    this.setSelectedTab = this.setSelectedTab.bind(this);\n  }\n\n  setSelectedTab(e, index) {\n    this.setState({ selectedIndex: index });\n  }\n\n  render() {\n    const { selectedIndex } = this.state;\n    return (\n      <>\n        <Tabs onTabClick={this.setSelectedTab} selectedIndex={selectedIndex}>\n          <Tab label="Tab 1">Uncontrolled Content: Tab 1</Tab>\n          <Tab label="Tab 2">Uncontrolled Content: Tab 2</Tab>\n          <Tab label="Tab 3">Uncontrolled Content: Tab 3</Tab>\n          <Tab label="Tab 4">Uncontrolled Content: Tab 4</Tab>\n        </Tabs>\n        {selectedIndex !== null && <div>Controlled Content: Tab {selectedIndex + 1}</div>}\n      </>\n    );\n  }\n}\n'
              )
            )
          ),
          h.a.createElement(
            x.a,
            null,
            h.a.createElement(g.T, null, "Responsive information"),
            h.a.createElement(
              g.bb,
              { mb: "x3" },
              "When the width of the individual Tab components exceed the total width of the Tabs component, scrolling becomes enabled and buttons are placed on the edges to make it easier to scroll to off-screen Tabs on mobile devices."
            ),
            h.a.createElement(
              g.d,
              { height: "64px" },
              h.a.createElement(
                g.ab,
                null,
                h.a.createElement(g.Y, { label: "Tab 1" }, "Tab 1 Content"),
                h.a.createElement(g.Y, { label: "Tab 2" }, "Tab 2 Content"),
                h.a.createElement(g.Y, { label: "Tab 3" }, "Tab 3 Content"),
                h.a.createElement(g.Y, { label: "Tab 4" }, "Tab 4 Content"),
                h.a.createElement(g.Y, { label: "Tab 5" }, "Tab 1 Content"),
                h.a.createElement(g.Y, { label: "Tab 6" }, "Tab 2 Content"),
                h.a.createElement(g.Y, { label: "Tab 7" }, "Tab 3 Content"),
                h.a.createElement(g.Y, { label: "Tab 8" }, "Tab 4 Content"),
                h.a.createElement(g.Y, { label: "Tab 9" }, "Tab 1 Content"),
                h.a.createElement(g.Y, { label: "Tab 10" }, "Tab 2 Content"),
                h.a.createElement(g.Y, { label: "Tab 11" }, "Tab 3 Content"),
                h.a.createElement(g.Y, { label: "Tab 12" }, "Tab 4 Content")
              )
            )
          ),
          h.a.createElement(
            x.a,
            null,
            h.a.createElement(g.T, null, "Props"),
            h.a.createElement(x.i, { propsRows: w })
          ),
          h.a.createElement(
            x.a,
            null,
            h.a.createElement(g.T, null, "Content guidelines"),
            h.a.createElement(
              g.d,
              { mb: "x2" },
              h.a.createElement(
                g.F,
                null,
                h.a.createElement(
                  g.G,
                  null,
                  "Only group together content that is related under a set of tabs"
                ),
                h.a.createElement(
                  g.G,
                  null,
                  "Keep tab labels short, general context for the group of tabs should be given already on the page"
                ),
                h.a.createElement(
                  g.G,
                  null,
                  "Do not use tabs as primary navigation"
                ),
                h.a.createElement(
                  g.G,
                  null,
                  "Do not require users to jump between tabs rapidly to complete a task."
                )
              )
            )
          ),
          h.a.createElement(
            x.a,
            null,
            h.a.createElement(g.T, null, "Resources"),
            h.a.createElement(
              g.F,
              null,
              h.a.createElement(
                g.G,
                null,
                h.a.createElement(
                  g.E,
                  { href: "".concat(y.a, "tabs--tabs") },
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
          return o;
        });
      var a = "https://storybook.nulogy.design/?path=/story/",
        l = "".concat(a, "components-"),
        o = "".concat(a, "pages-");
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-tabs-js-a95d2fd9234511ad141d.js.map
