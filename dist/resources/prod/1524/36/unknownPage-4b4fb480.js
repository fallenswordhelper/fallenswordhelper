import{I as t,bg as n,t as s,y as e,D as o,bh as a,bi as f,z as r,bj as i,ac as u,bk as m}from"./calfSystem-e7bde0c3.js"
import{g as c,b as p}from"./getBuff-1f6cd9c8.js"
import{f as b}from"./formatLocalDateTime-013f4621.js"
import{g as j,s as g}from"./idb-47978eaa.js"
import{x as d}from"./xPath-a60e6b06.js"
import"./buffObj-ae031e44.js"
import"./isDate-4b559eff.js"
import"./numberIsNaN-891c59d9.js"
import"./padZ-0374e903.js"
const l=t=>` ${t[0]} (${function(t){const n=c(t)
return n?n.stam.toString():"-"}(t[1])} stamina)<br>`
function k(t,n){let s
return s=n[1]?l(n):` <span class="fshRed">${n[0]}</span><br>`,t+s}function w(t){const e=b(new Date),o=p(document).map(s(k,e))
g(n,o.reverse().join("")+t)}const h=[[()=>o(".news_left_column"),()=>{a("unknown.news"),f()}],[()=>r("quickbuff-report"),()=>{a("unknown.buffLog.updateBuffLog"),t("keepBuffLog")&&j(n).then(w)}],[()=>d('//td[.="Quest Name"]'),()=>{a("unknown.questBook.injectQuestBookFull"),i()}],[()=>u('#pCC img[title="Inventing"]').length>0,()=>{a("unknown.recipes.inventing"),m()}]]
function B(){if(e())return
const t=h.find((t=>t[0]()))
t&&t[1]()}export default B
//# sourceMappingURL=unknownPage-4b4fb480.js.map
