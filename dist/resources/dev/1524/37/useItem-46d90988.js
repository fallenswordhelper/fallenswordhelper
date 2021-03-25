import{d as e}from"./dialog-8dd3ba22.js"
import{i as r}from"./indexAjaxJson-f1851d17.js"
import{d as o}from"./daUseItem-cd5efcde.js"
import{e as s}from"./errorDialog-dd9ceb95.js"
function t(o){return r({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1}).then(e)}const a=e=>({...e,r:e.s?0:1})
function d(e){return o(e).then(s).then(a)}export{a,t as e,d as u}
//# sourceMappingURL=useItem-46d90988.js.map
