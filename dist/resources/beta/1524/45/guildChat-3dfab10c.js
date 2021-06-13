import{p as e,aG as t,I as s,f as a,t as r,ap as o,h as n,Q as c,D as i,R as f}from"./calfSystem-ae2e69af.js"
import{c as m}from"./closestTable-b140f3bf.js"
import{c as l}from"./createTextArea-6da1a5aa.js"
import{g as p}from"./getArrayByClassName-84652cc1.js"
import{a as d}from"./addLogColoring-7fd58d60.js"
import"./closest-8e46d454.js"
import"./createStyle-0ae8d30d.js"
import"./dataRows-f9a92612.js"
import"./doBuffLinkClick-5b4c3ae1.js"
import"./openQuickBuffByName-3c03dfb1.js"
import"./fshOpen-d0a5bbc1.js"
import"./parseDateAsTimestamp-b35c4088.js"
function u(e){e.value=e.value.replace(/\r\n|\n|\r/g," ")}const h=e=>{e.setAttribute("form","dochat")}
function b(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),c(e))}function j(){if(!e||1!==p("header",e).filter(t("Posted By")).length||!s("enhanceChatTextEntry"))return
const c=document.forms[0]
!function(e){e.id="dochat",o(e.elements).forEach(h)}(c),function(e){const t=m(e[5])
t.rows[0].cells[0].remove(),n(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(c.elements)
const i=function(){const e=l({cols:72,maxLength:512,name:"msg",required:!0,rows:2})
return h(e),e}()
a(i,"keypress",r(b,c.elements[5])),c.elements[4].replaceWith(i),a(c,"submit",r(u,i))}function y(){!function(){if(!s("wrapGuildChat"))return
const e=i("#pCC table table table table")
e&&e.classList.add("fshGc")}(),j()
const e=f("chat_type")
d(e&&"1"===e?"Leader":"Chat",0,3)}export default y
//# sourceMappingURL=guildChat-3dfab10c.js.map
