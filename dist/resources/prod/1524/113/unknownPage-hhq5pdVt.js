import{ad as s,cw as n,c as t,w as o,q as a,cx as e,cy as r,g as u,cz as f,cA as i,cB as c}from"./calfSystem-VUa7wwu1.js"
import{x as m}from"./xPath-1ZUN83Aj.js"
import{f as p}from"./formatLocalDateTime-53V6QKEs.js"
import{g as l,b as j}from"./buffReportParser-ZXM7piOF.js"
import{g as b,s as d}from"./idb-gpu32B-C.js"
import"./padZ-zYXZ2AFi.js"
import"./isDate-_f6F_mjJ.js"
import"./numberIsNaN--k2kVli9.js"
import"./buffObj-QxLUrgH2.js"
const w=s=>` ${s[0]} (${function(s){const n=l(s)
return n?n.stam.toString():"-"}(s[1])} stamina)<br>`,g=s=>` <span class="fshRed">${s[0]}</span><br>`
function k(s,n){let t=g(n)
return n[1]&&(t=w(n)),s+t}async function v(){if(!s("keepBuffLog"))return
!function(s){const o=p(new Date),a=j(document).map(t(k,o))
d(n,a.reverse().join("")+s)}(await b(n)??"")}const B=[[()=>a(".news_left_column"),()=>{e("unknown.news"),r()}],[()=>u("quickbuff-report"),()=>{e("unknown.buffLog.updateBuffLog"),v()}],[()=>m('//td[.="Quest Name"]'),()=>{e("unknown.questBook.injectQuestBookFull"),f()}],[()=>a('#pCC input[value="doinvent"]'),()=>{e("unknown.recipes.inventing"),i()}],[()=>!1,()=>{c("Fell through!")}]]
function L(){if(o())return
const s=B.find((s=>s[0]()))
s&&s[1]()}export{L as default}
//# sourceMappingURL=unknownPage-hhq5pdVt.js.map
