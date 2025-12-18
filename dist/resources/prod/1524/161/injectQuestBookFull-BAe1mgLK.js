import{aZ as t,c as e,o as s,aA as a,cm as o,aT as n,b0 as c,d as l,cl as r,b6 as i,p as u,cx as f,av as m}from"./calfSystem-Cs6CSxoU.js"
import{i as d}from"./interceptSubmit-Bhotwi5X.js"
import{r as p}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{q as g,g as Q}from"./questEvent-x1R8TGl9.js"
import"./formToUrl-CAPzQx_Y.js"
function h(t,e){const s=p(n(e.cells[0]))
!function(t,e,s){if(t.includes(e)){let t=s
r(t)
for(let e=0;e<3;e++)t=t.nextElementSibling,r(t)}}(t,s,e)
const a=c(e.cells[0].children[0].href,"quest_id")
l(Q(a,s),e.cells[4])}function S(n){const c=a("hideQuests")?o("hideQuestNames"):[]
t(n,5,0).forEach(e(h,c)),s(n,g("Quest Book"))}let P=0,b=0,A=0,N=0,j=0,v=0
const q=[0,3,0,1,2],x=["lastNormalActiveQuestPage","lastNormalCompletedQuestPage","lastNormalNotStartedQuestPage","lastSeasonalActiveQuestPage","lastSeasonalCompletedQuestPage","lastSeasonalNotStartedQuestPage"]
function E(t,e,s,a){return"#FF0000"===t[a].children[0].getAttribute("color")?e+s:e}function T(t){return a(t)}function w(t,e){e.length>0&&t.setAttribute("href",e)}function C(t,e){w(A,t[e]),w(N,t[e+1]),w(j,t[e+2])}function F(){const t=x.map(T),e=function(t){return[t[3],t[4],t[5],t[0],t[1],t[2]]}(t)
v<3?(w(b,e[v]),C(t,0)):(w(P,e[v]),C(t,3))}function k(){a("storeLastQuestPage")&&(!function(){const t=i("a",u());[P,b,A,N,j]=t,v=q.reduce(e(E,t),0)}(),function(){const t=window.location.search
m("lastActiveQuestPage",t),m(x[v],t)}(),F())}function y(){d(),k()
const t=i(f,u())[5]
t&&S(t)}export{y as default}
//# sourceMappingURL=injectQuestBookFull-BAe1mgLK.js.map
