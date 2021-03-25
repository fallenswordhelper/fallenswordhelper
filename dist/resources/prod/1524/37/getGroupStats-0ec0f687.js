import{c as t}from"./chunk-eb7f7c4d.js"
import{c as o}from"./createButton-2a1aaf63.js"
import{c as r}from"./createLi-201f1732.js"
import{c as s}from"./createUl-d26917ff.js"
import{h as a,o as f,W as n,b7 as e,ax as c,v as u}from"./calfSystem-60c20ae9.js"
import{o as i}from"./openQuickBuffByName-ed10d0a0.js"
import{g as m}from"./groupViewStats-74a14c64.js"
function p(t,s){const e=r(),c=o({className:"fshBl fshBls",textContent:t})
return f(c,(o=>{o.target.blur(),i(s),n("doBuffLinks",t)})),a(e,c),e}function j(t,o,r){return a(t,p(`Buff ${e[r]} 16`,o.join(","))),t}function l(o){const r=t(16,o),f=s()
return r.length>1&&a(f,p("Buff All",o.join(","))),r.reduce(j,f)}function B(t){const o=u(t)
return m(o)}function d(t){return c(t).then(B)}export{l as d,d as g}
//# sourceMappingURL=getGroupStats-0ec0f687.js.map
