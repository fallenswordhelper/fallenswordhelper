import{c as t}from"./createInput-c2872ef0.js"
import{a as n}from"./allthen-0f84efe6.js"
import{u as e,v as r,z as s,b as a,d as i,W as o,by as c,H as l,bz as u,x as f,$ as d,br as m,g as p,p as h,t as v,bA as b,I as g,i as _,aR as j,aX as N,U as y,R as w,o as x,j as L}from"./calfSystem-3cb2f93e.js"
import{g as k}from"./getProfile-7ebbf2f4.js"
import{g as C}from"./guild-dbaee521.js"
import{d as E}from"./dataRows-3f26b8dc.js"
import{i as P}from"./intValue-fefb28df.js"
import{p as S}from"./playerName-9a988c39.js"
import{c as F}from"./currentGuildId-a71d60fb.js"
import{o as H}from"./onlineDot-6491af90.js"
import{a as I,g as O}from"./levelHighlight-59ab7a56.js"
import{c as T}from"./createSpan-95e4d2e5.js"
import{h as A}from"./hideElement-0d0f9065.js"
import{f as R}from"./functionPasses-17426539.js"
import{i as W}from"./insertElementAfterBegin-1d9bd581.js"
import"./all-0d44a747.js"
import"./cmdExport-7784a81f.js"
import"./indexAjaxJson-a55a7596.js"
import"./asInt-4d75089c.js"
import"./valueText-fbd879dc.js"
import"./insertElementBefore-23d4e956.js"
const z={}
function B(t){const n=t.match(u)
return o-(24*Number(n[1])*60*60+60*Number(n[2])*60+60*Number(n[3])+Number(n[4]))}function M(t){const{tipped:n}=t.cells[1].children[0].dataset,e=n.match(/Stamina:<\/td><td>(\d+) \/ (\d+)</)
return{current_stamina:Number(e[1]),max_stamina:Number(e[2]),vl:Number(n.match(/VL:<\/td><td>(\d+)</)[1]),last_activity:B(n)}}function U(t){return{id:Number(t.cells[1].children[0].href.match(c)[1]),name:l(t.cells[1].children[0]),level:Number(l(t.cells[2])),xp:0,guild_xp:P(l(t.cells[4])),rank_name:l(t.cells[3])}}function V(t,n){return{rank_index:n,...M(t),...U(t)}}function $(t,n){const e=n.rank_name,r=n.rank_index,s=t.find((t=>t.name===e))
return s?s.members.push(n):t.push({id:r,name:e,members:[n]}),t}function D(t){return E(t.rows,5,1).map(V).reduce($,[])}function G(t){const n=r(t),e=s("pCC",n),o=a(i,e),c=o[o.length-1]
return c?{r:{ranks:D(c)},s:!0}:{s:!1}}function J(t){return z[t]||(z[t]=e({cmd:"guild",subcmd:"view",guild_id:t}).then(G)),z[t]}function X(t){return f({cmd:"findplayer",subcmd:"view",search_username:t})}function q(t){let n=t.last_login
return n||(n=0),{r:[{last_activity:Number(n),vl:t.virtual_level}],s:!0}}function K(t){return k(t).then(q)}function Q(t){return C({subcmd:"view",guild_id:t})}function Y(){return m({subcmd:"view"})}function Z(t){return[t,l(t),(n=t,n.rows[0].cells[0].children[0]?Number(b.exec(n.rows[0].cells[0].children[0].href)[1]):-1)]
var n}function tt(t,n){return n[0]===t[2]}function nt(t,n){const e=t.find(v(tt,n))
return e?e[1].push(n):t.push([n[2],[n]]),t}function et(t,n){return n[0]===t}function rt(t,n){let e=n[0]
n[1].length<5&&(e=-1)
const r=t.find(v(et,e))
return r?r[1]=r[1].concat(n[1]):t.push([e,n[1]]),t}function st(t,n,e){const r=function(t,n){return t?n[t]:n}(t,e)
if(!n[r])return n[r]=!0,!0}let at,it
const ot=[()=>at,t=>j(t)||t!==it,(t,n)=>n.last_login>=o-604800,(t,n)=>n.virtual_level>=I(),(t,n)=>n.virtual_level<=O()]
function ct(t,n,e){_(t.rows[0],`<td>${H({last_login:e.last_login})}</td>`),function(t,n){return ot.every((e=>e(t,n)))}(n,e)&&t.parentNode.parentNode.classList.add("lvlHighlight")}let lt
function ut(){A(lt)}function ft(t,n){ct(t[0],t[2],{last_login:String(n.last_activity),virtual_level:n.vl})}function dt(t,n){return n.name===t[1]}function mt(t,n){const e=t.find(v(dt,n))
e&&ft(n,e)}function pt(t,n){n.s&&w(n.r)&&ft(t,n.r[0])}function ht(t,n){n.s&&ft(t,{last_activity:o-n.r.last_activity,vl:n.r.virtual_level})}function vt(t){return-1!==t[0]}function bt(t,n){return t.concat(n.members)}function gt(t,n){const e=(r=n.r.ranks,s="id",r.filter(v(st,s,{}))).reduce(bt,[])
var r,s
t[1].forEach(v(mt,e))}function _t(t,n){n.s&&gt(t,n)}function jt(t){return(n=t[0],d(Q,J,n)).then(v(_t,t))
var n}function Nt(t){return-1===t[0]}function yt(t){return t[1]!==S()?(n=t[1],d(X,K,n)).then(v(pt,t)):d(Y).then(v(ht,t))
var n}function wt(){const t=p(i,h).slice(4).map(Z).reduce(nt,[]).reduce(rt,[])
let e=t.filter(vt).map(jt)
t.find(Nt)&&(e=e.concat(t.find(Nt)[1].map(yt))),n(e,ut)}function xt(t){var n
y("toprated","FindOnlinePlayers"),n=t.target,N(n),lt=T({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'}),n.parentNode.replaceChild(lt,n),at=g("highlightPlayersNearMyLvl"),at&&(it=F()),wt()}const Lt=[()=>L(),()=>h,()=>h.children[0],()=>h.children[0].rows,()=>h.children[0].rows.length>2,()=>l(h.children[0].rows[1]).startsWith("Last Updated")]
function kt(){Lt.every(R)&&function(){const n=a("td",h)[0]
n.children[0].className="fshTopListWrap"
const e=t({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
W(n,e),x(e,xt)}()}export default kt
//# sourceMappingURL=toprated-c6855d52.js.map
