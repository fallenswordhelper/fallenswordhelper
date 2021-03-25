import{d as r}from"./dialog-8dd3ba22.js"
import{i as e}from"./indexAjaxJson-6c7e44df.js"
import{d as o}from"./daUseItem-92175d3a.js"
import{e as a}from"./errorDialog-dd9ceb95.js"
function s(o){return e({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1}).then(r)}const t=r=>({...r,r:r.s?0:1})
function i(r){return o(r).then(a).then(t)}export{t as a,s as e,i as u}
//# sourceMappingURL=useItem-33ab66a6.js.map
