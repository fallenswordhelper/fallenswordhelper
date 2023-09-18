import{bY as e,b as t,c as a,aU as s,i as r,aw as o,p as n,af as c,bU as i,ae as l,q as f,a6 as m}from"./calfSystem-abb16b0d.js"
import{c as p}from"./closestTable-deb533c1.js"
import{a as u}from"./addLogColoring-58c8c79a.js"
import"./createStyle-deebe923.js"
import"./dataRows-bd1bd3ba.js"
import"./doBuffLinkClick-7dc66a3f.js"
import"./getPlayerId-10b4174c.js"
import"./openQuickBuffById-d429c2bc.js"
import"./fshOpen-c0e91392.js"
import"./parseDateAsTimestamp-3a661722.js"
import"./dateUtc-3fa03023.js"
function d(e){e.value=e.value.replace(/\r\n|\n|\r/g," ").replace(/'/g,"’").replace(/(?<a>^|\s)(?<b>")/g,"$1“").replace(/"/g,"”").replace("<","＜")}const h=e=>{e.setAttribute("form","dochat")}
function b(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),o(e))}function j(){const t=e("textarea",{className:"fshChatTextArea",maxLength:512,name:"msg",required:!0})
return h(t),t}const g=()=>!n()||1!==c("header",n()).filter(i("Posted By")).length||!l("enhanceChatTextEntry")
function y(){if(g())return
const e=document.forms[0]
!function(e){e.id="dochat",s(e.elements).forEach(h)}(e),function(e){const t=p(e[5])
t.rows[0].cells[0].remove(),r(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(e.elements)
const o=j()
t(o,"keypress",a(b,e.elements[5])),e.elements[4].replaceWith(o),t(e,"submit",a(d,o))}function C(){!function(){if(!l("wrapGuildChat"))return
const e=f("#pCC table table table table")
e&&e.classList.add("fshGc")}(),y()
const e=m("chat_type")
u(e&&"1"===e?"Leader":"Chat",0,3)}export{C as default}
//# sourceMappingURL=guildChat-871f6bcb.js.map
