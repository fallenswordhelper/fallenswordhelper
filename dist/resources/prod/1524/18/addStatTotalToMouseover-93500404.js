import{k as t,i as e,g as r,b0 as n,aD as a,s,a8 as o,A as c}from"./calfSystem-8b6534a5.js"
import{c as l}from"./closestTable-af41867c.js"
import{i}from"./insertHtmlBeforeBegin-ab576692.js"
function u(t,e,r){const n=o(e.cells[0]).replace(":","")
return n?(t[n]={ind:r},function(t){return t.cells[1]&&c(t.cells[1])}(e)&&(t[n].value=Number(o(e.cells[1]).replace("+",""))),t):t}function f(t,e,r){return e+((a=t)[n=r]&&a[n].value?a[n].value:0)
var n,a}function m(t){const e=l(t),r=a(e.rows).reduce(u,{}),n=function(t){return["Attack","Defense","Armor","Damage","HP"].reduce(s(f,t),0)}(r)
var o,c
i((c=e,(o=r).Enhancements?c.rows[o.Enhancements.ind-1]:c.rows[c.rows.length-1]),`<tr class="fshDodgerBlue"><td>Stat Total:</td><td align="right">${n}&nbsp;</td></tr>`)}function d(a){const s=t()
return e(s,a),r("font",s).filter(n("Bonuses")).forEach(m),s.innerHTML}function h(t){t.url.startsWith("fetchitem")&&(t.dataFilter=d)}function g(){$.ajaxPrefilter(h)}export{g as a}
//# sourceMappingURL=addStatTotalToMouseover-93500404.js.map
