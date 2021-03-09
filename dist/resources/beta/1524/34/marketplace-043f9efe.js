import{a as s}from"./addCommas-4b913655.js"
import{c as t}from"./closestTable-2e82ac4c.js"
import{f as n,p as o,y as a,A as e}from"./calfSystem-dfa26790.js"
import"./closest-f906514d.js"
let c,r,f
function i(){return c||(c=a("amount")),c}function u(n){const o=i().value
e(`<span class="fshBlue">You are offering to buy <b>${o}</b> FSP for >> <b>${s(n)}</b> (Total: ${s(function(s,t){const n=s*t
return n+Math.ceil(n/200)}(o,n))})</span>`,function(){if(!f){const s=t(i()).insertRow(2)
f=s.insertCell(0),f.colSpan="2",f.className="fshCenter"}return f}())}function l(){const s=(r||(r=a("price")),r)
if(s){const t=s.value;-1!==t.search(/^[0-9]+$/)?u(t):f&&""!==f.innerHTML&&e("",f)}}function m(){n(o,"keyup",l)}export default m
//# sourceMappingURL=marketplace-043f9efe.js.map
