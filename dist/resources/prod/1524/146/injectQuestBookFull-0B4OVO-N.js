import{aN as t,d as e,o as s,aq as a,cf as o,aH as n,aQ as c,e as l,ce as r,aV as i,p as u,co as f,al as m}from"./calfSystem-DiXGAkgN.js"
import{i as d}from"./interceptSubmit-CMErm11z.js"
import{r as p}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{q as g,g as Q}from"./questEvent-oJtdmT5u.js"
import"./formToUrl-pXxOs-cV.js"
function h(t,e){const s=p(n(e.cells[0]))
!function(t,e,s){if(t.includes(e)){let t=s
r(t)
for(let e=0;e<3;e++)t=t.nextElementSibling,r(t)}}(t,s,e)
const a=c(e.cells[0].children[0].href,"quest_id")
l(Q(a,s),e.cells[4])}function S(n){const c=a("hideQuests")?o("hideQuestNames"):[]
t(n,5,0).forEach(e(h,c)),s(n,g("Quest Book"))}let P=0,N=0,b=0,j=0,q=0,A=0
const v=[0,3,0,1,2],E=["lastNormalActiveQuestPage","lastNormalCompletedQuestPage","lastNormalNotStartedQuestPage","lastSeasonalActiveQuestPage","lastSeasonalCompletedQuestPage","lastSeasonalNotStartedQuestPage"]
function w(t,e,s,a){return"#FF0000"===t[a].children[0].getAttribute("color")?e+s:e}function x(t){return a(t)}function C(t,e){e.length>0&&t.setAttribute("href",e)}function F(t,e){C(b,t[e]),C(j,t[e+1]),C(q,t[e+2])}function k(){const t=E.map(x),e=function(t){return[t[3],t[4],t[5],t[0],t[1],t[2]]}(t)
A<3?(C(N,e[A]),F(t,0)):(C(P,e[A]),F(t,3))}function y(){a("storeLastQuestPage")&&(!function(){const t=i("a",u());[P,N,b,j,q]=t,A=v.reduce(e(w,t),0)}(),function(){const t=window.location.search
m("lastActiveQuestPage",t),m(E[A],t)}(),k())}function B(){d(),y()
const t=i(f,u())[5]
t&&S(t)}export{B as default}
//# sourceMappingURL=injectQuestBookFull-0B4OVO-N.js.map
