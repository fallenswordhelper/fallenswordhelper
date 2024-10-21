import{c as t,o as e,ai as s,as as a,ax as o,d as n,bM as r,aB as i,p as c,bV as l,ae as u}from"./calfSystem-CUgWHLtG.js"
import{i as f}from"./interceptSubmit-Cmu1wKZK.js"
import{d as m}from"./dataRows-BEUfXG5g.js"
import{r as d}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{s as p}from"./shouldBeArray-dArQIyo9.js"
import{q as g,g as Q}from"./questEvent-CT2hXl1n.js"
import"./formToUrl-BwuflQSq.js"
import"./csvSplit-j_Yd0L1s.js"
function S(t,e){const s=d(a(e.cells[0]))
!function(t,e,s){if(t.includes(e)){let t=s
r(t)
for(let e=0;e<3;e++)t=t.nextElementSibling,r(t)}}(t,s,e)
const i=o(e.cells[0].children[0].href,"quest_id")
n(Q(i,s),e.cells[4])}function h(a){const o=s("hideQuests")?p("hideQuestNames"):[]
m(a,5,0).forEach(t(S,o)),e(a,g("Quest Book"))}let b=0,j=0,P=0,A=0,N=0,v=0
const q=[0,3,0,1,2],w=["lastNormalActiveQuestPage","lastNormalCompletedQuestPage","lastNormalNotStartedQuestPage","lastSeasonalActiveQuestPage","lastSeasonalCompletedQuestPage","lastSeasonalNotStartedQuestPage"]
function x(t,e,s,a){return"#FF0000"===t[a].children[0].getAttribute("color")?e+s:e}function B(t){return s(t)}function E(t,e){e.length>0&&t.setAttribute("href",e)}function y(t,e){E(P,t[e]),E(A,t[e+1]),E(N,t[e+2])}function C(){const t=w.map(B),e=function(t){return[t[3],t[4],t[5],t[0],t[1],t[2]]}(t)
v<3?(E(j,e[v]),y(t,0)):(E(b,e[v]),y(t,3))}function F(){s("storeLastQuestPage")&&(!function(){const e=i("a",c());[b,j,P,A,N]=e,v=q.reduce(t(x,e),0)}(),function(){const t=window.location.search
u("lastActiveQuestPage",t),u(w[v],t)}(),C())}function L(){f(),F()
const t=i(l,c())[5]
t&&h(t)}export{L as default}
//# sourceMappingURL=injectQuestBookFull-B_dBLSKr.js.map
