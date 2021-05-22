import{c as t}from"./chunk-d354fb99.js"
import{c as o}from"./createButton-ae7066ba.js"
import{c as r}from"./createLi-66d1f3a4.js"
import{c as s}from"./createUl-39044721.js"
import{h as a,o as n,S as e,bi as f,aJ as c,v as u}from"./calfSystem-a8d582b6.js"
import{o as i}from"./openQuickBuffByName-05198165.js"
import{g as m}from"./groupViewStats-dd96a5b4.js"
function p(t,s){const f=r(),c=o({className:"fshBl fshBls",textContent:t})
return n(c,(o=>{o.target.blur(),i(s),e("doBuffLinks",t)})),a(f,c),f}function j(t,o,r){return a(t,p(`Buff ${f[r]} 16`,o.join(","))),t}function l(o){const r=t(16,o),n=s()
return r.length>1&&a(n,p("Buff All",o.join(","))),r.reduce(j,n)}function d(t){const o=u(t)
return m(o)}function B(t){return c(t).then(d)}export{l as d,B as g}
//# sourceMappingURL=getGroupStats-57cae0bc.js.map
