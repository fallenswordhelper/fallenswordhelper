import{d as a}from"./dialog-DuiKsz8O.js"
import{a1 as r,ds as s}from"./calfSystem-CIuUjh4H.js"
import{e as o}from"./errorDialog-B4_TjdGG.js"
async function t(s){const o=await r({cmd:"profile",subcmd:"equipitem",inventory_id:s,ajax:1})
return a(o)}function i(a){return a?{...a,r:a.s?0:1}:a}async function n(a){const r=await s(a)
return o(r),i(r)}export{i as a,t as e,n as u}
//# sourceMappingURL=useItem-XI9x5qhd.js.map
