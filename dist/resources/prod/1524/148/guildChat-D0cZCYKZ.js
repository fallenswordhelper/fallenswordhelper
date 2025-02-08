import{cE as e,c as t,d as a,p as s,ar as r,cz as n,aq as o,bk as c,i as l,s as i,b7 as m,q as f,af as p}from"./calfSystem-BldO1y8X.js"
import{c as u}from"./closestTable-BUebhZUa.js"
import{a as d}from"./addLogColoring-wghj8vL2.js"
import"./createStyle-DKSmWjdQ.js"
import"./doBuffLinkClick-B9cHS8o0.js"
import"./parseDateAsTimestamp-CdrbxE6d.js"
import"./dateUtc-CzVkoZ5p.js"
function h(e){i("guildChat","removeCrlf"),e.value=e.value.replace(/\r\n|\n|\r/g," ").replace(/'/g,"’").replace(/(?<a>^|\s)(?<b>")/g,"$1“").replace(/"/g,"”").replace("<","＜")}const C=e=>{e.setAttribute("form","dochat")}
function g(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),i("guildChat","Enter sends message"),m(e))}function b(){const t=e("textarea",{className:"fshChatTextArea",maxLength:512,name:"msg",required:!0})
return C(t),t}const y=()=>!s()||1!==r("header",s()).filter(n("Posted By")).length||!o("enhanceChatTextEntry")
function j(){if(y())return
const e=document.forms[0]
!function(e){e.id="dochat",c(e.elements).forEach(C)}(e),function(e){const t=u(e[5])
t.rows[0].cells[0].remove(),l(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(e.elements)
const s=b()
t(s,"keypress",a(g,e.elements[5])),e.elements[4].replaceWith(s),t(e,"submit",a(h,s))}function k(){!function(){if(!o("wrapGuildChat"))return
const e=f("#pCC table table table table")
e&&e.classList.add("fshGc")}(),j()
const e=p("chat_type")
d(e&&"1"===e?"Leader":"Chat",0,3)}export{k as default}
//# sourceMappingURL=guildChat-D0cZCYKZ.js.map
