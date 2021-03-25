import{I as t,p as e,D as s,f as a,t as n,b as r,g as o,h as c,R as i}from"./calfSystem-e7bde0c3.js"
import{c as f}from"./createTextArea-6f47fe7b.js"
import{a as u}from"./addLogColoring-6f58aef4.js"
import"./createStyle-c0c54ad2.js"
import"./dataRows-76d5eebd.js"
import"./doBuffLinkClick-916179ac.js"
import"./openQuickBuffByName-e9ad8a96.js"
import"./fshOpen-6a6a1b65.js"
import"./parseDateAsTimestamp-f3b13d3e.js"
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
//# sourceMappingURL=guildChat-9a2019ee.js.map
