import{p as e,aA as t,I as s,N as a,f as r,t as o,h as n,R as c,D as i,S as f}from"./calfSystem-fe534823.js"
import{c as m}from"./closestTable-eb22f597.js"
import{c as l}from"./createTextArea-86ccdac6.js"
import{g as p}from"./getArrayByClassName-ab8b7067.js"
import{a as u}from"./addLogColoring-b757bc5c.js"
import"./closest-97a04dcf.js"
import"./createStyle-3e97c8d0.js"
import"./dataRows-27be3a6a.js"
import"./doBuffLinkClick-64a8727b.js"
import"./openQuickBuffByName-efdefe00.js"
import"./fshOpen-bc09bf81.js"
import"./parseDateAsTimestamp-57cf1c0e.js"
function d(e){e.value=e.value.replace(/\r\n|\n|\r/g," ")}function b(e){e.setAttribute("form","dochat")}function h(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),c(e))}function j(){if(!e||1!==p("header",e).filter(t("Posted By")).length||!s("enhanceChatTextEntry"))return
const c=document.forms[0]
c.id="dochat",a(c.elements).forEach(b),function(e){const t=m(e[5])
t.rows[0].cells[0].remove(),n(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(c.elements)
const i=function(){const e=l({cols:72,maxLength:512,name:"msg",required:!0,rows:2})
return b(e),e}()
r(i,"keypress",o(h,c.elements[5])),c.elements[4].replaceWith(i),r(c,"submit",o(d,i))}function y(){!function(){if(!s("wrapGuildChat"))return
const e=i("#pCC table table table table")
e&&e.classList.add("fshGc")}(),j()
const e=f("chat_type")
u(e&&"1"===e?"Leader":"Chat",0,3)}export default y
//# sourceMappingURL=guildChat-a05bbf9c.js.map
