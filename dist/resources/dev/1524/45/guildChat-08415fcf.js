import{p as e,aH as t,I as s,f as a,t as r,aq as o,h as n,R as c,D as i,S as f}from"./calfSystem-6a3c85e0.js"
import{c as m}from"./closestTable-305a5f02.js"
import{c as l}from"./createTextArea-61989fcd.js"
import{g as p}from"./getArrayByClassName-039bb6c6.js"
import{a as d}from"./addLogColoring-65fd9092.js"
import"./closest-8e46d454.js"
import"./createStyle-e14eeed1.js"
import"./dataRows-7616d03e.js"
import"./doBuffLinkClick-2f63905c.js"
import"./openQuickBuffByName-2da3e6db.js"
import"./fshOpen-d0a5bbc1.js"
import"./parseDateAsTimestamp-12363058.js"
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
//# sourceMappingURL=guildChat-08415fcf.js.map
