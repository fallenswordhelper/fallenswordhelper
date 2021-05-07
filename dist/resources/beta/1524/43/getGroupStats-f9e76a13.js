import{c as t}from"./chunk-4bfbd415.js"
import{c as o}from"./createButton-412df924.js"
import{c as r}from"./createLi-40556f33.js"
import{c as s}from"./createUl-1e048ffe.js"
import{h as f,o as e,T as n,bg as a,aH as c,v as u}from"./calfSystem-1d588248.js"
import{o as i}from"./openQuickBuffByName-f88cfb0a.js"
import{g as m}from"./groupViewStats-ee99532c.js"
function p(t,s){const a=r(),c=o({className:"fshBl fshBls",textContent:t})
return e(c,(o=>{o.target.blur(),i(s),n("doBuffLinks",t)})),f(a,c),a}function j(t,o,r){return f(t,p(`Buff ${a[r]} 16`,o.join(","))),t}function l(o){const r=t(16,o),e=s()
return r.length>1&&f(e,p("Buff All",o.join(","))),r.reduce(j,e)}function B(t){const o=u(t)
return m(o)}function d(t){return c(t).then(B)}export{l as d,d as g}
//# sourceMappingURL=getGroupStats-f9e76a13.js.map
