import{v as e,b as t,c as s,p as a,aC as r,cF as n,aB as o,bt as c,i as l,s as i,bg as m,q as f,as as p}from"./calfSystem-BlPuMQGT.js"
import{c as u}from"./closestTable-gY6pXvyq.js"
import{a as d}from"./addLogColoring-atkRL2SG.js"
import"./createStyle-Bc_hQFau.js"
import"./doBuffLinkClick-JOmJeMPh.js"
import"./parseDateAsTimestamp-DDAzvT6k.js"
import"./dateUtc-CCrQ3NXB.js"
function h(e){i("guildChat","removeCrlf"),e.value=e.value.replace(/\r\n|\n|\r/g," ").replace(/'/g,"’").replace(/(?<a>^|\s)(?<b>")/g,"$1“").replace(/"/g,"”").replace("<","＜")}const g=e=>{e.setAttribute("form","dochat")}
function C(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),i("guildChat","Enter sends message"),m(e))}function b(){const t=e("textarea",{className:"fshChatTextArea",maxLength:512,name:"msg",required:!0})
return g(t),t}const j=()=>!a()||1!==r("header",a()).filter(n("Posted By")).length||!o("enhanceChatTextEntry")
function y(){if(j())return
const e=document.forms[0]
!function(e){e.id="dochat",c(e.elements).forEach(g)}(e),function(e){const t=u(e[5])
t.rows[0].cells[0].remove(),l(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(e.elements)
const a=b()
t(a,"keypress",s(C,e.elements[5])),e.elements[4].replaceWith(a),t(e,"submit",s(h,a))}function v(){!function(){if(!o("wrapGuildChat"))return
const e=f("#pCC table table table table")
e&&e.classList.add("fshGc")}(),y()
const e=p("chat_type")
d(e&&"1"===e?"Leader":"Chat",0,3)}export{v as default}
//# sourceMappingURL=guildChat-DWF9y2Cs.js.map
