import{c as e}from"./createInput-464ad748.js"
import{c as t}from"./createLabel-08dca853.js"
import{z as s,f as o,t as a,S as r}from"./calfSystem-e1e858cd.js"
import{i as n}from"./insertElementBefore-c442a2a7.js"
function c(s){s.parentNode.classList.add("fshCompressor"),function(t){const s=n(e({id:"fshCompressToggle",type:"checkbox"}),t)
o(s,"change",a(r,"bio","toggle"))}(s),n(t({className:"sendLink",htmlFor:"fshCompressToggle"}),s)}function i(){const e=s("profile-bio")
if(!e)return
const t=e.parentNode,{style:{display:o}}=t
t.style.display="block",e.clientHeight/function(e){const t=getComputedStyle(e)
return parseInt(t.getPropertyValue("font-size"),10)}(e)>10&&c(e),t.style.display=o}export default i
//# sourceMappingURL=compressBio-19c27c71.js.map
