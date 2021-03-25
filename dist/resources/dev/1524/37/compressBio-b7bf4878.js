import{c as e}from"./createInput-73c334d2.js"
import{c as t}from"./createLabel-9f14be20.js"
import{z as o,f as s,t as r,X as n}from"./calfSystem-5d0c721b.js"
import{i as c}from"./insertElementBefore-656c48d5.js"
function a(o){o.parentNode.classList.add("fshCompressor"),function(t){const o=c(e({id:"fshCompressToggle",type:"checkbox"}),t)
s(o,"change",r(n,"bio","toggle"))}(o),c(t({className:"sendLink",htmlFor:"fshCompressToggle"}),o)}function i(){const e=o("profile-bio")
e&&e.clientHeight/function(e){const t=getComputedStyle(e)
return parseInt(t.getPropertyValue("font-size"),10)}(e)>10&&a(e)}export default i
//# sourceMappingURL=compressBio-b7bf4878.js.map
