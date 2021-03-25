import{c as t}from"./createInput-c963dc21.js"
import{a as n}from"./allthen-a8900f54.js"
import{u as e,v as r,z as s,b as a,d as i,V as c,bx as o,H as l,by as u,x as f,$ as d,g as m,p,t as h,bz as v,I as b,i as g,aK as _,aQ as j,X as N,bA as y,R as w,o as x,j as L,ag as k}from"./calfSystem-eeb1d862.js"
import{g as C}from"./getProfile-52958e59.js"
import{g as E}from"./guild-9a62ed17.js"
import{d as P}from"./dataRows-79831c64.js"
import{i as S}from"./intValue-ca51a3c0.js"
import{p as F}from"./playerName-018cf18c.js"
import{c as H}from"./currentGuildId-5370ff7a.js"
import{o as O}from"./onlineDot-b33fd599.js"
import{a as T,g as A}from"./levelHighlight-06de42a0.js"
import{c as I}from"./createSpan-c8cd4d0e.js"
import{h as V}from"./hideElement-f0e898f0.js"
import{f as z}from"./functionPasses-1a0207a7.js"
import{i as B}from"./insertElementAfterBegin-f3c5ddc0.js"
import"./all-778b38b7.js"
import"./cmdExport-7e823e95.js"
import"./indexAjaxJson-2deb257d.js"
import"./valueText-7c11f0d0.js"
import"./insertElementBefore-42a90ba9.js"
const M={}
function R(t){const n=t.match(u)
return c-(24*Number(n[1])*60*60+60*Number(n[2])*60+60*Number(n[3])+Number(n[4]))}function W(t){const{tipped:n}=t.cells[1].children[0].dataset,e=n.match(/Stamina:<\/td><td>(\d+) \/ (\d+)</)
return{current_stamina:Number(e[1]),max_stamina:Number(e[2]),vl:Number(n.match(/VL:<\/td><td>(\d+)</)[1]),last_activity:R(n)}}function $(t){return{id:Number(t.cells[1].children[0].href.match(o)[1]),name:l(t.cells[1].children[0]),level:Number(l(t.cells[2])),xp:0,guild_xp:S(l(t.cells[4])),rank_name:l(t.cells[3])}}function D(t,n){return{rank_index:n,...W(t),...$(t)}}function G(t,n){const e=n.rank_name,r=n.rank_index,s=t.find((t=>t.name===e))
return s?s.members.push(n):t.push({id:r,name:e,members:[n]}),t}function J(t){return P(t.rows,5,1).map(D).reduce(G,[])}function K(t){const n=r(t),e=s("pCC",n),c=a(i,e),o=c[c.length-1]
return o?{r:{ranks:J(o)},s:!0}:{s:!1}}function Q(t){return M[t]||(M[t]=e({cmd:"guild",subcmd:"view",guild_id:t}).then(K)),M[t]}function U(t){return f({cmd:"findplayer",subcmd:"view",search_username:t})}function X(t){let n=t.last_login
return n||(n=0),{r:[{last_activity:Number(n),vl:t.virtual_level}],s:!0}}function q(t){return C(t).then(X)}function Y(t){return E({subcmd:"view",guild_id:t})}function Z(t){return[t,l(t),(n=t,n.rows[0].cells[0].children[0]?Number(v.exec(n.rows[0].cells[0].children[0].href)[1]):-1)]
var n}function tt(t,n){return n[0]===t[2]}function nt(t,n){const e=t.find(h(tt,n))
return e?e[1].push(n):t.push([n[2],[n]]),t}function et(t,n){return n[0]===t}function rt(t,n){let e=n[0]
n[1].length<5&&(e=-1)
const r=t.find(h(et,e))
return r?r[1]=r[1].concat(n[1]):t.push([e,n[1]]),t}function st(t,n,e){const r=function(t,n){return t?n[t]:n}(t,e)
if(!n[r])return n[r]=!0,!0}let at,it
const ct=[()=>at,t=>_(t)||t!==it,(t,n)=>n.last_login>=c-604800,(t,n)=>n.virtual_level>=T(),(t,n)=>n.virtual_level<=A()]
function ot(t,n,e){g(t.rows[0],`<td>${O({last_login:e.last_login})}</td>`),function(t,n){return ct.every((e=>e(t,n)))}(n,e)&&t.parentNode.parentNode.classList.add("lvlHighlight")}let lt
function ut(){V(lt)}function ft(t,n){ot(t[0],t[2],{last_login:String(n.last_activity),virtual_level:n.vl})}function dt(t,n){return n.name===t[1]}function mt(t,n){const e=t.find(h(dt,n))
e&&ft(n,e)}function pt(t,n){n.s&&w(n.r)&&ft(t,n.r[0])}function ht(t,n){n.s&&ft(t,{last_activity:c-n.r.last_activity,vl:n.r.virtual_level})}function vt(t){return-1!==t[0]}function bt(t,n){return t.concat(n.members)}function gt(t,n){const e=(r=n.r.ranks,s="id",r.filter(h(st,s,{}))).reduce(bt,[])
var r,s
t[1].forEach(h(mt,e))}function _t(t,n){n.s&&gt(t,n)}function jt(t){return(n=t[0],d(Y,Q,n)).then(h(_t,t))
var n}function Nt(t){return-1===t[0]}function yt(t){return t[1]!==F()?(n=t[1],d(U,q,n)).then(h(pt,t)):y().then(h(ht,t))
var n}function wt(){const t=m(i,p).slice(4).map(Z).reduce(nt,[]).reduce(rt,[])
let e=t.filter(vt).map(jt)
t.find(Nt)&&(e=e.concat(t.find(Nt)[1].map(yt))),n(e,ut)}function xt(t){var n
N("toprated","FindOnlinePlayers"),n=t.target,j(n),lt=I({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'}),n.parentNode.replaceChild(lt,n),at=b("highlightPlayersNearMyLvl"),at&&(it=H()),wt()}const Lt=[()=>L(),()=>k(p),()=>k(p.children[0]),()=>k(p.children[0].rows),()=>p.children[0].rows.length>2,()=>l(p.children[0].rows[1]).startsWith("Last Updated")]
function kt(){Lt.every(z)&&function(){const n=a("td",p)[0]
n.children[0].className="fshTopListWrap"
const e=t({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
B(n,e),x(e,xt)}()}export default kt
//# sourceMappingURL=toprated-f50322fb.js.map