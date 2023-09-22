import{q as t,cr as e,m as s,a3 as a,o as n,n as o,v as r,i,cs as d}from"./calfSystem-4830a18d.js"
import{x as c}from"./xPath-13f1f0a9.js"
const f=t=>`https://www.fallensword.com/${d}${t}`
function m(){c('.//*[text() = "This item is bound"]')||e("Component",c('.//tr[td/b/text() = "Type:"]/td[2]'))||function(t){if(!t)return
const e=s({href:f(a(t)),innerHTML:'<b class="fshBlue">AH</b>',target:"_blank"})
n(e,(()=>o("guide","Item AH Link"))),r(t.parentNode," ["),i(t.parentNode,e),r(t.parentNode,"]")}(t(".tHeader")?.children?.[0])}export{m as default}
//# sourceMappingURL=itemsView-fbbdeb84.js.map
