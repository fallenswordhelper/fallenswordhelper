import{p as e,aD as t,I as s,f as a,t as r,N as o,h as n,R as f,D as c,S as i}from"./calfSystem-1d588248.js"
import{c as m}from"./closestTable-18ec3479.js"
import{c as l}from"./createTextArea-ad738e69.js"
import{g as p}from"./getArrayByClassName-8fef58fe.js"
import{a as u}from"./addLogColoring-504edae4.js"
import"./closest-bc1fafe7.js"
import"./createStyle-111f4346.js"
import"./dataRows-4965f55a.js"
import"./doBuffLinkClick-4908df75.js"
import"./openQuickBuffByName-f88cfb0a.js"
import"./fshOpen-72d27290.js"
import"./parseDateAsTimestamp-a6762fb7.js"
function d(e){e.value=e.value.replace(/\r\n|\n|\r/g," ")}const h=e=>{e.setAttribute("form","dochat")}
function j(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),f(e))}function y(){if(!e||1!==p("header",e).filter(t("Posted By")).length||!s("enhanceChatTextEntry"))return
const f=document.forms[0]
!function(e){e.id="dochat",o(e.elements).forEach(h)}(f),function(e){const t=m(e[5])
t.rows[0].cells[0].remove(),n(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(f.elements)
const c=function(){const e=l({cols:72,maxLength:512,name:"msg",required:!0,rows:2})
return h(e),e}()
a(c,"keypress",r(j,f.elements[5])),f.elements[4].replaceWith(c),a(f,"submit",r(d,c))}function b(){!function(){if(!s("wrapGuildChat"))return
const e=c("#pCC table table table table")
e&&e.classList.add("fshGc")}(),y()
const e=i("chat_type")
u(e&&"1"===e?"Leader":"Chat",0,3)}export default b
//# sourceMappingURL=guildChat-f03dfe75.js.map
