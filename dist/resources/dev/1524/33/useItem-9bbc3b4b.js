import{d as r}from"./dialog-fd1181f5.js"
import{i as o}from"./indexAjaxJson-82f32240.js"
import{d as e}from"./daUseItem-ad5be037.js"
import{e as a}from"./errorDialog-998604da.js"
function s(e){return o({cmd:"profile",subcmd:"equipitem",inventory_id:e,ajax:1}).then(r)}const t=r=>({...r,r:r.s?0:1})
function i(r){return e(r).then(a).then(t)}export{t as a,s as e,i as u}
//# sourceMappingURL=useItem-9bbc3b4b.js.map
