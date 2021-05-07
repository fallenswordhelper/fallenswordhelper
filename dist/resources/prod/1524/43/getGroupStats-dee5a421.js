import{c as t}from"./chunk-4bfbd415.js"
import{c as o}from"./createButton-c32b17ee.js"
import{c as r}from"./createLi-baceddd7.js"
import{c as s}from"./createUl-e3296e95.js"
import{h as e,o as n,T as f,be as a,aF as c,v as u}from"./calfSystem-9942149b.js"
import{o as i}from"./openQuickBuffByName-4f92c0f7.js"
import{g as m}from"./groupViewStats-41d43de5.js"
function p(t,s){const a=r(),c=o({className:"fshBl fshBls",textContent:t})
return n(c,(o=>{o.target.blur(),i(s),f("doBuffLinks",t)})),e(a,c),a}function d(t,o,r){return e(t,p(`Buff ${a[r]} 16`,o.join(","))),t}function j(o){const r=t(16,o),n=s()
return r.length>1&&e(n,p("Buff All",o.join(","))),r.reduce(d,n)}function l(t){const o=u(t)
return m(o)}function B(t){return c(t).then(l)}export{j as d,B as g}
//# sourceMappingURL=getGroupStats-dee5a421.js.map
