import{c as t}from"./chunk-eb7f7c4d.js"
import{c as o}from"./createButton-4b3a5adb.js"
import{c as r}from"./createLi-c20bfd81.js"
import{c as s}from"./createUl-e4111404.js"
import{h as f,o as n,W as a,b9 as e,az as c,v as u}from"./calfSystem-cb2a6f39.js"
import{o as i}from"./openQuickBuffByName-fdb8df51.js"
import{g as m}from"./groupViewStats-91f15ec9.js"
function p(t,s){const e=r(),c=o({className:"fshBl fshBls",textContent:t})
return n(c,(o=>{o.target.blur(),i(s),a("doBuffLinks",t)})),f(e,c),e}function j(t,o,r){return f(t,p(`Buff ${e[r]} 16`,o.join(","))),t}function l(o){const r=t(16,o),n=s()
return r.length>1&&f(n,p("Buff All",o.join(","))),r.reduce(j,n)}function b(t){const o=u(t)
return m(o)}function d(t){return c(t).then(b)}export{l as d,d as g}
//# sourceMappingURL=getGroupStats-3826be4e.js.map
