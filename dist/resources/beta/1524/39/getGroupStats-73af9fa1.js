import{c as t}from"./chunk-f573f88c.js"
import{c as o}from"./createButton-614aa118.js"
import{c as r}from"./createLi-ecf9f87e.js"
import{c as s}from"./createUl-389434dd.js"
import{h as f,o as e,W as a,bf as n,aG as c,v as u}from"./calfSystem-26fbeaeb.js"
import{o as i}from"./openQuickBuffByName-ae264df4.js"
import{g as m}from"./groupViewStats-39d3064c.js"
function p(t,s){const n=r(),c=o({className:"fshBl fshBls",textContent:t})
return e(c,(o=>{o.target.blur(),i(s),a("doBuffLinks",t)})),f(n,c),n}function j(t,o,r){return f(t,p(`Buff ${n[r]} 16`,o.join(","))),t}function l(o){const r=t(16,o),e=s()
return r.length>1&&f(e,p("Buff All",o.join(","))),r.reduce(j,e)}function B(t){const o=u(t)
return m(o)}function d(t){return c(t).then(B)}export{l as d,d as g}
//# sourceMappingURL=getGroupStats-73af9fa1.js.map
