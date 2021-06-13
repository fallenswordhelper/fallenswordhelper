import{p as e,aE as t,I as s,f as a,t as r,ap as o,h as n,Q as c,D as i,R as m}from"./calfSystem-e1e858cd.js"
import{c as f}from"./closestTable-08179790.js"
import{c as l}from"./createTextArea-be660e04.js"
import{g as p}from"./getArrayByClassName-2d2ea79b.js"
import{a as d}from"./addLogColoring-343c9db5.js"
import"./closest-8e46d454.js"
import"./createStyle-d08244a4.js"
import"./dataRows-9acbc944.js"
import"./doBuffLinkClick-39dfc3dc.js"
import"./openQuickBuffByName-b48f21dd.js"
import"./fshOpen-d0a5bbc1.js"
import"./parseDateAsTimestamp-c6154f90.js"
function u(e){e.value=e.value.replace(/\r\n|\n|\r/g," ")}const h=e=>{e.setAttribute("form","dochat")}
function b(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),c(e))}function j(){if(!e||1!==p("header",e).filter(t("Posted By")).length||!s("enhanceChatTextEntry"))return
const c=document.forms[0]
!function(e){e.id="dochat",o(e.elements).forEach(h)}(c),function(e){const t=f(e[5])
t.rows[0].cells[0].remove(),n(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(c.elements)
const i=function(){const e=l({cols:72,maxLength:512,name:"msg",required:!0,rows:2})
return h(e),e}()
a(i,"keypress",r(b,c.elements[5])),c.elements[4].replaceWith(i),a(c,"submit",r(u,i))}function y(){!function(){if(!s("wrapGuildChat"))return
const e=i("#pCC table table table table")
e&&e.classList.add("fshGc")}(),j()
const e=m("chat_type")
d(e&&"1"===e?"Leader":"Chat",0,3)}export default y
//# sourceMappingURL=guildChat-0ca37cd0.js.map
