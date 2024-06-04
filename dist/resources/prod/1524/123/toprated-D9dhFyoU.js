import{c as s}from"./createInput-CrpQJ-TY.js"
import{f as t}from"./functionPasses-BXOT6NCP.js"
import{v as a,r as e,cV as n,b0 as o,cz as r,ai as i,bQ as l,s as c,aI as p,k as f,p as m,l as u,aq as d,az as h,bW as v,o as g,c2 as j}from"./calfSystem-wTzwei3t.js"
import{g as y}from"./getProfile-DQd5Ml8P.js"
import{a as w}from"./all-YfMtr2SN.js"
import{c as b}from"./createSpan-D9J62kLX.js"
import{c as N}from"./closestTable-D1tzatJG.js"
import{a as L,g as P}from"./levelHighlight--LzzvzYB.js"
import{o as T}from"./onlineDot-Cp1ex2F9.js"
import{s as C}from"./now-Cx4PsKjI.js"
import"./profile-YDP0dIj7.js"
import"./asInt-DcpIJRg8.js"
import"./valueText-CDmZqpbc.js"
import"./intValue-C7nTQec1.js"
let F=null,S=0
const _=[()=>(r(F)&&(F=i("highlightPlayersNearMyLvl")),F),(s,t)=>o(t)||t!==(S||(S=l(),S)),s=>s.last_login>=C(),s=>s.virtual_level>=L(),s=>s.virtual_level<=P()]
function I(s,t){const o=function(s){if(s.rows[0].cells[0].children[0])return Number(e(n,s.rows[0].cells[0].children[0].href))}(s)
a(s.rows[0],`<td>${T({last_login:t.last_login})}</td>`),function(s,t){return _.every((a=>a(t,s)))}(o,t)&&s.parentNode.parentNode.classList.add("lvlHighlight")}const O=s=>[N(s),d(s)]
async function H([s,t]){const a=await y(t)
a&&I(s,a)}async function M(s){c("toprated","FindOnlinePlayers")
const t=function(s){p(s)
const t=b({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'})
return s.parentNode.replaceChild(t,s),t}(s.target)
await async function(){const s=f(u,m()).map(O)
await w(s.map(H))}(),t.remove()}const V=[()=>j(),()=>m()?.children?.[0]?.rows?.length>2,()=>d(m().children[0].rows[1]).startsWith("Last Updated")]
function W(){V.every(t)&&function(){const t=h("td",m())[0]
t.children[0].className="fshTopListWrap"
const a=s({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
v(t,a),g(a,M)}()}export{W as default}
//# sourceMappingURL=toprated-D9dhFyoU.js.map
