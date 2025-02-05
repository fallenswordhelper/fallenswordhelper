import{n as e,x as t,z as r,cz as n,bk as s,aH as a,d as o,ad as c}from"./calfSystem-BAeDn21M.js"
import{c as l}from"./closestTable-MoRx7kRV.js"
import{i}from"./insertHtmlBeforeBegin-KM68DgEq.js"
function u(e,t,r){const n=a(t.cells[0]).replace(":","")
return n?(e[n]={ind:r},function(e){return e.cells[1]&&c(e.cells[1])}(t)&&(e[n].value=Number(a(t.cells[1]).replace("+",""))),e):e}function f(e,t,r){return t+(n=r,s=e,s[n]?.value?s[n].value:0)
var n,s}function m(e){const t=l(e),r=s(t.rows).reduce(u,{}),n=function(e){return["Attack","Defense","Armor","Damage","HP"].reduce(o(f,e),0)}(r)
var a,c
i((c=t,(a=r).Enhancements?c.rows[a.Enhancements.ind-1]:c.rows[c.rows.length-1]),`<tr class="fshDodgerBlue"><td>Stat Total:</td><td align="right">${n}&nbsp;</td></tr>`)}function d(s){const a=e()
return t(a,s),r("font",a).filter(n("Bonuses")).forEach(m),a.innerHTML}function h(e){e.url.startsWith("fetchitem")&&(e.dataFilter=d)}function p(){$.ajaxPrefilter(h)}export{p as default}
//# sourceMappingURL=addStatTotalToMouseover-dvvCzmwJ.js.map
