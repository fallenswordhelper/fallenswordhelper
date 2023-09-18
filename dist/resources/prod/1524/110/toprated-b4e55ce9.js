import{c as s}from"./createInput-c66459c1.js"
import{f as t}from"./functionPasses-d78c6fe2.js"
import{v as a,r as e,cL as n,aW as o,ct as r,ae as i,bJ as l,n as c,aE as p,j as f,p as m,k as u,am as d,av as h,bP as v,o as j,bX as g}from"./calfSystem-929ac228.js"
import{g as y}from"./getProfile-d9dee1d8.js"
import{a as w}from"./all-414e0607.js"
import{c as L}from"./createSpan-6761e587.js"
import{c as b}from"./closestTable-53e346f6.js"
import{a as N,g as P}from"./levelHighlight-f2bf40ae.js"
import{o as T}from"./onlineDot-2726d9a2.js"
import{s as C}from"./now-6f22aec9.js"
import"./profile-ceb86d3e.js"
import"./asInt-116907f9.js"
import"./valueText-2acfe155.js"
import"./intValue-e1798d0a.js"
let F=null,S=0
const _=[()=>(r(F)&&(F=i("highlightPlayersNearMyLvl")),F),(s,t)=>o(t)||t!==(S||(S=l(),S)),s=>s.last_login>=C(),s=>s.virtual_level>=N(),s=>s.virtual_level<=P()]
function H(s,t){const o=function(s){if(s.rows[0].cells[0].children[0])return Number(e(n,s.rows[0].cells[0].children[0].href))}(s)
a(s.rows[0],`<td>${T({last_login:t.last_login})}</td>`),function(s,t){return _.every((a=>a(t,s)))}(o,t)&&s.parentNode.parentNode.classList.add("lvlHighlight")}const O=s=>[b(s),d(s)]
async function W([s,t]){const a=await y(t)
a&&H(s,a)}async function k(s){c("toprated","FindOnlinePlayers")
const t=function(s){p(s)
const t=L({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'})
return s.parentNode.replaceChild(t,s),t}(s.target)
await async function(){const s=f(u,m()).map(O)
await w(s.map(W))}(),t.remove()}const x=[()=>g(),()=>m()?.children?.[0]?.rows?.length>2,()=>d(m().children[0].rows[1]).startsWith("Last Updated")]
function E(){x.every(t)&&function(){const t=h("td",m())[0]
t.children[0].className="fshTopListWrap"
const a=s({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
v(t,a),j(a,k)}()}export{E as default}
//# sourceMappingURL=toprated-b4e55ce9.js.map
