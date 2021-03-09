import{c as e}from"./createInput-5893fb83.js"
import{c as t}from"./createLabel-f7e750ad.js"
import{y as o,f as s,t as r,V as a}from"./calfSystem-dfa26790.js"
import{i as n}from"./insertElementBefore-9e5d02cd.js"
function f(o){o.parentNode.classList.add("fshCompressor"),function(t){const o=n(e({id:"fshCompressToggle",type:"checkbox"}),t)
s(o,"change",r(a,"bio","toggle"))}(o),n(t({className:"sendLink",htmlFor:"fshCompressToggle"}),o)}function c(){const e=o("profile-bio")
e&&e.clientHeight/function(e){const t=getComputedStyle(e)
return parseInt(t.getPropertyValue("font-size"),10)}(e)>10&&f(e)}export default c
//# sourceMappingURL=compressBio-52134185.js.map
