import{c as t}from"./createInput-9311ddf5.js"
import{a as n}from"./allthen-e710674d.js"
import{u as e,v as r,z as s,b as a,d as i,U as c,bw as o,H as l,bx as u,x as d,$ as f,g as m,p,t as h,by as v,I as b,i as g,aJ as _,aN as j,W as N,bz as y,o as w,j as x,af as L}from"./calfSystem-cb2a6f39.js"
import{g as k}from"./getProfile-35a7ea32.js"
import{g as C}from"./guild-a2e2fb1a.js"
import{d as E}from"./dataRows-2cfb2c52.js"
import{i as P}from"./intValue-0e97c9b9.js"
import{i as S}from"./isArray-dcd15679.js"
import{p as F}from"./playerName-809cf32e.js"
import{c as H}from"./currentGuildId-32ce2428.js"
import{o as O}from"./onlineDot-5a4b21dd.js"
import{a as T,g as A}from"./levelHighlight-ca6387c9.js"
import{c as I}from"./createSpan-e4b93b95.js"
import{h as W}from"./hideElement-4575b6b4.js"
import{f as z}from"./functionPasses-70dc3f56.js"
import{i as B}from"./insertElementAfterBegin-b0467547.js"
import"./all-d206e4b9.js"
import"./cmdExport-d6be62af.js"
import"./indexAjaxJson-6c7e44df.js"
import"./valueText-52de4ed6.js"
import"./insertElementBefore-656c48d5.js"
const J={}
function M(t){const n=t.match(u)
return c-(24*Number(n[1])*60*60+60*Number(n[2])*60+60*Number(n[3])+Number(n[4]))}function U(t){const{tipped:n}=t.cells[1].children[0].dataset,e=n.match(/Stamina:<\/td><td>(\d+) \/ (\d+)</)
return{current_stamina:Number(e[1]),max_stamina:Number(e[2]),vl:Number(n.match(/VL:<\/td><td>(\d+)</)[1]),last_activity:M(n)}}function V(t){return{id:Number(t.cells[1].children[0].href.match(o)[1]),name:l(t.cells[1].children[0]),level:Number(l(t.cells[2])),xp:0,guild_xp:P(l(t.cells[4])),rank_name:l(t.cells[3])}}function $(t,n){return{rank_index:n,...U(t),...V(t)}}function D(t,n){const e=n.rank_name,r=n.rank_index,s=t.find((t=>t.name===e))
return s?s.members.push(n):t.push({id:r,name:e,members:[n]}),t}function G(t){return E(t.rows,5,1).map($).reduce(D,[])}function R(t){const n=r(t),e=s("pCC",n),c=a(i,e),o=c[c.length-1]
return o?{r:{ranks:G(o)},s:!0}:{s:!1}}function q(t){return J[t]||(J[t]=e({cmd:"guild",subcmd:"view",guild_id:t}).then(R)),J[t]}function K(t){return d({cmd:"findplayer",subcmd:"view",search_username:t})}function Q(t){let n=t.last_login
return n||(n=0),{r:[{last_activity:Number(n),vl:t.virtual_level}],s:!0}}function X(t){return k(t).then(Q)}function Y(t){return C({subcmd:"view",guild_id:t})}function Z(t){return[t,l(t),(n=t,n.rows[0].cells[0].children[0]?Number(v.exec(n.rows[0].cells[0].children[0].href)[1]):-1)]
var n}function tt(t,n){return n[0]===t[2]}function nt(t,n){const e=t.find(h(tt,n))
return e?e[1].push(n):t.push([n[2],[n]]),t}function et(t,n){return n[0]===t}function rt(t,n){let e=n[0]
n[1].length<5&&(e=-1)
const r=t.find(h(et,e))
return r?r[1]=r[1].concat(n[1]):t.push([e,n[1]]),t}function st(t,n,e){const r=function(t,n){return t?n[t]:n}(t,e)
if(!n[r])return n[r]=!0,!0}let at,it
const ct=[()=>at,t=>_(t)||t!==it,(t,n)=>n.last_login>=c-604800,(t,n)=>n.virtual_level>=T(),(t,n)=>n.virtual_level<=A()]
function ot(t,n,e){g(t.rows[0],`<td>${O({last_login:e.last_login})}</td>`),function(t,n){return ct.every((e=>e(t,n)))}(n,e)&&t.parentNode.parentNode.classList.add("lvlHighlight")}let lt
function ut(){W(lt)}function dt(t,n){ot(t[0],t[2],{last_login:String(n.last_activity),virtual_level:n.vl})}function ft(t,n){return n.name===t[1]}function mt(t,n){const e=t.find(h(ft,n))
e&&dt(n,e)}function pt(t,n){n.s&&S(n.r)&&dt(t,n.r[0])}function ht(t,n){n.s&&dt(t,{last_activity:c-n.r.last_activity,vl:n.r.virtual_level})}function vt(t){return-1!==t[0]}function bt(t,n){return t.concat(n.members)}function gt(t,n){const e=(r=n.r.ranks,s="id",r.filter(h(st,s,{}))).reduce(bt,[])
var r,s
t[1].forEach(h(mt,e))}function _t(t,n){n.s&&gt(t,n)}function jt(t){return(n=t[0],f(Y,q,n)).then(h(_t,t))
var n}function Nt(t){return-1===t[0]}function yt(t){return t[1]!==F()?(n=t[1],f(K,X,n)).then(h(pt,t)):y().then(h(ht,t))
var n}function wt(){const t=m(i,p).slice(4).map(Z).reduce(nt,[]).reduce(rt,[])
let e=t.filter(vt).map(jt)
t.find(Nt)&&(e=e.concat(t.find(Nt)[1].map(yt))),n(e,ut)}function xt(t){var n
N("toprated","FindOnlinePlayers"),n=t.target,j(n),lt=I({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'}),n.parentNode.replaceChild(lt,n),at=b("highlightPlayersNearMyLvl"),at&&(it=H()),wt()}const Lt=[()=>x(),()=>L(p),()=>L(p.children[0]),()=>L(p.children[0].rows),()=>p.children[0].rows.length>2,()=>l(p.children[0].rows[1]).startsWith("Last Updated")]
function kt(){Lt.every(z)&&function(){const n=a("td",p)[0]
n.children[0].className="fshTopListWrap"
const e=t({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
B(n,e),w(e,xt)}()}export default kt
//# sourceMappingURL=toprated-e3b7e08f.js.map
