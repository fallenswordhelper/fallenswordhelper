import{aV as t,c as e,o as s,aB as a,ck as o,aP as n,aY as c,e as r,cj as i,b3 as l,p as u,cu as f,aw as m}from"./calfSystem-BlPuMQGT.js"
import{i as d}from"./interceptSubmit-Cvm926dN.js"
import{r as p}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{q as g,g as Q}from"./questEvent-BPxLs9Fn.js"
import"./formToUrl-Dy2RFM47.js"
function h(t,e){const s=p(n(e.cells[0]))
!function(t,e,s){if(t.includes(e)){let t=s
i(t)
for(let e=0;e<3;e++)t=t.nextElementSibling,i(t)}}(t,s,e)
const a=c(e.cells[0].children[0].href,"quest_id")
r(Q(a,s),e.cells[4])}function P(n){const c=a("hideQuests")?o("hideQuestNames"):[]
t(n,5,0).forEach(e(h,c)),s(n,g("Quest Book"))}let S=0,b=0,j=0,N=0,A=0,q=0
const v=[0,3,0,1,2],w=["lastNormalActiveQuestPage","lastNormalCompletedQuestPage","lastNormalNotStartedQuestPage","lastSeasonalActiveQuestPage","lastSeasonalCompletedQuestPage","lastSeasonalNotStartedQuestPage"]
function E(t,e,s,a){return"#FF0000"===t[a].children[0].getAttribute("color")?e+s:e}function k(t){return a(t)}function x(t,e){e.length>0&&t.setAttribute("href",e)}function B(t,e){x(j,t[e]),x(N,t[e+1]),x(A,t[e+2])}function C(){const t=w.map(k),e=function(t){return[t[3],t[4],t[5],t[0],t[1],t[2]]}(t)
q<3?(x(b,e[q]),B(t,0)):(x(S,e[q]),B(t,3))}function F(){a("storeLastQuestPage")&&(!function(){const t=l("a",u());[S,b,j,N,A]=t,q=v.reduce(e(E,t),0)}(),function(){const t=window.location.search
m("lastActiveQuestPage",t),m(w[q],t)}(),C())}function y(){d(),F()
const t=l(f,u())[5]
t&&P(t)}export{y as default}
//# sourceMappingURL=injectQuestBookFull-CL3T6wOa.js.map
