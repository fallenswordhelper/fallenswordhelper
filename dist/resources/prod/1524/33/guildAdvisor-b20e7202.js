import{n as t,m as s,h as a,a as e,t as n,a2 as r,A as c,i,x as l,b as o,p as d,c as u,M as f,J as m,a7 as p,G as h,B as v}from"./calfSystem-0708a9bb.js"
import{g as b}from"./getMembrList-4429ae67.js"
import{a as g}from"./addCommas-20414553.js"
import{a as j}from"./allthen-259c1952.js"
import{g as B}from"./guild-17d1b334.js"
import{c as y}from"./createTable-164d9526.js"
import{r as C}from"./replaceChild-39c1023b.js"
import{i as S}from"./insertHtmlAfterEnd-409ee96b.js"
import{l as T}from"./loadDataTables-2cf1d95b.js"
import"./currentGuildId-c383c2b8.js"
import"./cmdExport-3f5943d2.js"
import"./indexAjaxJson-7132e6ef.js"
import"./idb-9ebd251c.js"
import"./all-978030c9.js"
function w(s){return t("tfoot",s)}function x(t){return function(t){return B({subcmd:"advisor",subcmd2:"view",period:t})}(t)}const D=[{title:'<div class="fshBold">Member</div>'},{title:'<div class="fshBold">Lvl</div>',class:"dt-center"},{title:'<div class="fshBold">Rank</div>',class:"dt-center dt-nowrap"},{title:'<div class="fshBold">Gold From Deposits</div>',class:"dt-center"},{title:'<div class="fshBold">Gold From Tax</div>',class:"dt-center"},{title:'<div class="fshBold">Gold Total</div>',class:"dt-center"},{title:'<div class="fshBold">FSP</div>',class:"dt-center"},{title:'<div class="fshBold">Skill Cast</div>',class:"dt-center"},{title:'<div class="fshBold">Group Create</div>',class:"dt-center"},{title:'<div class="fshBold">Group Join</div>',class:"dt-center"},{title:'<div class="fshBold">Relic</div>',class:"dt-center"},{title:'<div class="fshBold">XP Contrib</div>',class:"dt-center"}]
function G(t,s){return s[t]?`<a href="${r}${s[t].id}">${t}</a>`:t}function R(t,s){return s[t]?s[t].level:""}function k(t,s){return s[t]?`<div class="fshAdvRank">${s[t].rank_name.trim()}</div>`:""}function A(t,s,a){$(t).DataTable({autoWidth:!1,columnDefs:[{targets:[1,3,4,5,6,7,8,9,10,11],orderSequence:["desc","asc"]}],columns:D,data:s,deferRender:!0,initComplete:a,lengthMenu:[[25,50,-1],[25,50,"All"]],pageLength:25,stateDuration:0,stateSave:!0})}function M(t,s){e(3,n(C,t,s))}function E(t,r,c){const i=s(),l=y({className:"fshDataTable fshXSmall hover"})
return a(i,l),a(l,r),e(3,A,[l,c,n(M,i,t)]),i}function L(t,s,a){return i(t.lastElementChild.lastElementChild,` day ${s},`),a.r}function F(t,s){return x(s).then(n(L,t,s))}function J(t,s,a){return s+t[a]}function N(t,s,a){return{...s,stats:s.stats.map(n(J,t[a].stats))}}function H(t,s){return t.map(n(N,s))}function P(t){return{player:t.player,stats:[t.stats[6],t.stats[7],t.stats[6]+t.stats[7],t.stats[1],t.stats[2],t.stats[3],t.stats[4],t.stats[8],t.stats[5]]}}function X(t,s){return s.stats.map(n(J,t))}function q(t,s){return`${t}<td><u>${s}</u></td>`}function I(t,s){const a=s.stats.map(g)
return[G(s.player.name,t),R(s.player.name,t),k(s.player.name,t)].concat(a)}function O(t,[s,...a]){const e=function(t){return t.slice(1).reduce(H,t[0]).map(P)}(a)
E(t,function(t){return w({innerHTML:`<tr><td class="fshRight" colspan="3">Total: </td>${t.slice(1).reduce(X,t[0].stats).map(g).reduce(q,"")}</tr>`})}(e),e.map(n(I,s)))}function W(t,s){return 0===s?h(t):v(t)}function _(t,s){const a=f(s.cells,W)
return a.splice(0,1,G(a[0],t),R(a[0],t),k(a[0],t)),a}function z(t,s){const e=function(t,s){return f(t.rows).slice(1,-1).map(n(_,s))}(t,s),r=function(t){const s=t.rows[t.rows.length-1].cloneNode(!0),e=w()
a(e,s)
const n=s.cells[0]
return n.className="fshRight",n.setAttribute("colspan","3"),e}(t)
E(t,r,e),function(){const t=m("custombutton",d)
0!==t.length&&S(t[0],`<span> <a href="${p}guild&subcmd=advisor&subcmd2=weekly">7-Day Summary</a></span>`)}()}function K(t){"weekly"===u.subcmd2?function(t){c('<span class="fshCurveContainer fshFlex"><span class="fshCurveEle fshCurveLbl fshOldSpinner"></span><span class="fshSpinnerMsg">&nbsp;Retrieving daily data ...</span></span>',t)
const s=[b(!1)].concat([1,2,3,4,5,6,7].map(n(F,t)))
j(s,n(O,t))}(t):b(!1).then(n(z,t))}function Q(){if(l())return
const t=o("table",d)[1]
t&&T().then((()=>K(t)))}export default Q
//# sourceMappingURL=guildAdvisor-b20e7202.js.map
