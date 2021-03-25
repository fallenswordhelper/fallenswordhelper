import{c as e}from"./createInput-9311ddf5.js"
import{c as t}from"./createLabel-98048ff2.js"
import{z as o,f as s,t as r,W as n}from"./calfSystem-cb2a6f39.js"
import{i as a}from"./insertElementBefore-656c48d5.js"
function f(o){o.parentNode.classList.add("fshCompressor"),function(t){const o=a(e({id:"fshCompressToggle",type:"checkbox"}),t)
s(o,"change",r(n,"bio","toggle"))}(o),a(t({className:"sendLink",htmlFor:"fshCompressToggle"}),o)}function c(){const e=o("profile-bio")
e&&e.clientHeight/function(e){const t=getComputedStyle(e)
return parseInt(t.getPropertyValue("font-size"),10)}(e)>10&&f(e)}export default c
//# sourceMappingURL=compressBio-5433af1c.js.map
