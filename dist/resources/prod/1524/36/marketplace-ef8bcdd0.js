import{a as s}from"./addCommas-fc2f471e.js"
import{c as t}from"./closestTable-4f18c51a.js"
import{f as n,p as o,z as e,B as a}from"./calfSystem-e7bde0c3.js"
import"./closest-7968af48.js"
let c,f,r
function i(){return c||(c=e("amount")),c}function u(n){const o=i().value
a(`<span class="fshBlue">You are offering to buy <b>${o}</b> FSP for >> <b>${s(n)}</b> (Total: ${s(function(s,t){const n=s*t
return n+Math.ceil(n/200)}(o,n))})</span>`,function(){if(!r){const s=t(i()).insertRow(2)
r=s.insertCell(0),r.colSpan="2",r.className="fshCenter"}return r}())}function l(){const s=(f||(f=e("price")),f)
if(s){const t=s.value;-1!==t.search(/^[0-9]+$/)?u(t):r&&""!==r.innerHTML&&a("",r)}}function m(){n(o,"keyup",l)}export default m
//# sourceMappingURL=marketplace-ef8bcdd0.js.map
