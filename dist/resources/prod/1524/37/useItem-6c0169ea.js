import{d as r}from"./dialog-8dd3ba22.js"
import{i as e}from"./indexAjaxJson-6bb34fec.js"
import{d as o}from"./daUseItem-45c213b7.js"
import{e as s}from"./errorDialog-dd9ceb95.js"
function t(o){return e({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1}).then(r)}const a=r=>({...r,r:r.s?0:1})
function i(r){return o(r).then(s).then(a)}export{a,t as e,i as u}
//# sourceMappingURL=useItem-6c0169ea.js.map
