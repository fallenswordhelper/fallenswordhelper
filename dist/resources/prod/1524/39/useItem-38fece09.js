import{d as e}from"./dialog-181309bb.js"
import{i as r}from"./indexAjaxJson-6f85f3e9.js"
import{d as o}from"./daUseItem-3434c7fb.js"
import{e as s}from"./errorDialog-e19553de.js"
function t(o){return r({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1}).then(e)}const i=e=>({...e,r:e.s?0:1})
function a(e){return o(e).then(s).then(i)}export{i as a,t as e,a as u}
//# sourceMappingURL=useItem-38fece09.js.map
