import{i as t}from"./inventory-ed909da9.js"
import{c as i}from"./createStyle-e8b661d2.js"
import{g as o,i as r,p as e}from"./calfSystem-34913441.js"
const a=({craft:t})=>"Perfect"===t,s=({forge:t})=>5!==t,n=({inv_id:t})=>`div[id$="-highlight-${t}"] {\n  background-color: rgba(255, 255, 0, 0.3);\n}`,f=t=>i(t.filter(a).filter(s).map(n).join("\n"))
function c(){o("hellforge-items")&&async function(){const i=await t()
i?.items&&r(e(),f(i.items))}()}export{c as default}
//# sourceMappingURL=hellforge-1ea481d1.js.map
