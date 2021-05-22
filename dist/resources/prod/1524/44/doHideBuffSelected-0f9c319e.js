import{g as i}from"./getArrayByClassName-a6fe264a.js"
import{ao as e,t as a,c as n,ab as t,M as s,z as o,y as f,o as c,l,H as d}from"./calfSystem-6ad077b7.js"
import{h as u}from"./hideElement-3be61495.js"
import{o as r}from"./openQuickBuffByName-f16a58eb.js"
import{s as m}from"./selfIdIs-add1b811.js"
function g(e,a){i("player-name",e).forEach(a)}function b(i,e){const a=i.dataset.tipped,n=/Last Activity:<\/td><td>(\d+) mins/.exec(a)[1]
n<2?i.classList.add(e.l1):n<5?i.classList.add(e.l2):i.classList.add(e.l3)}function p(i){e(i).forEach(u)}const h=[["hideGuildInfoTrade","#guild-minibox-action-trade","#online-allies-action-trade"],["hideGuildInfoSecureTrade","#guild-minibox-action-secure-trade","#online-allies-action-secure-trade"],["hideGuildInfoBuff","#guild-minibox-action-quickbuff","#online-allies-action-quickbuff"],["hideGuildInfoMessage","#guild-minibox-action-send-message","#online-allies-action-send-message"]]
function k(i,e,a){n[a[0]]&&p(t(a[e],i))}function x(i,e){h.forEach(a(k,i,e))}function y(i,e,a){a.preventDefault(),a.target.classList.toggle(i),a.target.classList.toggle(e)}function j(e,a){const n=i(a,e).map((i=>d(i.nextElementSibling)))
r(n.join())}function B(i,e){const a=i.find((i=>i[0](e.target)))
if(a)return a[1](e)}function I([i,e,n,t]){return a(B,function([i,e,n,t]){return[[a(l,e),a(y,e,n)],[a(l,n),a(y,e,n)],[m(t),a(j,i,e)]]}([i,e,n,t]))}function L(i,e){const a=`${e}-buff-check-on`,t=`${e}-quick-buff`
n.hideBuffSelected?(p(s(a,i)),u(o(t))):n.fixBuffSelected&&function([i,e,a,n]){if(f)return
const t=`${e}-buff-check-off`
$(`.${a}`).off("click"),$(`.${t}`).off("click"),$(`#${n}`).off("click"),c(i.parentNode,I([i,a,t,n]))}([i,e,a,t])}export{L as a,b,g as c,x as d}
//# sourceMappingURL=doHideBuffSelected-0f9c319e.js.map
