import{c as t}from"./chunk-c6dcf4eb.js"
import{c as o}from"./createButton-6599017c.js"
import{c as r}from"./createLi-b464541b.js"
import{c as s}from"./createUl-961da871.js"
import{h as n,o as e,W as a,b9 as f,ay as c,v as u}from"./calfSystem-37f70deb.js"
import{o as i}from"./openQuickBuffByName-28108be8.js"
import{g as m}from"./groupViewStats-c5a6b702.js"
function p(t,s){const f=r(),c=o({className:"fshBl fshBls",textContent:t})
return e(c,(o=>{o.target.blur(),i(s),a("doBuffLinks",t)})),n(f,c),f}function j(t,o,r){return n(t,p(`Buff ${f[r]} 16`,o.join(","))),t}function l(o){const r=t(16,o),e=s()
return r.length>1&&n(e,p("Buff All",o.join(","))),r.reduce(j,e)}function b(t){const o=u(t)
return m(o)}function B(t){return c(t).then(b)}export{l as d,B as g}
//# sourceMappingURL=getGroupStats-6e044091.js.map
