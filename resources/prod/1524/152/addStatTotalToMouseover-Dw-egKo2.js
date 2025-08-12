import{w as t,a3 as e,a5 as r,cF as n,bt as s,aP as a,c,n as o}from"./calfSystem-BlPuMQGT.js"
import{c as l}from"./closestTable-gY6pXvyq.js"
import{i}from"./insertHtmlBeforeBegin-Au6BbD9U.js"
function u(t,e,r){const n=a(e.cells[0]).replace(":","")
return n?(t[n]={ind:r},function(t){return t.cells[1]&&o(t.cells[1])}(e)&&(t[n].value=Number(a(e.cells[1]).replace("+",""))),t):t}function f(t,e,r){return e+(n=r,s=t,s[n]?.value?s[n].value:0)
var n,s}function m(t){const e=l(t),r=s(e.rows).reduce(u,{}),n=function(t){return["Attack","Defense","Armor","Damage","HP"].reduce(c(f,t),0)}(r)
var a,o
i((o=e,(a=r).Enhancements?o.rows[a.Enhancements.ind-1]:o.rows[o.rows.length-1]),`<tr class="fshDodgerBlue"><td>Stat Total:</td><td align="right">${n}&nbsp;</td></tr>`)}function d(s){const a=t()
return e(a,s),r("font",a).filter(n("Bonuses")).forEach(m),a.innerHTML}function h(t){t.url.startsWith("fetchitem")&&(t.dataFilter=d)}function p(){$.ajaxPrefilter(h)}export{p as default}
//# sourceMappingURL=addStatTotalToMouseover-Dw-egKo2.js.map
