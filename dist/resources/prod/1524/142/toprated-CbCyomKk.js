import{c as s}from"./createInput-BYjEUt90.js"
import{f as t}from"./functionPasses-BXOT6NCP.js"
import{v as a,r as e,d0 as n,b2 as o,bw as r,cG as i,ai as l,bW as c,s as p,aJ as f,k as m,p as d,l as u,as as h,aB as v,b_ as g,o as j,c6 as y}from"./calfSystem-KuDT30_2.js"
import{g as w}from"./getProfile-yeFHWWbr.js"
import{a as b}from"./all-YfMtr2SN.js"
import{c as N}from"./createSpan-C30Y7sS2.js"
import{c as L}from"./closestTable-BnyAbylz.js"
import{a as P,g as T}from"./levelHighlight-Ckr_5ehQ.js"
import{o as _}from"./onlineDot-BDqXjFkr.js"
import"./profile-fEGJmCcT.js"
import"./asInt-Dqcsg_oM.js"
import"./valueText-DmqsoxRt.js"
import"./intValue-C7nTQec1.js"
let C=null,S=0
const F=[()=>(i(C)&&(C=l("highlightPlayersNearMyLvl")),C),(s,t)=>o(t)||t!==(S||(S=c(),S)),s=>s.last_login>=r(),s=>s.virtual_level>=P(),s=>s.virtual_level<=T()]
function O(s,t){const o=function(s){if(s.rows[0].cells[0].children[0])return Number(e(n,s.rows[0].cells[0].children[0].href))}(s)
a(s.rows[0],`<td>${_({last_login:t.last_login})}</td>`),function(s,t){return F.every((a=>a(t,s)))}(o,t)&&s.parentNode.parentNode.classList.add("lvlHighlight")}const H=s=>[L(s),h(s)]
async function W([s,t]){const a=await w(t)
a&&O(s,a)}async function k(s){p("toprated","FindOnlinePlayers")
const t=function(s){f(s)
const t=N({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'})
return s.parentNode.replaceChild(t,s),t}(s.target)
await async function(){const s=m(u,d()).map(H)
await b(s.map(W))}(),t.remove()}const x=[()=>y(),()=>d()?.children?.[0]?.rows?.length>2,()=>h(d().children[0].rows[1]).startsWith("Last Updated")]
function B(){x.every(t)&&function(){const t=v("td",d())[0]
t.children[0].className="fshTopListWrap"
const a=s({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
g(t,a),j(a,k)}()}export{B as default}
//# sourceMappingURL=toprated-CbCyomKk.js.map
