import{q as t,cu as e,m as a,a5 as s,o as n,n as o,v as r,i,cv as d}from"./calfSystem-2f15e074.js"
import{x as c}from"./xPath-d6cbd9e3.js"
const f=t=>`https://www.fallensword.com/${d}${t}`
function m(){c('.//*[text() = "This item is bound"]')||e("Component",c('.//tr[td/b/text() = "Type:"]/td[2]'))||function(t){if(!t)return
const e=a({href:f(s(t)),innerHTML:'<b class="fshBlue">AH</b>',target:"_blank"})
n(e,(()=>o("guide","Item AH Link"))),r(t.parentNode," ["),i(t.parentNode,e),r(t.parentNode,"]")}(t(".tHeader")?.children?.[0])}export{m as default}
//# sourceMappingURL=itemsView-15f985a2.js.map