import{M as a,t as i,c as e,a9 as s,I as n,y as t}from"./calfSystem-2741d97b.js"
import{h as o}from"./hideElement-6a4f37a8.js"
import{g as d}from"./getArrayByClassName-3946388a.js"
function c(a,i){d("player-name",a).forEach(i)}function l(a,i){const e=a.dataset.tipped,s=/Last Activity:<\/td><td>(\d+) mins/.exec(e)[1]
s<2?a.classList.add(i.l1):s<5?a.classList.add(i.l2):a.classList.add(i.l3)}function f(i){a(i).forEach(o)}const u=[["hideGuildInfoTrade","#guild-minibox-action-trade","#online-allies-action-trade"],["hideGuildInfoSecureTrade","#guild-minibox-action-secure-trade","#online-allies-action-secure-trade"],["hideGuildInfoBuff","#guild-minibox-action-quickbuff","#online-allies-action-quickbuff"],["hideGuildInfoMessage","#guild-minibox-action-send-message","#online-allies-action-send-message"]]
function r(a,i,n){e[n[0]]&&f(s(n[i],a))}function m(a,e){u.forEach(i(r,a,e))}function h(a,i,s){e.hideBuffSelected&&(f(n(i,a)),o(t(s)))}export{h as a,l as b,c,m as d}
//# sourceMappingURL=doHideBuffSelected-c90c8d81.js.map
