(window.webpackJsonp = window.webpackJsonp || []).push([
  [50],
  {
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
    },
    uQYz: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a("q1tI"),
        l = a.n(n),
        o = a("TJpk"),
        i = a("xj1T"),
        r = a.n(i),
        m = a("yoZo"),
        p = a("Kvkj"),
        c = a("ttvI"),
        s = [
          {
            name: "tooltip",
            type: "node",
            defaultValue: "Required",
            description: "The content to display inside of the tooltip."
          },
          {
            name: "children",
            type: "element",
            defaultValue: "Required",
            description: "Single child of tooltip must be able to accept a ref."
          },
          {
            name: "maxWidth",
            type: "string",
            defaultValue: "24em",
            description: "Width of the tooltip."
          },
          {
            name: "placement",
            type: "string",
            defaultValue: "bottom",
            description:
              "The position of the tooltip relative to its trigger. Accepts top, top-start, top-end, bottom, bottom-end, left, left-start, left-end, right, right-start and right-end."
          },
          {
            name: "showDelay",
            type: "number|string",
            defaultValue: "100",
            description: "Time in seconds before the tooltip appears."
          },
          {
            name: "hideDelay",
            type: "number|string",
            defaultValue: "350",
            description: "Time in seconds before the tooltip disappears."
          },
          {
            name: "className",
            type: "String",
            defaultValue: "undefined",
            description: "className passed to the tooltip container element."
          },
          {
            name: "defaultOpen",
            type: "boolean",
            defaultValue: "false",
            description: "when set to true the tooltip will be open by default"
          }
        ];
      t.default = function() {
        return l.a.createElement(
          p.h,
          null,
          l.a.createElement(
            o.Helmet,
            null,
            l.a.createElement("title", null, "Tooltip")
          ),
          l.a.createElement(
            p.e,
            null,
            l.a.createElement(m.fb, null, "Tooltip"),
            l.a.createElement(
              p.f,
              null,
              "User-triggered messages that provide additional information about something on a page. Tooltips are accessed by hovering with a mouse or tapping on a touch screen."
            )
          ),
          l.a.createElement(
            p.a,
            null,
            l.a.createElement(
              m.ib,
              { placement: "bottom", tooltip: "I am a Tooltip!" },
              l.a.createElement(m.h, null, "Hover me")
            ),
            l.a.createElement(
              r.a,
              { className: "js" },
              '<Tooltip placement="bottom" tooltip="I am a Tooltip!">\n  <Button>Hover me</Button>\n</Tooltip>\n'
            )
          ),
          l.a.createElement(
            p.a,
            null,
            l.a.createElement(m.T, null, "Use when"),
            l.a.createElement(
              m.F,
              null,
              l.a.createElement(
                m.G,
                null,
                "There is additional information that could be helpful to a user"
              )
            )
          ),
          l.a.createElement(
            p.a,
            null,
            l.a.createElement(m.T, null, "Don't use when "),
            l.a.createElement(
              m.F,
              null,
              l.a.createElement(
                m.G,
                null,
                "The information contained is vital to completing a task"
              )
            )
          ),
          l.a.createElement(
            p.a,
            null,
            l.a.createElement(m.T, null, "Variations"),
            l.a.createElement(
              m.d,
              { mb: "x6" },
              l.a.createElement(m.X, null, "With a maximum width"),
              l.a.createElement(
                m.ib,
                {
                  placement: "bottom",
                  tooltip:
                    "I am a Tooltip! I have very long text, but I have a smaller width",
                  maxWidth: "128px"
                },
                l.a.createElement(m.h, null, "Hover me")
              ),
              l.a.createElement(
                r.a,
                { className: "js" },
                '<Tooltip\n  placement="bottom"\n  tooltip="I am a Tooltip! I have very long text, but I have a smaller width"\n  maxWidth="128px"\n>\n  <Button>Hover me</Button>\n</Tooltip>\n'
              )
            ),
            l.a.createElement(
              m.d,
              { mb: "x6" },
              l.a.createElement(m.X, null, "With custom placement"),
              l.a.createElement(
                m.ib,
                {
                  placement: "top",
                  tooltip:
                    "I'm above instead of below! See the props table below for all placement options."
                },
                l.a.createElement(m.h, null, "Hover me")
              ),
              l.a.createElement(
                r.a,
                { className: "js" },
                '<Tooltip\n  placement="top"\n  tooltip="I\'m above instead of below! See the props table below for all placement options.">\n    <Button>Hover me</Button>\n</Tooltip>'
              )
            ),
            l.a.createElement(
              m.d,
              { mb: "x6" },
              l.a.createElement(m.X, null, "With custom delay"),
              l.a.createElement(
                m.ib,
                {
                  placement: "bottom",
                  tooltip: "I'm slow to appear and disappear",
                  showDelay: "1000",
                  hideDelay: "1000"
                },
                l.a.createElement(m.h, null, "Hover me")
              ),
              l.a.createElement(
                r.a,
                { className: "js" },
                '<Tooltip\n  placement="bottom"\n  tooltip="I\'m slow to appear and disappear"\n  showDelay="1000"\n  hideDelay="1000"\n>\n  <Button>Hover me</Button>\n</Tooltip>'
              )
            ),
            l.a.createElement(
              m.d,
              { mb: "x6" },
              l.a.createElement(m.X, null, "With non-text content"),
              l.a.createElement(
                m.ib,
                {
                  tooltip: l.a.createElement(
                    m.h,
                    { href: "/" },
                    "Button inception"
                  )
                },
                l.a.createElement(m.h, null, "Hover me")
              ),
              l.a.createElement(
                r.a,
                { className: "js" },
                '<Tooltip tooltip={<Button href="/">Button inception</Button>}>\n  <Button>Hover me</Button>\n</Tooltip>'
              )
            )
          ),
          l.a.createElement(
            p.a,
            null,
            l.a.createElement(m.T, null, "Usage Guidelines"),
            l.a.createElement(
              m.G,
              null,
              "The Tooltip component is only supported for Buttons and Links"
            ),
            l.a.createElement(
              m.G,
              null,
              "Only add a Tooltip to other elements that are focusable"
            )
          ),
          l.a.createElement(
            p.a,
            null,
            l.a.createElement(m.T, null, "Props"),
            l.a.createElement(p.i, { propsRows: s })
          ),
          l.a.createElement(
            p.a,
            null,
            l.a.createElement(m.T, null, "Resources"),
            l.a.createElement(
              m.G,
              null,
              l.a.createElement(
                m.E,
                { href: c.a + "tooltip--tooltip" },
                "View in Storybook"
              )
            )
          )
        );
      };
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-tooltip-js-ce937bbbb9482f417c31.js.map
