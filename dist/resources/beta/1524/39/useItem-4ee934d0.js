import{d as r}from"./dialog-181309bb.js"
import{i as e}from"./indexAjaxJson-0408c27b.js"
import{d as o}from"./daUseItem-3ca01558.js"
import{e as s}from"./errorDialog-e19553de.js"
function t(o){return e({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1}).then(r)}const a=r=>({...r,r:r.s?0:1})
function i(r){return o(r).then(s).then(a)}export{a,t as e,i as u}
//# sourceMappingURL=useItem-4ee934d0.js.map
