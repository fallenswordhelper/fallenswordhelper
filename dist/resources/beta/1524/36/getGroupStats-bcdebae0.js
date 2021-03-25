import{c as t}from"./chunk-eaa75fd1.js"
import{c as a}from"./createButton-546eb789.js"
import{c as o}from"./createLi-a21c1318.js"
import{c as r}from"./createUl-3aa80487.js"
import{h as s,o as e,W as n,b9 as f,az as c,v as u}from"./calfSystem-4a40365f.js"
import{o as i}from"./openQuickBuffByName-c23c62ee.js"
import{g as m}from"./groupViewStats-f06aab4f.js"
function p(t,r){const f=o(),c=a({className:"fshBl fshBls",textContent:t})
return e(c,(a=>{a.target.blur(),i(r),n("doBuffLinks",t)})),s(f,c),f}function j(t,a,o){return s(t,p(`Buff ${f[o]} 16`,a.join(","))),t}function l(a){const o=t(16,a),e=r()
return o.length>1&&s(e,p("Buff All",a.join(","))),o.reduce(j,e)}function B(t){const a=u(t)
return m(a)}function h(t){return c(t).then(B)}export{l as d,h as g}
//# sourceMappingURL=getGroupStats-bcdebae0.js.map
