import{m as t,i as e,g as r,aq as n,M as s,t as a,G as o,B as c}from"./calfSystem-793da633.js"
import{c as l}from"./closestTable-90fad5df.js"
import{i}from"./insertHtmlBeforeBegin-b4245dd6.js"
import"./closest-f906514d.js"
function f(t,e,r){const n=o(e.cells[0]).replace(":","")
return n?(t[n]={ind:r},function(t){return t.cells[1]&&c(t.cells[1])}(e)&&(t[n].value=Number(o(e.cells[1]).replace("+",""))),t):t}function u(t,e,r){return e+((s=t)[n=r]&&s[n].value?s[n].value:0)
var n,s}function d(t){const e=l(t),r=s(e.rows).reduce(f,{}),n=function(t){return["Attack","Defense","Armor","Damage","HP"].reduce(a(u,t),0)}(r)
var o,c
i((c=e,(o=r).Enhancements?c.rows[o.Enhancements.ind-1]:c.rows[c.rows.length-1]),`<tr class="fshDodgerBlue"><td>Stat Total:</td><td align="right">${n}&nbsp;</td></tr>`)}function m(s){const a=t()
return e(a,s),r("font",a).filter(n("Bonuses")).forEach(d),a.innerHTML}function h(t){t.url.startsWith("fetchitem")&&(t.dataFilter=m)}function p(){$.ajaxPrefilter(h)}export default p
//# sourceMappingURL=addStatTotalToMouseover-77e73796.js.map
