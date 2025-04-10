import{ao as n,bx as t,df as s,e as o,by as a,A as e,q as f,g as r,dg as u,dh as i,di as c,dj as m,cP as p}from"./calfSystem-BGOTz8de.js"
import{x as d}from"./xPath-DutV-yRl.js"
import{f as l}from"./formatLocalDateTime-BhkxRH0M.js"
import{g as b,b as g}from"./buffReportParser-GMYim8UI.js"
import"./buffObj-BIwiFUIW.js"
const j=n=>` ${n[0]} (${function(n){const t=b(n)
return t?t.stam.toString():"-"}(n[1])} stamina)<br>`,k=n=>` <span class="fshRed">${n[0]}</span><br>`
function w(n,t){let s=k(t)
return t[1]&&(s=j(t)),n+s}async function h(){if(!n("keepBuffLog"))return
!function(n){const t=l(new Date),e=g(document).map(o(w,t))
a(s,e.reverse().join("")+n)}(await t(s)??"")}const B=[[()=>f(".news_left_column"),()=>{u("unknown.news"),i()}],[()=>r("quickbuff-report"),()=>{u("unknown.buffLog.updateBuffLog"),h()}],[()=>d('//td[.="Quest Name"]'),()=>{u("unknown.questBook.injectQuestBookFull"),c()}],[()=>f('#pCC input[value="doinvent"]'),()=>{u("unknown.recipes.inventing"),m()}],[()=>!1,()=>{p("Fell through!")}]]
function v(){if(e())return
const n=B.find((n=>n[0]()))
n&&n[1]()}export{v as default}
//# sourceMappingURL=unknownPage-BkqLG_YO.js.map
