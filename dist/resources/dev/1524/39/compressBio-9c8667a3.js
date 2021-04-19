import{c as e}from"./createInput-d7f942e4.js"
import{c as t}from"./createLabel-0603163a.js"
import{z as o,f as s,t as r,X as a}from"./calfSystem-b31aba65.js"
import{i as n}from"./insertElementBefore-68b894c4.js"
function c(o){o.parentNode.classList.add("fshCompressor"),function(t){const o=n(e({id:"fshCompressToggle",type:"checkbox"}),t)
s(o,"change",r(a,"bio","toggle"))}(o),n(t({className:"sendLink",htmlFor:"fshCompressToggle"}),o)}function i(){const e=o("profile-bio")
e&&e.clientHeight/function(e){const t=getComputedStyle(e)
return parseInt(t.getPropertyValue("font-size"),10)}(e)>10&&c(e)}export default i
//# sourceMappingURL=compressBio-9c8667a3.js.map
