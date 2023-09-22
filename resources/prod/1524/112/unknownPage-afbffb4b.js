import{ad as n,cw as s,c as t,w as o,q as a,cx as e,cy as r,g as u,cz as f,cA as i,cB as c}from"./calfSystem-4830a18d.js"
import{x as m}from"./xPath-13f1f0a9.js"
import{f as p}from"./formatLocalDateTime-284e8dc1.js"
import{g as l,b as j}from"./buffReportParser-f8c4899c.js"
import{g as b,s as d}from"./idb-7e56faaa.js"
import"./padZ-e55b66a2.js"
import"./isDate-5b0d282b.js"
import"./numberIsNaN-a40c3bbb.js"
import"./buffObj-18893259.js"
const w=n=>` ${n[0]} (${function(n){const s=l(n)
return s?s.stam.toString():"-"}(n[1])} stamina)<br>`,g=n=>` <span class="fshRed">${n[0]}</span><br>`
function k(n,s){let t=g(s)
return s[1]&&(t=w(s)),n+t}async function B(){if(!n("keepBuffLog"))return
!function(n){const o=p(new Date),a=j(document).map(t(k,o))
d(s,a.reverse().join("")+n)}(await b(s)??"")}const h=[[()=>a(".news_left_column"),()=>{e("unknown.news"),r()}],[()=>u("quickbuff-report"),()=>{e("unknown.buffLog.updateBuffLog"),B()}],[()=>m('//td[.="Quest Name"]'),()=>{e("unknown.questBook.injectQuestBookFull"),f()}],[()=>a('#pCC input[value="doinvent"]'),()=>{e("unknown.recipes.inventing"),i()}],[()=>!1,()=>{c("Fell through!")}]]
function v(){if(o())return
const n=h.find((n=>n[0]()))
n&&n[1]()}export{v as default}
//# sourceMappingURL=unknownPage-afbffb4b.js.map
