import{ag as i,r as a,ad as s,K as e,aW as n,aQ as t,g as d}from"./calfSystem-2fff342b.js"
import{h as o}from"./hideElement-baffa60f.js"
function c(a,s){i("player-name",a).forEach(s)}const l=/Last Activity:<\/td><td>(?<mins>\d+) mins/
function f(i,s){const e=i.dataset.tipped,n=a(l,e)
n<2?i.classList.add(s.l1):n<5?i.classList.add(s.l2):i.classList.add(s.l3)}const u=[["hideGuildInfoTrade","#guild-minibox-action-trade","#online-allies-action-trade"],["hideGuildInfoSecureTrade","#guild-minibox-action-secure-trade","#online-allies-action-secure-trade"],["hideGuildInfoBuff","#guild-minibox-action-quickbuff","#online-allies-action-quickbuff"],["hideGuildInfoMessage","#guild-minibox-action-send-message","#online-allies-action-send-message"]]
function r(i,a){u.forEach((t=>{var d
s[t[0]]&&(d=e(t[a],i),n(d).forEach(o))}))}function m(i){i?.classList&&i.classList.add("fshInvisible")}function h(i,a){var e
s.hideBuffSelected&&(e=t(`${a}-buff-check-on`,i),n(e).forEach(m),m(d(`${a}-quick-buff`)))}export{h as a,f as b,c,r as d}
//# sourceMappingURL=doHideBuffSelected-b0f37983.js.map
