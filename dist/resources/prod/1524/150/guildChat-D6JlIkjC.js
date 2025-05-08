import{cE as e,c as t,e as a,p as s,ap as r,cy as n,ao as o,bk as c,i as l,s as i,b7 as m,q as f,ac as p}from"./calfSystem-BGOTz8de.js"
import{c as u}from"./closestTable-DjvmqHiL.js"
import{a as d}from"./addLogColoring-DSat2nGC.js"
import"./createStyle-dPu6vqqt.js"
import"./doBuffLinkClick-BhjFCunt.js"
import"./parseDateAsTimestamp-DRgS21SE.js"
import"./dateUtc-DrUNGodL.js"
function h(e){i("guildChat","removeCrlf"),e.value=e.value.replace(/\r\n|\n|\r/g," ").replace(/'/g,"’").replace(/(?<a>^|\s)(?<b>")/g,"$1“").replace(/"/g,"”").replace("<","＜")}const g=e=>{e.setAttribute("form","dochat")}
function C(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),i("guildChat","Enter sends message"),m(e))}function b(){const t=e("textarea",{className:"fshChatTextArea",maxLength:512,name:"msg",required:!0})
return g(t),t}const y=()=>!s()||1!==r("header",s()).filter(n("Posted By")).length||!o("enhanceChatTextEntry")
function j(){if(y())return
const e=document.forms[0]
!function(e){e.id="dochat",c(e.elements).forEach(g)}(e),function(e){const t=u(e[5])
t.rows[0].cells[0].remove(),l(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(e.elements)
const s=b()
t(s,"keypress",a(C,e.elements[5])),e.elements[4].replaceWith(s),t(e,"submit",a(h,s))}function k(){!function(){if(!o("wrapGuildChat"))return
const e=f("#pCC table table table table")
e&&e.classList.add("fshGc")}(),j()
const e=p("chat_type")
d(e&&"1"===e?"Leader":"Chat",0,3)}export{k as default}
//# sourceMappingURL=guildChat-D6JlIkjC.js.map
