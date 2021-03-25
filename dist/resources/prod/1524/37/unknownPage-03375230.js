import{I as t,bg as n,t as s,y as a,D as e,bh as o,bi as f,z as r,bj as i,ac as u,bk as m}from"./calfSystem-60c20ae9.js"
import{g as c,b as p}from"./getBuff-32ba5302.js"
import{f as b}from"./formatLocalDateTime-7dd6c90d.js"
import{g as j,s as d}from"./idb-a07bf138.js"
import{x as g}from"./xPath-37f9d64a.js"
import"./buffObj-933e7a40.js"
import"./isDate-11ae56b4.js"
import"./numberIsNaN-a6723163.js"
import"./padZ-c46e4c30.js"
const l=t=>` ${t[0]} (${function(t){const n=c(t)
return n?n.stam.toString():"-"}(t[1])} stamina)<br>`
function k(t,n){let s
return s=n[1]?l(n):` <span class="fshRed">${n[0]}</span><br>`,t+s}function w(t){const a=b(new Date),e=p(document).map(s(k,a))
d(n,e.reverse().join("")+t)}const h=[[()=>e(".news_left_column"),()=>{o("unknown.news"),f()}],[()=>r("quickbuff-report"),()=>{o("unknown.buffLog.updateBuffLog"),t("keepBuffLog")&&j(n).then(w)}],[()=>g('//td[.="Quest Name"]'),()=>{o("unknown.questBook.injectQuestBookFull"),i()}],[()=>u('#pCC img[title="Inventing"]').length>0,()=>{o("unknown.recipes.inventing"),m()}]]
function B(){if(a())return
const t=h.find((t=>t[0]()))
t&&t[1]()}export default B
//# sourceMappingURL=unknownPage-03375230.js.map
