import{d as e}from"./dialog-25c9de65.js"
import{i as r}from"./indexAjaxJson-6eadb7fa.js"
import{d as o}from"./daUseItem-4c6094ef.js"
import{e as a}from"./errorDialog-0a862506.js"
function s(o){return r({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1}).then(e)}const t=e=>({...e,r:e.s?0:1})
function i(e){return o(e).then(a).then(t)}export{t as a,s as e,i as u}
//# sourceMappingURL=useItem-5f9a4fce.js.map
