import{g as i}from"./getArrayByClassName-4fe5cf41.js"
import{ar as e,t as n,c as t,ad as a,M as s,z as o,y as c,o as f,l,H as d}from"./calfSystem-85fa6364.js"
import{h as u}from"./hideElement-3852cc2c.js"
import{o as r}from"./openQuickBuffByName-fd250012.js"
import{s as m}from"./selfIdIs-f8ec4ad5.js"
function g(e,n){i("player-name",e).forEach(n)}function p(i,e){const n=i.dataset.tipped,t=/Last Activity:<\/td><td>(\d+) mins/.exec(n)[1]
t<2?i.classList.add(e.l1):t<5?i.classList.add(e.l2):i.classList.add(e.l3)}function h(i){e(i).forEach(u)}const b=[["hideGuildInfoTrade","#guild-minibox-action-trade","#online-allies-action-trade"],["hideGuildInfoSecureTrade","#guild-minibox-action-secure-trade","#online-allies-action-secure-trade"],["hideGuildInfoBuff","#guild-minibox-action-quickbuff","#online-allies-action-quickbuff"],["hideGuildInfoMessage","#guild-minibox-action-send-message","#online-allies-action-send-message"]]
function k(i,e,n){t[n[0]]&&h(a(n[e],i))}function x(i,e){b.forEach(n(k,i,e))}function y(i,e,n){n.preventDefault(),n.target.classList.toggle(i),n.target.classList.toggle(e)}function j(e,n){const t=i(n,e).map((i=>d(i.nextElementSibling)))
r(t.join())}function B(i,e){const n=i.find((i=>i[0](e.target)))
if(n)return n[1](e)}function I([i,e,t,a]){return n(B,function([i,e,t,a]){return[[n(l,e),n(y,e,t)],[n(l,t),n(y,e,t)],[m(a),n(j,i,e)]]}([i,e,t,a]))}function L(i,e){const n=`${e}-buff-check-on`,a=`${e}-quick-buff`
t.hideBuffSelected?(h(s(n,i)),u(o(a))):t.fixBuffSelected&&function([i,e,n,t]){if(c)return
const a=`${e}-buff-check-off`
$(`.${n}`).off("click"),$(`.${a}`).off("click"),$(`#${t}`).off("click"),f(i.parentNode,I([i,n,a,t]))}([i,e,n,a])}export{L as a,p as b,g as c,x as d}
//# sourceMappingURL=doHideBuffSelected-169c075a.js.map