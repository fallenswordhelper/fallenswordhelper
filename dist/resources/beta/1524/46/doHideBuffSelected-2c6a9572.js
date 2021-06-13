import{g as i}from"./getArrayByClassName-f5e2f789.js"
import{ap as e,t as n,c as t,ab as a,M as s,z as o,y as c,o as f,l as d,H as l}from"./calfSystem-cbf77dd7.js"
import{h as u}from"./hideElement-452544d4.js"
import{o as r}from"./openQuickBuffByName-41d9e99c.js"
import{s as m}from"./selfIdIs-dbeabb41.js"
function g(e,n){i("player-name",e).forEach(n)}function b(i,e){const n=i.dataset.tipped,t=/Last Activity:<\/td><td>(\d+) mins/.exec(n)[1]
t<2?i.classList.add(e.l1):t<5?i.classList.add(e.l2):i.classList.add(e.l3)}function p(i){e(i).forEach(u)}const h=[["hideGuildInfoTrade","#guild-minibox-action-trade","#online-allies-action-trade"],["hideGuildInfoSecureTrade","#guild-minibox-action-secure-trade","#online-allies-action-secure-trade"],["hideGuildInfoBuff","#guild-minibox-action-quickbuff","#online-allies-action-quickbuff"],["hideGuildInfoMessage","#guild-minibox-action-send-message","#online-allies-action-send-message"]]
function k(i,e,n){t[n[0]]&&p(a(n[e],i))}function x(i,e){h.forEach(n(k,i,e))}function y(i,e,n){n.preventDefault(),n.target.classList.toggle(i),n.target.classList.toggle(e)}function j(e,n){const t=i(n,e).map((i=>l(i.nextElementSibling)))
r(t.join())}function B(i,e){const n=i.find((i=>i[0](e.target)))
if(n)return n[1](e)}function I([i,e,t,a]){return n(B,function([i,e,t,a]){return[[n(d,e),n(y,e,t)],[n(d,t),n(y,e,t)],[m(a),n(j,i,e)]]}([i,e,t,a]))}function L(i,e){const n=`${e}-buff-check-on`,a=`${e}-quick-buff`
t.hideBuffSelected?(p(s(n,i)),u(o(a))):t.fixBuffSelected&&function([i,e,n,t]){if(c)return
const a=`${e}-buff-check-off`
$(`.${n}`).off("click"),$(`.${a}`).off("click"),$(`#${t}`).off("click"),f(i.parentNode,I([i,n,a,t]))}([i,e,n,a])}export{L as a,b,g as c,x as d}
//# sourceMappingURL=doHideBuffSelected-2c6a9572.js.map
