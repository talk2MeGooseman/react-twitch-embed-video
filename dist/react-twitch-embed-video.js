import re, { useCallback as q, useState as De, useRef as pr, useEffect as Ce } from "react";
var I = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Er(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var ee = { exports: {} }, L = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function yr() {
  if (Se)
    return L;
  Se = 1;
  var a = re, l = Symbol.for("react.element"), v = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, y = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(b, d, w) {
    var E, _ = {}, P = null, j = null;
    w !== void 0 && (P = "" + w), d.key !== void 0 && (P = "" + d.key), d.ref !== void 0 && (j = d.ref);
    for (E in d)
      p.call(d, E) && !R.hasOwnProperty(E) && (_[E] = d[E]);
    if (b && b.defaultProps)
      for (E in d = b.defaultProps, d)
        _[E] === void 0 && (_[E] = d[E]);
    return { $$typeof: l, type: b, key: P, ref: j, props: _, _owner: y.current };
  }
  return L.Fragment = v, L.jsx = T, L.jsxs = T, L;
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
var Oe;
function mr() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var a = re, l = Symbol.for("react.element"), v = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), b = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), $ = Symbol.iterator, Ae = "@@iterator";
    function Fe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = $ && e[$] || e[Ae];
      return typeof r == "function" ? r : null;
    }
    var x = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Ie("error", e, t);
      }
    }
    function Ie(e, r, t) {
      {
        var n = x.ReactDebugCurrentFrame, u = n.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var s = t.map(function(i) {
          return String(i);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Le = !1, We = !1, Ye = !1, $e = !1, Ue = !1, te;
    te = Symbol.for("react.module.reference");
    function Ve(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === p || e === R || Ue || e === y || e === w || e === E || $e || e === j || Le || We || Ye || typeof e == "object" && e !== null && (e.$$typeof === P || e.$$typeof === _ || e.$$typeof === T || e.$$typeof === b || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === te || e.getModuleId !== void 0));
    }
    function Me(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case p:
          return "Fragment";
        case v:
          return "Portal";
        case R:
          return "Profiler";
        case y:
          return "StrictMode";
        case w:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            var r = e;
            return ne(r) + ".Consumer";
          case T:
            var t = e;
            return ne(t._context) + ".Provider";
          case d:
            return Me(e, e.render, "ForwardRef");
          case _:
            var n = e.displayName || null;
            return n !== null ? n : C(e.type) || "Memo";
          case P: {
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
    var O = Object.assign, A = 0, ae, oe, ie, ue, se, le, ce;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function Ne() {
      {
        if (A === 0) {
          ae = console.log, oe = console.info, ie = console.warn, ue = console.error, se = console.group, le = console.groupCollapsed, ce = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: fe,
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
        A++;
      }
    }
    function Be() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, e, {
              value: ae
            }),
            info: O({}, e, {
              value: oe
            }),
            warn: O({}, e, {
              value: ie
            }),
            error: O({}, e, {
              value: ue
            }),
            group: O({}, e, {
              value: se
            }),
            groupCollapsed: O({}, e, {
              value: le
            }),
            groupEnd: O({}, e, {
              value: ce
            })
          });
        }
        A < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = x.ReactCurrentDispatcher, z;
    function U(e, r, t) {
      {
        if (z === void 0)
          try {
            throw Error();
          } catch (u) {
            var n = u.stack.trim().match(/\n( *(at )?)/);
            z = n && n[1] || "";
          }
        return `
` + z + e;
      }
    }
    var H = !1, V;
    {
      var qe = typeof WeakMap == "function" ? WeakMap : Map;
      V = new qe();
    }
    function de(e, r) {
      if (!e || H)
        return "";
      {
        var t = V.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      H = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = G.current, G.current = null, Ne();
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
            } catch (S) {
              n = S;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (S) {
              n = S;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (S) {
            n = S;
          }
          e();
        }
      } catch (S) {
        if (S && n && typeof S.stack == "string") {
          for (var o = S.stack.split(`
`), h = n.stack.split(`
`), c = o.length - 1, f = h.length - 1; c >= 1 && f >= 0 && o[c] !== h[f]; )
            f--;
          for (; c >= 1 && f >= 0; c--, f--)
            if (o[c] !== h[f]) {
              if (c !== 1 || f !== 1)
                do
                  if (c--, f--, f < 0 || o[c] !== h[f]) {
                    var g = `
` + o[c].replace(" at new ", " at ");
                    return e.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, g), g;
                  }
                while (c >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        H = !1, G.current = s, Be(), Error.prepareStackTrace = u;
      }
      var k = e ? e.displayName || e.name : "", Pe = k ? U(k) : "";
      return typeof e == "function" && V.set(e, Pe), Pe;
    }
    function Ge(e, r, t) {
      return de(e, !1);
    }
    function ze(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function M(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return de(e, ze(e));
      if (typeof e == "string")
        return U(e);
      switch (e) {
        case w:
          return U("Suspense");
        case E:
          return U("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Ge(e.render);
          case _:
            return M(e.type, r, t);
          case P: {
            var n = e, u = n._payload, s = n._init;
            try {
              return M(s(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var N = Object.prototype.hasOwnProperty, ve = {}, pe = x.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    function He(e, r, t, n, u) {
      {
        var s = Function.call.bind(N);
        for (var i in e)
          if (s(e, i)) {
            var o = void 0;
            try {
              if (typeof e[i] != "function") {
                var h = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw h.name = "Invariant Violation", h;
              }
              o = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              o = c;
            }
            o && !(o instanceof Error) && (B(u), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof o), B(null)), o instanceof Error && !(o.message in ve) && (ve[o.message] = !0, B(u), m("Failed %s type: %s", t, o.message), B(null));
          }
      }
    }
    var Je = Array.isArray;
    function J(e) {
      return Je(e);
    }
    function Ke(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Xe(e) {
      try {
        return Ee(e), !1;
      } catch {
        return !0;
      }
    }
    function Ee(e) {
      return "" + e;
    }
    function ye(e) {
      if (Xe(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), Ee(e);
    }
    var F = x.ReactCurrentOwner, Ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, me, he, K;
    K = {};
    function Qe(e) {
      if (N.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function er(e) {
      if (N.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function rr(e, r) {
      if (typeof e.ref == "string" && F.current && r && F.current.stateNode !== r) {
        var t = C(F.current.type);
        K[t] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(F.current.type), e.ref), K[t] = !0);
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          me || (me = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function nr(e, r) {
      {
        var t = function() {
          he || (he = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ar = function(e, r, t, n, u, s, i) {
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
    function or(e, r, t, n, u) {
      {
        var s, i = {}, o = null, h = null;
        t !== void 0 && (ye(t), o = "" + t), er(r) && (ye(r.key), o = "" + r.key), Qe(r) && (h = r.ref, rr(r, u));
        for (s in r)
          N.call(r, s) && !Ze.hasOwnProperty(s) && (i[s] = r[s]);
        if (e && e.defaultProps) {
          var c = e.defaultProps;
          for (s in c)
            i[s] === void 0 && (i[s] = c[s]);
        }
        if (o || h) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && tr(i, f), h && nr(i, f);
        }
        return ar(e, o, h, u, n, F.current, i);
      }
    }
    var X = x.ReactCurrentOwner, ge = x.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    var Z;
    Z = !1;
    function Q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === l;
    }
    function be() {
      {
        if (X.current) {
          var e = C(X.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ir(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var _e = {};
    function ur(e) {
      {
        var r = be();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Re(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ur(r);
        if (_e[t])
          return;
        _e[t] = !0;
        var n = "";
        e && e._owner && e._owner !== X.current && (n = " It was passed a child from " + C(e._owner.type) + "."), D(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), D(null);
      }
    }
    function Te(e, r) {
      {
        if (typeof e != "object")
          return;
        if (J(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Q(n) && Re(n, r);
          }
        else if (Q(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = Fe(e);
          if (typeof u == "function" && u !== e.entries)
            for (var s = u.call(e), i; !(i = s.next()).done; )
              Q(i.value) && Re(i.value, r);
        }
      }
    }
    function sr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === _))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = C(r);
          He(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !Z) {
          Z = !0;
          var u = C(r);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function lr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            D(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    function we(e, r, t, n, u, s) {
      {
        var i = Ve(e);
        if (!i) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var h = ir(u);
          h ? o += h : o += be();
          var c;
          e === null ? c = "null" : J(e) ? c = "array" : e !== void 0 && e.$$typeof === l ? (c = "<" + (C(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, o);
        }
        var f = or(e, r, t, u, s);
        if (f == null)
          return f;
        if (i) {
          var g = r.children;
          if (g !== void 0)
            if (n)
              if (J(g)) {
                for (var k = 0; k < g.length; k++)
                  Te(g[k], e);
                Object.freeze && Object.freeze(g);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Te(g, e);
        }
        return e === p ? lr(f) : sr(f), f;
      }
    }
    function cr(e, r, t) {
      return we(e, r, t, !0);
    }
    function fr(e, r, t) {
      return we(e, r, t, !1);
    }
    var dr = fr, vr = cr;
    W.Fragment = p, W.jsx = dr, W.jsxs = vr;
  }()), W;
}
process.env.NODE_ENV === "production" ? ee.exports = yr() : ee.exports = mr();
var hr = ee.exports, gr = typeof self == "object" && self.self === self && self || typeof I == "object" && I.global === I && I || I;
const Y = /* @__PURE__ */ Er(gr), br = "https://embed.twitch.tv/embed/v1.js", _r = () => {
}, Rr = (a = _r) => {
  if (document.querySelector("script[src='https://embed.twitch.tv/embed/v1.js']"))
    return;
  const l = document.createElement("script");
  l.setAttribute("src", br), l.addEventListener("load", a), document.body.append(l);
}, Tr = () => {
}, wr = (a) => q(
  (l, v) => a ? (a.addEventListener(l, v), () => a.removeEventListener(l, v)) : Tr,
  [a]
), Pr = (a, {
  autoplay: l,
  onPlay: v
}) => {
  const [p, y] = De(
    l
  );
  return q(() => {
    if (!a)
      return;
    if (p)
      return v && v();
    a.getPlayer().pause(), y(!0);
  }, [v, a, y, p]);
}, Cr = "twitch-embed", Sr = "940", Or = "480", jr = (a, l) => !l && a.pause(), je = {
  MUTED: 0,
  AUDIBLE: 1
};
function xr(a, l) {
  a.setVolume(l ? je.MUTED : je.AUDIBLE);
}
function Dr(...a) {
  return a;
}
const kr = (a, {
  autoplay: l,
  muted: v,
  onReady: p
}) => q(() => {
  if (!a)
    return;
  const y = a.getPlayer();
  if (xr(y, v), jr(y, l), p)
    return p(y);
}, [a, v, l, p]), Ar = (a) => {
  const [l, v] = De(), p = q(() => {
    const y = new Y.Twitch.Embed(
      a.targetId ?? "",
      {
        ...a
      }
    );
    v(y);
  }, [a]);
  return Dr(l, p);
}, xe = () => {
  var a;
  return !!((a = Y == null ? void 0 : Y.Twitch) != null && a.Embed);
}, ke = (a) => {
  const { width: l, height: v, targetId: p, targetClass: y } = a, R = pr(null), [T, b] = Ar(a), d = wr(T), w = kr(T, a), E = Pr(T, a);
  return Ce(() => {
    if (!xe())
      return;
    const { VIDEO_PLAY: _, VIDEO_READY: P } = Y.Twitch.Embed, j = d(
      _,
      E
    ), $ = d(
      P,
      w
    );
    return () => {
      $(), j();
    };
  }, [w, d, E]), Ce(() => {
    if (R && R.current && (R.current.innerHTML = ""), xe()) {
      b();
      return;
    }
    Rr(b);
  }, [b]), /* @__PURE__ */ hr.jsx(
    "div",
    {
      ref: R,
      style: { width: l, height: v },
      className: y,
      id: p
    }
  );
};
ke.defaultProps = {
  targetId: Cr,
  width: Or,
  height: Sr,
  autoplay: !0,
  muted: !1
};
const Ir = re.memo(ke);
export {
  Ir as default
};
