import{c as s}from"./createInput-c5f39cca.js"
import{f as t}from"./functionPasses-d78c6fe2.js"
import{v as a,r as e,cL as n,aW as o,ct as r,ae as i,bJ as l,n as c,aE as p,j as f,p as m,k as u,am as d,av as h,bP as v,o as j,bX as g}from"./calfSystem-abb16b0d.js"
import{g as y}from"./getProfile-1c7e2ded.js"
import{a as w}from"./all-414e0607.js"
import{c as L}from"./createSpan-b6e6b8c0.js"
import{c as b}from"./closestTable-deb533c1.js"
import{a as N,g as P}from"./levelHighlight-9297ab2e.js"
import{o as T}from"./onlineDot-3da6ec33.js"
import{s as C}from"./now-6f22aec9.js"
import"./profile-f1cc6452.js"
import"./asInt-030fcf94.js"
import"./valueText-fc266edc.js"
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
//# sourceMappingURL=toprated-77b9d6ba.js.map
