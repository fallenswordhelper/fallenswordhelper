import{a as N}from"./chunk-U5B3SRJN.js";import{a}from"./chunk-NMCSNKGX.js";import{a as l}from"./chunk-NGWVGVXB.js";import{a as y}from"./chunk-RJZW6ANB.js";import{a as h}from"./chunk-ZG7AZG2H.js";import{a as B}from"./chunk-G5RZKOR2.js";import{a as u}from"./chunk-MHKH5FC5.js";import{a as s}from"./chunk-C3UZY667.js";import{a as g}from"./chunk-DUQP22PP.js";import{a as c}from"./chunk-ZJNDZYVS.js";import{a as p}from"./chunk-KCBAQFJY.js";import{a as d}from"./chunk-DM72I4Z3.js";import{a as r}from"./chunk-6SHDCONG.js";import{a as n}from"./chunk-BOMGPUDJ.js";function E(o,e){a("player-name",o).forEach(e)}function L(o,e){let t=o.dataset.tipped,i=/Last Activity:<\/td><td>(\d+) mins/.exec(t)[1];i<2?o.classList.add(e.l1):i<5?o.classList.add(e.l2):o.classList.add(e.l3)}function m(o){d(o).forEach(l)}var b=[["hideGuildInfoTrade","#guild-minibox-action-trade","#online-allies-action-trade"],["hideGuildInfoSecureTrade","#guild-minibox-action-secure-trade","#online-allies-action-secure-trade"],["hideGuildInfoBuff","#guild-minibox-action-quickbuff","#online-allies-action-quickbuff"],["hideGuildInfoMessage","#guild-minibox-action-send-message","#online-allies-action-send-message"]];function I(o,e,t){r[t[0]]&&m(p(t[e],o))}function C(o,e){b.forEach(n(I,o,e))}function x(o,e,t){t.preventDefault(),t.target.classList.toggle(o),t.target.classList.toggle(e)}function S(o,e){let i=a(e,o).map(f=>u(f.nextElementSibling));y(i.join())}function k([o,e,t,i]){return[[n(s,e),n(x,e,t)],[n(s,t),n(x,e,t)],[N(i),n(S,o,e)]]}function A(o,e){let t=o.find(i=>i[0](e.target));if(t)return t[1](e)}function T([o,e,t,i]){return n(A,k([o,e,t,i]))}function q([o,e,t,i]){if(h)return;let f=`${e}-buff-check-off`;$(`.${t}`).off("click"),$(`.${f}`).off("click"),$(`#${i}`).off("click"),g(o.parentNode,T([o,t,f,i]))}function v(o,e){let t=`${e}-buff-check-on`,i=`${e}-quick-buff`;r.hideBuffSelected?(m(B(t,o)),l(c(i))):r.fixBuffSelected&&q([o,e,t,i])}export{E as a,L as b,C as c,v as d};
//# sourceMappingURL=chunk-JGRPA6WZ.js.map
