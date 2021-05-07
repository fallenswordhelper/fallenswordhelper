import{d as r}from"./dialog-de7a7b58.js"
import{i as e}from"./indexAjaxJson-7770951b.js"
import{d as o}from"./daUseItem-310b10b5.js"
import{e as s}from"./errorDialog-0f2ff56e.js"
function t(o){return e({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1}).then(r)}const a=r=>({...r,r:r.s?0:1})
function i(r){return o(r).then(s).then(a)}export{a,t as e,i as u}
//# sourceMappingURL=useItem-7f81d404.js.map
