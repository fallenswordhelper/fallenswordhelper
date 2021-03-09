import{c as t}from"./chunk-5d7e6f3a.js"
import{c as o}from"./createButton-6735d85a.js"
import{c as r}from"./createLi-b0b9466b.js"
import{c as s}from"./createUl-870923e1.js"
import{h as a,o as n,V as e,b6 as f,av as c,v as u}from"./calfSystem-793da633.js"
import{o as i}from"./openQuickBuffByName-074c8760.js"
import{g as m}from"./groupViewStats-fda5fcc8.js"
function p(t,s){const f=r(),c=o({className:"fshBl fshBls",textContent:t})
return n(c,(o=>{o.target.blur(),i(s),e("doBuffLinks",t)})),a(f,c),f}function j(t,o,r){return a(t,p(`Buff ${f[r]} 16`,o.join(","))),t}function l(o){const r=t(16,o),n=s()
return r.length>1&&a(n,p("Buff All",o.join(","))),r.reduce(j,n)}function B(t){const o=u(t)
return m(o)}function d(t){return c(t).then(B)}export{l as d,d as g}
//# sourceMappingURL=getGroupStats-4df94e7b.js.map
