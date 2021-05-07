import{c as t}from"./chunk-4bfbd415.js"
import{c as o}from"./createButton-6bfd938b.js"
import{c as r}from"./createLi-b008fdc8.js"
import{c as s}from"./createUl-86698d23.js"
import{h as f,o as n,U as a,bh as e,aI as c,v as u}from"./calfSystem-3cb2f93e.js"
import{o as i}from"./openQuickBuffByName-71252a1d.js"
import{g as m}from"./groupViewStats-df0cddf4.js"
function d(t,s){const e=r(),c=o({className:"fshBl fshBls",textContent:t})
return n(c,(o=>{o.target.blur(),i(s),a("doBuffLinks",t)})),f(e,c),e}function p(t,o,r){return f(t,d(`Buff ${e[r]} 16`,o.join(","))),t}function j(o){const r=t(16,o),n=s()
return r.length>1&&f(n,d("Buff All",o.join(","))),r.reduce(p,n)}function l(t){const o=u(t)
return m(o)}function b(t){return c(t).then(l)}export{j as d,b as g}
//# sourceMappingURL=getGroupStats-9a7a0181.js.map
