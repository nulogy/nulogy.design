(window.webpackJsonp = window.webpackJsonp || []).push([
  [31],
  {
    s7Ug: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("uRdJ"),
        o = n("9Hrx"),
        l = n("q1tI"),
        i = n.n(l),
        s = n("TJpk"),
        r = n("xj1T"),
        c = n.n(r),
        u = n("yoZo"),
        d = n("Kvkj"),
        p = n("ttvI"),
        m = [
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
      u.I.setAppElement("#___gatsby");
      var h = (function(e) {
        function t() {
          var t;
          return (
            ((t = e.call(this) || this).state = { isOpen: !1 }),
            (t.openModal = t.openModal.bind(Object(a.a)(t))),
            (t.closeModal = t.closeModal.bind(Object(a.a)(t))),
            t
          );
        }
        Object(o.a)(t, e);
        var n = t.prototype;
        return (
          (n.openModal = function() {
            this.setState({ isOpen: !0 });
          }),
          (n.closeModal = function() {
            this.setState({ isOpen: !1 });
          }),
          (n.render = function() {
            var e = this.state.isOpen,
              t = i.a.createElement(
                u.i,
                null,
                i.a.createElement(u.P, { type: "submit" }, "Save"),
                i.a.createElement(u.Q, { onClick: this.closeModal }, "Cancel")
              );
            return i.a.createElement(
              "div",
              null,
              i.a.createElement(u.h, { onClick: this.openModal }, "Open Modal"),
              i.a.createElement(
                u.I,
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
          }),
          t
        );
      })(i.a.Component);
      t.default = function() {
        return i.a.createElement(
          d.h,
          null,
          i.a.createElement(
            s.Helmet,
            null,
            i.a.createElement("title", null, "Modal")
          ),
          i.a.createElement(
            d.e,
            null,
            i.a.createElement(u.fb, null, "Modal"),
            i.a.createElement(
              d.f,
              null,
              "Modal is a window that appears on top of the main content and allows the introduction of secondary flows while maintaining the original context."
            )
          ),
          i.a.createElement(
            d.a,
            null,
            i.a.createElement(h, null),
            i.a.createElement(
              c.a,
              { className: "js" },
              'import {\n  Modal,\n  ButtonGroup,\n  PrimaryButton,\n  QuietButton\n} from "@nulogy/components";\n\nModal.setAppElement("#root");\n\nclass ModalExample extends React.Component {\n  constructor() {\n    super();\n\n    this.state = {\n      isOpen: false\n    };\n\n    this.openModal = this.openModal.bind(this);\n    this.closeModal = this.closeModal.bind(this);\n  }\n\n  openModal() {\n    this.setState({ isOpen: true });\n  }\n\n  closeModal() {\n    this.setState({ isOpen: false });\n  }\n\n  render() {\n    const { children } = this.props;\n    const { isOpen } = this.state;\n    const buttons = (\n      <ButtonGroup>\n        <PrimaryButton type="submit" onClick={}>Save</PrimaryButton>\n        <QuietButton onClick={this.closeModal}>Cancel</QuietButton>\n      </ButtonGroup>\n    );\n    return (\n      <div>\n        <Button onClick={this.openModal}>Open Modal</Button>\n        <Modal\n          title="Modal Title"\n          isOpen={isOpen}\n          onRequestClose={closeModal}\n          footerContent={buttons}\n        >\n        Are you sure you\'d like to save these settings?\n        </Modal>\n      </div>\n    );\n  }\n}\n'
            )
          ),
          i.a.createElement(
            d.a,
            null,
            i.a.createElement(u.T, null, "Use"),
            i.a.createElement(
              u.F,
              null,
              i.a.createElement(
                u.G,
                null,
                "When important warnings require immediate attention."
              ),
              i.a.createElement(
                u.G,
                null,
                "To prevent irreversible changes by creating friction."
              ),
              i.a.createElement(
                u.G,
                null,
                "To fragment a complex workflow into simpler steps such as creating, editing, etc."
              )
            )
          ),
          i.a.createElement(
            d.a,
            null,
            i.a.createElement(u.T, null, "Closing the Modal"),
            i.a.createElement(
              u.bb,
              { mb: "x2" },
              "To close the modal using the built-in methods, the prop",
              " ",
              i.a.createElement(
                u.bb,
                { inline: !0, fontFamily: "monospace" },
                "onRequestClose",
                " "
              ),
              "must be passed in. This prop should be the function that closes the modal. By providing this prop all three methods of closing the modal are enabled together: the close button, clicking outside the modal, and pressing the escape key. If you do not provide the",
              " ",
              i.a.createElement(
                u.bb,
                { inline: !0, fontFamily: "monospace" },
                "onRequestClose",
                " "
              ),
              " ",
              "prop, ensure that there is another way to close the modal, for example a cancel button."
            )
          ),
          i.a.createElement(
            d.a,
            null,
            i.a.createElement(u.T, null, "Accessibility guidelines"),
            i.a.createElement(
              u.bb,
              { mb: "x2" },
              "In order to hide the rest of the application to screen-readers when the modal is open, make sure to use",
              " ",
              i.a.createElement(
                u.bb,
                { inline: !0, fontFamily: "monospace" },
                "Modal.setAppElement(el)",
                " "
              ),
              " ",
              "where el is the root element of the app. This will set",
              " ",
              i.a.createElement(
                u.bb,
                { inline: !0, fontFamily: "monospace" },
                "aria-hidden=true",
                " "
              ),
              "when the modal is open."
            ),
            i.a.createElement(
              u.bb,
              null,
              "When there is no visible label on the Modal (ie. title prop), you should use the ariaLabel prop to provide a modal label. The aria-labelledby attribute is automatically applied if the title prop is specified. If the modal requires additional description for screen-readers, use the ariaDescribedBy prop."
            )
          ),
          i.a.createElement(
            d.a,
            null,
            i.a.createElement(u.T, null, "Responsive information"),
            i.a.createElement(
              u.bb,
              null,
              'The Modal component has a width of "100%" and a customizable set maxWidth value. The Modal will force maxWidth to 100% when the screen is smaller than the small breakpoint (768px).'
            )
          ),
          i.a.createElement(
            d.a,
            null,
            i.a.createElement(u.T, null, "Props"),
            i.a.createElement(d.i, { propsRows: m })
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
                i.a.createElement(
                  u.E,
                  { href: "/components/buttons" },
                  "Buttons"
                )
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
                  { href: p.a + "modal--modal" },
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
        o = a + "components-",
        l = a + "pages-";
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-modal-js-1ca222e99e37164eaf84.js.map
