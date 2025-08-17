import{d as a}from"./dialog-CiSCF2So.js"
import{a0 as r,dD as o}from"./calfSystem-CT1aM4VG.js"
import{e as s}from"./errorDialog-B4_TjdGG.js"
async function t(o){const s=await r({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1})
return a(s)}function i(a){return a?{...a,r:a.s?0:1}:a}async function n(a){const r=await o(a)
return s(r),i(r)}export{i as a,t as e,n as u}
//# sourceMappingURL=useItem-CEP4zgNs.js.map
