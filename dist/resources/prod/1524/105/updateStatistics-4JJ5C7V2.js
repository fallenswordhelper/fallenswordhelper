import{a as l}from"./chunk-2OJ3BCNF.js";import{a as d}from"./chunk-JWVJSOBO.js";import"./chunk-A6LP6MUS.js";import{a as f}from"./chunk-JG7KZ32H.js";import{a as r}from"./chunk-FMA2QB7F.js";import{a}from"./chunk-35MRBVSX.js";import{a as n}from"./chunk-AH7GU5B4.js";import"./chunk-KOM3R443.js";import"./chunk-NIOVFM2M.js";import"./chunk-6ZCA6D63.js";import"./chunk-YXAOTQ2S.js";import{a as s}from"./chunk-V45UJIF2.js";import"./chunk-64PLTPQD.js";import"./chunk-OHAOQZFW.js";import{a as m}from"./chunk-SSAI4GAC.js";import"./chunk-TFKKNJKY.js";import{wa as i}from"./chunk-5ELKH2XV.js";import"./chunk-BZJZQFW2.js";var c=`.profile-stat-bonus { font-size: x-small; }
.fshCharStats { table-layout: fixed; }
.fshCharStats td:first-of-type { width: 22%; }
.fshCharStats td:nth-of-type(2) { width: 25%; }
.fshCharStats td:nth-of-type(3) { width: 18%; }
.fshCharStats td:nth-of-type(4) { width: 35%; }`;function u(t){let e=f(t);return e?` <div class="profile-stat-bonus">${e}</div>`:""}function y(t){let[e,o]=n("td",t);m(`<span id="${e.id}">${a(e.innerHTML.replace(/&nbsp;/g," "))}</span>${u(o)}`,t.parentNode)}var p=(t,e,o)=>s(`${e}[${o}]`,t).forEach(h=>h.removeAttribute(o));function b(t){p(t,"tr","style"),p(t,"td","width"),r("td[colspan]",t)?.removeAttribute("colspan")}function S(t){t.classList.add("fshCharStats"),b(t),s(i,t).forEach(y),d(l(c),t)}function C(){let t=r("#profileLeftColumn table");t&&S(t)}export{C as default};
//# sourceMappingURL=updateStatistics-4JJ5C7V2.js.map