import{c as t}from"./chunk-4d4ecad3.js"
import{c as o}from"./createButton-41f57afe.js"
import{c as r}from"./createLi-460154df.js"
import{c as s}from"./createUl-79bfff16.js"
import{h as f,o as n,T as a,bl as e,aL as c,v as u}from"./calfSystem-d3f0a380.js"
import{o as i}from"./openQuickBuffByName-62f56024.js"
import{g as m}from"./groupViewStats-c0878d40.js"
function l(t,s){const e=r(),c=o({className:"fshBl fshBls",textContent:t})
return n(c,(o=>{o.target.blur(),i(s),a("doBuffLinks",t)})),f(e,c),e}function p(t,o,r){return f(t,l(`Buff ${e[r]} 16`,o.join(","))),t}function j(o){const r=t(16,o),n=s()
return r.length>1&&f(n,l("Buff All",o.join(","))),r.reduce(p,n)}function d(t){const o=u(t)
return m(o)}function B(t){return c(t).then(d)}export{j as d,B as g}
//# sourceMappingURL=getGroupStats-c6d002d4.js.map
