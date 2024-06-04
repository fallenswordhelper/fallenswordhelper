import{ai as n,aO as t,cC as s,c as a,aQ as o,w as e,q as r,cD as u,cE as f,g as i,cF as c,cG as m,cH as p}from"./calfSystem-wTzwei3t.js"
import{x as l}from"./xPath-B79VTYEj.js"
import{f as j}from"./formatLocalDateTime-BeD03EnZ.js"
import{g as b,b as w}from"./buffReportParser-BBMRUT0m.js"
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
//# sourceMappingURL=unknownPage-Ba922aC-.js.map
