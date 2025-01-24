import{cB as e,b as t,c as a,s,bj as r,i as n,b4 as o,p as c,ap as l,cw as i,ao as m,q as f,ae as p}from"./calfSystem-CvwhhJv4.js"
import{c as u}from"./closestTable-DA5PEIxg.js"
import{a as d}from"./addLogColoring-B9xicXy5.js"
import"./createStyle-C59SxshO.js"
import"./dataRows-DV8H12Ga.js"
import"./doBuffLinkClick-Zv_s4oiW.js"
import"./parseDateAsTimestamp-BbFrd8v4.js"
import"./dateUtc-BV5e7HIy.js"
function h(e){s("guildChat","removeCrlf"),e.value=e.value.replace(/\r\n|\n|\r/g," ").replace(/'/g,"’").replace(/(?<a>^|\s)(?<b>")/g,"$1“").replace(/"/g,"”").replace("<","＜")}const C=e=>{e.setAttribute("form","dochat")}
function g(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),s("guildChat","Enter sends message"),o(e))}function b(){const t=e("textarea",{className:"fshChatTextArea",maxLength:512,name:"msg",required:!0})
return C(t),t}const j=()=>!c()||1!==l("header",c()).filter(i("Posted By")).length||!m("enhanceChatTextEntry")
function y(){if(j())return
const e=document.forms[0]
!function(e){e.id="dochat",r(e.elements).forEach(C)}(e),function(e){const t=u(e[5])
t.rows[0].cells[0].remove(),n(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(e.elements)
const s=b()
t(s,"keypress",a(g,e.elements[5])),e.elements[4].replaceWith(s),t(e,"submit",a(h,s))}function w(){!function(){if(!m("wrapGuildChat"))return
const e=f("#pCC table table table table")
e&&e.classList.add("fshGc")}(),y()
const e=p("chat_type")
d(e&&"1"===e?"Leader":"Chat",0,3)}export{w as default}
//# sourceMappingURL=guildChat--uPW4GCm.js.map
