import{aX as t,c as e,o as s,az as a,cl as o,aR as n,a_ as c,d as l,ck as r,b4 as u,p as i,cs as f,au as m}from"./calfSystem-UyQ_FKFu.js"
import{i as d}from"./interceptSubmit-ChmNlDoQ.js"
import{r as p}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{q as g,g as Q}from"./questEvent-DpYnhHwI.js"
import"./formToUrl-et7r_Ml7.js"
function h(t,e){const s=p(n(e.cells[0]))
!function(t,e,s){if(t.includes(e)){let t=s
r(t)
for(let e=0;e<3;e++)t=t.nextElementSibling,r(t)}}(t,s,e)
const a=c(e.cells[0].children[0].href,"quest_id")
l(Q(a,s),e.cells[4])}function P(n){const c=a("hideQuests")?o("hideQuestNames"):[]
t(n,5,0).forEach(e(h,c)),s(n,g("Quest Book"))}let S=0,b=0,N=0,j=0,A=0,v=0
const q=[0,3,0,1,2],E=["lastNormalActiveQuestPage","lastNormalCompletedQuestPage","lastNormalNotStartedQuestPage","lastSeasonalActiveQuestPage","lastSeasonalCompletedQuestPage","lastSeasonalNotStartedQuestPage"]
function _(t,e,s,a){return"#FF0000"===t[a].children[0].getAttribute("color")?e+s:e}function k(t){return a(t)}function w(t,e){e.length>0&&t.setAttribute("href",e)}function x(t,e){w(N,t[e]),w(j,t[e+1]),w(A,t[e+2])}function C(){const t=E.map(k),e=function(t){return[t[3],t[4],t[5],t[0],t[1],t[2]]}(t)
v<3?(w(b,e[v]),x(t,0)):(w(S,e[v]),x(t,3))}function F(){a("storeLastQuestPage")&&(!function(){const t=u("a",i());[S,b,N,j,A]=t,v=q.reduce(e(_,t),0)}(),function(){const t=window.location.search
m("lastActiveQuestPage",t),m(E[v],t)}(),C())}function y(){d(),F()
const t=u(f,i())[5]
t&&P(t)}export{y as default}
//# sourceMappingURL=injectQuestBookFull-DTaL4_uz.js.map
