import{t as e,b as t,c as a,p as s,aB as r,cE as n,aA as o,bv as c,i as l,s as i,bi as m,q as f,ar as u}from"./calfSystem-79LsojAC.js"
import{c as p}from"./closestTable-BuyyntoH.js"
import{a as d}from"./addLogColoring-iTmZgx_R.js"
import"./createStyle-BdMrx8ah.js"
import"./doBuffLinkClick-BwOlpk8H.js"
import"./parseDateAsTimestamp-CfPUfnnR.js"
function h(e){i("guildChat","removeCrlf"),e.value=e.value.replace(/\r\n|\n|\r/g," ").replace(/'/g,"’").replace(/(?<a>^|\s)(?<b>")/g,"$1“").replace(/"/g,"”").replace("<","＜")}const g=e=>{e.setAttribute("form","dochat")}
function C(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),i("guildChat","Enter sends message"),m(e))}function b(){const t=e("textarea",{className:"fshChatTextArea",maxLength:512,name:"msg",required:!0})
return g(t),t}function y(){if(!s()||1!==r("header",s()).filter(n("Posted By")).length||!o("enhanceChatTextEntry"))return
const e=document.forms[0]
!function(e){e.id="dochat",c(e.elements).forEach(g)}(e),function(e){const t=p(e[5])
t.rows[0].cells[0].remove(),l(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(e.elements)
const i=b()
t(i,"keypress",a(C,e.elements[5])),e.elements[4].replaceWith(i),t(e,"submit",a(h,i))}function j(){!function(){if(!o("wrapGuildChat"))return
const e=f("#pCC table table table table")
e&&e.classList.add("fshGc")}(),y()
const e=u("chat_type")
d(e&&"1"===e?"Leader":"Chat",0,3)}export{j as default}
//# sourceMappingURL=guildChat-bkyXukMV.js.map
