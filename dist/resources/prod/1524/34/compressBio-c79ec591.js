import{c as e}from"./createInput-9733446a.js"
import{c as t}from"./createLabel-c606cd5f.js"
import{y as o,f as s,t as r,V as a}from"./calfSystem-793da633.js"
import{i as n}from"./insertElementBefore-9e5d02cd.js"
function c(o){o.parentNode.classList.add("fshCompressor"),function(t){const o=n(e({id:"fshCompressToggle",type:"checkbox"}),t)
s(o,"change",r(a,"bio","toggle"))}(o),n(t({className:"sendLink",htmlFor:"fshCompressToggle"}),o)}function i(){const e=o("profile-bio")
e&&e.clientHeight/function(e){const t=getComputedStyle(e)
return parseInt(t.getPropertyValue("font-size"),10)}(e)>10&&c(e)}export default i
//# sourceMappingURL=compressBio-c79ec591.js.map
