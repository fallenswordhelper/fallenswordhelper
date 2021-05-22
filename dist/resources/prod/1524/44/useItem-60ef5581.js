import{d as r}from"./dialog-e5c57349.js"
import{i as e}from"./indexAjaxJson-d462ea95.js"
import{d as o}from"./daUseItem-2f8bc6fc.js"
import{e as s}from"./errorDialog-48630d52.js"
function t(o){return e({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1}).then(r)}const a=r=>({...r,r:r.s?0:1})
function i(r){return o(r).then(s).then(a)}export{a,t as e,i as u}
//# sourceMappingURL=useItem-60ef5581.js.map
