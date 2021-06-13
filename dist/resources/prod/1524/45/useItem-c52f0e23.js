import{d as r}from"./dialog-25c9de65.js"
import{i as e}from"./indexAjaxJson-fc55a4e0.js"
import{d as o}from"./daUseItem-0b8a6fd3.js"
import{e as a}from"./errorDialog-0a862506.js"
function s(o){return e({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1}).then(r)}const t=r=>({...r,r:r.s?0:1})
function i(r){return o(r).then(a).then(t)}export{t as a,s as e,i as u}
//# sourceMappingURL=useItem-c52f0e23.js.map
