import{c as s}from"./createInput-4ae8777b.js"
import{f as t}from"./functionPasses-d78c6fe2.js"
import{v as a,r as e,cP as n,aY as o,cw as r,af as i,bL as l,n as c,aG as p,j as f,p as m,k as u,an as d,aw as h,bR as v,o as j,bZ as g}from"./calfSystem-34913441.js"
import{g as w}from"./getProfile-c2682b09.js"
import{a as y}from"./all-414e0607.js"
import{c as L}from"./createSpan-d7c936c3.js"
import{c as b}from"./closestTable-c0c63085.js"
import{a as N,g as P}from"./levelHighlight-530526cf.js"
import{o as T}from"./onlineDot-82a20501.js"
import{s as C}from"./now-6f22aec9.js"
import"./profile-3aa5b35b.js"
import"./asInt-f990b3d0.js"
import"./valueText-238d2284.js"
import"./intValue-e1798d0a.js"
let S=null,_=0
const F=[()=>(r(S)&&(S=i("highlightPlayersNearMyLvl")),S),(s,t)=>o(t)||t!==(_||(_=l(),_)),s=>s.last_login>=C(),s=>s.virtual_level>=N(),s=>s.virtual_level<=P()]
function H(s,t){const o=function(s){if(s.rows[0].cells[0].children[0])return Number(e(n,s.rows[0].cells[0].children[0].href))}(s)
a(s.rows[0],`<td>${T({last_login:t.last_login})}</td>`),function(s,t){return F.every((a=>a(t,s)))}(o,t)&&s.parentNode.parentNode.classList.add("lvlHighlight")}const O=s=>[b(s),d(s)]
async function I([s,t]){const a=await w(t)
a&&H(s,a)}async function W(s){c("toprated","FindOnlinePlayers")
const t=function(s){p(s)
const t=L({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'})
return s.parentNode.replaceChild(t,s),t}(s.target)
await async function(){const s=f(u,m()).map(O)
await y(s.map(I))}(),t.remove()}const k=[()=>g(),()=>m()?.children?.[0]?.rows?.length>2,()=>d(m().children[0].rows[1]).startsWith("Last Updated")]
function x(){k.every(t)&&function(){const t=h("td",m())[0]
t.children[0].className="fshTopListWrap"
const a=s({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
v(t,a),j(a,W)}()}export{x as default}
//# sourceMappingURL=toprated-23b5fe3b.js.map
