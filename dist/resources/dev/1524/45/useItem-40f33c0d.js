import{d as r}from"./dialog-25c9de65.js"
import{i as o}from"./indexAjaxJson-c7dd57d3.js"
import{d as e}from"./daUseItem-d30513f8.js"
import{e as s}from"./errorDialog-0a862506.js"
function t(e){return o({cmd:"profile",subcmd:"equipitem",inventory_id:e,ajax:1}).then(r)}const a=r=>({...r,r:r.s?0:1})
function i(r){return e(r).then(s).then(a)}export{a,t as e,i as u}
//# sourceMappingURL=useItem-40f33c0d.js.map
