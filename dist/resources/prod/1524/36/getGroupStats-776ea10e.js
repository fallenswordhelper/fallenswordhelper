import{c as t}from"./chunk-eaa75fd1.js"
import{c as e}from"./createButton-d50eac25.js"
import{c as o}from"./createLi-542e8e60.js"
import{c as r}from"./createUl-3f2ca776.js"
import{h as s,o as a,W as n,b7 as f,ax as c,v as u}from"./calfSystem-e7bde0c3.js"
import{o as i}from"./openQuickBuffByName-e9ad8a96.js"
import{g as m}from"./groupViewStats-9ae6e1b0.js"
function p(t,r){const f=o(),c=e({className:"fshBl fshBls",textContent:t})
return a(c,(e=>{e.target.blur(),i(r),n("doBuffLinks",t)})),s(f,c),f}function j(t,e,o){return s(t,p(`Buff ${f[o]} 16`,e.join(","))),t}function l(e){const o=t(16,e),a=r()
return o.length>1&&s(a,p("Buff All",e.join(","))),o.reduce(j,a)}function B(t){const e=u(t)
return m(e)}function d(t){return c(t).then(B)}export{l as d,d as g}
//# sourceMappingURL=getGroupStats-776ea10e.js.map
