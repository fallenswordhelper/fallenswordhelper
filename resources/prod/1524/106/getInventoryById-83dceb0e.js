import{f as s}from"./calfSystem-076d7a01.js"
import{g as t}from"./getInventory-f6a60dce.js"
async function e(){const e=await t()
return e?.items?{items:{...s((i=e).items.map((s=>[s.inv_id,s]))),...i.items.filter((s=>s.is_in_st)).length&&{fshHasST:!0}},folders:i.folders}:e
var i}export{e as g}
//# sourceMappingURL=getInventoryById-83dceb0e.js.map
