import{c as e}from"./createInput-c2872ef0.js"
import{c as t}from"./createLabel-0200ecaf.js"
import{z as s,f as o,t as r,U as a}from"./calfSystem-3cb2f93e.js"
import{i as n}from"./insertElementBefore-23d4e956.js"
function c(s){s.parentNode.classList.add("fshCompressor"),function(t){const s=n(e({id:"fshCompressToggle",type:"checkbox"}),t)
o(s,"change",r(a,"bio","toggle"))}(s),n(t({className:"sendLink",htmlFor:"fshCompressToggle"}),s)}function i(){const e=s("profile-bio")
if(!e)return
const t=e.parentNode,{style:{display:o}}=t
t.style.display="block",e.clientHeight/function(e){const t=getComputedStyle(e)
return parseInt(t.getPropertyValue("font-size"),10)}(e)>10&&c(e),t.style.display=o}export default i
//# sourceMappingURL=compressBio-0e33a578.js.map
