(window.webpackJsonp = window.webpackJsonp || []).push([
  [42],
  {
    "+gK0": function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a("uRdJ"),
        l = a("9Hrx"),
        o = a("q1tI"),
        b = a.n(o),
        r = a("TJpk"),
        c = a("xj1T"),
        s = a.n(c),
        d = a("yoZo"),
        i = a("Kvkj"),
        T = a("ttvI"),
        m = [
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
        u = (function(e) {
          function t(t) {
            var a;
            return (
              ((a = e.call(this, t) || this).state = { selectedIndex: null }),
              (a.setSelectedTab = a.setSelectedTab.bind(Object(n.a)(a))),
              a
            );
          }
          Object(l.a)(t, e);
          var a = t.prototype;
          return (
            (a.setSelectedTab = function(e, t) {
              this.setState({ selectedIndex: t });
            }),
            (a.render = function() {
              var e = this.state.selectedIndex;
              return b.a.createElement(
                b.a.Fragment,
                null,
                b.a.createElement(
                  d.ab,
                  { onTabClick: this.setSelectedTab, selectedIndex: e },
                  b.a.createElement(
                    d.Y,
                    { label: "Tab 1" },
                    "Uncontrolled Content: Tab 1"
                  ),
                  b.a.createElement(
                    d.Y,
                    { label: "Tab 2" },
                    "Uncontrolled Content: Tab 2"
                  ),
                  b.a.createElement(
                    d.Y,
                    { label: "Tab 3" },
                    "Uncontrolled Content: Tab 3"
                  ),
                  b.a.createElement(
                    d.Y,
                    { label: "Tab 4" },
                    "Uncontrolled Content: Tab 4"
                  )
                ),
                null !== e &&
                  b.a.createElement(
                    "div",
                    null,
                    "Controlled Content: Tab ",
                    e + 1
                  )
              );
            }),
            t
          );
        })(b.a.Component);
      t.default = function() {
        return b.a.createElement(
          i.h,
          null,
          b.a.createElement(
            r.Helmet,
            null,
            b.a.createElement("title", null, "Tabs")
          ),
          b.a.createElement(
            i.e,
            null,
            b.a.createElement(d.fb, null, "Tabs"),
            b.a.createElement(
              i.f,
              null,
              "For navigating between sections of related content."
            )
          ),
          b.a.createElement(
            i.a,
            null,
            b.a.createElement(
              d.d,
              { height: "64px" },
              b.a.createElement(
                d.ab,
                null,
                b.a.createElement(d.Y, { label: "Tab 1" }, "Tab 1 Content"),
                b.a.createElement(d.Y, { label: "Tab 2" }, "Tab 2 Content"),
                b.a.createElement(d.Y, { label: "Tab 3" }, "Tab 3 Content"),
                b.a.createElement(d.Y, { label: "Tab 4" }, "Tab 4 Content")
              )
            ),
            b.a.createElement(
              s.a,
              { className: "js" },
              'import { Tab, Tabs } from "@nulogy/components";\n\n<Tabs>\n  <Tab label="Tab 1">Tab 1 Content</Tab>\n  <Tab label="Tab 2">Tab 2 Content</Tab>\n  <Tab label="Tab 3">Tab 3 Content</Tab>\n  <Tab label="Tab 4">Tab 4 Content</Tab>\n</Tabs>\n'
            )
          ),
          b.a.createElement(
            i.a,
            null,
            b.a.createElement(d.T, null, "Variations"),
            b.a.createElement(
              d.d,
              { mb: "x6" },
              b.a.createElement(d.X, null, "Fitted"),
              b.a.createElement(
                d.d,
                { height: "64px" },
                b.a.createElement(
                  d.ab,
                  { fitted: !0 },
                  b.a.createElement(d.Y, { label: "Tab 1" }, "Tab 1 Content"),
                  b.a.createElement(d.Y, { label: "Tab 2" }, "Tab 2 Content"),
                  b.a.createElement(d.Y, { label: "Tab 3" }, "Tab 3 Content"),
                  b.a.createElement(d.Y, { label: "Tab 4" }, "Tab 4 Content")
                )
              ),
              b.a.createElement(
                s.a,
                { className: "js" },
                'import { Tab, Tabs } from "@nulogy/components";\n\n<Tabs fitted>\n  <Tab label="Tab 1">Tab 1 Content</Tab>\n  <Tab label="Tab 2">Tab 2 Content</Tab>\n  <Tab label="Tab 3">Tab 3 Content</Tab>\n  <Tab label="Tab 4">Tab 4 Content</Tab>\n</Tabs>\n'
              )
            )
          ),
          b.a.createElement(
            i.a,
            null,
            b.a.createElement(d.T, null, "As a controlled component"),
            b.a.createElement(
              d.bb,
              { mb: "x2" },
              "If custom behaviour is needed for the Tabs component, using the onTabClick and selectedIndex props allows for a controlled use of Tabs. onTabClick will be passed into all provided Tab components, and runs with arguments onClick(event, index). onClick can still be individually applied to each Tab component optionally as well."
            ),
            b.a.createElement(
              d.d,
              { mb: "x6" },
              b.a.createElement(
                d.d,
                { mb: "x2", height: "96px" },
                b.a.createElement(u, null)
              ),
              b.a.createElement(
                s.a,
                { className: "js" },
                'import { Tab, Tabs } from "@nulogy/components";\n\nclass ControlledTabs extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      selectedIndex: null\n    };\n\n    this.setSelectedTab = this.setSelectedTab.bind(this);\n  }\n\n  setSelectedTab(e, index) {\n    this.setState({ selectedIndex: index });\n  }\n\n  render() {\n    const { selectedIndex } = this.state;\n    return (\n      <>\n        <Tabs onTabClick={this.setSelectedTab} selectedIndex={selectedIndex}>\n          <Tab label="Tab 1">Uncontrolled Content: Tab 1</Tab>\n          <Tab label="Tab 2">Uncontrolled Content: Tab 2</Tab>\n          <Tab label="Tab 3">Uncontrolled Content: Tab 3</Tab>\n          <Tab label="Tab 4">Uncontrolled Content: Tab 4</Tab>\n        </Tabs>\n        {selectedIndex !== null && <div>Controlled Content: Tab {selectedIndex + 1}</div>}\n      </>\n    );\n  }\n}\n'
              )
            )
          ),
          b.a.createElement(
            i.a,
            null,
            b.a.createElement(d.T, null, "Responsive information"),
            b.a.createElement(
              d.bb,
              { mb: "x3" },
              "When the width of the individual Tab components exceed the total width of the Tabs component, scrolling becomes enabled and buttons are placed on the edges to make it easier to scroll to off-screen Tabs on mobile devices."
            ),
            b.a.createElement(
              d.d,
              { height: "64px" },
              b.a.createElement(
                d.ab,
                null,
                b.a.createElement(d.Y, { label: "Tab 1" }, "Tab 1 Content"),
                b.a.createElement(d.Y, { label: "Tab 2" }, "Tab 2 Content"),
                b.a.createElement(d.Y, { label: "Tab 3" }, "Tab 3 Content"),
                b.a.createElement(d.Y, { label: "Tab 4" }, "Tab 4 Content"),
                b.a.createElement(d.Y, { label: "Tab 5" }, "Tab 1 Content"),
                b.a.createElement(d.Y, { label: "Tab 6" }, "Tab 2 Content"),
                b.a.createElement(d.Y, { label: "Tab 7" }, "Tab 3 Content"),
                b.a.createElement(d.Y, { label: "Tab 8" }, "Tab 4 Content"),
                b.a.createElement(d.Y, { label: "Tab 9" }, "Tab 1 Content"),
                b.a.createElement(d.Y, { label: "Tab 10" }, "Tab 2 Content"),
                b.a.createElement(d.Y, { label: "Tab 11" }, "Tab 3 Content"),
                b.a.createElement(d.Y, { label: "Tab 12" }, "Tab 4 Content")
              )
            )
          ),
          b.a.createElement(
            i.a,
            null,
            b.a.createElement(d.T, null, "Props"),
            b.a.createElement(i.i, { propsRows: m })
          ),
          b.a.createElement(
            i.a,
            null,
            b.a.createElement(d.T, null, "Content guidelines"),
            b.a.createElement(
              d.d,
              { mb: "x2" },
              b.a.createElement(
                d.F,
                null,
                b.a.createElement(
                  d.G,
                  null,
                  "Only group together content that is related under a set of tabs"
                ),
                b.a.createElement(
                  d.G,
                  null,
                  "Keep tab labels short, general context for the group of tabs should be given already on the page"
                ),
                b.a.createElement(
                  d.G,
                  null,
                  "Do not use tabs as primary navigation"
                ),
                b.a.createElement(
                  d.G,
                  null,
                  "Do not require users to jump between tabs rapidly to complete a task."
                )
              )
            )
          ),
          b.a.createElement(
            i.a,
            null,
            b.a.createElement(d.T, null, "Resources"),
            b.a.createElement(
              d.F,
              null,
              b.a.createElement(
                d.G,
                null,
                b.a.createElement(
                  d.E,
                  { href: T.a + "tabs--tabs" },
                  "View in Storybook"
                )
              )
            )
          )
        );
      };
    },
    ttvI: function(e, t, a) {
      "use strict";
      a.d(t, "c", function() {
        return n;
      }),
        a.d(t, "a", function() {
          return l;
        }),
        a.d(t, "b", function() {
          return o;
        });
      var n = "https://storybook.nulogy.design/?path=/story/",
        l = n + "components-",
        o = n + "pages-";
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-tabs-js-98acc654fa1c4aa87d3b.js.map
