import{m as t,i as e,g as r,aG as n,ap as s,t as a,H as c,C as o}from"./calfSystem-cbf77dd7.js"
import{c as l}from"./closestTable-ea26a9a2.js"
import{i}from"./insertHtmlBeforeBegin-1377340b.js"
import"./closest-d38ca7fc.js"
function f(t,e,r){const n=c(e.cells[0]).replace(":","")
return n?(t[n]={ind:r},function(t){return t.cells[1]&&o(t.cells[1])}(e)&&(t[n].value=Number(c(e.cells[1]).replace("+",""))),t):t}function u(t,e,r){return e+((s=t)[n=r]&&s[n].value?s[n].value:0)
var n,s}function m(t){const e=l(t),r=s(e.rows).reduce(f,{}),n=function(t){return["Attack","Defense","Armor","Damage","HP"].reduce(a(u,t),0)}(r)
var c,o
i((o=e,(c=r).Enhancements?o.rows[c.Enhancements.ind-1]:o.rows[o.rows.length-1]),`<tr class="fshDodgerBlue"><td>Stat Total:</td><td align="right">${n}&nbsp;</td></tr>`)}function d(s){const a=t()
return e(a,s),r("font",a).filter(n("Bonuses")).forEach(m),a.innerHTML}function p(t){t.url.startsWith("fetchitem")&&(t.dataFilter=d)}function h(){$.ajaxPrefilter(p)}export default h
//# sourceMappingURL=addStatTotalToMouseover-80263f98.js.map
