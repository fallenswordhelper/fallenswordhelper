import{a as s}from"./addCommas-8af578e2.js"
import{c as t}from"./closestTable-f3f570fc.js"
import{f as n,p as o,z as a,B as e}from"./calfSystem-d3f0a380.js"
import"./closest-d38ca7fc.js"
let f,c,r
function i(){return f||(f=a("amount")),f}function u(n){const o=i().value
e(`<span class="fshBlue">You are offering to buy <b>${o}</b> FSP for >> <b>${s(n)}</b> (Total: ${s(function(s,t){const n=s*t
return n+Math.ceil(n/200)}(o,n))})</span>`,function(){if(!r){const s=t(i()).insertRow(2)
r=s.insertCell(0),r.colSpan="2",r.className="fshCenter"}return r}())}function l(){const s=(c||(c=a("price")),c)
if(s){const t=s.value;-1!==t.search(/^[0-9]+$/)?u(t):r&&""!==r.innerHTML&&e("",r)}}function m(){n(o,"keyup",l)}export default m
//# sourceMappingURL=marketplace-cd85d891.js.map
