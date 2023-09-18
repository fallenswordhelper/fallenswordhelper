import{q as t,cr as e,m as s,a4 as a,o as n,n as o,v as r,i,cs as d}from"./calfSystem-929ac228.js"
import{x as m}from"./xPath-cf79d874.js"
const c=t=>`https://www.fallensword.com/${d}${t}`
function f(){m('.//*[text() = "This item is bound"]')||e("Component",m('.//tr[td/b/text() = "Type:"]/td[2]'))||function(t){if(!t)return
const e=s({href:c(a(t)),innerHTML:'<b class="fshBlue">AH</b>',target:"_blank"})
n(e,(()=>o("guide","Item AH Link"))),r(t.parentNode," ["),i(t.parentNode,e),r(t.parentNode,"]")}(t(".tHeader")?.children?.[0])}export{f as default}
//# sourceMappingURL=itemsView-350102e1.js.map
