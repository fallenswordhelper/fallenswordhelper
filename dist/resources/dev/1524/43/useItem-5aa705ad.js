import{d as r}from"./dialog-de7a7b58.js"
import{i as e}from"./indexAjaxJson-a55a7596.js"
import{d as o}from"./daUseItem-2c7c16fb.js"
import{e as a}from"./errorDialog-0f2ff56e.js"
function s(o){return e({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1}).then(r)}const t=r=>({...r,r:r.s?0:1})
function i(r){return o(r).then(a).then(t)}export{t as a,s as e,i as u}
//# sourceMappingURL=useItem-5aa705ad.js.map
