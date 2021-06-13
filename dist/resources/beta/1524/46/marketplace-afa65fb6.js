import{a as s}from"./addCommas-8af578e2.js"
import{c as t}from"./closestTable-ea26a9a2.js"
import{f as a,p as n,z as o,B as e}from"./calfSystem-cbf77dd7.js"
import"./closest-d38ca7fc.js"
let c,r,f
function i(){return c||(c=o("amount")),c}function u(a){const n=i().value
e(`<span class="fshBlue">You are offering to buy <b>${n}</b> FSP for >> <b>${s(a)}</b> (Total: ${s(function(s,t){const a=s*t
return a+Math.ceil(a/200)}(n,a))})</span>`,function(){if(!f){const s=t(i()).insertRow(2)
f=s.insertCell(0),f.colSpan="2",f.className="fshCenter"}return f}())}function l(){const s=(r||(r=o("price")),r)
if(s){const t=s.value;-1!==t.search(/^[0-9]+$/)?u(t):f&&""!==f.innerHTML&&e("",f)}}function m(){a(n,"keyup",l)}export default m
//# sourceMappingURL=marketplace-afa65fb6.js.map
