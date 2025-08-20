import{q as t,l as n,p as a,u as o,cI as s,o as e,c as i,h as c,s as u,e as p,g as d,k as r}from"./calfSystem-CT1aM4VG.js"
import{c as f}from"./closestTable-C24mp168.js"
const l="#pCC #withdraw_amount",m="#pCC #deposit_amount",C='#pCC input[value="Deposit"]'
function h(a){"0"===n(c("#pCC b")[a])&&(t(C).disabled=!0)}function b(n,a=document){return t("deposit"===n?m:l,a).value}function w(o,s,e){!function(t){const n=d("info-msg")
n?f(n).replaceWith(t):a().prepend(t)}(e),function(n){const a=Number(b("deposit")),o=Number(b("deposit",n))
o<a&&(t(m).value=o)}(s),t(l).value=o.initWithdraw,function(t,a){const o=c(t,a)
c(t).forEach(((t,a)=>{r(n(o[a]),t)}))}("#statbar-gold, #statbar-gold-tooltip dd, #pCC b",s),h(o.depoPos)}function k(t,n,a){a.preventDefault(),u("bank",n),async function(t,n,a){const o=await p({...t.data,mode:n,amount:a})
if(!o)return
const s=d("info-msg",o)
s&&w(t,o,f(s))}(t,n,b(n))}function v(n){!function(t){t.appLink&&a().append(o({classList:"fshCenter",innerHTML:`<a href="${s}bank">Go to Guild Bank</a>`}))}(n)
const c=t(C),u=t('#pCC input[value="Withdraw"]')
u&&c&&function(t,n,a){h(t.depoPos),e(n,i(k,t,"deposit")),e(a,i(k,t,"withdraw"))}(n,c,u)}function g(a){const o=t(a.headSelector)
o&&n(o)===a.headText&&v(a)}export{g as a}
//# sourceMappingURL=ajaxifyBank-64eQg10Q.js.map
