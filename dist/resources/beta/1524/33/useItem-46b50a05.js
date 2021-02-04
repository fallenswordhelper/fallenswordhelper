import{d as e}from"./dialog-fd1181f5.js"
import{i as r}from"./indexAjaxJson-6b76870e.js"
import{d as o}from"./daUseItem-ce6006de.js"
import{e as s}from"./errorDialog-998604da.js"
function t(o){return r({cmd:"profile",subcmd:"equipitem",inventory_id:o,ajax:1}).then(e)}const a=e=>({...e,r:e.s?0:1})
function i(e){return o(e).then(s).then(a)}export{a,t as e,i as u}
//# sourceMappingURL=useItem-46b50a05.js.map
