import ae, { useCallback as G, useState as Le, useRef as br, useEffect as xe } from "react";
var q = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function gr(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var B = { exports: {} }, L = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function _r() {
  if (De) return L;
  De = 1;
  var a = ae, l = Symbol.for("react.element"), p = Symbol.for("react.fragment"), E = Object.prototype.hasOwnProperty, v = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(P, d, S) {
    var y, b = {}, R = null, x = null;
    S !== void 0 && (R = "" + S), d.key !== void 0 && (R = "" + d.key), d.ref !== void 0 && (x = d.ref);
    for (y in d) E.call(d, y) && !w.hasOwnProperty(y) && (b[y] = d[y]);
    if (P && P.defaultProps) for (y in d = P.defaultProps, d) b[y] === void 0 && (b[y] = d[y]);
    return { $$typeof: l, type: P, key: R, ref: x, props: b, _owner: v.current };
  }
  return L.Fragment = p, L.jsx = _, L.jsxs = _, L;
}
var W = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function Rr() {
  return ke || (ke = 1, process.env.NODE_ENV !== "production" && function() {
    var a = ae, l = Symbol.for("react.element"), p = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), P = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), Y = Symbol.iterator, K = "@@iterator";
    function $(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Y && e[Y] || e[K];
      return typeof r == "function" ? r : null;
    }
    var D = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Ye("error", e, t);
      }
    }
    function Ye(e, r, t) {
      {
        var n = D.ReactDebugCurrentFrame, u = n.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var s = t.map(function(i) {
          return String(i);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var $e = !1, Ue = !1, Ve = !1, Me = !1, Ne = !1, oe;
    oe = Symbol.for("react.module.reference");
    function qe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === E || e === w || Ne || e === v || e === S || e === y || Me || e === x || $e || Ue || Ve || typeof e == "object" && e !== null && (e.$$typeof === R || e.$$typeof === b || e.$$typeof === _ || e.$$typeof === P || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === oe || e.getModuleId !== void 0));
    }
    function Be(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function ie(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case E:
          return "Fragment";
        case p:
          return "Portal";
        case w:
          return "Profiler";
        case v:
          return "StrictMode";
        case S:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case P:
            var r = e;
            return ie(r) + ".Consumer";
          case _:
            var t = e;
            return ie(t._context) + ".Provider";
          case d:
            return Be(e, e.render, "ForwardRef");
          case b:
            var n = e.displayName || null;
            return n !== null ? n : C(e.type) || "Memo";
          case R: {
            var u = e, s = u._payload, i = u._init;
            try {
              return C(i(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, F = 0, ue, se, le, ce, fe, de, ve;
    function pe() {
    }
    pe.__reactDisabledLog = !0;
    function Je() {
      {
        if (F === 0) {
          ue = console.log, se = console.info, le = console.warn, ce = console.error, fe = console.group, de = console.groupCollapsed, ve = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: pe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        F++;
      }
    }
    function Ge() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, e, {
              value: ue
            }),
            info: O({}, e, {
              value: se
            }),
            warn: O({}, e, {
              value: le
            }),
            error: O({}, e, {
              value: ce
            }),
            group: O({}, e, {
              value: fe
            }),
            groupCollapsed: O({}, e, {
              value: de
            }),
            groupEnd: O({}, e, {
              value: ve
            })
          });
        }
        F < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = D.ReactCurrentDispatcher, H;
    function U(e, r, t) {
      {
        if (H === void 0)
          try {
            throw Error();
          } catch (u) {
            var n = u.stack.trim().match(/\n( *(at )?)/);
            H = n && n[1] || "";
          }
        return `
` + H + e;
      }
    }
    var X = !1, V;
    {
      var Ke = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Ke();
    }
    function Ee(e, r) {
      if (!e || X)
        return "";
      {
        var t = V.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      X = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = z.current, z.current = null, Je();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (g) {
              n = g;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (g) {
              n = g;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (g) {
            n = g;
          }
          e();
        }
      } catch (g) {
        if (g && n && typeof g.stack == "string") {
          for (var o = g.stack.split(`
`), m = n.stack.split(`
`), c = o.length - 1, f = m.length - 1; c >= 1 && f >= 0 && o[c] !== m[f]; )
            f--;
          for (; c >= 1 && f >= 0; c--, f--)
            if (o[c] !== m[f]) {
              if (c !== 1 || f !== 1)
                do
                  if (c--, f--, f < 0 || o[c] !== m[f]) {
                    var T = `
` + o[c].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, T), T;
                  }
                while (c >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        X = !1, z.current = s, Ge(), Error.prepareStackTrace = u;
      }
      var A = e ? e.displayName || e.name : "", j = A ? U(A) : "";
      return typeof e == "function" && V.set(e, j), j;
    }
    function ze(e, r, t) {
      return Ee(e, !1);
    }
    function He(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function M(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ee(e, He(e));
      if (typeof e == "string")
        return U(e);
      switch (e) {
        case S:
          return U("Suspense");
        case y:
          return U("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return ze(e.render);
          case b:
            return M(e.type, r, t);
          case R: {
            var n = e, u = n._payload, s = n._init;
            try {
              return M(s(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var I = Object.prototype.hasOwnProperty, ye = {}, he = D.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    function Xe(e, r, t, n, u) {
      {
        var s = Function.call.bind(I);
        for (var i in e)
          if (s(e, i)) {
            var o = void 0;
            try {
              if (typeof e[i] != "function") {
                var m = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw m.name = "Invariant Violation", m;
              }
              o = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              o = c;
            }
            o && !(o instanceof Error) && (N(u), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof o), N(null)), o instanceof Error && !(o.message in ye) && (ye[o.message] = !0, N(u), h("Failed %s type: %s", t, o.message), N(null));
          }
      }
    }
    var Ze = Array.isArray;
    function Z(e) {
      return Ze(e);
    }
    function Qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function er(e) {
      try {
        return me(e), !1;
      } catch {
        return !0;
      }
    }
    function me(e) {
      return "" + e;
    }
    function be(e) {
      if (er(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(e)), me(e);
    }
    var ge = D.ReactCurrentOwner, rr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _e, Re;
    function tr(e) {
      if (I.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function nr(e) {
      if (I.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ar(e, r) {
      typeof e.ref == "string" && ge.current;
    }
    function or(e, r) {
      {
        var t = function() {
          _e || (_e = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function ir(e, r) {
      {
        var t = function() {
          Re || (Re = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ur = function(e, r, t, n, u, s, i) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function sr(e, r, t, n, u) {
      {
        var s, i = {}, o = null, m = null;
        t !== void 0 && (be(t), o = "" + t), nr(r) && (be(r.key), o = "" + r.key), tr(r) && (m = r.ref, ar(r, u));
        for (s in r)
          I.call(r, s) && !rr.hasOwnProperty(s) && (i[s] = r[s]);
        if (e && e.defaultProps) {
          var c = e.defaultProps;
          for (s in c)
            i[s] === void 0 && (i[s] = c[s]);
        }
        if (o || m) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && or(i, f), m && ir(i, f);
        }
        return ur(e, o, m, u, n, ge.current, i);
      }
    }
    var Q = D.ReactCurrentOwner, Te = D.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        Te.setExtraStackFrame(t);
      } else
        Te.setExtraStackFrame(null);
    }
    var ee;
    ee = !1;
    function re(e) {
      return typeof e == "object" && e !== null && e.$$typeof === l;
    }
    function we() {
      {
        if (Q.current) {
          var e = C(Q.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function lr(e) {
      return "";
    }
    var Pe = {};
    function cr(e) {
      {
        var r = we();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Se(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = cr(r);
        if (Pe[t])
          return;
        Pe[t] = !0;
        var n = "";
        e && e._owner && e._owner !== Q.current && (n = " It was passed a child from " + C(e._owner.type) + "."), k(e), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), k(null);
      }
    }
    function Ce(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Z(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            re(n) && Se(n, r);
          }
        else if (re(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = $(e);
          if (typeof u == "function" && u !== e.entries)
            for (var s = u.call(e), i; !(i = s.next()).done; )
              re(i.value) && Se(i.value, r);
        }
      }
    }
    function fr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === b))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = C(r);
          Xe(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ee) {
          ee = !0;
          var u = C(r);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function dr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            k(e), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), h("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    var Oe = {};
    function je(e, r, t, n, u, s) {
      {
        var i = qe(e);
        if (!i) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var m = lr();
          m ? o += m : o += we();
          var c;
          e === null ? c = "null" : Z(e) ? c = "array" : e !== void 0 && e.$$typeof === l ? (c = "<" + (C(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, o);
        }
        var f = sr(e, r, t, u, s);
        if (f == null)
          return f;
        if (i) {
          var T = r.children;
          if (T !== void 0)
            if (n)
              if (Z(T)) {
                for (var A = 0; A < T.length; A++)
                  Ce(T[A], e);
                Object.freeze && Object.freeze(T);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(T, e);
        }
        if (I.call(r, "key")) {
          var j = C(e), g = Object.keys(r).filter(function(mr) {
            return mr !== "key";
          }), te = g.length > 0 ? "{key: someKey, " + g.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Oe[j + te]) {
            var hr = g.length > 0 ? "{" + g.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, te, j, hr, j), Oe[j + te] = !0;
          }
        }
        return e === E ? dr(f) : fr(f), f;
      }
    }
    function vr(e, r, t) {
      return je(e, r, t, !0);
    }
    function pr(e, r, t) {
      return je(e, r, t, !1);
    }
    var Er = pr, yr = vr;
    W.Fragment = E, W.jsx = Er, W.jsxs = yr;
  }()), W;
}
var Ae;
function Tr() {
  return Ae || (Ae = 1, process.env.NODE_ENV === "production" ? B.exports = _r() : B.exports = Rr()), B.exports;
}
var wr = Tr(), J, Fe;
function Pr() {
  return Fe || (Fe = 1, J = typeof self == "object" && self.self === self && self || typeof q == "object" && q.global === q && q || J), J;
}
var Sr = Pr();
const ne = /* @__PURE__ */ gr(Sr), Cr = "https://embed.twitch.tv/embed/v1.js", Or = () => {
}, jr = (a = Or) => {
  if (document.querySelector("script[src='https://embed.twitch.tv/embed/v1.js']"))
    return;
  const l = document.createElement("script");
  l.setAttribute("src", Cr), l.addEventListener("load", a), document.body.append(l);
}, xr = () => {
}, Dr = (a) => G(
  (l, p) => a ? (a.addEventListener(l, p), () => {
    a.removeEventListener(l, p);
  }) : xr,
  [a]
), kr = (a, {
  autoplay: l,
  onPlay: p
}) => {
  const [E, v] = Le(
    l
  );
  return G(() => {
    if (!a)
      return;
    if (E) {
      p && p();
      return;
    }
    a.getPlayer().pause(), v(!0);
  }, [p, a, v, E]);
}, Ar = "twitch-embed", Fr = "940", Ir = "480", Ie = {
  MUTED: 0,
  AUDIBLE: 1
}, Lr = (a, l) => {
  !l && a.pause();
}, Wr = (a, l) => {
  a.setVolume(l ? Ie.MUTED : Ie.AUDIBLE);
}, Yr = (...a) => a, $r = (a, {
  autoplay: l,
  muted: p,
  onReady: E
}) => G(() => {
  if (!a)
    return;
  const v = a.getPlayer();
  Wr(v, p), Lr(v, l), E && E(v);
}, [a, p, l, E]), Ur = (a) => {
  const [l, p] = Le(), E = G(() => {
    var _;
    const v = ne;
    if (((_ = v == null ? void 0 : v.Twitch) == null ? void 0 : _.Embed) === void 0)
      return;
    const w = new v.Twitch.Embed(
      a.targetId ?? "",
      {
        ...a
      }
    );
    p(w);
  }, [a]);
  return Yr(l, E);
}, We = (a) => {
  const { width: l, height: p, targetId: E, targetClass: v } = a, w = br(null), [_, P] = Ur(a), d = Dr(_), S = $r(_, a), y = kr(_, a);
  return xe(() => {
    var $;
    const b = ne;
    if ((($ = b.Twitch) == null ? void 0 : $.Embed) === void 0)
      return;
    const { VIDEO_PLAY: R, VIDEO_READY: x } = b.Twitch.Embed, Y = d(
      R,
      y
    ), K = d(
      x,
      S
    );
    return () => {
      K(), Y();
    };
  }, [S, d, y]), xe(() => {
    var R;
    const b = ne;
    if (w.current && (w.current.innerHTML = ""), (R = b.Twitch) != null && R.Embed) {
      P();
      return;
    }
    jr(P);
  }, [P]), /* @__PURE__ */ wr.jsx(
    "div",
    {
      ref: w,
      style: { width: l, height: p },
      className: v,
      id: E
    }
  );
};
We.defaultProps = {
  targetId: Ar,
  width: Ir,
  height: Fr,
  autoplay: !0,
  muted: !1
};
const Mr = ae.memo(We);
export {
  Mr as default
};
