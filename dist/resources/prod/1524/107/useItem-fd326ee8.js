import{d as r}from"./dialog-9896baf4.js"
import{u as a}from"./calfSystem-2fff342b.js"
import{d as o}from"./daUseItem-7c37c6b1.js"
import{e as s}from"./errorDialog-91872536.js"
async function t(o){const s=await a({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1})
return r(s)}function i(r){return r?{...r,r:r.s?0:1}:r}async function n(r){const a=await o(r)
return s(a),i(a)}export{i as a,t as e,n as u}
//# sourceMappingURL=useItem-fd326ee8.js.map
