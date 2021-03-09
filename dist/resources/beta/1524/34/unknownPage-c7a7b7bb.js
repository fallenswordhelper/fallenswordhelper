import{D as e,G as n,H as t,bh as s,t as a,x as o,C as r,bi as i,bj as f,y as u,bk as c,aa as m,bl as l}from"./calfSystem-dfa26790.js"
import{f as p}from"./formatLocalDateTime-b4df9eb2.js"
import{b}from"./buffObj-3703b564.js"
import{g as w,s as d}from"./idb-93f11a94.js"
import{x as k}from"./xPath-769e6867.js"
import"./isDate-1383728c.js"
import"./numberIsNaN-738f2a3f.js"
import"./padZ-d4e02992.js"
let g
function h(e){return g.exec(e)}function j(t){g||(g=new RegExp("Skill ([\\w ]*) level (\\d*) was activated on '(\\w*)'|The skill ([\\w ]*) of (current or higher level is currently active) on '(\\w*)'|Player '(\\w*)' (has set their preferences to block the skill) '([\\w ]*)' from being cast on them."))
return e("#quickbuff-report font",t).map(n).map(h)}function v(e){const n=function(e){return b.find((n=>n.name===e))}(e)
return n?n.stam.toString():"-"}function x(e,n){let t
var s
return t=n[1]?` ${(s=n)[0]} (${v(s[1])} stamina)<br>`:(e=>` <span class="fshRed">${e[0]}</span><br>`)(n),e+t}function y(e){const n=p(new Date),t=j(document).map(a(x,n))
d(s,t.reverse().join("")+e)}const B=[[()=>r(".news_left_column"),()=>{i("unknown.news"),f()}],[()=>u("quickbuff-report"),()=>{i("unknown.buffLog.updateBuffLog"),t("keepBuffLog")&&w(s).then(y)}],[()=>k('//td[.="Quest Name"]'),()=>{i("unknown.questBook.injectQuestBookFull"),c()}],[()=>m('#pCC img[title="Inventing"]').length>0,()=>{i("unknown.recipes.inventing"),l()}]]
function D(){if(o())return
const e=B.find((e=>e[0]()))
e&&e[1]()}export default D
//# sourceMappingURL=unknownPage-c7a7b7bb.js.map
