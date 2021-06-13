import{p as e,aH as t,I as s,f as a,t as r,aq as o,h as n,R as c,D as f,S as i}from"./calfSystem-d3f0a380.js"
import{c as m}from"./closestTable-f3f570fc.js"
import{c as l}from"./createTextArea-c0f9ef8c.js"
import{g as p}from"./getArrayByClassName-aab7cb65.js"
import{a as u}from"./addLogColoring-08e6e490.js"
import"./closest-d38ca7fc.js"
import"./createStyle-65a2dcef.js"
import"./dataRows-fb96d443.js"
import"./doBuffLinkClick-1c266942.js"
import"./openQuickBuffByName-62f56024.js"
import"./fshOpen-4e911fa6.js"
import"./parseDateAsTimestamp-8de82a90.js"
function d(e){e.value=e.value.replace(/\r\n|\n|\r/g," ")}const h=e=>{e.setAttribute("form","dochat")}
function j(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),c(e))}function y(){if(!e||1!==p("header",e).filter(t("Posted By")).length||!s("enhanceChatTextEntry"))return
const c=document.forms[0]
!function(e){e.id="dochat",o(e.elements).forEach(h)}(c),function(e){const t=m(e[5])
t.rows[0].cells[0].remove(),n(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(c.elements)
const f=function(){const e=l({cols:72,maxLength:512,name:"msg",required:!0,rows:2})
return h(e),e}()
a(f,"keypress",r(j,c.elements[5])),c.elements[4].replaceWith(f),a(c,"submit",r(d,f))}function b(){!function(){if(!s("wrapGuildChat"))return
const e=f("#pCC table table table table")
e&&e.classList.add("fshGc")}(),y()
const e=i("chat_type")
u(e&&"1"===e?"Leader":"Chat",0,3)}export default b
//# sourceMappingURL=guildChat-f7dcf5f2.js.map
