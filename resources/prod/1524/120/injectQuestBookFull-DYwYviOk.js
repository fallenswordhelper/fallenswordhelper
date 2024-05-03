import{c as t,o as e,ai as s,aq as a,av as o,d as n,bH as r,az as c,p as i,bP as l,ae as u}from"./calfSystem-BpHkrDYD.js"
import{i as f}from"./interceptSubmit-CoCizFzi.js"
import{d as m}from"./dataRows-D8bQOpHy.js"
import{r as d}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{s as p}from"./shouldBeArray-BAARZJIh.js"
import{q as g,g as Q}from"./questEvent-cd7-wBxD.js"
import"./formToUrl-CgKpxR4J.js"
import"./csvSplit-XJPlnymy.js"
function h(t,e){const s=d(a(e.cells[0]))
!function(t,e,s){if(t.includes(e)){let t=s
r(t)
for(let e=0;e<3;e++)t=t.nextElementSibling,r(t)}}(t,s,e)
const c=o(e.cells[0].children[0].href,"quest_id")
n(Q(c,s),e.cells[4])}function S(a){const o=s("hideQuests")?p("hideQuestNames"):[]
m(a,5,0).forEach(t(h,o)),e(a,g("Quest Book"))}let P=0,j=0,b=0,v=0,A=0,N=0
const q=[0,3,0,1,2],w=["lastNormalActiveQuestPage","lastNormalCompletedQuestPage","lastNormalNotStartedQuestPage","lastSeasonalActiveQuestPage","lastSeasonalCompletedQuestPage","lastSeasonalNotStartedQuestPage"]
function E(t,e,s,a){return"#FF0000"===t[a].children[0].getAttribute("color")?e+s:e}function x(t){return s(t)}function y(t,e){e.length>0&&t.setAttribute("href",e)}function B(t,e){y(b,t[e]),y(v,t[e+1]),y(A,t[e+2])}function C(){const t=w.map(x),e=function(t){return[t[3],t[4],t[5],t[0],t[1],t[2]]}(t)
N<3?(y(j,e[N]),B(t,0)):(y(P,e[N]),B(t,3))}function F(){s("storeLastQuestPage")&&(!function(){const e=c("a",i());[P,j,b,v,A]=e,N=q.reduce(t(E,e),0)}(),function(){const t=window.location.search
u("lastActiveQuestPage",t),u(w[N],t)}(),C())}function L(){f(),F()
const t=c(l,i())[5]
t&&S(t)}export{L as default}
//# sourceMappingURL=injectQuestBookFull-DYwYviOk.js.map
