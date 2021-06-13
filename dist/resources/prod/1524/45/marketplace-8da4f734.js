import{a as s}from"./addCommas-c0fbc0a2.js"
import{c as t}from"./closestTable-08179790.js"
import{f as n,p as o,z as e,B as a}from"./calfSystem-e1e858cd.js"
import"./closest-8e46d454.js"
let c,r,f
function i(){return c||(c=e("amount")),c}function u(n){const o=i().value
a(`<span class="fshBlue">You are offering to buy <b>${o}</b> FSP for >> <b>${s(n)}</b> (Total: ${s(function(s,t){const n=s*t
return n+Math.ceil(n/200)}(o,n))})</span>`,function(){if(!f){const s=t(i()).insertRow(2)
f=s.insertCell(0),f.colSpan="2",f.className="fshCenter"}return f}())}function l(){const s=(r||(r=e("price")),r)
if(s){const t=s.value;-1!==t.search(/^[0-9]+$/)?u(t):f&&""!==f.innerHTML&&a("",f)}}function m(){n(o,"keyup",l)}export default m
//# sourceMappingURL=marketplace-8da4f734.js.map
