(window.webpackJsonp = window.webpackJsonp || []).push([
  [20],
  {
    "2kYQ": function(e, n, t) {
      "use strict";
      t.r(n);
      var o = t("q1tI"),
        r = t.n(o),
        a = t("TJpk"),
        l = t("xj1T"),
        u = t.n(l),
        d = t("yoZo"),
        c = t("Kvkj"),
        i = t("ttvI"),
        p = [
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
        s = { color: "white", hoverColor: "white", bgHoverColor: "black" };
      n.default = function() {
        return r.a.createElement(
          c.h,
          null,
          r.a.createElement(
            a.Helmet,
            null,
            r.a.createElement("title", null, "Dropdown Menu")
          ),
          r.a.createElement(
            c.e,
            null,
            r.a.createElement(d.fb, null, "Dropdown Menu"),
            r.a.createElement(
              c.f,
              null,
              "Dropdown Menus are used to collapse a group of associated actions together."
            )
          ),
          r.a.createElement(
            c.a,
            null,
            r.a.createElement(
              d.t,
              null,
              r.a.createElement(d.s, { href: "/" }, "Dropdown Link"),
              r.a.createElement(d.q, null, "Dropdown Button")
            ),
            r.a.createElement(
              u.a,
              { className: "js" },
              'import { DropdownMenu, DropdownLink, DropdownButton } from "@nulogy/components";\n\n<DropdownMenu>\n  <DropdownLink href="/">Dropdown Link</DropdownLink>\n  <DropdownButton>Dropdown Button</DropdownButton>\n</DropdownMenu>\n'
            )
          ),
          r.a.createElement(
            c.a,
            null,
            r.a.createElement(d.T, null, "Variations"),
            r.a.createElement(
              d.d,
              { mb: "x6" },
              r.a.createElement(d.X, null, "Custom Trigger"),
              r.a.createElement(
                d.t,
                {
                  trigger: function() {
                    return r.a.createElement(d.h, null, "Custom Trigger");
                  }
                },
                r.a.createElement(d.s, { href: "/" }, "Dropdown Link"),
                r.a.createElement(d.q, null, "Dropdown Button")
              ),
              r.a.createElement(
                u.a,
                { className: "js" },
                '<DropdownMenu trigger={() => <Button>Custom Trigger</Button>}>\n  <DropdownLink href="/">Dropdown Link</DropdownLink>\n  <DropdownButton>Dropdown Button</DropdownButton>\n</DropdownMenu>\n'
              )
            ),
            r.a.createElement(
              d.d,
              { mb: "x6" },
              r.a.createElement(d.X, null, "Custom Colors"),
              r.a.createElement(
                d.t,
                { backgroundColor: "blackBlue" },
                r.a.createElement(
                  d.s,
                  Object.assign({ href: "/" }, s),
                  "Dropdown Link"
                ),
                r.a.createElement(d.q, s, "Dropdown Button")
              ),
              r.a.createElement(
                u.a,
                { className: "js" },
                'const customColors = {\n  color: "white",\n  hoverColor: "white",\n  bgHoverColor: "black"\n};\n\n<DropdownMenu backgroundColor="blackBlue">\n  <DropdownLink href="/" {...customColors}>Dropdown Link</DropdownLink>\n  <DropdownButton {...customColors}>Dropdown Button</DropdownButton>\n</DropdownMenu>\n'
              )
            ),
            r.a.createElement(
              d.d,
              { mb: "x6" },
              r.a.createElement(d.X, null, "Disabled"),
              r.a.createElement(
                d.t,
                { disabled: !0 },
                r.a.createElement(d.s, { href: "/" }, "Dropdown Link"),
                r.a.createElement(d.q, null, "Dropdown Button")
              ),
              r.a.createElement(
                u.a,
                { className: "js" },
                '<DropdownMenu disabled>\n  <DropdownLink href="/">Dropdown Link</DropdownLink>\n  <DropdownButton>Dropdown Button</DropdownButton>\n</DropdownMenu>\n'
              )
            )
          ),
          r.a.createElement(
            c.a,
            null,
            r.a.createElement(d.T, null, "Using DropdownItem"),
            r.a.createElement(
              d.bb,
              { mb: "x2" },
              "Using the Dropdown Link and DropdownButton components with the DropdownMenu are recommended as they provide the correct link and button styles for the dropdown. However, wrapping another component with DropdownItem will also apply correct styling for the DropdownMenu."
            ),
            r.a.createElement(
              d.t,
              null,
              r.a.createElement(
                d.r,
                null,
                r.a.createElement(
                  "a",
                  { href: "/", style: { textDecoration: "none" } },
                  "Custom Link Component"
                )
              )
            ),
            r.a.createElement(
              u.a,
              { className: "js" },
              '<DropdownMenu>\n  <DropdownItem>\n    <a href="/" style={{textDecoration:"none"}}>Custom Link Component</a>\n  </DropdownItem>\n</DropdownMenu>\n'
            )
          ),
          r.a.createElement(
            c.a,
            null,
            r.a.createElement(d.T, null, "Closing the DropdownMenu"),
            r.a.createElement(
              d.bb,
              { mb: "x2" },
              "The DropdownMenu is currently to be used as an uncontrolled component. However, the component does come with hooks to use to close the menu when elements within the menu are clicked. Use the closeMenu function provided by the DropdownMenu component via the",
              " ",
              r.a.createElement(
                d.E,
                { href: "https://reactjs.org/docs/render-props.html" },
                "render props"
              ),
              " ",
              "React pattern as shown below. Note: event must be passed in to closeMenu."
            ),
            r.a.createElement(d.t, null, function(e) {
              var n = e.closeMenu;
              return r.a.createElement(
                d.q,
                {
                  onClick: function(e) {
                    n(e);
                  }
                },
                "Dropdown Button"
              );
            }),
            r.a.createElement(
              u.a,
              { className: "js" },
              "<DropdownMenu>\n  {({ closeMenu }) => (\n    <DropdownButton onClick={(e)=>{closeMenu(e)}}>Dropdown Button</DropdownButton>\n  )}\n</DropdownMenu>\n"
            )
          ),
          r.a.createElement(
            c.a,
            null,
            r.a.createElement(d.T, null, "Props"),
            r.a.createElement(c.i, { propsRows: p })
          ),
          r.a.createElement(
            c.a,
            null,
            r.a.createElement(d.T, null, "Related components"),
            r.a.createElement(
              d.F,
              null,
              r.a.createElement(
                d.G,
                null,
                r.a.createElement(
                  d.E,
                  { href: "/components/buttons" },
                  "Buttons"
                )
              )
            )
          ),
          r.a.createElement(
            c.a,
            null,
            r.a.createElement(d.T, null, "Resources"),
            r.a.createElement(
              d.F,
              null,
              r.a.createElement(
                d.G,
                null,
                r.a.createElement(
                  d.E,
                  { href: i.a + "dropdownmenu--dropdownmenu" },
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
        r = o + "components-",
        a = o + "pages-";
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-dropdown-menu-js-2f453a5705d9d79672e0.js.map
