"use client";
var e = require("react"),
  t = function () {
    return (
      (t =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }),
      t.apply(this, arguments)
    );
  };
function n(e) {
  var t = window.getComputedStyle(e).transform;
  if (!t || "none" === t) return 1;
  var n = t.match(/^matrix\((.+)\)$/);
  if (n) {
    var r = n[1].split(", ");
    return (parseFloat(r[0]) + parseFloat(r[3])) / 2;
  }
  var o = t.match(/^matrix3d\((.+)\)$/);
  if (o) {
    r = o[1].split(", ");
    return (parseFloat(r[0]) + parseFloat(r[5])) / 2;
  }
  return 1;
}
"function" == typeof SuppressedError && SuppressedError;
var r = e.createContext(void 0);
var o,
  i = { exports: {} },
  a = {};
var c,
  l,
  u = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function s() {
  return (
    c ||
      ((c = 1),
      "production" !== process.env.NODE_ENV &&
        (function () {
          function t(e) {
            if (null == e) return null;
            if ("function" == typeof e)
              return e.$$typeof === Y ? null : e.displayName || e.name || null;
            if ("string" == typeof e) return e;
            switch (e) {
              case E:
                return "Fragment";
              case k:
                return "Portal";
              case j:
                return "Profiler";
              case R:
                return "StrictMode";
              case N:
                return "Suspense";
              case $:
                return "SuspenseList";
            }
            if ("object" == typeof e)
              switch (
                ("number" == typeof e.tag &&
                  console.error(
                    "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
                  ),
                e.$$typeof)
              ) {
                case T:
                  return (e.displayName || "Context") + ".Provider";
                case O:
                  return (e._context.displayName || "Context") + ".Consumer";
                case _:
                  var n = e.render;
                  return (
                    (e = e.displayName) ||
                      (e =
                        "" !== (e = n.displayName || n.name || "")
                          ? "ForwardRef(" + e + ")"
                          : "ForwardRef"),
                    e
                  );
                case D:
                  return null !== (n = e.displayName || null)
                    ? n
                    : t(e.type) || "Memo";
                case M:
                  (n = e._payload), (e = e._init);
                  try {
                    return t(e(n));
                  } catch (e) {}
              }
            return null;
          }
          function n(e) {
            return "" + e;
          }
          function r(e) {
            try {
              n(e);
              var t = !1;
            } catch (e) {
              t = !0;
            }
            if (t) {
              var r = (t = console).error,
                o =
                  ("function" == typeof Symbol &&
                    Symbol.toStringTag &&
                    e[Symbol.toStringTag]) ||
                  e.constructor.name ||
                  "Object";
              return (
                r.call(
                  t,
                  "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
                  o
                ),
                n(e)
              );
            }
          }
          function o() {}
          function i(e) {
            if (void 0 === V)
              try {
                throw Error();
              } catch (e) {
                var t = e.stack.trim().match(/\n( *(at )?)/);
                (V = (t && t[1]) || ""),
                  (W =
                    -1 < e.stack.indexOf("\n    at")
                      ? " (<anonymous>)"
                      : -1 < e.stack.indexOf("@")
                      ? "@unknown:0:0"
                      : "");
              }
            return "\n" + V + e + W;
          }
          function a(e, t) {
            if (!e || X) return "";
            var n = q.get(e);
            if (void 0 !== n) return n;
            (X = !0),
              (n = Error.prepareStackTrace),
              (Error.prepareStackTrace = void 0);
            var r;
            (r = B.H),
              (B.H = null),
              (function () {
                if (0 === H) {
                  (y = console.log),
                    (v = console.info),
                    (h = console.warn),
                    (g = console.error),
                    (b = console.group),
                    (w = console.groupCollapsed),
                    (x = console.groupEnd);
                  var e = {
                    configurable: !0,
                    enumerable: !0,
                    value: o,
                    writable: !0,
                  };
                  Object.defineProperties(console, {
                    info: e,
                    log: e,
                    warn: e,
                    error: e,
                    group: e,
                    groupCollapsed: e,
                    groupEnd: e,
                  });
                }
                H++;
              })();
            try {
              var a = {
                DetermineComponentFrameRoot: function () {
                  try {
                    if (t) {
                      var n = function () {
                        throw Error();
                      };
                      if (
                        (Object.defineProperty(n.prototype, "props", {
                          set: function () {
                            throw Error();
                          },
                        }),
                        "object" == typeof Reflect && Reflect.construct)
                      ) {
                        try {
                          Reflect.construct(n, []);
                        } catch (e) {
                          var r = e;
                        }
                        Reflect.construct(e, [], n);
                      } else {
                        try {
                          n.call();
                        } catch (e) {
                          r = e;
                        }
                        e.call(n.prototype);
                      }
                    } else {
                      try {
                        throw Error();
                      } catch (e) {
                        r = e;
                      }
                      (n = e()) &&
                        "function" == typeof n.catch &&
                        n.catch(function () {});
                    }
                  } catch (e) {
                    if (e && r && "string" == typeof e.stack)
                      return [e.stack, r.stack];
                  }
                  return [null, null];
                },
              };
              a.DetermineComponentFrameRoot.displayName =
                "DetermineComponentFrameRoot";
              var c = Object.getOwnPropertyDescriptor(
                a.DetermineComponentFrameRoot,
                "name"
              );
              c &&
                c.configurable &&
                Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
                  value: "DetermineComponentFrameRoot",
                });
              var l = a.DetermineComponentFrameRoot(),
                u = l[0],
                s = l[1];
              if (u && s) {
                var f = u.split("\n"),
                  d = s.split("\n");
                for (
                  l = c = 0;
                  c < f.length && !f[c].includes("DetermineComponentFrameRoot");

                )
                  c++;
                for (
                  ;
                  l < d.length && !d[l].includes("DetermineComponentFrameRoot");

                )
                  l++;
                if (c === f.length || l === d.length)
                  for (
                    c = f.length - 1, l = d.length - 1;
                    1 <= c && 0 <= l && f[c] !== d[l];

                  )
                    l--;
                for (; 1 <= c && 0 <= l; c--, l--)
                  if (f[c] !== d[l]) {
                    if (1 !== c || 1 !== l)
                      do {
                        if ((c--, 0 > --l || f[c] !== d[l])) {
                          var p = "\n" + f[c].replace(" at new ", " at ");
                          return (
                            e.displayName &&
                              p.includes("<anonymous>") &&
                              (p = p.replace("<anonymous>", e.displayName)),
                            "function" == typeof e && q.set(e, p),
                            p
                          );
                        }
                      } while (1 <= c && 0 <= l);
                    break;
                  }
              }
            } finally {
              (X = !1),
                (B.H = r),
                (function () {
                  if (0 == --H) {
                    var e = { configurable: !0, enumerable: !0, writable: !0 };
                    Object.defineProperties(console, {
                      log: L({}, e, { value: y }),
                      info: L({}, e, { value: v }),
                      warn: L({}, e, { value: h }),
                      error: L({}, e, { value: g }),
                      group: L({}, e, { value: b }),
                      groupCollapsed: L({}, e, { value: w }),
                      groupEnd: L({}, e, { value: x }),
                    });
                  }
                  0 > H &&
                    console.error(
                      "disabledDepth fell below zero. This is a bug in React. Please file an issue."
                    );
                })(),
                (Error.prepareStackTrace = n);
            }
            return (
              (f = (f = e ? e.displayName || e.name : "") ? i(f) : ""),
              "function" == typeof e && q.set(e, f),
              f
            );
          }
          function c(e) {
            if (null == e) return "";
            if ("function" == typeof e) {
              var t = e.prototype;
              return a(e, !(!t || !t.isReactComponent));
            }
            if ("string" == typeof e) return i(e);
            switch (e) {
              case N:
                return i("Suspense");
              case $:
                return i("SuspenseList");
            }
            if ("object" == typeof e)
              switch (e.$$typeof) {
                case _:
                  return (e = a(e.render, !1));
                case D:
                  return c(e.type);
                case M:
                  (t = e._payload), (e = e._init);
                  try {
                    return c(e(t));
                  } catch (e) {}
              }
            return "";
          }
          function l() {
            var e = B.A;
            return null === e ? null : e.getOwner();
          }
          function s() {
            var e = t(this.type);
            return (
              K[e] ||
                ((K[e] = !0),
                console.error(
                  "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
                )),
              void 0 !== (e = this.props.ref) ? e : null
            );
          }
          function f(e, n, o, i, a, c) {
            if (
              "string" == typeof e ||
              "function" == typeof e ||
              e === E ||
              e === j ||
              e === R ||
              e === N ||
              e === $ ||
              e === P ||
              ("object" == typeof e &&
                null !== e &&
                (e.$$typeof === M ||
                  e.$$typeof === D ||
                  e.$$typeof === T ||
                  e.$$typeof === O ||
                  e.$$typeof === _ ||
                  e.$$typeof === z ||
                  void 0 !== e.getModuleId))
            ) {
              var u = n.children;
              if (void 0 !== u)
                if (i)
                  if (A(u)) {
                    for (i = 0; i < u.length; i++) d(u[i], e);
                    Object.freeze && Object.freeze(u);
                  } else
                    console.error(
                      "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
                    );
                else d(u, e);
            } else
              (u = ""),
                (void 0 === e ||
                  ("object" == typeof e &&
                    null !== e &&
                    0 === Object.keys(e).length)) &&
                  (u +=
                    " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),
                null === e
                  ? (i = "null")
                  : A(e)
                  ? (i = "array")
                  : void 0 !== e && e.$$typeof === S
                  ? ((i = "<" + (t(e.type) || "Unknown") + " />"),
                    (u =
                      " Did you accidentally export a JSX literal instead of a component?"))
                  : (i = typeof e),
                console.error(
                  "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
                  i,
                  u
                );
            if (I.call(n, "key")) {
              u = t(e);
              var f = Object.keys(n).filter(function (e) {
                return "key" !== e;
              });
              (i =
                0 < f.length
                  ? "{key: someKey, " + f.join(": ..., ") + ": ...}"
                  : "{key: someKey}"),
                G[u + i] ||
                  ((f =
                    0 < f.length ? "{" + f.join(": ..., ") + ": ...}" : "{}"),
                  console.error(
                    'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
                    i,
                    u,
                    f,
                    u
                  ),
                  (G[u + i] = !0));
            }
            if (
              ((u = null),
              void 0 !== o && (r(o), (u = "" + o)),
              (function (e) {
                if (I.call(e, "key")) {
                  var t = Object.getOwnPropertyDescriptor(e, "key").get;
                  if (t && t.isReactWarning) return !1;
                }
                return void 0 !== e.key;
              })(n) && (r(n.key), (u = "" + n.key)),
              "key" in n)
            )
              for (var p in ((o = {}), n)) "key" !== p && (o[p] = n[p]);
            else o = n;
            return (
              u &&
                (function (e, t) {
                  function n() {
                    U ||
                      ((U = !0),
                      console.error(
                        "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
                        t
                      ));
                  }
                  (n.isReactWarning = !0),
                    Object.defineProperty(e, "key", {
                      get: n,
                      configurable: !0,
                    });
                })(
                  o,
                  "function" == typeof e
                    ? e.displayName || e.name || "Unknown"
                    : e
                ),
              (function (e, t, n, r, o, i) {
                return (
                  (n = i.ref),
                  (e = { $$typeof: S, type: e, key: t, props: i, _owner: o }),
                  null !== (void 0 !== n ? n : null)
                    ? Object.defineProperty(e, "ref", {
                        enumerable: !1,
                        get: s,
                      })
                    : Object.defineProperty(e, "ref", {
                        enumerable: !1,
                        value: null,
                      }),
                  (e._store = {}),
                  Object.defineProperty(e._store, "validated", {
                    configurable: !1,
                    enumerable: !1,
                    writable: !0,
                    value: 0,
                  }),
                  Object.defineProperty(e, "_debugInfo", {
                    configurable: !1,
                    enumerable: !1,
                    writable: !0,
                    value: null,
                  }),
                  Object.freeze && (Object.freeze(e.props), Object.freeze(e)),
                  e
                );
              })(e, u, c, 0, l(), o)
            );
          }
          function d(e, t) {
            if ("object" == typeof e && e && e.$$typeof !== J)
              if (A(e))
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  p(r) && m(r, t);
                }
              else if (p(e)) e._store && (e._store.validated = 1);
              else if (
                (null === e || "object" != typeof e
                  ? (n = null)
                  : (n =
                      "function" == typeof (n = (F && e[F]) || e["@@iterator"])
                        ? n
                        : null),
                "function" == typeof n &&
                  n !== e.entries &&
                  (n = n.call(e)) !== e)
              )
                for (; !(e = n.next()).done; ) p(e.value) && m(e.value, t);
          }
          function p(e) {
            return "object" == typeof e && null !== e && e.$$typeof === S;
          }
          function m(e, n) {
            if (
              e._store &&
              !e._store.validated &&
              null == e.key &&
              ((e._store.validated = 1),
              (n = (function (e) {
                var n = "",
                  r = l();
                return (
                  r &&
                    (r = t(r.type)) &&
                    (n = "\n\nCheck the render method of `" + r + "`."),
                  n ||
                    ((e = t(e)) &&
                      (n =
                        "\n\nCheck the top-level render call using <" +
                        e +
                        ">.")),
                  n
                );
              })(n)),
              !Q[n])
            ) {
              Q[n] = !0;
              var r = "";
              e &&
                null != e._owner &&
                e._owner !== l() &&
                ((r = null),
                "number" == typeof e._owner.tag
                  ? (r = t(e._owner.type))
                  : "string" == typeof e._owner.name && (r = e._owner.name),
                (r = " It was passed a child from " + r + "."));
              var o = B.getCurrentStack;
              (B.getCurrentStack = function () {
                var t = c(e.type);
                return o && (t += o() || ""), t;
              }),
                console.error(
                  'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
                  n,
                  r
                ),
                (B.getCurrentStack = o);
            }
          }
          var y,
            v,
            h,
            g,
            b,
            w,
            x,
            C = e,
            S = Symbol.for("react.transitional.element"),
            k = Symbol.for("react.portal"),
            E = Symbol.for("react.fragment"),
            R = Symbol.for("react.strict_mode"),
            j = Symbol.for("react.profiler"),
            O = Symbol.for("react.consumer"),
            T = Symbol.for("react.context"),
            _ = Symbol.for("react.forward_ref"),
            N = Symbol.for("react.suspense"),
            $ = Symbol.for("react.suspense_list"),
            D = Symbol.for("react.memo"),
            M = Symbol.for("react.lazy"),
            P = Symbol.for("react.offscreen"),
            F = Symbol.iterator,
            Y = Symbol.for("react.client.reference"),
            B =
              C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
            I = Object.prototype.hasOwnProperty,
            L = Object.assign,
            z = Symbol.for("react.client.reference"),
            A = Array.isArray,
            H = 0;
          o.__reactDisabledLog = !0;
          var V,
            W,
            U,
            X = !1,
            q = new ("function" == typeof WeakMap ? WeakMap : Map)(),
            J = Symbol.for("react.client.reference"),
            K = {},
            G = {},
            Q = {};
          (u.Fragment = E),
            (u.jsx = function (e, t, n, r, o) {
              return f(e, t, n, !1, 0, o);
            }),
            (u.jsxs = function (e, t, n, r, o) {
              return f(e, t, n, !0, 0, o);
            });
        })()),
    u
  );
}
var f =
  (l ||
    ((l = 1),
    "production" === process.env.NODE_ENV
      ? (i.exports = (function () {
          if (o) return a;
          o = 1;
          var e = Symbol.for("react.transitional.element"),
            t = Symbol.for("react.fragment");
          function n(t, n, r) {
            var o = null;
            if (
              (void 0 !== r && (o = "" + r),
              void 0 !== n.key && (o = "" + n.key),
              "key" in n)
            )
              for (var i in ((r = {}), n)) "key" !== i && (r[i] = n[i]);
            else r = n;
            return (
              (n = r.ref),
              {
                $$typeof: e,
                type: t,
                key: o,
                ref: void 0 !== n ? n : null,
                props: r,
              }
            );
          }
          return (a.Fragment = t), (a.jsx = n), (a.jsxs = n), a;
        })())
      : (i.exports = s())),
  i.exports);
function d(e, t, n) {
  return {
    pointerEvents: n ? "none" : "auto",
    backgroundColor: t,
    position: "absolute",
    overflow: e ? "hidden" : "auto",
    zIndex: 1,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };
}
function p() {
  return y(/^iPad/) || (y(/^Mac/) && navigator.maxTouchPoints > 1);
}
function m() {
  return y(/^iPhone/) || p();
}
function y(e) {
  return "undefined" != typeof window && null != window.navigator
    ? e.test(window.navigator.platform)
    : void 0;
}
var v = "undefined" != typeof window ? e.useLayoutEffect : e.useEffect;
function h() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return function () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    for (var r = 0, o = e; r < o.length; r++) {
      var i = o[r];
      "function" == typeof i && i.apply(void 0, t);
    }
  };
}
var g = "undefined" != typeof document && window.visualViewport;
function b(e) {
  var t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function w(e) {
  for (b(e) && (e = e.parentElement); e && !b(e); ) e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
var x,
  C = new Set([
    "checkbox",
    "radio",
    "range",
    "color",
    "file",
    "image",
    "button",
    "submit",
    "reset",
  ]),
  S = 0;
function k(e) {
  void 0 === e && (e = {});
  var t = e.isDisabled;
  v(
    function () {
      if (!t)
        return (
          1 === ++S &&
            m() &&
            (x = (function () {
              var e,
                t = 0,
                n = function (n) {
                  ((e = w(n.target)) === document.documentElement &&
                    e === document.body) ||
                    (t = n.changedTouches[0].pageY);
                },
                r = function (n) {
                  if (
                    e &&
                    e !== document.documentElement &&
                    e !== document.body
                  ) {
                    var r = n.changedTouches[0].pageY,
                      o = e.scrollTop,
                      i = e.scrollHeight - e.clientHeight;
                    0 !== i &&
                      (((o <= 0 && r > t) || (o >= i && r < t)) &&
                        n.preventDefault(),
                      (t = r));
                  } else n.preventDefault();
                },
                o = function (e) {
                  var t = e.target;
                  j(t) &&
                    t !== document.activeElement &&
                    (e.preventDefault(),
                    (t.style.transform = "translateY(-2000px)"),
                    t.focus(),
                    requestAnimationFrame(function () {
                      t.style.transform = "";
                    }));
                },
                i = function (e) {
                  var t = e.target;
                  j(t) &&
                    ((t.style.transform = "translateY(-2000px)"),
                    requestAnimationFrame(function () {
                      (t.style.transform = ""),
                        g &&
                          (g.height < window.innerHeight
                            ? requestAnimationFrame(function () {
                                R(t);
                              })
                            : g.addEventListener(
                                "resize",
                                function () {
                                  return R(t);
                                },
                                { once: !0 }
                              ));
                    }));
                },
                a = function () {
                  window.scrollTo(0, 0);
                },
                c = window.pageXOffset,
                l = window.pageYOffset,
                u = h(
                  ((s = document.documentElement),
                  (f = "paddingRight"),
                  (d = "".concat(
                    window.innerWidth - document.documentElement.clientWidth,
                    "px"
                  )),
                  (p = s.style[f]),
                  (s.style[f] = d),
                  function () {
                    s.style[f] = p;
                  })
                );
              var s, f, d, p;
              window.scrollTo(0, 0);
              var m = h(
                E(document, "touchstart", n, { passive: !1, capture: !0 }),
                E(document, "touchmove", r, { passive: !1, capture: !0 }),
                E(document, "touchend", o, { passive: !1, capture: !0 }),
                E(document, "focus", i, !0),
                E(window, "scroll", a)
              );
              return function () {
                u(), m(), window.scrollTo(c, l);
              };
            })()),
          function () {
            0 === --S && (null == x || x());
          }
        );
    },
    [t]
  );
}
function E(e, t, n, r) {
  return (
    e.addEventListener(t, n, r),
    function () {
      e.removeEventListener(t, n, r);
    }
  );
}
function R(e) {
  for (
    var t = document.scrollingElement || document.documentElement;
    e && e !== t;

  ) {
    var n = w(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      var r = n.getBoundingClientRect().top,
        o = e.getBoundingClientRect().top;
      e.getBoundingClientRect().bottom >
        n.getBoundingClientRect().bottom + 24 && (n.scrollTop += o - r);
    }
    e = n.parentElement;
  }
}
function j(e) {
  return (
    (e instanceof HTMLInputElement && !C.has(e.type)) ||
    e instanceof HTMLTextAreaElement ||
    (e instanceof HTMLElement && e.isContentEditable)
  );
}
var O = function (t, r, o, i, a) {
    var c = e.useState(0),
      l = c[0],
      u = c[1],
      s = e.useState(!1),
      f = s[0],
      d = s[1],
      p = e.useState(0),
      m = p[0],
      y = p[1],
      v = (function () {
        var t = e.useState(0),
          n = t[0],
          r = t[1],
          o = e.useRef(0),
          i = e.useRef(0);
        return {
          velocityY: n,
          updateVelocity: function (e) {
            var t = performance.now(),
              n = t - i.current;
            if (n > 0) {
              var a = e - o.current;
              r(a / (n / 1e3)), (o.current = e), (i.current = t);
            }
          },
          resetVelocity: function () {
            r(0), (o.current = 0), (i.current = 0);
          },
          velocityToTime: function (e) {
            void 0 === e && (e = 1e3);
            var t = 350 - (320 * n) / e;
            return Math.max(0, Math.min(250, t));
          },
        };
      })(),
      h = v.velocityToTime,
      g = v.updateVelocity,
      b = e.useRef(0),
      w = function (e) {
        if (f) {
          var t = e.touches[0].clientY,
            n = t - m;
          g(t), u(n), (b.current = n);
        }
      },
      x = function () {
        b.current > 50 && t(!1),
          (null == o ? void 0 : o.current) &&
            (null == r ? void 0 : r.current) &&
            (function (e, t, r, o) {
              void 0 === o && (o = 350);
              var i = e.getBoundingClientRect().height / n(e);
              r
                ? (t.animate(
                    { transform: "translateY(0px)" },
                    {
                      duration: o,
                      easing: "cubic-bezier(0.2, 0.5, 0.5, 1.0)",
                      fill: "forwards",
                    }
                  ),
                  e.animate(
                    {
                      transformOrigin: "bottom center",
                      transform: "scale(0.8)",
                      opacity: 0.4,
                    },
                    {
                      duration: o,
                      easing: "cubic-bezier(0.2, 0.5, 0.5, 1.0)",
                      fill: "forwards",
                    }
                  ))
                : (t.animate(
                    { transform: "translateY(-".concat(i, "px)") },
                    {
                      duration: 350,
                      easing: "cubic-bezier(0.2, 0.5, 0.5, 1.0)",
                      fill: "forwards",
                    }
                  ),
                  e.animate(
                    { marginBottom: "0px", transform: "scale(1)", opacity: 1 },
                    {
                      duration: 350,
                      easing: "cubic-bezier(0.2, 0.5, 0.5, 1.0)",
                      fill: "forwards",
                    }
                  ));
            })(
              null == o ? void 0 : o.current,
              null == r ? void 0 : r.current,
              b.current > 50,
              h(10)
            ),
          u(0),
          y(0),
          d(!1);
      };
    return (
      e.useEffect(
        function () {
          return (
            f
              ? (window.addEventListener("touchmove", w),
                window.addEventListener("touchend", x))
              : (window.removeEventListener("touchmove", w),
                window.removeEventListener("touchend", x)),
            function () {
              window.removeEventListener("touchmove", w),
                window.removeEventListener("touchend", x);
            }
          );
        },
        [f]
      ),
      e.useEffect(
        function () {
          if (
            (f || 0 !== l) &&
            (null == r ? void 0 : r.current) &&
            (null == o ? void 0 : o.current) &&
            i
          ) {
            var e = o.current.getBoundingClientRect().height,
              t = Math.max(0, Math.min(a - (l * a) / e, a));
            r.current.animate(
              {
                transform: "translateY(calc(".concat(
                  Math.max(-25, Math.min(l, e)) -
                    e -
                    (l < 0 ? Math.pow(-l, 0.8) : 0),
                  "px))"
                ),
                borderRadius: f
                  ? "0 0 ".concat(t, "px ").concat(t, "px")
                  : i
                  ? "0 0 ".concat(a, "px ").concat(a, "px")
                  : "0",
              },
              { duration: 0, fill: "forwards" }
            ),
              null == o ||
                o.current.animate(
                  {
                    marginBottom: f
                      ? "".concat(
                          -(
                            Math.max(-25, Math.min(l, 0)) -
                            (l < 0 ? Math.pow(-l, 0.8) : 0)
                          ) / 2,
                          "px"
                        )
                      : "0px",
                    transformOrigin: "bottom center",
                    transform:
                      l > 0
                        ? "scale(".concat(
                            1 - Math.max(0, Math.min((0.1 * l) / 200, 0.1)),
                            ")"
                          )
                        : "scale(1)",
                    opacity: 1 - Math.max(0, Math.min((0.5 * l) / 100, 0.5)),
                  },
                  { duration: 0, fill: "forwards" }
                );
          }
        },
        [l, f]
      ),
      {
        onTouchDown: function (e) {
          d(!0);
          var t = e instanceof PointerEvent ? e.clientY : e.touches[0].clientY;
          y(t - l);
        },
      }
    );
  },
  T = function (t) {
    var n = t.isOpen,
      r = t.children,
      o = t.sheetRef,
      i = t.nextChildren,
      a = t.setSheetChildren,
      c = t.setNextChildren,
      l = t.setIsSwitching,
      u = t.parentRef,
      s = t.setOpen;
    t.isSwitching, t.justOpened;
    var d = t.setIsChanging,
      p = t.isChanging,
      m = t.isClosing,
      y = t.isOppening,
      v = t.config;
    k({ isDisabled: !n });
    var h = e.useRef(null),
      g = O(s, u, o, n, v.borderRadius).onTouchDown;
    return (
      e.useEffect(
        function () {
          var e;
          if (n) {
            var t,
              r,
              u = 0;
            o.current &&
              i &&
              (l(!0),
              o.current &&
                h.current &&
                ((t = o.current),
                (r = h.current),
                (u =
                  t.getBoundingClientRect().height -
                    r.getBoundingClientRect().height >=
                  0
                    ? t.getBoundingClientRect().height -
                        r.getBoundingClientRect().height >
                      0
                      ? 1
                      : 0
                    : -1)),
              ((function (e, t, n) {
                return e.animate(
                  {
                    filter: n ? ["blur(0px)", "blur(10px)"] : "blur(0px)",
                    opacity: [1, 0],
                    transform: [
                      "translateY(0%)",
                      "translateY(".concat(5 * t, "%)"),
                    ],
                  },
                  {
                    duration: 200,
                    easing: "cubic-bezier(0.5, 0.0, 1.0, 0.5)",
                    fill: "forwards",
                  }
                );
              })(
                o.current,
                u,
                null !== (e = v.blur) && void 0 !== e && e
              ).onfinish = function () {
                var e;
                a(i),
                  c(null),
                  o.current &&
                    ((function (e, t, n) {
                      return e.animate(
                        {
                          filter: n ? ["blur(10px)", "blur(0px)"] : "blur(0px)",
                          opacity: [0, 1],
                          transform: [
                            "translateY(".concat(5 * -t, "%)"),
                            "translateY(0%)",
                          ],
                        },
                        {
                          duration: 200,
                          easing: "cubic-bezier(0.0, 0.5, 0.5, 1.0)",
                          fill: "forwards",
                        }
                      );
                    })(
                      o.current,
                      u,
                      null !== (e = v.blur) && void 0 !== e && e
                    ).onfinish = function () {
                      d(!1), l(!1);
                    });
              }));
          }
        },
        [i]
      ),
      e.useEffect(
        function () {
          var e;
          o.current &&
            (function (e, t, n) {
              e.animate(
                {
                  filter: n && !t ? "blur(10px)" : "blur(0px)",
                  transform: t
                    ? ["translateY(50%) scale(0.94)", "translateY(0) scale(1)"]
                    : "scale(0.94)",
                  opacity: t ? 1 : 0,
                },
                {
                  duration: 350,
                  easing: "cubic-bezier(0.4, 0.0, 0.0, 1.0)",
                  fill: "forwards",
                }
              );
            })(o.current, n, null !== (e = v.blur) && void 0 !== e && e);
        },
        [n]
      ),
      e.useEffect(
        function () {
          if (!(!n || y || p || m || v.disableTouchEvents))
            return (
              window.addEventListener("touchstart", g),
              function () {
                window.removeEventListener("touchstart", g);
              }
            );
        },
        [n, m, p, y]
      ),
      f.jsxs(f.Fragment, {
        children: [
          f.jsx("div", {
            onClick: function (e) {
              return e.stopPropagation();
            },
            ref: o,
            style: { width: "100%", position: "fixed", bottom: 0, left: 0 },
            children: r,
          }),
          i &&
            f.jsx("div", {
              ref: h,
              style: {
                width: "100%",
                position: "fixed",
                bottom: 0,
                left: 0,
                opacity: 0,
                pointerEvents: "none",
              },
              children: i,
            }),
        ],
      })
    );
  };
(exports.SweepWrapper = function (t) {
  var o = t.children,
    i = t.backgroundColor,
    a = t.foregroundColor,
    c = t.backgroundClassName,
    l = t.foregroundClassName,
    u = e.useState(null),
    s = u[0],
    p = u[1],
    m = e.useState(null),
    y = m[0],
    v = m[1],
    h = e.useState(!1),
    g = h[0],
    b = h[1],
    w = e.useState(!1),
    x = w[0],
    C = w[1],
    S = e.useState({
      blur: !1,
      disableTouchEvents: !1,
      blockBodyClick: !1,
      clickBodyToClose: !1,
      borderRadius: 20,
    }),
    k = S[0],
    E = S[1],
    R = e.useState(!1),
    j = R[0],
    O = R[1],
    _ = e.useState(!1),
    N = _[0],
    $ = _[1],
    D = e.useState(!1),
    M = D[0],
    P = D[1],
    F = e.useRef(null),
    Y = e.useRef(null),
    B = e.useState(!1),
    I = B[0],
    L = B[1];
  e.useEffect(
    function () {
      if (x) {
        L(!0);
        var e = setTimeout(function () {
          L(!1);
        }, 500);
        return function () {
          return clearTimeout(e);
        };
      }
    },
    [x]
  ),
    e.useEffect(
      function () {
        Y.current &&
          F.current &&
          ((function (e, t, r, o, i) {
            var a = e.getBoundingClientRect().height / n(e);
            return t.animate(
              {
                transform: r
                  ? "translateY(-".concat(a, "px)")
                  : "translateY(0)",
                borderRadius: r
                  ? "0px 0px ".concat(i, "px ").concat(i, "px")
                  : "0px",
              },
              {
                duration: o ? 250 : 350,
                easing: o
                  ? "cubic-bezier(0.0, 0.8, 0.6, 1.0)"
                  : "cubic-bezier(0.4, 0.0, 0.0, 1.0)",
                fill: "forwards",
              }
            );
          })(F.current, Y.current, x, g, k.borderRadius).onfinish =
            function () {
              x ? O(!1) : $(!1), x || (p(null), v(null));
            });
      },
      [x, y]
    );
  var z,
    A = {
      open: x,
      setOpen: C,
      sheetChildren: s,
      setSweepConfig: E,
      setSheetChildren: p,
      nextChildren: y,
      setNextChildren: v,
      setIsChanging: P,
      setIsClosing: $,
      setIsOpening: O,
    };
  return f.jsxs(r.Provider, {
    value: A,
    children: [
      f.jsx("div", {
        ref: Y,
        style: d(x, i, k.blockBodyClick),
        className: c,
        children: o,
      }),
      f.jsx("div", {
        style:
          ((z = a),
          {
            backgroundColor: z,
            position: "fixed",
            zIndex: 0,
            bottom: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }),
        className: l,
        onClick: function () {
          k.clickBodyToClose &&
            (C(!1),
            E({
              blur: !1,
              disableTouchEvents: !1,
              blockBodyClick: !1,
              clickBodyToClose: !1,
              borderRadius: 20,
            }));
        },
        children:
          s &&
          f.jsx(f.Fragment, {
            children: f.jsx(T, {
              isOpen: x,
              sheetRef: F,
              nextChildren: y,
              setSheetChildren: p,
              setNextChildren: v,
              setIsSwitching: b,
              setOpen: C,
              isSwitching: g,
              parentRef: Y,
              justOpened: I,
              setIsChanging: P,
              isChanging: M,
              isClosing: N,
              isOppening: j,
              config: k,
              children: s,
            }),
          }),
      }),
    ],
  });
}),
  (exports.useSweep = function (n, o) {
    void 0 === n &&
      (n = {
        blur: !1,
        disableTouchEvents: !1,
        blockBodyClick: !1,
        clickBodyToClose: !1,
        borderRadius: 20,
      });
    var i = (function () {
        var t = e.useContext(r);
        if (!t)
          throw new Error("useMyContext must be used within a MyProvider");
        return t;
      })(),
      a = i.open,
      c = i.setOpen,
      l = i.sheetChildren,
      u = i.nextChildren,
      s = i.setSheetChildren,
      f = i.setNextChildren,
      d = i.setIsClosing,
      p = i.setIsOpening,
      m = i.setIsChanging,
      y = i.setSweepConfig;
    return (
      e.useEffect(
        function () {
          (null == o ? void 0 : o.onToggle) && o.onToggle(a);
        },
        [a]
      ),
      e.useEffect(
        function () {
          (null == o ? void 0 : o.onSwitch) && null != u && o.onSwitch(l, u);
        },
        [l, u]
      ),
      {
        open: function (t) {
          var r, o;
          y(n),
            (r = t),
            (o = l),
            (e.isValidElement(r) && e.isValidElement(o) && r.key === o.key) ||
              null === t ||
              (null !== l ? (m(!0), f(t)) : (p(!0), s(t))),
            c(!0);
        },
        close: function () {
          y(t({}, n)), d(!0), c(!1);
        },
      }
    );
  });
//# sourceMappingURL=index.js.map
