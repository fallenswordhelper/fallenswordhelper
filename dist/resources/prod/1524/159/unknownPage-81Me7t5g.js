import{aA as n,bK as t,dg as s,c as a,bL as o,a4 as e,q as r,g as u,dh as f,di as i,dj as c,dk as m,b9 as p}from"./calfSystem-CIdPz3EO.js"
import{x as d}from"./xPath-CSxyaOXZ.js"
import{f as l}from"./formatLocalDateTime-BBBxbf8k.js"
import{g as b,b as g}from"./buffReportParser-CXDyQ2KW.js"
import"./buffObj-BIwiFUIW.js"
const j=n=>` ${n[0]} (${function(n){const t=b(n)
return t?t.stam.toString():"-"}(n[1])} stamina)<br>`
function k(n,t){let s=` <span class="fshRed">${t[0]}</span><br>`
return t[1]&&(s=j(t)),n+s}async function w(){if(!n("keepBuffLog"))return
!function(n){const t=l(new Date),e=g(document).map(a(k,t))
o(s,e.reverse().join("")+n)}(await t(s)??"")}const h=[[()=>r(".news_left_column"),()=>{f("unknown.news"),i()}],[()=>u("quickbuff-report"),()=>{f("unknown.buffLog.updateBuffLog"),w()}],[()=>d('//td[.="Quest Name"]'),()=>{f("unknown.questBook.injectQuestBookFull"),c()}],[()=>r('#pCC input[value="doinvent"]'),()=>{f("unknown.recipes.inventing"),m()}],[()=>!1,()=>{p("Fell through!")}]]
function L(){if(e())return
const n=h.find(n=>n[0]())
n&&n[1]()}export{L as default}
//# sourceMappingURL=unknownPage-81Me7t5g.js.map
