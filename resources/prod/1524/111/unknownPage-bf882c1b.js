import{ae as s,cw as t,c as n,w as o,q as a,cx as e,cy as r,g as u,cz as f,cA as i,cB as c}from"./calfSystem-abb16b0d.js"
import{x as m}from"./xPath-401958b0.js"
import{f as p}from"./formatLocalDateTime-284e8dc1.js"
import{g as j,b as l}from"./buffReportParser-3cf92237.js"
import{g as b,s as w}from"./idb-e719862a.js"
import"./padZ-e55b66a2.js"
import"./isDate-5b0d282b.js"
import"./numberIsNaN-a40c3bbb.js"
import"./buffObj-18893259.js"
const d=s=>` ${s[0]} (${function(s){const t=j(s)
return t?t.stam.toString():"-"}(s[1])} stamina)<br>`,g=s=>` <span class="fshRed">${s[0]}</span><br>`
function k(s,t){let n=g(t)
return t[1]&&(n=d(t)),s+n}async function B(){if(!s("keepBuffLog"))return
!function(s){const o=p(new Date),a=l(document).map(n(k,o))
w(t,a.reverse().join("")+s)}(await b(t)??"")}const h=[[()=>a(".news_left_column"),()=>{e("unknown.news"),r()}],[()=>u("quickbuff-report"),()=>{e("unknown.buffLog.updateBuffLog"),B()}],[()=>m('//td[.="Quest Name"]'),()=>{e("unknown.questBook.injectQuestBookFull"),f()}],[()=>a('#pCC input[value="doinvent"]'),()=>{e("unknown.recipes.inventing"),i()}],[()=>!1,()=>{c("Fell through!")}]]
function v(){if(o())return
const s=h.find((s=>s[0]()))
s&&s[1]()}export{v as default}
//# sourceMappingURL=unknownPage-bf882c1b.js.map
