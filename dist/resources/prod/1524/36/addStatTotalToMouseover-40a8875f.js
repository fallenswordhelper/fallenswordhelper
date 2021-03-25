import{m as e,i as t,g as r,as as s,N as n,t as a,H as c,C as o}from"./calfSystem-e7bde0c3.js"
import{c as l}from"./closestTable-4f18c51a.js"
import{i}from"./insertHtmlBeforeBegin-57af9ec4.js"
import"./closest-7968af48.js"
function f(e,t,r){const s=c(t.cells[0]).replace(":","")
return s?(e[s]={ind:r},function(e){return e.cells[1]&&o(e.cells[1])}(t)&&(e[s].value=Number(c(t.cells[1]).replace("+",""))),e):e}function u(e,t,r){return t+((n=e)[s=r]&&n[s].value?n[s].value:0)
var s,n}function m(e){const t=l(e),r=n(t.rows).reduce(f,{}),s=function(e){return["Attack","Defense","Armor","Damage","HP"].reduce(a(u,e),0)}(r)
var c,o
i((o=t,(c=r).Enhancements?o.rows[c.Enhancements.ind-1]:o.rows[o.rows.length-1]),`<tr class="fshDodgerBlue"><td>Stat Total:</td><td align="right">${s}&nbsp;</td></tr>`)}function d(n){const a=e()
return t(a,n),r("font",a).filter(s("Bonuses")).forEach(m),a.innerHTML}function h(e){e.url.startsWith("fetchitem")&&(e.dataFilter=d)}function p(){$.ajaxPrefilter(h)}export default p
//# sourceMappingURL=addStatTotalToMouseover-40a8875f.js.map
