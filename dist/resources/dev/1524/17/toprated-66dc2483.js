import{v as t,g as n,p as e,d as r,a4 as s,s as i,D as a,i as o,ak as c,R as l,aq as f,T as u,bq as d,M as m,b as p,o as h,j as v,aW as g}from"./calfSystem-1c103624.js"
import{p as b}from"./playerName-191d9509.js"
import{c as j}from"./createInput-7f1f4562.js"
import{o as y}from"./onlineDot-764e0ffe.js"
import{c as _}from"./currentGuildId-b6fa52f3.js"
import"./intValue-f5e62e5b.js"
import"./valueText-ef8b2cab.js"
import{c as w,b as N,p as L}from"./levelHighlight-4a16cb82.js"
import"./insertElementBefore-0e09c5df.js"
import{i as C}from"./insertElementAfterBegin-ed14bd7f.js"
import{c as E}from"./createSpan-475e9683.js"
import{h as P}from"./hideElement-e9cdcfef.js"
import"./all-bf5942c7.js"
import{a as S}from"./allthen-a3d432e8.js"
import{f as T}from"./functionPasses-6025c8da.js"
import{g as F}from"./guild-3ca78693.js"
function O(n){return function(n){return t({cmd:"findplayer",subcmd:"view",search_username:n})}(n)}function k(t){return function(t){return F({subcmd:"view",guild_id:t})}(t)}function x(t){return[t,s(t),(n=t,n.rows[0].cells[0].children[0]?Number(/guild_id=(\d+)/.exec(n.rows[0].cells[0].children[0].href)[1]):-1)]
var n}function H(t,n){return n[0]===t[2]}function M(t,n){const e=t.find(i(H,n))
return e?e[1].push(n):t.push([n[2],[n]]),t}function W(t,n){return n[0]===t}function q(t,n){let e=n[0]
n[1].length<5&&(e=-1)
const r=t.find(i(W,e))
return r?r[1]=r[1].concat(n[1]):t.push([e,n[1]]),t}function B(t,n,e){const r=function(t,n){return t?n[t]:n}(t,e)
if(!n[r])return n[r]=!0,!0}let D,I
const A=[()=>D,t=>c(t)||t!==I,(t,n)=>n.last_login>=l-604800,(t,n)=>n.virtual_level>=N,(t,n)=>n.virtual_level<=L]
function G(t,n,e){o(t.rows[0],`<td>${y({last_login:e.last_login})}</td>`),function(t,n){return A.every(e=>e(t,n))}(n,e)&&t.parentNode.parentNode.classList.add("lvlHighlight")}let R
function U(){P(R)}function V(t,n){G(t[0],t[2],{last_login:String(n.last_activity),virtual_level:n.vl})}function $(t,n){return n.name===t[1]}function z(t,n){const e=t.find(i($,n))
e&&V(n,e)}function J(t,n){n.s&&m(n.r)&&V(t,n.r[0])}function K(t,n){n.s&&V(t,{last_activity:l-n.r.last_activity,vl:n.r.virtual_level})}function Q(t){return-1!==t[0]}function X(t,n){return t.concat(n.members)}function Y(t,n){const e=(r=n.r.ranks,s="id",r.filter(i(B,s,{}))).reduce(X,[])
var r,s
t[1].forEach(i(z,e))}function Z(t,n){n.s&&Y(t,n)}function tt(t){return k(t[0]).then(i(Z,t))}function nt(t){return-1===t[0]}function et(t){return t[1]!==b()?O(t[1]).then(i(J,t)):d().then(i(K,t))}function rt(){const t=n(r,e).slice(4).map(x).reduce(M,[]).reduce(q,[])
let s=t.filter(Q).map(tt)
t.find(nt)&&(s=s.concat(t.find(nt)[1].map(et))),S(s,U)}function st(t){var n
u("toprated","FindOnlinePlayers"),n=t.target,f(n),R=E({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'}),n.parentNode.replaceChild(R,n),D=a("highlightPlayersNearMyLvl"),D&&(w(),I=_()),rt()}const it=[()=>v(),()=>g(e),()=>g(e.children[0]),()=>g(e.children[0].rows),()=>e.children[0].rows.length>2,()=>s(e.children[0].rows[1]).startsWith("Last Updated")]
export default function(){it.every(T)&&function(){const t=p("td",e)[0]
t.children[0].className="fshTopListWrap"
const n=j({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
C(t,n),h(n,st)}()}
//# sourceMappingURL=toprated-66dc2483.js.map
