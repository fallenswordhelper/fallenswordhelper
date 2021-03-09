import{H as t,p as e,C as s,f as a,t as n,b as r,g as o,h as c,R as i}from"./calfSystem-c07e3259.js"
import{c as f}from"./createTextArea-801913a0.js"
import{a as u}from"./addLogColoring-d9dc5ea6.js"
import"./createStyle-7a0bcb4f.js"
import"./dataRows-fa734565.js"
import"./doBuffLinkClick-6309bcd0.js"
import"./openQuickBuffByName-e650cf6c.js"
import"./fshOpen-49538a62.js"
import"./parseDateAsTimestamp-63b9246e.js"
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
//# sourceMappingURL=guildChat-b37f1c06.js.map
