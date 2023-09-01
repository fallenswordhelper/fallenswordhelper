import{q as t,a5 as a,p as n,l as o,c0 as s,o as e,c as i,j as c,n as p,d as u,g as d,a6 as r}from"./calfSystem-076d7a01.js"
import{c as f}from"./closestTable-3ad39b1c.js"
const l="#pCC #withdraw_amount",m="#pCC #deposit_amount",C='#pCC input[value="Deposit"]'
function b(n){"0"===a(c("#pCC b")[n])&&(t(C).disabled=!0)}function h(a,n=document){return t("deposit"===a?m:l,n).value}function w(o,s,e){!function(t){const a=d("info-msg")
a?f(a).replaceWith(t):n().prepend(t)}(e),function(a){const n=Number(h("deposit")),o=Number(h("deposit",a))
o<n&&(t(m).value=o)}(s),t(l).value=o.initWithdraw,function(t,n){const o=c(t,n)
c(t).forEach(((t,n)=>{r(a(o[n]),t)}))}("#statbar-gold, #statbar-gold-tooltip dd, #pCC b",s),b(o.depoPos)}function v(t,a,n){n.preventDefault(),p("bank",a),async function(t,a,n){const o=await u({...t.data,mode:a,amount:n}),s=d("info-msg",o)
s&&w(t,o,f(s))}(t,a,h(a))}function g(a){!function(t){t.appLink&&n().append(o({classList:"fshCenter",innerHTML:`<a href="${s}bank">Go to Guild Bank</a>`}))}(a)
const c=t(C),p=t('#pCC input[value="Withdraw"]')
p&&c&&function(t,a,n){b(t.depoPos),e(a,i(v,t,"deposit")),e(n,i(v,t,"withdraw"))}(a,c,p)}function k(n){const o=t(n.headSelector)
o&&a(o)===n.headText&&g(n)}export{k as a}
//# sourceMappingURL=ajaxifyBank-5a0f7b32.js.map
