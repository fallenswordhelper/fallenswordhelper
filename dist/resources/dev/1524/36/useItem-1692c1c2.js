import{d as r}from"./dialog-92c3ed6b.js"
import{i as e}from"./indexAjaxJson-2deb257d.js"
import{d as o}from"./daUseItem-44d35487.js"
import{e as a}from"./errorDialog-db13a69a.js"
function s(o){return e({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1}).then(r)}const t=r=>({...r,r:r.s?0:1})
function i(r){return o(r).then(a).then(t)}export{t as a,s as e,i as u}
//# sourceMappingURL=useItem-1692c1c2.js.map
