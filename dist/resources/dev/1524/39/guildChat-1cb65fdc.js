import{p as e,aD as t,I as s,N as a,f as r,t as o,h as n,S as c,D as i,T as f}from"./calfSystem-b31aba65.js"
import{c as m}from"./closestTable-756f74a0.js"
import{c as l}from"./createTextArea-c38dd5ec.js"
import{g as p}from"./getArrayByClassName-17a8a2fa.js"
import{a as u}from"./addLogColoring-63b1e6de.js"
import"./closest-97a04dcf.js"
import"./createStyle-e43c0e19.js"
import"./dataRows-06ae4778.js"
import"./doBuffLinkClick-fa3cc0ac.js"
import"./openQuickBuffByName-0d9ce298.js"
import"./fshOpen-bc09bf81.js"
import"./parseDateAsTimestamp-be4f39d6.js"
function d(e){e.value=e.value.replace(/\r\n|\n|\r/g," ")}function h(e){e.setAttribute("form","dochat")}function b(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),c(e))}function j(){if(!e||1!==p("header",e).filter(t("Posted By")).length||!s("enhanceChatTextEntry"))return
const c=document.forms[0]
c.id="dochat",a(c.elements).forEach(h),function(e){const t=m(e[5])
t.rows[0].cells[0].remove(),n(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(c.elements)
const i=function(){const e=l({cols:72,maxLength:512,name:"msg",required:!0,rows:2})
return h(e),e}()
r(i,"keypress",o(b,c.elements[5])),c.elements[4].replaceWith(i),r(c,"submit",o(d,i))}function y(){!function(){if(!s("wrapGuildChat"))return
const e=i("#pCC table table table table")
e&&e.classList.add("fshGc")}(),j()
const e=f("chat_type")
u(e&&"1"===e?"Leader":"Chat",0,3)}export default y
//# sourceMappingURL=guildChat-1cb65fdc.js.map
