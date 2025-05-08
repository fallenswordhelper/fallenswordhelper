import{d as r}from"./dialog-RW6TE77j.js"
import{u as a}from"./calfSystem-G1dN925O.js"
import{d as o}from"./daUseItem-swRkhdvl.js"
import{e as s}from"./errorDialog-UVurWbsP.js"
async function t(o){const s=await a({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1})
return r(s)}function i(r){return r?{...r,r:r.s?0:1}:r}async function e(r){const a=await o(r)
return s(a),i(a)}export{i as a,t as e,e as u}
//# sourceMappingURL=useItem-iOIoCAnH.js.map
