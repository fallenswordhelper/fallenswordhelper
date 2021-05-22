import{p as e,aF as t,I as s,f as a,t as o,ao as r,h as n,Q as c,D as i,R as f}from"./calfSystem-a8d582b6.js"
import{c as m}from"./closestTable-510cb5ad.js"
import{c as l}from"./createTextArea-fdb5def7.js"
import{g as d}from"./getArrayByClassName-fd115cb0.js"
import{a as p}from"./addLogColoring-44e5420a.js"
import"./closest-7cf61e52.js"
import"./createStyle-d4f6dc05.js"
import"./dataRows-25616e3d.js"
import"./doBuffLinkClick-96c6b509.js"
import"./openQuickBuffByName-05198165.js"
import"./fshOpen-d480412d.js"
import"./parseDateAsTimestamp-e85e174f.js"
function u(e){e.value=e.value.replace(/\r\n|\n|\r/g," ")}const h=e=>{e.setAttribute("form","dochat")}
function b(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),c(e))}function j(){if(!e||1!==d("header",e).filter(t("Posted By")).length||!s("enhanceChatTextEntry"))return
const c=document.forms[0]
!function(e){e.id="dochat",r(e.elements).forEach(h)}(c),function(e){const t=m(e[5])
t.rows[0].cells[0].remove(),n(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(c.elements)
const i=function(){const e=l({cols:72,maxLength:512,name:"msg",required:!0,rows:2})
return h(e),e}()
a(i,"keypress",o(b,c.elements[5])),c.elements[4].replaceWith(i),a(c,"submit",o(u,i))}function y(){!function(){if(!s("wrapGuildChat"))return
const e=i("#pCC table table table table")
e&&e.classList.add("fshGc")}(),j()
const e=f("chat_type")
p(e&&"1"===e?"Leader":"Chat",0,3)}export default y
//# sourceMappingURL=guildChat-341c2eed.js.map
