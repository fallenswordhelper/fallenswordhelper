import{c as t,o as e,ao as s,cc as a,aF as o,aN as n,d as c,cb as r,aS as i,p as l,cl as u,aj as f}from"./calfSystem-ChzN4Q-P.js"
import{i as m}from"./interceptSubmit-CmNeM6n-.js"
import{d}from"./dataRows-wal17PRE.js"
import{r as p}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{q as g,g as Q}from"./questEvent-CFb7nLtB.js"
import"./formToUrl-DpqdMGU9.js"
function S(t,e){const s=p(o(e.cells[0]))
!function(t,e,s){if(t.includes(e)){let t=s
r(t)
for(let e=0;e<3;e++)t=t.nextElementSibling,r(t)}}(t,s,e)
const a=n(e.cells[0].children[0].href,"quest_id")
c(Q(a,s),e.cells[4])}function h(o){const n=s("hideQuests")?a("hideQuestNames"):[]
d(o,5,0).forEach(t(S,n)),e(o,g("Quest Book"))}let P=0,j=0,N=0,b=0,A=0,q=0
const v=[0,3,0,1,2],w=["lastNormalActiveQuestPage","lastNormalCompletedQuestPage","lastNormalNotStartedQuestPage","lastSeasonalActiveQuestPage","lastSeasonalCompletedQuestPage","lastSeasonalNotStartedQuestPage"]
function E(t,e,s,a){return"#FF0000"===t[a].children[0].getAttribute("color")?e+s:e}function F(t){return s(t)}function x(t,e){e.length>0&&t.setAttribute("href",e)}function C(t,e){x(N,t[e]),x(b,t[e+1]),x(A,t[e+2])}function D(){const t=w.map(F),e=function(t){return[t[3],t[4],t[5],t[0],t[1],t[2]]}(t)
q<3?(x(j,e[q]),C(t,0)):(x(P,e[q]),C(t,3))}function k(){s("storeLastQuestPage")&&(!function(){const e=i("a",l());[P,j,N,b,A]=e,q=v.reduce(t(E,e),0)}(),function(){const t=window.location.search
f("lastActiveQuestPage",t),f(w[q],t)}(),D())}function y(){m(),k()
const t=i(u,l())[5]
t&&h(t)}export{y as default}
//# sourceMappingURL=injectQuestBookFull-Cmkgms3C.js.map
