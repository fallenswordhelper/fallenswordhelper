import{q as t,a8 as n,n as a,e as o,b as s,s as e,d as i,g as c,p,a9 as u,k as d,c8 as r}from"./calfSystem-Blt4DbaE.js"
import{c as f}from"./closestTable-Ddgm5m0P.js"
const l="#pCC #withdraw_amount",m="#pCC #deposit_amount",C='#pCC input[value="Deposit"]'
function b(o){"0"===n(a("#pCC b")[o])&&(t(C).disabled=!0)}function h(n,a=document){return t("deposit"===n?m:l,a).value}function w(o,s,e){!function(t){const n=c("info-msg")
n?f(n).replaceWith(t):p().prepend(t)}(e),function(n){const a=Number(h("deposit")),o=Number(h("deposit",n))
o<a&&(t(m).value=o)}(s),t(l).value=o.initWithdraw,function(t,o){const s=a(t,o)
a(t).forEach(((t,a)=>{u(n(s[a]),t)}))}("#statbar-gold, #statbar-gold-tooltip dd, #pCC b",s),b(o.depoPos)}function v(t,n,a){a.preventDefault(),e("bank",n),async function(t,n,a){const o=await i({...t.data,mode:n,amount:a})
if(!o)return
const s=c("info-msg",o)
s&&w(t,o,f(s))}(t,n,h(n))}function g(n){!function(t){t.appLink&&p().append(d({classList:"fshCenter",innerHTML:`<a href="${r}bank">Go to Guild Bank</a>`}))}(n)
const a=t(C),e=t('#pCC input[value="Withdraw"]')
e&&a&&function(t,n,a){b(t.depoPos),o(n,s(v,t,"deposit")),o(a,s(v,t,"withdraw"))}(n,a,e)}function k(a){const o=t(a.headSelector)
o&&n(o)===a.headText&&g(a)}export{k as a}
//# sourceMappingURL=ajaxifyBank-B-XrwOJ2.js.map
