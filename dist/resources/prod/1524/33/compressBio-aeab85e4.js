import{c as e}from"./createInput-d5428169.js"
import{c as t}from"./createLabel-505cb810.js"
import{y as o,f as s,t as r,V as a}from"./calfSystem-0708a9bb.js"
import{i as n}from"./insertElementBefore-0a7f2602.js"
function c(o){o.parentNode.classList.add("fshCompressor"),function(t){const o=n(e({id:"fshCompressToggle",type:"checkbox"}),t)
s(o,"change",r(a,"bio","toggle"))}(o),n(t({className:"sendLink",htmlFor:"fshCompressToggle"}),o)}function i(){const e=o("profile-bio")
e&&e.clientHeight/function(e){const t=getComputedStyle(e)
return parseInt(t.getPropertyValue("font-size"),10)}(e)>10&&c(e)}export default i
//# sourceMappingURL=compressBio-aeab85e4.js.map
