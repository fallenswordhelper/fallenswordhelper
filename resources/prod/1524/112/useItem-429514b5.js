import{d as r}from"./dialog-9896baf4.js"
import{u as a}from"./calfSystem-4830a18d.js"
import{d as o}from"./daUseItem-9fccc07b.js"
import{e as s}from"./errorDialog-9e633a62.js"
async function t(o){const s=await a({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1})
return r(s)}function i(r){return r?{...r,r:r.s?0:1}:r}async function n(r){const a=await o(r)
return s(a),i(a)}export{i as a,t as e,n as u}
//# sourceMappingURL=useItem-429514b5.js.map
