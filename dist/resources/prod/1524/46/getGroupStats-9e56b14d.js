import{c as t}from"./chunk-4d4ecad3.js"
import{c as o}from"./createButton-1e66ce8d.js"
import{c as r}from"./createLi-36d441f8.js"
import{c as s}from"./createUl-21e973ea.js"
import{h as e,o as a,S as n,bh as f,aI as c,v as u}from"./calfSystem-7991d843.js"
import{o as i}from"./openQuickBuffByName-76ab32da.js"
import{g as m}from"./groupViewStats-c85a5e0e.js"
function p(t,s){const f=r(),c=o({className:"fshBl fshBls",textContent:t})
return a(c,(o=>{o.target.blur(),i(s),n("doBuffLinks",t)})),e(f,c),f}function d(t,o,r){return e(t,p(`Buff ${f[r]} 16`,o.join(","))),t}function j(o){const r=t(16,o),a=s()
return r.length>1&&e(a,p("Buff All",o.join(","))),r.reduce(d,a)}function l(t){const o=u(t)
return m(o)}function B(t){return c(t).then(l)}export{j as d,B as g}
//# sourceMappingURL=getGroupStats-9e56b14d.js.map
