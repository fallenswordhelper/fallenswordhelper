import{b_ as e,b as t,c as a,aW as s,i as r,ax as o,p as n,ag as c,bW as i,af as l,q as f,a7 as m}from"./calfSystem-076d7a01.js"
import{c as p}from"./closestTable-3ad39b1c.js"
import{a as u}from"./addLogColoring-7b865162.js"
import"./createStyle-817f1cf1.js"
import"./dataRows-85549af1.js"
import"./doBuffLinkClick-b25be848.js"
import"./getPlayerId-118cd313.js"
import"./openQuickBuffById-6facec14.js"
import"./fshOpen-c0e91392.js"
import"./parseDateAsTimestamp-950daf66.js"
import"./dateUtc-ef343dff.js"
function d(e){e.value=e.value.replace(/\r\n|\n|\r/g," ").replace(/'/g,"’").replace(/(?<a>^|\s)(?<b>")/g,"$1“").replace(/"/g,"”").replace("<","＜")}const h=e=>{e.setAttribute("form","dochat")}
function g(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),o(e))}function b(){const t=e("textarea",{className:"fshChatTextArea",maxLength:512,name:"msg",required:!0})
return h(t),t}const j=()=>!n()||1!==c("header",n()).filter(i("Posted By")).length||!l("enhanceChatTextEntry")
function y(){if(j())return
const e=document.forms[0]
!function(e){e.id="dochat",s(e.elements).forEach(h)}(e),function(e){const t=p(e[5])
t.rows[0].cells[0].remove(),r(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(e.elements)
const o=b()
t(o,"keypress",a(g,e.elements[5])),e.elements[4].replaceWith(o),t(e,"submit",a(d,o))}function C(){!function(){if(!l("wrapGuildChat"))return
const e=f("#pCC table table table table")
e&&e.classList.add("fshGc")}(),y()
const e=m("chat_type")
u(e&&"1"===e?"Leader":"Chat",0,3)}export{C as default}
//# sourceMappingURL=guildChat-b3bef05c.js.map
