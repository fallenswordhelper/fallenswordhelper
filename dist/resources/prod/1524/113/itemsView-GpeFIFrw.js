import{q as t,cr as e,n as s,a3 as a,o as n,s as o,v as r,i,cs as d}from"./calfSystem-VUa7wwu1.js"
import{x as c}from"./xPath-1ZUN83Aj.js"
const f=t=>`https://www.fallensword.com/${d}${t}`
function p(){c('.//*[text() = "This item is bound"]')||e("Component",c('.//tr[td/b/text() = "Type:"]/td[2]'))||function(t){if(!t)return
const e=s({href:f(a(t)),innerHTML:'<b class="fshBlue">AH</b>',target:"_blank"})
n(e,(()=>o("guide","Item AH Link"))),r(t.parentNode," ["),i(t.parentNode,e),r(t.parentNode,"]")}(t(".tHeader")?.children?.[0])}export{p as default}
//# sourceMappingURL=itemsView-GpeFIFrw.js.map
