import{a as d}from"./chunk-QNUEQM6C.js";import{a as s}from"./chunk-KOGBQXFO.js";import"./chunk-FZSLHGK7.js";import{a as i}from"./chunk-D7DBYYVV.js";import"./chunk-UFDUIBPU.js";import{a as u}from"./chunk-FDOAGP6J.js";import{a as p}from"./chunk-UCL5WC26.js";import"./chunk-ZUUQECWA.js";import{a as c}from"./chunk-2ZEFTA6B.js";import{a}from"./chunk-ULCOJYQQ.js";import"./chunk-5JKG2KXO.js";import"./chunk-TJDS7E3Q.js";import"./chunk-KYIDEWAX.js";import{a as m}from"./chunk-KUKFZGKL.js";import"./chunk-JUUMQFPG.js";import"./chunk-OPXVQRDJ.js";import"./chunk-KQGQROK7.js";function f(t){if(t instanceof Node)return t.nodeType===Node.TEXT_NODE}var N=98,l=85,T=60;function g(t){return Number(a(m(`stat-${t.toLowerCase()}`).childNodes).filter(f).map(i).join(""))}function E(t,r,e){let n=g(r[3]),o=Math.floor(e*(Number(r[1].replace(/[+%]/g,""))/100));d(t.dataset.tipped.replace("</center></div>",`<br>Buff Effect: ${String(o)}<br>${r[2]}: ${String(e-o)}&nbsp;&nbsp;${r[3]}: ${String(n+o)}$&`),t)}function $(t){let r=s({innerHTML:t.dataset.tipped}),e=p("b",r).map(o=>i(o)),n=g(e[2]);u(n)||E(t,e,n)}function y(t){let r=c(`#profileRightColumn img[src$="/${String(t)}.png"]`);r&&$(r)}function S(){[N,l,T].forEach(y)}export{S as default};
//# sourceMappingURL=updateBuffs-BQ7EBHXS.js.map
