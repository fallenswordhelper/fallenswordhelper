import{c as s}from"./createInput-OE8Qn26K.js"
import{f as t}from"./functionPasses-EKTPXVtw.js"
import{v as a,r as e,cK as n,aU as o,cs as r,ad as i,bH as l,s as c,aD as p,k as f,p as m,l as u,al as d,au as h,bN as v,o as g,bV as j}from"./calfSystem-rn9Rc_nF.js"
import{g as y}from"./getProfile-WuMGXKeT.js"
import{a as w}from"./all-TTLWag-d.js"
import{c as N}from"./createSpan-Q4CQr4i_.js"
import{c as b}from"./closestTable-CpAyN3ci.js"
import{a as L,g as P}from"./levelHighlight-fOCuROyg.js"
import{o as T}from"./onlineDot-uch9xx6a.js"
import{s as C}from"./now-pQzGw6vd.js"
import"./profile-chrQWu8y.js"
import"./asInt-NFaqrHrG.js"
import"./valueText-CeLZBdVf.js"
import"./intValue-JHhLnq8V.js"
let H=null,S=0
const _=[()=>(r(H)&&(H=i("highlightPlayersNearMyLvl")),H),(s,t)=>o(t)||t!==(S||(S=l(),S)),s=>s.last_login>=C(),s=>s.virtual_level>=L(),s=>s.virtual_level<=P()]
function F(s,t){const o=function(s){if(s.rows[0].cells[0].children[0])return Number(e(n,s.rows[0].cells[0].children[0].href))}(s)
a(s.rows[0],`<td>${T({last_login:t.last_login})}</td>`),function(s,t){return _.every((a=>a(t,s)))}(o,t)&&s.parentNode.parentNode.classList.add("lvlHighlight")}const O=s=>[b(s),d(s)]
async function k([s,t]){const a=await y(t)
a&&F(s,a)}async function I(s){c("toprated","FindOnlinePlayers")
const t=function(s){p(s)
const t=N({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'})
return s.parentNode.replaceChild(t,s),t}(s.target)
await async function(){const s=f(u,m()).map(O)
await w(s.map(k))}(),t.remove()}const U=[()=>j(),()=>m()?.children?.[0]?.rows?.length>2,()=>d(m().children[0].rows[1]).startsWith("Last Updated")]
function x(){U.every(t)&&function(){const t=h("td",m())[0]
t.children[0].className="fshTopListWrap"
const a=s({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
v(t,a),g(a,I)}()}export{x as default}
//# sourceMappingURL=toprated-NE-w8Ktx.js.map
