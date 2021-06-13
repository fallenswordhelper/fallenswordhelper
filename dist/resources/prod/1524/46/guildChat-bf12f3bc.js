import{p as e,aE as t,I as s,f as a,t as r,ap as o,h as n,Q as c,D as f,R as i}from"./calfSystem-7991d843.js"
import{c as m}from"./closestTable-6d990d22.js"
import{c as l}from"./createTextArea-5c18fe98.js"
import{g as p}from"./getArrayByClassName-7f937df4.js"
import{a as d}from"./addLogColoring-69af3c18.js"
import"./closest-d38ca7fc.js"
import"./createStyle-a04de647.js"
import"./dataRows-41df2bb0.js"
import"./doBuffLinkClick-0b2cb2af.js"
import"./openQuickBuffByName-76ab32da.js"
import"./fshOpen-4e911fa6.js"
import"./parseDateAsTimestamp-d924ca8d.js"
function u(e){e.value=e.value.replace(/\r\n|\n|\r/g," ")}const h=e=>{e.setAttribute("form","dochat")}
function b(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),c(e))}function j(){if(!e||1!==p("header",e).filter(t("Posted By")).length||!s("enhanceChatTextEntry"))return
const c=document.forms[0]
!function(e){e.id="dochat",o(e.elements).forEach(h)}(c),function(e){const t=m(e[5])
t.rows[0].cells[0].remove(),n(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(c.elements)
const f=function(){const e=l({cols:72,maxLength:512,name:"msg",required:!0,rows:2})
return h(e),e}()
a(f,"keypress",r(b,c.elements[5])),c.elements[4].replaceWith(f),a(c,"submit",r(u,f))}function y(){!function(){if(!s("wrapGuildChat"))return
const e=f("#pCC table table table table")
e&&e.classList.add("fshGc")}(),j()
const e=i("chat_type")
d(e&&"1"===e?"Leader":"Chat",0,3)}export default y
//# sourceMappingURL=guildChat-bf12f3bc.js.map
