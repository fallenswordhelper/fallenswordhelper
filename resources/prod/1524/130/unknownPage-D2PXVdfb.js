import{ai as n,aO as t,cA as s,c as a,aQ as o,w as e,q as r,cB as u,cC as f,g as i,cD as c,cE as m,cF as p}from"./calfSystem-CXltiP6P.js"
import{x as l}from"./xPath-DJhp6k_g.js"
import{f as j}from"./formatLocalDateTime-BeD03EnZ.js"
import{g as b,b as w}from"./buffReportParser-DHBlMIFQ.js"
import"./padZ-DFV6JBPu.js"
import"./isDate-BKJblKvH.js"
import"./numberIsNaN-CGkd1jiA.js"
import"./buffObj-BIwiFUIW.js"
const d=n=>` ${n[0]} (${function(n){const t=b(n)
return t?t.stam.toString():"-"}(n[1])} stamina)<br>`,g=n=>` <span class="fshRed">${n[0]}</span><br>`
function k(n,t){let s=g(t)
return t[1]&&(s=d(t)),n+s}async function B(){if(!n("keepBuffLog"))return
!function(n){const t=j(new Date),e=w(document).map(a(k,t))
o(s,e.reverse().join("")+n)}(await t(s)??"")}const h=[[()=>r(".news_left_column"),()=>{u("unknown.news"),f()}],[()=>i("quickbuff-report"),()=>{u("unknown.buffLog.updateBuffLog"),B()}],[()=>l('//td[.="Quest Name"]'),()=>{u("unknown.questBook.injectQuestBookFull"),c()}],[()=>r('#pCC input[value="doinvent"]'),()=>{u("unknown.recipes.inventing"),m()}],[()=>!1,()=>{p("Fell through!")}]]
function v(){if(e())return
const n=h.find((n=>n[0]()))
n&&n[1]()}export{v as default}
//# sourceMappingURL=unknownPage-D2PXVdfb.js.map
