import{aq as n,bw as t,db as s,d as o,bx as a,y as e,q as f,g as r,dc as u,dd as i,de as c,df as m,cP as p}from"./calfSystem-BldO1y8X.js"
import{x as d}from"./xPath-C_iKPP1F.js"
import{f as l}from"./formatLocalDateTime-BTgJPGXi.js"
import{g as b,b as w}from"./buffReportParser-CknJ4mbF.js"
import"./buffObj-BIwiFUIW.js"
const g=n=>` ${n[0]} (${function(n){const t=b(n)
return t?t.stam.toString():"-"}(n[1])} stamina)<br>`,j=n=>` <span class="fshRed">${n[0]}</span><br>`
function k(n,t){let s=j(t)
return t[1]&&(s=g(t)),n+s}async function v(){if(!n("keepBuffLog"))return
!function(n){const t=l(new Date),e=w(document).map(o(k,t))
a(s,e.reverse().join("")+n)}(await t(s)??"")}const P=[[()=>f(".news_left_column"),()=>{u("unknown.news"),i()}],[()=>r("quickbuff-report"),()=>{u("unknown.buffLog.updateBuffLog"),v()}],[()=>d('//td[.="Quest Name"]'),()=>{u("unknown.questBook.injectQuestBookFull"),c()}],[()=>f('#pCC input[value="doinvent"]'),()=>{u("unknown.recipes.inventing"),m()}],[()=>!1,()=>{p("Fell through!")}]]
function h(){if(e())return
const n=P.find((n=>n[0]()))
n&&n[1]()}export{h as default}
//# sourceMappingURL=unknownPage-8gjzw-Tp.js.map
