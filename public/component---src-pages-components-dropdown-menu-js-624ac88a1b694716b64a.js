(window.webpackJsonp = window.webpackJsonp || []).push([
  [20],
  {
    "2kYQ": function(e, n, t) {
      "use strict";
      t.r(n);
      var o = t("j8BX"),
        r = t.n(o),
        a = t("q1tI"),
        l = t.n(a),
        u = t("TJpk"),
        d = t("xj1T"),
        c = t.n(d),
        i = t("3/HP"),
        p = t("Kvkj"),
        s = t("ttvI"),
        m = [
          {
            name: "trigger",
            type: "Function",
            defaultValue: '() => <IconicButton icon="more"/>',
            description:
              "Function that returns a button component that will be used as the trigger."
          },
          {
            name: "disabled",
            type: "Boolean",
            defaultValue: "false",
            description:
              "Marks the button as disabled and unable to be activated."
          },
          {
            name: "backgroundColor",
            type: "String",
            defaultValue: "whiteGrey",
            description: "Background color of the menu container."
          },
          {
            name: "showArrow",
            type: "Bool",
            defaultValue: "true",
            description:
              "Determines if the arrow is shown on the menu container."
          },
          {
            name: "placement",
            type: "String",
            defaultValue: "bottom-start",
            description:
              "One of top, bottom, left, or right with optional -start or -end appended to place the menu container relative to the trigger."
          },
          {
            name: "showDelay",
            type: "Number",
            defaultValue: "100",
            description:
              "Buffer delay time to show the dropdown menu when opening."
          },
          {
            name: "hideDelay",
            type: "Number",
            defaultValue: "200",
            description:
              "Buffer delay time to hide the dropdown menu when closing."
          },
          {
            name: "defaultOpen",
            type: "Bool",
            defaultValue: "false",
            description: "State of the dropdown menu when mounted."
          },
          {
            name: "className",
            type: "String",
            defaultValue: "undefined",
            description: "className passed to the dropdown menu container."
          },
          {
            name: "boundariesElement",
            type: "String<'viewport' | 'scrollParent'> | HTMLElement",
            defaultValue: "undefined",
            description:
              "The element which will define the boundaries of the dropdown position. The opened dropdown will never be placed outside of the defined boundaries"
          },
          {
            name: "openAriaLabel",
            type: "String",
            defaultValue: "open",
            description: "aria label when the dropdown is closed"
          },
          {
            name: "openAriaLabel",
            type: "String",
            defaultValue: "open",
            description: "aria label when the dropdown is closed"
          }
        ],
        w = { color: "white", hoverColor: "white", bgHoverColor: "black" };
      n.default = function() {
        return l.a.createElement(
          p.h,
          null,
          l.a.createElement(
            u.Helmet,
            null,
            l.a.createElement("title", null, "Dropdown Menu")
          ),
          l.a.createElement(
            p.e,
            null,
            l.a.createElement(i.fb, null, "Dropdown Menu"),
            l.a.createElement(
              p.f,
              null,
              "Dropdown Menus are used to collapse a group of associated actions together."
            )
          ),
          l.a.createElement(
            p.a,
            null,
            l.a.createElement(
              i.t,
              null,
              l.a.createElement(i.s, { href: "/" }, "Dropdown Link"),
              l.a.createElement(i.q, null, "Dropdown Button")
            ),
            l.a.createElement(
              c.a,
              { className: "js" },
              'import { DropdownMenu, DropdownLink, DropdownButton } from "@nulogy/components";\n\n<DropdownMenu>\n  <DropdownLink href="/">Dropdown Link</DropdownLink>\n  <DropdownButton>Dropdown Button</DropdownButton>\n</DropdownMenu>\n'
            )
          ),
          l.a.createElement(
            p.a,
            null,
            l.a.createElement(i.T, null, "Variations"),
            l.a.createElement(
              i.d,
              { mb: "x6" },
              l.a.createElement(i.X, null, "Custom Trigger"),
              l.a.createElement(
                i.t,
                {
                  trigger: function() {
                    return l.a.createElement(i.h, null, "Custom Trigger");
                  }
                },
                l.a.createElement(i.s, { href: "/" }, "Dropdown Link"),
                l.a.createElement(i.q, null, "Dropdown Button")
              ),
              l.a.createElement(
                c.a,
                { className: "js" },
                '<DropdownMenu trigger={() => <Button>Custom Trigger</Button>}>\n  <DropdownLink href="/">Dropdown Link</DropdownLink>\n  <DropdownButton>Dropdown Button</DropdownButton>\n</DropdownMenu>\n'
              )
            ),
            l.a.createElement(
              i.d,
              { mb: "x6" },
              l.a.createElement(i.X, null, "Custom Colors"),
              l.a.createElement(
                i.t,
                { backgroundColor: "blackBlue" },
                l.a.createElement(i.s, r()({ href: "/" }, w), "Dropdown Link"),
                l.a.createElement(i.q, w, "Dropdown Button")
              ),
              l.a.createElement(
                c.a,
                { className: "js" },
                'const customColors = {\n  color: "white",\n  hoverColor: "white",\n  bgHoverColor: "black"\n};\n\n<DropdownMenu backgroundColor="blackBlue">\n  <DropdownLink href="/" {...customColors}>Dropdown Link</DropdownLink>\n  <DropdownButton {...customColors}>Dropdown Button</DropdownButton>\n</DropdownMenu>\n'
              )
            ),
            l.a.createElement(
              i.d,
              { mb: "x6" },
              l.a.createElement(i.X, null, "Disabled"),
              l.a.createElement(
                i.t,
                { disabled: !0 },
                l.a.createElement(i.s, { href: "/" }, "Dropdown Link"),
                l.a.createElement(i.q, null, "Dropdown Button")
              ),
              l.a.createElement(
                c.a,
                { className: "js" },
                '<DropdownMenu disabled>\n  <DropdownLink href="/">Dropdown Link</DropdownLink>\n  <DropdownButton>Dropdown Button</DropdownButton>\n</DropdownMenu>\n'
              )
            )
          ),
          l.a.createElement(
            p.a,
            null,
            l.a.createElement(i.T, null, "Using DropdownItem"),
            l.a.createElement(
              i.bb,
              { mb: "x2" },
              "Using the Dropdown Link and DropdownButton components with the DropdownMenu are recommended as they provide the correct link and button styles for the dropdown. However, wrapping another component with DropdownItem will also apply correct styling for the DropdownMenu."
            ),
            l.a.createElement(
              i.t,
              null,
              l.a.createElement(
                i.r,
                null,
                l.a.createElement(
                  "a",
                  { href: "/", style: { textDecoration: "none" } },
                  "Custom Link Component"
                )
              )
            ),
            l.a.createElement(
              c.a,
              { className: "js" },
              '<DropdownMenu>\n  <DropdownItem>\n    <a href="/" style={{textDecoration:"none"}}>Custom Link Component</a>\n  </DropdownItem>\n</DropdownMenu>\n'
            )
          ),
          l.a.createElement(
            p.a,
            null,
            l.a.createElement(i.T, null, "Closing the DropdownMenu"),
            l.a.createElement(
              i.bb,
              { mb: "x2" },
              "The DropdownMenu is currently to be used as an uncontrolled component. However, the component does come with hooks to use to close the menu when elements within the menu are clicked. Use the closeMenu function provided by the DropdownMenu component via the",
              " ",
              l.a.createElement(
                i.E,
                { href: "https://reactjs.org/docs/render-props.html" },
                "render props"
              ),
              " ",
              "React pattern as shown below. Note: event must be passed in to closeMenu."
            ),
            l.a.createElement(i.t, null, function(e) {
              var n = e.closeMenu;
              return l.a.createElement(
                i.q,
                {
                  onClick: function(e) {
                    n(e);
                  }
                },
                "Dropdown Button"
              );
            }),
            l.a.createElement(
              c.a,
              { className: "js" },
              "<DropdownMenu>\n  {({ closeMenu }) => (\n    <DropdownButton onClick={(e)=>{closeMenu(e)}}>Dropdown Button</DropdownButton>\n  )}\n</DropdownMenu>\n"
            )
          ),
          l.a.createElement(
            p.a,
            null,
            l.a.createElement(i.T, null, "Props"),
            l.a.createElement(p.i, { propsRows: m })
          ),
          l.a.createElement(
            p.a,
            null,
            l.a.createElement(i.T, null, "Related components"),
            l.a.createElement(
              i.F,
              null,
              l.a.createElement(
                i.G,
                null,
                l.a.createElement(
                  i.E,
                  { href: "/components/buttons" },
                  "Buttons"
                )
              )
            )
          ),
          l.a.createElement(
            p.a,
            null,
            l.a.createElement(i.T, null, "Resources"),
            l.a.createElement(
              i.F,
              null,
              l.a.createElement(
                i.G,
                null,
                l.a.createElement(
                  i.E,
                  { href: "".concat(s.a, "dropdownmenu--dropdownmenu") },
                  "View in Storybook"
                )
              )
            )
          )
        );
      };
    },
    ttvI: function(e, n, t) {
      "use strict";
      t.d(n, "c", function() {
        return o;
      }),
        t.d(n, "a", function() {
          return r;
        }),
        t.d(n, "b", function() {
          return a;
        });
      var o = "https://storybook.nulogy.design/?path=/story/",
        r = "".concat(o, "components-"),
        a = "".concat(o, "pages-");
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-dropdown-menu-js-624ac88a1b694716b64a.js.map
