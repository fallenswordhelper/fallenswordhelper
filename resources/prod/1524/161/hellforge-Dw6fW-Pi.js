import{d as t}from"./daLoadInventory-Sf3be_xU.js"
import{f as o}from"./flattenItems-DRADeVyF.js"
import{c as a}from"./createStyle-SGEMbHV8.js"
import{g as s,j as r,i as n,p as i}from"./calfSystem-Cs6CSxoU.js"
const f=({a:t})=>`div[id$="-highlight-${t}"] {\n  background-color: rgba(255, 255, 0, 0.3);\n}`
function e(){const e=s("hellforge-items")
r()&&e&&async function(){const s=await t()
if(!s?.s)return
const r=o(s.r).filter(({hf:t})=>5!==t).filter(({cf:t})=>0===t).map(f).join("\n")
n(i(),a(r))}()}export{e as default}
//# sourceMappingURL=hellforge-Dw6fW-Pi.js.map
