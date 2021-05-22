import{c as t}from"./chunk-d354fb99.js"
import{c as o}from"./createButton-4c9b3216.js"
import{c as r}from"./createLi-8bb46e5e.js"
import{c as s}from"./createUl-b85756c5.js"
import{h as e,o as n,S as a,bg as f,aH as c,v as u}from"./calfSystem-6ad077b7.js"
import{o as i}from"./openQuickBuffByName-f16a58eb.js"
import{g as m}from"./groupViewStats-d614ecaf.js"
function p(t,s){const f=r(),c=o({className:"fshBl fshBls",textContent:t})
return n(c,(o=>{o.target.blur(),i(s),a("doBuffLinks",t)})),e(f,c),f}function b(t,o,r){return e(t,p(`Buff ${f[r]} 16`,o.join(","))),t}function j(o){const r=t(16,o),n=s()
return r.length>1&&e(n,p("Buff All",o.join(","))),r.reduce(b,n)}function l(t){const o=u(t)
return m(o)}function B(t){return c(t).then(l)}export{j as d,B as g}
//# sourceMappingURL=getGroupStats-ad8571ed.js.map
