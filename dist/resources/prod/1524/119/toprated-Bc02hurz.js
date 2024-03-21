import{c as s}from"./createInput-Bw3IEiqp.js"
import{f as t}from"./functionPasses-BXOT6NCP.js"
import{v as a,r as e,cW as n,b0 as o,cy as r,ai as i,bP as l,s as c,aI as p,k as f,p as m,l as u,aq as d,az as h,bV as v,o as g,c1 as j}from"./calfSystem-Bit7wh4p.js"
import{g as y}from"./getProfile-m7PaQf1w.js"
import{a as w}from"./all-YfMtr2SN.js"
import{c as b}from"./createSpan-Ctesn2Q0.js"
import{c as N}from"./closestTable-CmNjL45D.js"
import{a as L,g as P}from"./levelHighlight-DtT9TXBN.js"
import{o as T}from"./onlineDot-BBzPFxBZ.js"
import{s as C}from"./now-Cx4PsKjI.js"
import"./profile-DqDi87Jh.js"
import"./asInt-ChOO1BWT.js"
import"./valueText-BctNKhqv.js"
import"./intValue-C7nTQec1.js"
let S=null,_=0
const F=[()=>(r(S)&&(S=i("highlightPlayersNearMyLvl")),S),(s,t)=>o(t)||t!==(_||(_=l(),_)),s=>s.last_login>=C(),s=>s.virtual_level>=L(),s=>s.virtual_level<=P()]
function I(s,t){const o=function(s){if(s.rows[0].cells[0].children[0])return Number(e(n,s.rows[0].cells[0].children[0].href))}(s)
a(s.rows[0],`<td>${T({last_login:t.last_login})}</td>`),function(s,t){return F.every((a=>a(t,s)))}(o,t)&&s.parentNode.parentNode.classList.add("lvlHighlight")}const O=s=>[N(s),d(s)]
async function W([s,t]){const a=await y(t)
a&&I(s,a)}async function H(s){c("toprated","FindOnlinePlayers")
const t=function(s){p(s)
const t=b({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'})
return s.parentNode.replaceChild(t,s),t}(s.target)
await async function(){const s=f(u,m()).map(O)
await w(s.map(W))}(),t.remove()}const M=[()=>j(),()=>m()?.children?.[0]?.rows?.length>2,()=>d(m().children[0].rows[1]).startsWith("Last Updated")]
function V(){M.every(t)&&function(){const t=h("td",m())[0]
t.children[0].className="fshTopListWrap"
const a=s({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
v(t,a),g(a,H)}()}export{V as default}
//# sourceMappingURL=toprated-Bc02hurz.js.map
