import{a as I}from"./chunk-3ZA4MRRJ.js";import{a as p}from"./chunk-BI7BSBL7.js";import{a as h}from"./chunk-SFEEANP4.js";import{a as E}from"./chunk-KKBP66LG.js";import{c as P}from"./chunk-BNKANSEC.js";import{a as c}from"./chunk-37F6LHIG.js";import{a}from"./chunk-WHV3WX43.js";import{a as w}from"./chunk-CGJEUKDI.js";import{a as d}from"./chunk-FX7CCVWC.js";import{a as x}from"./chunk-LNXUNYCS.js";import{a as s}from"./chunk-E6PDYOYJ.js";import{a as g}from"./chunk-EORP6S4E.js";import{a as u}from"./chunk-XVK7UPUF.js";import{a as m}from"./chunk-IHQ4NUVX.js";var r=[],f=0,i=0;function T(o){p(o.row)}function b(o){s("collapse","collapseArt"),o.rows.forEach(T),o.open=!1}function L(o){o.open&&b(o)}function k(){r.forEach(L)}function R(o){I(o.row,!1)}function v(o){s("collapse","expandArt"),o.rows.forEach(R),o.open=!0}function A(o){o.open||v(o)}function C(){r.forEach(A)}function F(o){if(o.rowIndex%i===0)return o}function H(o){if(o.tagName==="TR")return F(o);if(o.tagName!=="TABLE")return H(o.parentNode)}function N(o){let e=H(o.target);if(!e)return;let n=e.rowIndex/i,t=r[n];t.open===!1?(k(),v(t)):b(t)}function D(o){f&&N(o)}function y(o){f&&o.classList.add("fshPoint")}function B(o,e){f?(p(o),e.open=!1):e.open=!0}function V(o,e){d(o)&&o(e)}function M(o,e,n,t){e===0&&(n.header=o,y(o),V(t.extraFn,o)),t.articleTest(e)&&(n.rows[e]=a(n[e],{}),n.rows[e].row=o,B(o,n))}function q(o,e){let n=e.rowIndex%i,t=(e.rowIndex-n)/i;r[t]=a(r[t],{});let l=r[t];l.rows=l.rows||[],M(e,n,l,o)}function z(o){o.header.classList.toggle("fshPoint")}function G(){r.forEach(z)}function J(o){s("collapse","togglePref",o),f=!f,w(o,f),f?k():C(),G()}function K(o){f=c(o).checked,m(c(o),"change",u(J,o))}function O(o){i=o.headInd,K(o.prefName),g(o.theTable.rows).forEach(u(q,o)),x(o.theTable,D)}function Q(o,e){let n=h({className:"fshPref",innerHTML:P(o)});e.classList.add("fshRelative"),E(e,n)}export{O as a,Q as b};
//# sourceMappingURL=chunk-C6R3IHMO.js.map