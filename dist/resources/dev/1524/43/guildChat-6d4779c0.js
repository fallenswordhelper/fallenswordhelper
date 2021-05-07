import{p as e,aE as t,I as s,f as a,t as r,N as o,h as n,S as c,D as i,T as f}from"./calfSystem-3cb2f93e.js"
import{c as m}from"./closestTable-388bd2b6.js"
import{c as l}from"./createTextArea-0c68af7a.js"
import{g as p}from"./getArrayByClassName-b128b43c.js"
import{a as d}from"./addLogColoring-61cbc4b9.js"
import"./closest-bc1fafe7.js"
import"./createStyle-28cd040a.js"
import"./dataRows-3f26b8dc.js"
import"./doBuffLinkClick-8d0c871b.js"
import"./openQuickBuffByName-71252a1d.js"
import"./fshOpen-72d27290.js"
import"./parseDateAsTimestamp-a448aedf.js"
function u(e){e.value=e.value.replace(/\r\n|\n|\r/g," ")}const b=e=>{e.setAttribute("form","dochat")}
function h(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),c(e))}function j(){if(!e||1!==p("header",e).filter(t("Posted By")).length||!s("enhanceChatTextEntry"))return
const c=document.forms[0]
!function(e){e.id="dochat",o(e.elements).forEach(b)}(c),function(e){const t=m(e[5])
t.rows[0].cells[0].remove(),n(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(c.elements)
const i=function(){const e=l({cols:72,maxLength:512,name:"msg",required:!0,rows:2})
return b(e),e}()
a(i,"keypress",r(h,c.elements[5])),c.elements[4].replaceWith(i),a(c,"submit",r(u,i))}function y(){!function(){if(!s("wrapGuildChat"))return
const e=i("#pCC table table table table")
e&&e.classList.add("fshGc")}(),j()
const e=f("chat_type")
d(e&&"1"===e?"Leader":"Chat",0,3)}export default y
//# sourceMappingURL=guildChat-6d4779c0.js.map
