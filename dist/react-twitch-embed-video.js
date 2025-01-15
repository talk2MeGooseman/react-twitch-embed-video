import ee, { useCallback as G, useState as Fe, useRef as mr, useEffect as Ce } from "react";
var N = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function hr(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var q = { exports: {} }, k = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function yr() {
  if (Oe) return k;
  Oe = 1;
  var a = ee, l = Symbol.for("react.element"), v = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, m = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(g, d, w) {
    var E, _ = {}, P = null, x = null;
    w !== void 0 && (P = "" + w), d.key !== void 0 && (P = "" + d.key), d.ref !== void 0 && (x = d.ref);
    for (E in d) p.call(d, E) && !R.hasOwnProperty(E) && (_[E] = d[E]);
    if (g && g.defaultProps) for (E in d = g.defaultProps, d) _[E] === void 0 && (_[E] = d[E]);
    return { $$typeof: l, type: g, key: P, ref: x, props: _, _owner: m.current };
  }
  return k.Fragment = v, k.jsx = T, k.jsxs = T, k;
}
var I = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function br() {
  return Se || (Se = 1, process.env.NODE_ENV !== "production" && function() {
    var a = ee, l = Symbol.for("react.element"), v = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), g = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), Y = Symbol.iterator, Ie = "@@iterator";
    function Le(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Y && e[Y] || e[Ie];
      return typeof r == "function" ? r : null;
    }
    var D = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(e) {
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
    var $e = !1, Ue = !1, Ve = !1, We = !1, Me = !1, re;
    re = Symbol.for("react.module.reference");
    function Ne(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === p || e === R || Me || e === m || e === w || e === E || We || e === x || $e || Ue || Ve || typeof e == "object" && e !== null && (e.$$typeof === P || e.$$typeof === _ || e.$$typeof === T || e.$$typeof === g || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === re || e.getModuleId !== void 0));
    }
    function qe(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function O(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
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
        case m:
          return "StrictMode";
        case w:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            var r = e;
            return te(r) + ".Consumer";
          case T:
            var t = e;
            return te(t._context) + ".Provider";
          case d:
            return qe(e, e.render, "ForwardRef");
          case _:
            var n = e.displayName || null;
            return n !== null ? n : O(e.type) || "Memo";
          case P: {
            var u = e, s = u._payload, i = u._init;
            try {
              return O(i(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, F = 0, ne, ae, oe, ie, ue, se, le;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function Be() {
      {
        if (F === 0) {
          ne = console.log, ae = console.info, oe = console.warn, ie = console.error, ue = console.group, se = console.groupCollapsed, le = console.groupEnd;
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
            log: S({}, e, {
              value: ne
            }),
            info: S({}, e, {
              value: ae
            }),
            warn: S({}, e, {
              value: oe
            }),
            error: S({}, e, {
              value: ie
            }),
            group: S({}, e, {
              value: ue
            }),
            groupCollapsed: S({}, e, {
              value: se
            }),
            groupEnd: S({}, e, {
              value: le
            })
          });
        }
        F < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = D.ReactCurrentDispatcher, z;
    function $(e, r, t) {
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
    var H = !1, U;
    {
      var Je = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Je();
    }
    function ce(e, r) {
      if (!e || H)
        return "";
      {
        var t = U.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      H = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = J.current, J.current = null, Be();
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
            } catch (C) {
              n = C;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (C) {
              n = C;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (C) {
            n = C;
          }
          e();
        }
      } catch (C) {
        if (C && n && typeof C.stack == "string") {
          for (var o = C.stack.split(`
`), h = n.stack.split(`
`), f = o.length - 1, c = h.length - 1; f >= 1 && c >= 0 && o[f] !== h[c]; )
            c--;
          for (; f >= 1 && c >= 0; f--, c--)
            if (o[f] !== h[c]) {
              if (f !== 1 || c !== 1)
                do
                  if (f--, c--, c < 0 || o[f] !== h[c]) {
                    var b = `
` + o[f].replace(" at new ", " at ");
                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, b), b;
                  }
                while (f >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        H = !1, J.current = s, Ge(), Error.prepareStackTrace = u;
      }
      var A = e ? e.displayName || e.name : "", Pe = A ? $(A) : "";
      return typeof e == "function" && U.set(e, Pe), Pe;
    }
    function ze(e, r, t) {
      return ce(e, !1);
    }
    function He(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function V(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ce(e, He(e));
      if (typeof e == "string")
        return $(e);
      switch (e) {
        case w:
          return $("Suspense");
        case E:
          return $("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return ze(e.render);
          case _:
            return V(e.type, r, t);
          case P: {
            var n = e, u = n._payload, s = n._init;
            try {
              return V(s(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var W = Object.prototype.hasOwnProperty, de = {}, ve = D.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    function Ke(e, r, t, n, u) {
      {
        var s = Function.call.bind(W);
        for (var i in e)
          if (s(e, i)) {
            var o = void 0;
            try {
              if (typeof e[i] != "function") {
                var h = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw h.name = "Invariant Violation", h;
              }
              o = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (f) {
              o = f;
            }
            o && !(o instanceof Error) && (M(u), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof o), M(null)), o instanceof Error && !(o.message in de) && (de[o.message] = !0, M(u), y("Failed %s type: %s", t, o.message), M(null));
          }
      }
    }
    var Xe = Array.isArray;
    function K(e) {
      return Xe(e);
    }
    function Ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Qe(e) {
      try {
        return pe(e), !1;
      } catch {
        return !0;
      }
    }
    function pe(e) {
      return "" + e;
    }
    function Ee(e) {
      if (Qe(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ze(e)), pe(e);
    }
    var me = D.ReactCurrentOwner, er = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, ye;
    function rr(e) {
      if (W.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function tr(e) {
      if (W.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function nr(e, r) {
      typeof e.ref == "string" && me.current;
    }
    function ar(e, r) {
      {
        var t = function() {
          he || (he = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function or(e, r) {
      {
        var t = function() {
          ye || (ye = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ir = function(e, r, t, n, u, s, i) {
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
    function ur(e, r, t, n, u) {
      {
        var s, i = {}, o = null, h = null;
        t !== void 0 && (Ee(t), o = "" + t), tr(r) && (Ee(r.key), o = "" + r.key), rr(r) && (h = r.ref, nr(r, u));
        for (s in r)
          W.call(r, s) && !er.hasOwnProperty(s) && (i[s] = r[s]);
        if (e && e.defaultProps) {
          var f = e.defaultProps;
          for (s in f)
            i[s] === void 0 && (i[s] = f[s]);
        }
        if (o || h) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && ar(i, c), h && or(i, c);
        }
        return ir(e, o, h, u, n, me.current, i);
      }
    }
    var X = D.ReactCurrentOwner, be = D.ReactDebugCurrentFrame;
    function j(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    var Z;
    Z = !1;
    function Q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === l;
    }
    function ge() {
      {
        if (X.current) {
          var e = O(X.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function sr(e) {
      return "";
    }
    var _e = {};
    function lr(e) {
      {
        var r = ge();
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
        var t = lr(r);
        if (_e[t])
          return;
        _e[t] = !0;
        var n = "";
        e && e._owner && e._owner !== X.current && (n = " It was passed a child from " + O(e._owner.type) + "."), j(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), j(null);
      }
    }
    function Te(e, r) {
      {
        if (typeof e != "object")
          return;
        if (K(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Q(n) && Re(n, r);
          }
        else if (Q(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = Le(e);
          if (typeof u == "function" && u !== e.entries)
            for (var s = u.call(e), i; !(i = s.next()).done; )
              Q(i.value) && Re(i.value, r);
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
        r.$$typeof === _))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = O(r);
          Ke(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !Z) {
          Z = !0;
          var u = O(r);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function cr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            j(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), j(null);
            break;
          }
        }
        e.ref !== null && (j(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), j(null));
      }
    }
    function we(e, r, t, n, u, s) {
      {
        var i = Ne(e);
        if (!i) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var h = sr();
          h ? o += h : o += ge();
          var f;
          e === null ? f = "null" : K(e) ? f = "array" : e !== void 0 && e.$$typeof === l ? (f = "<" + (O(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, o);
        }
        var c = ur(e, r, t, u, s);
        if (c == null)
          return c;
        if (i) {
          var b = r.children;
          if (b !== void 0)
            if (n)
              if (K(b)) {
                for (var A = 0; A < b.length; A++)
                  Te(b[A], e);
                Object.freeze && Object.freeze(b);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Te(b, e);
        }
        return e === p ? cr(c) : fr(c), c;
      }
    }
    function dr(e, r, t) {
      return we(e, r, t, !0);
    }
    function vr(e, r, t) {
      return we(e, r, t, !1);
    }
    var pr = vr, Er = dr;
    I.Fragment = p, I.jsx = pr, I.jsxs = Er;
  }()), I;
}
var xe;
function gr() {
  return xe || (xe = 1, process.env.NODE_ENV === "production" ? q.exports = yr() : q.exports = br()), q.exports;
}
var _r = gr(), B, De;
function Rr() {
  return De || (De = 1, B = typeof self == "object" && self.self === self && self || typeof N == "object" && N.global === N && N || B), B;
}
var Tr = Rr();
const L = /* @__PURE__ */ hr(Tr), wr = "https://embed.twitch.tv/embed/v1.js", Pr = () => {
}, Cr = (a = Pr) => {
  if (document.querySelector("script[src='https://embed.twitch.tv/embed/v1.js']"))
    return;
  const l = document.createElement("script");
  l.setAttribute("src", wr), l.addEventListener("load", a), document.body.append(l);
}, Or = () => {
}, Sr = (a) => G(
  (l, v) => a ? (a.addEventListener(l, v), () => a.removeEventListener(l, v)) : Or,
  [a]
), xr = (a, {
  autoplay: l,
  onPlay: v
}) => {
  const [p, m] = Fe(
    l
  );
  return G(() => {
    if (!a) return;
    if (p) return v && v();
    a.getPlayer().pause(), m(!0);
  }, [v, a, m, p]);
}, Dr = "twitch-embed", jr = "940", Ar = "480", Fr = (a, l) => !l && a.pause(), je = {
  MUTED: 0,
  AUDIBLE: 1
};
function kr(a, l) {
  a.setVolume(l ? je.MUTED : je.AUDIBLE);
}
function Ir(...a) {
  return a;
}
const Lr = (a, {
  autoplay: l,
  muted: v,
  onReady: p
}) => G(() => {
  if (!a) return;
  const m = a.getPlayer();
  if (kr(m, v), Fr(m, l), p)
    return p(m);
}, [a, v, l, p]), Yr = (a) => {
  const [l, v] = Fe(), p = G(() => {
    const m = new L.Twitch.Embed(
      a.targetId ?? "",
      {
        ...a
      }
    );
    v(m);
  }, [a]);
  return Ir(l, p);
}, Ae = () => {
  var a;
  return !!((a = L == null ? void 0 : L.Twitch) != null && a.Embed);
}, ke = (a) => {
  const { width: l, height: v, targetId: p, targetClass: m } = a, R = mr(null), [T, g] = Yr(a), d = Sr(T), w = Lr(T, a), E = xr(T, a);
  return Ce(() => {
    if (!Ae()) return;
    const { VIDEO_PLAY: _, VIDEO_READY: P } = L.Twitch.Embed, x = d(
      _,
      E
    ), Y = d(
      P,
      w
    );
    return () => {
      Y(), x();
    };
  }, [w, d, E]), Ce(() => {
    if (R && R.current && (R.current.innerHTML = ""), Ae()) {
      g();
      return;
    }
    Cr(g);
  }, [g]), /* @__PURE__ */ _r.jsx(
    "div",
    {
      ref: R,
      style: { width: l, height: v },
      className: m,
      id: p
    }
  );
};
ke.defaultProps = {
  targetId: Dr,
  width: Ar,
  height: jr,
  autoplay: !0,
  muted: !1
};
const Ur = ee.memo(ke);
export {
  Ur as default
};
