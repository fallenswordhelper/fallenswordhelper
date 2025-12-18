import{d as a}from"./dialog-BW-ZNw6R.js"
import{a2 as r,dt as t}from"./calfSystem-Cs6CSxoU.js"
import{e as o}from"./errorDialog-B4_TjdGG.js"
async function s(t){const o=await r({cmd:"profile",subcmd:"equipitem",inventory_id:t,ajax:1})
return a(o)}function i(a){return a?{...a,r:a.s?0:1}:a}async function n(a){const r=await t(a)
return o(r),i(r)}export{i as a,s as e,n as u}
//# sourceMappingURL=useItem-CVQLApUC.js.map
