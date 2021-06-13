import{I as n,bo as s,t,y as o,D as e,bp as a,bq as r,z as f,br as u,ac as i,bs as c}from"./calfSystem-6a3c85e0.js"
import{g as m,b as p}from"./getBuff-4ce09167.js"
import{f as b}from"./formatLocalDateTime-3ab87719.js"
import{g as l,s as g}from"./idb-66004b57.js"
import{x as j}from"./xPath-a08105fc.js"
import"./buffObj-c673ca2f.js"
import"./isDate-73c83436.js"
import"./numberIsNaN-c7db67d0.js"
import"./padZ-28d1918e.js"
const d=n=>` ${n[0]} (${function(n){const s=m(n)
return s?s.stam.toString():"-"}(n[1])} stamina)<br>`
function k(n,s){let t
return t=s[1]?d(s):` <span class="fshRed">${s[0]}</span><br>`,n+t}function w(n){const o=b(new Date),e=p(document).map(t(k,o))
g(s,e.reverse().join("")+n)}const h=[[()=>e(".news_left_column"),()=>{a("unknown.news"),r()}],[()=>f("quickbuff-report"),()=>{a("unknown.buffLog.updateBuffLog"),n("keepBuffLog")&&l(s).then(w)}],[()=>j('//td[.="Quest Name"]'),()=>{a("unknown.questBook.injectQuestBookFull"),u()}],[()=>i('#pCC img[title="Inventing"]').length>0,()=>{a("unknown.recipes.inventing"),c()}]]
function B(){if(o())return
console.log("unknownPage")
const n=h.find((n=>n[0]()))
n&&n[1]()}h.push([()=>!0,()=>{console.log("Fell through!")}])
export default B
//# sourceMappingURL=unknownPage-deedc3df.js.map
