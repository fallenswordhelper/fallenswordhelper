import{a as k}from"./chunk-ZMOYYY2M.js";import{a as $}from"./chunk-3H6GCVB5.js";import"./chunk-2L2WLAM3.js";import{a as v}from"./chunk-5ECNYKUD.js";import{a as u}from"./chunk-QWWGFHCC.js";import"./chunk-UYTG5BIE.js";import{a as M}from"./chunk-GVRKHMXU.js";import"./chunk-CPH7EA52.js";import{b as S}from"./chunk-B4VPWMSY.js";import{a as i}from"./chunk-PGM6BW3X.js";import{a as r}from"./chunk-EQGONDX6.js";import{a as T}from"./chunk-KLIOCADL.js";import{a as x}from"./chunk-V2FNJKJ6.js";import{a as p}from"./chunk-NWPELAGL.js";import"./chunk-PQNRX7KL.js";import"./chunk-3HA3LGRS.js";import{a as h}from"./chunk-PQQEFJJP.js";import{a as y}from"./chunk-75D56BHN.js";import"./chunk-ES5FO3D6.js";import"./chunk-PG53AESD.js";import{a as d}from"./chunk-RXTT2WAC.js";import"./chunk-SFHHQNN2.js";import{a as b}from"./chunk-OX4LUTGU.js";import{a as g}from"./chunk-OORPHTKR.js";import{p as l}from"./chunk-7FWLR7VA.js";function q(t){k(t).removeAttribute("width")}function G(t){let e=$();return u(t.parentNode,e),e}function H(t,e,n){let o=x(p(e)),s=Math.floor(o/n).toString();i(`&nbsp;&nbsp;Max: ${s} times`,t)}function I(t,e,n){i("",t);let o=Number(n.value);!T(o)&&o!==0&&H(t,e,o)}function E(t,e,n){t&&I(t,e,n)}function F(t,e,n){let o=b(E,t,e,n);o(),g(n,"keyup",o)}function N(t){q(t),F(G(t),r("statbar-gold"),r("gold"))}function f(){let t=r("multiplier_count");t&&N(t)}function a(t,e){y("lastScavPage",`${l}scavenging&cave_id=${t}&gold=${e}`)}var m=0;function C(){return m||(m=v(),u(S(),m)),i("",m),m}function R(t,e,n){let o=t.match(e);return o?`${n}: ${o.length}`:""}function B(t,e){let n=e.split(">")[1].split("<")[0];return t[n]=(t[n]||0)+1,t}function L(t){return t.reduce(B,{})}function _([t],[e]){return M(t,e)}function w([t,e]){return`<br>${e} ${t}(s), `}function D(t){let e=L(t);return`<br>${t.length} item(s):${h(e).sort(_).map(w).join("")}`}function j(t){let e=t.match(/Item Gained: <strong>[^<]+<\/strong>/g);return e?D(e):""}function A(){let t="",e=r("scavenge_results");if(e){let n=e.innerHTML;t+=R(n,/victorious/g,"Victories"),t+=R(n,/defeated/g,", Defeats"),t+=j(n)}return t}function P(t){return function(n,o,s){t(n,o,s),a(s,o),i(A(),C())}}function c(){let t=sendRequest;d(t)&&(sendRequest=P(t))}function V(){c(),f()}export{V as default};
//# sourceMappingURL=scavenging-L4ISOCAI.js.map
