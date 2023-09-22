import{d as t}from"./daLoadInventory-9c7bd6b5.js"
import{f as r}from"./flattenItems-03659160.js"
import{c as o}from"./createStyle-79b7cdab.js"
import{g as a,i as s,p as i}from"./calfSystem-4830a18d.js"
import"./isArray-09a53da7.js"
const n=({a:t})=>`div[id$="-highlight-${t}"] {\n  background-color: rgba(255, 255, 0, 0.3);\n}`
function f(){a("hellforge-items")&&async function(){const a=await t()
if(!a?.s)return
const f=r(a.r).filter((({hf:t})=>5!==t)).filter((({cf:t})=>0===t)).map(n).join("\n")
s(i(),o(f))}()}export{f as default}
//# sourceMappingURL=hellforge-e14375e9.js.map
