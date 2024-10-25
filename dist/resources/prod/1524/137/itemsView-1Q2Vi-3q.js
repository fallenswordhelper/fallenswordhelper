import{q as t,cE as e,n as s,a8 as a,o as n,s as o,v as r,i,cF as d}from"./calfSystem-DZGU7L1H.js"
import{x as c}from"./xPath-N4wIeO-K.js"
const f=t=>`https://www.fallensword.com/${d}${t}`
function m(){c('.//*[text() = "This item is bound"]')||e("Component",c('.//tr[td/b/text() = "Type:"]/td[2]'))||function(t){if(!t)return
const e=s({href:f(a(t)),innerHTML:'<b class="fshBlue">AH</b>',target:"_blank"})
n(e,(()=>o("guide","Item AH Link"))),r(t.parentNode," ["),i(t.parentNode,e),r(t.parentNode,"]")}(t(".tHeader")?.children?.[0])}export{m as default}
//# sourceMappingURL=itemsView-1Q2Vi-3q.js.map
