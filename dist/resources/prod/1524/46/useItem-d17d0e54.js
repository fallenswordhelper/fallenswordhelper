import{d as e}from"./dialog-16fed349.js"
import{i as r}from"./indexAjaxJson-2cb21664.js"
import{d as o}from"./daUseItem-1efe0355.js"
import{e as s}from"./errorDialog-2e0e2853.js"
function t(o){return r({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1}).then(e)}const i=e=>({...e,r:e.s?0:1})
function a(e){return o(e).then(s).then(i)}export{i as a,t as e,a as u}
//# sourceMappingURL=useItem-d17d0e54.js.map
