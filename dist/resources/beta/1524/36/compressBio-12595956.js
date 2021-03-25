import{c as e}from"./createInput-7fa974b4.js"
import{c as t}from"./createLabel-7a009fa9.js"
import{z as o,f as s,t as a,W as r}from"./calfSystem-4a40365f.js"
import{i as n}from"./insertElementBefore-42a90ba9.js"
function f(o){o.parentNode.classList.add("fshCompressor"),function(t){const o=n(e({id:"fshCompressToggle",type:"checkbox"}),t)
s(o,"change",a(r,"bio","toggle"))}(o),n(t({className:"sendLink",htmlFor:"fshCompressToggle"}),o)}function i(){const e=o("profile-bio")
e&&e.clientHeight/function(e){const t=getComputedStyle(e)
return parseInt(t.getPropertyValue("font-size"),10)}(e)>10&&f(e)}export default i
//# sourceMappingURL=compressBio-12595956.js.map
