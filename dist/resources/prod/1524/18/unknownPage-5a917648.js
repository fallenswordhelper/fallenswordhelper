import{I as e,a8 as n,D as t,bB as s,s as a,w as o,M as r,bL as i,bM as f,x as u,bN as c,a7 as m,bO as l}from"./calfSystem-8b6534a5.js"
import"./numberIsNaN-0a4ef3fd.js"
import{g as b,s as p}from"./idb-abce8d8d.js"
import"./isDate-003113bc.js"
import"./padZ-1409dbd9.js"
import{f as d}from"./formatLocalDateTime-dfbb3e1d.js"
import{x as w}from"./xPath-ce22330f.js"
import{b as k}from"./buffObj-24b0dd01.js"
let g
function h(e){return g.exec(e)}function j(t){g||(g=new RegExp("Skill ([\\w ]*) level (\\d*) was activated on '(\\w*)'|The skill ([\\w ]*) of (current or higher level is currently active) on '(\\w*)'|Player '(\\w*)' (has set their preferences to block the skill) '([\\w ]*)' from being cast on them."))
return e("#quickbuff-report font",t).map(n).map(h)}function v(e){const n=function(e){return k.find(n=>n.name===e)}(e)
return n?n.stam.toString():"-"}function x(e,n){let t
var s
return t=n[1]?` ${(s=n)[0]} (${v(s[1])} stamina)<br>`:(e=>` <span class="fshRed">${e[0]}</span><br>`)(n),e+t}function B(e){const n=d(new Date),t=j(document).map(a(x,n))
p(s,t.reverse().join("")+e)}const L=[[()=>r(".news_left_column"),()=>{i("unknown.news"),f()}],[()=>u("quickbuff-report"),()=>{i("unknown.buffLog.updateBuffLog"),t("keepBuffLog")&&b(s).then(B)}],[()=>w('//td[.="Quest Name"]'),()=>{i("unknown.questBook.injectQuestBookFull"),c()}],[()=>m('#pCC img[title="Inventing"]').length>0,()=>{i("unknown.recipes.inventing"),l()}]]
export default function(){if(o())return
const e=L.find(e=>e[0]())
e&&e[1]()}
//# sourceMappingURL=unknownPage-5a917648.js.map
