import{c as t}from"./createInput-8922c2cd.js"
import{a as n}from"./allthen-c5cfa8a4.js"
import{u as e,v as r,z as s,b as i,d as a,U as c,bz as o,H as l,bA as u,x as d,$ as f,bs as m,g as p,p as h,t as v,bB as b,I as g,i as _,aS as j,aW as N,S as y,o as w,j as x}from"./calfSystem-a8d582b6.js"
import{g as L}from"./getProfile-d9b6d52e.js"
import{g as S}from"./guild-7b16d85c.js"
import{d as k}from"./dataRows-25616e3d.js"
import{i as C}from"./intValue-66f66ba9.js"
import{i as E}from"./isArray-e57269b2.js"
import{p as P}from"./playerName-9ba8ea6b.js"
import{c as A}from"./currentGuildId-6d2e1d9d.js"
import{o as F}from"./onlineDot-76ee782e.js"
import{a as H,g as I}from"./levelHighlight-d117282b.js"
import{c as O}from"./createSpan-f56cc9ef.js"
import{h as T}from"./hideElement-3be61495.js"
import{f as B}from"./functionPasses-d25a8b97.js"
import{i as W}from"./insertElementAfterBegin-f2f74df6.js"
import"./all-8d04560c.js"
import"./cmdExport-70bb9819.js"
import"./indexAjaxJson-f3656c2a.js"
import"./asInt-ed8ceed1.js"
import"./valueText-27359b90.js"
import"./insertElementBefore-7c440c87.js"
const z={}
function M(t){const n=t.match(u)
return c-(24*Number(n[1])*60*60+60*Number(n[2])*60+60*Number(n[3])+Number(n[4]))}function U(t){const{tipped:n}=t.cells[1].children[0].dataset,e=n.match(/Stamina:<\/td><td>(\d+) \/ (\d+)</)
return{current_stamina:Number(e[1]),max_stamina:Number(e[2]),vl:Number(n.match(/VL:<\/td><td>(\d+)</)[1]),last_activity:M(n)}}function V(t){return{id:Number(t.cells[1].children[0].href.match(o)[1]),name:l(t.cells[1].children[0]),level:Number(l(t.cells[2])),xp:0,guild_xp:C(l(t.cells[4])),rank_name:l(t.cells[3])}}function $(t,n){return{rank_index:n,...U(t),...V(t)}}function D(t,n){const e=n.rank_name,r=n.rank_index,s=t.find((t=>t.name===e))
return s?s.members.push(n):t.push({id:r,name:e,members:[n]}),t}function G(t){return k(t.rows,5,1).map($).reduce(D,[])}function J(t){const n=r(t),e=s("pCC",n),c=i(a,e),o=c[c.length-1]
return o?{r:{ranks:G(o)},s:!0}:{s:!1}}function R(t){return z[t]||(z[t]=e({cmd:"guild",subcmd:"view",guild_id:t}).then(J)),z[t]}function q(t){return d({cmd:"findplayer",subcmd:"view",search_username:t})}function K(t){let n=t.last_login
return n||(n=0),{r:[{last_activity:Number(n),vl:t.virtual_level}],s:!0}}function Q(t){return L(t).then(K)}function X(t){return S({subcmd:"view",guild_id:t})}function Y(){return m({subcmd:"view"})}function Z(t){return[t,l(t),(n=t,n.rows[0].cells[0].children[0]?Number(b.exec(n.rows[0].cells[0].children[0].href)[1]):-1)]
var n}function tt(t,n){return n[0]===t[2]}function nt(t,n){const e=t.find(v(tt,n))
return e?e[1].push(n):t.push([n[2],[n]]),t}function et(t,n){return n[0]===t}function rt(t,n){let e=n[0]
n[1].length<5&&(e=-1)
const r=t.find(v(et,e))
return r?r[1]=r[1].concat(n[1]):t.push([e,n[1]]),t}function st(t,n,e){const r=function(t,n){return t?n[t]:n}(t,e)
if(!n[r])return n[r]=!0,!0}let it,at
const ct=[()=>it,t=>j(t)||t!==at,(t,n)=>n.last_login>=c-604800,(t,n)=>n.virtual_level>=H(),(t,n)=>n.virtual_level<=I()]
function ot(t,n,e){_(t.rows[0],`<td>${F({last_login:e.last_login})}</td>`),function(t,n){return ct.every((e=>e(t,n)))}(n,e)&&t.parentNode.parentNode.classList.add("lvlHighlight")}let lt
function ut(){T(lt)}function dt(t,n){ot(t[0],t[2],{last_login:String(n.last_activity),virtual_level:n.vl})}function ft(t,n){return n.name===t[1]}function mt(t,n){const e=t.find(v(ft,n))
e&&dt(n,e)}function pt(t,n){n.s&&E(n.r)&&dt(t,n.r[0])}function ht(t,n){n.s&&dt(t,{last_activity:c-n.r.last_activity,vl:n.r.virtual_level})}function vt(t){return-1!==t[0]}function bt(t,n){return t.concat(n.members)}function gt(t,n){const e=(r=n.r.ranks,s="id",r.filter(v(st,s,{}))).reduce(bt,[])
var r,s
t[1].forEach(v(mt,e))}function _t(t,n){n.s&&gt(t,n)}function jt(t){return(n=t[0],f(X,R,n)).then(v(_t,t))
var n}function Nt(t){return-1===t[0]}function yt(t){return t[1]!==P()?(n=t[1],f(q,Q,n)).then(v(pt,t)):f(Y).then(v(ht,t))
var n}function wt(){const t=p(a,h).slice(4).map(Z).reduce(nt,[]).reduce(rt,[])
let e=t.filter(vt).map(jt)
t.find(Nt)&&(e=e.concat(t.find(Nt)[1].map(yt))),n(e,ut)}function xt(t){var n
y("toprated","FindOnlinePlayers"),n=t.target,N(n),lt=O({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'}),n.parentNode.replaceChild(lt,n),it=g("highlightPlayersNearMyLvl"),it&&(at=A()),wt()}const Lt=[()=>x(),()=>h,()=>h.children[0],()=>h.children[0].rows,()=>h.children[0].rows.length>2,()=>l(h.children[0].rows[1]).startsWith("Last Updated")]
function St(){Lt.every(B)&&function(){const n=i("td",h)[0]
n.children[0].className="fshTopListWrap"
const e=t({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
W(n,e),w(e,xt)}()}export default St
//# sourceMappingURL=toprated-9cbaa5d3.js.map
