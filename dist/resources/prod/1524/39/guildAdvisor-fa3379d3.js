import{n as t,u as s,v as a,D as e,N as n,H as r,$ as l,m as i,h as c,a as o,t as d,a4 as u,B as f,i as m,y as p,b as v,p as h,c as b,K as g,a9 as j,C}from"./calfSystem-fe534823.js"
import{g as y}from"./getMembrList-b9f2a27e.js"
import{a as B}from"./addCommas-37fb94e0.js"
import{a as w}from"./allthen-b65a93f3.js"
import{g as S}from"./guild-cba71882.js"
import{i as D}from"./intValue-f6303c59.js"
import{c as T}from"./createTable-b974998c.js"
import{r as R}from"./replaceChild-0ba7ddeb.js"
import{i as k}from"./insertHtmlAfterEnd-c42defd3.js"
import{l as x}from"./loadDataTables-5f8ffe3f.js"
import"./currentGuildId-cf47b942.js"
import"./cmdExport-5c4a04e0.js"
import"./indexAjaxJson-6f85f3e9.js"
import"./idb-1aaf30fa.js"
import"./all-2b32eb82.js"
function G(s){return t("tfoot",s)}function A(t){return S({subcmd:"advisor",subcmd2:"view",period:t})}function E(t){return{player:{level:0,name:r(t.cells[0])},stats:[3,4,5,6,7,9,1,2,8].map((s=>{return a=t.cells[s],D(r(a))
var a}))}}function L(t){const s=a(t),r=e("#pCC table table",s)
return{r:n(r.rows).slice(1,-1).map(E),s:!0}}function M(t){return s({cmd:"guild",subcmd:"advisor",subcmd2:"view",period:t}).then(L)}const F=[{title:'<div class="fshBold">Member</div>'},{title:'<div class="fshBold">Lvl</div>',class:"dt-center"},{title:'<div class="fshBold">Rank</div>',class:"dt-center dt-nowrap"},{title:'<div class="fshBold">Gold From Deposits</div>',class:"dt-center"},{title:'<div class="fshBold">Gold From Tax</div>',class:"dt-center"},{title:'<div class="fshBold">Gold Total</div>',class:"dt-center"},{title:'<div class="fshBold">FSP</div>',class:"dt-center"},{title:'<div class="fshBold">Skill Cast</div>',class:"dt-center"},{title:'<div class="fshBold">Group Create</div>',class:"dt-center"},{title:'<div class="fshBold">Group Join</div>',class:"dt-center"},{title:'<div class="fshBold">Relic</div>',class:"dt-center"},{title:'<div class="fshBold">XP Contrib</div>',class:"dt-center"}]
function N(t,s){return s[t]?`<a href="${u}${s[t].id}">${t}</a>`:t}function H(t,s){return s[t]?s[t].level:""}function J(t,s){return s[t]?`<div class="fshAdvRank">${s[t].rank_name.trim()}</div>`:""}function P(t,s,a){$(t).DataTable({autoWidth:!1,columnDefs:[{targets:[1,3,4,5,6,7,8,9,10,11],orderSequence:["desc","asc"]}],columns:F,data:s,deferRender:!0,initComplete:a,lengthMenu:[[25,50,-1],[25,50,"All"]],pageLength:25,stateDuration:0,stateSave:!0})}function X(t,s){o(3,d(R,t,s))}function q(t,s,a){const e=i(),n=T({className:"fshDataTable fshXSmall hover"})
return c(e,n),c(n,s),o(3,P,[n,a,d(X,e,t)]),e}function I(t,s,a){return m(t.lastElementChild.lastElementChild,` day ${s},`),a.r}function K(t,s){return(a=s,l(A,M,a)).then(d(I,t,s))
var a}function O(t,s,a){return s+t[a]}function V(t,s,a){return{...s,stats:s.stats.map(d(O,t[a].stats))}}function W(t,s){return t.map(d(V,s))}function _(t){return{player:t.player,stats:[t.stats[6],t.stats[7],t.stats[6]+t.stats[7],t.stats[1],t.stats[2],t.stats[3],t.stats[4],t.stats[8],t.stats[5]]}}function z(t,s){return s.stats.map(d(O,t))}function Q(t,s){return`${t}<td><u>${s}</u></td>`}function U(t,s){const a=s.stats.map(B)
return[N(s.player.name,t),H(s.player.name,t),J(s.player.name,t)].concat(a)}function Y(t,[s,...a]){const e=function(t){return t.slice(1).reduce(W,t[0]).map(_)}(a)
q(t,function(t){return G({innerHTML:`<tr><td class="fshRight" colspan="3">Total: </td>${t.slice(1).reduce(z,t[0].stats).map(B).reduce(Q,"")}</tr>`})}(e),e.map(d(U,s)))}function Z(t,s){return 0===s?r(t):C(t)}function tt(t,s){const a=n(s.cells,Z)
return a.splice(0,1,N(a[0],t),H(a[0],t),J(a[0],t)),a}function st(t,s){const a=function(t,s){return n(t.rows).slice(1,-1).map(d(tt,s))}(t,s),e=function(t){const s=t.rows[t.rows.length-1].cloneNode(!0),a=G()
c(a,s)
const e=s.cells[0]
return e.className="fshRight",e.setAttribute("colspan","3"),a}(t)
q(t,e,a),function(){const t=g("custombutton",h)
0!==t.length&&k(t[0],`<span> <a href="${j}guild&subcmd=advisor&subcmd2=weekly">7-Day Summary</a></span>`)}()}function at(t){"weekly"===b.subcmd2?function(t){f('<span class="fshCurveContainer fshFlex"><span class="fshCurveEle fshCurveLbl fshOldSpinner"></span><span class="fshSpinnerMsg">&nbsp;Retrieving daily data ...</span></span>',t)
const s=[y(!1)].concat([1,2,3,4,5,6,7,8].map(d(K,t)))
w(s,d(Y,t))}(t):y(!1).then(d(st,t))}function et(){if(p())return
const t=v("table",h)[1]
t&&x().then((()=>at(t)))}export default et
//# sourceMappingURL=guildAdvisor-fa3379d3.js.map
