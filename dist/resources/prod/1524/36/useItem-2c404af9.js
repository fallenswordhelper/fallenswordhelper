import{d as e}from"./dialog-92c3ed6b.js"
import{i as r}from"./indexAjaxJson-9da74e49.js"
import{d as o}from"./daUseItem-e18dc58e.js"
import{e as a}from"./errorDialog-db13a69a.js"
function s(o){return r({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1}).then(e)}const t=e=>({...e,r:e.s?0:1})
function i(e){return o(e).then(a).then(t)}export{t as a,s as e,i as u}
//# sourceMappingURL=useItem-2c404af9.js.map
