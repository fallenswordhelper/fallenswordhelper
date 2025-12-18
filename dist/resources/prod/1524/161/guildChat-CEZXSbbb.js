import{u as e,b as t,c as a,p as s,aB as r,cH as n,aA as o,bz as l,i as c,s as i,bm as m,q as f,ar as u}from"./calfSystem-Cs6CSxoU.js"
import{c as h}from"./closestTable-CWRa1z_C.js"
import{a as p}from"./addLogColoring-CUchhJrM.js"
import"./createStyle-SGEMbHV8.js"
import"./doBuffLinkClick-DNrm0IYj.js"
import"./parseDateAsTimestamp-DIsrnFMo.js"
function d(e){i("guildChat","removeCrlf"),e.value=e.value.replace(/\r\n|\n|\r/g," ").replace(/'/g,"’").replace(/(?<a>^|\s)(?<b>")/g,"$1“").replace(/"/g,"”").replace("<","＜")}const g=e=>{e.setAttribute("form","dochat")}
function C(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),i("guildChat","Enter sends message"),m(e))}function b(){const t=e("textarea",{className:"fshChatTextArea",maxLength:512,name:"msg",required:!0})
return g(t),t}function y(){if(!s()||1!==r("header",s()).filter(n("Posted By")).length||!o("enhanceChatTextEntry"))return
const e=document.forms[0]
!function(e){e.id="dochat",l(e.elements).forEach(g)}(e),function(e){const t=h(e[5])
t.rows[0].cells[0].remove(),c(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(e.elements)
const i=b()
t(i,"keypress",a(C,e.elements[5])),e.elements[4].replaceWith(i),t(e,"submit",a(d,i))}function j(){y(),function(){const e=f("#pCC table table table table")
if(!e)return
const t="1"===u("chat_type")?"Leader":"Chat",a=e.rows[0].cells.length
p(t,0,a)
const s=3===a?"fsh-guild-chat":"fsh-guild-chat-action"
o("wrapGuildChat")&&e.classList.add(s)}()}export{j as default}
//# sourceMappingURL=guildChat-CEZXSbbb.js.map
