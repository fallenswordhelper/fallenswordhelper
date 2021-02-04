import{c as t}from"./createInput-d5428169.js"
import{a as n}from"./allthen-259c1952.js"
import{w as e,g as r,p as s,d as i,G as a,t as o,br as c,H as l,i as u,aG as f,T as d,aK as m,V as p,bs as h,b as v,o as g,j as b,ad as j}from"./calfSystem-0708a9bb.js"
import{g as y}from"./guild-17d1b334.js"
import{i as _}from"./isArray-91e28808.js"
import{p as w}from"./playerName-e75bbf9f.js"
import{c as N}from"./currentGuildId-c383c2b8.js"
import{o as L}from"./onlineDot-84509222.js"
import{a as C,g as E}from"./levelHighlight-21658a8f.js"
import{c as P}from"./createSpan-3083d966.js"
import{h as S}from"./hideElement-eb117e0e.js"
import{f as T}from"./functionPasses-bfa8b450.js"
import{i as F}from"./insertElementAfterBegin-20400e4d.js"
import"./all-978030c9.js"
import"./intValue-55d66e09.js"
import"./valueText-365bf09c.js"
import"./insertElementBefore-0a7f2602.js"
function H(t){return function(t){return e({cmd:"findplayer",subcmd:"view",search_username:t})}(t)}function O(t){return function(t){return y({subcmd:"view",guild_id:t})}(t)}function x(t){return[t,a(t),(n=t,n.rows[0].cells[0].children[0]?Number(c.exec(n.rows[0].cells[0].children[0].href)[1]):-1)]
var n}function G(t,n){return n[0]===t[2]}function k(t,n){const e=t.find(o(G,n))
return e?e[1].push(n):t.push([n[2],[n]]),t}function A(t,n){return n[0]===t}function B(t,n){let e=n[0]
n[1].length<5&&(e=-1)
const r=t.find(o(A,e))
return r?r[1]=r[1].concat(n[1]):t.push([e,n[1]]),t}function I(t,n,e){const r=function(t,n){return t?n[t]:n}(t,e)
if(!n[r])return n[r]=!0,!0}let M,V
const W=[()=>M,t=>f(t)||t!==V,(t,n)=>n.last_login>=d-604800,(t,n)=>n.virtual_level>=C(),(t,n)=>n.virtual_level<=E()]
function D(t,n,e){u(t.rows[0],`<td>${L({last_login:e.last_login})}</td>`),function(t,n){return W.every((e=>e(t,n)))}(n,e)&&t.parentNode.parentNode.classList.add("lvlHighlight")}let K
function U(){S(K)}function $(t,n){D(t[0],t[2],{last_login:String(n.last_activity),virtual_level:n.vl})}function q(t,n){return n.name===t[1]}function z(t,n){const e=t.find(o(q,n))
e&&$(n,e)}function J(t,n){n.s&&_(n.r)&&$(t,n.r[0])}function Q(t,n){n.s&&$(t,{last_activity:d-n.r.last_activity,vl:n.r.virtual_level})}function R(t){return-1!==t[0]}function X(t,n){return t.concat(n.members)}function Y(t,n){const e=(r=n.r.ranks,s="id",r.filter(o(I,s,{}))).reduce(X,[])
var r,s
t[1].forEach(o(z,e))}function Z(t,n){n.s&&Y(t,n)}function tt(t){return O(t[0]).then(o(Z,t))}function nt(t){return-1===t[0]}function et(t){return t[1]!==w()?H(t[1]).then(o(J,t)):h().then(o(Q,t))}function rt(){const t=r(i,s).slice(4).map(x).reduce(k,[]).reduce(B,[])
let e=t.filter(R).map(tt)
t.find(nt)&&(e=e.concat(t.find(nt)[1].map(et))),n(e,U)}function st(t){var n
p("toprated","FindOnlinePlayers"),n=t.target,m(n),K=P({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'}),n.parentNode.replaceChild(K,n),M=l("highlightPlayersNearMyLvl"),M&&(V=N()),rt()}const it=[()=>b(),()=>j(s),()=>j(s.children[0]),()=>j(s.children[0].rows),()=>s.children[0].rows.length>2,()=>a(s.children[0].rows[1]).startsWith("Last Updated")]
function at(){it.every(T)&&function(){const n=v("td",s)[0]
n.children[0].className="fshTopListWrap"
const e=t({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
F(n,e),g(e,st)}()}export default at
//# sourceMappingURL=toprated-ef4218e8.js.map
