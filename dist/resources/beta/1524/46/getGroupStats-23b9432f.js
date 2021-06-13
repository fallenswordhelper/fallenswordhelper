import{c as t}from"./chunk-4d4ecad3.js"
import{c as o}from"./createButton-f5865f3f.js"
import{c as r}from"./createLi-27a476bf.js"
import{c as s}from"./createUl-25ea51fb.js"
import{h as f,o as a,S as n,bj as e,aK as c,v as u}from"./calfSystem-cbf77dd7.js"
import{o as i}from"./openQuickBuffByName-41d9e99c.js"
import{g as m}from"./groupViewStats-cd1ac528.js"
function j(t,s){const e=r(),c=o({className:"fshBl fshBls",textContent:t})
return a(c,(o=>{o.target.blur(),i(s),n("doBuffLinks",t)})),f(e,c),e}function p(t,o,r){return f(t,j(`Buff ${e[r]} 16`,o.join(","))),t}function d(o){const r=t(16,o),a=s()
return r.length>1&&f(a,j("Buff All",o.join(","))),r.reduce(p,a)}function l(t){const o=u(t)
return m(o)}function B(t){return c(t).then(l)}export{d,B as g}
//# sourceMappingURL=getGroupStats-23b9432f.js.map
