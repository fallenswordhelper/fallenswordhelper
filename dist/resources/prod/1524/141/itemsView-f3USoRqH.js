import{cE as t,l as e,cF as s,a8 as a,e as n,s as o,v as r,i,q as d}from"./calfSystem-Blt4DbaE.js"
import{x as c}from"./xPath-BOrRKfjR.js"
const f=t=>`https://www.fallensword.com/${s}${t}`
function l(){c('.//*[text() = "This item is bound"]')||t("Component",c('.//tr[td/b/text() = "Type:"]/td[2]'))||function(t){if(!t)return
const s=e({href:f(a(t)),innerHTML:'<b class="fshBlue">AH</b>',target:"_blank"})
n(s,(()=>o("guide","Item AH Link"))),r(t.parentNode," ["),i(t.parentNode,s),r(t.parentNode,"]")}(d(".tHeader")?.children?.[0])}export{l as default}
//# sourceMappingURL=itemsView-f3USoRqH.js.map
