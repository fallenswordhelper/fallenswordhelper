import{f as s}from"./calfSystem-34913441.js"
import{g as t}from"./getInventory-11b76fa4.js"
async function e(){const e=await t()
return e?.items?{items:{...s((i=e).items.map((s=>[s.inv_id,s]))),...i.items.filter((s=>s.is_in_st)).length&&{fshHasST:!0}},folders:i.folders}:e
var i}export{e as g}
//# sourceMappingURL=getInventoryById-8022c7f6.js.map
