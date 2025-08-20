import{t as e,b as t,c as a,p as s,aA as r,cD as n,az as o,bu as c,i as l,s as i,bh as m,q as f,aq as u}from"./calfSystem-UyQ_FKFu.js"
import{c as p}from"./closestTable-DwwUFwTi.js"
import{a as d}from"./addLogColoring-B20bmBIe.js"
import"./createStyle-BGl-LDQE.js"
import"./doBuffLinkClick-CrNehDqU.js"
import"./parseDateAsTimestamp-uKlPe52O.js"
import"./dateUtc-DP8sjtiR.js"
function h(e){i("guildChat","removeCrlf"),e.value=e.value.replace(/\r\n|\n|\r/g," ").replace(/'/g,"’").replace(/(?<a>^|\s)(?<b>")/g,"$1“").replace(/"/g,"”").replace("<","＜")}const C=e=>{e.setAttribute("form","dochat")}
function g(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),i("guildChat","Enter sends message"),m(e))}function b(){const t=e("textarea",{className:"fshChatTextArea",maxLength:512,name:"msg",required:!0})
return C(t),t}function j(){if(!s()||1!==r("header",s()).filter(n("Posted By")).length||!o("enhanceChatTextEntry"))return
const e=document.forms[0]
!function(e){e.id="dochat",c(e.elements).forEach(C)}(e),function(e){const t=p(e[5])
t.rows[0].cells[0].remove(),l(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(e.elements)
const i=b()
t(i,"keypress",a(g,e.elements[5])),e.elements[4].replaceWith(i),t(e,"submit",a(h,i))}function y(){!function(){if(!o("wrapGuildChat"))return
const e=f("#pCC table table table table")
e&&e.classList.add("fshGc")}(),j()
const e=u("chat_type")
d(e&&"1"===e?"Leader":"Chat",0,3)}export{y as default}
//# sourceMappingURL=guildChat-CmEtiexe.js.map
