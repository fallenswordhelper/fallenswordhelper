import{a as S}from"./chunk-BXVYGI5R.js";import{a as P}from"./chunk-A6HZIN32.js";import{a as k}from"./chunk-4OQ4GOZY.js";import"./chunk-OUF35SVH.js";import{a as c}from"./chunk-5XH6FIQI.js";import{a as L}from"./chunk-4M2GBQM2.js";import{a as b}from"./chunk-EMNIXF4U.js";import"./chunk-YZESGF6J.js";import{a as g}from"./chunk-QEARPC7F.js";import"./chunk-3VOPFP6J.js";import{a as Q}from"./chunk-6MJKEXGN.js";import"./chunk-YQXIMIAT.js";import{b as a}from"./chunk-JMO45TBP.js";import{a as h}from"./chunk-DYLMNQVQ.js";import"./chunk-JEN6RTKA.js";import{a as m}from"./chunk-FUB7QZZI.js";import"./chunk-F6AV4QWO.js";import"./chunk-C54IMWL7.js";import{a as l}from"./chunk-SLJOWJGX.js";import"./chunk-QLD5CDI7.js";import"./chunk-ULD7YHXO.js";import{a as u}from"./chunk-ZKTRQIGV.js";import{c as n}from"./chunk-O3NTOCCL.js";import{wa as d}from"./chunk-RBVLOJQS.js";import"./chunk-G4AQ6G7L.js";import"./chunk-IYSXGPFG.js";import"./chunk-B2AFMQVU.js";function B(){return n("hideQuests")?L("hideQuestNames"):[]}function x(t,e,r){if(t.includes(e)){let o=r;c(o);for(let p=0;p<3;p++)o=o.nextElementSibling,c(o)}}function C(t,e){let r=P(Q(e.cells[0]));x(t,r,e);let o=g(e.cells[0].children[0].href,"quest_id");h(S(o,r),e.cells[4])}function f(t){let e=B();b(t,5,0).forEach(u(C,e))}var T=0,A=0,v=0,V=0,q=0,i=0,E=[0,3,0,1,2],y=["lastNormalActiveQuestPage","lastNormalCompletedQuestPage","lastNormalNotStartedQuestPage","lastSeasonalActiveQuestPage","lastSeasonalCompletedQuestPage","lastSeasonalNotStartedQuestPage"];function H(t,e,r,o){return t[o].children[0].getAttribute("color")==="#FF0000"?e+r:e}function j(){let t=m("a",a());[T,A,v,V,q]=t,i=E.reduce(u(H,t),0)}function w(){let t=window.location.search;l("lastActiveQuestPage",t),l(y[i],t)}function F(t){return n(t)}function I(){return y.map(F)}function D(t){return[t[3],t[4],t[5],t[0],t[1],t[2]]}function s(t,e){e.length>0&&t.setAttribute("href",e)}function N(t,e){s(v,t[e]),s(V,t[e+1]),s(q,t[e+2])}function U(){let t=I(),e=D(t);i<3?(s(A,e[i]),N(t,0)):(s(T,e[i]),N(t,3))}function K(){n("storeLastQuestPage")&&(j(),w(),U())}function _(){k(),K();let t=m(d,a())[5];t&&f(t)}export{_ as default};
//# sourceMappingURL=injectQuestBookFull-UB5KDHFW.js.map
