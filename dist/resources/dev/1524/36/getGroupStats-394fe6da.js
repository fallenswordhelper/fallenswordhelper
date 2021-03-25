import{c as t}from"./chunk-eaa75fd1.js"
import{c as o}from"./createButton-033e413f.js"
import{c as r}from"./createLi-f6e99087.js"
import{c as s}from"./createUl-b4c1441e.js"
import{h as e,o as n,X as a,ba as f,aA as c,v as u}from"./calfSystem-eeb1d862.js"
import{o as i}from"./openQuickBuffByName-d4740e2d.js"
import{g as m}from"./groupViewStats-3169244c.js"
function p(t,s){const f=r(),c=o({className:"fshBl fshBls",textContent:t})
return n(c,(o=>{o.target.blur(),i(s),a("doBuffLinks",t)})),e(f,c),f}function j(t,o,r){return e(t,p(`Buff ${f[r]} 16`,o.join(","))),t}function l(o){const r=t(16,o),n=s()
return r.length>1&&e(n,p("Buff All",o.join(","))),r.reduce(j,n)}function B(t){const o=u(t)
return m(o)}function d(t){return c(t).then(B)}export{l as d,d as g}
//# sourceMappingURL=getGroupStats-394fe6da.js.map
