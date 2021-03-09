import{c as t}from"./chunk-5d7e6f3a.js"
import{c as o}from"./createButton-caed9067.js"
import{c as r}from"./createLi-bee65984.js"
import{c as s}from"./createUl-09bf27ae.js"
import{h as e,o as a,W as n,b9 as f,ay as c,v as u}from"./calfSystem-c07e3259.js"
import{o as i}from"./openQuickBuffByName-e650cf6c.js"
import{g as m}from"./groupViewStats-c231931a.js"
function p(t,s){const f=r(),c=o({className:"fshBl fshBls",textContent:t})
return a(c,(o=>{o.target.blur(),i(s),n("doBuffLinks",t)})),e(f,c),f}function j(t,o,r){return e(t,p(`Buff ${f[r]} 16`,o.join(","))),t}function l(o){const r=t(16,o),a=s()
return r.length>1&&e(a,p("Buff All",o.join(","))),r.reduce(j,a)}function B(t){const o=u(t)
return m(o)}function h(t){return c(t).then(B)}export{l as d,h as g}
//# sourceMappingURL=getGroupStats-fe76b9fa.js.map
