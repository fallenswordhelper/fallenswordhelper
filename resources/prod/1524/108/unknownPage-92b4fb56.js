import{af as s,cz as t,c as n,w as o,ad as a,az as e,q as r,cA as f,cB as u,g as i,cC as m,cD as c}from"./calfSystem-34913441.js"
import{x as p}from"./xPath-7cfd59cf.js"
import{f as j}from"./formatLocalDateTime-284e8dc1.js"
import{g as l}from"./getBuff-ab7330ac.js"
import{g as b,s as d}from"./idb-ec5d6344.js"
import{b as g}from"./buffReportParser-111ca0f4.js"
import"./padZ-e55b66a2.js"
import"./isDate-5b0d282b.js"
import"./numberIsNaN-a40c3bbb.js"
import"./buffObj-18893259.js"
const k=s=>` ${s[0]} (${function(s){const t=l(s)
return t?t.stam.toString():"-"}(s[1])} stamina)<br>`,w=s=>` <span class="fshRed">${s[0]}</span><br>`
function B(s,t){let n=w(t)
return t[1]&&(n=k(t)),s+n}async function D(){if(!s("keepBuffLog"))return
!function(s){const o=j(new Date),a=g(document).map(n(B,o))
d(t,a.reverse().join("")+s)}(await b(t)??"")}const v=[[()=>r(".news_left_column"),()=>{f("unknown.news"),u()}],[()=>i("quickbuff-report"),()=>{f("unknown.buffLog.updateBuffLog"),D()}],[()=>p('//td[.="Quest Name"]'),()=>{f("unknown.questBook.injectQuestBookFull"),m()}],[()=>r('#pCC input[value="doinvent"]'),()=>{f("unknown.recipes.inventing"),c()}],[()=>a.userIsDev,()=>{e("Fell through!")}]]
function L(){if(o())return
a.userIsDev
const s=v.find((s=>s[0]()))
s&&s[1]()}export{L as default}
//# sourceMappingURL=unknownPage-92b4fb56.js.map
