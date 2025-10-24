import{aZ as t,c as e,o as s,aA as a,co as o,aT as n,b0 as c,d as r,cn as i,b6 as l,p as u,cy as f,av as m}from"./calfSystem-CIdPz3EO.js"
import{i as d}from"./interceptSubmit-Dg8BOmTG.js"
import{r as p}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{q as g,g as Q}from"./questEvent-C9kVrufR.js"
import"./formToUrl-JPHWbAvp.js"
function S(t,e){const s=p(n(e.cells[0]))
!function(t,e,s){if(t.includes(e)){let t=s
i(t)
for(let e=0;e<3;e++)t=t.nextElementSibling,i(t)}}(t,s,e)
const a=c(e.cells[0].children[0].href,"quest_id")
r(Q(a,s),e.cells[4])}function h(n){const c=a("hideQuests")?o("hideQuestNames"):[]
t(n,5,0).forEach(e(S,c)),s(n,g("Quest Book"))}let P=0,b=0,A=0,N=0,j=0,v=0
const q=[0,3,0,1,2],E=["lastNormalActiveQuestPage","lastNormalCompletedQuestPage","lastNormalNotStartedQuestPage","lastSeasonalActiveQuestPage","lastSeasonalCompletedQuestPage","lastSeasonalNotStartedQuestPage"]
function w(t,e,s,a){return"#FF0000"===t[a].children[0].getAttribute("color")?e+s:e}function x(t){return a(t)}function y(t,e){e.length>0&&t.setAttribute("href",e)}function C(t,e){y(A,t[e]),y(N,t[e+1]),y(j,t[e+2])}function F(){const t=E.map(x),e=function(t){return[t[3],t[4],t[5],t[0],t[1],t[2]]}(t)
v<3?(y(b,e[v]),C(t,0)):(y(P,e[v]),C(t,3))}function T(){a("storeLastQuestPage")&&(!function(){const t=l("a",u());[P,b,A,N,j]=t,v=q.reduce(e(w,t),0)}(),function(){const t=window.location.search
m("lastActiveQuestPage",t),m(E[v],t)}(),F())}function k(){d(),T()
const t=l(f,u())[5]
t&&h(t)}export{k as default}
//# sourceMappingURL=injectQuestBookFull-DlsnMPYW.js.map
