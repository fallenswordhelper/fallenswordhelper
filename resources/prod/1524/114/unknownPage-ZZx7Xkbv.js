import{ad as s,cv as n,c as t,w as o,q as a,cw as e,cx as r,g as u,cy as f,cz as i,cA as c}from"./calfSystem-rn9Rc_nF.js"
import{x as m}from"./xPath-YKkbcfZu.js"
import{f as p}from"./formatLocalDateTime-53V6QKEs.js"
import{g as l,b as j}from"./buffReportParser-9P9dDooQ.js"
import{g as b,s as d}from"./idb-1b6_RJN1.js"
import"./padZ-zYXZ2AFi.js"
import"./isDate-_f6F_mjJ.js"
import"./numberIsNaN--k2kVli9.js"
import"./buffObj-QxLUrgH2.js"
const w=s=>` ${s[0]} (${function(s){const n=l(s)
return n?n.stam.toString():"-"}(s[1])} stamina)<br>`,g=s=>` <span class="fshRed">${s[0]}</span><br>`
function k(s,n){let t=g(n)
return n[1]&&(t=w(n)),s+t}async function v(){if(!s("keepBuffLog"))return
!function(s){const o=p(new Date),a=j(document).map(t(k,o))
d(n,a.reverse().join("")+s)}(await b(n)??"")}const L=[[()=>a(".news_left_column"),()=>{e("unknown.news"),r()}],[()=>u("quickbuff-report"),()=>{e("unknown.buffLog.updateBuffLog"),v()}],[()=>m('//td[.="Quest Name"]'),()=>{e("unknown.questBook.injectQuestBookFull"),f()}],[()=>a('#pCC input[value="doinvent"]'),()=>{e("unknown.recipes.inventing"),i()}],[()=>!1,()=>{c("Fell through!")}]]
function h(){if(o())return
const s=L.find((s=>s[0]()))
s&&s[1]()}export{h as default}
//# sourceMappingURL=unknownPage-ZZx7Xkbv.js.map
