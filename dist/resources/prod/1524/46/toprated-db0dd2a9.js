import{c as t}from"./createInput-e6426c85.js"
import{a as n}from"./allthen-34d3fc07.js"
import{u as e,v as r,z as s,b as i,d as a,U as c,by as o,H as l,bz as u,x as d,$ as m,br as f,g as p,p as h,t as v,bA as b,I as g,i as _,aR as j,aV as y,S as N,o as w,j as x}from"./calfSystem-7991d843.js"
import{g as L}from"./getProfile-c6106cad.js"
import{g as k}from"./guild-a6c2c23e.js"
import{d as C}from"./dataRows-41df2bb0.js"
import{i as S}from"./intValue-19726e4b.js"
import{i as E}from"./isArray-e47504c9.js"
import{p as P}from"./playerName-541d216c.js"
import{c as A}from"./currentGuildId-abfe3237.js"
import{o as F}from"./onlineDot-de1b774d.js"
import{a as H,g as I}from"./levelHighlight-b04133d3.js"
import{c as O}from"./createSpan-462a14d2.js"
import{h as T}from"./hideElement-452544d4.js"
import{f as V}from"./functionPasses-a26e09ef.js"
import{i as z}from"./insertElementAfterBegin-4cb03648.js"
import"./all-3768003b.js"
import"./cmdExport-07db8246.js"
import"./indexAjaxJson-2cb21664.js"
import"./asInt-2a37aa61.js"
import"./valueText-9648dc4e.js"
import"./insertElementBefore-c2bb9234.js"
const B={}
function M(t){const n=t.match(u)
return c-(24*Number(n[1])*60*60+60*Number(n[2])*60+60*Number(n[3])+Number(n[4]))}function R(t){const{tipped:n}=t.cells[1].children[0].dataset,e=n.match(/Stamina:<\/td><td>(\d+) \/ (\d+)</)
return{current_stamina:Number(e[1]),max_stamina:Number(e[2]),vl:Number(n.match(/VL:<\/td><td>(\d+)</)[1]),last_activity:M(n)}}function U(t){return{id:Number(t.cells[1].children[0].href.match(o)[1]),name:l(t.cells[1].children[0]),level:Number(l(t.cells[2])),xp:0,guild_xp:S(l(t.cells[4])),rank_name:l(t.cells[3])}}function W(t,n){return{rank_index:n,...R(t),...U(t)}}function $(t,n){const e=n.rank_name,r=n.rank_index,s=t.find((t=>t.name===e))
return s?s.members.push(n):t.push({id:r,name:e,members:[n]}),t}function D(t){return C(t.rows,5,1).map(W).reduce($,[])}function G(t){const n=r(t),e=s("pCC",n),c=i(a,e),o=c[c.length-1]
return o?{r:{ranks:D(o)},s:!0}:{s:!1}}function J(t){return B[t]||(B[t]=e({cmd:"guild",subcmd:"view",guild_id:t}).then(G)),B[t]}function q(t){return d({cmd:"findplayer",subcmd:"view",search_username:t})}function K(t){let n=t.last_login
return n||(n=0),{r:[{last_activity:Number(n),vl:t.virtual_level}],s:!0}}function Q(t){return L(t).then(K)}function X(t){return k({subcmd:"view",guild_id:t})}function Y(){return f({subcmd:"view"})}function Z(t){return[t,l(t),(n=t,n.rows[0].cells[0].children[0]?Number(b.exec(n.rows[0].cells[0].children[0].href)[1]):-1)]
var n}function tt(t,n){return n[0]===t[2]}function nt(t,n){const e=t.find(v(tt,n))
return e?e[1].push(n):t.push([n[2],[n]]),t}function et(t,n){return n[0]===t}function rt(t,n){let e=n[0]
n[1].length<5&&(e=-1)
const r=t.find(v(et,e))
return r?r[1]=r[1].concat(n[1]):t.push([e,n[1]]),t}function st(t,n,e){const r=function(t,n){return t?n[t]:n}(t,e)
if(!n[r])return n[r]=!0,!0}let it,at
const ct=[()=>it,t=>j(t)||t!==at,(t,n)=>n.last_login>=c-604800,(t,n)=>n.virtual_level>=H(),(t,n)=>n.virtual_level<=I()]
function ot(t,n,e){_(t.rows[0],`<td>${F({last_login:e.last_login})}</td>`),function(t,n){return ct.every((e=>e(t,n)))}(n,e)&&t.parentNode.parentNode.classList.add("lvlHighlight")}let lt
function ut(){T(lt)}function dt(t,n){ot(t[0],t[2],{last_login:String(n.last_activity),virtual_level:n.vl})}function mt(t,n){return n.name===t[1]}function ft(t,n){const e=t.find(v(mt,n))
e&&dt(n,e)}function pt(t,n){n.s&&E(n.r)&&dt(t,n.r[0])}function ht(t,n){n.s&&dt(t,{last_activity:c-n.r.last_activity,vl:n.r.virtual_level})}function vt(t){return-1!==t[0]}function bt(t,n){return t.concat(n.members)}function gt(t,n){const e=(r=n.r.ranks,s="id",r.filter(v(st,s,{}))).reduce(bt,[])
var r,s
t[1].forEach(v(ft,e))}function _t(t,n){n.s&&gt(t,n)}function jt(t){return(n=t[0],m(X,J,n)).then(v(_t,t))
var n}function yt(t){return-1===t[0]}function Nt(t){return t[1]!==P()?(n=t[1],m(q,Q,n)).then(v(pt,t)):m(Y).then(v(ht,t))
var n}function wt(){const t=p(a,h).slice(4).map(Z).reduce(nt,[]).reduce(rt,[])
let e=t.filter(vt).map(jt)
t.find(yt)&&(e=e.concat(t.find(yt)[1].map(Nt))),n(e,ut)}function xt(t){var n
N("toprated","FindOnlinePlayers"),n=t.target,y(n),lt=O({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'}),n.parentNode.replaceChild(lt,n),it=g("highlightPlayersNearMyLvl"),it&&(at=A()),wt()}const Lt=[()=>x(),()=>h,()=>h.children[0],()=>h.children[0].rows,()=>h.children[0].rows.length>2,()=>l(h.children[0].rows[1]).startsWith("Last Updated")]
function kt(){Lt.every(V)&&function(){const n=i("td",h)[0]
n.children[0].className="fshTopListWrap"
const e=t({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
z(n,e),w(e,xt)}()}export default kt
//# sourceMappingURL=toprated-db0dd2a9.js.map
