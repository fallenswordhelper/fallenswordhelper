import{a as s}from"./addCommas-20414553.js"
import{c as t}from"./closestTable-9ab270bd.js"
import{f as n,p as o,y as a,A as e}from"./calfSystem-0708a9bb.js"
import"./closest-8b679b7a.js"
let r,c,f
function i(){return r||(r=a("amount")),r}function u(n){const o=i().value
e(`<span class="fshBlue">You are offering to buy <b>${o}</b> FSP for >> <b>${s(n)}</b> (Total: ${s(function(s,t){const n=s*t
return n+Math.ceil(n/200)}(o,n))})</span>`,function(){if(!f){const s=t(i()).insertRow(2)
f=s.insertCell(0),f.colSpan="2",f.className="fshCenter"}return f}())}function l(){const s=(c||(c=a("price")),c)
if(s){const t=s.value;-1!==t.search(/^[0-9]+$/)?u(t):f&&""!==f.innerHTML&&e("",f)}}function b(){n(o,"keyup",l)}export default b
//# sourceMappingURL=marketplace-f3e70a36.js.map
