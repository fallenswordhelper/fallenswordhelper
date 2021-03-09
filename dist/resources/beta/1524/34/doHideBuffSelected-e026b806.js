import{g as i}from"./getArrayByClassName-30ef3369.js"
import{M as e,t as n,c as t,aa as a,J as s,y as o,o as f,l as c,G as l}from"./calfSystem-dfa26790.js"
import{h as d}from"./hideElement-7b9c883f.js"
import{o as u}from"./openQuickBuffByName-b13feb07.js"
import{s as r}from"./selfIdIs-54e4a3f8.js"
function m(e,n){i("player-name",e).forEach(n)}function g(i,e){const n=i.dataset.tipped,t=/Last Activity:<\/td><td>(\d+) mins/.exec(n)[1]
t<2?i.classList.add(e.l1):t<5?i.classList.add(e.l2):i.classList.add(e.l3)}function b(i){e(i).forEach(d)}const p=[["hideGuildInfoTrade","#guild-minibox-action-trade","#online-allies-action-trade"],["hideGuildInfoSecureTrade","#guild-minibox-action-secure-trade","#online-allies-action-secure-trade"],["hideGuildInfoBuff","#guild-minibox-action-quickbuff","#online-allies-action-quickbuff"],["hideGuildInfoMessage","#guild-minibox-action-send-message","#online-allies-action-send-message"]]
function h(i,e,n){t[n[0]]&&b(a(n[e],i))}function k(i,e){p.forEach(n(h,i,e))}function x(i,e,n){n.preventDefault(),n.target.classList.toggle(i),n.target.classList.toggle(e)}function y(e,n){const t=i(n,e).map((i=>l(i.nextElementSibling)))
u(t.join())}function j(i,e){const n=i.find((i=>i[0](e.target)))
if(n)return n[1](e)}function B([i,e,t,a]){return n(j,function([i,e,t,a]){return[[n(c,e),n(x,e,t)],[n(c,t),n(x,e,t)],[r(a),n(y,i,e)]]}([i,e,t,a]))}function I(i,e){const n=`${e}-buff-check-on`,a=`${e}-quick-buff`
t.hideBuffSelected?(b(s(n,i)),d(o(a))):t.fixBuffSelected&&function([i,e,n,t]){const a=`${e}-buff-check-off`
$(`.${n}`).off("click"),$(`.${a}`).off("click"),$(`#${t}`).off("click"),f(i.parentNode,B([i,n,a,t]))}([i,e,n,a])}export{I as a,g as b,m as c,k as d}
//# sourceMappingURL=doHideBuffSelected-e026b806.js.map
