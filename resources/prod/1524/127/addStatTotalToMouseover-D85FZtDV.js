import{m as t,v as e,x as r,bZ as n,a_ as s,aq as a,c as o,a8 as c}from"./calfSystem-DCvZki7i.js"
import{c as l}from"./closestTable-7JTCNZDF.js"
import{i}from"./insertHtmlBeforeBegin-CUpn8zst.js"
function u(t,e,r){const n=a(e.cells[0]).replace(":","")
return n?(t[n]={ind:r},function(t){return t.cells[1]&&c(t.cells[1])}(e)&&(t[n].value=Number(a(e.cells[1]).replace("+",""))),t):t}function f(t,e,r){return e+(n=r,s=t,s[n]?.value?s[n].value:0)
var n,s}function m(t){const e=l(t),r=s(e.rows).reduce(u,{}),n=function(t){return["Attack","Defense","Armor","Damage","HP"].reduce(o(f,t),0)}(r)
var a,c
i((c=e,(a=r).Enhancements?c.rows[a.Enhancements.ind-1]:c.rows[c.rows.length-1]),`<tr class="fshDodgerBlue"><td>Stat Total:</td><td align="right">${n}&nbsp;</td></tr>`)}function d(s){const a=t()
return e(a,s),r("font",a).filter(n("Bonuses")).forEach(m),a.innerHTML}function h(t){t.url.startsWith("fetchitem")&&(t.dataFilter=d)}function p(){$.ajaxPrefilter(h)}export{p as default}
//# sourceMappingURL=addStatTotalToMouseover-D85FZtDV.js.map
