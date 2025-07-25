import{aZ as t,c as e,o as s,aB as a,cn as o,aT as n,b0 as c,e as r,cm as i,b6 as l,p as u,cw as f,aw as m}from"./calfSystem-C1X5YxJZ.js"
import{i as d}from"./interceptSubmit-D-IYqL1u.js"
import{r as p}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{q as g,g as Q}from"./questEvent-CdBzAqun.js"
import"./formToUrl-BjgGWW4H.js"
function h(t,e){const s=p(n(e.cells[0]))
!function(t,e,s){if(t.includes(e)){let t=s
i(t)
for(let e=0;e<3;e++)t=t.nextElementSibling,i(t)}}(t,s,e)
const a=c(e.cells[0].children[0].href,"quest_id")
r(Q(a,s),e.cells[4])}function S(n){const c=a("hideQuests")?o("hideQuestNames"):[]
t(n,5,0).forEach(e(h,c)),s(n,g("Quest Book"))}let P=0,b=0,N=0,j=0,A=0,q=0
const v=[0,3,0,1,2],w=["lastNormalActiveQuestPage","lastNormalCompletedQuestPage","lastNormalNotStartedQuestPage","lastSeasonalActiveQuestPage","lastSeasonalCompletedQuestPage","lastSeasonalNotStartedQuestPage"]
function E(t,e,s,a){return"#FF0000"===t[a].children[0].getAttribute("color")?e+s:e}function x(t){return a(t)}function B(t,e){e.length>0&&t.setAttribute("href",e)}function C(t,e){B(N,t[e]),B(j,t[e+1]),B(A,t[e+2])}function F(){const t=w.map(x),e=function(t){return[t[3],t[4],t[5],t[0],t[1],t[2]]}(t)
q<3?(B(b,e[q]),C(t,0)):(B(P,e[q]),C(t,3))}function T(){a("storeLastQuestPage")&&(!function(){const t=l("a",u());[P,b,N,j,A]=t,q=v.reduce(e(E,t),0)}(),function(){const t=window.location.search
m("lastActiveQuestPage",t),m(w[q],t)}(),F())}function Z(){d(),T()
const t=l(f,u())[5]
t&&S(t)}export{Z as default}
//# sourceMappingURL=injectQuestBookFull-Dh62sL07.js.map
