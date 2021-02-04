import{H as t,p as e,C as s,f as n,t as a,b as r,g as o,h as c,Q as i}from"./calfSystem-c91a5c89.js"
import{c as f}from"./createTextArea-ceb3515e.js"
import{a as u}from"./addLogColoring-a6f31099.js"
import"./createStyle-97d2b6c9.js"
import"./dataRows-b424e159.js"
import"./doBuffLinkClick-c3eb101d.js"
import"./openQuickBuffByName-addd523e.js"
import"./fshOpen-946a9f05.js"
import"./parseDateAsTimestamp-25c3e576.js"
function l(t){t.value=t.value.replace(/\r\n|\n|\r/g," ")}function p(t){t.setAttribute("form","dochat")}function m(t,e){"Enter"!==e.key||e.shiftKey||(e.preventDefault(),i(t))}function d(){const t=s('input[value="Send As Mass"]')
if(!t)return
const i=function(){const t=r("form",e)
return t[0].id="dochat",t[0]}(),u=function(){const t=o("input",e).slice(0,7)
return t.forEach(p),t[5]}(),d=function(t){const e=s("#pCC table table")
e.rows[0].cells[0].remove()
const n=e.insertRow(-1).insertCell(-1)
c(n,t)
const a=e.rows[0].cells[0]
return a.rowSpan=2,a}(t),b=function(t){const e=f({cols:72,name:"msg",required:!0,rows:2})
return p(e),n(e,"keypress",a(m,t)),e}(u)
d.replaceChild(b,d.children[0]),n(i,"submit",a(l,b))}function b(){t("enhanceChatTextEntry")&&e&&d(),function(){if(!t("wrapGuildChat"))return
const e=s("#pCC table table table table")
e&&e.classList.add("fshGc")}(),u("Chat",0)}export default b
//# sourceMappingURL=guildChat-747c830a.js.map
