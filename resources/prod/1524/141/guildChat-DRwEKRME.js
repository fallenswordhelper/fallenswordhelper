import{c7 as e,p as t,aj as a,c3 as s,ai as r,b0 as o,i as n,o as c,b as i,s as l,aP as m,q as f,aa as p}from"./calfSystem-Blt4DbaE.js"
import{c as u}from"./closestTable-Ddgm5m0P.js"
import{a as d}from"./addLogColoring-iZi4QL__.js"
import"./createStyle-C5mK_M_l.js"
import"./dataRows-B6_VtVvQ.js"
import"./doBuffLinkClick-CcIlwlsz.js"
import"./getPlayerId-Ck17Fcst.js"
import"./openQuickBuffById-AG7prqnJ.js"
import"./fshOpen-AuKioUPF.js"
import"./parseDateAsTimestamp-CKw0dWec.js"
import"./dateUtc-Cc3l2wc4.js"
function h(e){l("guildChat","removeCrlf"),e.value=e.value.replace(/\r\n|\n|\r/g," ").replace(/'/g,"’").replace(/(?<a>^|\s)(?<b>")/g,"$1“").replace(/"/g,"”").replace("<","＜")}const g=e=>{e.setAttribute("form","dochat")}
function j(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),l("guildChat","Enter sends message"),m(e))}function C(){const t=e("textarea",{className:"fshChatTextArea",maxLength:512,name:"msg",required:!0})
return g(t),t}const b=()=>!t()||1!==a("header",t()).filter(s("Posted By")).length||!r("enhanceChatTextEntry")
function y(){if(b())return
const e=document.forms[0]
!function(e){e.id="dochat",o(e.elements).forEach(g)}(e),function(e){const t=u(e[5])
t.rows[0].cells[0].remove(),n(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(e.elements)
const t=C()
c(t,"keypress",i(j,e.elements[5])),e.elements[4].replaceWith(t),c(e,"submit",i(h,t))}function w(){!function(){if(!r("wrapGuildChat"))return
const e=f("#pCC table table table table")
e&&e.classList.add("fshGc")}(),y()
const e=p("chat_type")
d(e&&"1"===e?"Leader":"Chat",0,3)}export{w as default}
//# sourceMappingURL=guildChat-DRwEKRME.js.map
