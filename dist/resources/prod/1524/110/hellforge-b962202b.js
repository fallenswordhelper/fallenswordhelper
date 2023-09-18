import{d as t}from"./daLoadInventory-7d3bc344.js"
import{f as r}from"./flattenItems-03659160.js"
import{c as o}from"./createStyle-ebd85b35.js"
import{g as a,i as s,p as i}from"./calfSystem-929ac228.js"
import"./isArray-09a53da7.js"
const n=({a:t})=>`div[id$="-highlight-${t}"] {\n  background-color: rgba(255, 255, 0, 0.3);\n}`
function f(){a("hellforge-items")&&async function(){const a=await t()
if(!a?.s)return
const f=r(a.r).filter((({hf:t})=>5!==t)).filter((({cf:t})=>0===t)).map(n).join("\n")
s(i(),o(f))}()}export{f as default}
//# sourceMappingURL=hellforge-b962202b.js.map
