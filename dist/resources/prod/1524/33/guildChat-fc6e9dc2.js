import{H as t,p as e,C as s,f as a,t as n,b as r,g as o,h as c,Q as i}from"./calfSystem-0708a9bb.js"
import{c as f}from"./createTextArea-30d49dd7.js"
import{a as u}from"./addLogColoring-e13c1361.js"
import"./createStyle-938a363e.js"
import"./dataRows-68c7dad6.js"
import"./doBuffLinkClick-c472e49d.js"
import"./openQuickBuffByName-6f24a6fe.js"
import"./fshOpen-946a9f05.js"
import"./parseDateAsTimestamp-5250bd8e.js"
function l(t){t.value=t.value.replace(/\r\n|\n|\r/g," ")}function p(t){t.setAttribute("form","dochat")}function d(t,e){"Enter"!==e.key||e.shiftKey||(e.preventDefault(),i(t))}function m(){const t=s('input[value="Send As Mass"]')
if(!t)return
const i=function(){const t=r("form",e)
return t[0].id="dochat",t[0]}(),u=function(){const t=o("input",e).slice(0,7)
return t.forEach(p),t[5]}(),m=function(t){const e=s("#pCC table table")
e.rows[0].cells[0].remove()
const a=e.insertRow(-1).insertCell(-1)
c(a,t)
const n=e.rows[0].cells[0]
return n.rowSpan=2,n}(t),h=function(t){const e=f({cols:72,name:"msg",required:!0,rows:2})
return p(e),a(e,"keypress",n(d,t)),e}(u)
m.replaceChild(h,m.children[0]),a(i,"submit",n(l,h))}function h(){t("enhanceChatTextEntry")&&e&&m(),function(){if(!t("wrapGuildChat"))return
const e=s("#pCC table table table table")
e&&e.classList.add("fshGc")}(),u("Chat",0)}export default h
//# sourceMappingURL=guildChat-fc6e9dc2.js.map
