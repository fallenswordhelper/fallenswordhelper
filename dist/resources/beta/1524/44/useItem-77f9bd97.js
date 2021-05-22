import{d as r}from"./dialog-e5c57349.js"
import{i as o}from"./indexAjaxJson-f3656c2a.js"
import{d as a}from"./daUseItem-aa7b1f89.js"
import{e}from"./errorDialog-48630d52.js"
function s(a){return o({cmd:"profile",subcmd:"equipitem",inventory_id:a,ajax:1}).then(r)}const t=r=>({...r,r:r.s?0:1})
function i(r){return a(r).then(e).then(t)}export{t as a,s as e,i as u}
//# sourceMappingURL=useItem-77f9bd97.js.map
