import{c as t}from"./chunk-c6dcf4eb.js"
import{c as o}from"./createButton-f8b3783c.js"
import{c as r}from"./createLi-15d7e0a6.js"
import{c as s}from"./createUl-ddc53876.js"
import{h as a,o as e,V as n,b6 as f,av as c,v as u}from"./calfSystem-0708a9bb.js"
import{o as i}from"./openQuickBuffByName-6f24a6fe.js"
import{g as m}from"./groupViewStats-368ea845.js"
function p(t,s){const f=r(),c=o({className:"fshBl fshBls",textContent:t})
return e(c,(o=>{o.target.blur(),i(s),n("doBuffLinks",t)})),a(f,c),f}function j(t,o,r){return a(t,p(`Buff ${f[r]} 16`,o.join(","))),t}function l(o){const r=t(16,o),e=s()
return r.length>1&&a(e,p("Buff All",o.join(","))),r.reduce(j,e)}function B(t){const o=u(t)
return m(o)}function d(t){return c(t).then(B)}export{l as d,d as g}
//# sourceMappingURL=getGroupStats-3df42fe2.js.map
