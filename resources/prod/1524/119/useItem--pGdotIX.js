import{d as r}from"./dialog-BW-ZNw6R.js"
import{u as a}from"./calfSystem-Bit7wh4p.js"
import{d as o}from"./daUseItem-D5o0jT03.js"
import{e as s}from"./errorDialog-B4_TjdGG.js"
async function t(o){const s=await a({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1})
return r(s)}function i(r){return r?{...r,r:r.s?0:1}:r}async function n(r){const a=await o(r)
return s(a),i(a)}export{i as a,t as e,n as u}
//# sourceMappingURL=useItem--pGdotIX.js.map
