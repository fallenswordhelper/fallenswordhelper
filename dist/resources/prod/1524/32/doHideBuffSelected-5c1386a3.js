import{g as i}from"./getArrayByClassName-b62a000f.js"
import{M as e,t as a,c as n,aa as t,J as s,y as o,o as c,l as f,G as l}from"./calfSystem-45544049.js"
import{h as u}from"./hideElement-7c48eb54.js"
import{o as d}from"./openQuickBuffByName-81a3ab3b.js"
import{s as r}from"./selfIdIs-05e1a8a1.js"
function m(e,a){i("player-name",e).forEach(a)}function g(i,e){const a=i.dataset.tipped,n=/Last Activity:<\/td><td>(\d+) mins/.exec(a)[1]
n<2?i.classList.add(e.l1):n<5?i.classList.add(e.l2):i.classList.add(e.l3)}function b(i){e(i).forEach(u)}const p=[["hideGuildInfoTrade","#guild-minibox-action-trade","#online-allies-action-trade"],["hideGuildInfoSecureTrade","#guild-minibox-action-secure-trade","#online-allies-action-secure-trade"],["hideGuildInfoBuff","#guild-minibox-action-quickbuff","#online-allies-action-quickbuff"],["hideGuildInfoMessage","#guild-minibox-action-send-message","#online-allies-action-send-message"]]
function h(i,e,a){n[a[0]]&&b(t(a[e],i))}function k(i,e){p.forEach(a(h,i,e))}function x(i,e,a){a.preventDefault(),a.target.classList.toggle(i),a.target.classList.toggle(e)}function y(e,a){const n=i(a,e).map((i=>l(i.nextElementSibling)))
d(n.join())}function j(i,e){const a=i.find((i=>i[0](e.target)))
if(a)return a[1](e)}function B([i,e,n,t]){return a(j,function([i,e,n,t]){return[[a(f,e),a(x,e,n)],[a(f,n),a(x,e,n)],[r(t),a(y,i,e)]]}([i,e,n,t]))}function I(i,e){const a=`${e}-buff-check-on`,t=`${e}-quick-buff`
n.hideBuffSelected?(b(s(a,i)),u(o(t))):n.fixBuffSelected&&function([i,e,a,n]){const t=`${e}-buff-check-off`
$(`.${a}`).off("click"),$(`.${t}`).off("click"),$(`#${n}`).off("click"),c(i.parentNode,B([i,a,t,n]))}([i,e,a,t])}export{I as a,g as b,m as c,k as d}
//# sourceMappingURL=doHideBuffSelected-5c1386a3.js.map