import{c as e}from"./createInput-ef7d744f.js"
import{c as t}from"./createLabel-03f0c770.js"
import{y as o,f as s,t as r,W as f}from"./calfSystem-37f70deb.js"
import{i as n}from"./insertElementBefore-0a7f2602.js"
function a(o){o.parentNode.classList.add("fshCompressor"),function(t){const o=n(e({id:"fshCompressToggle",type:"checkbox"}),t)
s(o,"change",r(f,"bio","toggle"))}(o),n(t({className:"sendLink",htmlFor:"fshCompressToggle"}),o)}function c(){const e=o("profile-bio")
e&&e.clientHeight/function(e){const t=getComputedStyle(e)
return parseInt(t.getPropertyValue("font-size"),10)}(e)>10&&a(e)}export default c
//# sourceMappingURL=compressBio-1537e215.js.map
