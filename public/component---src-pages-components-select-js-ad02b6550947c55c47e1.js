(window.webpackJsonp = window.webpackJsonp || []).push([
  [39],
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
    Vgxo: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("8o2o"),
        l = n("t8Zj"),
        o = n("q1tI"),
        i = n.n(o),
        r = n("TJpk"),
        s = n("yoZo"),
        c = n("vOnD"),
        u = n("xj1T"),
        d = n.n(u),
        p = n("Kvkj"),
        m = n("L069"),
        h = n("ttvI"),
        f = [
          { value: "accepted", label: "Accepted" },
          { value: "assigned", label: "Assigned to a line" }
        ],
        y = [
          {
            keyName: "Option",
            import: "SelectOption",
            description: "Individual options in the select's dropdown"
          },
          {
            keyName: "Control",
            import: "Control",
            description: "Wraps the select field"
          },
          {
            keyName: "MultiValue",
            import: "SelectMultiValue",
            description: "The selected options in a muliselect select"
          },
          {
            keyName: "ClearIndicator",
            import: "SelectClearIndicator",
            description: "The clear button in the multiselect"
          },
          {
            keyName: "SelectContainer",
            import: "SelectContainer",
            description: "The wrapper around the whole field and dropdown"
          },
          {
            keyName: "Menu",
            import: "SelectMenu",
            description: "The wrapper around the dropdown options"
          },
          {
            keyName: "Input",
            import: "SelectInput",
            description: "The typeable input in the select"
          }
        ],
        b = [].concat(Object(l.a)(m.a), [
          {
            name: "windowThreshold",
            type: "number",
            defaultValue: "300",
            description:
              "The number of option at which to use virtualization to improve performance of the select"
          }
        ]),
        E = c.d.span.withConfig({
          displayName: "select__Indicator",
          componentId: "tpj435-0"
        })(function() {
          return {
            borderRadius: "25%",
            background: "green",
            lineHeight: "0",
            display: "inline-block",
            width: "10px",
            height: "10px",
            marginRight: "5px"
          };
        }),
        g = function(e) {
          var t = e.children,
            n = Object(a.a)(e, ["children"]),
            l = i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement(E, null),
              t
            );
          return i.a.createElement(s.V, n, l);
        };
      t.default = function() {
        return i.a.createElement(
          p.h,
          null,
          i.a.createElement(
            r.Helmet,
            null,
            i.a.createElement("title", null, "Select")
          ),
          i.a.createElement(
            p.e,
            null,
            i.a.createElement(s.fb, null, "Select"),
            i.a.createElement(
              p.f,
              null,
              "For making one selection from a large list of options."
            ),
            i.a.createElement(
              s.bb,
              null,
              "If you need to fetch options for the select as the interacts with the select, please use the",
              " ",
              i.a.createElement(
                s.E,
                { href: "/components/async-select" },
                "Async Select"
              ),
              "."
            )
          ),
          i.a.createElement(
            p.a,
            null,
            i.a.createElement(s.U, {
              options: f,
              labelText: "Inventory status",
              id: "inventory-status"
            }),
            i.a.createElement(
              d.a,
              { className: "js" },
              'import { Select } from "@nulogy/components";\n\nconst options = [\n  { value: "accepted", label: "Accepted" },\n  { value: "assigned", label: "Assigned to a line" },\n];\n\n<Select\n  options={ options }\n  id="inventory-status"\n  labelText="Inventory status"\n/>'
            )
          ),
          i.a.createElement(
            p.a,
            null,
            i.a.createElement(s.T, null, "Use when"),
            i.a.createElement(
              s.F,
              null,
              i.a.createElement(
                s.G,
                null,
                "Users need to choose a single option from a list of mutually exclusive options."
              ),
              i.a.createElement(
                s.G,
                null,
                "There is a large data set that would be impractical for radio buttons or a toggle."
              )
            )
          ),
          i.a.createElement(
            p.a,
            null,
            i.a.createElement(s.T, null, "Variations"),
            i.a.createElement(
              s.d,
              { mb: "x6" },
              i.a.createElement(s.X, null, "Disabled"),
              i.a.createElement(s.U, {
                labelText: "Label",
                placeholder: "Please select inventory status",
                options: f,
                id: "disabled",
                disabled: !0
              }),
              i.a.createElement(
                d.a,
                { className: "js" },
                '<Select\n  labelText="Label"\n  placeholder="Please select inventory status"\n  options={ options }\n  id="disabled"\n  disabled\n/>'
              )
            ),
            i.a.createElement(
              s.d,
              { mb: "x6" },
              i.a.createElement(s.X, null, "Error"),
              i.a.createElement(s.U, {
                options: f,
                id: "error",
                errorMessage: "Please select an inventory status"
              }),
              i.a.createElement(
                d.a,
                { className: "js" },
                '<Select\n  options={ options }\n  id="error"\n  errorMessage="Please select an inventory status"\n/>'
              )
            ),
            i.a.createElement(
              s.d,
              { mb: "x6" },
              i.a.createElement(s.X, null, "Multiselect"),
              i.a.createElement(s.U, {
                options: f,
                id: "multiselect",
                multiselect: !0
              }),
              i.a.createElement(
                d.a,
                { className: "js" },
                '<Select\n  options={ options }\n  id="multiselect"\n  multiselect\n/>'
              )
            ),
            i.a.createElement(
              s.d,
              { mb: "x6" },
              i.a.createElement(s.X, null, "With all labels"),
              i.a.createElement(s.U, {
                labelText: "Label",
                requirementText: "(Optional)",
                helpText: "Additional help text",
                placeholder: "Please select inventory status",
                options: f,
                id: "all-label"
              }),
              i.a.createElement(
                d.a,
                { className: "js" },
                '<Select\n  labelText="Label"\n  requirementText="(Optional)"\n  helpText="Additional help text"\n  placeholder="Please select inventory status"\n  options={ options }\n  id="all-labels"\n/>'
              )
            )
          ),
          i.a.createElement(
            p.a,
            null,
            i.a.createElement(s.T, null, "Props"),
            i.a.createElement(p.i, { propsRows: b })
          ),
          i.a.createElement(
            p.a,
            null,
            i.a.createElement(s.X, null, "Replacing Inner Components"),
            i.a.createElement(
              s.bb,
              { mb: "x2" },
              "Using the ",
              i.a.createElement(p.d, null, "components"),
              " prop you can augment the inner components of the select. See the following example of adding a component to each option in the dropdown:"
            ),
            i.a.createElement(s.U, {
              defaultValue: ["accepted"],
              noOptionsMessage: function() {
                return "No options";
              },
              placeholder: "Please select inventory status",
              options: f,
              components: { Option: g },
              multiselect: !0,
              labelText: "Inventory status",
              menuPosition: "fixed"
            }),
            i.a.createElement(
              d.a,
              { className: "js" },
              '\nimport { SelectOption } from "@nulogy/components";\n        \nconst Indicator = styled.span(() => ({\n            borderRadius: "25%",\n            background: "green",\n            lineHeight: "0",\n            display: "inline-block",\n            width: "10px",\n            height: "10px",\n            marginRight: "5px"\n          }));\n\nconst CustomOption = ({ children, ...props }) => {\n        const newChildren = (\n          <>\n            <Indicator />\n            {children}\n          </>\n        );\n        return <SelectOption {...props}>{newChildren}</SelectOption>;\n      };\n  \n    return (\n      <Select\n            defaultValue={["accepted"]}\n            noOptionsMessage={() => "No options"}\n            placeholder="Please select inventory status"\n            options={options}\n            components={{\n              Option: CustomOption\n            }}\n            multiselect\n            labelText="Inventory status"\n            menuPosition="fixed"\n          />\n    );'
            ),
            i.a.createElement(s.Z, {
              columns: [
                { label: "Object Key", dataKey: "keyName" },
                { label: "Component Name", dataKey: "import" },
                { label: "Description", dataKey: "description" }
              ],
              rows: y
            })
          ),
          i.a.createElement(
            p.a,
            null,
            i.a.createElement(s.T, null, "Related components"),
            i.a.createElement(
              s.F,
              null,
              i.a.createElement(
                s.G,
                null,
                i.a.createElement(s.E, { href: "/components/form" }, "Form")
              ),
              i.a.createElement(
                s.G,
                null,
                i.a.createElement(
                  s.E,
                  { href: "/components/async-select" },
                  "Async Select"
                )
              )
            )
          ),
          i.a.createElement(
            p.a,
            null,
            i.a.createElement(s.T, null, "Resources"),
            i.a.createElement(
              s.F,
              null,
              i.a.createElement(
                s.G,
                null,
                i.a.createElement(
                  s.E,
                  { href: h.a + "select--select" },
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
//# sourceMappingURL=component---src-pages-components-select-js-ad02b6550947c55c47e1.js.map
