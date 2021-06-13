import{d as e}from"./dialog-16fed349.js"
import{i as r}from"./indexAjaxJson-167a69fe.js"
import{d as o}from"./daUseItem-8440dbe6.js"
import{e as s}from"./errorDialog-2e0e2853.js"
function t(o){return r({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1}).then(e)}const a=e=>({...e,r:e.s?0:1})
function i(e){return o(e).then(s).then(a)}export{a,t as e,i as u}
//# sourceMappingURL=useItem-8923ece9.js.map
