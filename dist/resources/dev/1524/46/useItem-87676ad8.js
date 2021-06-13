import{d as e}from"./dialog-16fed349.js"
import{i as r}from"./indexAjaxJson-00baab20.js"
import{d as o}from"./daUseItem-d6062c6c.js"
import{e as a}from"./errorDialog-2e0e2853.js"
function s(o){return r({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1}).then(e)}const t=e=>({...e,r:e.s?0:1})
function i(e){return o(e).then(a).then(t)}export{t as a,s as e,i as u}
//# sourceMappingURL=useItem-87676ad8.js.map
