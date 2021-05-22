import{c as e}from"./createInput-8922c2cd.js"
import{c as t}from"./createLabel-68fb1b3a.js"
import{z as s,f as o,t as r,S as a}from"./calfSystem-a8d582b6.js"
import{i as n}from"./insertElementBefore-7c440c87.js"
function c(s){s.parentNode.classList.add("fshCompressor"),function(t){const s=n(e({id:"fshCompressToggle",type:"checkbox"}),t)
o(s,"change",r(a,"bio","toggle"))}(s),n(t({className:"sendLink",htmlFor:"fshCompressToggle"}),s)}function i(){const e=s("profile-bio")
if(!e)return
const t=e.parentNode,{style:{display:o}}=t
t.style.display="block",e.clientHeight/function(e){const t=getComputedStyle(e)
return parseInt(t.getPropertyValue("font-size"),10)}(e)>10&&c(e),t.style.display=o}export default i
//# sourceMappingURL=compressBio-bd5edafc.js.map
