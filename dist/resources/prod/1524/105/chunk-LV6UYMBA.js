import{a as m}from"./chunk-BWC3ASDO.js";import{a as D}from"./chunk-4S4RJIWM.js";import{a as C}from"./chunk-I6ZSBYQ3.js";import{a as w}from"./chunk-GUJMNTXY.js";import{a as h}from"./chunk-Y5EGDMIB.js";import{a as n}from"./chunk-FMA2QB7F.js";import{a as p}from"./chunk-KOM3R443.js";import{a}from"./chunk-V45UJIF2.js";import{b as d}from"./chunk-Q3ULPWYK.js";import{a as f}from"./chunk-JCK66TTB.js";import{a as u}from"./chunk-SY4ES3W2.js";import{G as l}from"./chunk-5ELKH2XV.js";import{a as c}from"./chunk-BZJZQFW2.js";var v="#pCC #withdraw_amount",x="#pCC #deposit_amount",y='#pCC input[value="Deposit"]';function B(o){let t=u("info-msg");t?m(t).replaceWith(o):d().prepend(o)}function T(o,t){let e=a(o,t);a(o).forEach((i,r)=>{D(p(e[r]),i)})}function b(o){p(a("#pCC b")[o])==="0"&&(n(y).disabled=!0)}function s(o,t=document){return n(o==="deposit"?x:v,t).value}function g(o){let t=Number(s("deposit")),e=Number(s("deposit",o));e<t&&(n(x).value=e)}function k(o,t,e){B(e),g(t),n(v).value=o.initWithdraw,T("#statbar-gold, #statbar-gold-tooltip dd, #pCC b",t),b(o.depoPos)}async function L(o,t,e){let i=await C({...o.data,mode:t,amount:e}),r=u("info-msg",i);r&&k(o,i,m(r))}function A(o,t,e){e.preventDefault(),h("bank",t),L(o,t,s(t))}function j(o){o.appLink&&d().append(w({classList:"fshCenter",innerHTML:`<a href="${l}bank">Go to Guild Bank</a>`}))}function q(o,t,e){b(o.depoPos),f(t,c(A,o,"deposit")),f(e,c(A,o,"withdraw"))}function E(o){j(o);let t=n(y),e=n('#pCC input[value="Withdraw"]');e&&t&&q(o,t,e)}function G(o){let t=n(o.headSelector);t&&p(t)===o.headText&&E(o)}export{G as a};
//# sourceMappingURL=chunk-LV6UYMBA.js.map
