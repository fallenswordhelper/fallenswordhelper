import{af as s,cz as t,c as n,w as o,ad as a,az as e,q as r,cA as u,cB as f,g as i,cC as m,cD as c}from"./calfSystem-2fff342b.js"
import{x as p}from"./xPath-1600972d.js"
import{f as j}from"./formatLocalDateTime-284e8dc1.js"
import{g as l}from"./getBuff-ab7330ac.js"
import{g as b,s as d}from"./idb-0ebea50c.js"
import{b as g}from"./buffReportParser-25097bc8.js"
import"./padZ-e55b66a2.js"
import"./isDate-5b0d282b.js"
import"./numberIsNaN-a40c3bbb.js"
import"./buffObj-18893259.js"
const w=s=>` ${s[0]} (${function(s){const t=l(s)
return t?t.stam.toString():"-"}(s[1])} stamina)<br>`,k=s=>` <span class="fshRed">${s[0]}</span><br>`
function v(s,t){let n=k(t)
return t[1]&&(n=w(t)),s+n}async function B(){if(!s("keepBuffLog"))return
!function(s){const o=j(new Date),a=g(document).map(n(v,o))
d(t,a.reverse().join("")+s)}(await b(t)??"")}const D=[[()=>r(".news_left_column"),()=>{u("unknown.news"),f()}],[()=>i("quickbuff-report"),()=>{u("unknown.buffLog.updateBuffLog"),B()}],[()=>p('//td[.="Quest Name"]'),()=>{u("unknown.questBook.injectQuestBookFull"),m()}],[()=>r('#pCC input[value="doinvent"]'),()=>{u("unknown.recipes.inventing"),c()}],[()=>a.userIsDev,()=>{e("Fell through!")}]]
function L(){if(o())return
a.userIsDev
const s=D.find((s=>s[0]()))
s&&s[1]()}export{L as default}
//# sourceMappingURL=unknownPage-c665e477.js.map
