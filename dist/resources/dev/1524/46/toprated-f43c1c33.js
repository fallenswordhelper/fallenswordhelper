import{c as t}from"./createInput-816cd771.js"
import{a as n}from"./allthen-34d3fc07.js"
import{u as e,v as r,z as s,b as i,d as a,V as o,bC as c,H as l,bD as u,x as f,$ as d,bv as m,g as p,p as h,t as b,bE as v,I as g,i as _,aU as j,a$ as N,T as y,Q as w,o as x,j as C}from"./calfSystem-d3f0a380.js"
import{g as L}from"./getProfile-31c8f504.js"
import{g as k}from"./guild-b0e3687a.js"
import{d as E}from"./dataRows-fb96d443.js"
import{i as P}from"./intValue-19726e4b.js"
import{p as S}from"./playerName-9d5fb2c2.js"
import{c as T}from"./currentGuildId-574c8e9f.js"
import{o as F}from"./onlineDot-78db5edc.js"
import{a as H,g as I}from"./levelHighlight-fb88b6db.js"
import{c as O}from"./createSpan-6440fa04.js"
import{h as V}from"./hideElement-452544d4.js"
import{f as $}from"./functionPasses-a26e09ef.js"
import{i as A}from"./insertElementAfterBegin-7b87afd6.js"
import"./all-3768003b.js"
import"./cmdExport-2e38b85e.js"
import"./indexAjaxJson-00baab20.js"
import"./asInt-c5f8ce87.js"
import"./valueText-2dd1b1b5.js"
import"./insertElementBefore-c2bb9234.js"
const B={}
function D(t){const n=t.match(u)
return o-(24*Number(n[1])*60*60+60*Number(n[2])*60+60*Number(n[3])+Number(n[4]))}function M(t){const{tipped:n}=t.cells[1].children[0].dataset,e=n.match(/Stamina:<\/td><td>(\d+) \/ (\d+)</)
return{current_stamina:Number(e[1]),max_stamina:Number(e[2]),vl:Number(n.match(/VL:<\/td><td>(\d+)</)[1]),last_activity:D(n)}}function U(t){return{id:Number(t.cells[1].children[0].href.match(c)[1]),name:l(t.cells[1].children[0]),level:Number(l(t.cells[2])),xp:0,guild_xp:P(l(t.cells[4])),rank_name:l(t.cells[3])}}function W(t,n){return{rank_index:n,...M(t),...U(t)}}function z(t,n){const e=n.rank_name,r=n.rank_index,s=t.find((t=>t.name===e))
return s?s.members.push(n):t.push({id:r,name:e,members:[n]}),t}function G(t){return E(t.rows,5,1).map(W).reduce(z,[])}function J(t){const n=r(t),e=s("pCC",n),o=i(a,e),c=o[o.length-1]
return c?{r:{ranks:G(c)},s:!0}:{s:!1}}function Q(t){return B[t]||(B[t]=e({cmd:"guild",subcmd:"view",guild_id:t}).then(J)),B[t]}function R(t){return f({cmd:"findplayer",subcmd:"view",search_username:t})}function q(t){let n=t.last_login
return n||(n=0),{r:[{last_activity:Number(n),vl:t.virtual_level}],s:!0}}function K(t){return L(t).then(q)}function X(t){return k({subcmd:"view",guild_id:t})}function Y(){return m({subcmd:"view"})}function Z(t){return[t,l(t),(n=t,n.rows[0].cells[0].children[0]?Number(v.exec(n.rows[0].cells[0].children[0].href)[1]):-1)]
var n}function tt(t,n){return n[0]===t[2]}function nt(t,n){const e=t.find(b(tt,n))
return e?e[1].push(n):t.push([n[2],[n]]),t}function et(t,n){return n[0]===t}function rt(t,n){let e=n[0]
n[1].length<5&&(e=-1)
const r=t.find(b(et,e))
return r?r[1]=r[1].concat(n[1]):t.push([e,n[1]]),t}function st(t,n,e){const r=function(t,n){return t?n[t]:n}(t,e)
if(!n[r])return n[r]=!0,!0}let it,at
const ot=[()=>it,t=>j(t)||t!==at,(t,n)=>n.last_login>=o-604800,(t,n)=>n.virtual_level>=H(),(t,n)=>n.virtual_level<=I()]
function ct(t,n,e){_(t.rows[0],`<td>${F({last_login:e.last_login})}</td>`),function(t,n){return ot.every((e=>e(t,n)))}(n,e)&&t.parentNode.parentNode.classList.add("lvlHighlight")}let lt
function ut(){V(lt)}function ft(t,n){ct(t[0],t[2],{last_login:String(n.last_activity),virtual_level:n.vl})}function dt(t,n){return n.name===t[1]}function mt(t,n){const e=t.find(b(dt,n))
e&&ft(n,e)}function pt(t,n){n.s&&w(n.r)&&ft(t,n.r[0])}function ht(t,n){n.s&&ft(t,{last_activity:o-n.r.last_activity,vl:n.r.virtual_level})}function bt(t){return-1!==t[0]}function vt(t,n){return t.concat(n.members)}function gt(t,n){const e=(r=n.r.ranks,s="id",r.filter(b(st,s,{}))).reduce(vt,[])
var r,s
t[1].forEach(b(mt,e))}function _t(t,n){n.s&&gt(t,n)}function jt(t){return(n=t[0],d(X,Q,n)).then(b(_t,t))
var n}function Nt(t){return-1===t[0]}function yt(t){return t[1]!==S()?(n=t[1],d(R,K,n)).then(b(pt,t)):d(Y).then(b(ht,t))
var n}function wt(){const t=p(a,h).slice(4).map(Z).reduce(nt,[]).reduce(rt,[])
let e=t.filter(bt).map(jt)
t.find(Nt)&&(e=e.concat(t.find(Nt)[1].map(yt))),n(e,ut)}function xt(t){var n
y("toprated","FindOnlinePlayers"),n=t.target,N(n),lt=O({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'}),n.parentNode.replaceChild(lt,n),it=g("highlightPlayersNearMyLvl"),it&&(at=T()),wt()}const Ct=[()=>C(),()=>h,()=>h.children[0],()=>h.children[0].rows,()=>h.children[0].rows.length>2,()=>l(h.children[0].rows[1]).startsWith("Last Updated")]
function Lt(){Ct.every($)&&function(){const n=i("td",h)[0]
n.children[0].className="fshTopListWrap"
const e=t({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
A(n,e),x(e,xt)}()}export default Lt
//# sourceMappingURL=toprated-f43c1c33.js.map
