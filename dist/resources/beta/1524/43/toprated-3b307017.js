import{c as t}from"./createInput-7d18793e.js"
import{a as n}from"./allthen-0f84efe6.js"
import{u as e,v as r,z as s,b as i,d as a,V as o,bx as c,H as l,by as u,x as f,$ as m,bq as d,g as p,p as h,t as v,bz as b,I as g,i as _,aQ as j,aU as y,T as N,o as w,j as x}from"./calfSystem-1d588248.js"
import{g as L}from"./getProfile-76213cf6.js"
import{g as k}from"./guild-7ba4aee9.js"
import{d as C}from"./dataRows-4965f55a.js"
import{i as E}from"./intValue-fefb28df.js"
import{i as P}from"./isArray-a3f24c76.js"
import{p as S}from"./playerName-95f1f2a8.js"
import{c as T}from"./currentGuildId-9fdd6aa9.js"
import{o as F}from"./onlineDot-9745fb79.js"
import{a as H,g as I}from"./levelHighlight-fa5434bb.js"
import{c as O}from"./createSpan-256b26cd.js"
import{h as A}from"./hideElement-0d0f9065.js"
import{f as V}from"./functionPasses-17426539.js"
import{i as z}from"./insertElementAfterBegin-38e30afe.js"
import"./all-0d44a747.js"
import"./cmdExport-a5395bb5.js"
import"./indexAjaxJson-7770951b.js"
import"./asInt-86489e68.js"
import"./valueText-f03f9e27.js"
import"./insertElementBefore-23d4e956.js"
const B={}
function M(t){const n=t.match(u)
return o-(24*Number(n[1])*60*60+60*Number(n[2])*60+60*Number(n[3])+Number(n[4]))}function U(t){const{tipped:n}=t.cells[1].children[0].dataset,e=n.match(/Stamina:<\/td><td>(\d+) \/ (\d+)</)
return{current_stamina:Number(e[1]),max_stamina:Number(e[2]),vl:Number(n.match(/VL:<\/td><td>(\d+)</)[1]),last_activity:M(n)}}function W(t){return{id:Number(t.cells[1].children[0].href.match(c)[1]),name:l(t.cells[1].children[0]),level:Number(l(t.cells[2])),xp:0,guild_xp:E(l(t.cells[4])),rank_name:l(t.cells[3])}}function $(t,n){return{rank_index:n,...U(t),...W(t)}}function q(t,n){const e=n.rank_name,r=n.rank_index,s=t.find((t=>t.name===e))
return s?s.members.push(n):t.push({id:r,name:e,members:[n]}),t}function D(t){return C(t.rows,5,1).map($).reduce(q,[])}function G(t){const n=r(t),e=s("pCC",n),o=i(a,e),c=o[o.length-1]
return c?{r:{ranks:D(c)},s:!0}:{s:!1}}function J(t){return B[t]||(B[t]=e({cmd:"guild",subcmd:"view",guild_id:t}).then(G)),B[t]}function Q(t){return f({cmd:"findplayer",subcmd:"view",search_username:t})}function R(t){let n=t.last_login
return n||(n=0),{r:[{last_activity:Number(n),vl:t.virtual_level}],s:!0}}function K(t){return L(t).then(R)}function X(t){return k({subcmd:"view",guild_id:t})}function Y(){return d({subcmd:"view"})}function Z(t){return[t,l(t),(n=t,n.rows[0].cells[0].children[0]?Number(b.exec(n.rows[0].cells[0].children[0].href)[1]):-1)]
var n}function tt(t,n){return n[0]===t[2]}function nt(t,n){const e=t.find(v(tt,n))
return e?e[1].push(n):t.push([n[2],[n]]),t}function et(t,n){return n[0]===t}function rt(t,n){let e=n[0]
n[1].length<5&&(e=-1)
const r=t.find(v(et,e))
return r?r[1]=r[1].concat(n[1]):t.push([e,n[1]]),t}function st(t,n,e){const r=function(t,n){return t?n[t]:n}(t,e)
if(!n[r])return n[r]=!0,!0}let it,at
const ot=[()=>it,t=>j(t)||t!==at,(t,n)=>n.last_login>=o-604800,(t,n)=>n.virtual_level>=H(),(t,n)=>n.virtual_level<=I()]
function ct(t,n,e){_(t.rows[0],`<td>${F({last_login:e.last_login})}</td>`),function(t,n){return ot.every((e=>e(t,n)))}(n,e)&&t.parentNode.parentNode.classList.add("lvlHighlight")}let lt
function ut(){A(lt)}function ft(t,n){ct(t[0],t[2],{last_login:String(n.last_activity),virtual_level:n.vl})}function mt(t,n){return n.name===t[1]}function dt(t,n){const e=t.find(v(mt,n))
e&&ft(n,e)}function pt(t,n){n.s&&P(n.r)&&ft(t,n.r[0])}function ht(t,n){n.s&&ft(t,{last_activity:o-n.r.last_activity,vl:n.r.virtual_level})}function vt(t){return-1!==t[0]}function bt(t,n){return t.concat(n.members)}function gt(t,n){const e=(r=n.r.ranks,s="id",r.filter(v(st,s,{}))).reduce(bt,[])
var r,s
t[1].forEach(v(dt,e))}function _t(t,n){n.s&&gt(t,n)}function jt(t){return(n=t[0],m(X,J,n)).then(v(_t,t))
var n}function yt(t){return-1===t[0]}function Nt(t){return t[1]!==S()?(n=t[1],m(Q,K,n)).then(v(pt,t)):m(Y).then(v(ht,t))
var n}function wt(){const t=p(a,h).slice(4).map(Z).reduce(nt,[]).reduce(rt,[])
let e=t.filter(vt).map(jt)
t.find(yt)&&(e=e.concat(t.find(yt)[1].map(Nt))),n(e,ut)}function xt(t){var n
N("toprated","FindOnlinePlayers"),n=t.target,y(n),lt=O({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'}),n.parentNode.replaceChild(lt,n),it=g("highlightPlayersNearMyLvl"),it&&(at=T()),wt()}const Lt=[()=>x(),()=>h,()=>h.children[0],()=>h.children[0].rows,()=>h.children[0].rows.length>2,()=>l(h.children[0].rows[1]).startsWith("Last Updated")]
function kt(){Lt.every(V)&&function(){const n=i("td",h)[0]
n.children[0].className="fshTopListWrap"
const e=t({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
z(n,e),w(e,xt)}()}export default kt
//# sourceMappingURL=toprated-3b307017.js.map
