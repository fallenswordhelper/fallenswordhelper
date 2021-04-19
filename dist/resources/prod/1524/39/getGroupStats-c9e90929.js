import{c as t}from"./chunk-f573f88c.js"
import{c as f}from"./createButton-4f23e4ef.js"
import{c as o}from"./createLi-31bbe90a.js"
import{c as r}from"./createUl-bf42ad98.js"
import{h as s,o as e,W as n,bd as a,aE as c,v as u}from"./calfSystem-fe534823.js"
import{o as i}from"./openQuickBuffByName-efdefe00.js"
import{g as m}from"./groupViewStats-fd902d7a.js"
function p(t,r){const a=o(),c=f({className:"fshBl fshBls",textContent:t})
return e(c,(f=>{f.target.blur(),i(r),n("doBuffLinks",t)})),s(a,c),a}function j(t,f,o){return s(t,p(`Buff ${a[o]} 16`,f.join(","))),t}function l(f){const o=t(16,f),e=r()
return o.length>1&&s(e,p("Buff All",f.join(","))),o.reduce(j,e)}function d(t){const f=u(t)
return m(f)}function B(t){return c(t).then(d)}export{l as d,B as g}
//# sourceMappingURL=getGroupStats-c9e90929.js.map
