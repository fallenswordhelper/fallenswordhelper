import{d as a}from"./dialog-BW-ZNw6R.js"
import{u as r}from"./calfSystem-Blt4DbaE.js"
import{d as o}from"./daUseItem-CAXQaGUX.js"
import{e as s}from"./errorDialog-B4_TjdGG.js"
async function t(o){const s=await r({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1})
return a(s)}function i(a){return a?{...a,r:a.s?0:1}:a}async function n(a){const r=await o(a)
return s(r),i(r)}export{i as a,t as e,n as u}
//# sourceMappingURL=useItem-Dy_t3WSY.js.map
