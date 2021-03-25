import{a as s}from"./addCommas-e39c029a.js"
import{c as t}from"./closestTable-13063e83.js"
import{f as n,p as o,z as e,B as a}from"./calfSystem-60c20ae9.js"
import"./closest-214539bf.js"
let c,r,f
function i(){return c||(c=e("amount")),c}function u(n){const o=i().value
a(`<span class="fshBlue">You are offering to buy <b>${o}</b> FSP for >> <b>${s(n)}</b> (Total: ${s(function(s,t){const n=s*t
return n+Math.ceil(n/200)}(o,n))})</span>`,function(){if(!f){const s=t(i()).insertRow(2)
f=s.insertCell(0),f.colSpan="2",f.className="fshCenter"}return f}())}function l(){const s=(r||(r=e("price")),r)
if(s){const t=s.value;-1!==t.search(/^[0-9]+$/)?u(t):f&&""!==f.innerHTML&&a("",f)}}function m(){n(o,"keyup",l)}export default m
//# sourceMappingURL=marketplace-1c77039b.js.map
