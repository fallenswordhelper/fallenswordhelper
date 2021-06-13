import{I as n,bo as s,t,y as o,D as e,bp as a,bq as r,z as f,br as u,ac as i,bs as c}from"./calfSystem-d3f0a380.js"
import{g as m,b as p}from"./getBuff-2fadd508.js"
import{f as b}from"./formatLocalDateTime-bd13d3cb.js"
import{g as l,s as g}from"./idb-13440348.js"
import{x as d}from"./xPath-ac791c3e.js"
import"./buffObj-c604f006.js"
import"./isDate-c10883b5.js"
import"./numberIsNaN-c0e87dea.js"
import"./padZ-aa6c487e.js"
const j=n=>` ${n[0]} (${function(n){const s=m(n)
return s?s.stam.toString():"-"}(n[1])} stamina)<br>`
function k(n,s){let t
return t=s[1]?j(s):` <span class="fshRed">${s[0]}</span><br>`,n+t}function w(n){const o=b(new Date),e=p(document).map(t(k,o))
g(s,e.reverse().join("")+n)}const h=[[()=>e(".news_left_column"),()=>{a("unknown.news"),r()}],[()=>f("quickbuff-report"),()=>{a("unknown.buffLog.updateBuffLog"),n("keepBuffLog")&&l(s).then(w)}],[()=>d('//td[.="Quest Name"]'),()=>{a("unknown.questBook.injectQuestBookFull"),u()}],[()=>i('#pCC img[title="Inventing"]').length>0,()=>{a("unknown.recipes.inventing"),c()}]]
function B(){if(o())return
console.log("unknownPage")
const n=h.find((n=>n[0]()))
n&&n[1]()}h.push([()=>!0,()=>{console.log("Fell through!")}])
export default B
//# sourceMappingURL=unknownPage-aa91c0db.js.map
