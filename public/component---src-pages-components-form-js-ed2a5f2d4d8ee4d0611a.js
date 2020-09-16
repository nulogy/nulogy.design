(window.webpackJsonp = window.webpackJsonp || []).push([
  [22],
  {
    aaoP: function(e, t, a) {
      "use strict";
      a.r(t);
      var l = a("q1tI"),
        n = a.n(l),
        r = a("TJpk"),
        o = a("xj1T"),
        c = a.n(o),
        m = a("yoZo"),
        s = a("Kvkj"),
        u = a("ttvI"),
        i = [
          { value: "accepted", label: "Open" },
          { value: "assigned", label: "Closed" },
          { value: "hold", label: "On hold" },
          { value: "rejected", label: "Rejected" },
          { value: "open", label: "In Progress" }
        ],
        d = [
          {
            name: "title",
            type: "string",
            defaultValue: "null",
            description: "Form title"
          },
          {
            name: "className",
            type: "String",
            defaultValue: "undefined",
            description: "className passed to the form component."
          }
        ];
      t.default = function() {
        return n.a.createElement(
          s.h,
          null,
          n.a.createElement(
            r.Helmet,
            null,
            n.a.createElement("title", null, "Form")
          ),
          n.a.createElement(
            s.e,
            null,
            n.a.createElement(m.fb, null, "Form"),
            n.a.createElement(
              s.f,
              null,
              "Forms are a collection of inputs that allow users to submit data. Forms control layout and spacing between form elements and sections."
            )
          ),
          n.a.createElement(
            s.a,
            null,
            n.a.createElement(
              m.d,
              { maxWidth: "440px" },
              n.a.createElement(
                m.v,
                null,
                n.a.createElement(
                  m.d,
                  { width: 0.5, pb: "x3" },
                  n.a.createElement(m.D, {
                    id: "project",
                    labelText: "Project code"
                  })
                ),
                n.a.createElement(m.D, {
                  id: "customer",
                  labelText: "Customer's name"
                }),
                n.a.createElement(m.U, {
                  placeholder: "Please select project status",
                  options: i,
                  labelText: "Project status"
                }),
                n.a.createElement(m.cb, {
                  rows: 4,
                  mb: "x6",
                  labelText: "Project description"
                }),
                n.a.createElement(
                  m.d,
                  { mb: "x6" },
                  n.a.createElement(m.P, { mr: "x1" }, "Create project"),
                  n.a.createElement(m.Q, null, "Cancel")
                )
              )
            ),
            n.a.createElement(
              c.a,
              { className: "js" },
              '<Form>\n  <Input id="project" labelText="Project code" />\n  <Input id="customer" labelText="Customer\'s name" />\n  <Select placeholder="Please select project status" options={options} labelText="Project status" />\n  <Textarea rows={4} mb="x6" labelText="Project description" />\n  <Box mb="x6">\n    <PrimaryButton mr="x1">Create project</PrimaryButton>\n    <QuietButton>Cancel</QuietButton>\n  </Box>\n</Form>'
            )
          ),
          n.a.createElement(
            s.a,
            null,
            n.a.createElement(m.T, null, "Variations"),
            n.a.createElement(m.X, null, "With title"),
            n.a.createElement(
              m.d,
              { maxWidth: "440px", mt: "x6" },
              n.a.createElement(
                m.v,
                { title: "New Project" },
                n.a.createElement(m.D, {
                  id: "project",
                  labelText: "Project code"
                }),
                n.a.createElement(m.D, {
                  id: "customer",
                  labelText: "Customer's name"
                }),
                n.a.createElement(m.U, {
                  mb: "x6",
                  placeholder: "Please select project status",
                  options: i,
                  labelText: "Project status"
                }),
                n.a.createElement(
                  m.d,
                  { mb: "x6", mt: "x6" },
                  n.a.createElement(m.P, { mr: "x1" }, "Create project"),
                  n.a.createElement(m.Q, null, "Cancel")
                )
              )
            ),
            n.a.createElement(
              c.a,
              { className: "js" },
              '<Form title="New Project">\n  <Input id="project" labelText="Project code" />\n  <Input id="customer" labelText="Customer\'s name" />\n  <Select mb="x6" placeholder="Please select project status" options={options} labelText="Project status" />\n  <Box mb="x6">\n    <PrimaryButton mr="x1">Create project</PrimaryButton>\n    <QuietButton>Cancel</QuietButton>\n  </Box>\n</Form>'
            )
          ),
          n.a.createElement(
            s.a,
            null,
            n.a.createElement(m.T, null, "Guidelines"),
            n.a.createElement(
              m.F,
              null,
              n.a.createElement(
                m.G,
                null,
                "Always order items in a logical order that doesn’t require scrolling around"
              ),
              n.a.createElement(
                m.G,
                null,
                "Whenever possible group items together into form sections"
              ),
              n.a.createElement(
                m.G,
                null,
                "Lay out the form in a single column"
              ),
              n.a.createElement(
                m.G,
                null,
                "Place actions on the bottom of the form"
              ),
              n.a.createElement(m.G, null, "Use a label with every input"),
              n.a.createElement(
                m.G,
                null,
                "Placeholders are not replacements for labels, as they are not treated as labels by assistive technology and they disappear when a user tries interacting with a field."
              ),
              n.a.createElement(
                m.G,
                null,
                "Use only one of (Optional) or (Required) label in a single form. Decide which is more common and apply the label to the smaller of the two groups."
              )
            )
          ),
          n.a.createElement(
            s.a,
            null,
            n.a.createElement(m.T, null, "Handling Errors"),
            n.a.createElement(
              s.c,
              null,
              "Inline validation can be added to individual form inputs to show a red border and icon."
            ),
            n.a.createElement(
              s.c,
              null,
              "When a form has returned with errors, add a",
              " ",
              n.a.createElement(
                m.E,
                { href: "/components/alert" },
                "Danger Alert"
              ),
              " to the top of the form with a summary so that users don't need to scroll around the form to see what needs to be fixed."
            ),
            n.a.createElement(
              s.c,
              null,
              "Examples of errors can be found in the storybook",
              " ",
              n.a.createElement(
                m.E,
                { href: u.b + "demopage--demo-page" },
                "Demo Page"
              ),
              "."
            ),
            n.a.createElement(
              m.X,
              { mb: "x3", mt: "x3" },
              "Error message content guidelines"
            ),
            n.a.createElement(
              m.F,
              null,
              n.a.createElement(
                m.G,
                null,
                "The best error is one that doesn’t exist so try to prevent errors when possible by grouping related fields, writing effective help text and clearly communicating input expectations."
              ),
              n.a.createElement(
                m.G,
                null,
                " ",
                "There are three important messages that a good form error message should convey to the user:",
                n.a.createElement(
                  m.F,
                  { mb: "x3" },
                  n.a.createElement(m.G, null, "An error has occurred"),
                  n.a.createElement(m.G, null, "Where the error occurred"),
                  n.a.createElement(m.G, null, "How to recover from an error")
                )
              ),
              n.a.createElement(
                m.G,
                null,
                "When writing error text, do not blame the user. e.g “That number is incorrect” vs “You’ve entered an incorrect number”."
              ),
              n.a.createElement(
                m.G,
                null,
                "Avoid vague, generalized or cryptic error messages."
              )
            )
          ),
          n.a.createElement(
            s.a,
            null,
            n.a.createElement(m.T, null, "Props"),
            n.a.createElement(s.i, { propsRows: d }),
            n.a.createElement(
              s.c,
              { mt: "x3" },
              "The Form component has access to ",
              n.a.createElement(s.d, null, "space"),
              " style props. See the",
              " ",
              n.a.createElement(
                m.E,
                { href: "/guides/style-props" },
                "style prop documentation"
              ),
              " for a full list of available props."
            )
          ),
          n.a.createElement(
            s.a,
            null,
            n.a.createElement(m.T, null, "Related components"),
            n.a.createElement(
              m.F,
              null,
              n.a.createElement(
                m.G,
                null,
                n.a.createElement(
                  m.E,
                  { href: "/components/form-section" },
                  "Form Section"
                )
              ),
              n.a.createElement(
                m.G,
                null,
                n.a.createElement(m.E, { href: "/components/input" }, "Input")
              ),
              n.a.createElement(
                m.G,
                null,
                n.a.createElement(
                  m.E,
                  { href: "/components/checkbox" },
                  "Checkbox"
                )
              ),
              n.a.createElement(
                m.G,
                null,
                n.a.createElement(
                  m.E,
                  { href: "/components/checkbox-group" },
                  "Checkbox Group"
                )
              ),
              n.a.createElement(
                m.G,
                null,
                n.a.createElement(m.E, { href: "/components/radio" }, "Radio")
              ),
              n.a.createElement(
                m.G,
                null,
                n.a.createElement(
                  m.E,
                  { href: "/components/radio-group" },
                  "Radio Group"
                )
              ),
              n.a.createElement(
                m.G,
                null,
                n.a.createElement(m.E, { href: "/components/select" }, "Select")
              ),
              n.a.createElement(
                m.G,
                null,
                n.a.createElement(
                  m.E,
                  { href: "/components/textarea" },
                  "Textarea"
                )
              ),
              n.a.createElement(
                m.G,
                null,
                n.a.createElement(m.E, { href: "/components/toggle" }, "Toggle")
              )
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
          return r;
        });
      var l = "https://storybook.nulogy.design/?path=/story/",
        n = l + "components-",
        r = l + "pages-";
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-form-js-ed2a5f2d4d8ee4d0611a.js.map
