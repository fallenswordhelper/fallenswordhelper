import{q as t,a8 as a,p as n,m as o,c8 as s,o as e,c as i,k as c,e as p,g as u,s as d,a9 as r}from"./calfSystem-DKih1pr1.js"
import{c as f}from"./closestTable-BpwC4ZYl.js"
const l="#pCC #withdraw_amount",m="#pCC #deposit_amount",C='#pCC input[value="Deposit"]'
function h(n){"0"===a(c("#pCC b")[n])&&(t(C).disabled=!0)}function b(a,n=document){return t("deposit"===a?m:l,n).value}function w(o,s,e){!function(t){const a=u("info-msg")
a?f(a).replaceWith(t):n().prepend(t)}(e),function(a){const n=Number(b("deposit")),o=Number(b("deposit",a))
o<n&&(t(m).value=o)}(s),t(l).value=o.initWithdraw,function(t,n){const o=c(t,n)
c(t).forEach(((t,n)=>{r(a(o[n]),t)}))}("#statbar-gold, #statbar-gold-tooltip dd, #pCC b",s),h(o.depoPos)}let k=!1,v=!1
function g(t,a,n){n.preventDefault(),function(t){"deposit"!==t||k?"withdraw"!==t||v||(d("bank","withdraw"),v=!0):(d("bank","deposit"),k=!0)}(a),async function(t,a,n){const o=await p({...t.data,mode:a,amount:n})
if(!o)return
const s=u("info-msg",o)
s&&w(t,o,f(s))}(t,a,b(a))}function L(a){!function(t){t.appLink&&n().append(o({classList:"fshCenter",innerHTML:`<a href="${s}bank">Go to Guild Bank</a>`}))}(a)
const c=t(C),p=t('#pCC input[value="Withdraw"]')
p&&c&&function(t,a,n){h(t.depoPos),e(a,i(g,t,"deposit")),e(n,i(g,t,"withdraw"))}(a,c,p)}function T(n){const o=t(n.headSelector)
o&&a(o)===n.headText&&L(n)}export{T as a}
//# sourceMappingURL=ajaxifyBank-Dr3703s9.js.map
