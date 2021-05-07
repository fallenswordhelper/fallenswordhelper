import{g as i}from"./getArrayByClassName-8fef58fe.js"
import{N as e,t as n,c as t,ac as a,M as s,z as f,y as o,o as c,l,H as d}from"./calfSystem-1d588248.js"
import{h as u}from"./hideElement-0d0f9065.js"
import{o as r}from"./openQuickBuffByName-f88cfb0a.js"
import{s as m}from"./selfIdIs-7751f9c3.js"
function g(e,n){i("player-name",e).forEach(n)}function p(i,e){const n=i.dataset.tipped,t=/Last Activity:<\/td><td>(\d+) mins/.exec(n)[1]
t<2?i.classList.add(e.l1):t<5?i.classList.add(e.l2):i.classList.add(e.l3)}function b(i){e(i).forEach(u)}const h=[["hideGuildInfoTrade","#guild-minibox-action-trade","#online-allies-action-trade"],["hideGuildInfoSecureTrade","#guild-minibox-action-secure-trade","#online-allies-action-secure-trade"],["hideGuildInfoBuff","#guild-minibox-action-quickbuff","#online-allies-action-quickbuff"],["hideGuildInfoMessage","#guild-minibox-action-send-message","#online-allies-action-send-message"]]
function k(i,e,n){t[n[0]]&&b(a(n[e],i))}function x(i,e){h.forEach(n(k,i,e))}function y(i,e,n){n.preventDefault(),n.target.classList.toggle(i),n.target.classList.toggle(e)}function j(e,n){const t=i(n,e).map((i=>d(i.nextElementSibling)))
r(t.join())}function B(i,e){const n=i.find((i=>i[0](e.target)))
if(n)return n[1](e)}function I([i,e,t,a]){return n(B,function([i,e,t,a]){return[[n(l,e),n(y,e,t)],[n(l,t),n(y,e,t)],[m(a),n(j,i,e)]]}([i,e,t,a]))}function L(i,e){const n=`${e}-buff-check-on`,a=`${e}-quick-buff`
t.hideBuffSelected?(b(s(n,i)),u(f(a))):t.fixBuffSelected&&function([i,e,n,t]){if(o)return
const a=`${e}-buff-check-off`
$(`.${n}`).off("click"),$(`.${a}`).off("click"),$(`#${t}`).off("click"),c(i.parentNode,I([i,n,a,t]))}([i,e,n,a])}export{L as a,p as b,g as c,x as d}
//# sourceMappingURL=doHideBuffSelected-9d2a9095.js.map
