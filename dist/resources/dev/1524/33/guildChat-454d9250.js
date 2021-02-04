import{H as t,p as e,C as s,f as n,t as a,b as r,g as o,h as c,R as f}from"./calfSystem-37f70deb.js"
import{c as i}from"./createTextArea-df2f24da.js"
import{a as u}from"./addLogColoring-4c27945f.js"
import"./createStyle-39dd6366.js"
import"./dataRows-927736f3.js"
import"./doBuffLinkClick-6dfce1f9.js"
import"./openQuickBuffByName-28108be8.js"
import"./fshOpen-946a9f05.js"
import"./parseDateAsTimestamp-9ffa0af6.js"
function l(t){t.value=t.value.replace(/\r\n|\n|\r/g," ")}function p(t){t.setAttribute("form","dochat")}function m(t,e){"Enter"!==e.key||e.shiftKey||(e.preventDefault(),f(t))}function d(){const t=s('input[value="Send As Mass"]')
if(!t)return
const f=function(){const t=r("form",e)
return t[0].id="dochat",t[0]}(),u=function(){const t=o("input",e).slice(0,7)
return t.forEach(p),t[5]}(),d=function(t){const e=s("#pCC table table")
e.rows[0].cells[0].remove()
const n=e.insertRow(-1).insertCell(-1)
c(n,t)
const a=e.rows[0].cells[0]
return a.rowSpan=2,a}(t),h=function(t){const e=i({cols:72,name:"msg",required:!0,rows:2})
return p(e),n(e,"keypress",a(m,t)),e}(u)
d.replaceChild(h,d.children[0]),n(f,"submit",a(l,h))}function h(){t("enhanceChatTextEntry")&&e&&d(),function(){if(!t("wrapGuildChat"))return
const e=s("#pCC table table table table")
e&&e.classList.add("fshGc")}(),u("Chat",0)}export default h
//# sourceMappingURL=guildChat-454d9250.js.map
