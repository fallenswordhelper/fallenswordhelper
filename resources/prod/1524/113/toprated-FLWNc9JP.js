import{c as s}from"./createInput-NNh8Iaam.js"
import{f as t}from"./functionPasses-EKTPXVtw.js"
import{v as a,r as e,cL as n,aU as o,ct as r,ad as i,bH as l,s as c,aD as p,k as f,p as m,l as u,al as d,au as h,bN as v,o as g,bV as j}from"./calfSystem-VUa7wwu1.js"
import{g as y}from"./getProfile-KTZSydm1.js"
import{a as w}from"./all-TTLWag-d.js"
import{c as L}from"./createSpan-3W4T-7NF.js"
import{c as N}from"./closestTable-4LPWcjBt.js"
import{a as b,g as P}from"./levelHighlight-9qo1ycLz.js"
import{o as T}from"./onlineDot-BYFicYeL.js"
import{s as C}from"./now-pQzGw6vd.js"
import"./profile-vhoHWGzK.js"
import"./asInt-X0f7ehmu.js"
import"./valueText-13w7MOtM.js"
import"./intValue-JHhLnq8V.js"
let H=null,S=0
const _=[()=>(r(H)&&(H=i("highlightPlayersNearMyLvl")),H),(s,t)=>o(t)||t!==(S||(S=l(),S)),s=>s.last_login>=C(),s=>s.virtual_level>=b(),s=>s.virtual_level<=P()]
function F(s,t){const o=function(s){if(s.rows[0].cells[0].children[0])return Number(e(n,s.rows[0].cells[0].children[0].href))}(s)
a(s.rows[0],`<td>${T({last_login:t.last_login})}</td>`),function(s,t){return _.every((a=>a(t,s)))}(o,t)&&s.parentNode.parentNode.classList.add("lvlHighlight")}const O=s=>[N(s),d(s)]
async function k([s,t]){const a=await y(t)
a&&F(s,a)}async function I(s){c("toprated","FindOnlinePlayers")
const t=function(s){p(s)
const t=L({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'})
return s.parentNode.replaceChild(t,s),t}(s.target)
await async function(){const s=f(u,m()).map(O)
await w(s.map(k))}(),t.remove()}const U=[()=>j(),()=>m()?.children?.[0]?.rows?.length>2,()=>d(m().children[0].rows[1]).startsWith("Last Updated")]
function x(){U.every(t)&&function(){const t=h("td",m())[0]
t.children[0].className="fshTopListWrap"
const a=s({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
v(t,a),g(a,I)}()}export{x as default}
//# sourceMappingURL=toprated-FLWNc9JP.js.map
