import{c as t}from"./chunk-82057567.js"
import{c as e}from"./createButton-82ecce7c.js"
import{c as o}from"./createLi-85fedf56.js"
import{c as r}from"./createUl-5382febe.js"
import{h as s,o as n,T as a,bl as c,aL as f,v as u}from"./calfSystem-6a3c85e0.js"
import{o as i}from"./openQuickBuffByName-2da3e6db.js"
import{g as m}from"./groupViewStats-5edcc42d.js"
function l(t,r){const c=o(),f=e({className:"fshBl fshBls",textContent:t})
return n(f,(e=>{e.target.blur(),i(r),a("doBuffLinks",t)})),s(c,f),c}function p(t,e,o){return s(t,l(`Buff ${c[o]} 16`,e.join(","))),t}function j(e){const o=t(16,e),n=r()
return o.length>1&&s(n,l("Buff All",e.join(","))),o.reduce(p,n)}function d(t){const e=u(t)
return m(e)}function B(t){return f(t).then(d)}export{j as d,B as g}
//# sourceMappingURL=getGroupStats-873e63bd.js.map
