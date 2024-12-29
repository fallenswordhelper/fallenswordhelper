import{ao as n,b6 as t,d4 as s,c as o,b8 as a,x as e,q as r,d5 as u,d6 as f,g as i,d7 as c,d8 as m,d9 as p}from"./calfSystem-ChzN4Q-P.js"
import{x as d}from"./xPath-CwPxpX3w.js"
import{f as l}from"./formatLocalDateTime-S3uf4uPd.js"
import{g as b,b as w}from"./buffReportParser-Bdukf5Lh.js"
import"./buffObj-BIwiFUIW.js"
const g=n=>` ${n[0]} (${function(n){const t=b(n)
return t?t.stam.toString():"-"}(n[1])} stamina)<br>`,j=n=>` <span class="fshRed">${n[0]}</span><br>`
function k(n,t){let s=j(t)
return t[1]&&(s=g(t)),n+s}async function h(){if(!n("keepBuffLog"))return
!function(n){const t=l(new Date),e=w(document).map(o(k,t))
a(s,e.reverse().join("")+n)}(await t(s)??"")}const v=[[()=>r(".news_left_column"),()=>{u("unknown.news"),f()}],[()=>i("quickbuff-report"),()=>{u("unknown.buffLog.updateBuffLog"),h()}],[()=>d('//td[.="Quest Name"]'),()=>{u("unknown.questBook.injectQuestBookFull"),c()}],[()=>r('#pCC input[value="doinvent"]'),()=>{u("unknown.recipes.inventing"),m()}],[()=>!1,()=>{p("Fell through!")}]]
function x(){if(e())return
const n=v.find((n=>n[0]()))
n&&n[1]()}export{x as default}
//# sourceMappingURL=unknownPage-C9UwM1jZ.js.map
