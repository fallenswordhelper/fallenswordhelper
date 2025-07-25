import{aB as n,bI as s,dn as t,c as a,bJ as o,a4 as e,q as r,g as u,dp as f,dq as i,dr as c,ds as m,d4 as p}from"./calfSystem-C1X5YxJZ.js"
import{x as d}from"./xPath-BfzK81xg.js"
import{f as l}from"./formatLocalDateTime-B6wswID1.js"
import{g as b,b as k}from"./buffReportParser-DiZXelMp.js"
import"./buffObj-BIwiFUIW.js"
const g=n=>` ${n[0]} (${function(n){const s=b(n)
return s?s.stam.toString():"-"}(n[1])} stamina)<br>`,j=n=>` <span class="fshRed">${n[0]}</span><br>`
function w(n,s){let t=j(s)
return s[1]&&(t=g(s)),n+t}async function B(){if(!n("keepBuffLog"))return
!function(n){const s=l(new Date),e=k(document).map(a(w,s))
o(t,e.reverse().join("")+n)}(await s(t)??"")}const h=[[()=>r(".news_left_column"),()=>{f("unknown.news"),i()}],[()=>u("quickbuff-report"),()=>{f("unknown.buffLog.updateBuffLog"),B()}],[()=>d('//td[.="Quest Name"]'),()=>{f("unknown.questBook.injectQuestBookFull"),c()}],[()=>r('#pCC input[value="doinvent"]'),()=>{f("unknown.recipes.inventing"),m()}],[()=>!1,()=>{p("Fell through!")}]]
function q(){if(e())return
const n=h.find((n=>n[0]()))
n&&n[1]()}export{q as default}
//# sourceMappingURL=unknownPage-DoDu9j0x.js.map
