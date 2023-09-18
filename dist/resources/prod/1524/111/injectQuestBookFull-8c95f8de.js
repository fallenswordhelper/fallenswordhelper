import{c as t,ae as e,am as s,ar as a,s as o,av as n,p as r,bI as i,aa as c}from"./calfSystem-abb16b0d.js"
import{i as l}from"./interceptSubmit-2c452287.js"
import{d as u}from"./dataRows-bd1bd3ba.js"
import{h as m}from"./hideElement-85f33001.js"
import{r as f}from"./replaceDoubleSpace-e5ff7e70.js"
import{s as d}from"./shouldBeArray-9bb1ec5d.js"
import{g as p}from"./guideButtons-4d813e0f.js"
import"./formToUrl-3ea94a32.js"
import"./csvSplit-cb685270.js"
function g(t,e){const n=f(s(e.cells[0]))
!function(t,e,s){if(t.includes(e)){let t=s
m(t)
for(let e=0;e<3;e++)t=t.nextElementSibling,m(t)}}(t,n,e)
const r=a(e.cells[0].children[0].href,"quest_id")
o(p(r,n),e.cells[4])}function h(s){const a=e("hideQuests")?d("hideQuestNames"):[]
u(s,5,0).forEach(t(g,a))}let Q=0,S=0,j=0,P=0,b=0,A=0
const N=[0,3,0,1,2],v=["lastNormalActiveQuestPage","lastNormalCompletedQuestPage","lastNormalNotStartedQuestPage","lastSeasonalActiveQuestPage","lastSeasonalCompletedQuestPage","lastSeasonalNotStartedQuestPage"]
function w(t,e,s,a){return"#FF0000"===t[a].children[0].getAttribute("color")?e+s:e}function E(t){return e(t)}function x(t,e){e.length>0&&t.setAttribute("href",e)}function y(t,e){x(j,t[e]),x(P,t[e+1]),x(b,t[e+2])}function B(){const t=v.map(E),e=function(t){return[t[3],t[4],t[5],t[0],t[1],t[2]]}(t)
A<3?(x(S,e[A]),y(t,0)):(x(Q,e[A]),y(t,3))}function C(){e("storeLastQuestPage")&&(!function(){const e=n("a",r());[Q,S,j,P,b]=e,A=N.reduce(t(w,e),0)}(),function(){const t=window.location.search
c("lastActiveQuestPage",t),c(v[A],t)}(),B())}function F(){l(),C()
const t=n(i,r())[5]
t&&h(t)}export{F as default}
//# sourceMappingURL=injectQuestBookFull-8c95f8de.js.map
