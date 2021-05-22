import{d as e}from"./dialog-e5c57349.js"
import{i as r}from"./indexAjaxJson-57024e17.js"
import{d as o}from"./daUseItem-d0b7e8f3.js"
import{e as s}from"./errorDialog-48630d52.js"
function t(o){return r({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1}).then(e)}const i=e=>({...e,r:e.s?0:1})
function a(e){return o(e).then(s).then(i)}export{i as a,t as e,a as u}
//# sourceMappingURL=useItem-7c9db1f8.js.map
