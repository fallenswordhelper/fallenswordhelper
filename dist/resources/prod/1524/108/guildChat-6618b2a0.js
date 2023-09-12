import{b_ as e,b as t,c as a,aW as s,i as r,ax as o,p as n,ag as c,bW as i,af as l,q as f,a7 as m}from"./calfSystem-34913441.js"
import{c as p}from"./closestTable-c0c63085.js"
import{a as u}from"./addLogColoring-33fe539a.js"
import"./createStyle-e8b661d2.js"
import"./dataRows-380aff49.js"
import"./doBuffLinkClick-3a734a4b.js"
import"./getPlayerId-dc3d799c.js"
import"./openQuickBuffById-3914df94.js"
import"./fshOpen-c0e91392.js"
import"./parseDateAsTimestamp-de53e2f8.js"
import"./dateUtc-5241c4b3.js"
function d(e){e.value=e.value.replace(/\r\n|\n|\r/g," ").replace(/'/g,"’").replace(/(?<a>^|\s)(?<b>")/g,"$1“").replace(/"/g,"”").replace("<","＜")}const h=e=>{e.setAttribute("form","dochat")}
function b(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),o(e))}function g(){const t=e("textarea",{className:"fshChatTextArea",maxLength:512,name:"msg",required:!0})
return h(t),t}const j=()=>!n()||1!==c("header",n()).filter(i("Posted By")).length||!l("enhanceChatTextEntry")
function y(){if(j())return
const e=document.forms[0]
!function(e){e.id="dochat",s(e.elements).forEach(h)}(e),function(e){const t=p(e[5])
t.rows[0].cells[0].remove(),r(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(e.elements)
const o=g()
t(o,"keypress",a(b,e.elements[5])),e.elements[4].replaceWith(o),t(e,"submit",a(d,o))}function C(){!function(){if(!l("wrapGuildChat"))return
const e=f("#pCC table table table table")
e&&e.classList.add("fshGc")}(),y()
const e=m("chat_type")
u(e&&"1"===e?"Leader":"Chat",0,3)}export{C as default}
//# sourceMappingURL=guildChat-6618b2a0.js.map
