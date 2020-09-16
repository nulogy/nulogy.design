(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
    "7itv": function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a("q1tI"),
        l = a.n(n),
        r = a("TJpk"),
        o = a("yoZo"),
        c = a("xj1T"),
        m = a.n(c),
        u = a("Kvkj"),
        s = a("ttvI"),
        i = [
          {
            name: "size",
            type: "String",
            defaultValue: "medium",
            description: "Accepts small, medium, or large."
          },
          {
            name: "disabled",
            type: "Boolean",
            defaultValue: "false",
            description:
              "Marks the button as disabled and unable to be activated."
          },
          {
            name: "icon",
            type: "String",
            defaultValue: "null",
            description:
              "The icon to display. See Icons for all possible options."
          },
          {
            name: "iconSide",
            type: "String",
            defaultValue: "right",
            description: "The side to display the icon."
          },
          {
            name: "fullWidth",
            type: "Boolean",
            defaultValue: "false",
            description: "Makes the button fill the width of its container."
          },
          {
            name: "className",
            type: "String",
            defaultValue: "undefined",
            description: "className passed to the button component."
          },
          {
            name: "asLink",
            type: "Boolean",
            defaultValue: "false",
            description:
              "When set, renders the button as an <a> link instead of a <button>."
          }
        ];
      t.default = function() {
        return l.a.createElement(
          u.h,
          null,
          l.a.createElement(
            r.Helmet,
            null,
            l.a.createElement("title", null, "Buttons")
          ),
          l.a.createElement(
            u.e,
            null,
            l.a.createElement(o.fb, null, "Buttons"),
            l.a.createElement(
              u.f,
              null,
              "Buttons make common actions immediately detectable and easy to perform."
            )
          ),
          l.a.createElement(
            u.a,
            null,
            l.a.createElement(o.h, null, "Create project"),
            l.a.createElement(
              m.a,
              { className: "js" },
              'import { Button } from "@nulogy/components";\n\n<Button>Create project</Button>\n'
            )
          ),
          l.a.createElement(
            u.a,
            null,
            l.a.createElement(o.T, null, "Types of buttons"),
            l.a.createElement(
              u.c,
              null,
              "There are multiple types of buttons that all accept the same options."
            ),
            l.a.createElement(
              o.d,
              { mb: "x6" },
              l.a.createElement(o.X, null, "PrimaryButton"),
              l.a.createElement(
                u.c,
                null,
                "Primary Buttons are used for the main action in a particular context. There is usually not more than one primary button per screen and not all of the screens require a Primary button."
              ),
              l.a.createElement(o.P, null, "Create project"),
              l.a.createElement(
                m.a,
                { className: "js" },
                'import { PrimaryButton } from "@nulogy/components";\n\n<PrimaryButton>Create project</PrimaryButton>'
              )
            ),
            l.a.createElement(
              o.d,
              { mb: "x6" },
              l.a.createElement(o.X, null, "DangerButton"),
              l.a.createElement(
                u.c,
                null,
                "Danger Buttons are used for destructive actions such as deleting. They are most likely to appear in confirmation dialogs."
              ),
              l.a.createElement(o.n, null, "Create project"),
              l.a.createElement(
                m.a,
                { className: "js" },
                'import { DangerButton } from "@nulogy/components";\n\n<DangerButton>Create project</DangerButton>'
              )
            ),
            l.a.createElement(
              o.d,
              { mb: "x6" },
              l.a.createElement(o.X, null, "QuietButton"),
              l.a.createElement(
                u.c,
                null,
                "Quiet Buttons are used for less important actions such as “Cancel” or actions that are not directly related to the context of the page (e.g Learn more …). Quiet buttons are often paired with a Primary button."
              ),
              l.a.createElement(o.Q, null, "Learn more"),
              l.a.createElement(
                m.a,
                { className: "js" },
                'import { QuietButton } from "@nulogy/components";\n\n<QuietButton>Create project</QuietButton>'
              )
            )
          ),
          l.a.createElement(
            u.a,
            null,
            l.a.createElement(o.T, null, "Variations"),
            l.a.createElement(
              u.c,
              null,
              "The following variations are available to all button components."
            ),
            l.a.createElement(
              o.d,
              { mb: "x6" },
              l.a.createElement(o.X, null, "Small"),
              l.a.createElement(o.h, { size: "small" }, "Read more"),
              l.a.createElement(
                m.a,
                { className: "js" },
                '<Button size="small">Read more</Button>'
              )
            ),
            l.a.createElement(
              o.d,
              { mb: "x6" },
              l.a.createElement(o.X, null, "Medium"),
              l.a.createElement(o.h, { size: "medium" }, "Read more"),
              l.a.createElement(
                m.a,
                { className: "js" },
                '<Button size="medium">Read more</Button>'
              )
            ),
            l.a.createElement(
              o.d,
              { mb: "x6" },
              l.a.createElement(o.X, null, "Large"),
              l.a.createElement(o.h, { size: "large" }, "Read more"),
              l.a.createElement(
                m.a,
                { className: "js" },
                '<Button size="large">Read more</Button>'
              )
            ),
            l.a.createElement(
              o.d,
              { mb: "x6" },
              l.a.createElement(o.X, null, "Full Width"),
              l.a.createElement(o.h, { fullWidth: !0 }, "Read more"),
              l.a.createElement(
                m.a,
                { className: "js" },
                "<Button fullWidth>Full Width</Button>"
              )
            ),
            l.a.createElement(
              o.d,
              { mb: "x6" },
              l.a.createElement(o.X, null, "With an icon"),
              l.a.createElement(
                o.h,
                { icon: "add", iconSide: "left" },
                "Create project"
              ),
              l.a.createElement(
                m.a,
                { className: "js" },
                '<Button icon="add" iconSide="left">Create project</Button>'
              )
            ),
            l.a.createElement(
              o.d,
              { mb: "x6" },
              l.a.createElement(o.X, null, "Disabled"),
              l.a.createElement(
                o.u,
                { justifyContent: "space-between", alignItems: "center" },
                l.a.createElement(o.h, { disabled: !0 }, "Create project"),
                l.a.createElement(o.P, { disabled: !0 }, "Create project"),
                l.a.createElement(o.n, { disabled: !0 }, "Delete project"),
                l.a.createElement(o.Q, { disabled: !0 }, "Edit project")
              ),
              l.a.createElement(
                m.a,
                { className: "js" },
                "<Button disabled>Create project</Button>"
              )
            )
          ),
          l.a.createElement(
            u.a,
            null,
            l.a.createElement(o.T, null, "Content guidelines"),
            l.a.createElement(o.X, null, "Button labeling"),
            l.a.createElement(
              o.d,
              { mb: "x2" },
              l.a.createElement(
                o.F,
                null,
                l.a.createElement(
                  o.G,
                  null,
                  "Always lead with an actionable verb."
                ),
                l.a.createElement(
                  o.G,
                  null,
                  "Whenever possible follow with a clear noun",
                  " ",
                  l.a.createElement(
                    "em",
                    null,
                    "(e.g: Create shipment, Approve delivery)."
                  )
                ),
                l.a.createElement(o.G, null, "Always use sentence case.")
              )
            ),
            l.a.createElement(o.X, null, "Button grouping"),
            l.a.createElement(
              o.F,
              null,
              l.a.createElement(
                o.G,
                null,
                "Use the ",
                l.a.createElement(
                  o.E,
                  { href: "/components/button-group" },
                  "Button Group"
                ),
                " ",
                "component to associate a group of buttons together."
              ),
              l.a.createElement(
                o.G,
                null,
                "Order buttons in a group from most important on the left to least important on the right."
              ),
              l.a.createElement(
                o.G,
                null,
                "Only have one PrimaryButton or DangerButton on the page at one time."
              )
            )
          ),
          l.a.createElement(
            u.a,
            null,
            l.a.createElement(o.T, null, "Props"),
            l.a.createElement(u.i, { propsRows: i }),
            l.a.createElement(
              u.c,
              { mt: "x3" },
              "Button components also has access to ",
              l.a.createElement(u.d, null, "space"),
              " ",
              "style props. See the",
              " ",
              l.a.createElement(
                o.E,
                { href: "/guides/style-props" },
                "style prop documentation"
              ),
              " for a full list of available props."
            )
          ),
          l.a.createElement(
            u.a,
            null,
            l.a.createElement(o.T, null, "Resources"),
            l.a.createElement(
              o.F,
              null,
              l.a.createElement(
                o.G,
                null,
                l.a.createElement(
                  o.E,
                  { href: s.a + "buttons--button" },
                  "View in Storybook"
                )
              )
            )
          ),
          l.a.createElement(
            u.a,
            null,
            l.a.createElement(o.T, null, "Related components"),
            l.a.createElement(
              o.F,
              null,
              l.a.createElement(
                o.G,
                null,
                l.a.createElement(
                  o.E,
                  { href: "/components/button-group" },
                  "Button Group"
                )
              ),
              l.a.createElement(
                o.G,
                null,
                l.a.createElement(
                  o.E,
                  { href: "/components/iconic-button" },
                  "Iconic button"
                )
              ),
              l.a.createElement(
                o.G,
                null,
                l.a.createElement(o.E, { href: "/components/link" }, "Link")
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
          return r;
        });
      var n = "https://storybook.nulogy.design/?path=/story/",
        l = n + "components-",
        r = n + "pages-";
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-buttons-js-1ce8fbfa30a2c6a455db.js.map
