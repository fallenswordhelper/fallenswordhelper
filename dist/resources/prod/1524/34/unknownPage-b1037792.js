import{D as e,G as n,H as t,bf as s,t as a,x as o,C as r,bg as f,bh as i,y as u,bi as c,aa as m,bj as l}from"./calfSystem-793da633.js"
import{f as p}from"./formatLocalDateTime-b4df9eb2.js"
import{b}from"./buffObj-3703b564.js"
import{g as w,s as d}from"./idb-e7344221.js"
import{x as g}from"./xPath-ffa9be21.js"
import"./isDate-1383728c.js"
import"./numberIsNaN-738f2a3f.js"
import"./padZ-d4e02992.js"
let k
function h(e){return k.exec(e)}function j(t){k||(k=new RegExp("Skill ([\\w ]*) level (\\d*) was activated on '(\\w*)'|The skill ([\\w ]*) of (current or higher level is currently active) on '(\\w*)'|Player '(\\w*)' (has set their preferences to block the skill) '([\\w ]*)' from being cast on them."))
return e("#quickbuff-report font",t).map(n).map(h)}function v(e){const n=function(e){return b.find((n=>n.name===e))}(e)
return n?n.stam.toString():"-"}function x(e,n){let t
var s
return t=n[1]?` ${(s=n)[0]} (${v(s[1])} stamina)<br>`:(e=>` <span class="fshRed">${e[0]}</span><br>`)(n),e+t}function y(e){const n=p(new Date),t=j(document).map(a(x,n))
d(s,t.reverse().join("")+e)}const B=[[()=>r(".news_left_column"),()=>{f("unknown.news"),i()}],[()=>u("quickbuff-report"),()=>{f("unknown.buffLog.updateBuffLog"),t("keepBuffLog")&&w(s).then(y)}],[()=>g('//td[.="Quest Name"]'),()=>{f("unknown.questBook.injectQuestBookFull"),c()}],[()=>m('#pCC img[title="Inventing"]').length>0,()=>{f("unknown.recipes.inventing"),l()}]]
function D(){if(o())return
const e=B.find((e=>e[0]()))
e&&e[1]()}export default D
//# sourceMappingURL=unknownPage-b1037792.js.map
