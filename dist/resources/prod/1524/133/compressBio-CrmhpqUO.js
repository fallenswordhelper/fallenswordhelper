import{g as s,y as e,b as t,s as o,ag as a}from"./calfSystem-DKih1pr1.js"
import{c as r}from"./createInput-VVeCYc9A.js"
import{c as n}from"./createLabel-D7FcuNQk.js"
function c(s){s.parentNode.classList.add("fshCompressor"),function(s){const n=e(r({id:"fshCompressToggle",type:"checkbox"}),s)
t(n,"change",(()=>o("bio","toggle",a.cmd)))}(s),e(n({className:"sendLink",htmlFor:"fshCompressToggle"}),s)}function i(){const e=s("profile-bio")
if(!e)return
const t=e.parentNode,{style:{display:o}}=t
t.style.display="block",e.clientHeight/function(s){const e=getComputedStyle(s)
return parseInt(e.getPropertyValue("font-size"),10)}(e)>10&&c(e),t.style.display=o}export{i as default}
//# sourceMappingURL=compressBio-CrmhpqUO.js.map
