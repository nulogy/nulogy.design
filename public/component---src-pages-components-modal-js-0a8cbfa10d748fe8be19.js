(window.webpackJsonp = window.webpackJsonp || []).push([
  [31],
  {
    s7Ug: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("phZJ"),
        o = n.n(a),
        l = n("lFqo"),
        i = n.n(l),
        s = n("v06X"),
        r = n.n(s),
        c = n("IVAY"),
        u = n.n(c),
        d = n("Jmq7"),
        p = n.n(d),
        m = n("aDmP"),
        h = n.n(m),
        f = n("q1tI"),
        b = n.n(f),
        y = (n("17x9"), n("TJpk")),
        E = n("xj1T"),
        g = n.n(E),
        v = n("3/HP"),
        M = n("Kvkj"),
        w = n("ttvI");
      function k(e) {
        var t = (function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function() {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function() {
          var n,
            a = h()(e);
          if (t) {
            var o = h()(this).constructor;
            n = Reflect.construct(a, arguments, o);
          } else n = a.apply(this, arguments);
          return p()(this, n);
        };
      }
      var C = [
        {
          name: "isOpen",
          type: "Boolean",
          defaultValue: "true",
          description: "Controls whether the modal is open or closed."
        },
        {
          name: "title",
          type: "String",
          defaultValue: "null",
          description: "The title appearing at the top of the modal."
        },
        {
          name: "onRequestClose",
          type: "Function",
          defaultValue: "null",
          description:
            "Function that is run when the modal requests to be closed (esc key, clicking outside, clicking close), also renders the close button is passed in."
        },
        {
          name: "footerContent",
          type: "Node",
          defaultValue: "null",
          description:
            "The content (usually buttons) to appear at the bottom of the modal."
        },
        {
          name: "onAfterOpen",
          type: "Function",
          defaultValue: "null",
          description: "Function that is run after the modal has opened."
        },
        {
          name: "maxWidth",
          type: "String",
          defaultValue: "624px",
          description:
            "Maximum width of the modal, modal will always compress responsively when the screen shrinks."
        },
        {
          name: "shouldFocusAfterRender",
          type: "Boolean",
          defaultValue: "true",
          description: "Move focus into the modal when it is rendered."
        },
        {
          name: "shouldReturnFocusAfterClose",
          type: "Boolean",
          defaultValue: "true",
          description:
            "Move focus back to what triggered the modal after it closes."
        },
        {
          name: "ariaLabel",
          type: "String",
          defaultValue: "null",
          description:
            "String indicating how the modal content should be announced to screenreaders."
        },
        {
          name: "ariaDescribedBy",
          type: "String",
          defaultValue: "null",
          description:
            "String indicating the aria description of the modal (optional for enhanced accessibility if needed)."
        },
        {
          name: "className",
          type: "String",
          defaultValue: "undefined",
          description: "className passed to the modal component."
        },
        {
          name: "portalClassName",
          type: "String",
          defaultValue: "undefined",
          description:
            "className passed to the portal created for the modal component."
        },
        {
          name: "overlayClassName",
          type: "String",
          defaultValue: "undefined",
          description: "className passed to the overlay component."
        },
        {
          name: "closeAriaLabel",
          type: "String",
          defaultValue: "close",
          description: "Aria label on close button"
        }
      ];
      v.I.setAppElement("#___gatsby");
      var T = (function(e) {
        u()(n, e);
        var t = k(n);
        function n() {
          var e;
          return (
            o()(this, n),
            ((e = t.call(this)).state = { isOpen: !1 }),
            (e.openModal = e.openModal.bind(r()(e))),
            (e.closeModal = e.closeModal.bind(r()(e))),
            e
          );
        }
        return (
          i()(n, [
            {
              key: "openModal",
              value: function() {
                this.setState({ isOpen: !0 });
              }
            },
            {
              key: "closeModal",
              value: function() {
                this.setState({ isOpen: !1 });
              }
            },
            {
              key: "render",
              value: function() {
                var e = this.state.isOpen,
                  t = b.a.createElement(
                    v.i,
                    null,
                    b.a.createElement(v.P, { type: "submit" }, "Save"),
                    b.a.createElement(
                      v.Q,
                      { onClick: this.closeModal },
                      "Cancel"
                    )
                  );
                return b.a.createElement(
                  "div",
                  null,
                  b.a.createElement(
                    v.h,
                    { onClick: this.openModal },
                    "Open Modal"
                  ),
                  b.a.createElement(
                    v.I,
                    {
                      title: "Edit Profile",
                      footerContent: t,
                      onRequestClose: this.closeModal,
                      isOpen: e,
                      maxWidth: "456px"
                    },
                    "Are you sure you'd like to save these settings?"
                  )
                );
              }
            }
          ]),
          n
        );
      })(b.a.Component);
      t.default = function() {
        return b.a.createElement(
          M.h,
          null,
          b.a.createElement(
            y.Helmet,
            null,
            b.a.createElement("title", null, "Modal")
          ),
          b.a.createElement(
            M.e,
            null,
            b.a.createElement(v.fb, null, "Modal"),
            b.a.createElement(
              M.f,
              null,
              "Modal is a window that appears on top of the main content and allows the introduction of secondary flows while maintaining the original context."
            )
          ),
          b.a.createElement(
            M.a,
            null,
            b.a.createElement(T, null),
            b.a.createElement(
              g.a,
              { className: "js" },
              'import {\n  Modal,\n  ButtonGroup,\n  PrimaryButton,\n  QuietButton\n} from "@nulogy/components";\n\nModal.setAppElement("#root");\n\nclass ModalExample extends React.Component {\n  constructor() {\n    super();\n\n    this.state = {\n      isOpen: false\n    };\n\n    this.openModal = this.openModal.bind(this);\n    this.closeModal = this.closeModal.bind(this);\n  }\n\n  openModal() {\n    this.setState({ isOpen: true });\n  }\n\n  closeModal() {\n    this.setState({ isOpen: false });\n  }\n\n  render() {\n    const { children } = this.props;\n    const { isOpen } = this.state;\n    const buttons = (\n      <ButtonGroup>\n        <PrimaryButton type="submit" onClick={}>Save</PrimaryButton>\n        <QuietButton onClick={this.closeModal}>Cancel</QuietButton>\n      </ButtonGroup>\n    );\n    return (\n      <div>\n        <Button onClick={this.openModal}>Open Modal</Button>\n        <Modal\n          title="Modal Title"\n          isOpen={isOpen}\n          onRequestClose={closeModal}\n          footerContent={buttons}\n        >\n        Are you sure you\'d like to save these settings?\n        </Modal>\n      </div>\n    );\n  }\n}\n'
            )
          ),
          b.a.createElement(
            M.a,
            null,
            b.a.createElement(v.T, null, "Use"),
            b.a.createElement(
              v.F,
              null,
              b.a.createElement(
                v.G,
                null,
                "When important warnings require immediate attention."
              ),
              b.a.createElement(
                v.G,
                null,
                "To prevent irreversible changes by creating friction."
              ),
              b.a.createElement(
                v.G,
                null,
                "To fragment a complex workflow into simpler steps such as creating, editing, etc."
              )
            )
          ),
          b.a.createElement(
            M.a,
            null,
            b.a.createElement(v.T, null, "Closing the Modal"),
            b.a.createElement(
              v.bb,
              { mb: "x2" },
              "To close the modal using the built-in methods, the prop",
              " ",
              b.a.createElement(
                v.bb,
                { inline: !0, fontFamily: "monospace" },
                "onRequestClose",
                " "
              ),
              "must be passed in. This prop should be the function that closes the modal. By providing this prop all three methods of closing the modal are enabled together: the close button, clicking outside the modal, and pressing the escape key. If you do not provide the",
              " ",
              b.a.createElement(
                v.bb,
                { inline: !0, fontFamily: "monospace" },
                "onRequestClose",
                " "
              ),
              " ",
              "prop, ensure that there is another way to close the modal, for example a cancel button."
            )
          ),
          b.a.createElement(
            M.a,
            null,
            b.a.createElement(v.T, null, "Accessibility guidelines"),
            b.a.createElement(
              v.bb,
              { mb: "x2" },
              "In order to hide the rest of the application to screen-readers when the modal is open, make sure to use",
              " ",
              b.a.createElement(
                v.bb,
                { inline: !0, fontFamily: "monospace" },
                "Modal.setAppElement(el)",
                " "
              ),
              " ",
              "where el is the root element of the app. This will set",
              " ",
              b.a.createElement(
                v.bb,
                { inline: !0, fontFamily: "monospace" },
                "aria-hidden=true",
                " "
              ),
              "when the modal is open."
            ),
            b.a.createElement(
              v.bb,
              null,
              "When there is no visible label on the Modal (ie. title prop), you should use the ariaLabel prop to provide a modal label. The aria-labelledby attribute is automatically applied if the title prop is specified. If the modal requires additional description for screen-readers, use the ariaDescribedBy prop."
            )
          ),
          b.a.createElement(
            M.a,
            null,
            b.a.createElement(v.T, null, "Responsive information"),
            b.a.createElement(
              v.bb,
              null,
              'The Modal component has a width of "100%" and a customizable set maxWidth value. The Modal will force maxWidth to 100% when the screen is smaller than the small breakpoint (768px).'
            )
          ),
          b.a.createElement(
            M.a,
            null,
            b.a.createElement(v.T, null, "Props"),
            b.a.createElement(M.i, { propsRows: C })
          ),
          b.a.createElement(
            M.a,
            null,
            b.a.createElement(v.T, null, "Related components"),
            b.a.createElement(
              v.F,
              null,
              b.a.createElement(
                v.G,
                null,
                b.a.createElement(v.E, { href: "/components/form" }, "Form")
              ),
              b.a.createElement(
                v.G,
                null,
                b.a.createElement(
                  v.E,
                  { href: "/components/buttons" },
                  "Buttons"
                )
              )
            )
          ),
          b.a.createElement(
            M.a,
            null,
            b.a.createElement(v.T, null, "Resources"),
            b.a.createElement(
              v.F,
              null,
              b.a.createElement(
                v.G,
                null,
                b.a.createElement(
                  v.E,
                  { href: "".concat(w.a, "modal--modal") },
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
          return o;
        }),
        n.d(t, "b", function() {
          return l;
        });
      var a = "https://storybook.nulogy.design/?path=/story/",
        o = "".concat(a, "components-"),
        l = "".concat(a, "pages-");
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-modal-js-0a8cbfa10d748fe8be19.js.map
