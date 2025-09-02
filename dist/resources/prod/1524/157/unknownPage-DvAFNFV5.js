import{aA as n,bJ as t,df as s,c as a,bK as o,a3 as e,q as f,g as r,dg as u,dh as i,di as c,dj as m,c$ as p}from"./calfSystem-CQOGdqPv.js"
import{x as l}from"./xPath-BAVwcsyU.js"
import{f as d}from"./formatLocalDateTime-DGZZjaA1.js"
import{g as b,b as g}from"./buffReportParser-wdsxlWDF.js"
import"./buffObj-BIwiFUIW.js"
const j=n=>` ${n[0]} (${function(n){const t=b(n)
return t?t.stam.toString():"-"}(n[1])} stamina)<br>`
function k(n,t){let s=` <span class="fshRed">${t[0]}</span><br>`
return t[1]&&(s=j(t)),n+s}async function w(){if(!n("keepBuffLog"))return
!function(n){const t=d(new Date),e=g(document).map(a(k,t))
o(s,e.reverse().join("")+n)}(await t(s)??"")}const h=[[()=>f(".news_left_column"),()=>{u("unknown.news"),i()}],[()=>r("quickbuff-report"),()=>{u("unknown.buffLog.updateBuffLog"),w()}],[()=>l('//td[.="Quest Name"]'),()=>{u("unknown.questBook.injectQuestBookFull"),c()}],[()=>f('#pCC input[value="doinvent"]'),()=>{u("unknown.recipes.inventing"),m()}],[()=>!1,()=>{p("Fell through!")}]]
function v(){if(e())return
const n=h.find(n=>n[0]())
n&&n[1]()}export{v as default}
//# sourceMappingURL=unknownPage-DvAFNFV5.js.map
