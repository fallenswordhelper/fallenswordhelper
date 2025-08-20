import{c as s}from"./createInput-B13zWypd.js"
import{a1 as t,r as a,dK as e,bx as n,c0 as o,dg as r,az as i,ct as l,s as c,bc as d,aP as f,h as p,p as h,X as u,aR as m,_ as g,cI as v,dL as y,b4 as w,cw as b,o as L}from"./calfSystem-UyQ_FKFu.js"
import{g as N}from"./getProfile--CjCzx9W.js"
import{c as j}from"./closestTable-DwwUFwTi.js"
import{a as P,g as _}from"./levelHighlight-DqGXAREP.js"
import{o as C}from"./onlineDot-xSbq-_XS.js"
let F=null,O=0
const T=[()=>(r(F)&&(F=i("highlightPlayersNearMyLvl")),F),(s,t)=>n(t)||t!==(O||(O=l(),O)),s=>s.last_login>=o(),s=>s.virtual_level>=P(),s=>s.virtual_level<=_()]
function H(s,n){const o=function(s){if(s.rows[0].cells[0].children[0])return Number(a(e,s.rows[0].cells[0].children[0].href))}(s)
t(s.rows[0],`<td>${C({last_login:n.last_login})}</td>`),function(s,t){return T.every(a=>a(t,s))}(o,n)&&s.parentNode.parentNode.classList.add("lvlHighlight")}const S=s=>[j(s),m(s)]
async function x([s,t]){const a=await N(t)
a&&H(s,a)}async function D(s){c("toprated","FindOnlinePlayers")
const t=function(s){d(s)
const t=f({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'})
return s.parentNode.replaceChild(t,s),t}(s.target)
await async function(){const s=p(u,h()).map(S)
await g(s.map(x))}(),t.remove()}const I=[()=>v(),()=>h()?.children?.[0]?.rows?.length>2,()=>m(h().children[0].rows[1]).startsWith("Last Updated")]
function K(){I.every(y)&&function(){const t=w("td",h())[0]
t.children[0].className="fshTopListWrap"
const a=s({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
b(t,a),L(a,D)}()}export{K as default}
//# sourceMappingURL=toprated-h55z3h0F.js.map
