import{a as d}from"./chunk-GKWFAMI7.js";import{a as c}from"./chunk-PSNTHUZF.js";import"./chunk-M34ZVTSL.js";import{a as i}from"./chunk-WMET5VJL.js";import"./chunk-EJAPIT2N.js";import{a as m}from"./chunk-IEZDQOE5.js";import"./chunk-WMUUSPIG.js";import{a as u}from"./chunk-73ZGJX3S.js";import"./chunk-DKG6D46Z.js";import{a as o}from"./chunk-HOFZHHFM.js";import"./chunk-DHIC45XN.js";import{a as l}from"./chunk-MVADRWN3.js";import"./chunk-B42TQDRT.js";import{a}from"./chunk-RVROEHXL.js";import{a as f}from"./chunk-EPL4X55B.js";import"./chunk-C6CNCMW2.js";import"./chunk-RLPGZCX6.js";import"./chunk-6TE7Y3DR.js";import"./chunk-3FPE4KHJ.js";import{a as s}from"./chunk-SOFFOM3C.js";import"./chunk-7Q74Q23I.js";function T(t){return t.cells[1]&&a(t.cells[1])}function g(t,e,r){let n=o(e.cells[0]).replace(":","");return n&&(t[n]={ind:r},T(e)&&(t[n].value=Number(o(e.cells[1]).replace("+","")))),t}function h(t,e){return e[t]&&e[t].value?e[t].value:0}function p(t,e){return t.Enhancements?e.rows[t.Enhancements.ind-1]:e.rows[e.rows.length-1]}function x(t,e,r){return e+h(r,t)}function B(t){return["Attack","Defense","Armor","Damage","HP"].reduce(s(x,t),0)}function S(t){let e=d(t),r=f(e.rows).reduce(g,{}),n=B(r);c(p(r,e),`<tr class="fshDodgerBlue"><td>Stat Total:</td><td align="right">${n}&nbsp;</td></tr>`)}function v(t){let e=m();return i(e,t),l("font",e).filter(u("Bonuses")).forEach(S),e.innerHTML}function D(t){t.url.startsWith("fetchitem")&&(t.dataFilter=v)}function H(){$.ajaxPrefilter(D)}export{H as default};
//# sourceMappingURL=addStatTotalToMouseover-5XYZZ2AT.js.map
