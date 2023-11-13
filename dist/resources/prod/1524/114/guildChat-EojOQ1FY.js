import{bW as e,b as t,c as s,s as a,aS as r,i as n,av as o,p as c,ae as i,bS as l,ad as m,q as f,a5 as p}from"./calfSystem-rn9Rc_nF.js"
import{c as u}from"./closestTable-CpAyN3ci.js"
import{a as d}from"./addLogColoring-NIPJx-0B.js"
import"./createStyle-y4k9B6vH.js"
import"./dataRows-whWgu9nK.js"
import"./doBuffLinkClick-GZiEbyyh.js"
import"./getPlayerId-kFPa1sEG.js"
import"./openQuickBuffById-shBuZQr_.js"
import"./fshOpen-16hNCxKt.js"
import"./parseDateAsTimestamp-MCADjuC9.js"
import"./dateUtc-gwbMVfZM.js"
function h(e){a("guildChat","removeCrlf"),e.value=e.value.replace(/\r\n|\n|\r/g," ").replace(/'/g,"’").replace(/(?<a>^|\s)(?<b>")/g,"$1“").replace(/"/g,"”").replace("<","＜")}const g=e=>{e.setAttribute("form","dochat")}
function C(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),a("guildChat","Enter sends message"),o(e))}function b(){const t=e("textarea",{className:"fshChatTextArea",maxLength:512,name:"msg",required:!0})
return g(t),t}const j=()=>!c()||1!==i("header",c()).filter(l("Posted By")).length||!m("enhanceChatTextEntry")
function y(){if(j())return
const e=document.forms[0]
!function(e){e.id="dochat",r(e.elements).forEach(g)}(e),function(e){const t=u(e[5])
t.rows[0].cells[0].remove(),n(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(e.elements)
const a=b()
t(a,"keypress",s(C,e.elements[5])),e.elements[4].replaceWith(a),t(e,"submit",s(h,a))}function v(){!function(){if(!m("wrapGuildChat"))return
const e=f("#pCC table table table table")
e&&e.classList.add("fshGc")}(),y()
const e=p("chat_type")
d(e&&"1"===e?"Leader":"Chat",0,3)}export{v as default}
//# sourceMappingURL=guildChat-EojOQ1FY.js.map
