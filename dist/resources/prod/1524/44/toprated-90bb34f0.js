import{c as t}from"./createInput-75a73ea8.js"
import{a as n}from"./allthen-c5cfa8a4.js"
import{u as e,v as r,z as s,b as a,d as i,U as o,bw as c,H as l,bx as u,x as f,$ as m,bq as d,g as p,p as h,t as v,by as b,I as g,i as _,aQ as j,aU as y,S as N,o as w,j as x}from"./calfSystem-6ad077b7.js"
import{g as L}from"./getProfile-dbf285d8.js"
import{g as k}from"./guild-b59f329b.js"
import{d as C}from"./dataRows-34f45ad8.js"
import{i as S}from"./intValue-66f66ba9.js"
import{i as E}from"./isArray-e57269b2.js"
import{p as P}from"./playerName-7e6569ce.js"
import{c as F}from"./currentGuildId-e0011880.js"
import{o as H}from"./onlineDot-465a2c69.js"
import{a as I,g as O}from"./levelHighlight-e7f75506.js"
import{c as T}from"./createSpan-b08aa35e.js"
import{h as A}from"./hideElement-3be61495.js"
import{f as U}from"./functionPasses-d25a8b97.js"
import{i as B}from"./insertElementAfterBegin-28d006b9.js"
import"./all-8d04560c.js"
import"./cmdExport-f73a707b.js"
import"./indexAjaxJson-d462ea95.js"
import"./asInt-4b3cfe31.js"
import"./valueText-febd3894.js"
import"./insertElementBefore-7c440c87.js"
const M={}
function V(t){const n=t.match(u)
return o-(24*Number(n[1])*60*60+60*Number(n[2])*60+60*Number(n[3])+Number(n[4]))}function W(t){const{tipped:n}=t.cells[1].children[0].dataset,e=n.match(/Stamina:<\/td><td>(\d+) \/ (\d+)</)
return{current_stamina:Number(e[1]),max_stamina:Number(e[2]),vl:Number(n.match(/VL:<\/td><td>(\d+)</)[1]),last_activity:V(n)}}function $(t){return{id:Number(t.cells[1].children[0].href.match(c)[1]),name:l(t.cells[1].children[0]),level:Number(l(t.cells[2])),xp:0,guild_xp:S(l(t.cells[4])),rank_name:l(t.cells[3])}}function q(t,n){return{rank_index:n,...W(t),...$(t)}}function z(t,n){const e=n.rank_name,r=n.rank_index,s=t.find((t=>t.name===e))
return s?s.members.push(n):t.push({id:r,name:e,members:[n]}),t}function D(t){return C(t.rows,5,1).map(q).reduce(z,[])}function G(t){const n=r(t),e=s("pCC",n),o=a(i,e),c=o[o.length-1]
return c?{r:{ranks:D(c)},s:!0}:{s:!1}}function J(t){return M[t]||(M[t]=e({cmd:"guild",subcmd:"view",guild_id:t}).then(G)),M[t]}function Q(t){return f({cmd:"findplayer",subcmd:"view",search_username:t})}function R(t){let n=t.last_login
return n||(n=0),{r:[{last_activity:Number(n),vl:t.virtual_level}],s:!0}}function K(t){return L(t).then(R)}function X(t){return k({subcmd:"view",guild_id:t})}function Y(){return d({subcmd:"view"})}function Z(t){return[t,l(t),(n=t,n.rows[0].cells[0].children[0]?Number(b.exec(n.rows[0].cells[0].children[0].href)[1]):-1)]
var n}function tt(t,n){return n[0]===t[2]}function nt(t,n){const e=t.find(v(tt,n))
return e?e[1].push(n):t.push([n[2],[n]]),t}function et(t,n){return n[0]===t}function rt(t,n){let e=n[0]
n[1].length<5&&(e=-1)
const r=t.find(v(et,e))
return r?r[1]=r[1].concat(n[1]):t.push([e,n[1]]),t}function st(t,n,e){const r=function(t,n){return t?n[t]:n}(t,e)
if(!n[r])return n[r]=!0,!0}let at,it
const ot=[()=>at,t=>j(t)||t!==it,(t,n)=>n.last_login>=o-604800,(t,n)=>n.virtual_level>=I(),(t,n)=>n.virtual_level<=O()]
function ct(t,n,e){_(t.rows[0],`<td>${H({last_login:e.last_login})}</td>`),function(t,n){return ot.every((e=>e(t,n)))}(n,e)&&t.parentNode.parentNode.classList.add("lvlHighlight")}let lt
function ut(){A(lt)}function ft(t,n){ct(t[0],t[2],{last_login:String(n.last_activity),virtual_level:n.vl})}function mt(t,n){return n.name===t[1]}function dt(t,n){const e=t.find(v(mt,n))
e&&ft(n,e)}function pt(t,n){n.s&&E(n.r)&&ft(t,n.r[0])}function ht(t,n){n.s&&ft(t,{last_activity:o-n.r.last_activity,vl:n.r.virtual_level})}function vt(t){return-1!==t[0]}function bt(t,n){return t.concat(n.members)}function gt(t,n){const e=(r=n.r.ranks,s="id",r.filter(v(st,s,{}))).reduce(bt,[])
var r,s
t[1].forEach(v(dt,e))}function _t(t,n){n.s&&gt(t,n)}function jt(t){return(n=t[0],m(X,J,n)).then(v(_t,t))
var n}function yt(t){return-1===t[0]}function Nt(t){return t[1]!==P()?(n=t[1],m(Q,K,n)).then(v(pt,t)):m(Y).then(v(ht,t))
var n}function wt(){const t=p(i,h).slice(4).map(Z).reduce(nt,[]).reduce(rt,[])
let e=t.filter(vt).map(jt)
t.find(yt)&&(e=e.concat(t.find(yt)[1].map(Nt))),n(e,ut)}function xt(t){var n
N("toprated","FindOnlinePlayers"),n=t.target,y(n),lt=T({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'}),n.parentNode.replaceChild(lt,n),at=g("highlightPlayersNearMyLvl"),at&&(it=F()),wt()}const Lt=[()=>x(),()=>h,()=>h.children[0],()=>h.children[0].rows,()=>h.children[0].rows.length>2,()=>l(h.children[0].rows[1]).startsWith("Last Updated")]
function kt(){Lt.every(U)&&function(){const n=a("td",h)[0]
n.children[0].className="fshTopListWrap"
const e=t({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
B(n,e),w(e,xt)}()}export default kt
//# sourceMappingURL=toprated-90bb34f0.js.map
