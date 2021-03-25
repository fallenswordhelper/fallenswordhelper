import{g as e}from"./getArrayByClassName-23419047.js"
import{N as i,t as n,c as t,ad as a,K as s,z as o,o as c,l as f,H as l}from"./calfSystem-eeb1d862.js"
import{h as d}from"./hideElement-f0e898f0.js"
import{o as u}from"./openQuickBuffByName-d4740e2d.js"
import{s as r}from"./selfIdIs-12760c69.js"
function m(i,n){e("player-name",i).forEach(n)}function g(e,i){const n=e.dataset.tipped,t=/Last Activity:<\/td><td>(\d+) mins/.exec(n)[1]
t<2?e.classList.add(i.l1):t<5?e.classList.add(i.l2):e.classList.add(i.l3)}function p(e){i(e).forEach(d)}const b=[["hideGuildInfoTrade","#guild-minibox-action-trade","#online-allies-action-trade"],["hideGuildInfoSecureTrade","#guild-minibox-action-secure-trade","#online-allies-action-secure-trade"],["hideGuildInfoBuff","#guild-minibox-action-quickbuff","#online-allies-action-quickbuff"],["hideGuildInfoMessage","#guild-minibox-action-send-message","#online-allies-action-send-message"]]
function h(e,i,n){t[n[0]]&&p(a(n[i],e))}function k(e,i){b.forEach(n(h,e,i))}function x(e,i,n){n.preventDefault(),n.target.classList.toggle(e),n.target.classList.toggle(i)}function j(i,n){const t=e(n,i).map((e=>l(e.nextElementSibling)))
u(t.join())}function y(e,i){const n=e.find((e=>e[0](i.target)))
if(n)return n[1](i)}function B([e,i,t,a]){return n(y,function([e,i,t,a]){return[[n(f,i),n(x,i,t)],[n(f,t),n(x,i,t)],[r(a),n(j,e,i)]]}([e,i,t,a]))}function I(e,i){const n=`${i}-buff-check-on`,a=`${i}-quick-buff`
t.hideBuffSelected?(p(s(n,e)),d(o(a))):t.fixBuffSelected&&function([e,i,n,t]){const a=`${i}-buff-check-off`
$(`.${n}`).off("click"),$(`.${a}`).off("click"),$(`#${t}`).off("click"),c(e.parentNode,B([e,n,a,t]))}([e,i,n,a])}export{I as a,g as b,m as c,k as d}
//# sourceMappingURL=doHideBuffSelected-76ab1a2e.js.map
