import{t as e,b as t,c as a,p as s,aA as r,cH as n,az as o,bw as c,i as l,s as i,bj as m,q as f,aq as u}from"./calfSystem-CIuUjh4H.js"
import{c as p}from"./closestTable-CAaKFM8t.js"
import{a as d}from"./addLogColoring-Cl_8Twpy.js"
import"./createStyle-Co3Q_8M9.js"
import"./doBuffLinkClick-9cS80RCX.js"
import"./parseDateAsTimestamp-hdeGukFZ.js"
function h(e){i("guildChat","removeCrlf"),e.value=e.value.replace(/\r\n|\n|\r/g," ").replace(/'/g,"’").replace(/(?<a>^|\s)(?<b>")/g,"$1“").replace(/"/g,"”").replace("<","＜")}const C=e=>{e.setAttribute("form","dochat")}
function g(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),i("guildChat","Enter sends message"),m(e))}function b(){const t=e("textarea",{className:"fshChatTextArea",maxLength:512,name:"msg",required:!0})
return C(t),t}function y(){if(!s()||1!==r("header",s()).filter(n("Posted By")).length||!o("enhanceChatTextEntry"))return
const e=document.forms[0]
!function(e){e.id="dochat",c(e.elements).forEach(C)}(e),function(e){const t=p(e[5])
t.rows[0].cells[0].remove(),l(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(e.elements)
const i=b()
t(i,"keypress",a(g,e.elements[5])),e.elements[4].replaceWith(i),t(e,"submit",a(h,i))}function j(){!function(){if(!o("wrapGuildChat"))return
const e=f("#pCC table table table table")
e&&e.classList.add("fshGc")}(),y()
const e=u("chat_type")
d(e&&"1"===e?"Leader":"Chat",0,3)}export{j as default}
//# sourceMappingURL=guildChat-FPYy3SJR.js.map
