import{d as e}from"./dialog-a123f46e.js"
import{i as r}from"./indexAjaxJson-3825eadb.js"
import{d as a}from"./daUseItem-cce892af.js"
import{e as o}from"./errorDialog-da819f92.js"
function s(a){return r({cmd:"profile",subcmd:"equipitem",inventory_id:a,ajax:1}).then(e)}const t=e=>({...e,r:e.s?0:1})
function i(e){return a(e).then(o).then(t)}export{t as a,s as e,i as u}
//# sourceMappingURL=useItem-b408b695.js.map
