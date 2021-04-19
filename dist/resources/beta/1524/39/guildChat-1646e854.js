import{p as e,aC as t,I as s,N as a,f as r,t as o,h as n,R as c,D as i,S as f}from"./calfSystem-26fbeaeb.js"
import{c as m}from"./closestTable-0d8adda0.js"
import{c as l}from"./createTextArea-96997b2f.js"
import{g as p}from"./getArrayByClassName-ccc42006.js"
import{a as d}from"./addLogColoring-b712d775.js"
import"./closest-97a04dcf.js"
import"./createStyle-3d60b537.js"
import"./dataRows-9546bc1b.js"
import"./doBuffLinkClick-fa3c06a7.js"
import"./openQuickBuffByName-ae264df4.js"
import"./fshOpen-bc09bf81.js"
import"./parseDateAsTimestamp-eeab87a4.js"
function u(e){e.value=e.value.replace(/\r\n|\n|\r/g," ")}function b(e){e.setAttribute("form","dochat")}function h(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),c(e))}function j(){if(!e||1!==p("header",e).filter(t("Posted By")).length||!s("enhanceChatTextEntry"))return
const c=document.forms[0]
c.id="dochat",a(c.elements).forEach(b),function(e){const t=m(e[5])
t.rows[0].cells[0].remove(),n(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(c.elements)
const i=function(){const e=l({cols:72,maxLength:512,name:"msg",required:!0,rows:2})
return b(e),e}()
r(i,"keypress",o(h,c.elements[5])),c.elements[4].replaceWith(i),r(c,"submit",o(u,i))}function y(){!function(){if(!s("wrapGuildChat"))return
const e=i("#pCC table table table table")
e&&e.classList.add("fshGc")}(),j()
const e=f("chat_type")
d(e&&"1"===e?"Leader":"Chat",0,3)}export default y
//# sourceMappingURL=guildChat-1646e854.js.map
