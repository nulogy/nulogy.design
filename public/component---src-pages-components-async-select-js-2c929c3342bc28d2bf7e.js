(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    L069: function(e, t, n) {
      "use strict";
      var r = n("R7tm"),
        a = n.n(r),
        o = n("fEP7"),
        i = [
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
          a()(
            o.a.map(function(e) {
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
      t.a = i;
    },
    OeHE: function(e, t, n) {
      "use strict";
      n.r(t);
      var r = n("R7tm"),
        a = n.n(r),
        o = n("kD0k"),
        i = n.n(o),
        l = n("dotl"),
        u = n.n(l),
        c = n("q1tI"),
        s = n.n(c),
        h = n("TJpk"),
        p = n("3/HP"),
        f = n("xj1T"),
        d = n.n(f),
        m = n("Kvkj"),
        y = n("L069"),
        v = n("ttvI"),
        g = (function() {
          var e = u()(
            i.a.mark(function e(t) {
              var n, r;
              return i.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        fetch(
                          "https://restcountries.eu/rest/v2/name/".concat(t)
                        )
                      );
                    case 2:
                      return (n = e.sent), (e.next = 5), n.json();
                    case 5:
                      return (
                        (r = e.sent),
                        e.abrupt(
                          "return",
                          r.map(function(e) {
                            var t = e.name;
                            return { label: t, value: t };
                          })
                        )
                      );
                    case 7:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })(),
        w = [
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
        ].concat(a()(y.a));
      t.default = function() {
        return s.a.createElement(
          m.h,
          null,
          s.a.createElement(
            h.Helmet,
            null,
            s.a.createElement("title", null, "Async Select")
          ),
          s.a.createElement(
            m.e,
            null,
            s.a.createElement(p.fb, null, "Async Select"),
            s.a.createElement(
              m.f,
              null,
              "For making one selection from a large list of options and fetching new options as the user types."
            )
          ),
          s.a.createElement(
            m.a,
            null,
            s.a.createElement(p.c, { loadOptions: g, labelText: "Country" }),
            s.a.createElement(
              d.a,
              { className: "js" },
              'import { AsyncSelect } from "@nulogy/components";\n\nconst loadMatchingCountries = async inputValue => {\n  const data = await fetch(\'https://restcountries.eu/rest/v2/name/inputValue\');\n  const results = await data.json();\n  return results.map(({ name }) => ({\n    label: name,\n    value: name\n  }));\n};\n\n<AsyncSelect\n  loadOptions={loadMatchingCountries}\n  labelText="Country"\n/>'
            )
          ),
          s.a.createElement(
            m.a,
            null,
            s.a.createElement(p.T, null, "Variations"),
            s.a.createElement(
              p.bb,
              null,
              "All variations from the ",
              s.a.createElement(p.E, { href: "/components/select" }, "Select"),
              " ",
              "component are available.",
              " "
            )
          ),
          s.a.createElement(
            m.a,
            null,
            s.a.createElement(p.T, null, "Props"),
            s.a.createElement(m.i, { propsRows: w })
          ),
          s.a.createElement(
            m.a,
            null,
            s.a.createElement(p.T, null, "Related components"),
            s.a.createElement(
              p.F,
              null,
              s.a.createElement(
                p.G,
                null,
                s.a.createElement(p.E, { href: "/components/form" }, "Form")
              ),
              s.a.createElement(
                p.G,
                null,
                s.a.createElement(p.E, { href: "/components/select" }, "Select")
              )
            )
          ),
          s.a.createElement(
            m.a,
            null,
            s.a.createElement(p.T, null, "Resources"),
            s.a.createElement(
              p.F,
              null,
              s.a.createElement(
                p.G,
                null,
                s.a.createElement(
                  p.E,
                  { href: "".concat(v.a, "asyncselect--default") },
                  "View in Storybook"
                )
              )
            )
          )
        );
      };
    },
    dotl: function(e, t) {
      function n(e, t, n, r, a, o, i) {
        try {
          var l = e[o](i),
            u = l.value;
        } catch (c) {
          return void n(c);
        }
        l.done ? t(u) : Promise.resolve(u).then(r, a);
      }
      e.exports = function(e) {
        return function() {
          var t = this,
            r = arguments;
          return new Promise(function(a, o) {
            var i = e.apply(t, r);
            function l(e) {
              n(i, a, o, l, u, "next", e);
            }
            function u(e) {
              n(i, a, o, l, u, "throw", e);
            }
            l(void 0);
          });
        };
      };
    },
    fEP7: function(e, t, n) {
      "use strict";
      n.d(t, "b", function() {
        return r;
      });
      var r = [
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
        a = [].concat(r, [
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
      t.a = a;
    },
    kD0k: function(e, t, n) {
      e.exports = n("ls82");
    },
    ls82: function(e, t, n) {
      var r = (function(e) {
        "use strict";
        var t = Object.prototype,
          n = t.hasOwnProperty,
          r = "function" == typeof Symbol ? Symbol : {},
          a = r.iterator || "@@iterator",
          o = r.asyncIterator || "@@asyncIterator",
          i = r.toStringTag || "@@toStringTag";
        function l(e, t, n, r) {
          var a = t && t.prototype instanceof s ? t : s,
            o = Object.create(a.prototype),
            i = new x(r || []);
          return (
            (o._invoke = (function(e, t, n) {
              var r = "suspendedStart";
              return function(a, o) {
                if ("executing" === r)
                  throw new Error("Generator is already running");
                if ("completed" === r) {
                  if ("throw" === a) throw o;
                  return L();
                }
                for (n.method = a, n.arg = o; ; ) {
                  var i = n.delegate;
                  if (i) {
                    var l = w(i, n);
                    if (l) {
                      if (l === c) continue;
                      return l;
                    }
                  }
                  if ("next" === n.method) n.sent = n._sent = n.arg;
                  else if ("throw" === n.method) {
                    if ("suspendedStart" === r)
                      throw ((r = "completed"), n.arg);
                    n.dispatchException(n.arg);
                  } else "return" === n.method && n.abrupt("return", n.arg);
                  r = "executing";
                  var s = u(e, t, n);
                  if ("normal" === s.type) {
                    if (
                      ((r = n.done ? "completed" : "suspendedYield"),
                      s.arg === c)
                    )
                      continue;
                    return { value: s.arg, done: n.done };
                  }
                  "throw" === s.type &&
                    ((r = "completed"), (n.method = "throw"), (n.arg = s.arg));
                }
              };
            })(e, n, i)),
            o
          );
        }
        function u(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (r) {
            return { type: "throw", arg: r };
          }
        }
        e.wrap = l;
        var c = {};
        function s() {}
        function h() {}
        function p() {}
        var f = {};
        f[a] = function() {
          return this;
        };
        var d = Object.getPrototypeOf,
          m = d && d(d(V([])));
        m && m !== t && n.call(m, a) && (f = m);
        var y = (p.prototype = s.prototype = Object.create(f));
        function v(e) {
          ["next", "throw", "return"].forEach(function(t) {
            e[t] = function(e) {
              return this._invoke(t, e);
            };
          });
        }
        function g(e, t) {
          var r;
          this._invoke = function(a, o) {
            function i() {
              return new t(function(r, i) {
                !(function r(a, o, i, l) {
                  var c = u(e[a], e, o);
                  if ("throw" !== c.type) {
                    var s = c.arg,
                      h = s.value;
                    return h && "object" == typeof h && n.call(h, "__await")
                      ? t.resolve(h.__await).then(
                          function(e) {
                            r("next", e, i, l);
                          },
                          function(e) {
                            r("throw", e, i, l);
                          }
                        )
                      : t.resolve(h).then(
                          function(e) {
                            (s.value = e), i(s);
                          },
                          function(e) {
                            return r("throw", e, i, l);
                          }
                        );
                  }
                  l(c.arg);
                })(a, o, r, i);
              });
            }
            return (r = r ? r.then(i, i) : i());
          };
        }
        function w(e, t) {
          var n = e.iterator[t.method];
          if (void 0 === n) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                w(e, t),
                "throw" === t.method)
              )
                return c;
              (t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return c;
          }
          var r = u(n, e.iterator, t.arg);
          if ("throw" === r.type)
            return (
              (t.method = "throw"), (t.arg = r.arg), (t.delegate = null), c
            );
          var a = r.arg;
          return a
            ? a.done
              ? ((t[e.resultName] = a.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                c)
              : a
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              c);
        }
        function b(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function E(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function x(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(b, this),
            this.reset(!0);
        }
        function V(e) {
          if (e) {
            var t = e[a];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                o = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (o.next = o);
            }
          }
          return { next: L };
        }
        function L() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = y.constructor = p),
          (p.constructor = h),
          (p[i] = h.displayName = "GeneratorFunction"),
          (e.isGeneratorFunction = function(e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === h || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function(e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, p)
                : ((e.__proto__ = p), i in e || (e[i] = "GeneratorFunction")),
              (e.prototype = Object.create(y)),
              e
            );
          }),
          (e.awrap = function(e) {
            return { __await: e };
          }),
          v(g.prototype),
          (g.prototype[o] = function() {
            return this;
          }),
          (e.AsyncIterator = g),
          (e.async = function(t, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new g(l(t, n, r, a), o);
            return e.isGeneratorFunction(n)
              ? i
              : i.next().then(function(e) {
                  return e.done ? e.value : i.next();
                });
          }),
          v(y),
          (y[i] = "Generator"),
          (y[a] = function() {
            return this;
          }),
          (y.toString = function() {
            return "[object Generator]";
          }),
          (e.keys = function(e) {
            var t = [];
            for (var n in e) t.push(n);
            return (
              t.reverse(),
              function n() {
                for (; t.length; ) {
                  var r = t.pop();
                  if (r in e) return (n.value = r), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (e.values = V),
          (x.prototype = {
            constructor: x,
            reset: function(e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(E),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function() {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function(e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (i.type = "throw"),
                  (i.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return r("end");
                if (o.tryLoc <= this.prev) {
                  var l = n.call(o, "catchLoc"),
                    u = n.call(o, "finallyLoc");
                  if (l && u) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (l) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function(e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r];
                if (
                  a.tryLoc <= this.prev &&
                  n.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), c)
                  : this.complete(i)
              );
            },
            complete: function(e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                c
              );
            },
            finish: function(e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), E(n), c;
              }
            },
            catch: function(e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    E(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function(e, t, n) {
              return (
                (this.delegate = { iterator: V(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                c
              );
            }
          }),
          e
        );
      })(e.exports);
      try {
        regeneratorRuntime = r;
      } catch (a) {
        Function("r", "regeneratorRuntime = r")(r);
      }
    },
    ttvI: function(e, t, n) {
      "use strict";
      n.d(t, "c", function() {
        return r;
      }),
        n.d(t, "a", function() {
          return a;
        }),
        n.d(t, "b", function() {
          return o;
        });
      var r = "https://storybook.nulogy.design/?path=/story/",
        a = "".concat(r, "components-"),
        o = "".concat(r, "pages-");
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-async-select-js-2c929c3342bc28d2bf7e.js.map
