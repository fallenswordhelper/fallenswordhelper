import{q as t,ac as n,p as a,m as o,cC as s,o as e,c as i,k as c,s as p,e as u,g as d,ad as r}from"./calfSystem-ChzN4Q-P.js"
import{c as f}from"./closestTable-DvVVJKGM.js"
const l="#pCC #withdraw_amount",m="#pCC #deposit_amount",C='#pCC input[value="Deposit"]'
function b(a){"0"===n(c("#pCC b")[a])&&(t(C).disabled=!0)}function h(n,a=document){return t("deposit"===n?m:l,a).value}function w(o,s,e){!function(t){const n=d("info-msg")
n?f(n).replaceWith(t):a().prepend(t)}(e),function(n){const a=Number(h("deposit")),o=Number(h("deposit",n))
o<a&&(t(m).value=o)}(s),t(l).value=o.initWithdraw,function(t,a){const o=c(t,a)
c(t).forEach(((t,a)=>{r(n(o[a]),t)}))}("#statbar-gold, #statbar-gold-tooltip dd, #pCC b",s),b(o.depoPos)}function v(t,n,a){a.preventDefault(),p("bank",n),async function(t,n,a){const o=await u({...t.data,mode:n,amount:a})
if(!o)return
const s=d("info-msg",o)
s&&w(t,o,f(s))}(t,n,h(n))}function g(n){!function(t){t.appLink&&a().append(o({classList:"fshCenter",innerHTML:`<a href="${s}bank">Go to Guild Bank</a>`}))}(n)
const c=t(C),p=t('#pCC input[value="Withdraw"]')
p&&c&&function(t,n,a){b(t.depoPos),e(n,i(v,t,"deposit")),e(a,i(v,t,"withdraw"))}(n,c,p)}function k(a){const o=t(a.headSelector)
o&&n(o)===a.headText&&g(a)}export{k as a}
//# sourceMappingURL=ajaxifyBank-BcbJ1vCj.js.map
