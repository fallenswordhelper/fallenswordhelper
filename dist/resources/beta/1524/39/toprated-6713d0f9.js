import{c as t}from"./createInput-b457e181.js"
import{a as n}from"./allthen-b65a93f3.js"
import{u as e,v as r,z as s,b as a,d as i,U as o,bw as c,H as l,bx as u,x as f,$ as m,g as d,p,t as h,by as b,I as v,i as g,aP as _,aT as j,W as y,bz as N,o as w,j as x,ag as L}from"./calfSystem-26fbeaeb.js"
import{g as k}from"./getProfile-d835f1ae.js"
import{g as C}from"./guild-eb2d8b6c.js"
import{d as P}from"./dataRows-9546bc1b.js"
import{i as E}from"./intValue-f6303c59.js"
import{i as S}from"./isArray-f324e0ac.js"
import{p as T}from"./playerName-a1b7a513.js"
import{c as F}from"./currentGuildId-5214ee19.js"
import{o as H}from"./onlineDot-de8a6344.js"
import{a as O,g as A}from"./levelHighlight-260c8d5a.js"
import{c as I}from"./createSpan-2c557b8b.js"
import{h as W}from"./hideElement-d197c06b.js"
import{f as z}from"./functionPasses-94ad3c1e.js"
import{i as B}from"./insertElementAfterBegin-959856fa.js"
import"./all-2b32eb82.js"
import"./cmdExport-c9d580f0.js"
import"./indexAjaxJson-0408c27b.js"
import"./valueText-2413577e.js"
import"./insertElementBefore-68b894c4.js"
const M={}
function U(t){const n=t.match(u)
return o-(24*Number(n[1])*60*60+60*Number(n[2])*60+60*Number(n[3])+Number(n[4]))}function V(t){const{tipped:n}=t.cells[1].children[0].dataset,e=n.match(/Stamina:<\/td><td>(\d+) \/ (\d+)</)
return{current_stamina:Number(e[1]),max_stamina:Number(e[2]),vl:Number(n.match(/VL:<\/td><td>(\d+)</)[1]),last_activity:U(n)}}function $(t){return{id:Number(t.cells[1].children[0].href.match(c)[1]),name:l(t.cells[1].children[0]),level:Number(l(t.cells[2])),xp:0,guild_xp:E(l(t.cells[4])),rank_name:l(t.cells[3])}}function D(t,n){return{rank_index:n,...V(t),...$(t)}}function G(t,n){const e=n.rank_name,r=n.rank_index,s=t.find((t=>t.name===e))
return s?s.members.push(n):t.push({id:r,name:e,members:[n]}),t}function J(t){return P(t.rows,5,1).map(D).reduce(G,[])}function R(t){const n=r(t),e=s("pCC",n),o=a(i,e),c=o[o.length-1]
return c?{r:{ranks:J(c)},s:!0}:{s:!1}}function q(t){return M[t]||(M[t]=e({cmd:"guild",subcmd:"view",guild_id:t}).then(R)),M[t]}function K(t){return f({cmd:"findplayer",subcmd:"view",search_username:t})}function Q(t){let n=t.last_login
return n||(n=0),{r:[{last_activity:Number(n),vl:t.virtual_level}],s:!0}}function X(t){return k(t).then(Q)}function Y(t){return C({subcmd:"view",guild_id:t})}function Z(t){return[t,l(t),(n=t,n.rows[0].cells[0].children[0]?Number(b.exec(n.rows[0].cells[0].children[0].href)[1]):-1)]
var n}function tt(t,n){return n[0]===t[2]}function nt(t,n){const e=t.find(h(tt,n))
return e?e[1].push(n):t.push([n[2],[n]]),t}function et(t,n){return n[0]===t}function rt(t,n){let e=n[0]
n[1].length<5&&(e=-1)
const r=t.find(h(et,e))
return r?r[1]=r[1].concat(n[1]):t.push([e,n[1]]),t}function st(t,n,e){const r=function(t,n){return t?n[t]:n}(t,e)
if(!n[r])return n[r]=!0,!0}let at,it
const ot=[()=>at,t=>_(t)||t!==it,(t,n)=>n.last_login>=o-604800,(t,n)=>n.virtual_level>=O(),(t,n)=>n.virtual_level<=A()]
function ct(t,n,e){g(t.rows[0],`<td>${H({last_login:e.last_login})}</td>`),function(t,n){return ot.every((e=>e(t,n)))}(n,e)&&t.parentNode.parentNode.classList.add("lvlHighlight")}let lt
function ut(){W(lt)}function ft(t,n){ct(t[0],t[2],{last_login:String(n.last_activity),virtual_level:n.vl})}function mt(t,n){return n.name===t[1]}function dt(t,n){const e=t.find(h(mt,n))
e&&ft(n,e)}function pt(t,n){n.s&&S(n.r)&&ft(t,n.r[0])}function ht(t,n){n.s&&ft(t,{last_activity:o-n.r.last_activity,vl:n.r.virtual_level})}function bt(t){return-1!==t[0]}function vt(t,n){return t.concat(n.members)}function gt(t,n){const e=(r=n.r.ranks,s="id",r.filter(h(st,s,{}))).reduce(vt,[])
var r,s
t[1].forEach(h(dt,e))}function _t(t,n){n.s&&gt(t,n)}function jt(t){return(n=t[0],m(Y,q,n)).then(h(_t,t))
var n}function yt(t){return-1===t[0]}function Nt(t){return t[1]!==T()?(n=t[1],m(K,X,n)).then(h(pt,t)):N().then(h(ht,t))
var n}function wt(){const t=d(i,p).slice(4).map(Z).reduce(nt,[]).reduce(rt,[])
let e=t.filter(bt).map(jt)
t.find(yt)&&(e=e.concat(t.find(yt)[1].map(Nt))),n(e,ut)}function xt(t){var n
y("toprated","FindOnlinePlayers"),n=t.target,j(n),lt=I({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'}),n.parentNode.replaceChild(lt,n),at=v("highlightPlayersNearMyLvl"),at&&(it=F()),wt()}const Lt=[()=>x(),()=>L(p),()=>L(p.children[0]),()=>L(p.children[0].rows),()=>p.children[0].rows.length>2,()=>l(p.children[0].rows[1]).startsWith("Last Updated")]
function kt(){Lt.every(z)&&function(){const n=a("td",p)[0]
n.children[0].className="fshTopListWrap"
const e=t({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
B(n,e),w(e,xt)}()}export default kt
//# sourceMappingURL=toprated-6713d0f9.js.map
