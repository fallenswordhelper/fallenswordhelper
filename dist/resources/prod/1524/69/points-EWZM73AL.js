import{a as U}from"./chunk-2ALY46IR.js";import{c as T}from"./chunk-P5S6T6RR.js";import{a as R}from"./chunk-F7ALTOEX.js";import{a as E}from"./chunk-7FEHBWYJ.js";import"./chunk-736UJAHD.js";import"./chunk-EC54LTKY.js";import"./chunk-5BEYKAHU.js";import"./chunk-QLTDWVXW.js";import{a as v}from"./chunk-HZG26YKX.js";import{a as h}from"./chunk-DIPZYR4B.js";import"./chunk-R5RY2C2T.js";import{a as S}from"./chunk-4RYOLX4Q.js";import"./chunk-REF22G3S.js";import"./chunk-R6RBH5KQ.js";import"./chunk-KOBTSSSS.js";import{a as M}from"./chunk-V7HQRWBP.js";import{a as N}from"./chunk-NALZIN2F.js";import"./chunk-NMJUS4XE.js";import{a as l}from"./chunk-R2V5M2SX.js";import"./chunk-VUJR46HY.js";import{a as C}from"./chunk-GZKSMROH.js";import"./chunk-2S53WZYG.js";import"./chunk-YFAGS6ZD.js";import{a as b}from"./chunk-NWZ7NAGE.js";import{a as d}from"./chunk-QXMVYJN6.js";import"./chunk-C6PSWFF5.js";import"./chunk-KD4PPF2P.js";import{a as s}from"./chunk-L4MPHVE4.js";import{a as p}from"./chunk-B6YTNR7S.js";import"./chunk-2PDPTZUM.js";import{a as g,o as x}from"./chunk-RRAQGRWM.js";import"./chunk-UMFA3PXI.js";var H,u,i={};function $(t,e){return l(e).includes(t)}function f(t){return H.find(s($,t))}function k(t){return f(t).nextElementSibling.nextElementSibling.nextElementSibling}function w(t){return t.nextElementSibling.nextElementSibling.nextElementSibling.children[0].rows[0].cells[0].children[0]}function B(t,e){return e==="amount"?new RegExp(`\\+(\\d+) ${t}`):/(\d{1,3})\xA0/}function V(t,e,n){if(!i[t][n]){let r=B(t,n),o=l(e).match(r)[1];i[t][n]=o}return i[t][n]}function P(t,e){return V(t,e,"amount")}function j(t,e){return V(t,e.nextElementSibling,"cost")}function G(t,e){if(i[t]||(i[t]={}),!i[t].span){let n=R();U(e," "),h(e,n),i[t].span=n}return i[t].span}function q(t,e,n,r){let o=P(t,e),m=j(t,e),a;n*m<=u?(a=n*o,r.className="fshBlue"):(a=Math.floor(u/m)*o,r.className="fshRed"),v(`(+${a} stamina)`,r)}function F(t,e,n){let{target:r}=n,o=Number(r.value),m=G(t,e);if(M(o)||o===0){m.className="fshHide";return}q(t,e,o,m)}function I(t){let e=f(t);p(w(e),"keyup",s(F,t,e))}function L(){u=N(l(d("statbar-fsp"))),I("Current"),I("Maximum"),b(`<a href="${g}${x}marketplace">Sell at Marketplace</a>`,k("Gold"))}function A(t,e){let r=f(t).nextElementSibling.nextElementSibling;if(r){let m=Number(/(\d{1,3}) \/ 115/.exec(r.innerHTML)[1]);C(e,m+5)}}function c(){H=S("#pCC > table:last-of-type > tbody > tr:nth-child(even) > td:first-child"),A("+1 Max Allies","alliestotal"),A("+1 Max Enemies","enemiestotal"),L()}function z(){E("type")==="1"?T():c()}export{z as default};
//# sourceMappingURL=points-EWZM73AL.js.map