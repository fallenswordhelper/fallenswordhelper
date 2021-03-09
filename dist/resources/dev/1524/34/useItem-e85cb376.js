import{d as a}from"./dialog-a123f46e.js"
import{i as r}from"./indexAjaxJson-18a12ea8.js"
import{d as e}from"./daUseItem-a70d8a81.js"
import{e as o}from"./errorDialog-da819f92.js"
function s(e){return r({cmd:"profile",subcmd:"equipitem",inventory_id:e,ajax:1}).then(a)}const t=a=>({...a,r:a.s?0:1})
function i(a){return e(a).then(o).then(t)}export{t as a,s as e,i as u}
//# sourceMappingURL=useItem-e85cb376.js.map
