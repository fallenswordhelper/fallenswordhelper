import{d as t}from"./daLoadInventory-wjRxPaFd.js"
import{f as o}from"./flattenItems-DQDjjuI2.js"
import{c as a}from"./createStyle-C-OOcRjs.js"
import{g as s,j as r,i,p as n}from"./calfSystem-CIdPz3EO.js"
const f=({a:t})=>`div[id$="-highlight-${t}"] {\n  background-color: rgba(255, 255, 0, 0.3);\n}`
function e(){const e=s("hellforge-items")
r()&&e&&async function(){const s=await t()
if(!s?.s)return
const r=o(s.r).filter(({hf:t})=>5!==t).filter(({cf:t})=>0===t).map(f).join("\n")
i(n(),a(r))}()}export{e as default}
//# sourceMappingURL=hellforge-CX9aXdfO.js.map
