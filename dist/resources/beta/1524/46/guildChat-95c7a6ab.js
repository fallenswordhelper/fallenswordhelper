import{p as e,aG as t,I as s,f as a,t as r,ap as o,h as n,Q as c,D as f,R as i}from"./calfSystem-cbf77dd7.js"
import{c as m}from"./closestTable-ea26a9a2.js"
import{c as l}from"./createTextArea-aeda090f.js"
import{g as p}from"./getArrayByClassName-f5e2f789.js"
import{a as d}from"./addLogColoring-36440751.js"
import"./closest-d38ca7fc.js"
import"./createStyle-334f83f9.js"
import"./dataRows-bf7d7651.js"
import"./doBuffLinkClick-ab19b184.js"
import"./openQuickBuffByName-41d9e99c.js"
import"./fshOpen-4e911fa6.js"
import"./parseDateAsTimestamp-9ad12f39.js"
function u(e){e.value=e.value.replace(/\r\n|\n|\r/g," ")}const h=e=>{e.setAttribute("form","dochat")}
function j(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),c(e))}function b(){if(!e||1!==p("header",e).filter(t("Posted By")).length||!s("enhanceChatTextEntry"))return
const c=document.forms[0]
!function(e){e.id="dochat",o(e.elements).forEach(h)}(c),function(e){const t=m(e[5])
t.rows[0].cells[0].remove(),n(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(c.elements)
const f=function(){const e=l({cols:72,maxLength:512,name:"msg",required:!0,rows:2})
return h(e),e}()
a(f,"keypress",r(j,c.elements[5])),c.elements[4].replaceWith(f),a(c,"submit",r(u,f))}function y(){!function(){if(!s("wrapGuildChat"))return
const e=f("#pCC table table table table")
e&&e.classList.add("fshGc")}(),b()
const e=i("chat_type")
d(e&&"1"===e?"Leader":"Chat",0,3)}export default y
//# sourceMappingURL=guildChat-95c7a6ab.js.map
