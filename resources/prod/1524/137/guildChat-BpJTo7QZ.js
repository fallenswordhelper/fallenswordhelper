import{c7 as e,b as t,c as a,s,b0 as r,i as n,aO as o,p as c,aj as i,c3 as l,ai as m,q as f,aa as p}from"./calfSystem-DZGU7L1H.js"
import{c as u}from"./closestTable-l_-6Im5S.js"
import{a as d}from"./addLogColoring-Cat5rg0z.js"
import"./createStyle-CswKiwDd.js"
import"./dataRows-CG2gC4XM.js"
import"./doBuffLinkClick-DITtm5kV.js"
import"./getPlayerId-DHEPuklA.js"
import"./openQuickBuffById-o3Ofe8vo.js"
import"./fshOpen-AuKioUPF.js"
import"./parseDateAsTimestamp-CSNJMBXT.js"
import"./dateUtc-BkaqgLBt.js"
function h(e){s("guildChat","removeCrlf"),e.value=e.value.replace(/\r\n|\n|\r/g," ").replace(/'/g,"’").replace(/(?<a>^|\s)(?<b>")/g,"$1“").replace(/"/g,"”").replace("<","＜")}const g=e=>{e.setAttribute("form","dochat")}
function j(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),s("guildChat","Enter sends message"),o(e))}function C(){const t=e("textarea",{className:"fshChatTextArea",maxLength:512,name:"msg",required:!0})
return g(t),t}const b=()=>!c()||1!==i("header",c()).filter(l("Posted By")).length||!m("enhanceChatTextEntry")
function y(){if(b())return
const e=document.forms[0]
!function(e){e.id="dochat",r(e.elements).forEach(g)}(e),function(e){const t=u(e[5])
t.rows[0].cells[0].remove(),n(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(e.elements)
const s=C()
t(s,"keypress",a(j,e.elements[5])),e.elements[4].replaceWith(s),t(e,"submit",a(h,s))}function w(){!function(){if(!m("wrapGuildChat"))return
const e=f("#pCC table table table table")
e&&e.classList.add("fshGc")}(),y()
const e=p("chat_type")
d(e&&"1"===e?"Leader":"Chat",0,3)}export{w as default}
//# sourceMappingURL=guildChat-BpJTo7QZ.js.map
