import{c as t,ad as e,al as s,aq as o,s as a,au as n,p as r,bH as i,a9 as c}from"./calfSystem-4830a18d.js"
import{i as l}from"./interceptSubmit-0ca01d03.js"
import{d as u}from"./dataRows-ab26c2ce.js"
import{h as f}from"./hideElement-85f33001.js"
import{r as m}from"./replaceDoubleSpace-e5ff7e70.js"
import{s as d}from"./shouldBeArray-7acde5b3.js"
import{g as p}from"./guideButtons-44d27fbc.js"
import"./formToUrl-824efe66.js"
import"./csvSplit-81e99601.js"
function g(t,e){const n=m(s(e.cells[0]))
!function(t,e,s){if(t.includes(e)){let t=s
f(t)
for(let e=0;e<3;e++)t=t.nextElementSibling,f(t)}}(t,n,e)
const r=o(e.cells[0].children[0].href,"quest_id")
a(p(r,n),e.cells[4])}function h(s){const o=e("hideQuests")?d("hideQuestNames"):[]
u(s,5,0).forEach(t(g,o))}let Q=0,S=0,j=0,P=0,b=0,A=0
const N=[0,3,0,1,2],v=["lastNormalActiveQuestPage","lastNormalCompletedQuestPage","lastNormalNotStartedQuestPage","lastSeasonalActiveQuestPage","lastSeasonalCompletedQuestPage","lastSeasonalNotStartedQuestPage"]
function w(t,e,s,o){return"#FF0000"===t[o].children[0].getAttribute("color")?e+s:e}function E(t){return e(t)}function q(t,e){e.length>0&&t.setAttribute("href",e)}function x(t,e){q(j,t[e]),q(P,t[e+1]),q(b,t[e+2])}function y(){const t=v.map(E),e=function(t){return[t[3],t[4],t[5],t[0],t[1],t[2]]}(t)
A<3?(q(S,e[A]),x(t,0)):(q(Q,e[A]),x(t,3))}function B(){e("storeLastQuestPage")&&(!function(){const e=n("a",r());[Q,S,j,P,b]=e,A=N.reduce(t(w,e),0)}(),function(){const t=window.location.search
c("lastActiveQuestPage",t),c(v[A],t)}(),y())}function C(){l(),B()
const t=n(i,r())[5]
t&&h(t)}export{C as default}
//# sourceMappingURL=injectQuestBookFull-54fe67ba.js.map
