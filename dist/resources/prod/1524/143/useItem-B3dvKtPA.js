import{d as r}from"./dialog-BW-ZNw6R.js"
import{v as a}from"./calfSystem-ChzN4Q-P.js"
import{d as o}from"./daUseItem-T66yKS27.js"
import{e as s}from"./errorDialog-B4_TjdGG.js"
async function t(o){const s=await a({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1})
return r(s)}function i(r){return r?{...r,r:r.s?0:1}:r}async function n(r){const a=await o(r)
return s(a),i(a)}export{i as a,t as e,n as u}
//# sourceMappingURL=useItem-B3dvKtPA.js.map
