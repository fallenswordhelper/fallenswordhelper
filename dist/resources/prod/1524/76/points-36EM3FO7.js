import{a as U}from"./chunk-32D4AE52.js";import{c as T}from"./chunk-RUTDNCUJ.js";import{a as R}from"./chunk-7OMF2HCF.js";import{a as E}from"./chunk-WZUZRWOR.js";import"./chunk-DRXOYIKT.js";import"./chunk-S4R6HMLT.js";import"./chunk-GX3GXQEA.js";import"./chunk-YVHPAUAO.js";import{a as v}from"./chunk-LEMC2L2I.js";import{a as h}from"./chunk-F2QNPXG3.js";import"./chunk-S3MA7IJF.js";import{a as S}from"./chunk-3FI2HRMQ.js";import"./chunk-TTKNE24C.js";import"./chunk-YV7FRZPB.js";import"./chunk-JRMPLNFZ.js";import{a as M}from"./chunk-HX4UZBSJ.js";import{a as N}from"./chunk-QNKEYSUJ.js";import"./chunk-UC3GAOGO.js";import{a as l}from"./chunk-N4QHNM2E.js";import"./chunk-RNWAALFB.js";import{a as C}from"./chunk-ZGDP3UEU.js";import"./chunk-HQE3XUSR.js";import"./chunk-VPVOZ3TL.js";import{a as b}from"./chunk-JW3IW67J.js";import{a as d}from"./chunk-T5HQ7FPX.js";import"./chunk-SON5T5EI.js";import"./chunk-CQJA6XZZ.js";import{a as s}from"./chunk-J55DBM2B.js";import{a as p}from"./chunk-INHQR3KU.js";import"./chunk-O5WVQXEQ.js";import{a as g,o as x}from"./chunk-KIM4IHFF.js";import"./chunk-AQ577ZPT.js";var H,u,i={};function $(t,e){return l(e).includes(t)}function f(t){return H.find(s($,t))}function k(t){return f(t).nextElementSibling.nextElementSibling.nextElementSibling}function w(t){return t.nextElementSibling.nextElementSibling.nextElementSibling.children[0].rows[0].cells[0].children[0]}function B(t,e){return e==="amount"?new RegExp(`\\+(\\d+) ${t}`):/(\d{1,3})\xA0/}function V(t,e,n){if(!i[t][n]){let r=B(t,n),o=l(e).match(r)[1];i[t][n]=o}return i[t][n]}function P(t,e){return V(t,e,"amount")}function j(t,e){return V(t,e.nextElementSibling,"cost")}function G(t,e){if(i[t]||(i[t]={}),!i[t].span){let n=R();U(e," "),h(e,n),i[t].span=n}return i[t].span}function q(t,e,n,r){let o=P(t,e),m=j(t,e),a;n*m<=u?(a=n*o,r.className="fshBlue"):(a=Math.floor(u/m)*o,r.className="fshRed"),v(`(+${a} stamina)`,r)}function F(t,e,n){let{target:r}=n,o=Number(r.value),m=G(t,e);if(M(o)||o===0){m.className="fshHide";return}q(t,e,o,m)}function I(t){let e=f(t);p(w(e),"keyup",s(F,t,e))}function L(){u=N(l(d("statbar-fsp"))),I("Current"),I("Maximum"),b(`<a href="${g}${x}marketplace">Sell at Marketplace</a>`,k("Gold"))}function A(t,e){let r=f(t).nextElementSibling.nextElementSibling;if(r){let m=Number(/(\d{1,3}) \/ 115/.exec(r.innerHTML)[1]);C(e,m+5)}}function c(){H=S("#pCC > table:last-of-type > tbody > tr:nth-child(even) > td:first-child"),A("+1 Max Allies","alliestotal"),A("+1 Max Enemies","enemiestotal"),L()}function z(){E("type")==="1"?T():c()}export{z as default};
//# sourceMappingURL=points-36EM3FO7.js.map