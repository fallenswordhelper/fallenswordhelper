import{aB as n,bF as t,dl as s,c as a,bG as o,a4 as e,q as r,g as u,dm as f,dn as i,dp as c,dq as m,d2 as p}from"./calfSystem-BlPuMQGT.js"
import{x as d}from"./xPath-CChveOml.js"
import{f as l}from"./formatLocalDateTime-CFMWw0OF.js"
import{g as b,b as k}from"./buffReportParser-CX-OfhyP.js"
import"./buffObj-BIwiFUIW.js"
const g=n=>` ${n[0]} (${function(n){const t=b(n)
return t?t.stam.toString():"-"}(n[1])} stamina)<br>`,j=n=>` <span class="fshRed">${n[0]}</span><br>`
function w(n,t){let s=j(t)
return t[1]&&(s=g(t)),n+s}async function B(){if(!n("keepBuffLog"))return
!function(n){const t=l(new Date),e=k(document).map(a(w,t))
o(s,e.reverse().join("")+n)}(await t(s)??"")}const h=[[()=>r(".news_left_column"),()=>{f("unknown.news"),i()}],[()=>u("quickbuff-report"),()=>{f("unknown.buffLog.updateBuffLog"),B()}],[()=>d('//td[.="Quest Name"]'),()=>{f("unknown.questBook.injectQuestBookFull"),c()}],[()=>r('#pCC input[value="doinvent"]'),()=>{f("unknown.recipes.inventing"),m()}],[()=>!1,()=>{p("Fell through!")}]]
function q(){if(e())return
const n=h.find((n=>n[0]()))
n&&n[1]()}export{q as default}
//# sourceMappingURL=unknownPage-h7A__Xo6.js.map
