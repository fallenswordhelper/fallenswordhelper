import{g as e}from"./getArrayByClassName-6d0c056d.js"
import{M as i,t as n,c as t,ab as a,J as s,y as o,o as c,l as f,G as l}from"./calfSystem-37f70deb.js"
import{h as d}from"./hideElement-eb117e0e.js"
import{o as u}from"./openQuickBuffByName-28108be8.js"
import{s as r}from"./selfIdIs-392f9b4d.js"
function m(i,n){e("player-name",i).forEach(n)}function g(e,i){const n=e.dataset.tipped,t=/Last Activity:<\/td><td>(\d+) mins/.exec(n)[1]
t<2?e.classList.add(i.l1):t<5?e.classList.add(i.l2):e.classList.add(i.l3)}function b(e){i(e).forEach(d)}const p=[["hideGuildInfoTrade","#guild-minibox-action-trade","#online-allies-action-trade"],["hideGuildInfoSecureTrade","#guild-minibox-action-secure-trade","#online-allies-action-secure-trade"],["hideGuildInfoBuff","#guild-minibox-action-quickbuff","#online-allies-action-quickbuff"],["hideGuildInfoMessage","#guild-minibox-action-send-message","#online-allies-action-send-message"]]
function h(e,i,n){t[n[0]]&&b(a(n[i],e))}function k(e,i){p.forEach(n(h,e,i))}function x(e,i,n){n.preventDefault(),n.target.classList.toggle(e),n.target.classList.toggle(i)}function y(i,n){const t=e(n,i).map((e=>l(e.nextElementSibling)))
u(t.join())}function j(e,i){const n=e.find((e=>e[0](i.target)))
if(n)return n[1](i)}function B([e,i,t,a]){return n(j,function([e,i,t,a]){return[[n(f,i),n(x,i,t)],[n(f,t),n(x,i,t)],[r(a),n(y,e,i)]]}([e,i,t,a]))}function I(e,i){const n=`${i}-buff-check-on`,a=`${i}-quick-buff`
t.hideBuffSelected?(b(s(n,e)),d(o(a))):t.fixBuffSelected&&function([e,i,n,t]){const a=`${i}-buff-check-off`
$(`.${n}`).off("click"),$(`.${a}`).off("click"),$(`#${t}`).off("click"),c(e.parentNode,B([e,n,a,t]))}([e,i,n,a])}export{I as a,g as b,m as c,k as d}
//# sourceMappingURL=doHideBuffSelected-779ba5d5.js.map
