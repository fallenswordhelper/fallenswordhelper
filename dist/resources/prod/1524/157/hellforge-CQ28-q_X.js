import{d as t}from"./daLoadInventory-C9oxmubC.js"
import{f as o}from"./flattenItems-BlJ8UhNB.js"
import{c as a}from"./createStyle--h4yDzB1.js"
import{g as r,i as s,p as i}from"./calfSystem-CQOGdqPv.js"
const n=({a:t})=>`div[id$="-highlight-${t}"] {\n  background-color: rgba(255, 255, 0, 0.3);\n}`
function f(){r("hellforge-items")&&async function(){const r=await t()
if(!r?.s)return
const f=o(r.r).filter(({hf:t})=>5!==t).filter(({cf:t})=>0===t).map(n).join("\n")
s(i(),a(f))}()}export{f as default}
//# sourceMappingURL=hellforge-CQ28-q_X.js.map
