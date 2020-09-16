(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    QmuD: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a("q1tI"),
        l = a.n(n),
        r = a("TJpk"),
        c = a("xj1T"),
        o = a.n(c),
        s = a("3/HP"),
        i = a("Kvkj"),
        m = a("ttvI"),
        u = [
          {
            name: "title",
            type: "string",
            defaultValue: "",
            description:
              "An optional title to display in bold above the main text."
          },
          {
            name: "type",
            type: "string",
            defaultValue: "informative",
            description:
              "The type of alert. Accepts informative, danger, warning and success."
          },
          {
            name: "className",
            type: "String",
            defaultValue: "undefined",
            description: "className passed to the alert component."
          },
          {
            name: "isCloseable",
            type: "boolean",
            defaultValue: "false",
            description: "Provides a close icon in the top right corner."
          },
          {
            name: "onClose",
            type: "function",
            defaultValue: "() => {}",
            description: "Callback function invoked when the Alert is closed."
          },
          {
            name: "closeAriaLabel",
            type: "String",
            defaultValue: "close",
            description: "aria label for close button"
          },
          {
            name: "controlled",
            type: "boolean",
            defaultValue: "false",
            description:
              "If true, will allow the Alert's opened and closed state to be controlled through props rather than within the component's internal state"
          }
        ];
      t.default = function() {
        return l.a.createElement(
          i.h,
          null,
          l.a.createElement(
            r.Helmet,
            null,
            l.a.createElement("title", null, "Alert")
          ),
          l.a.createElement(
            i.e,
            null,
            l.a.createElement(s.fb, null, "Alert"),
            l.a.createElement(
              i.f,
              null,
              "An alert is a concise, event-driven message that communicates information and requires minimal interaction."
            )
          ),
          l.a.createElement(
            i.a,
            null,
            l.a.createElement(
              s.b,
              {
                type: "danger",
                title: "Important information",
                isCloseable: !0
              },
              "Details about important information"
            ),
            l.a.createElement(
              o.a,
              { className: "js" },
              'import {Alert} from "@nulogy/components";\n\n<Alert type="danger" title="Important information" isCloseaeble>\n  Details about important information\n</Alert>\n'
            )
          ),
          l.a.createElement(
            i.a,
            null,
            l.a.createElement(s.T, null, "Use when"),
            l.a.createElement(
              s.F,
              null,
              l.a.createElement(
                s.G,
                null,
                "a user completes a task successfully"
              ),
              l.a.createElement(
                s.G,
                null,
                "to call attention to an error that requires attention"
              ),
              l.a.createElement(
                s.G,
                null,
                " to inform users about upcoming service maintenance"
              ),
              l.a.createElement(
                s.G,
                null,
                " to warn users about a potential issue"
              ),
              l.a.createElement(s.G, null, " a form has returned with errors")
            )
          ),
          l.a.createElement(
            i.a,
            null,
            l.a.createElement(s.T, null, "Variations"),
            l.a.createElement(
              s.d,
              { mb: "x6" },
              l.a.createElement(s.X, null, "Informative"),
              l.a.createElement(
                i.c,
                null,
                "Informative alerts provide a user with general messages and non-critical information."
              ),
              l.a.createElement(s.b, null, "Alert text"),
              l.a.createElement(
                o.a,
                { className: "js" },
                '<Alert type="informative">Text</Alert>'
              )
            ),
            l.a.createElement(
              s.d,
              { mb: "x6" },
              l.a.createElement(s.X, null, "Danger"),
              l.a.createElement(
                i.c,
                null,
                "Danger alerts inform users about errors that require attention."
              ),
              l.a.createElement(s.b, { type: "danger" }, "Text"),
              l.a.createElement(
                o.a,
                { className: "js" },
                '<Alert type="danger">Text</Alert>'
              )
            ),
            l.a.createElement(
              s.d,
              { mb: "x6" },
              l.a.createElement(s.X, null, "Success"),
              l.a.createElement(
                i.c,
                null,
                "Success alerts inform users that an action has been completed successfully."
              ),
              l.a.createElement(s.b, { type: "success" }, "Text"),
              l.a.createElement(
                o.a,
                { className: "js" },
                '<Alert type="success">Text</Alert>'
              )
            ),
            l.a.createElement(
              s.d,
              { mb: "x6" },
              l.a.createElement(s.X, null, "Warning"),
              l.a.createElement(i.c, null, "Warning alerts raise caution."),
              l.a.createElement(s.b, { type: "warning" }, "Text"),
              l.a.createElement(
                o.a,
                { className: "js" },
                '<Alert type="warning">Text</Alert>'
              )
            ),
            l.a.createElement(
              s.d,
              { mb: "x6" },
              l.a.createElement(s.X, null, "Alert with Link"),
              l.a.createElement(
                i.c,
                null,
                "A link may be added to the content of an alert. Within alerts, link text is always displayed in black."
              ),
              l.a.createElement(
                s.b,
                null,
                "Alert text with ",
                l.a.createElement(s.E, { href: "/" }, "linked details"),
                "."
              ),
              l.a.createElement(
                o.a,
                { className: "js" },
                '<Alert>\n  Alert text <Link href="/">linked details</Link>.\n</Alert>'
              )
            )
          ),
          l.a.createElement(
            i.a,
            null,
            l.a.createElement(s.T, null, "Props"),
            l.a.createElement(i.i, { propsRows: u }),
            l.a.createElement(
              i.c,
              { mt: "x3" },
              "The Alert component has access to ",
              l.a.createElement(i.d, null, "space"),
              " style props. See the",
              " ",
              l.a.createElement(
                s.E,
                { href: "/guides/style-props" },
                "style prop documentation"
              ),
              " for a full list of available props."
            )
          ),
          l.a.createElement(
            i.a,
            null,
            l.a.createElement(s.T, null, "Content guidelines"),
            l.a.createElement(
              i.c,
              null,
              "To provide a more detailed explanation of the message that is being communicated, a link to the new screen can be provided in the child content using a ",
              l.a.createElement(s.E, { href: "/components/link" }, "Link"),
              " component."
            )
          ),
          l.a.createElement(
            i.a,
            null,
            l.a.createElement(s.T, null, "Related components"),
            l.a.createElement(
              s.F,
              null,
              l.a.createElement(
                s.G,
                null,
                l.a.createElement(s.E, { href: "/components/toast" }, "Toast")
              )
            )
          ),
          l.a.createElement(
            i.a,
            null,
            l.a.createElement(s.T, null, "Resources"),
            l.a.createElement(
              s.G,
              null,
              l.a.createElement(
                s.E,
                { href: "".concat(m.a, "alert--danger") },
                "View in Storybook"
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
        l = "".concat(n, "components-"),
        r = "".concat(n, "pages-");
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-alert-js-95a44cb4e55cb1a571b6.js.map
