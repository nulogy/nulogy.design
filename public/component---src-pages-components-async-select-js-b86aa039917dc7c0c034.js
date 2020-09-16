(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    L069: function(e, t, n) {
      "use strict";
      var a = n("t8Zj"),
        l = n("fEP7"),
        o = [
          {
            name: "autocomplete",
            type: "Boolean",
            defaultValue: "true",
            description: "Whether or not typing will filter the options list"
          },
          {
            name: "options",
            type: "Array",
            defaultValue: "Required",
            description:
              "The options available to be selected, containing a value and a label"
          },
          {
            name: "maxHeight",
            type: "String",
            defaultValue: "256px",
            description:
              "Max height of the select dropdown menu, content is scrollable"
          },
          {
            name: "multiselect",
            type: "Boolean",
            defaultValue: "false",
            description: "Whether or not multiple selections can be made"
          },
          {
            name: "value",
            type: "String | Array",
            defaultValue: "undefined",
            description: "Value of input, used when controlling the component"
          },
          {
            name: "defaultValue",
            type: "String | Array",
            defaultValue: "",
            description: "Default value of input"
          },
          {
            name: "menuIsOpen",
            type: "Boolean",
            defaultValue: "undefined",
            description:
              "Controls whether the menu is open; If unset, then NDS controls this implicitly instead"
          },
          {
            name: "onMenuOpen",
            type: "Function",
            defaultValue: "undefined",
            description: "Event handler for when the menu is opened"
          },
          {
            name: "onMenuClose",
            type: "Function",
            defaultValue: "undefined",
            description: "Event handler for when the menu is closed"
          },
          {
            name: "onInputChange",
            type: "Function",
            defaultValue: "undefined",
            description:
              "Event handler for when the value typed into the input changes"
          },
          {
            name: "menuPosition",
            type: "string",
            defaultValue: "absolute",
            description: "The CSS position value of the menu. ex: 'fixed'"
          },
          {
            name: "components",
            type: "Object<ComponentName: ReactNode>",
            defaultValue: "undefined",
            description:
              "Pass in an object with the keys of the component you would like to replace"
          },
          {
            name: "closeMenuOnSelect",
            type: "Boolean",
            defaultValue: "true",
            description: "Close the select menu when the user selects an option"
          }
        ].concat(
          Object(a.a)(
            l.a.map(function(e) {
              return "required" === e.name
                ? {
                    name: "required",
                    type: "boolean",
                    defaultValue: "false",
                    description:
                      "adds requirement text and asterisk to the label, NOTE: this does not behave like a required html input that blocks form submission when no value is entered, you must check the value of the select manually when submitting"
                  }
                : e;
            })
          )
        );
      t.a = o;
    },
    OeHE: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("t8Zj");
      function l(e, t, n, a, l, o, i) {
        try {
          var r = e[o](i),
            u = r.value;
        } catch (s) {
          return void n(s);
        }
        r.done ? t(u) : Promise.resolve(u).then(a, l);
      }
      var o = n("q1tI"),
        i = n.n(o),
        r = n("TJpk"),
        u = n("yoZo"),
        s = n("xj1T"),
        c = n.n(s),
        d = n("Kvkj"),
        p = n("L069"),
        m = n("ttvI"),
        f = (function() {
          var e,
            t = ((e = function*(e) {
              var t = yield fetch("https://restcountries.eu/rest/v2/name/" + e);
              return (yield t.json()).map(function(e) {
                var t = e.name;
                return { label: t, value: t };
              });
            }),
            function() {
              var t = this,
                n = arguments;
              return new Promise(function(a, o) {
                var i = e.apply(t, n);
                function r(e) {
                  l(i, a, o, r, u, "next", e);
                }
                function u(e) {
                  l(i, a, o, r, u, "throw", e);
                }
                r(void 0);
              });
            });
          return function(e) {
            return t.apply(this, arguments);
          };
        })(),
        h = [
          {
            name: "loadOptions",
            type: "(inputValue: string) => ({label: string, value: string })",
            description:
              "Event handler that is called when the input changes and should return a list of objects with the label and value of the fetched select options"
          },
          {
            name: "defaultOptions",
            type: "boolean || Array<{label: string, value: string}>",
            description:
              "if true will fetch results when the input is focussed and display them, otherwise you can pass in a list of label and value objects to display until the user types"
          },
          {
            name: "cacheOptions",
            type: "boolean",
            defaultValue: "false",
            description:
              "If cacheOptions is truthy, then the loaded data will be cached. The cache will remain until cacheOptions changes value."
          }
        ].concat(Object(a.a)(p.a));
      t.default = function() {
        return i.a.createElement(
          d.h,
          null,
          i.a.createElement(
            r.Helmet,
            null,
            i.a.createElement("title", null, "Async Select")
          ),
          i.a.createElement(
            d.e,
            null,
            i.a.createElement(u.fb, null, "Async Select"),
            i.a.createElement(
              d.f,
              null,
              "For making one selection from a large list of options and fetching new options as the user types."
            )
          ),
          i.a.createElement(
            d.a,
            null,
            i.a.createElement(u.c, { loadOptions: f, labelText: "Country" }),
            i.a.createElement(
              c.a,
              { className: "js" },
              'import { AsyncSelect } from "@nulogy/components";\n\nconst loadMatchingCountries = async inputValue => {\n  const data = await fetch(\'https://restcountries.eu/rest/v2/name/inputValue\');\n  const results = await data.json();\n  return results.map(({ name }) => ({\n    label: name,\n    value: name\n  }));\n};\n\n<AsyncSelect\n  loadOptions={loadMatchingCountries}\n  labelText="Country"\n/>'
            )
          ),
          i.a.createElement(
            d.a,
            null,
            i.a.createElement(u.T, null, "Variations"),
            i.a.createElement(
              u.bb,
              null,
              "All variations from the ",
              i.a.createElement(u.E, { href: "/components/select" }, "Select"),
              " ",
              "component are available.",
              " "
            )
          ),
          i.a.createElement(
            d.a,
            null,
            i.a.createElement(u.T, null, "Props"),
            i.a.createElement(d.i, { propsRows: h })
          ),
          i.a.createElement(
            d.a,
            null,
            i.a.createElement(u.T, null, "Related components"),
            i.a.createElement(
              u.F,
              null,
              i.a.createElement(
                u.G,
                null,
                i.a.createElement(u.E, { href: "/components/form" }, "Form")
              ),
              i.a.createElement(
                u.G,
                null,
                i.a.createElement(u.E, { href: "/components/select" }, "Select")
              )
            )
          ),
          i.a.createElement(
            d.a,
            null,
            i.a.createElement(u.T, null, "Resources"),
            i.a.createElement(
              u.F,
              null,
              i.a.createElement(
                u.G,
                null,
                i.a.createElement(
                  u.E,
                  { href: m.a + "asyncselect--default" },
                  "View in Storybook"
                )
              )
            )
          )
        );
      };
    },
    fEP7: function(e, t, n) {
      "use strict";
      n.d(t, "b", function() {
        return a;
      });
      var a = [
          {
            name: "id",
            type: "String",
            defaultValue: "null",
            description: "A unique ID for this input"
          },
          {
            name: "name",
            type: "String",
            defaultValue: "undefined",
            description: "A unique name for this input"
          },
          {
            name: "disabled",
            type: "Boolean",
            defaultValue: "false",
            description: "Marks the field as disabled and disallows user input"
          },
          {
            name: "helpText",
            type: "Node",
            defaultValue: "null",
            description:
              "Placed below the label to provide assistance on how to fill out a field or the expected format. It can also provide an explanation of why the information is needed and how it will be used."
          },
          {
            name: "labelText",
            type: "String",
            defaultValue: "null",
            description:
              "Informs users what the corresponding input field is for."
          },
          {
            name: "placeholder",
            type: "String",
            defaultValue: "null",
            description:
              "A hint to the expected format for the field. Not a replacement for a label."
          },
          {
            name: "required",
            type: "Boolean",
            defaultValue: "false",
            description:
              "Makes the field require selection before the form will submit."
          },
          {
            name: "requirementText",
            type: "String",
            defaultValue: "null",
            description: "(Optional) or (Required)."
          },
          {
            name: "className",
            type: "String",
            defaultValue: "undefined",
            description: "className passed to the wrapper element."
          },
          {
            name: "onChange",
            type: "Function",
            defaultValue: "undefined",
            description:
              "Change event handler that will be run whenever the value of the input is updated."
          },
          {
            name: "onBlur",
            type: "Function",
            defaultValue: "undefined",
            description:
              "Change event handler that will be run whenever the input loses focus."
          }
        ],
        l = [].concat(a, [
          {
            name: "errorMessage",
            type: "String",
            defaultValue: "null",
            description: "Displays an error message and applies red style"
          },
          {
            name: "errorList",
            type: "Array of Strings",
            defaultValue: "null",
            description: "Displays list of error messages and applies red style"
          }
        ]);
      t.a = l;
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
          return o;
        });
      var a = "https://storybook.nulogy.design/?path=/story/",
        l = a + "components-",
        o = a + "pages-";
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-async-select-js-b86aa039917dc7c0c034.js.map
