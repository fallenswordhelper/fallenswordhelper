import{c as t}from"./createInput-64e90ab9.js"
import{a as n}from"./allthen-34d3fc07.js"
import{u as e,v as r,z as s,b as i,d as a,U as o,bB as c,H as l,bC as u,x as f,$ as m,bt as d,g as p,p as h,t as v,bD as b,I as g,i as _,aT as j,aX as N,S as y,o as w,j as x}from"./calfSystem-cbf77dd7.js"
import{g as C}from"./getProfile-0a56bf78.js"
import{g as L}from"./guild-80ee29db.js"
import{d as k}from"./dataRows-bf7d7651.js"
import{i as S}from"./intValue-19726e4b.js"
import{i as E}from"./isArray-e47504c9.js"
import{p as P}from"./playerName-448aa7ca.js"
import{c as T}from"./currentGuildId-96726c8f.js"
import{o as F}from"./onlineDot-25d2c122.js"
import{a as H,g as I}from"./levelHighlight-40138177.js"
import{c as O}from"./createSpan-14225166.js"
import{h as A}from"./hideElement-452544d4.js"
import{f as B}from"./functionPasses-a26e09ef.js"
import{i as D}from"./insertElementAfterBegin-7e75dc58.js"
import"./all-3768003b.js"
import"./cmdExport-cd0ba453.js"
import"./indexAjaxJson-167a69fe.js"
import"./asInt-f1541708.js"
import"./valueText-068fe53f.js"
import"./insertElementBefore-c2bb9234.js"
const M={}
function U(t){const n=t.match(u)
return o-(24*Number(n[1])*60*60+60*Number(n[2])*60+60*Number(n[3])+Number(n[4]))}function V(t){const{tipped:n}=t.cells[1].children[0].dataset,e=n.match(/Stamina:<\/td><td>(\d+) \/ (\d+)</)
return{current_stamina:Number(e[1]),max_stamina:Number(e[2]),vl:Number(n.match(/VL:<\/td><td>(\d+)</)[1]),last_activity:U(n)}}function W(t){return{id:Number(t.cells[1].children[0].href.match(c)[1]),name:l(t.cells[1].children[0]),level:Number(l(t.cells[2])),xp:0,guild_xp:S(l(t.cells[4])),rank_name:l(t.cells[3])}}function $(t,n){return{rank_index:n,...V(t),...W(t)}}function z(t,n){const e=n.rank_name,r=n.rank_index,s=t.find((t=>t.name===e))
return s?s.members.push(n):t.push({id:r,name:e,members:[n]}),t}function G(t){return k(t.rows,5,1).map($).reduce(z,[])}function J(t){const n=r(t),e=s("pCC",n),o=i(a,e),c=o[o.length-1]
return c?{r:{ranks:G(c)},s:!0}:{s:!1}}function R(t){return M[t]||(M[t]=e({cmd:"guild",subcmd:"view",guild_id:t}).then(J)),M[t]}function X(t){return f({cmd:"findplayer",subcmd:"view",search_username:t})}function q(t){let n=t.last_login
return n||(n=0),{r:[{last_activity:Number(n),vl:t.virtual_level}],s:!0}}function K(t){return C(t).then(q)}function Q(t){return L({subcmd:"view",guild_id:t})}function Y(){return d({subcmd:"view"})}function Z(t){return[t,l(t),(n=t,n.rows[0].cells[0].children[0]?Number(b.exec(n.rows[0].cells[0].children[0].href)[1]):-1)]
var n}function tt(t,n){return n[0]===t[2]}function nt(t,n){const e=t.find(v(tt,n))
return e?e[1].push(n):t.push([n[2],[n]]),t}function et(t,n){return n[0]===t}function rt(t,n){let e=n[0]
n[1].length<5&&(e=-1)
const r=t.find(v(et,e))
return r?r[1]=r[1].concat(n[1]):t.push([e,n[1]]),t}function st(t,n,e){const r=function(t,n){return t?n[t]:n}(t,e)
if(!n[r])return n[r]=!0,!0}let it,at
const ot=[()=>it,t=>j(t)||t!==at,(t,n)=>n.last_login>=o-604800,(t,n)=>n.virtual_level>=H(),(t,n)=>n.virtual_level<=I()]
function ct(t,n,e){_(t.rows[0],`<td>${F({last_login:e.last_login})}</td>`),function(t,n){return ot.every((e=>e(t,n)))}(n,e)&&t.parentNode.parentNode.classList.add("lvlHighlight")}let lt
function ut(){A(lt)}function ft(t,n){ct(t[0],t[2],{last_login:String(n.last_activity),virtual_level:n.vl})}function mt(t,n){return n.name===t[1]}function dt(t,n){const e=t.find(v(mt,n))
e&&ft(n,e)}function pt(t,n){n.s&&E(n.r)&&ft(t,n.r[0])}function ht(t,n){n.s&&ft(t,{last_activity:o-n.r.last_activity,vl:n.r.virtual_level})}function vt(t){return-1!==t[0]}function bt(t,n){return t.concat(n.members)}function gt(t,n){const e=(r=n.r.ranks,s="id",r.filter(v(st,s,{}))).reduce(bt,[])
var r,s
t[1].forEach(v(dt,e))}function _t(t,n){n.s&&gt(t,n)}function jt(t){return(n=t[0],m(Q,R,n)).then(v(_t,t))
var n}function Nt(t){return-1===t[0]}function yt(t){return t[1]!==P()?(n=t[1],m(X,K,n)).then(v(pt,t)):m(Y).then(v(ht,t))
var n}function wt(){const t=p(a,h).slice(4).map(Z).reduce(nt,[]).reduce(rt,[])
let e=t.filter(vt).map(jt)
t.find(Nt)&&(e=e.concat(t.find(Nt)[1].map(yt))),n(e,ut)}function xt(t){var n
y("toprated","FindOnlinePlayers"),n=t.target,N(n),lt=O({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'}),n.parentNode.replaceChild(lt,n),it=g("highlightPlayersNearMyLvl"),it&&(at=T()),wt()}const Ct=[()=>x(),()=>h,()=>h.children[0],()=>h.children[0].rows,()=>h.children[0].rows.length>2,()=>l(h.children[0].rows[1]).startsWith("Last Updated")]
function Lt(){Ct.every(B)&&function(){const n=i("td",h)[0]
n.children[0].className="fshTopListWrap"
const e=t({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
D(n,e),w(e,xt)}()}export default Lt
//# sourceMappingURL=toprated-8575a06e.js.map
