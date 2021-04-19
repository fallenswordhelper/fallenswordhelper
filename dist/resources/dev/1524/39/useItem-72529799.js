import{d as r}from"./dialog-181309bb.js"
import{i as e}from"./indexAjaxJson-0fdc3cdc.js"
import{d as o}from"./daUseItem-25838544.js"
import{e as s}from"./errorDialog-e19553de.js"
function t(o){return e({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1}).then(r)}const i=r=>({...r,r:r.s?0:1})
function a(r){return o(r).then(s).then(i)}export{i as a,t as e,a as u}
//# sourceMappingURL=useItem-72529799.js.map
