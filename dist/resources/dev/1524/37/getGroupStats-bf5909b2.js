import{c as t}from"./chunk-eb7f7c4d.js"
import{c as o}from"./createButton-76ebc1cf.js"
import{c as r}from"./createLi-838e8f3a.js"
import{c as s}from"./createUl-1a9e083d.js"
import{h as e,o as a,X as n,ba as c,aA as f,v as u}from"./calfSystem-5d0c721b.js"
import{o as i}from"./openQuickBuffByName-77b1c0c9.js"
import{g as m}from"./groupViewStats-e11a90e5.js"
function p(t,s){const c=r(),f=o({className:"fshBl fshBls",textContent:t})
return a(f,(o=>{o.target.blur(),i(s),n("doBuffLinks",t)})),e(c,f),c}function j(t,o,r){return e(t,p(`Buff ${c[r]} 16`,o.join(","))),t}function l(o){const r=t(16,o),a=s()
return r.length>1&&e(a,p("Buff All",o.join(","))),r.reduce(j,a)}function B(t){const o=u(t)
return m(o)}function b(t){return f(t).then(B)}export{l as d,b as g}
//# sourceMappingURL=getGroupStats-bf5909b2.js.map
