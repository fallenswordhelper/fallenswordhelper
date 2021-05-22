import{p as e,aD as t,I as s,f as a,t as o,ao as r,h as n,Q as c,D as i,R as f}from"./calfSystem-6ad077b7.js"
import{c as m}from"./closestTable-3c643986.js"
import{c as l}from"./createTextArea-b5918fbd.js"
import{g as p}from"./getArrayByClassName-a6fe264a.js"
import{a as d}from"./addLogColoring-a20fbe88.js"
import"./closest-7cf61e52.js"
import"./createStyle-ed624664.js"
import"./dataRows-34f45ad8.js"
import"./doBuffLinkClick-bf19d470.js"
import"./openQuickBuffByName-f16a58eb.js"
import"./fshOpen-d480412d.js"
import"./parseDateAsTimestamp-512975e0.js"
function u(e){e.value=e.value.replace(/\r\n|\n|\r/g," ")}const h=e=>{e.setAttribute("form","dochat")}
function b(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),c(e))}function j(){if(!e||1!==p("header",e).filter(t("Posted By")).length||!s("enhanceChatTextEntry"))return
const c=document.forms[0]
!function(e){e.id="dochat",r(e.elements).forEach(h)}(c),function(e){const t=m(e[5])
t.rows[0].cells[0].remove(),n(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(c.elements)
const i=function(){const e=l({cols:72,maxLength:512,name:"msg",required:!0,rows:2})
return h(e),e}()
a(i,"keypress",o(b,c.elements[5])),c.elements[4].replaceWith(i),a(c,"submit",o(u,i))}function y(){!function(){if(!s("wrapGuildChat"))return
const e=i("#pCC table table table table")
e&&e.classList.add("fshGc")}(),j()
const e=f("chat_type")
d(e&&"1"===e?"Leader":"Chat",0,3)}export default y
//# sourceMappingURL=guildChat-0fcef86a.js.map
