import{c as t,o as e,ai as s,aq as o,av as a,d as n,az as r,p as i,bO as c,ae as l}from"./calfSystem-G1dN925O.js"
import{i as u}from"./interceptSubmit-Ji3kORWO.js"
import{d as f}from"./dataRows-o1cWPBFh.js"
import{h as m}from"./hideElement-RABq1RME.js"
import{r as d}from"./replaceDoubleSpace-q7clL6Kd.js"
import{s as p}from"./shouldBeArray-Sig5LHGX.js"
import{q as g,g as h}from"./questEvent-bI1mWk3I.js"
import"./formToUrl--m9Zwlne.js"
import"./csvSplit-SWeoixMs.js"
function Q(t,e){const s=d(o(e.cells[0]))
!function(t,e,s){if(t.includes(e)){let t=s
m(t)
for(let e=0;e<3;e++)t=t.nextElementSibling,m(t)}}(t,s,e)
const r=a(e.cells[0].children[0].href,"quest_id")
n(h(r,s),e.cells[4])}function S(o){const a=s("hideQuests")?p("hideQuestNames"):[]
f(o,5,0).forEach(t(Q,a)),e(o,g("Quest Book"))}let j=0,P=0,b=0,v=0,A=0,N=0
const q=[0,3,0,1,2],E=["lastNormalActiveQuestPage","lastNormalCompletedQuestPage","lastNormalNotStartedQuestPage","lastSeasonalActiveQuestPage","lastSeasonalCompletedQuestPage","lastSeasonalNotStartedQuestPage"]
function w(t,e,s,o){return"#FF0000"===t[o].children[0].getAttribute("color")?e+s:e}function x(t){return s(t)}function y(t,e){e.length>0&&t.setAttribute("href",e)}function B(t,e){y(b,t[e]),y(v,t[e+1]),y(A,t[e+2])}function C(){const t=E.map(x),e=function(t){return[t[3],t[4],t[5],t[0],t[1],t[2]]}(t)
N<3?(y(P,e[N]),B(t,0)):(y(j,e[N]),B(t,3))}function F(){s("storeLastQuestPage")&&(!function(){const e=r("a",i());[j,P,b,v,A]=e,N=q.reduce(t(w,e),0)}(),function(){const t=window.location.search
l("lastActiveQuestPage",t),l(E[N],t)}(),C())}function R(){u(),F()
const t=r(c,i())[5]
t&&S(t)}export{R as default}
//# sourceMappingURL=injectQuestBookFull-dDJPoat8.js.map
