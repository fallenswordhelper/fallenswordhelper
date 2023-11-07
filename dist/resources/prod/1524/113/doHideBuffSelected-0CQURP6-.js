import{ae as i,r as a,ab as s,I as e,aS as n,aM as t,g as o}from"./calfSystem-VUa7wwu1.js"
import{h as c}from"./hideElement-RABq1RME.js"
function d(a,s){i("player-name",a).forEach(s)}const l=/Last Activity:<\/td><td>(?<mins>\d+) mins/
function f(i,s){const e=i.dataset.tipped,n=a(l,e)
n<2?i.classList.add(s.l1):n<5?i.classList.add(s.l2):i.classList.add(s.l3)}const u=[["hideGuildInfoTrade","#guild-minibox-action-trade","#online-allies-action-trade"],["hideGuildInfoSecureTrade","#guild-minibox-action-secure-trade","#online-allies-action-secure-trade"],["hideGuildInfoBuff","#guild-minibox-action-quickbuff","#online-allies-action-quickbuff"],["hideGuildInfoMessage","#guild-minibox-action-send-message","#online-allies-action-send-message"]]
function r(i,a){u.forEach((t=>{var o
s[t[0]]&&(o=e(t[a],i),n(o).forEach(c))}))}function m(i){i?.classList&&i.classList.add("fshInvisible")}function h(i,a){var e
s.hideBuffSelected&&(e=t(`${a}-buff-check-on`,i),n(e).forEach(m),m(o(`${a}-quick-buff`)))}export{h as a,f as b,d as c,r as d}
//# sourceMappingURL=doHideBuffSelected-0CQURP6-.js.map
