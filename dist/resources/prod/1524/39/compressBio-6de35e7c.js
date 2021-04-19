import{c as e}from"./createInput-58fc2e41.js"
import{c as t}from"./createLabel-6833e4c3.js"
import{z as o,f as s,t as r,W as n}from"./calfSystem-fe534823.js"
import{i as c}from"./insertElementBefore-68b894c4.js"
function a(o){o.parentNode.classList.add("fshCompressor"),function(t){const o=c(e({id:"fshCompressToggle",type:"checkbox"}),t)
s(o,"change",r(n,"bio","toggle"))}(o),c(t({className:"sendLink",htmlFor:"fshCompressToggle"}),o)}function f(){const e=o("profile-bio")
e&&e.clientHeight/function(e){const t=getComputedStyle(e)
return parseInt(t.getPropertyValue("font-size"),10)}(e)>10&&a(e)}export default f
//# sourceMappingURL=compressBio-6de35e7c.js.map
