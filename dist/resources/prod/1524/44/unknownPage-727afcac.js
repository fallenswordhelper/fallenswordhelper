import{I as t,bj as n,t as s,y as e,D as o,bk as a,bl as r,z as f,bm as i,ab as u,bn as m}from"./calfSystem-6ad077b7.js"
import{g as c,b}from"./getBuff-d17ed0c5.js"
import{f as p}from"./formatLocalDateTime-c295cb3e.js"
import{g as j,s as l}from"./idb-9caca870.js"
import{x as d}from"./xPath-1e0c2a1c.js"
import"./buffObj-1b3bee9b.js"
import"./isDate-00b71016.js"
import"./numberIsNaN-11f99b26.js"
import"./padZ-634214b3.js"
const g=t=>` ${t[0]} (${function(t){const n=c(t)
return n?n.stam.toString():"-"}(t[1])} stamina)<br>`
function k(t,n){let s
return s=n[1]?g(n):` <span class="fshRed">${n[0]}</span><br>`,t+s}function w(t){const e=p(new Date),o=b(document).map(s(k,e))
l(n,o.reverse().join("")+t)}const B=[[()=>o(".news_left_column"),()=>{a("unknown.news"),r()}],[()=>f("quickbuff-report"),()=>{a("unknown.buffLog.updateBuffLog"),t("keepBuffLog")&&j(n).then(w)}],[()=>d('//td[.="Quest Name"]'),()=>{a("unknown.questBook.injectQuestBookFull"),i()}],[()=>u('#pCC img[title="Inventing"]').length>0,()=>{a("unknown.recipes.inventing"),m()}]]
function h(){if(e())return
const t=B.find((t=>t[0]()))
t&&t[1]()}export default h
//# sourceMappingURL=unknownPage-727afcac.js.map
