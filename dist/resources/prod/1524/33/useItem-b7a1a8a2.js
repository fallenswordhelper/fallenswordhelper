import{d as r}from"./dialog-fd1181f5.js"
import{i as e}from"./indexAjaxJson-7132e6ef.js"
import{d as o}from"./daUseItem-25139640.js"
import{e as s}from"./errorDialog-998604da.js"
function t(o){return e({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1}).then(r)}const a=r=>({...r,r:r.s?0:1})
function i(r){return o(r).then(s).then(a)}export{a,t as e,i as u}
//# sourceMappingURL=useItem-b7a1a8a2.js.map
