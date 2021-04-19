import{c as e}from"./createInput-b457e181.js"
import{c as t}from"./createLabel-9a80b47c.js"
import{z as o,f as s,t as r,W as a}from"./calfSystem-26fbeaeb.js"
import{i as n}from"./insertElementBefore-68b894c4.js"
function c(o){o.parentNode.classList.add("fshCompressor"),function(t){const o=n(e({id:"fshCompressToggle",type:"checkbox"}),t)
s(o,"change",r(a,"bio","toggle"))}(o),n(t({className:"sendLink",htmlFor:"fshCompressToggle"}),o)}function i(){const e=o("profile-bio")
e&&e.clientHeight/function(e){const t=getComputedStyle(e)
return parseInt(t.getPropertyValue("font-size"),10)}(e)>10&&c(e)}export default i
//# sourceMappingURL=compressBio-346887ec.js.map
