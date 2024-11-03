import{ai as n,aQ as s,cJ as t,c as a,aS as o,w as e,q as r,cK as u,cL as i,g as f,cM as c,cN as m,cO as p}from"./calfSystem-B_VkFJhM.js"
import{x as l}from"./xPath-CM_npVqE.js"
import{f as j}from"./formatLocalDateTime-BeD03EnZ.js"
import{g as b,b as w}from"./buffReportParser-BbI62xyH.js"
import"./padZ-DFV6JBPu.js"
import"./isDate-BKJblKvH.js"
import"./numberIsNaN-CGkd1jiA.js"
import"./buffObj-BIwiFUIW.js"
const d=n=>` ${n[0]} (${function(n){const s=b(n)
return s?s.stam.toString():"-"}(n[1])} stamina)<br>`,g=n=>` <span class="fshRed">${n[0]}</span><br>`
function k(n,s){let t=g(s)
return s[1]&&(t=d(s)),n+t}async function L(){if(!n("keepBuffLog"))return
!function(n){const s=j(new Date),e=w(document).map(a(k,s))
o(t,e.reverse().join("")+n)}(await s(t)??"")}const h=[[()=>r(".news_left_column"),()=>{u("unknown.news"),i()}],[()=>f("quickbuff-report"),()=>{u("unknown.buffLog.updateBuffLog"),L()}],[()=>l('//td[.="Quest Name"]'),()=>{u("unknown.questBook.injectQuestBookFull"),c()}],[()=>r('#pCC input[value="doinvent"]'),()=>{u("unknown.recipes.inventing"),m()}],[()=>!1,()=>{p("Fell through!")}]]
function v(){if(e())return
const n=h.find((n=>n[0]()))
n&&n[1]()}export{v as default}
//# sourceMappingURL=unknownPage-J1PwTADg.js.map
