import{c as s}from"./createInput-ae593833.js"
import{f as t}from"./functionPasses-d78c6fe2.js"
import{v as a,r as e,cP as n,aY as o,cw as r,af as i,bL as l,n as c,aG as p,j as f,p as m,k as u,an as d,aw as h,bR as v,o as g,bZ as j}from"./calfSystem-076d7a01.js"
import{g as w}from"./getProfile-9e40a138.js"
import{a as y}from"./all-414e0607.js"
import{c as b}from"./createSpan-3211c164.js"
import{c as L}from"./closestTable-3ad39b1c.js"
import{a as N,g as P}from"./levelHighlight-280f080e.js"
import{o as T}from"./onlineDot-08f52acc.js"
import{s as C}from"./now-6f22aec9.js"
import"./profile-5e6aaa06.js"
import"./asInt-25fb7d3c.js"
import"./valueText-dd4862a9.js"
import"./intValue-e1798d0a.js"
let S=null,_=0
const F=[()=>(r(S)&&(S=i("highlightPlayersNearMyLvl")),S),(s,t)=>o(t)||t!==(_||(_=l(),_)),s=>s.last_login>=C(),s=>s.virtual_level>=N(),s=>s.virtual_level<=P()]
function O(s,t){const o=function(s){if(s.rows[0].cells[0].children[0])return Number(e(n,s.rows[0].cells[0].children[0].href))}(s)
a(s.rows[0],`<td>${T({last_login:t.last_login})}</td>`),function(s,t){return F.every((a=>a(t,s)))}(o,t)&&s.parentNode.parentNode.classList.add("lvlHighlight")}const k=s=>[L(s),d(s)]
async function H([s,t]){const a=await w(t)
a&&O(s,a)}async function I(s){c("toprated","FindOnlinePlayers")
const t=function(s){p(s)
const t=b({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'})
return s.parentNode.replaceChild(t,s),t}(s.target)
await async function(){const s=f(u,m()).map(k)
await y(s.map(H))}(),t.remove()}const M=[()=>j(),()=>m()?.children?.[0]?.rows?.length>2,()=>d(m().children[0].rows[1]).startsWith("Last Updated")]
function x(){M.every(t)&&function(){const t=h("td",m())[0]
t.children[0].className="fshTopListWrap"
const a=s({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
v(t,a),g(a,I)}()}export{x as default}
//# sourceMappingURL=toprated-d61b69ba.js.map
