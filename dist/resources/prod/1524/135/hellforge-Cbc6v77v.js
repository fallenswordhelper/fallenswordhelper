import{d as t}from"./daLoadInventory-DqhpivwE.js"
import{f as r}from"./flattenItems-C4pfIrZn.js"
import{c as o}from"./createStyle-DtnB7kMW.js"
import{g as a,i as s,p as i}from"./calfSystem-B-q5dZfX.js"
import"./isArray-eVldfhw1.js"
const n=({a:t})=>`div[id$="-highlight-${t}"] {\n  background-color: rgba(255, 255, 0, 0.3);\n}`
function f(){a("hellforge-items")&&async function(){const a=await t()
if(!a?.s)return
const f=r(a.r).filter((({hf:t})=>5!==t)).filter((({cf:t})=>0===t)).map(n).join("\n")
s(i(),o(f))}()}export{f as default}
//# sourceMappingURL=hellforge-Cbc6v77v.js.map
