import{m as t,i as e,g as r,as as s,N as n,t as a,H as o,C as c}from"./calfSystem-60c20ae9.js"
import{c as l}from"./closestTable-13063e83.js"
import{i}from"./insertHtmlBeforeBegin-6bd74579.js"
import"./closest-214539bf.js"
function u(t,e,r){const s=o(e.cells[0]).replace(":","")
return s?(t[s]={ind:r},function(t){return t.cells[1]&&c(t.cells[1])}(e)&&(t[s].value=Number(o(e.cells[1]).replace("+",""))),t):t}function f(t,e,r){return e+((n=t)[s=r]&&n[s].value?n[s].value:0)
var s,n}function m(t){const e=l(t),r=n(e.rows).reduce(u,{}),s=function(t){return["Attack","Defense","Armor","Damage","HP"].reduce(a(f,t),0)}(r)
var o,c
i((c=e,(o=r).Enhancements?c.rows[o.Enhancements.ind-1]:c.rows[c.rows.length-1]),`<tr class="fshDodgerBlue"><td>Stat Total:</td><td align="right">${s}&nbsp;</td></tr>`)}function d(n){const a=t()
return e(a,n),r("font",a).filter(s("Bonuses")).forEach(m),a.innerHTML}function h(t){t.url.startsWith("fetchitem")&&(t.dataFilter=d)}function p(){$.ajaxPrefilter(h)}export default p
//# sourceMappingURL=addStatTotalToMouseover-31549fcb.js.map
