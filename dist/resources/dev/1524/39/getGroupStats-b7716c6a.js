import{c as t}from"./chunk-f573f88c.js"
import{c as o}from"./createButton-c21ee6ca.js"
import{c as r}from"./createLi-c35117ce.js"
import{c as s}from"./createUl-e0e9c30c.js"
import{h as e,o as c,X as n,bg as a,aH as f,v as u}from"./calfSystem-b31aba65.js"
import{o as i}from"./openQuickBuffByName-0d9ce298.js"
import{g as m}from"./groupViewStats-4d2391ce.js"
function p(t,s){const a=r(),f=o({className:"fshBl fshBls",textContent:t})
return c(f,(o=>{o.target.blur(),i(s),n("doBuffLinks",t)})),e(a,f),a}function j(t,o,r){return e(t,p(`Buff ${a[r]} 16`,o.join(","))),t}function l(o){const r=t(16,o),c=s()
return r.length>1&&e(c,p("Buff All",o.join(","))),r.reduce(j,c)}function B(t){const o=u(t)
return m(o)}function g(t){return f(t).then(B)}export{l as d,g}
//# sourceMappingURL=getGroupStats-b7716c6a.js.map
