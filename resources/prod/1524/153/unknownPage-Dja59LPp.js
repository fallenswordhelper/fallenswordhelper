import{az as n,bG as t,di as s,c as a,bH as o,a2 as e,q as r,g as u,dj as f,dk as i,dl as c,dm as m,c$ as p}from"./calfSystem-CT1aM4VG.js"
import{x as l}from"./xPath-D_Qiwp5N.js"
import{f as d}from"./formatLocalDateTime-B_p3ONjw.js"
import{g as b,b as j}from"./buffReportParser-8Mz1e59y.js"
import"./buffObj-BIwiFUIW.js"
const k=n=>` ${n[0]} (${function(n){const t=b(n)
return t?t.stam.toString():"-"}(n[1])} stamina)<br>`,g=n=>` <span class="fshRed">${n[0]}</span><br>`
function w(n,t){let s=g(t)
return t[1]&&(s=k(t)),n+s}async function h(){if(!n("keepBuffLog"))return
!function(n){const t=d(new Date),e=j(document).map(a(w,t))
o(s,e.reverse().join("")+n)}(await t(s)??"")}const v=[[()=>r(".news_left_column"),()=>{f("unknown.news"),i()}],[()=>u("quickbuff-report"),()=>{f("unknown.buffLog.updateBuffLog"),h()}],[()=>l('//td[.="Quest Name"]'),()=>{f("unknown.questBook.injectQuestBookFull"),c()}],[()=>r('#pCC input[value="doinvent"]'),()=>{f("unknown.recipes.inventing"),m()}],[()=>!1,()=>{p("Fell through!")}]]
function B(){if(e())return
const n=v.find((n=>n[0]()))
n&&n[1]()}export{B as default}
//# sourceMappingURL=unknownPage-Dja59LPp.js.map
