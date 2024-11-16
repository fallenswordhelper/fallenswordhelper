import{aj as a,r as i,ag as s,b0 as e,bM as n,K as c,aW as t,g as d}from"./calfSystem-Blt4DbaE.js"
function o(i,s){a("player-name",i).forEach(s)}const l=/Last Activity:<\/td><td>(?<mins>\d+) mins/
function f(a,s){const e=a.dataset.tipped,n=i(l,e)
n<2?a.classList.add(s.l1):n<5?a.classList.add(s.l2):a.classList.add(s.l3)}const u=[["hideGuildInfoTrade","#guild-minibox-action-trade","#online-allies-action-trade"],["hideGuildInfoSecureTrade","#guild-minibox-action-secure-trade","#online-allies-action-secure-trade"],["hideGuildInfoBuff","#guild-minibox-action-quickbuff","#online-allies-action-quickbuff"],["hideGuildInfoMessage","#guild-minibox-action-send-message","#online-allies-action-send-message"]]
function r(a,i){u.forEach((t=>{var d
s[t[0]]&&(d=c(t[i],a),e(d).forEach(n))}))}function b(a){a?.classList&&a.classList.add("fshInvisible")}function m(a,i){var n
s.hideBuffSelected&&(n=t(`${i}-buff-check-on`,a),e(n).forEach(b),b(d(`${i}-quick-buff`)))}export{m as a,f as b,o as c,r as d}
//# sourceMappingURL=doHideBuffSelected-DCgm-8LK.js.map
