import{I as n,bk as s,t,y as o,D as e,bl as a,bm as f,z as r,bn as u,ad as i,bo as m}from"./calfSystem-3cb2f93e.js"
import{g as c,b as p}from"./getBuff-5958e73b.js"
import{f as b}from"./formatLocalDateTime-737a2c06.js"
import{g as l,s as g}from"./idb-c9ce87e3.js"
import{x as j}from"./xPath-692eea98.js"
import"./buffObj-b66afe66.js"
import"./isDate-52df43b3.js"
import"./numberIsNaN-885a5556.js"
import"./padZ-7f619ae9.js"
const d=n=>` ${n[0]} (${function(n){const s=c(n)
return s?s.stam.toString():"-"}(n[1])} stamina)<br>`
function k(n,s){let t
return t=s[1]?d(s):` <span class="fshRed">${s[0]}</span><br>`,n+t}function w(n){const o=b(new Date),e=p(document).map(t(k,o))
g(s,e.reverse().join("")+n)}const h=[[()=>e(".news_left_column"),()=>{a("unknown.news"),f()}],[()=>r("quickbuff-report"),()=>{a("unknown.buffLog.updateBuffLog"),n("keepBuffLog")&&l(s).then(w)}],[()=>j('//td[.="Quest Name"]'),()=>{a("unknown.questBook.injectQuestBookFull"),u()}],[()=>i('#pCC img[title="Inventing"]').length>0,()=>{a("unknown.recipes.inventing"),m()}]]
function B(){if(o())return
console.log("unknownPage")
const n=h.find((n=>n[0]()))
n&&n[1]()}h.push([()=>!0,()=>{console.log("Fell through!")}])
export default B
//# sourceMappingURL=unknownPage-d1a88575.js.map
