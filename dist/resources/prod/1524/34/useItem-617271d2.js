import{d as a}from"./dialog-a123f46e.js"
import{i as r}from"./indexAjaxJson-bfa28533.js"
import{d as o}from"./daUseItem-88aa4daf.js"
import{e}from"./errorDialog-da819f92.js"
function s(o){return r({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1}).then(a)}const t=a=>({...a,r:a.s?0:1})
function i(a){return o(a).then(e).then(t)}export{t as a,s as e,i as u}
//# sourceMappingURL=useItem-617271d2.js.map
