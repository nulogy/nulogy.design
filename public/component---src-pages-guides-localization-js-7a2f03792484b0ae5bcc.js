(window.webpackJsonp = window.webpackJsonp || []).push([
  [54],
  {
    "RU/M": function(e, t, a) {
      "use strict";
      a.r(t);
      var l = a("q1tI"),
        n = a.n(l),
        o = a("TJpk"),
        r = a("xj1T"),
        s = a.n(r),
        c = a("yoZo"),
        i = a("Kvkj"),
        u = a("ttvI");
      t.default = function() {
        return n.a.createElement(
          i.h,
          null,
          n.a.createElement(
            o.Helmet,
            null,
            n.a.createElement("title", null, "Localization")
          ),
          n.a.createElement(
            i.e,
            null,
            n.a.createElement(c.fb, null, "Localization"),
            n.a.createElement(
              i.f,
              null,
              "Learn about localization with Nulogy Design System (NDS)."
            )
          ),
          n.a.createElement(
            i.a,
            null,
            n.a.createElement(c.T, null, "Localization using NDS Components"),
            n.a.createElement(
              i.c,
              null,
              "NDS components include some default strings for commonly used labels and aria-labels."
            ),
            n.a.createElement(
              i.c,
              null,
              "To pass a locale to NDSProvider, locate the NDSProvider within your app and pass in the locale prop."
            ),
            n.a.createElement(
              s.a,
              { className: "js" },
              "<NDSProvider locale={yourLocale}>{ App }</NDSProvider>"
            ),
            n.a.createElement(
              i.c,
              null,
              "The default language used by these strings is English (US) unless a different locale is passed to the NDSProvider. All strings within NDS can be overridden using the component's props."
            ),
            n.a.createElement(
              i.c,
              null,
              "To see an example of a localized component, go to the",
              " ",
              n.a.createElement(
                c.E,
                { href: u.a + "pagination--pagination" },
                "Pagination Component"
              ),
              " ",
              'using the "Knobs" section you should be able to select an NDS Provider Locale from a dropdown and observe the labels translate according to the selected locale.'
            )
          ),
          n.a.createElement(
            i.a,
            null,
            n.a.createElement(c.T, null, "Available NDS Locales"),
            n.a.createElement(
              i.c,
              null,
              'Below is a list of all locales currently accepted by NDSProvider. Use the "Locale Prop Value" as the string value to pass to NDSProvider\'s locale prop.'
            ),
            n.a.createElement(c.Z, {
              columns: [
                { label: "Language", dataKey: "label" },
                { label: "Locale Prop Value", dataKey: "value" }
              ],
              rows: c.a
            }),
            n.a.createElement(
              i.c,
              { mt: "x2" },
              "Note that if your application supports Simplified Chinese, you'll also need to load the",
              " ",
              n.a.createElement(
                c.E,
                { href: "https://www.google.com/get/noto/" },
                "Noto Sans SC"
              ),
              " font. For more information, see the",
              " ",
              n.a.createElement(
                c.E,
                {
                  href:
                    "https://github.com/nulogy/design-system/blob/master/components/README.md#2-add-fonts"
                },
                "README"
              ),
              "."
            )
          )
        );
      };
    },
    ttvI: function(e, t, a) {
      "use strict";
      a.d(t, "c", function() {
        return l;
      }),
        a.d(t, "a", function() {
          return n;
        }),
        a.d(t, "b", function() {
          return o;
        });
      var l = "https://storybook.nulogy.design/?path=/story/",
        n = l + "components-",
        o = l + "pages-";
    }
  }
]);
//# sourceMappingURL=component---src-pages-guides-localization-js-7a2f03792484b0ae5bcc.js.map
