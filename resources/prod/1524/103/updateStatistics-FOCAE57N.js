import{a as l}from"./chunk-SPUB7I7W.js";import{a as d}from"./chunk-VDABUAVV.js";import"./chunk-IETC7J5T.js";import{a as f}from"./chunk-4BKRRB5O.js";import{a}from"./chunk-NZDFBLRQ.js";import{a as s}from"./chunk-S4DLXHFF.js";import"./chunk-PR2EAHHE.js";import{a as m}from"./chunk-MT75LODT.js";import{a as r}from"./chunk-C257UEHM.js";import{a as n}from"./chunk-KU5JAIEB.js";import"./chunk-N7M4WPYO.js";import"./chunk-BGM7VCLD.js";import"./chunk-ZOICBMHG.js";import"./chunk-EL33JOKC.js";import"./chunk-EOP2LXLP.js";import"./chunk-PCHFEFT4.js";import"./chunk-ARPRWHND.js";import{wa as i}from"./chunk-B3TUML6P.js";var c=`.profile-stat-bonus { font-size: x-small; }
.fshCharStats { table-layout: fixed; }
.fshCharStats td:first-of-type { width: 22%; }
.fshCharStats td:nth-of-type(2) { width: 25%; }
.fshCharStats td:nth-of-type(3) { width: 18%; }
.fshCharStats td:nth-of-type(4) { width: 35%; }`;function u(t){let e=f(t);return e?` <div class="profile-stat-bonus">${e}</div>`:""}function y(t){let[e,o]=n("td",t);m(`<span id="${e.id}">${a(e.innerHTML.replace(/&nbsp;/g," "))}</span>${u(o)}`,t.parentNode)}var p=(t,e,o)=>s(`${e}[${o}]`,t).forEach(h=>h.removeAttribute(o));function b(t){p(t,"tr","style"),p(t,"td","width"),r("td[colspan]",t)?.removeAttribute("colspan")}function S(t){t.classList.add("fshCharStats"),b(t),s(i,t).forEach(y),d(l(c),t)}function C(){let t=r("#profileLeftColumn table");t&&S(t)}export{C as default};
//# sourceMappingURL=updateStatistics-FOCAE57N.js.map
