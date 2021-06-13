import{c as t}from"./createInput-9bf3eee1.js"
import{a as n}from"./allthen-b379c12a.js"
import{u as e,v as r,z as s,b as a,d as i,V as c,bC as o,H as l,bD as u,x as d,$ as f,bv as m,g as p,p as h,t as v,bE as b,I as g,i as _,aU as j,a$ as N,T as y,Q as w,o as x,j as C}from"./calfSystem-6a3c85e0.js"
import{g as L}from"./getProfile-b9c4b8d7.js"
import{g as k}from"./guild-7eedd9cd.js"
import{d as E}from"./dataRows-7616d03e.js"
import{i as P}from"./intValue-a6f9b475.js"
import{p as S}from"./playerName-338c35a7.js"
import{c as T}from"./currentGuildId-3f5ba5ad.js"
import{o as F}from"./onlineDot-24724c92.js"
import{a as H,g as I}from"./levelHighlight-07c6eba7.js"
import{c as O}from"./createSpan-a6b61f47.js"
import{h as V}from"./hideElement-53ec58d4.js"
import{f as $}from"./functionPasses-f44e4b46.js"
import{i as A}from"./insertElementAfterBegin-808a95bf.js"
import"./all-47be5400.js"
import"./cmdExport-cce4a501.js"
import"./indexAjaxJson-c7dd57d3.js"
import"./asInt-8d560463.js"
import"./valueText-73e7237a.js"
import"./insertElementBefore-c442a2a7.js"
const B={}
function D(t){const n=t.match(u)
return c-(24*Number(n[1])*60*60+60*Number(n[2])*60+60*Number(n[3])+Number(n[4]))}function M(t){const{tipped:n}=t.cells[1].children[0].dataset,e=n.match(/Stamina:<\/td><td>(\d+) \/ (\d+)</)
return{current_stamina:Number(e[1]),max_stamina:Number(e[2]),vl:Number(n.match(/VL:<\/td><td>(\d+)</)[1]),last_activity:D(n)}}function U(t){return{id:Number(t.cells[1].children[0].href.match(o)[1]),name:l(t.cells[1].children[0]),level:Number(l(t.cells[2])),xp:0,guild_xp:P(l(t.cells[4])),rank_name:l(t.cells[3])}}function W(t,n){return{rank_index:n,...M(t),...U(t)}}function z(t,n){const e=n.rank_name,r=n.rank_index,s=t.find((t=>t.name===e))
return s?s.members.push(n):t.push({id:r,name:e,members:[n]}),t}function G(t){return E(t.rows,5,1).map(W).reduce(z,[])}function J(t){const n=r(t),e=s("pCC",n),c=a(i,e),o=c[c.length-1]
return o?{r:{ranks:G(o)},s:!0}:{s:!1}}function Q(t){return B[t]||(B[t]=e({cmd:"guild",subcmd:"view",guild_id:t}).then(J)),B[t]}function R(t){return d({cmd:"findplayer",subcmd:"view",search_username:t})}function q(t){let n=t.last_login
return n||(n=0),{r:[{last_activity:Number(n),vl:t.virtual_level}],s:!0}}function K(t){return L(t).then(q)}function X(t){return k({subcmd:"view",guild_id:t})}function Y(){return m({subcmd:"view"})}function Z(t){return[t,l(t),(n=t,n.rows[0].cells[0].children[0]?Number(b.exec(n.rows[0].cells[0].children[0].href)[1]):-1)]
var n}function tt(t,n){return n[0]===t[2]}function nt(t,n){const e=t.find(v(tt,n))
return e?e[1].push(n):t.push([n[2],[n]]),t}function et(t,n){return n[0]===t}function rt(t,n){let e=n[0]
n[1].length<5&&(e=-1)
const r=t.find(v(et,e))
return r?r[1]=r[1].concat(n[1]):t.push([e,n[1]]),t}function st(t,n,e){const r=function(t,n){return t?n[t]:n}(t,e)
if(!n[r])return n[r]=!0,!0}let at,it
const ct=[()=>at,t=>j(t)||t!==it,(t,n)=>n.last_login>=c-604800,(t,n)=>n.virtual_level>=H(),(t,n)=>n.virtual_level<=I()]
function ot(t,n,e){_(t.rows[0],`<td>${F({last_login:e.last_login})}</td>`),function(t,n){return ct.every((e=>e(t,n)))}(n,e)&&t.parentNode.parentNode.classList.add("lvlHighlight")}let lt
function ut(){V(lt)}function dt(t,n){ot(t[0],t[2],{last_login:String(n.last_activity),virtual_level:n.vl})}function ft(t,n){return n.name===t[1]}function mt(t,n){const e=t.find(v(ft,n))
e&&dt(n,e)}function pt(t,n){n.s&&w(n.r)&&dt(t,n.r[0])}function ht(t,n){n.s&&dt(t,{last_activity:c-n.r.last_activity,vl:n.r.virtual_level})}function vt(t){return-1!==t[0]}function bt(t,n){return t.concat(n.members)}function gt(t,n){const e=(r=n.r.ranks,s="id",r.filter(v(st,s,{}))).reduce(bt,[])
var r,s
t[1].forEach(v(mt,e))}function _t(t,n){n.s&&gt(t,n)}function jt(t){return(n=t[0],f(X,Q,n)).then(v(_t,t))
var n}function Nt(t){return-1===t[0]}function yt(t){return t[1]!==S()?(n=t[1],f(R,K,n)).then(v(pt,t)):f(Y).then(v(ht,t))
var n}function wt(){const t=p(i,h).slice(4).map(Z).reduce(nt,[]).reduce(rt,[])
let e=t.filter(vt).map(jt)
t.find(Nt)&&(e=e.concat(t.find(Nt)[1].map(yt))),n(e,ut)}function xt(t){var n
y("toprated","FindOnlinePlayers"),n=t.target,N(n),lt=O({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'}),n.parentNode.replaceChild(lt,n),at=g("highlightPlayersNearMyLvl"),at&&(it=T()),wt()}const Ct=[()=>C(),()=>h,()=>h.children[0],()=>h.children[0].rows,()=>h.children[0].rows.length>2,()=>l(h.children[0].rows[1]).startsWith("Last Updated")]
function Lt(){Ct.every($)&&function(){const n=a("td",h)[0]
n.children[0].className="fshTopListWrap"
const e=t({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
A(n,e),x(e,xt)}()}export default Lt
//# sourceMappingURL=toprated-11309a16.js.map
