import{c as t}from"./chunk-82057567.js"
import{c as e}from"./createButton-8843d34d.js"
import{c as o}from"./createLi-d02eeee0.js"
import{c as r}from"./createUl-dee25901.js"
import{h as s,o as n,S as a,bj as f,aK as c,v as u}from"./calfSystem-ae2e69af.js"
import{o as i}from"./openQuickBuffByName-3c03dfb1.js"
import{g as m}from"./groupViewStats-71457820.js"
function j(t,r){const f=o(),c=e({className:"fshBl fshBls",textContent:t})
return n(c,(e=>{e.target.blur(),i(r),a("doBuffLinks",t)})),s(f,c),f}function p(t,e,o){return s(t,j(`Buff ${f[o]} 16`,e.join(","))),t}function l(e){const o=t(16,e),n=r()
return o.length>1&&s(n,j("Buff All",e.join(","))),o.reduce(p,n)}function d(t){const e=u(t)
return m(e)}function B(t){return c(t).then(d)}export{l as d,B as g}
//# sourceMappingURL=getGroupStats-217cfaa9.js.map
