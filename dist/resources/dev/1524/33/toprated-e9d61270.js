import{c as t}from"./createInput-ef7d744f.js"
import{a as n}from"./allthen-259c1952.js"
import{w as e,g as r,p as s,d as i,G as a,t as o,bv as c,H as l,i as u,aJ as f,U as d,aP as m,W as p,bw as h,Q as v,b as g,o as b,j,ae as y}from"./calfSystem-37f70deb.js"
import{g as _}from"./guild-157be285.js"
import{p as w}from"./playerName-fa80c59b.js"
import{c as N}from"./currentGuildId-5ba5aa94.js"
import{o as L}from"./onlineDot-1818f1ec.js"
import{a as P,g as C}from"./levelHighlight-ade44d5c.js"
import{c as E}from"./createSpan-821c0562.js"
import{h as S}from"./hideElement-eb117e0e.js"
import{f as F}from"./functionPasses-bfa8b450.js"
import{i as H}from"./insertElementAfterBegin-98d25c7d.js"
import"./all-978030c9.js"
import"./intValue-55d66e09.js"
import"./valueText-6fb91f3a.js"
import"./insertElementBefore-0a7f2602.js"
function O(t){return function(t){return e({cmd:"findplayer",subcmd:"view",search_username:t})}(t)}function T(t){return function(t){return _({subcmd:"view",guild_id:t})}(t)}function x(t){return[t,a(t),(n=t,n.rows[0].cells[0].children[0]?Number(c.exec(n.rows[0].cells[0].children[0].href)[1]):-1)]
var n}function W(t,n){return n[0]===t[2]}function k(t,n){const e=t.find(o(W,n))
return e?e[1].push(n):t.push([n[2],[n]]),t}function B(t,n){return n[0]===t}function G(t,n){let e=n[0]
n[1].length<5&&(e=-1)
const r=t.find(o(B,e))
return r?r[1]=r[1].concat(n[1]):t.push([e,n[1]]),t}function I(t,n,e){const r=function(t,n){return t?n[t]:n}(t,e)
if(!n[r])return n[r]=!0,!0}let M,U
const A=[()=>M,t=>f(t)||t!==U,(t,n)=>n.last_login>=d-604800,(t,n)=>n.virtual_level>=P(),(t,n)=>n.virtual_level<=C()]
function D(t,n,e){u(t.rows[0],`<td>${L({last_login:e.last_login})}</td>`),function(t,n){return A.every((e=>e(t,n)))}(n,e)&&t.parentNode.parentNode.classList.add("lvlHighlight")}let J
function Q(){S(J)}function V(t,n){D(t[0],t[2],{last_login:String(n.last_activity),virtual_level:n.vl})}function $(t,n){return n.name===t[1]}function q(t,n){const e=t.find(o($,n))
e&&V(n,e)}function z(t,n){n.s&&v(n.r)&&V(t,n.r[0])}function K(t,n){n.s&&V(t,{last_activity:d-n.r.last_activity,vl:n.r.virtual_level})}function R(t){return-1!==t[0]}function X(t,n){return t.concat(n.members)}function Y(t,n){const e=(r=n.r.ranks,s="id",r.filter(o(I,s,{}))).reduce(X,[])
var r,s
t[1].forEach(o(q,e))}function Z(t,n){n.s&&Y(t,n)}function tt(t){return T(t[0]).then(o(Z,t))}function nt(t){return-1===t[0]}function et(t){return t[1]!==w()?O(t[1]).then(o(z,t)):h().then(o(K,t))}function rt(){const t=r(i,s).slice(4).map(x).reduce(k,[]).reduce(G,[])
let e=t.filter(R).map(tt)
t.find(nt)&&(e=e.concat(t.find(nt)[1].map(et))),n(e,Q)}function st(t){var n
p("toprated","FindOnlinePlayers"),n=t.target,m(n),J=E({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'}),n.parentNode.replaceChild(J,n),M=l("highlightPlayersNearMyLvl"),M&&(U=N()),rt()}const it=[()=>j(),()=>y(s),()=>y(s.children[0]),()=>y(s.children[0].rows),()=>s.children[0].rows.length>2,()=>a(s.children[0].rows[1]).startsWith("Last Updated")]
function at(){it.every(F)&&function(){const n=g("td",s)[0]
n.children[0].className="fshTopListWrap"
const e=t({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
H(n,e),b(e,st)}()}export default at
//# sourceMappingURL=toprated-e9d61270.js.map
