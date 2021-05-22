import{c as t}from"./createInput-8f2d1a63.js"
import{a as n}from"./allthen-c5cfa8a4.js"
import{u as e,v as r,z as s,b as a,d as i,V as c,bA as o,H as l,bB as u,x as f,$ as d,bt as m,g as p,p as h,t as v,bC as b,I as g,i as _,aT as j,aZ as N,T as y,Q as w,o as x,j as C}from"./calfSystem-f7cf24f6.js"
import{g as L}from"./getProfile-9279556b.js"
import{g as k}from"./guild-587e1e6d.js"
import{d as E}from"./dataRows-17c980fd.js"
import{i as P}from"./intValue-66f66ba9.js"
import{p as S}from"./playerName-c3c6c732.js"
import{c as T}from"./currentGuildId-d5258e6c.js"
import{o as F}from"./onlineDot-0a71eb09.js"
import{a as H,g as I}from"./levelHighlight-a0715d99.js"
import{c as O}from"./createSpan-0636b0fd.js"
import{h as A}from"./hideElement-3be61495.js"
import{f as B}from"./functionPasses-d25a8b97.js"
import{i as V}from"./insertElementAfterBegin-b6d22612.js"
import"./all-8d04560c.js"
import"./cmdExport-a23d53af.js"
import"./indexAjaxJson-57024e17.js"
import"./asInt-1c5cca46.js"
import"./valueText-ea28f9e0.js"
import"./insertElementBefore-7c440c87.js"
const M={}
function W(t){const n=t.match(u)
return c-(24*Number(n[1])*60*60+60*Number(n[2])*60+60*Number(n[3])+Number(n[4]))}function $(t){const{tipped:n}=t.cells[1].children[0].dataset,e=n.match(/Stamina:<\/td><td>(\d+) \/ (\d+)</)
return{current_stamina:Number(e[1]),max_stamina:Number(e[2]),vl:Number(n.match(/VL:<\/td><td>(\d+)</)[1]),last_activity:W(n)}}function z(t){return{id:Number(t.cells[1].children[0].href.match(o)[1]),name:l(t.cells[1].children[0]),level:Number(l(t.cells[2])),xp:0,guild_xp:P(l(t.cells[4])),rank_name:l(t.cells[3])}}function D(t,n){return{rank_index:n,...$(t),...z(t)}}function G(t,n){const e=n.rank_name,r=n.rank_index,s=t.find((t=>t.name===e))
return s?s.members.push(n):t.push({id:r,name:e,members:[n]}),t}function J(t){return E(t.rows,5,1).map(D).reduce(G,[])}function Q(t){const n=r(t),e=s("pCC",n),c=a(i,e),o=c[c.length-1]
return o?{r:{ranks:J(o)},s:!0}:{s:!1}}function R(t){return M[t]||(M[t]=e({cmd:"guild",subcmd:"view",guild_id:t}).then(Q)),M[t]}function U(t){return f({cmd:"findplayer",subcmd:"view",search_username:t})}function Z(t){let n=t.last_login
return n||(n=0),{r:[{last_activity:Number(n),vl:t.virtual_level}],s:!0}}function q(t){return L(t).then(Z)}function K(t){return k({subcmd:"view",guild_id:t})}function X(){return m({subcmd:"view"})}function Y(t){return[t,l(t),(n=t,n.rows[0].cells[0].children[0]?Number(b.exec(n.rows[0].cells[0].children[0].href)[1]):-1)]
var n}function tt(t,n){return n[0]===t[2]}function nt(t,n){const e=t.find(v(tt,n))
return e?e[1].push(n):t.push([n[2],[n]]),t}function et(t,n){return n[0]===t}function rt(t,n){let e=n[0]
n[1].length<5&&(e=-1)
const r=t.find(v(et,e))
return r?r[1]=r[1].concat(n[1]):t.push([e,n[1]]),t}function st(t,n,e){const r=function(t,n){return t?n[t]:n}(t,e)
if(!n[r])return n[r]=!0,!0}let at,it
const ct=[()=>at,t=>j(t)||t!==it,(t,n)=>n.last_login>=c-604800,(t,n)=>n.virtual_level>=H(),(t,n)=>n.virtual_level<=I()]
function ot(t,n,e){_(t.rows[0],`<td>${F({last_login:e.last_login})}</td>`),function(t,n){return ct.every((e=>e(t,n)))}(n,e)&&t.parentNode.parentNode.classList.add("lvlHighlight")}let lt
function ut(){A(lt)}function ft(t,n){ot(t[0],t[2],{last_login:String(n.last_activity),virtual_level:n.vl})}function dt(t,n){return n.name===t[1]}function mt(t,n){const e=t.find(v(dt,n))
e&&ft(n,e)}function pt(t,n){n.s&&w(n.r)&&ft(t,n.r[0])}function ht(t,n){n.s&&ft(t,{last_activity:c-n.r.last_activity,vl:n.r.virtual_level})}function vt(t){return-1!==t[0]}function bt(t,n){return t.concat(n.members)}function gt(t,n){const e=(r=n.r.ranks,s="id",r.filter(v(st,s,{}))).reduce(bt,[])
var r,s
t[1].forEach(v(mt,e))}function _t(t,n){n.s&&gt(t,n)}function jt(t){return(n=t[0],d(K,R,n)).then(v(_t,t))
var n}function Nt(t){return-1===t[0]}function yt(t){return t[1]!==S()?(n=t[1],d(U,q,n)).then(v(pt,t)):d(X).then(v(ht,t))
var n}function wt(){const t=p(i,h).slice(4).map(Y).reduce(nt,[]).reduce(rt,[])
let e=t.filter(vt).map(jt)
t.find(Nt)&&(e=e.concat(t.find(Nt)[1].map(yt))),n(e,ut)}function xt(t){var n
y("toprated","FindOnlinePlayers"),n=t.target,N(n),lt=O({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'}),n.parentNode.replaceChild(lt,n),at=g("highlightPlayersNearMyLvl"),at&&(it=T()),wt()}const Ct=[()=>C(),()=>h,()=>h.children[0],()=>h.children[0].rows,()=>h.children[0].rows.length>2,()=>l(h.children[0].rows[1]).startsWith("Last Updated")]
function Lt(){Ct.every(B)&&function(){const n=a("td",h)[0]
n.children[0].className="fshTopListWrap"
const e=t({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
V(n,e),x(e,xt)}()}export default Lt
//# sourceMappingURL=toprated-dfea88cb.js.map
