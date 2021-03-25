import{c as t}from"./createInput-aabb8b6b.js"
import{a as e}from"./allthen-e710674d.js"
import{u as n,v as r,z as s,b as i,d as a,U as c,bt as o,H as l,bu as u,x as f,$ as d,g as m,p,t as h,bv as v,I as b,i as g,aH as _,aL as j,W as N,bw as y,o as w,j as x,af as L}from"./calfSystem-60c20ae9.js"
import{g as k}from"./getProfile-a21f618e.js"
import{g as C}from"./guild-d3cc9553.js"
import{d as E}from"./dataRows-b8bc9361.js"
import{i as P}from"./intValue-0e97c9b9.js"
import{i as S}from"./isArray-dcd15679.js"
import{p as H}from"./playerName-c88ee86b.js"
import{c as F}from"./currentGuildId-a7e07ffc.js"
import{o as O}from"./onlineDot-fc083d2b.js"
import{a as T,g as A}from"./levelHighlight-0e1696e3.js"
import{c as I}from"./createSpan-2b0536e4.js"
import{h as W}from"./hideElement-4575b6b4.js"
import{f as B}from"./functionPasses-70dc3f56.js"
import{i as M}from"./insertElementAfterBegin-9ee6638a.js"
import"./all-d206e4b9.js"
import"./cmdExport-10c01f6a.js"
import"./indexAjaxJson-6bb34fec.js"
import"./valueText-5652dde0.js"
import"./insertElementBefore-656c48d5.js"
const U={}
function V(t){const e=t.match(u)
return c-(24*Number(e[1])*60*60+60*Number(e[2])*60+60*Number(e[3])+Number(e[4]))}function $(t){const{tipped:e}=t.cells[1].children[0].dataset,n=e.match(/Stamina:<\/td><td>(\d+) \/ (\d+)</)
return{current_stamina:Number(n[1]),max_stamina:Number(n[2]),vl:Number(e.match(/VL:<\/td><td>(\d+)</)[1]),last_activity:V(e)}}function z(t){return{id:Number(t.cells[1].children[0].href.match(o)[1]),name:l(t.cells[1].children[0]),level:Number(l(t.cells[2])),xp:0,guild_xp:P(l(t.cells[4])),rank_name:l(t.cells[3])}}function D(t,e){return{rank_index:e,...$(t),...z(t)}}function G(t,e){const n=e.rank_name,r=e.rank_index,s=t.find((t=>t.name===n))
return s?s.members.push(e):t.push({id:r,name:n,members:[e]}),t}function J(t){return E(t.rows,5,1).map(D).reduce(G,[])}function R(t){const e=r(t),n=s("pCC",e),c=i(a,n),o=c[c.length-1]
return o?{r:{ranks:J(o)},s:!0}:{s:!1}}function q(t){return U[t]||(U[t]=n({cmd:"guild",subcmd:"view",guild_id:t}).then(R)),U[t]}function K(t){return f({cmd:"findplayer",subcmd:"view",search_username:t})}function Q(t){let e=t.last_login
return e||(e=0),{r:[{last_activity:Number(e),vl:t.virtual_level}],s:!0}}function X(t){return k(t).then(Q)}function Y(t){return C({subcmd:"view",guild_id:t})}function Z(t){return[t,l(t),(e=t,e.rows[0].cells[0].children[0]?Number(v.exec(e.rows[0].cells[0].children[0].href)[1]):-1)]
var e}function tt(t,e){return e[0]===t[2]}function et(t,e){const n=t.find(h(tt,e))
return n?n[1].push(e):t.push([e[2],[e]]),t}function nt(t,e){return e[0]===t}function rt(t,e){let n=e[0]
e[1].length<5&&(n=-1)
const r=t.find(h(nt,n))
return r?r[1]=r[1].concat(e[1]):t.push([n,e[1]]),t}function st(t,e,n){const r=function(t,e){return t?e[t]:e}(t,n)
if(!e[r])return e[r]=!0,!0}let it,at
const ct=[()=>it,t=>_(t)||t!==at,(t,e)=>e.last_login>=c-604800,(t,e)=>e.virtual_level>=T(),(t,e)=>e.virtual_level<=A()]
function ot(t,e,n){g(t.rows[0],`<td>${O({last_login:n.last_login})}</td>`),function(t,e){return ct.every((n=>n(t,e)))}(e,n)&&t.parentNode.parentNode.classList.add("lvlHighlight")}let lt
function ut(){W(lt)}function ft(t,e){ot(t[0],t[2],{last_login:String(e.last_activity),virtual_level:e.vl})}function dt(t,e){return e.name===t[1]}function mt(t,e){const n=t.find(h(dt,e))
n&&ft(e,n)}function pt(t,e){e.s&&S(e.r)&&ft(t,e.r[0])}function ht(t,e){e.s&&ft(t,{last_activity:c-e.r.last_activity,vl:e.r.virtual_level})}function vt(t){return-1!==t[0]}function bt(t,e){return t.concat(e.members)}function gt(t,e){const n=(r=e.r.ranks,s="id",r.filter(h(st,s,{}))).reduce(bt,[])
var r,s
t[1].forEach(h(mt,n))}function _t(t,e){e.s&&gt(t,e)}function jt(t){return(e=t[0],d(Y,q,e)).then(h(_t,t))
var e}function Nt(t){return-1===t[0]}function yt(t){return t[1]!==H()?(e=t[1],d(K,X,e)).then(h(pt,t)):y().then(h(ht,t))
var e}function wt(){const t=m(a,p).slice(4).map(Z).reduce(et,[]).reduce(rt,[])
let n=t.filter(vt).map(jt)
t.find(Nt)&&(n=n.concat(t.find(Nt)[1].map(yt))),e(n,ut)}function xt(t){var e
N("toprated","FindOnlinePlayers"),e=t.target,j(e),lt=I({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'}),e.parentNode.replaceChild(lt,e),it=b("highlightPlayersNearMyLvl"),it&&(at=F()),wt()}const Lt=[()=>x(),()=>L(p),()=>L(p.children[0]),()=>L(p.children[0].rows),()=>p.children[0].rows.length>2,()=>l(p.children[0].rows[1]).startsWith("Last Updated")]
function kt(){Lt.every(B)&&function(){const e=i("td",p)[0]
e.children[0].className="fshTopListWrap"
const n=t({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
M(e,n),w(n,xt)}()}export default kt
//# sourceMappingURL=toprated-b0f2fc2a.js.map
