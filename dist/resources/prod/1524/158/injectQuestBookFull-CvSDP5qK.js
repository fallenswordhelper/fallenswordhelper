import{aY as t,c as e,o as s,az as a,cn as o,aS as n,a$ as c,d as r,cm as i,b5 as l,p as u,cx as f,au as m}from"./calfSystem-CIuUjh4H.js"
import{i as d}from"./interceptSubmit-UQt2BX0g.js"
import{r as p}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{q as g,g as Q}from"./questEvent-CTYqP4Pv.js"
import"./formToUrl-BcjoMJ8T.js"
function S(t,e){const s=p(n(e.cells[0]))
!function(t,e,s){if(t.includes(e)){let t=s
i(t)
for(let e=0;e<3;e++)t=t.nextElementSibling,i(t)}}(t,s,e)
const a=c(e.cells[0].children[0].href,"quest_id")
r(Q(a,s),e.cells[4])}function h(n){const c=a("hideQuests")?o("hideQuestNames"):[]
t(n,5,0).forEach(e(S,c)),s(n,g("Quest Book"))}let P=0,b=0,N=0,j=0,A=0,v=0
const q=[0,3,0,1,2],x=["lastNormalActiveQuestPage","lastNormalCompletedQuestPage","lastNormalNotStartedQuestPage","lastSeasonalActiveQuestPage","lastSeasonalCompletedQuestPage","lastSeasonalNotStartedQuestPage"]
function E(t,e,s,a){return"#FF0000"===t[a].children[0].getAttribute("color")?e+s:e}function w(t){return a(t)}function C(t,e){e.length>0&&t.setAttribute("href",e)}function F(t,e){C(N,t[e]),C(j,t[e+1]),C(A,t[e+2])}function $(){const t=x.map(w),e=function(t){return[t[3],t[4],t[5],t[0],t[1],t[2]]}(t)
v<3?(C(b,e[v]),F(t,0)):(C(P,e[v]),F(t,3))}function k(){a("storeLastQuestPage")&&(!function(){const t=l("a",u());[P,b,N,j,A]=t,v=q.reduce(e(E,t),0)}(),function(){const t=window.location.search
m("lastActiveQuestPage",t),m(x[v],t)}(),$())}function y(){d(),k()
const t=l(f,u())[5]
t&&h(t)}export{y as default}
//# sourceMappingURL=injectQuestBookFull-CvSDP5qK.js.map
