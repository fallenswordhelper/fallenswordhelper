import{c7 as e,b as t,c as s,s as a,b0 as r,i as n,aC as o,p as c,aj as i,c3 as l,ai as m,q as f,aa as p}from"./calfSystem-B-q5dZfX.js"
import{c as u}from"./closestTable-C3GWfrIz.js"
import{a as d}from"./addLogColoring-BjJmi1TS.js"
import"./createStyle-DtnB7kMW.js"
import"./dataRows-DFpYQd_z.js"
import"./doBuffLinkClick-DHuiVkDR.js"
import"./getPlayerId-BA0Wro2c.js"
import"./openQuickBuffById-BbNgOwSb.js"
import"./fshOpen-AuKioUPF.js"
import"./parseDateAsTimestamp-gruI20kU.js"
import"./dateUtc-CK-gcgbV.js"
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
//# sourceMappingURL=guildChat-CRZ-YZ6x.js.map