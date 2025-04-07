import{q as t,d8 as e,v as a,db as s,aa as n,o,s as r,z as i,i as d}from"./calfSystem-BGW9cdWN.js"
import{x as f}from"./xPath-DGGECysO.js"
const m=t=>`https://www.fallensword.com/${s}${t}`
function p(){f('.//*[text() = "This item is bound"]')||e("Component",f('.//tr[td/b/text() = "Type:"]/td[2]'))||function(t){if(!t)return
const e=a({href:m(n(t)),innerHTML:'<b class="fshBlue">AH</b>',target:"_blank"})
o(e,(()=>r("guide","Item AH Link"))),i(t.parentNode," ["),d(t.parentNode,e),i(t.parentNode,"]")}(t(".tHeader")?.children?.[0])}export{p as default}
//# sourceMappingURL=itemsView-BOKlply4.js.map
