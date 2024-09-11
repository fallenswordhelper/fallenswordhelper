import{c as s}from"./createInput-Cnq0MlYd.js"
import{f as t}from"./functionPasses-BXOT6NCP.js"
import{v as a,r as e,cT as n,b0 as o,cx as r,ai as i,bQ as l,s as c,aI as p,k as f,p as m,l as u,aq as d,az as h,bU as v,o as g,c0 as j}from"./calfSystem-B3Rc3sVt.js"
import{g as y}from"./getProfile-CHep6lXj.js"
import{a as w}from"./all-YfMtr2SN.js"
import{c as b}from"./createSpan-BijJLylv.js"
import{c as N}from"./closestTable-B05V59ae.js"
import{a as L,g as T}from"./levelHighlight-B2sCSPLC.js"
import{o as P}from"./onlineDot-BW5panV2.js"
import{s as C}from"./now-Cx4PsKjI.js"
import"./profile-CIszlYgU.js"
import"./asInt-Ba7iwPlc.js"
import"./valueText-DQH4h23_.js"
import"./intValue-C7nTQec1.js"
let F=null,S=0
const _=[()=>(r(F)&&(F=i("highlightPlayersNearMyLvl")),F),(s,t)=>o(t)||t!==(S||(S=l(),S)),s=>s.last_login>=C(),s=>s.virtual_level>=L(),s=>s.virtual_level<=T()]
function I(s,t){const o=function(s){if(s.rows[0].cells[0].children[0])return Number(e(n,s.rows[0].cells[0].children[0].href))}(s)
a(s.rows[0],`<td>${P({last_login:t.last_login})}</td>`),function(s,t){return _.every((a=>a(t,s)))}(o,t)&&s.parentNode.parentNode.classList.add("lvlHighlight")}const O=s=>[N(s),d(s)]
async function x([s,t]){const a=await y(t)
a&&I(s,a)}async function H(s){c("toprated","FindOnlinePlayers")
const t=function(s){p(s)
const t=b({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'})
return s.parentNode.replaceChild(t,s),t}(s.target)
await async function(){const s=f(u,m()).map(O)
await w(s.map(x))}(),t.remove()}const M=[()=>j(),()=>m()?.children?.[0]?.rows?.length>2,()=>d(m().children[0].rows[1]).startsWith("Last Updated")]
function U(){M.every(t)&&function(){const t=h("td",m())[0]
t.children[0].className="fshTopListWrap"
const a=s({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
v(t,a),g(a,H)}()}export{U as default}
//# sourceMappingURL=toprated-BGu2qQr5.js.map
