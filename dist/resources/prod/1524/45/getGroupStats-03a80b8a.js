import{c as t}from"./chunk-82057567.js"
import{c as o}from"./createButton-14a27031.js"
import{c as r}from"./createLi-d9193eb0.js"
import{c as s}from"./createUl-26757146.js"
import{h as e,o as n,S as f,bh as a,aI as c,v as u}from"./calfSystem-e1e858cd.js"
import{o as i}from"./openQuickBuffByName-b48f21dd.js"
import{g as m}from"./groupViewStats-5fcf4e45.js"
function p(t,s){const a=r(),c=o({className:"fshBl fshBls",textContent:t})
return n(c,(o=>{o.target.blur(),i(s),f("doBuffLinks",t)})),e(a,c),a}function j(t,o,r){return e(t,p(`Buff ${a[r]} 16`,o.join(","))),t}function l(o){const r=t(16,o),n=s()
return r.length>1&&e(n,p("Buff All",o.join(","))),r.reduce(j,n)}function B(t){const o=u(t)
return m(o)}function d(t){return c(t).then(B)}export{l as d,d as g}
//# sourceMappingURL=getGroupStats-03a80b8a.js.map
