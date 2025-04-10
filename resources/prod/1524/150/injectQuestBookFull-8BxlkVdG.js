import{aN as t,e,o as s,ao as a,cd as o,aH as n,aQ as c,h as l,cc as r,aW as i,p as u,cm as f,aj as m}from"./calfSystem-BGOTz8de.js"
import{i as d}from"./interceptSubmit-CHnAIuBp.js"
import{r as p}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{q as g,g as Q}from"./questEvent-BLbT89_e.js"
import"./formToUrl-RzN0-7i1.js"
function h(t,e){const s=p(n(e.cells[0]))
!function(t,e,s){if(t.includes(e)){let t=s
r(t)
for(let e=0;e<3;e++)t=t.nextElementSibling,r(t)}}(t,s,e)
const a=c(e.cells[0].children[0].href,"quest_id")
l(Q(a,s),e.cells[4])}function S(n){const c=a("hideQuests")?o("hideQuestNames"):[]
t(n,5,0).forEach(e(h,c)),s(n,g("Quest Book"))}let P=0,j=0,N=0,b=0,A=0,v=0
const q=[0,3,0,1,2],E=["lastNormalActiveQuestPage","lastNormalCompletedQuestPage","lastNormalNotStartedQuestPage","lastSeasonalActiveQuestPage","lastSeasonalCompletedQuestPage","lastSeasonalNotStartedQuestPage"]
function w(t,e,s,a){return"#FF0000"===t[a].children[0].getAttribute("color")?e+s:e}function x(t){return a(t)}function C(t,e){e.length>0&&t.setAttribute("href",e)}function F(t,e){C(N,t[e]),C(b,t[e+1]),C(A,t[e+2])}function W(){const t=E.map(x),e=function(t){return[t[3],t[4],t[5],t[0],t[1],t[2]]}(t)
v<3?(C(j,e[v]),F(t,0)):(C(P,e[v]),F(t,3))}function k(){a("storeLastQuestPage")&&(!function(){const t=i("a",u());[P,j,N,b,A]=t,v=q.reduce(e(w,t),0)}(),function(){const t=window.location.search
m("lastActiveQuestPage",t),m(E[v],t)}(),W())}function y(){d(),k()
const t=i(f,u())[5]
t&&S(t)}export{y as default}
//# sourceMappingURL=injectQuestBookFull-8BxlkVdG.js.map
