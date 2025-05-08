import{c as s}from"./createInput-3jwazPKd.js"
import{f as t}from"./functionPasses-EKTPXVtw.js"
import{v as a,r as e,cW as n,b0 as o,cy as r,ai as i,bP as l,s as c,aI as p,k as f,p as m,l as u,aq as d,az as h,bV as v,o as g,c1 as j}from"./calfSystem-G1dN925O.js"
import{g as y}from"./getProfile-8F_j7N6q.js"
import{a as w}from"./all-TTLWag-d.js"
import{c as b}from"./createSpan-E64hPGZD.js"
import{c as L}from"./closestTable-Ggcgditt.js"
import{a as N,g as P}from"./levelHighlight-WJ2CNHUv.js"
import{o as T}from"./onlineDot-BePpx2CP.js"
import{s as C}from"./now-pQzGw6vd.js"
import"./profile-YuJ83wb9.js"
import"./asInt-PKKHs1-a.js"
import"./valueText-890HKMma.js"
import"./intValue-JHhLnq8V.js"
let F=null,S=0
const _=[()=>(r(F)&&(F=i("highlightPlayersNearMyLvl")),F),(s,t)=>o(t)||t!==(S||(S=l(),S)),s=>s.last_login>=C(),s=>s.virtual_level>=N(),s=>s.virtual_level<=P()]
function H(s,t){const o=function(s){if(s.rows[0].cells[0].children[0])return Number(e(n,s.rows[0].cells[0].children[0].href))}(s)
a(s.rows[0],`<td>${T({last_login:t.last_login})}</td>`),function(s,t){return _.every((a=>a(t,s)))}(o,t)&&s.parentNode.parentNode.classList.add("lvlHighlight")}const O=s=>[L(s),d(s)]
async function I([s,t]){const a=await y(t)
a&&H(s,a)}async function U(s){c("toprated","FindOnlinePlayers")
const t=function(s){p(s)
const t=b({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'})
return s.parentNode.replaceChild(t,s),t}(s.target)
await async function(){const s=f(u,m()).map(O)
await w(s.map(I))}(),t.remove()}const W=[()=>j(),()=>m()?.children?.[0]?.rows?.length>2,()=>d(m().children[0].rows[1]).startsWith("Last Updated")]
function k(){W.every(t)&&function(){const t=h("td",m())[0]
t.children[0].className="fshTopListWrap"
const a=s({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
v(t,a),g(a,U)}()}export{k as default}
//# sourceMappingURL=toprated-bprKRkUy.js.map
