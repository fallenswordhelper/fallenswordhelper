import{a as l}from"./chunk-WKC6YNIN.js";import{a as m}from"./chunk-IXDXLPIY.js";import"./chunk-5AWGL262.js";import{a as f}from"./chunk-D4AVXNRB.js";import{a}from"./chunk-W5AN4HHX.js";import{a as d}from"./chunk-ACOFHTYC.js";import{a as n}from"./chunk-F5Q5KOPJ.js";import{a as r}from"./chunk-4GU2HJD7.js";import"./chunk-PJX66I2Y.js";import"./chunk-WLWXTJVR.js";import"./chunk-YYW2XVVC.js";import"./chunk-LGXHSUMA.js";import"./chunk-DZSOBYW3.js";import{a as s}from"./chunk-DARUUDAY.js";import"./chunk-2T7366JB.js";import"./chunk-RGSHZW7Q.js";import"./chunk-OQC4RYIZ.js";import{wa as i}from"./chunk-3DLQUZR2.js";var c=`.profile-stat-bonus { font-size: x-small; }
.fshCharStats { table-layout: fixed; }
.fshCharStats td:first-of-type { width: 22%; }
.fshCharStats td:nth-of-type(2) { width: 25%; }
.fshCharStats td:nth-of-type(3) { width: 18%; }
.fshCharStats td:nth-of-type(4) { width: 35%; }`;function u(t){let e=f(t);return e?` <div class="profile-stat-bonus">${e}</div>`:""}function y(t){let[e,o]=n("td",t);d(`<span id="${e.id}">${a(e.innerHTML.replace(/&nbsp;/g," "))}</span>${u(o)}`,t.parentNode)}var p=(t,e,o)=>s(`${e}[${o}]`,t).forEach(h=>h.removeAttribute(o));function b(t){p(t,"tr","style"),p(t,"td","width"),r("td[colspan]",t)?.removeAttribute("colspan")}function S(t){t.classList.add("fshCharStats"),b(t),s(i,t).forEach(y),m(l(c),t)}function C(){let t=r("#profileLeftColumn table");t&&S(t)}export{C as default};
//# sourceMappingURL=updateStatistics-NI32OYHH.js.map