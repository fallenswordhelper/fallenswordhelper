import{a as m,b as y,c as f}from"./chunk-WOCKCQUP.js";import{a as q,b as w}from"./chunk-GIJKLKNQ.js";import{a as Q}from"./chunk-2YBZ7WGU.js";import{a as A}from"./chunk-RQRK6MAX.js";import{a as T}from"./chunk-SMVO72WF.js";import{a as g}from"./chunk-3KOSRNPL.js";import{a as R}from"./chunk-L5KUFFVQ.js";import{a as l}from"./chunk-LWLVQTKS.js";import{a as k}from"./chunk-WBTHTD34.js";import{a as i}from"./chunk-G34A357Q.js";import{a as h}from"./chunk-IWCA3B2P.js";function c(r,t,e){return q({subcmd2:"recall",id:r,player_id:t,mode:e})}function a(r,t,e){return R({cmd:"guild",subcmd:"inventory",subcmd2:"recall",id:r,player_id:t,mode:e}).then(A)}function d(r,t,e){return g(c,a,r,t,e)}function s(r,t,e){return d(r,t,e).then(y)}function n(r,t,e){return r(t).then(()=>e)}function b(r,t,e){let o=e.items[e.items.length-1].a;if(r==="wear")return n(m,o,t);if(r==="use")return n(f,o,t)}function v(r,t){return t.r===0&&r!=="recall"?T().then(i(b,r,t)):t}function x(r,t,e,o){return s(r,t,e).then(Q).then(i(v,o))}function B(r,t){if(r==="wear")return n(m,t.b,t);if(r==="use")return n(f,t.b,t)}function D(r,t){return t.r===0&&r!=="take"?B(r,t):t}function I(r,t){return w(r).then(i(D,t))}var u;function C(){return u||(u=Promise.resolve()),u}function cr(r,t){return u=C().then(i(I,r,t)),u}function ar(r,t,e,o){return u=C().then(i(x,r,t,e,o)),u}function E(r){return h(/&id=(?<id>\d+)/,r)}function G(r,t,[e,o]){l(o)&&o!==null?r[e]=t(o.constructor(),o):r[e]=o}function p(r,t){return l(t)&&k(t).forEach(i(G,r,p)),r}function S(r){return r?.constructor&&p(r.constructor(),r)}export{cr as a,ar as b,E as c,S as d};
//# sourceMappingURL=chunk-BENIP6LF.js.map
