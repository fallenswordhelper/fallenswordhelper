import{c as e}from"./createInput-a08cdf48.js"
import{c as t}from"./createLabel-43a0f7dc.js"
import{y as o,f as s,t as r,W as a}from"./calfSystem-c07e3259.js"
import{i as c}from"./insertElementBefore-9e5d02cd.js"
function n(o){o.parentNode.classList.add("fshCompressor"),function(t){const o=c(e({id:"fshCompressToggle",type:"checkbox"}),t)
s(o,"change",r(a,"bio","toggle"))}(o),c(t({className:"sendLink",htmlFor:"fshCompressToggle"}),o)}function f(){const e=o("profile-bio")
e&&e.clientHeight/function(e){const t=getComputedStyle(e)
return parseInt(t.getPropertyValue("font-size"),10)}(e)>10&&n(e)}export default f
//# sourceMappingURL=compressBio-bdcf7012.js.map
