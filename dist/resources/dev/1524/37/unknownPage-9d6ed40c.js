import{I as n,bj as s,t,y as o,D as e,bk as a,bl as r,z as f,bm as u,ad as i,bn as m}from"./calfSystem-5d0c721b.js"
import{g as c,b}from"./getBuff-e52873a5.js"
import{f as p}from"./formatLocalDateTime-7dd6c90d.js"
import{g as l,s as g}from"./idb-a2aaccdb.js"
import{x as d}from"./xPath-f0b0b84b.js"
import"./buffObj-933e7a40.js"
import"./isDate-11ae56b4.js"
import"./numberIsNaN-a6723163.js"
import"./padZ-c46e4c30.js"
const j=n=>` ${n[0]} (${function(n){const s=c(n)
return s?s.stam.toString():"-"}(n[1])} stamina)<br>`
function k(n,s){let t
return t=s[1]?j(s):` <span class="fshRed">${s[0]}</span><br>`,n+t}function w(n){const o=p(new Date),e=b(document).map(t(k,o))
g(s,e.reverse().join("")+n)}const h=[[()=>e(".news_left_column"),()=>{a("unknown.news"),r()}],[()=>f("quickbuff-report"),()=>{a("unknown.buffLog.updateBuffLog"),n("keepBuffLog")&&l(s).then(w)}],[()=>d('//td[.="Quest Name"]'),()=>{a("unknown.questBook.injectQuestBookFull"),u()}],[()=>i('#pCC img[title="Inventing"]').length>0,()=>{a("unknown.recipes.inventing"),m()}]]
function B(){if(o())return
console.log("unknownPage")
const n=h.find((n=>n[0]()))
n&&n[1]()}h.push([()=>!0,()=>{console.log("Fell through!")}])
export default B
//# sourceMappingURL=unknownPage-9d6ed40c.js.map
