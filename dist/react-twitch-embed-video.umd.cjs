(function(v,w){typeof exports=="object"&&typeof module<"u"?module.exports=w(require("react")):typeof define=="function"&&define.amd?define(["react"],w):(v=typeof globalThis<"u"?globalThis:v||self,v["react-twitch-embed-video"]=w(v.react))})(this,function(v){"use strict";var w=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xe(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var H={exports:{}},I={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var re;function De(){if(re)return I;re=1;var a=v,l=Symbol.for("react.element"),p=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,h=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,T={key:!0,ref:!0,__self:!0,__source:!0};function P(_,d,C){var E,R={},O=null,D=null;C!==void 0&&(O=""+C),d.key!==void 0&&(O=""+d.key),d.ref!==void 0&&(D=d.ref);for(E in d)y.call(d,E)&&!T.hasOwnProperty(E)&&(R[E]=d[E]);if(_&&_.defaultProps)for(E in d=_.defaultProps,d)R[E]===void 0&&(R[E]=d[E]);return{$$typeof:l,type:_,key:O,ref:D,props:R,_owner:h.current}}return I.Fragment=p,I.jsx=P,I.jsxs=P,I}var L={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var te;function ke(){return te||(te=1,process.env.NODE_ENV!=="production"&&function(){var a=v,l=Symbol.for("react.element"),p=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),_=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),E=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),D=Symbol.for("react.offscreen"),V=Symbol.iterator,Xe="@@iterator";function Ze(e){if(e===null||typeof e!="object")return null;var r=V&&e[V]||e[Xe];return typeof r=="function"?r:null}var k=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function m(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];$e("error",e,t)}}function $e(e,r,t){{var n=k.ReactDebugCurrentFrame,u=n.getStackAddendum();u!==""&&(r+="%s",t=t.concat([u]));var s=t.map(function(i){return String(i)});s.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,s)}}var Qe=!1,qe=!1,er=!1,rr=!1,tr=!1,ie;ie=Symbol.for("react.module.reference");function nr(e){return!!(typeof e=="string"||typeof e=="function"||e===y||e===T||tr||e===h||e===C||e===E||rr||e===D||Qe||qe||er||typeof e=="object"&&e!==null&&(e.$$typeof===O||e.$$typeof===R||e.$$typeof===P||e.$$typeof===_||e.$$typeof===d||e.$$typeof===ie||e.getModuleId!==void 0))}function ar(e,r,t){var n=e.displayName;if(n)return n;var u=r.displayName||r.name||"";return u!==""?t+"("+u+")":t}function ue(e){return e.displayName||"Context"}function S(e){if(e==null)return null;if(typeof e.tag=="number"&&m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case y:return"Fragment";case p:return"Portal";case T:return"Profiler";case h:return"StrictMode";case C:return"Suspense";case E:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _:var r=e;return ue(r)+".Consumer";case P:var t=e;return ue(t._context)+".Provider";case d:return ar(e,e.render,"ForwardRef");case R:var n=e.displayName||null;return n!==null?n:S(e.type)||"Memo";case O:{var u=e,s=u._payload,i=u._init;try{return S(i(s))}catch{return null}}}return null}var x=Object.assign,Y=0,se,le,ce,fe,de,ve,pe;function ye(){}ye.__reactDisabledLog=!0;function or(){{if(Y===0){se=console.log,le=console.info,ce=console.warn,fe=console.error,de=console.group,ve=console.groupCollapsed,pe=console.groupEnd;var e={configurable:!0,enumerable:!0,value:ye,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}Y++}}function ir(){{if(Y--,Y===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:x({},e,{value:se}),info:x({},e,{value:le}),warn:x({},e,{value:ce}),error:x({},e,{value:fe}),group:x({},e,{value:de}),groupCollapsed:x({},e,{value:ve}),groupEnd:x({},e,{value:pe})})}Y<0&&m("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var J=k.ReactCurrentDispatcher,K;function M(e,r,t){{if(K===void 0)try{throw Error()}catch(u){var n=u.stack.trim().match(/\n( *(at )?)/);K=n&&n[1]||""}return`
`+K+e}}var X=!1,N;{var ur=typeof WeakMap=="function"?WeakMap:Map;N=new ur}function Ee(e,r){if(!e||X)return"";{var t=N.get(e);if(t!==void 0)return t}var n;X=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var s;s=J.current,J.current=null,or();try{if(r){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(j){n=j}Reflect.construct(e,[],i)}else{try{i.call()}catch(j){n=j}e.call(i.prototype)}}else{try{throw Error()}catch(j){n=j}e()}}catch(j){if(j&&n&&typeof j.stack=="string"){for(var o=j.stack.split(`
`),b=n.stack.split(`
`),c=o.length-1,f=b.length-1;c>=1&&f>=0&&o[c]!==b[f];)f--;for(;c>=1&&f>=0;c--,f--)if(o[c]!==b[f]){if(c!==1||f!==1)do if(c--,f--,f<0||o[c]!==b[f]){var g=`
`+o[c].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),typeof e=="function"&&N.set(e,g),g}while(c>=1&&f>=0);break}}}finally{X=!1,J.current=s,ir(),Error.prepareStackTrace=u}var F=e?e.displayName||e.name:"",je=F?M(F):"";return typeof e=="function"&&N.set(e,je),je}function sr(e,r,t){return Ee(e,!1)}function lr(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function B(e,r,t){if(e==null)return"";if(typeof e=="function")return Ee(e,lr(e));if(typeof e=="string")return M(e);switch(e){case C:return M("Suspense");case E:return M("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case d:return sr(e.render);case R:return B(e.type,r,t);case O:{var n=e,u=n._payload,s=n._init;try{return B(s(u),r,t)}catch{}}}return""}var G=Object.prototype.hasOwnProperty,he={},me=k.ReactDebugCurrentFrame;function z(e){if(e){var r=e._owner,t=B(e.type,e._source,r?r.type:null);me.setExtraStackFrame(t)}else me.setExtraStackFrame(null)}function cr(e,r,t,n,u){{var s=Function.call.bind(G);for(var i in e)if(s(e,i)){var o=void 0;try{if(typeof e[i]!="function"){var b=Error((n||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw b.name="Invariant Violation",b}o=e[i](r,i,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(c){o=c}o&&!(o instanceof Error)&&(z(u),m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,i,typeof o),z(null)),o instanceof Error&&!(o.message in he)&&(he[o.message]=!0,z(u),m("Failed %s type: %s",t,o.message),z(null))}}}var fr=Array.isArray;function Z(e){return fr(e)}function dr(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function vr(e){try{return be(e),!1}catch{return!0}}function be(e){return""+e}function ge(e){if(vr(e))return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",dr(e)),be(e)}var U=k.ReactCurrentOwner,pr={key:!0,ref:!0,__self:!0,__source:!0},_e,Re,$;$={};function yr(e){if(G.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function Er(e){if(G.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function hr(e,r){if(typeof e.ref=="string"&&U.current&&r&&U.current.stateNode!==r){var t=S(U.current.type);$[t]||(m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',S(U.current.type),e.ref),$[t]=!0)}}function mr(e,r){{var t=function(){_e||(_e=!0,m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function br(e,r){{var t=function(){Re||(Re=!0,m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var gr=function(e,r,t,n,u,s,i){var o={$$typeof:l,type:e,key:r,ref:t,props:i,_owner:s};return o._store={},Object.defineProperty(o._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(o,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(o,"_source",{configurable:!1,enumerable:!1,writable:!1,value:u}),Object.freeze&&(Object.freeze(o.props),Object.freeze(o)),o};function _r(e,r,t,n,u){{var s,i={},o=null,b=null;t!==void 0&&(ge(t),o=""+t),Er(r)&&(ge(r.key),o=""+r.key),yr(r)&&(b=r.ref,hr(r,u));for(s in r)G.call(r,s)&&!pr.hasOwnProperty(s)&&(i[s]=r[s]);if(e&&e.defaultProps){var c=e.defaultProps;for(s in c)i[s]===void 0&&(i[s]=c[s])}if(o||b){var f=typeof e=="function"?e.displayName||e.name||"Unknown":e;o&&mr(i,f),b&&br(i,f)}return gr(e,o,b,u,n,U.current,i)}}var Q=k.ReactCurrentOwner,Te=k.ReactDebugCurrentFrame;function A(e){if(e){var r=e._owner,t=B(e.type,e._source,r?r.type:null);Te.setExtraStackFrame(t)}else Te.setExtraStackFrame(null)}var q;q=!1;function ee(e){return typeof e=="object"&&e!==null&&e.$$typeof===l}function we(){{if(Q.current){var e=S(Q.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function Rr(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var Pe={};function Tr(e){{var r=we();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Ce(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=Tr(r);if(Pe[t])return;Pe[t]=!0;var n="";e&&e._owner&&e._owner!==Q.current&&(n=" It was passed a child from "+S(e._owner.type)+"."),A(e),m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),A(null)}}function Oe(e,r){{if(typeof e!="object")return;if(Z(e))for(var t=0;t<e.length;t++){var n=e[t];ee(n)&&Ce(n,r)}else if(ee(e))e._store&&(e._store.validated=!0);else if(e){var u=Ze(e);if(typeof u=="function"&&u!==e.entries)for(var s=u.call(e),i;!(i=s.next()).done;)ee(i.value)&&Ce(i.value,r)}}}function wr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===d||r.$$typeof===R))t=r.propTypes;else return;if(t){var n=S(r);cr(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!q){q=!0;var u=S(r);m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",u||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Pr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){A(e),m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),A(null);break}}e.ref!==null&&(A(e),m("Invalid attribute `ref` supplied to `React.Fragment`."),A(null))}}function Se(e,r,t,n,u,s){{var i=nr(e);if(!i){var o="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(o+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var b=Rr(u);b?o+=b:o+=we();var c;e===null?c="null":Z(e)?c="array":e!==void 0&&e.$$typeof===l?(c="<"+(S(e.type)||"Unknown")+" />",o=" Did you accidentally export a JSX literal instead of a component?"):c=typeof e,m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",c,o)}var f=_r(e,r,t,u,s);if(f==null)return f;if(i){var g=r.children;if(g!==void 0)if(n)if(Z(g)){for(var F=0;F<g.length;F++)Oe(g[F],e);Object.freeze&&Object.freeze(g)}else m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Oe(g,e)}return e===y?Pr(f):wr(f),f}}function Cr(e,r,t){return Se(e,r,t,!0)}function Or(e,r,t){return Se(e,r,t,!1)}var Sr=Or,jr=Cr;L.Fragment=y,L.jsx=Sr,L.jsxs=jr}()),L}process.env.NODE_ENV==="production"?H.exports=De():H.exports=ke();var Ae=H.exports,Fe=typeof self=="object"&&self.self===self&&self||typeof w=="object"&&w.global===w&&w||w;const W=xe(Fe),Ie="https://embed.twitch.tv/embed/v1.js",Le=()=>{},We=(a=Le)=>{if(document.querySelector("script[src='https://embed.twitch.tv/embed/v1.js']"))return;const l=document.createElement("script");l.setAttribute("src",Ie),l.addEventListener("load",a),document.body.append(l)},Ye="twitch-embed",Ue="940",Ve="480";function Me(...a){return a}const Ne=a=>{const[l,p]=v.useState(),y=v.useCallback(()=>{const h=new W.Twitch.Embed(a.targetId??"",{...a});p(h)},[a]);return Me(l,y)},Be=()=>{},Ge=a=>v.useCallback((l,p)=>a?(a.addEventListener(l,p),()=>a.removeEventListener(l,p)):Be,[a]),ze=(a,{autoplay:l,onPlay:p})=>{const[y,h]=v.useState(l);return v.useCallback(()=>{if(!a)return null;if(y)return p&&p();a.getPlayer().pause(),h(!0)},[p,a,h,y])},ne={MUTED:0,AUDIBLE:1},He=(a,l)=>!l&&a.pause(),Je=(a,l)=>{a.setVolume(l?ne.MUTED:ne.AUDIBLE)},Ke=(a,{autoplay:l,muted:p,onReady:y})=>v.useCallback(()=>{if(!a){console.warn("Player not provided");return}const h=a.getPlayer();Je(h,p),He(h,l),y&&y(h)},[a,p,l,y]),ae=()=>{var a;return!!((a=W==null?void 0:W.Twitch)!=null&&a.Embed)},oe=a=>{const{width:l,height:p,targetId:y,targetClass:h}=a,T=v.useRef(null),[P,_]=Ne(a),d=Ge(P),C=Ke(P,a),E=ze(P,a);return v.useEffect(()=>{if(!ae())return;const{VIDEO_PLAY:R,VIDEO_READY:O}=W.Twitch.Embed,D=d(R,E),V=d(O,C);return()=>{V(),D()}},[C,d,E]),v.useEffect(()=>{if(T&&T.current&&(T.current.innerHTML=""),ae()){_();return}We(_)},[_]),Ae.jsx("div",{ref:T,style:{width:l,height:p},className:h,id:y})};return oe.defaultProps={targetId:Ye,width:Ve,height:Ue,autoplay:!0,muted:!1},v.memo(oe)});
