import{I as t,p as e,D as s,f as a,t as n,b as r,g as o,h as c,R as i}from"./calfSystem-4a40365f.js"
import{c as f}from"./createTextArea-2f679fd8.js"
import{a as u}from"./addLogColoring-9f86b979.js"
import"./createStyle-2f461311.js"
import"./dataRows-ef9a1a0a.js"
import"./doBuffLinkClick-b43d80ba.js"
import"./openQuickBuffByName-c23c62ee.js"
import"./fshOpen-6a6a1b65.js"
import"./parseDateAsTimestamp-b15d0c3e.js"
function l(t){t.value=t.value.replace(/\r\n|\n|\r/g," ")}function p(t){t.setAttribute("form","dochat")}function m(t,e){"Enter"!==e.key||e.shiftKey||(e.preventDefault(),i(t))}function d(){const t=s('input[value="Send As Mass"]')
if(!t)return
const i=function(){const t=r("form",e)
return t[0].id="dochat",t[0]}(),u=function(){const t=o("input",e).slice(0,7)
return t.forEach(p),t[5]}(),d=function(t){const e=s("#pCC table table")
e.rows[0].cells[0].remove()
const a=e.insertRow(-1).insertCell(-1)
c(a,t)
const n=e.rows[0].cells[0]
return n.rowSpan=2,n}(t),b=function(t){const e=f({cols:72,name:"msg",required:!0,rows:2})
return p(e),a(e,"keypress",n(m,t)),e}(u)
d.replaceChild(b,d.children[0]),a(i,"submit",n(l,b))}function b(){t("enhanceChatTextEntry")&&e&&d(),function(){if(!t("wrapGuildChat"))return
const e=s("#pCC table table table table")
e&&e.classList.add("fshGc")}(),u("Chat",0)}export default b
//# sourceMappingURL=guildChat-60ef83d6.js.map
