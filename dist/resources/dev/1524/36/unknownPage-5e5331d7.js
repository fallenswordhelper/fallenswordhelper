import{I as n,bj as s,t,y as e,D as o,bk as a,bl as f,z as r,bm as u,ad as i,bn as m}from"./calfSystem-eeb1d862.js"
import{g as c,b as p}from"./getBuff-16237e80.js"
import{f as b}from"./formatLocalDateTime-013f4621.js"
import{g as l,s as g}from"./idb-874d144e.js"
import{x as j}from"./xPath-3abb3301.js"
import"./buffObj-ae031e44.js"
import"./isDate-4b559eff.js"
import"./numberIsNaN-891c59d9.js"
import"./padZ-0374e903.js"
const d=n=>` ${n[0]} (${function(n){const s=c(n)
return s?s.stam.toString():"-"}(n[1])} stamina)<br>`
function k(n,s){let t
return t=s[1]?d(s):` <span class="fshRed">${s[0]}</span><br>`,n+t}function w(n){const e=b(new Date),o=p(document).map(t(k,e))
g(s,o.reverse().join("")+n)}const h=[[()=>o(".news_left_column"),()=>{a("unknown.news"),f()}],[()=>r("quickbuff-report"),()=>{a("unknown.buffLog.updateBuffLog"),n("keepBuffLog")&&l(s).then(w)}],[()=>j('//td[.="Quest Name"]'),()=>{a("unknown.questBook.injectQuestBookFull"),u()}],[()=>i('#pCC img[title="Inventing"]').length>0,()=>{a("unknown.recipes.inventing"),m()}]]
function B(){if(e())return
console.log("unknownPage")
const n=h.find((n=>n[0]()))
n&&n[1]()}h.push([()=>!0,()=>{console.log("Fell through!")}])
export default B
//# sourceMappingURL=unknownPage-5e5331d7.js.map
