import{d as r}from"./dialog-d1c54012.js"
import{u as a}from"./calfSystem-34913441.js"
import{d as o}from"./daUseItem-d57bb3e8.js"
import{e as s}from"./errorDialog-91872536.js"
async function t(o){const s=await a({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1})
return r(s)}function i(r){return r?{...r,r:r.s?0:1}:r}async function n(r){const a=await o(r)
return s(a),i(a)}export{i as a,t as e,n as u}
//# sourceMappingURL=useItem-5c7e6ad3.js.map
