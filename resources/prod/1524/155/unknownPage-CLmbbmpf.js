import{az as n,bG as t,dj as s,c as a,bH as o,a2 as e,q as r,g as u,dk as f,dl as i,dm as c,dn as m,d0 as p}from"./calfSystem-UyQ_FKFu.js"
import{x as l}from"./xPath-DXdL6jrk.js"
import{f as d}from"./formatLocalDateTime-BlZfIxha.js"
import{g as b,b as j}from"./buffReportParser-tKQU5Jtr.js"
import"./buffObj-BIwiFUIW.js"
const k=n=>` ${n[0]} (${function(n){const t=b(n)
return t?t.stam.toString():"-"}(n[1])} stamina)<br>`
function g(n,t){let s=` <span class="fshRed">${t[0]}</span><br>`
return t[1]&&(s=k(t)),n+s}async function w(){if(!n("keepBuffLog"))return
!function(n){const t=d(new Date),e=j(document).map(a(g,t))
o(s,e.reverse().join("")+n)}(await t(s)??"")}const h=[[()=>r(".news_left_column"),()=>{f("unknown.news"),i()}],[()=>u("quickbuff-report"),()=>{f("unknown.buffLog.updateBuffLog"),w()}],[()=>l('//td[.="Quest Name"]'),()=>{f("unknown.questBook.injectQuestBookFull"),c()}],[()=>r('#pCC input[value="doinvent"]'),()=>{f("unknown.recipes.inventing"),m()}],[()=>!1,()=>{p("Fell through!")}]]
function v(){if(e())return
const n=h.find(n=>n[0]())
n&&n[1]()}export{v as default}
//# sourceMappingURL=unknownPage-CLmbbmpf.js.map
