import{d as r}from"./dialog-ewu4mmhi.js"
import{u as a}from"./calfSystem-rn9Rc_nF.js"
import{d as o}from"./daUseItem-s7ltE2Pg.js"
import{e as s}from"./errorDialog-UVurWbsP.js"
async function t(o){const s=await a({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1})
return r(s)}function i(r){return r?{...r,r:r.s?0:1}:r}async function n(r){const a=await o(r)
return s(a),i(a)}export{i as a,t as e,n as u}
//# sourceMappingURL=useItem-I0vjoV4R.js.map
