import{bY as e,b as t,c as a,aU as s,i as r,aw as o,p as n,af as c,bU as i,ae as l,q as f,a6 as m}from"./calfSystem-929ac228.js"
import{c as p}from"./closestTable-53e346f6.js"
import{a as u}from"./addLogColoring-9a965c15.js"
import"./createStyle-ebd85b35.js"
import"./dataRows-65a2024d.js"
import"./doBuffLinkClick-392873b7.js"
import"./getPlayerId-eb8178c0.js"
import"./openQuickBuffById-85e39f39.js"
import"./fshOpen-c0e91392.js"
import"./parseDateAsTimestamp-c49e9bdc.js"
import"./dateUtc-0fede27f.js"
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
//# sourceMappingURL=guildChat-99137aac.js.map
