import{c as e}from"./createInput-a2c87173.js"
import{c as t}from"./createLabel-fec7fd21.js"
import{y as o,f as s,t as r,V as a}from"./calfSystem-c91a5c89.js"
import{i as c}from"./insertElementBefore-0a7f2602.js"
function n(o){o.parentNode.classList.add("fshCompressor"),function(t){const o=c(e({id:"fshCompressToggle",type:"checkbox"}),t)
s(o,"change",r(a,"bio","toggle"))}(o),c(t({className:"sendLink",htmlFor:"fshCompressToggle"}),o)}function f(){const e=o("profile-bio")
e&&e.clientHeight/function(e){const t=getComputedStyle(e)
return parseInt(t.getPropertyValue("font-size"),10)}(e)>10&&n(e)}export default f
//# sourceMappingURL=compressBio-97797c5b.js.map
