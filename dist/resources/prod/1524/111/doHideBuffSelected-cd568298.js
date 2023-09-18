import{af as i,r as a,ac as s,J as e,aU as n,aO as t,g as c}from"./calfSystem-abb16b0d.js"
import{h as o}from"./hideElement-85f33001.js"
function d(a,s){i("player-name",a).forEach(s)}const l=/Last Activity:<\/td><td>(?<mins>\d+) mins/
function f(i,s){const e=i.dataset.tipped,n=a(l,e)
n<2?i.classList.add(s.l1):n<5?i.classList.add(s.l2):i.classList.add(s.l3)}const u=[["hideGuildInfoTrade","#guild-minibox-action-trade","#online-allies-action-trade"],["hideGuildInfoSecureTrade","#guild-minibox-action-secure-trade","#online-allies-action-secure-trade"],["hideGuildInfoBuff","#guild-minibox-action-quickbuff","#online-allies-action-quickbuff"],["hideGuildInfoMessage","#guild-minibox-action-send-message","#online-allies-action-send-message"]]
function r(i,a){u.forEach((t=>{var c
s[t[0]]&&(c=e(t[a],i),n(c).forEach(o))}))}function m(i){i?.classList&&i.classList.add("fshInvisible")}function h(i,a){var e
s.hideBuffSelected&&(e=t(`${a}-buff-check-on`,i),n(e).forEach(m),m(c(`${a}-quick-buff`)))}export{h as a,f as b,d as c,r as d}
//# sourceMappingURL=doHideBuffSelected-cd568298.js.map
