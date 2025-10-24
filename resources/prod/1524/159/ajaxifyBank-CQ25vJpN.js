import{q as t,m as n,p as a,v as o,cO as s,o as e,c as i,h as c,s as p,e as u,g as d,l as r}from"./calfSystem-CIdPz3EO.js"
import{c as f}from"./closestTable-CLMP9U5y.js"
const l="#pCC #withdraw_amount",m="#pCC #deposit_amount",C='#pCC input[value="Deposit"]'
function h(a){"0"===n(c("#pCC b")[a])&&(t(C).disabled=!0)}function b(n,a=document){return t("deposit"===n?m:l,a).value}function v(o,s,e){!function(t){const n=d("info-msg")
n?f(n).replaceWith(t):a().prepend(t)}(e),function(n){const a=Number(b("deposit")),o=Number(b("deposit",n))
o<a&&(t(m).value=o)}(s),t(l).value=o.initWithdraw,function(t,a){const o=c(t,a)
c(t).forEach((t,a)=>{r(n(o[a]),t)})}("#statbar-gold, #statbar-gold-tooltip dd, #pCC b",s),h(o.depoPos)}function w(t,n,a){a.preventDefault(),p("bank",n),async function(t,n,a){const o=await u({...t.data,mode:n,amount:a})
if(!o)return
const s=d("info-msg",o)
s&&v(t,o,f(s))}(t,n,b(n))}function g(n){!function(t){t.appLink&&a().append(o({classList:"fshCenter",innerHTML:`<a href="${s}bank">Go to Guild Bank</a>`}))}(n)
const c=t(C),p=t('#pCC input[value="Withdraw"]')
p&&c&&function(t,n,a){h(t.depoPos),e(n,i(w,t,"deposit")),e(a,i(w,t,"withdraw"))}(n,c,p)}function k(a){const o=t(a.headSelector)
o&&n(o)===a.headText&&g(a)}export{k as a}
//# sourceMappingURL=ajaxifyBank-CQ25vJpN.js.map
