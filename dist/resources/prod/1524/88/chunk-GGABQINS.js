import{a as k,b as y}from"./chunk-3QVNIZIF.js";import{a as w}from"./chunk-YBRU5DQF.js";import{a as b}from"./chunk-2J5GVP2T.js";import{a as L}from"./chunk-QDZOVJNO.js";import{a as C}from"./chunk-RPUEVZVZ.js";import{a as c}from"./chunk-EPZ5F5RD.js";import{a as i}from"./chunk-LQ3YN2GG.js";import{a as d}from"./chunk-C5OL3C5E.js";import{a as h}from"./chunk-OUAWI7GT.js";import{a as g}from"./chunk-5FY3IDHS.js";import{a as l}from"./chunk-PDKME2CZ.js";import{b as m}from"./chunk-5P435J5Q.js";import{Na as p}from"./chunk-JLE65JRD.js";function a(){return i("#pCC > table:last-of-type")}var f=0,s=0;function x(t){return["Chat","Leader"].includes(t)?i("#pCC table table table table"):a()}function S(t,r){return t>20&&r<=s}function $(t){return m(t)||f}function T(t,r){let o="old",e=w(c(r.cells[t])),n=(f-e)/(1e3*60);return S(n,e)||(o=e>s?"new":"seen"),[r,o]}function B(t,r){t==="Chat"&&r.filter(([,o])=>o!=="old").map(([o])=>i(p,o)).forEach(k)}function D(t,[r,o]){let e=r.rowIndex+1;return t[o]?t[o]={min:Math.min(t[o].min,e),max:Math.max(t[o].min,e)}:t[o]={min:e,max:e},t}function M(t,[r,{min:o,max:e}]){return`.fshLogColoring tr:nth-of-type(${t}n+${o}):nth-of-type(-${t}n+${e}) {background-color: ${r==="old"?"#CD9E4B":"#F5F298"};}`}function U(t,r){let o=t==="Chat"?4:2;return d(r.filter(([,e])=>e!=="seen").reduce(D,{})).map(l(M,o))}function E(t,r,o,e){let n=L(o,e,0).map(l(T,r));B(t,n);let u=U(t,n);u.length&&C(document.body,b(u.join(`
`)))}function R(t,r,o,e){o.classList.add("fshLogColoring"),f=new Date().setUTCSeconds(0,0)-1;let n=`last${t}Check`;s=$(n),E(t,r,o,e),g(o,y),h(n,f)}function q(t,r,o){if(!m("enableLogColoring"))return;let e=x(t);e&&R(t,r,e,o)}export{a,q as b};
//# sourceMappingURL=chunk-GGABQINS.js.map