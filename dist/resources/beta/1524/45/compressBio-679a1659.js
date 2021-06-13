import{c as e}from"./createInput-90835289.js"
import{c as t}from"./createLabel-b56d4233.js"
import{z as s,f as o,t as a,S as r}from"./calfSystem-ae2e69af.js"
import{i as n}from"./insertElementBefore-c442a2a7.js"
function i(s){s.parentNode.classList.add("fshCompressor"),function(t){const s=n(e({id:"fshCompressToggle",type:"checkbox"}),t)
o(s,"change",a(r,"bio","toggle"))}(s),n(t({className:"sendLink",htmlFor:"fshCompressToggle"}),s)}function c(){const e=s("profile-bio")
if(!e)return
const t=e.parentNode,{style:{display:o}}=t
t.style.display="block",e.clientHeight/function(e){const t=getComputedStyle(e)
return parseInt(t.getPropertyValue("font-size"),10)}(e)>10&&i(e),t.style.display=o}export default c
//# sourceMappingURL=compressBio-679a1659.js.map
