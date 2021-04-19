import{I as t,bi as n,t as s,y as e,D as o,bj as a,bk as f,z as r,bl as i,ac as u,bm as m}from"./calfSystem-26fbeaeb.js"
import{g as c,b}from"./getBuff-a12f30b7.js"
import{f as p}from"./formatLocalDateTime-2385e9c5.js"
import{g as j,s as l}from"./idb-7ea76af7.js"
import{x as g}from"./xPath-d81b1242.js"
import"./buffObj-1e65986b.js"
import"./isDate-cef09439.js"
import"./numberIsNaN-d0e4b349.js"
import"./padZ-5c8671fc.js"
const d=t=>` ${t[0]} (${function(t){const n=c(t)
return n?n.stam.toString():"-"}(t[1])} stamina)<br>`
function k(t,n){let s
return s=n[1]?d(n):` <span class="fshRed">${n[0]}</span><br>`,t+s}function w(t){const e=p(new Date),o=b(document).map(s(k,e))
l(n,o.reverse().join("")+t)}const B=[[()=>o(".news_left_column"),()=>{a("unknown.news"),f()}],[()=>r("quickbuff-report"),()=>{a("unknown.buffLog.updateBuffLog"),t("keepBuffLog")&&j(n).then(w)}],[()=>g('//td[.="Quest Name"]'),()=>{a("unknown.questBook.injectQuestBookFull"),i()}],[()=>u('#pCC img[title="Inventing"]').length>0,()=>{a("unknown.recipes.inventing"),m()}]]
function h(){if(e())return
const t=B.find((t=>t[0]()))
t&&t[1]()}export default h
//# sourceMappingURL=unknownPage-1bf06811.js.map
