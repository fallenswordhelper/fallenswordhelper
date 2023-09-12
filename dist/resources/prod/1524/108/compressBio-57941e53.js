import{g as e,y as s,b as t,n as o}from"./calfSystem-34913441.js"
import{c as a}from"./createInput-4ae8777b.js"
import{c as n}from"./createLabel-91e7de95.js"
function r(e){e.parentNode.classList.add("fshCompressor"),function(e){const n=s(a({id:"fshCompressToggle",type:"checkbox"}),e)
t(n,"change",(()=>o("bio","toggle")))}(e),s(n({className:"sendLink",htmlFor:"fshCompressToggle"}),e)}function c(){const s=e("profile-bio")
if(!s)return
const t=s.parentNode,{style:{display:o}}=t
t.style.display="block",s.clientHeight/function(e){const s=getComputedStyle(e)
return parseInt(s.getPropertyValue("font-size"),10)}(s)>10&&r(s),t.style.display=o}export{c as default}
//# sourceMappingURL=compressBio-57941e53.js.map
