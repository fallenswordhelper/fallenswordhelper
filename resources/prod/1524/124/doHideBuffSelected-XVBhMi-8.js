import{aj as a,r as i,ag as s,K as e,a_ as n,bH as c,aU as t,g as d}from"./calfSystem-0LeC9ahe.js"
function o(i,s){a("player-name",i).forEach(s)}const l=/Last Activity:<\/td><td>(?<mins>\d+) mins/
function f(a,s){const e=a.dataset.tipped,n=i(l,e)
n<2?a.classList.add(s.l1):n<5?a.classList.add(s.l2):a.classList.add(s.l3)}const u=[["hideGuildInfoTrade","#guild-minibox-action-trade","#online-allies-action-trade"],["hideGuildInfoSecureTrade","#guild-minibox-action-secure-trade","#online-allies-action-secure-trade"],["hideGuildInfoBuff","#guild-minibox-action-quickbuff","#online-allies-action-quickbuff"],["hideGuildInfoMessage","#guild-minibox-action-send-message","#online-allies-action-send-message"]]
function r(a,i){u.forEach((t=>{var d
s[t[0]]&&(d=e(t[i],a),n(d).forEach(c))}))}function m(a){a?.classList&&a.classList.add("fshInvisible")}function b(a,i){var e
s.hideBuffSelected&&(e=t(`${i}-buff-check-on`,a),n(e).forEach(m),m(d(`${i}-quick-buff`)))}export{b as a,f as b,o as c,r as d}
//# sourceMappingURL=doHideBuffSelected-XVBhMi-8.js.map
