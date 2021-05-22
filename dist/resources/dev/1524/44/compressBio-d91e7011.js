import{c as e}from"./createInput-8f2d1a63.js"
import{c as t}from"./createLabel-bff122d0.js"
import{z as s,f as o,t as r,T as a}from"./calfSystem-f7cf24f6.js"
import{i as n}from"./insertElementBefore-7c440c87.js"
function f(s){s.parentNode.classList.add("fshCompressor"),function(t){const s=n(e({id:"fshCompressToggle",type:"checkbox"}),t)
o(s,"change",r(a,"bio","toggle"))}(s),n(t({className:"sendLink",htmlFor:"fshCompressToggle"}),s)}function c(){const e=s("profile-bio")
if(!e)return
const t=e.parentNode,{style:{display:o}}=t
t.style.display="block",e.clientHeight/function(e){const t=getComputedStyle(e)
return parseInt(t.getPropertyValue("font-size"),10)}(e)>10&&f(e),t.style.display=o}export default c
//# sourceMappingURL=compressBio-d91e7011.js.map
