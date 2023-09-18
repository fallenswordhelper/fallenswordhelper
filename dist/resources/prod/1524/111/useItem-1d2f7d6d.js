import{d as r}from"./dialog-9896baf4.js"
import{u as a}from"./calfSystem-abb16b0d.js"
import{d as o}from"./daUseItem-bb43bd02.js"
import{e as s}from"./errorDialog-9e633a62.js"
async function t(o){const s=await a({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1})
return r(s)}function i(r){return r?{...r,r:r.s?0:1}:r}async function e(r){const a=await o(r)
return s(a),i(a)}export{i as a,t as e,e as u}
//# sourceMappingURL=useItem-1d2f7d6d.js.map
