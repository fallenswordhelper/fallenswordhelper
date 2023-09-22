import{bX as e,b as t,c as a,aT as s,i as r,av as o,p as n,ae as c,bT as i,ad as l,q as m,a5 as f}from"./calfSystem-4830a18d.js"
import{c as p}from"./closestTable-082cc634.js"
import{a as u}from"./addLogColoring-7882f531.js"
import"./createStyle-79b7cdab.js"
import"./dataRows-ab26c2ce.js"
import"./doBuffLinkClick-416757d3.js"
import"./getPlayerId-283e8a7a.js"
import"./openQuickBuffById-8cca49b4.js"
import"./fshOpen-c0e91392.js"
import"./parseDateAsTimestamp-2956e520.js"
import"./dateUtc-36fb94b9.js"
function d(e){e.value=e.value.replace(/\r\n|\n|\r/g," ").replace(/'/g,"’").replace(/(?<a>^|\s)(?<b>")/g,"$1“").replace(/"/g,"”").replace("<","＜")}const h=e=>{e.setAttribute("form","dochat")}
function b(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),o(e))}function g(){const t=e("textarea",{className:"fshChatTextArea",maxLength:512,name:"msg",required:!0})
return h(t),t}const j=()=>!n()||1!==c("header",n()).filter(i("Posted By")).length||!l("enhanceChatTextEntry")
function y(){if(j())return
const e=document.forms[0]
!function(e){e.id="dochat",s(e.elements).forEach(h)}(e),function(e){const t=p(e[5])
t.rows[0].cells[0].remove(),r(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(e.elements)
const o=g()
t(o,"keypress",a(b,e.elements[5])),e.elements[4].replaceWith(o),t(e,"submit",a(d,o))}function C(){!function(){if(!l("wrapGuildChat"))return
const e=m("#pCC table table table table")
e&&e.classList.add("fshGc")}(),y()
const e=f("chat_type")
u(e&&"1"===e?"Leader":"Chat",0,3)}export{C as default}
//# sourceMappingURL=guildChat-0b3406e2.js.map
