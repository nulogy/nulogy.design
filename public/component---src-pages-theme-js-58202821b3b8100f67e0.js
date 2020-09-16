(window.webpackJsonp = window.webpackJsonp || []).push([
  [63],
  {
    "5pHh": function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("q1tI"),
        o = n.n(a),
        l = n("TJpk"),
        r = n("vOnD"),
        m = n("xj1T"),
        s = n.n(m),
        c = n("yoZo"),
        i = n("Kvkj"),
        u = r.d.div.withConfig({
          displayName: "theme__CustomComponent",
          componentId: "sc-14gviee-0"
        })({
          background: c.kb.colors.darkBlue,
          color: c.kb.colors.white,
          padding: c.kb.space.x3
        });
      t.default = function() {
        return o.a.createElement(
          i.h,
          null,
          o.a.createElement(
            l.Helmet,
            null,
            o.a.createElement("title", null, "Theme")
          ),
          o.a.createElement(
            i.e,
            null,
            o.a.createElement(c.fb, null, "Theme"),
            o.a.createElement(
              i.f,
              null,
              "Design options for creating interfaces in Nulogy's style can be accessed in Javascript via the theme."
            )
          ),
          o.a.createElement(
            i.a,
            null,
            o.a.createElement(c.X, null, "Full theme"),
            o.a.createElement(s.a, null, JSON.stringify(c.kb, null, "  "))
          ),
          o.a.createElement(
            i.a,
            null,
            o.a.createElement(c.T, null, "Usage"),
            o.a.createElement(
              c.d,
              { mb: "x4" },
              o.a.createElement(c.X, null, "Theme as props"),
              o.a.createElement(
                i.c,
                null,
                "Some of our components have props that reference our theme, e.g for color or spacing values. These are connected via",
                " ",
                o.a.createElement(
                  c.E,
                  { href: "https://styled-system.com/getting-started" },
                  "Styled-System"
                ),
                ", which does the work of finding the appropriate object for you, e.g:"
              ),
              o.a.createElement(
                c.d,
                { bg: "darkBlue", color: "white", p: "x3" },
                "Styled Box"
              ),
              o.a.createElement(
                s.a,
                { className: "js" },
                'import theme from "@nulogy/components";\n\n<Box bg="darkBlue" color="white" p="x3">Styled Box</Box>\n'
              )
            ),
            o.a.createElement(c.X, null, "For custom components"),
            o.a.createElement(
              i.c,
              null,
              "Tokens can be by used by importing the theme file and referencing the appropriate object directly. For example, if we didn't have the Box component above we could manually create it like so:"
            ),
            o.a.createElement(u, null, "Custom component"),
            o.a.createElement(
              s.a,
              { className: "js" },
              'import { theme } from "@nulogy/components"\n\nconst CustomComponent = styled.div({\n  background: theme.colors.darkBlue,\n  color: theme.colors.white,\n  padding: theme.space.x3,\n});\n\n<CustomComponent>Custom component</CustomComponent>'
            )
          ),
          o.a.createElement(
            i.a,
            null,
            o.a.createElement(c.T, null, "Custom themes"),
            o.a.createElement(
              i.c,
              null,
              "As of version 3.0, themes can be overriden at the NDSProvider level. This allows changing all definitions of a property at once.",
              " "
            ),
            o.a.createElement(
              i.c,
              null,
              'For example, if you were working in PackManager and wanted the "medium" font size used in all components to be 14px instead of 16px:',
              " "
            ),
            o.a.createElement(
              s.a,
              { className: "js" },
              'import { NDSProvider } from "@nulogy/components"\n\n<NDSProvider theme={fontSizes: {medium: "14px"}}>// app</NDSProvider>'
            ),
            o.a.createElement(
              c.b,
              null,
              "This is a powerful feature, but should be used sparingly. Please let Design Ops know when you've overriden the theme for any reason, in case there are systemic problems we could be solving in the system directly instead."
            )
          ),
          o.a.createElement(
            i.a,
            null,
            o.a.createElement(c.T, null, "Resources"),
            o.a.createElement(
              c.F,
              null,
              o.a.createElement(
                c.G,
                null,
                o.a.createElement(
                  c.E,
                  {
                    href:
                      "https://github.com/nulogy/design-system/tree/master/tokens"
                  },
                  "@nulogy/tokens"
                )
              )
            )
          )
        );
      };
    }
  }
]);
//# sourceMappingURL=component---src-pages-theme-js-58202821b3b8100f67e0.js.map
