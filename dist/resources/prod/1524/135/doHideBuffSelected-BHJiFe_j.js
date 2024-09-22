import{aj as a,r as i,ag as s,K as e,b0 as n,bM as c,aW as t,g as d}from"./calfSystem-B-q5dZfX.js"
function o(i,s){a("player-name",i).forEach(s)}const l=/Last Activity:<\/td><td>(?<mins>\d+) mins/
function f(a,s){const e=a.dataset.tipped,n=i(l,e)
n<2?a.classList.add(s.l1):n<5?a.classList.add(s.l2):a.classList.add(s.l3)}const u=[["hideGuildInfoTrade","#guild-minibox-action-trade","#online-allies-action-trade"],["hideGuildInfoSecureTrade","#guild-minibox-action-secure-trade","#online-allies-action-secure-trade"],["hideGuildInfoBuff","#guild-minibox-action-quickbuff","#online-allies-action-quickbuff"],["hideGuildInfoMessage","#guild-minibox-action-send-message","#online-allies-action-send-message"]]
function r(a,i){u.forEach((t=>{var d
s[t[0]]&&(d=e(t[i],a),n(d).forEach(c))}))}function b(a){a?.classList&&a.classList.add("fshInvisible")}function m(a,i){var e
s.hideBuffSelected&&(e=t(`${i}-buff-check-on`,a),n(e).forEach(b),b(d(`${i}-quick-buff`)))}export{m as a,f as b,o as c,r as d}
//# sourceMappingURL=doHideBuffSelected-BHJiFe_j.js.map
