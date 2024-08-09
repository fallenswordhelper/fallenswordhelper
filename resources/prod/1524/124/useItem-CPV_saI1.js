import{d as r}from"./dialog-BW-ZNw6R.js"
import{u as a}from"./calfSystem-0LeC9ahe.js"
import{d as o}from"./daUseItem-1OAgs9b1.js"
import{e as s}from"./errorDialog-B4_TjdGG.js"
async function t(o){const s=await a({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1})
return r(s)}function i(r){return r?{...r,r:r.s?0:1}:r}async function e(r){const a=await o(r)
return s(a),i(a)}export{i as a,t as e,e as u}
//# sourceMappingURL=useItem-CPV_saI1.js.map
