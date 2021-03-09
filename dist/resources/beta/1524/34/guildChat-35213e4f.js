import{H as t,p as e,C as a,f as s,t as n,b as r,g as o,h as c,Q as i}from"./calfSystem-dfa26790.js"
import{c as f}from"./createTextArea-4b586577.js"
import{a as u}from"./addLogColoring-14811dca.js"
import"./createStyle-bdad4a3a.js"
import"./dataRows-fbdbdd02.js"
import"./doBuffLinkClick-6adaeb27.js"
import"./openQuickBuffByName-b13feb07.js"
import"./fshOpen-49538a62.js"
import"./parseDateAsTimestamp-5cae868a.js"
function l(t){t.value=t.value.replace(/\r\n|\n|\r/g," ")}function p(t){t.setAttribute("form","dochat")}function d(t,e){"Enter"!==e.key||e.shiftKey||(e.preventDefault(),i(t))}function m(){const t=a('input[value="Send As Mass"]')
if(!t)return
const i=function(){const t=r("form",e)
return t[0].id="dochat",t[0]}(),u=function(){const t=o("input",e).slice(0,7)
return t.forEach(p),t[5]}(),m=function(t){const e=a("#pCC table table")
e.rows[0].cells[0].remove()
const s=e.insertRow(-1).insertCell(-1)
c(s,t)
const n=e.rows[0].cells[0]
return n.rowSpan=2,n}(t),b=function(t){const e=f({cols:72,name:"msg",required:!0,rows:2})
return p(e),s(e,"keypress",n(d,t)),e}(u)
m.replaceChild(b,m.children[0]),s(i,"submit",n(l,b))}function b(){t("enhanceChatTextEntry")&&e&&m(),function(){if(!t("wrapGuildChat"))return
const e=a("#pCC table table table table")
e&&e.classList.add("fshGc")}(),u("Chat",0)}export default b
//# sourceMappingURL=guildChat-35213e4f.js.map
