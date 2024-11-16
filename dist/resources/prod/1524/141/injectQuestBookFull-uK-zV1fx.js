import{ai as t,b as e,as as s,bM as a,ax as o,c as n,e as r,aB as i,p as c,ad as l,bV as u}from"./calfSystem-Blt4DbaE.js"
import{i as f}from"./interceptSubmit-DTfrwUG-.js"
import{d as m}from"./dataRows-B6_VtVvQ.js"
import{r as d}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{s as p}from"./shouldBeArray-dBGFs5YM.js"
import{g,q as Q}from"./questEvent-CR0xfkin.js"
import"./formToUrl-Bfgg_ioA.js"
import"./csvSplit-DCp-KQ1I.js"
function S(t,e){const r=d(s(e.cells[0]))
!function(t,e,s){if(t.includes(e)){let t=s
a(t)
for(let e=0;e<3;e++)t=t.nextElementSibling,a(t)}}(t,r,e)
const i=o(e.cells[0].children[0].href,"quest_id")
n(g(i,r),e.cells[4])}function h(s){const a=t("hideQuests")?p("hideQuestNames"):[]
m(s,5,0).forEach(e(S,a)),r(s,Q("Quest Book"))}let P=0,b=0,j=0,A=0,N=0,v=0
const q=[0,3,0,1,2],w=["lastNormalActiveQuestPage","lastNormalCompletedQuestPage","lastNormalNotStartedQuestPage","lastSeasonalActiveQuestPage","lastSeasonalCompletedQuestPage","lastSeasonalNotStartedQuestPage"]
function x(t,e,s,a){return"#FF0000"===t[a].children[0].getAttribute("color")?e+s:e}function B(e){return t(e)}function E(t,e){e.length>0&&t.setAttribute("href",e)}function y(t,e){E(j,t[e]),E(A,t[e+1]),E(N,t[e+2])}function C(){const t=w.map(B),e=function(t){return[t[3],t[4],t[5],t[0],t[1],t[2]]}(t)
v<3?(E(b,e[v]),y(t,0)):(E(P,e[v]),y(t,3))}function F(){t("storeLastQuestPage")&&(!function(){const t=i("a",c());[P,b,j,A,N]=t,v=q.reduce(e(x,t),0)}(),function(){const t=window.location.search
l("lastActiveQuestPage",t),l(w[v],t)}(),C())}function k(){f(),F()
const t=i(u,c())[5]
t&&h(t)}export{k as default}
//# sourceMappingURL=injectQuestBookFull-uK-zV1fx.js.map
