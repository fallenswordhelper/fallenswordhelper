import{ai as n,aO as s,cB as t,c as a,aQ as o,w as e,q as r,cC as u,cD as f,g as i,cE as c,cF as m,cG as p}from"./calfSystem-Bit7wh4p.js"
import{x as l}from"./xPath-CG9RAJj4.js"
import{f as j}from"./formatLocalDateTime-BeD03EnZ.js"
import{g as b,b as w}from"./buffReportParser-Bxs1JyzN.js"
import"./padZ-DFV6JBPu.js"
import"./isDate-BKJblKvH.js"
import"./numberIsNaN-CGkd1jiA.js"
import"./buffObj-BIwiFUIW.js"
const d=n=>` ${n[0]} (${function(n){const s=b(n)
return s?s.stam.toString():"-"}(n[1])} stamina)<br>`,g=n=>` <span class="fshRed">${n[0]}</span><br>`
function k(n,s){let t=g(s)
return s[1]&&(t=d(s)),n+t}async function B(){if(!n("keepBuffLog"))return
!function(n){const s=j(new Date),e=w(document).map(a(k,s))
o(t,e.reverse().join("")+n)}(await s(t)??"")}const h=[[()=>r(".news_left_column"),()=>{u("unknown.news"),f()}],[()=>i("quickbuff-report"),()=>{u("unknown.buffLog.updateBuffLog"),B()}],[()=>l('//td[.="Quest Name"]'),()=>{u("unknown.questBook.injectQuestBookFull"),c()}],[()=>r('#pCC input[value="doinvent"]'),()=>{u("unknown.recipes.inventing"),m()}],[()=>!1,()=>{p("Fell through!")}]]
function v(){if(e())return
const n=h.find((n=>n[0]()))
n&&n[1]()}export{v as default}
//# sourceMappingURL=unknownPage-B50egW6T.js.map
