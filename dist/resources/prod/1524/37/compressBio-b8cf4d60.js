import{c as e}from"./createInput-aabb8b6b.js"
import{c as t}from"./createLabel-12bc6589.js"
import{z as o,f as s,t as r,W as a}from"./calfSystem-60c20ae9.js"
import{i as n}from"./insertElementBefore-656c48d5.js"
function c(o){o.parentNode.classList.add("fshCompressor"),function(t){const o=n(e({id:"fshCompressToggle",type:"checkbox"}),t)
s(o,"change",r(a,"bio","toggle"))}(o),n(t({className:"sendLink",htmlFor:"fshCompressToggle"}),o)}function i(){const e=o("profile-bio")
e&&e.clientHeight/function(e){const t=getComputedStyle(e)
return parseInt(t.getPropertyValue("font-size"),10)}(e)>10&&c(e)}export default i
//# sourceMappingURL=compressBio-b8cf4d60.js.map
