import{ao as n,b6 as t,d4 as s,c as o,b8 as a,x as e,q as r,d5 as u,d6 as f,g as i,d7 as c,d8 as m,d9 as p}from"./calfSystem-CvwhhJv4.js"
import{x as d}from"./xPath-DwN2LDp_.js"
import{f as l}from"./formatLocalDateTime-BhcG8Fc8.js"
import{g as b,b as g}from"./buffReportParser-C9MhHbeW.js"
import"./buffObj-BIwiFUIW.js"
const j=n=>` ${n[0]} (${function(n){const t=b(n)
return t?t.stam.toString():"-"}(n[1])} stamina)<br>`,k=n=>` <span class="fshRed">${n[0]}</span><br>`
function w(n,t){let s=k(t)
return t[1]&&(s=j(t)),n+s}async function x(){if(!n("keepBuffLog"))return
!function(n){const t=l(new Date),e=g(document).map(o(w,t))
a(s,e.reverse().join("")+n)}(await t(s)??"")}const h=[[()=>r(".news_left_column"),()=>{u("unknown.news"),f()}],[()=>i("quickbuff-report"),()=>{u("unknown.buffLog.updateBuffLog"),x()}],[()=>d('//td[.="Quest Name"]'),()=>{u("unknown.questBook.injectQuestBookFull"),c()}],[()=>r('#pCC input[value="doinvent"]'),()=>{u("unknown.recipes.inventing"),m()}],[()=>!1,()=>{p("Fell through!")}]]
function v(){if(e())return
const n=h.find((n=>n[0]()))
n&&n[1]()}export{v as default}
//# sourceMappingURL=unknownPage-X-Lhskyn.js.map
