import{a as d}from"./chunk-NHWXBEDB.js";import{a as c}from"./chunk-2MKDAAB6.js";import"./chunk-QTSQHPKK.js";import{a as i}from"./chunk-LFZPKT47.js";import"./chunk-OR5BPR4B.js";import{a as m}from"./chunk-NJN6T7TI.js";import"./chunk-AOZMZP5H.js";import{a as u}from"./chunk-6GZFUY3O.js";import"./chunk-AVPNOLSP.js";import{a as o}from"./chunk-6NBL4CEJ.js";import"./chunk-UECO6BBS.js";import{a as f}from"./chunk-H6ODLS4E.js";import"./chunk-EKBYY3JQ.js";import{a}from"./chunk-2IOAHVVN.js";import"./chunk-GALQGYEO.js";import"./chunk-T4ZSWDX2.js";import"./chunk-WE2GCAKX.js";import"./chunk-N3ED3R2T.js";import{a as s}from"./chunk-O6E23IRT.js";import{a as l}from"./chunk-RUEPLNRL.js";import"./chunk-FQGZN2JL.js";function T(t){return t.cells[1]&&a(t.cells[1])}function g(t,e,r){let n=o(e.cells[0]).replace(":","");return n&&(t[n]={ind:r},T(e)&&(t[n].value=Number(o(e.cells[1]).replace("+","")))),t}function h(t,e){return e[t]&&e[t].value?e[t].value:0}function p(t,e){return t.Enhancements?e.rows[t.Enhancements.ind-1]:e.rows[e.rows.length-1]}function x(t,e,r){return e+h(r,t)}function B(t){return["Attack","Defense","Armor","Damage","HP"].reduce(l(x,t),0)}function S(t){let e=d(t),r=s(e.rows).reduce(g,{}),n=B(r);c(p(r,e),`<tr class="fshDodgerBlue"><td>Stat Total:</td><td align="right">${n}&nbsp;</td></tr>`)}function v(t){let e=m();return i(e,t),f("font",e).filter(u("Bonuses")).forEach(S),e.innerHTML}function D(t){t.url.startsWith("fetchitem")&&(t.dataFilter=v)}function H(){$.ajaxPrefilter(D)}export{H as default};
//# sourceMappingURL=addStatTotalToMouseover-OSH7RXLA.js.map