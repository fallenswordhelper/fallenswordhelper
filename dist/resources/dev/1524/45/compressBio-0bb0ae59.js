import{c as e}from"./createInput-9bf3eee1.js"
import{c as t}from"./createLabel-c7919725.js"
import{z as s,f as o,t as r,T as a}from"./calfSystem-6a3c85e0.js"
import{i as n}from"./insertElementBefore-c442a2a7.js"
function c(s){s.parentNode.classList.add("fshCompressor"),function(t){const s=n(e({id:"fshCompressToggle",type:"checkbox"}),t)
o(s,"change",r(a,"bio","toggle"))}(s),n(t({className:"sendLink",htmlFor:"fshCompressToggle"}),s)}function i(){const e=s("profile-bio")
if(!e)return
const t=e.parentNode,{style:{display:o}}=t
t.style.display="block",e.clientHeight/function(e){const t=getComputedStyle(e)
return parseInt(t.getPropertyValue("font-size"),10)}(e)>10&&c(e),t.style.display=o}export default i
//# sourceMappingURL=compressBio-0bb0ae59.js.map
