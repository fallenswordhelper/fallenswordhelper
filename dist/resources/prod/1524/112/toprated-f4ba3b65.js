import{c as s}from"./createInput-08b5e815.js"
import{f as t}from"./functionPasses-d78c6fe2.js"
import{v as a,r as e,cL as n,aV as o,ct as r,ad as i,bI as l,n as c,aD as p,j as f,p as m,k as u,al as d,au as h,bO as v,o as g,bW as j}from"./calfSystem-4830a18d.js"
import{g as y}from"./getProfile-7f827df1.js"
import{a as w}from"./all-414e0607.js"
import{c as L}from"./createSpan-0da7a190.js"
import{c as b}from"./closestTable-082cc634.js"
import{a as N,g as P}from"./levelHighlight-193b24b6.js"
import{o as T}from"./onlineDot-64ef932a.js"
import{s as C}from"./now-6f22aec9.js"
import"./profile-3abe08ab.js"
import"./asInt-e2e2488f.js"
import"./valueText-ddd10c6c.js"
import"./intValue-e1798d0a.js"
let O=null,S=0
const _=[()=>(r(O)&&(O=i("highlightPlayersNearMyLvl")),O),(s,t)=>o(t)||t!==(S||(S=l(),S)),s=>s.last_login>=C(),s=>s.virtual_level>=N(),s=>s.virtual_level<=P()]
function F(s,t){const o=function(s){if(s.rows[0].cells[0].children[0])return Number(e(n,s.rows[0].cells[0].children[0].href))}(s)
a(s.rows[0],`<td>${T({last_login:t.last_login})}</td>`),function(s,t){return _.every((a=>a(t,s)))}(o,t)&&s.parentNode.parentNode.classList.add("lvlHighlight")}const H=s=>[b(s),d(s)]
async function k([s,t]){const a=await y(t)
a&&F(s,a)}async function I(s){c("toprated","FindOnlinePlayers")
const t=function(s){p(s)
const t=L({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'})
return s.parentNode.replaceChild(t,s),t}(s.target)
await async function(){const s=f(u,m()).map(H)
await w(s.map(k))}(),t.remove()}const U=[()=>j(),()=>m()?.children?.[0]?.rows?.length>2,()=>d(m().children[0].rows[1]).startsWith("Last Updated")]
function W(){U.every(t)&&function(){const t=h("td",m())[0]
t.children[0].className="fshTopListWrap"
const a=s({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
v(t,a),g(a,I)}()}export{W as default}
//# sourceMappingURL=toprated-f4ba3b65.js.map
