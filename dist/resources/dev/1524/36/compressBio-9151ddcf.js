import{c as e}from"./createInput-c963dc21.js"
import{c as t}from"./createLabel-7969394e.js"
import{z as o,f as s,t as r,X as a}from"./calfSystem-eeb1d862.js"
import{i as n}from"./insertElementBefore-42a90ba9.js"
function c(o){o.parentNode.classList.add("fshCompressor"),function(t){const o=n(e({id:"fshCompressToggle",type:"checkbox"}),t)
s(o,"change",r(a,"bio","toggle"))}(o),n(t({className:"sendLink",htmlFor:"fshCompressToggle"}),o)}function i(){const e=o("profile-bio")
e&&e.clientHeight/function(e){const t=getComputedStyle(e)
return parseInt(t.getPropertyValue("font-size"),10)}(e)>10&&c(e)}export default i
//# sourceMappingURL=compressBio-9151ddcf.js.map
