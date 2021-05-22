import{p as e,aG as t,I as s,f as a,t as r,ap as o,h as n,R as c,D as f,S as i}from"./calfSystem-f7cf24f6.js"
import{c as m}from"./closestTable-170bdad1.js"
import{c as l}from"./createTextArea-5b275d40.js"
import{g as d}from"./getArrayByClassName-f4491c81.js"
import{a as p}from"./addLogColoring-3d277681.js"
import"./closest-7cf61e52.js"
import"./createStyle-8458ea8e.js"
import"./dataRows-17c980fd.js"
import"./doBuffLinkClick-44f0e1d6.js"
import"./openQuickBuffByName-85f930d9.js"
import"./fshOpen-d480412d.js"
import"./parseDateAsTimestamp-b7dd31d4.js"
function u(e){e.value=e.value.replace(/\r\n|\n|\r/g," ")}const h=e=>{e.setAttribute("form","dochat")}
function j(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),c(e))}function y(){if(!e||1!==d("header",e).filter(t("Posted By")).length||!s("enhanceChatTextEntry"))return
const c=document.forms[0]
!function(e){e.id="dochat",o(e.elements).forEach(h)}(c),function(e){const t=m(e[5])
t.rows[0].cells[0].remove(),n(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(c.elements)
const f=function(){const e=l({cols:72,maxLength:512,name:"msg",required:!0,rows:2})
return h(e),e}()
a(f,"keypress",r(j,c.elements[5])),c.elements[4].replaceWith(f),a(c,"submit",r(u,f))}function b(){!function(){if(!s("wrapGuildChat"))return
const e=f("#pCC table table table table")
e&&e.classList.add("fshGc")}(),y()
const e=i("chat_type")
p(e&&"1"===e?"Leader":"Chat",0,3)}export default b
//# sourceMappingURL=guildChat-0501a7ed.js.map
