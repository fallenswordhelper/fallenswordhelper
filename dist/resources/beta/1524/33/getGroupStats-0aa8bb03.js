import{c as t}from"./chunk-c6dcf4eb.js"
import{c as o}from"./createButton-94444a78.js"
import{c as r}from"./createLi-d3fe747f.js"
import{c as s}from"./createUl-64bfcfb0.js"
import{h as f,o as n,V as a,b8 as e,ax as c,v as u}from"./calfSystem-c91a5c89.js"
import{o as i}from"./openQuickBuffByName-addd523e.js"
import{g as m}from"./groupViewStats-9978fcb8.js"
function p(t,s){const e=r(),c=o({className:"fshBl fshBls",textContent:t})
return n(c,(o=>{o.target.blur(),i(s),a("doBuffLinks",t)})),f(e,c),e}function j(t,o,r){return f(t,p(`Buff ${e[r]} 16`,o.join(","))),t}function l(o){const r=t(16,o),n=s()
return r.length>1&&f(n,p("Buff All",o.join(","))),r.reduce(j,n)}function d(t){const o=u(t)
return m(o)}function B(t){return c(t).then(d)}export{l as d,B as g}
//# sourceMappingURL=getGroupStats-0aa8bb03.js.map
