import{t as e,b as t,c as a,p as s,aA as r,cB as n,az as o,bu as c,i as l,s as i,bh as m,q as f,aq as u}from"./calfSystem-CT1aM4VG.js"
import{c as p}from"./closestTable-C24mp168.js"
import{a as d}from"./addLogColoring-lIHtJWbW.js"
import"./createStyle-BtTqlvMl.js"
import"./doBuffLinkClick-DAfdDNPF.js"
import"./parseDateAsTimestamp-B5Csql9l.js"
import"./dateUtc-Bgvvwji4.js"
function h(e){i("guildChat","removeCrlf"),e.value=e.value.replace(/\r\n|\n|\r/g," ").replace(/'/g,"’").replace(/(?<a>^|\s)(?<b>")/g,"$1“").replace(/"/g,"”").replace("<","＜")}const g=e=>{e.setAttribute("form","dochat")}
function C(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),i("guildChat","Enter sends message"),m(e))}function b(){const t=e("textarea",{className:"fshChatTextArea",maxLength:512,name:"msg",required:!0})
return g(t),t}const y=()=>!s()||1!==r("header",s()).filter(n("Posted By")).length||!o("enhanceChatTextEntry")
function j(){if(y())return
const e=document.forms[0]
!function(e){e.id="dochat",c(e.elements).forEach(g)}(e),function(e){const t=p(e[5])
t.rows[0].cells[0].remove(),l(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(e.elements)
const s=b()
t(s,"keypress",a(C,e.elements[5])),e.elements[4].replaceWith(s),t(e,"submit",a(h,s))}function k(){!function(){if(!o("wrapGuildChat"))return
const e=f("#pCC table table table table")
e&&e.classList.add("fshGc")}(),j()
const e=u("chat_type")
d(e&&"1"===e?"Leader":"Chat",0,3)}export{k as default}
//# sourceMappingURL=guildChat-Cbv_p1aX.js.map
