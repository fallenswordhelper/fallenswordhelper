import{g as s,a5 as e,b as t,s as o,ay as a}from"./calfSystem-79LsojAC.js"
import{c as n}from"./createInput-7MlQDlWD.js"
import{c as r}from"./createLabel-CFBkgauW.js"
function c(s){s.parentNode.classList.add("fshCompressor"),function(s){const r=e(n({id:"fshCompressToggle",type:"checkbox"}),s)
t(r,"change",()=>o("bio","toggle",a.cmd))}(s),e(r({className:"sendLink",htmlFor:"fshCompressToggle"}),s)}function i(){const e=s("profile-bio")
if(!e)return
const t=e.parentNode,{style:{display:o}}=t
t.style.display="block",e.clientHeight/function(s){const e=getComputedStyle(s)
return parseInt(e.getPropertyValue("font-size"),10)}(e)>10&&c(e),t.style.display=o}export{i as default}
//# sourceMappingURL=compressBio-DFTbIewa.js.map
