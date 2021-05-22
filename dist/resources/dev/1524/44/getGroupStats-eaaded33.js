import{c as t}from"./chunk-d354fb99.js"
import{c as o}from"./createButton-8f3d8326.js"
import{c as r}from"./createLi-c6c225cd.js"
import{c as s}from"./createUl-4041441e.js"
import{h as f,o as n,T as c,bj as e,aK as a,v as u}from"./calfSystem-f7cf24f6.js"
import{o as i}from"./openQuickBuffByName-85f930d9.js"
import{g as m}from"./groupViewStats-8b0d987c.js"
function j(t,s){const e=r(),a=o({className:"fshBl fshBls",textContent:t})
return n(a,(o=>{o.target.blur(),i(s),c("doBuffLinks",t)})),f(e,a),e}function p(t,o,r){return f(t,j(`Buff ${e[r]} 16`,o.join(","))),t}function l(o){const r=t(16,o),n=s()
return r.length>1&&f(n,j("Buff All",o.join(","))),r.reduce(p,n)}function d(t){const o=u(t)
return m(o)}function B(t){return a(t).then(d)}export{l as d,B as g}
//# sourceMappingURL=getGroupStats-eaaded33.js.map
