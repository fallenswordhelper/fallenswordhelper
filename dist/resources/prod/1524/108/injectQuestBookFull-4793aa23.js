import{c as t,af as e,an as s,as as o,s as a,aw as n,p as r,bK as i,ab as c}from"./calfSystem-34913441.js"
import{i as l}from"./interceptSubmit-2c6bfafb.js"
import{d as u}from"./dataRows-380aff49.js"
import{h as f}from"./hideElement-baffa60f.js"
import{r as m}from"./replaceDoubleSpace-e5ff7e70.js"
import{s as d}from"./shouldBeArray-4329f859.js"
import{g as p}from"./guideButtons-9bb5f345.js"
import"./formToUrl-4ee925a6.js"
import"./csvSplit-21d1e5f2.js"
function g(t,e){const n=m(s(e.cells[0]))
!function(t,e,s){if(t.includes(e)){let t=s
f(t)
for(let e=0;e<3;e++)t=t.nextElementSibling,f(t)}}(t,n,e)
const r=o(e.cells[0].children[0].href,"quest_id")
a(p(r,n),e.cells[4])}function h(s){const o=e("hideQuests")?d("hideQuestNames"):[]
u(s,5,0).forEach(t(g,o))}let Q=0,S=0,j=0,P=0,b=0,A=0
const N=[0,3,0,1,2],v=["lastNormalActiveQuestPage","lastNormalCompletedQuestPage","lastNormalNotStartedQuestPage","lastSeasonalActiveQuestPage","lastSeasonalCompletedQuestPage","lastSeasonalNotStartedQuestPage"]
function w(t,e,s,o){return"#FF0000"===t[o].children[0].getAttribute("color")?e+s:e}function E(t){return e(t)}function x(t,e){e.length>0&&t.setAttribute("href",e)}function y(t,e){x(j,t[e]),x(P,t[e+1]),x(b,t[e+2])}function B(){const t=v.map(E),e=function(t){return[t[3],t[4],t[5],t[0],t[1],t[2]]}(t)
A<3?(x(S,e[A]),y(t,0)):(x(Q,e[A]),y(t,3))}function C(){e("storeLastQuestPage")&&(!function(){const e=n("a",r());[Q,S,j,P,b]=e,A=N.reduce(t(w,e),0)}(),function(){const t=window.location.search
c("lastActiveQuestPage",t),c(v[A],t)}(),B())}function F(){l(),C()
const t=n(i,r())[5]
t&&h(t)}export{F as default}
//# sourceMappingURL=injectQuestBookFull-4793aa23.js.map
