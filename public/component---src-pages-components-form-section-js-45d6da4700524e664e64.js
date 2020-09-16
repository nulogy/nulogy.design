(window.webpackJsonp = window.webpackJsonp || []).push([
  [23],
  {
    "+jDl": function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("q1tI"),
        l = n.n(a),
        r = n("TJpk"),
        o = n("xj1T"),
        c = n.n(o),
        i = n("3/HP"),
        m = n("Kvkj"),
        u = n("ttvI"),
        s = [
          {
            name: "title",
            type: "string",
            defaultValue: "null",
            description: "Title of Form Section"
          },
          {
            name: "className",
            type: "String",
            defaultValue: "undefined",
            description: "className passed to the form section component."
          }
        ];
      t.default = function() {
        return l.a.createElement(
          m.h,
          null,
          l.a.createElement(
            r.Helmet,
            null,
            l.a.createElement("title", null, "Form Section")
          ),
          l.a.createElement(
            m.e,
            null,
            l.a.createElement(i.fb, null, "Form Section"),
            l.a.createElement(
              m.f,
              null,
              "Form sections group related input fields and provide spacing."
            )
          ),
          l.a.createElement(
            m.a,
            null,
            l.a.createElement(
              i.v,
              { mb: "x6" },
              l.a.createElement(
                i.w,
                { title: "Personal Information" },
                l.a.createElement(i.D, { id: "name", labelText: "Name" }),
                l.a.createElement(i.D, {
                  id: "birthdate",
                  labelText: "Date of birth"
                })
              ),
              l.a.createElement(
                i.w,
                { title: "General Information" },
                l.a.createElement(i.D, {
                  id: "occupation",
                  labelText: "Occupation"
                })
              )
            ),
            l.a.createElement(
              c.a,
              { className: "js" },
              '<Form>\n    <FormSection title="Personal Information">\n        <Input id="name" labelText="Name" />\n        <Input id="birthdate" labelText="Date of birth"/>\n    </FormSection>\n    <FormSection title="General Information">\n        <Input id="occupation" labelText="Occupation" />\n    </FormSection>\n</Form>\n'
            )
          ),
          l.a.createElement(
            m.a,
            null,
            l.a.createElement(i.T, null, "Variations"),
            l.a.createElement(
              i.d,
              { mb: "x4" },
              l.a.createElement(i.X, { mb: "x6" }, "Without a Title"),
              l.a.createElement(
                i.v,
                { mb: "x6" },
                l.a.createElement(
                  i.w,
                  null,
                  l.a.createElement(i.D, { id: "name", labelText: "Name" }),
                  l.a.createElement(i.D, {
                    id: "birthdate",
                    labelText: "Date of birth"
                  })
                ),
                l.a.createElement(
                  i.w,
                  null,
                  l.a.createElement(i.D, {
                    id: "occupation",
                    labelText: "Occupation"
                  })
                )
              ),
              l.a.createElement(
                c.a,
                { className: "js" },
                '<Form>\n    <FormSection>\n        <Input id="name" labelText="Name" />\n        <Input id="birthdate" labelText="Date of birth"/>\n        <Input id="birthplace" labelText="Place of birth" />\n    </FormSection>\n    <FormSection>\n        <Input id="gender" labelText="Gender" />\n        <Input id="occupation" labelText="Occupation" />\n    </FormSection>\n</Form>\n'
              )
            )
          ),
          l.a.createElement(
            m.a,
            null,
            l.a.createElement(i.T, null, "Props"),
            l.a.createElement(m.i, { propsRows: s })
          ),
          l.a.createElement(
            m.a,
            null,
            l.a.createElement(i.T, null, "Related components"),
            l.a.createElement(
              i.F,
              null,
              l.a.createElement(
                i.G,
                null,
                l.a.createElement(i.E, { href: "/components/form" }, "Form")
              )
            )
          ),
          l.a.createElement(
            m.a,
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
                  { href: "".concat(u.a, "form--with-form-sections") },
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
          return r;
        });
      var a = "https://storybook.nulogy.design/?path=/story/",
        l = "".concat(a, "components-"),
        r = "".concat(a, "pages-");
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-form-section-js-45d6da4700524e664e64.js.map
