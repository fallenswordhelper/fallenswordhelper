import{aA as n,bH as t,dc as s,c as a,bI as o,a3 as e,q as f,g as r,dd as u,de as i,df as c,dg as m,cW as p}from"./calfSystem-79LsojAC.js"
import{x as d}from"./xPath-CY5AEZF7.js"
import{f as l}from"./formatLocalDateTime-CwDWzRUp.js"
import{g as b,b as g}from"./buffReportParser-B5jKInr0.js"
import"./buffObj-BIwiFUIW.js"
const j=n=>` ${n[0]} (${function(n){const t=b(n)
return t?t.stam.toString():"-"}(n[1])} stamina)<br>`
function k(n,t){let s=` <span class="fshRed">${t[0]}</span><br>`
return t[1]&&(s=j(t)),n+s}async function w(){if(!n("keepBuffLog"))return
!function(n){const t=l(new Date),e=g(document).map(a(k,t))
o(s,e.reverse().join("")+n)}(await t(s)??"")}const h=[[()=>f(".news_left_column"),()=>{u("unknown.news"),i()}],[()=>r("quickbuff-report"),()=>{u("unknown.buffLog.updateBuffLog"),w()}],[()=>d('//td[.="Quest Name"]'),()=>{u("unknown.questBook.injectQuestBookFull"),c()}],[()=>f('#pCC input[value="doinvent"]'),()=>{u("unknown.recipes.inventing"),m()}],[()=>!1,()=>{p("Fell through!")}]]
function v(){if(e())return
const n=h.find(n=>n[0]())
n&&n[1]()}export{v as default}
//# sourceMappingURL=unknownPage-D4qZeRQ9.js.map
