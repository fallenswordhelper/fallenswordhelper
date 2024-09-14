import{c7 as e,b as t,c as s,s as a,b0 as r,i as n,aC as o,p as c,aj as i,c3 as l,ai as m,q as f,aa as p}from"./calfSystem-Dh7h0wep.js"
import{c as u}from"./closestTable-GQaGhe9b.js"
import{a as d}from"./addLogColoring-BJSVYaIC.js"
import"./createStyle-BWnfhOi_.js"
import"./dataRows-DfKHja_m.js"
import"./doBuffLinkClick-BuLH1amZ.js"
import"./getPlayerId-CXL5hEJJ.js"
import"./openQuickBuffById-D8hqbsLO.js"
import"./fshOpen-AuKioUPF.js"
import"./parseDateAsTimestamp-BEDXY1VW.js"
import"./dateUtc-C5pIP8it.js"
function h(e){a("guildChat","removeCrlf"),e.value=e.value.replace(/\r\n|\n|\r/g," ").replace(/'/g,"’").replace(/(?<a>^|\s)(?<b>")/g,"$1“").replace(/"/g,"”").replace("<","＜")}const g=e=>{e.setAttribute("form","dochat")}
function C(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),a("guildChat","Enter sends message"),o(e))}function j(){const t=e("textarea",{className:"fshChatTextArea",maxLength:512,name:"msg",required:!0})
return g(t),t}const b=()=>!c()||1!==i("header",c()).filter(l("Posted By")).length||!m("enhanceChatTextEntry")
function y(){if(b())return
const e=document.forms[0]
!function(e){e.id="dochat",r(e.elements).forEach(g)}(e),function(e){const t=u(e[5])
t.rows[0].cells[0].remove(),n(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(e.elements)
const a=j()
t(a,"keypress",s(C,e.elements[5])),e.elements[4].replaceWith(a),t(e,"submit",s(h,a))}function w(){!function(){if(!m("wrapGuildChat"))return
const e=f("#pCC table table table table")
e&&e.classList.add("fshGc")}(),y()
const e=p("chat_type")
d(e&&"1"===e?"Leader":"Chat",0,3)}export{w as default}
//# sourceMappingURL=guildChat-BzN8hOnE.js.map
