import{f as s}from"./calfSystem-2fff342b.js"
import{g as t}from"./getInventory-61ab9f2e.js"
async function e(){const e=await t()
return e?.items?{items:{...s((i=e).items.map((s=>[s.inv_id,s]))),...i.items.filter((s=>s.is_in_st)).length&&{fshHasST:!0}},folders:i.folders}:e
var i}export{e as g}
//# sourceMappingURL=getInventoryById-1b7626e5.js.map
