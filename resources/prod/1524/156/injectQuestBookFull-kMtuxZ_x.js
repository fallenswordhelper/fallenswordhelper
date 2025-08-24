import{aY as t,c as e,o as s,aA as a,cm as o,aS as n,a$ as c,d as r,cl as l,b5 as i,p as u,ct as f,av as m}from"./calfSystem-79LsojAC.js"
import{i as d}from"./interceptSubmit-c1dihHnz.js"
import{r as p}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{q as g,g as Q}from"./questEvent-CVl3hUuq.js"
import"./formToUrl-CqnZfaJL.js"
function S(t,e){const s=p(n(e.cells[0]))
!function(t,e,s){if(t.includes(e)){let t=s
l(t)
for(let e=0;e<3;e++)t=t.nextElementSibling,l(t)}}(t,s,e)
const a=c(e.cells[0].children[0].href,"quest_id")
r(Q(a,s),e.cells[4])}function h(n){const c=a("hideQuests")?o("hideQuestNames"):[]
t(n,5,0).forEach(e(S,c)),s(n,g("Quest Book"))}let P=0,b=0,A=0,N=0,j=0,v=0
const q=[0,3,0,1,2],E=["lastNormalActiveQuestPage","lastNormalCompletedQuestPage","lastNormalNotStartedQuestPage","lastSeasonalActiveQuestPage","lastSeasonalCompletedQuestPage","lastSeasonalNotStartedQuestPage"]
function w(t,e,s,a){return"#FF0000"===t[a].children[0].getAttribute("color")?e+s:e}function x(t){return a(t)}function C(t,e){e.length>0&&t.setAttribute("href",e)}function F(t,e){C(A,t[e]),C(N,t[e+1]),C(j,t[e+2])}function k(){const t=E.map(x),e=function(t){return[t[3],t[4],t[5],t[0],t[1],t[2]]}(t)
v<3?(C(b,e[v]),F(t,0)):(C(P,e[v]),F(t,3))}function y(){a("storeLastQuestPage")&&(!function(){const t=i("a",u());[P,b,A,N,j]=t,v=q.reduce(e(w,t),0)}(),function(){const t=window.location.search
m("lastActiveQuestPage",t),m(E[v],t)}(),k())}function B(){d(),y()
const t=i(f,u())[5]
t&&h(t)}export{B as default}
//# sourceMappingURL=injectQuestBookFull-kMtuxZ_x.js.map
