import{p as e,aB as t,I as s,f as a,t as r,N as o,h as n,R as c,D as i,S as f}from"./calfSystem-9942149b.js"
import{c as m}from"./closestTable-ad98a9cf.js"
import{c as l}from"./createTextArea-7a6c21cb.js"
import{g as p}from"./getArrayByClassName-2c97d5ec.js"
import{a as u}from"./addLogColoring-66a33a9b.js"
import"./closest-bc1fafe7.js"
import"./createStyle-6a43018a.js"
import"./dataRows-60f8d94a.js"
import"./doBuffLinkClick-ab961b4c.js"
import"./openQuickBuffByName-4f92c0f7.js"
import"./fshOpen-72d27290.js"
import"./parseDateAsTimestamp-214240ae.js"
function d(e){e.value=e.value.replace(/\r\n|\n|\r/g," ")}const h=e=>{e.setAttribute("form","dochat")}
function b(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),c(e))}function j(){if(!e||1!==p("header",e).filter(t("Posted By")).length||!s("enhanceChatTextEntry"))return
const c=document.forms[0]
!function(e){e.id="dochat",o(e.elements).forEach(h)}(c),function(e){const t=m(e[5])
t.rows[0].cells[0].remove(),n(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(c.elements)
const i=function(){const e=l({cols:72,maxLength:512,name:"msg",required:!0,rows:2})
return h(e),e}()
a(i,"keypress",r(b,c.elements[5])),c.elements[4].replaceWith(i),a(c,"submit",r(d,i))}function y(){!function(){if(!s("wrapGuildChat"))return
const e=i("#pCC table table table table")
e&&e.classList.add("fshGc")}(),j()
const e=f("chat_type")
u(e&&"1"===e?"Leader":"Chat",0,3)}export default y
//# sourceMappingURL=guildChat-dfb1be55.js.map
