import{t,I as e,H as s,B as o,b as a,p as n,d as r,_ as c}from"./calfSystem-4a40365f.js"
import{d as i}from"./dataRows-ef9a1a0a.js"
import{g as l}from"./guideButtons-b5f08351.js"
import{h as u}from"./hideElement-f0e898f0.js"
import{r as f}from"./replaceDoubleSpace-35387d1e.js"
import{s as m}from"./shouldBeArray-c4a3806b.js"
import{i as d}from"./interceptSubmit-c8d517a3.js"
import"./csvSplit-482f2ccd.js"
import"./formToUrl-8ffaa75b.js"
function p(t,e){const a=f(s(e.cells[0]))
!function(t,e,s){if(t.includes(e)){let t=s
u(t)
for(let e=0;e<3;e++)t=t.nextElementSibling,u(t)}}(t,a,e)
const n=/quest_id=(\d+)/.exec(e.cells[4].innerHTML)[1]
o(l(n,a),e.cells[4])}function g(s){const o=e("hideQuests")?m("hideQuestNames"):[]
i(s.rows,5,0).forEach(t(p,o))}let h,Q,S,b,j,P
const A=[0,3,0,1,2],N=["lastNormalActiveQuestPage","lastNormalCompletedQuestPage","lastNormalNotStartedQuestPage","lastSeasonalActiveQuestPage","lastSeasonalCompletedQuestPage","lastSeasonalNotStartedQuestPage"]
function v(t,e,s,o){return"#FF0000"===t[o].children[0].getAttribute("color")?e+s:e}function w(t){return e(t)}function x(t,e){e.length>0&&t.setAttribute("href",e)}function B(t,e){x(S,t[e]),x(b,t[e+1]),x(j,t[e+2])}function E(){const t=N.map(w),e=function(t){return[t[3],t[4],t[5],t[0],t[1],t[2]]}(t)
P<3?(x(Q,e[P]),B(t,0)):(x(h,e[P]),B(t,3))}function y(){e("storeLastQuestPage")&&(!function(){const e=a("a",n);[h,Q,S,b,j]=e,P=A.reduce(t(v,e),0)}(),function(){const t=window.location.search
c("lastActiveQuestPage",t),c(N[P],t)}(),E())}function C(){d(),y()
const t=a(r,n)[5]
t&&g(t)}export default C
//# sourceMappingURL=injectQuestBookFull-7076cdbd.js.map
