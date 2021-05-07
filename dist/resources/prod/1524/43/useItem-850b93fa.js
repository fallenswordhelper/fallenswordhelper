import{d as e}from"./dialog-de7a7b58.js"
import{i as r}from"./indexAjaxJson-21b8f9a5.js"
import{d as o}from"./daUseItem-46bcfe13.js"
import{e as a}from"./errorDialog-0f2ff56e.js"
function s(o){return r({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1}).then(e)}const t=e=>({...e,r:e.s?0:1})
function i(e){return o(e).then(a).then(t)}export{t as a,s as e,i as u}
//# sourceMappingURL=useItem-850b93fa.js.map
