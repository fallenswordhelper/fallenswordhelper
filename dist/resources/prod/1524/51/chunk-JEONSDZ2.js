import{a as N}from"./chunk-WWH5C2D6.js";import{a}from"./chunk-NHXMBUTR.js";import{a as l}from"./chunk-MF5UI2DL.js";import{a as h}from"./chunk-E7MKAKV7.js";import{a as y}from"./chunk-WHAZT5VY.js";import{a as B}from"./chunk-WDK5KJW5.js";import{a as u}from"./chunk-AN443625.js";import{a as s}from"./chunk-CT4SVZHO.js";import{a as g}from"./chunk-G3O526VI.js";import{a as c}from"./chunk-2B42SRXB.js";import{a as p}from"./chunk-EPYDL6MF.js";import{a as d}from"./chunk-TDNJGM62.js";import{a as r}from"./chunk-AN5TC666.js";import{a as n}from"./chunk-DEDCEYVR.js";function E(o,e){a("player-name",o).forEach(e)}function L(o,e){let t=o.dataset.tipped,i=/Last Activity:<\/td><td>(\d+) mins/.exec(t)[1];i<2?o.classList.add(e.l1):i<5?o.classList.add(e.l2):o.classList.add(e.l3)}function m(o){d(o).forEach(l)}var b=[["hideGuildInfoTrade","#guild-minibox-action-trade","#online-allies-action-trade"],["hideGuildInfoSecureTrade","#guild-minibox-action-secure-trade","#online-allies-action-secure-trade"],["hideGuildInfoBuff","#guild-minibox-action-quickbuff","#online-allies-action-quickbuff"],["hideGuildInfoMessage","#guild-minibox-action-send-message","#online-allies-action-send-message"]];function C(o,e,t){r[t[0]]&&m(p(t[e],o))}function I(o,e){b.forEach(n(C,o,e))}function x(o,e,t){t.preventDefault(),t.target.classList.toggle(o),t.target.classList.toggle(e)}function S(o,e){let i=a(e,o).map(f=>u(f.nextElementSibling));h(i.join())}function k([o,e,t,i]){return[[n(s,e),n(x,e,t)],[n(s,t),n(x,e,t)],[N(i),n(S,o,e)]]}function A(o,e){let t=o.find(i=>i[0](e.target));if(t)return t[1](e)}function T([o,e,t,i]){return n(A,k([o,e,t,i]))}function q([o,e,t,i]){if(y)return;let f=`${e}-buff-check-off`;$(`.${t}`).off("click"),$(`.${f}`).off("click"),$(`#${i}`).off("click"),g(o.parentNode,T([o,t,f,i]))}function v(o,e){let t=`${e}-buff-check-on`,i=`${e}-quick-buff`;r.hideBuffSelected?(m(B(t,o)),l(c(i))):r.fixBuffSelected&&q([o,e,t,i])}export{E as a,L as b,I as c,v as d};
//# sourceMappingURL=chunk-JEONSDZ2.js.map
