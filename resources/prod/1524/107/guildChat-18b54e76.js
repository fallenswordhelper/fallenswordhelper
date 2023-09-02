import{b_ as e,b as t,c as a,aW as s,i as r,ax as o,p as n,ag as c,bW as i,af as l,q as f,a7 as m}from"./calfSystem-2fff342b.js"
import{c as p}from"./closestTable-2060ed27.js"
import{a as u}from"./addLogColoring-cb056011.js"
import"./createStyle-c9b61b3f.js"
import"./dataRows-1cc13a27.js"
import"./doBuffLinkClick-91c3425e.js"
import"./getPlayerId-1e376753.js"
import"./openQuickBuffById-a2b81ae2.js"
import"./fshOpen-c0e91392.js"
import"./parseDateAsTimestamp-2810897e.js"
import"./dateUtc-ae062737.js"
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
//# sourceMappingURL=guildChat-18b54e76.js.map
