import{c as t}from"./chunk-5d7e6f3a.js"
import{c as o}from"./createButton-1c897a50.js"
import{c as r}from"./createLi-2ae6a63d.js"
import{c as s}from"./createUl-4a0ba666.js"
import{h as a,o as n,V as e,b8 as f,ax as c,v as u}from"./calfSystem-dfa26790.js"
import{o as i}from"./openQuickBuffByName-b13feb07.js"
import{g as m}from"./groupViewStats-4bcd7d57.js"
function p(t,s){const f=r(),c=o({className:"fshBl fshBls",textContent:t})
return n(c,(o=>{o.target.blur(),i(s),e("doBuffLinks",t)})),a(f,c),f}function j(t,o,r){return a(t,p(`Buff ${f[r]} 16`,o.join(","))),t}function l(o){const r=t(16,o),n=s()
return r.length>1&&a(n,p("Buff All",o.join(","))),r.reduce(j,n)}function d(t){const o=u(t)
return m(o)}function B(t){return c(t).then(d)}export{l as d,B as g}
//# sourceMappingURL=getGroupStats-0f0f8bed.js.map
