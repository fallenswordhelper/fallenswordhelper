import{a as S}from"./chunk-MIRQOGPC.js";import{a as P}from"./chunk-IWOEHCXU.js";import{a as b}from"./chunk-CN4PL5PT.js";import{a as k}from"./chunk-3P774BKO.js";import"./chunk-56XAGO5Z.js";import{a as c}from"./chunk-U2K55UWZ.js";import{a as L}from"./chunk-F55IVDB5.js";import"./chunk-IC2PU3H4.js";import{a as g}from"./chunk-DZWD3IFB.js";import"./chunk-V7VD3TTD.js";import{a as Q}from"./chunk-OZO3C2DW.js";import"./chunk-GMLTBP5U.js";import{b as a}from"./chunk-MVLZ5DIF.js";import{a as h}from"./chunk-TBDAY7IJ.js";import"./chunk-RLMEWYFJ.js";import{a as m}from"./chunk-ZYSUV7P2.js";import"./chunk-HDDSTVDW.js";import{a as l}from"./chunk-BSRRLYDA.js";import"./chunk-EEOI3QHS.js";import"./chunk-E5RHLETX.js";import{b as n}from"./chunk-5IFOIBKY.js";import{wa as d}from"./chunk-LGYGKPKS.js";import"./chunk-VX5V3MQE.js";import"./chunk-C4N36YS5.js";import{a as u}from"./chunk-DG6P646J.js";import"./chunk-OXVY43H4.js";import"./chunk-HN4Q5DUC.js";import"./chunk-QDZWRTTK.js";function B(){return n("hideQuests")?L("hideQuestNames"):[]}function x(t,e,r){if(t.includes(e)){let o=r;c(o);for(let p=0;p<3;p++)o=o.nextElementSibling,c(o)}}function C(t,e){let r=P(Q(e.cells[0]));x(t,r,e);let o=g(e.cells[0].children[0].href,"quest_id");h(S(o,r),e.cells[4])}function f(t){let e=B();b(t,5,0).forEach(u(C,e))}var T=0,A=0,v=0,V=0,q=0,i=0,E=[0,3,0,1,2],y=["lastNormalActiveQuestPage","lastNormalCompletedQuestPage","lastNormalNotStartedQuestPage","lastSeasonalActiveQuestPage","lastSeasonalCompletedQuestPage","lastSeasonalNotStartedQuestPage"];function H(t,e,r,o){return t[o].children[0].getAttribute("color")==="#FF0000"?e+r:e}function j(){let t=m("a",a());[T,A,v,V,q]=t,i=E.reduce(u(H,t),0)}function w(){let t=window.location.search;l("lastActiveQuestPage",t),l(y[i],t)}function F(t){return n(t)}function I(){return y.map(F)}function D(t){return[t[3],t[4],t[5],t[0],t[1],t[2]]}function s(t,e){e.length>0&&t.setAttribute("href",e)}function N(t,e){s(v,t[e]),s(V,t[e+1]),s(q,t[e+2])}function U(){let t=I(),e=D(t);i<3?(s(A,e[i]),N(t,0)):(s(T,e[i]),N(t,3))}function K(){n("storeLastQuestPage")&&(j(),w(),U())}function _(){k(),K();let t=m(d,a())[5];t&&f(t)}export{_ as default};
//# sourceMappingURL=injectQuestBookFull-32LS5EHK.js.map