import{c as t}from"./createInput-7fa974b4.js"
import{a as n}from"./allthen-a8900f54.js"
import{u as e,v as r,z as a,b as s,d as i,U as o,bw as c,H as l,bx as u,x as f,$ as m,g as d,p,t as h,by as v,I as b,i as g,aJ as _,aN as j,W as N,bz as y,o as w,j as x,af as L}from"./calfSystem-4a40365f.js"
import{g as k}from"./getProfile-e1217259.js"
import{g as C}from"./guild-973c4909.js"
import{d as E}from"./dataRows-ef9a1a0a.js"
import{i as P}from"./intValue-ca51a3c0.js"
import{i as S}from"./isArray-c961431c.js"
import{p as F}from"./playerName-9305cfda.js"
import{c as H}from"./currentGuildId-014a0323.js"
import{o as O}from"./onlineDot-75e133f9.js"
import{a as T,g as A}from"./levelHighlight-d16d2f68.js"
import{c as I}from"./createSpan-3ab35394.js"
import{h as W}from"./hideElement-f0e898f0.js"
import{f as z}from"./functionPasses-1a0207a7.js"
import{i as B}from"./insertElementAfterBegin-b3eb6927.js"
import"./all-778b38b7.js"
import"./cmdExport-92971757.js"
import"./indexAjaxJson-6d511c0e.js"
import"./valueText-1577f4a8.js"
import"./insertElementBefore-42a90ba9.js"
const J={}
function M(t){const n=t.match(u)
return o-(24*Number(n[1])*60*60+60*Number(n[2])*60+60*Number(n[3])+Number(n[4]))}function U(t){const{tipped:n}=t.cells[1].children[0].dataset,e=n.match(/Stamina:<\/td><td>(\d+) \/ (\d+)</)
return{current_stamina:Number(e[1]),max_stamina:Number(e[2]),vl:Number(n.match(/VL:<\/td><td>(\d+)</)[1]),last_activity:M(n)}}function V(t){return{id:Number(t.cells[1].children[0].href.match(c)[1]),name:l(t.cells[1].children[0]),level:Number(l(t.cells[2])),xp:0,guild_xp:P(l(t.cells[4])),rank_name:l(t.cells[3])}}function $(t,n){return{rank_index:n,...U(t),...V(t)}}function D(t,n){const e=n.rank_name,r=n.rank_index,a=t.find((t=>t.name===e))
return a?a.members.push(n):t.push({id:r,name:e,members:[n]}),t}function G(t){return E(t.rows,5,1).map($).reduce(D,[])}function R(t){const n=r(t),e=a("pCC",n),o=s(i,e),c=o[o.length-1]
return c?{r:{ranks:G(c)},s:!0}:{s:!1}}function q(t){return J[t]||(J[t]=e({cmd:"guild",subcmd:"view",guild_id:t}).then(R)),J[t]}function K(t){return f({cmd:"findplayer",subcmd:"view",search_username:t})}function Q(t){let n=t.last_login
return n||(n=0),{r:[{last_activity:Number(n),vl:t.virtual_level}],s:!0}}function X(t){return k(t).then(Q)}function Y(t){return C({subcmd:"view",guild_id:t})}function Z(t){return[t,l(t),(n=t,n.rows[0].cells[0].children[0]?Number(v.exec(n.rows[0].cells[0].children[0].href)[1]):-1)]
var n}function tt(t,n){return n[0]===t[2]}function nt(t,n){const e=t.find(h(tt,n))
return e?e[1].push(n):t.push([n[2],[n]]),t}function et(t,n){return n[0]===t}function rt(t,n){let e=n[0]
n[1].length<5&&(e=-1)
const r=t.find(h(et,e))
return r?r[1]=r[1].concat(n[1]):t.push([e,n[1]]),t}function at(t,n,e){const r=function(t,n){return t?n[t]:n}(t,e)
if(!n[r])return n[r]=!0,!0}let st,it
const ot=[()=>st,t=>_(t)||t!==it,(t,n)=>n.last_login>=o-604800,(t,n)=>n.virtual_level>=T(),(t,n)=>n.virtual_level<=A()]
function ct(t,n,e){g(t.rows[0],`<td>${O({last_login:e.last_login})}</td>`),function(t,n){return ot.every((e=>e(t,n)))}(n,e)&&t.parentNode.parentNode.classList.add("lvlHighlight")}let lt
function ut(){W(lt)}function ft(t,n){ct(t[0],t[2],{last_login:String(n.last_activity),virtual_level:n.vl})}function mt(t,n){return n.name===t[1]}function dt(t,n){const e=t.find(h(mt,n))
e&&ft(n,e)}function pt(t,n){n.s&&S(n.r)&&ft(t,n.r[0])}function ht(t,n){n.s&&ft(t,{last_activity:o-n.r.last_activity,vl:n.r.virtual_level})}function vt(t){return-1!==t[0]}function bt(t,n){return t.concat(n.members)}function gt(t,n){const e=(r=n.r.ranks,a="id",r.filter(h(at,a,{}))).reduce(bt,[])
var r,a
t[1].forEach(h(dt,e))}function _t(t,n){n.s&&gt(t,n)}function jt(t){return(n=t[0],m(Y,q,n)).then(h(_t,t))
var n}function Nt(t){return-1===t[0]}function yt(t){return t[1]!==F()?(n=t[1],m(K,X,n)).then(h(pt,t)):y().then(h(ht,t))
var n}function wt(){const t=d(i,p).slice(4).map(Z).reduce(nt,[]).reduce(rt,[])
let e=t.filter(vt).map(jt)
t.find(Nt)&&(e=e.concat(t.find(Nt)[1].map(yt))),n(e,ut)}function xt(t){var n
N("toprated","FindOnlinePlayers"),n=t.target,j(n),lt=I({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'}),n.parentNode.replaceChild(lt,n),st=b("highlightPlayersNearMyLvl"),st&&(it=H()),wt()}const Lt=[()=>x(),()=>L(p),()=>L(p.children[0]),()=>L(p.children[0].rows),()=>p.children[0].rows.length>2,()=>l(p.children[0].rows[1]).startsWith("Last Updated")]
function kt(){Lt.every(z)&&function(){const n=s("td",p)[0]
n.children[0].className="fshTopListWrap"
const e=t({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
B(n,e),w(e,xt)}()}export default kt
//# sourceMappingURL=toprated-43131f0a.js.map
