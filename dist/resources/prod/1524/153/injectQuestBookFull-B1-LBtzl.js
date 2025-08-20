import{aX as t,c as e,o as s,az as a,cl as o,aR as n,a_ as c,d as r,ck as l,b4 as i,p as u,cq as f,au as m}from"./calfSystem-CT1aM4VG.js"
import{i as d}from"./interceptSubmit-D7kELBzE.js"
import{r as p}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{q as g,g as Q}from"./questEvent-3jlMxPlz.js"
import"./formToUrl-zF_XLEy1.js"
function h(t,e){const s=p(n(e.cells[0]))
!function(t,e,s){if(t.includes(e)){let t=s
l(t)
for(let e=0;e<3;e++)t=t.nextElementSibling,l(t)}}(t,s,e)
const a=c(e.cells[0].children[0].href,"quest_id")
r(Q(a,s),e.cells[4])}function S(n){const c=a("hideQuests")?o("hideQuestNames"):[]
t(n,5,0).forEach(e(h,c)),s(n,g("Quest Book"))}let P=0,b=0,N=0,j=0,A=0,q=0
const v=[0,3,0,1,2],E=["lastNormalActiveQuestPage","lastNormalCompletedQuestPage","lastNormalNotStartedQuestPage","lastSeasonalActiveQuestPage","lastSeasonalCompletedQuestPage","lastSeasonalNotStartedQuestPage"]
function k(t,e,s,a){return"#FF0000"===t[a].children[0].getAttribute("color")?e+s:e}function w(t){return a(t)}function x(t,e){e.length>0&&t.setAttribute("href",e)}function C(t,e){x(N,t[e]),x(j,t[e+1]),x(A,t[e+2])}function F(){const t=E.map(w),e=function(t){return[t[3],t[4],t[5],t[0],t[1],t[2]]}(t)
q<3?(x(b,e[q]),C(t,0)):(x(P,e[q]),C(t,3))}function _(){a("storeLastQuestPage")&&(!function(){const t=i("a",u());[P,b,N,j,A]=t,q=v.reduce(e(k,t),0)}(),function(){const t=window.location.search
m("lastActiveQuestPage",t),m(E[q],t)}(),F())}function y(){d(),_()
const t=i(f,u())[5]
t&&S(t)}export{y as default}
//# sourceMappingURL=injectQuestBookFull-B1-LBtzl.js.map
